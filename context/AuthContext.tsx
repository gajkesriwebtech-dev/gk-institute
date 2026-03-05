
"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { apiFetch } from '@/lib/api-client';

interface User {
    id: string;
    name: string;
    email: string;
    role: 'student' | 'admin';
}

interface AuthContextType {
    user: User | null;
    enrollments: string[]; // List of course IDs
    isLoading: boolean;
    login: (email: string, password: string) => Promise<void>;
    signup: (name: string, email: string, password: string) => Promise<void>;
    logout: () => void;
    addEnrollment: (courseId: string) => void;
    isEnrolled: (courseId: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [enrollments, setEnrollments] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Bootstrap session from server-side auth cookie validation.
    useEffect(() => {
        const bootstrap = async () => {
            try {
                const res = await apiFetch('/api/dashboard', { method: 'GET' });
                const payload = await res.json();

                if (res.ok && payload?.data) {
                    const serverUser: User = {
                        id: payload.data.id,
                        name: payload.data.name,
                        email: payload.data.email,
                        role: payload.data.role,
                    };
                    setUser(serverUser);
                    setEnrollments(payload.data.enrolledCourseIds || []);
                } else {
                    setUser(null);
                    setEnrollments([]);
                }
            } catch {
                setUser(null);
                setEnrollments([]);
            } finally {
                setIsLoading(false);
            }
        };

        void bootstrap();
    }, []);

    const login = async (email: string, password: string) => {
        setIsLoading(true);
        try {
            const res = await apiFetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Login failed');
            }

            const payload = data?.data;
            if (!payload?.user) {
                throw new Error('Invalid login response');
            }

            setUser(payload.user);
            setEnrollments(payload.enrolledCourseIds || []);
        } catch (error: any) {
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    const signup = async (name: string, email: string, password: string) => {
        setIsLoading(true);
        try {
            const res = await apiFetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.error || 'Registration failed');
            }

            const payload = data?.data;
            if (!payload?.user) {
                throw new Error('Invalid registration response');
            }

            setUser(payload.user);
            setEnrollments(payload.enrolledCourseIds || []);
        } finally {
            setIsLoading(false);
        }
    };

    const logout = () => {
        void apiFetch('/api/auth/logout', { method: 'POST' });
        setUser(null);
        setEnrollments([]);
    };

    const addEnrollment = (courseId: string) => {
        if (!enrollments.includes(courseId)) {
            setEnrollments(prev => [...prev, courseId]);
        }
    };

    const isEnrolled = (courseId: string) => enrollments.includes(courseId);

    return (
        <AuthContext.Provider value={{ user, enrollments, isLoading, login, signup, logout, addEnrollment, isEnrolled }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
