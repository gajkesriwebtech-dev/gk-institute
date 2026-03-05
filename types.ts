
import React from 'react';

export interface Course {
  id: string;
  title: string;
  description: string;
  progress: number;
  totalModules: number;
  completedModules: number;
  thumbnail: string;
  lastAccessed: string;
}

export interface Task {
  id: string;
  title: string;
  courseId: string;
  courseName: string;
  dueDate: string;
  status: 'pending' | 'submitted' | 'graded' | 'overdue';
  type: 'quiz' | 'project' | 'peer-review';
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'student' | 'mentor' | 'admin';
}

export enum DashboardView {
  OVERVIEW = 'overview',
  COURSES = 'courses',
  TASKS = 'tasks',
  PROFILE = 'profile',
}

export interface NavItem {
  label: string;
  path?: string;
  href?: string;
  icon?: React.ReactNode;
  children?: NavItem[];
  description?: string;
  group?: string; // Used for categorizing dropdown items
}

// --- Roadmap Data Models ---

export type RoadmapTopicType = 'core' | 'optional' | 'advanced' | 'milestone';

export interface RoadmapTopic {
  id: string;
  title: string;
  description: string;
  type: RoadmapTopicType;
  estimatedHours?: number; // Time to learn
}

export interface RoadmapStage {
  id: string;
  label: string;
  description?: string;
  topics: RoadmapTopic[];
}

export interface Roadmap {
  id: string;
  slug: string; // URL friendly identifier
  title: string;
  description: string;
  category: 'Technology' | 'Design' | 'Marketing' | 'Business';
  lastUpdated: string;
  stages: RoadmapStage[];
  relatedCourseIds: string[]; // Foreign keys to Course
}

// --- Public Catalog Models ---

export interface InfographicItem {
  id: number;
  title: string;
  description: string;
}

export interface CourseModule {
  title: string;
  topics: string[];
}

export interface UnifiedCourse {
  // Identification
  id: string;           // Physical ID
  slug: string;         // URL friendly ID

  // Basic Metadata
  title: string;
  category: string;
  description: string;
  overview?: string;

  // Visuals
  thumbnail: string;

  // Pricing & Duration
  price: number;
  originalPrice: number;
  currency?: string;
  duration: string;

  // Detailed Content
  highlights: string[];
  keyFeatures: string[];
  jobRoles: string[];

  // Nested Structures
  modules: CourseModule[]; // Standardized naming to 'modules'
  outcomes: InfographicItem[];

  // File Links
  syllabusPdf?: string;
  brochurePdf?: string;

  // Strategy/Internal
  programType: 'pro' | 'foundation' | 'master';
  isPublished?: boolean;
}

/**
 * @deprecated Use UnifiedCourse instead
 */
export interface Program extends UnifiedCourse { }
