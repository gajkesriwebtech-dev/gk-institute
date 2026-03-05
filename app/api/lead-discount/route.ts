import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { fullName, email, phone, courseId, courseTitle } = body;

        // TODO: Save lead to database and trigger email notification

        // Simulate success
        return NextResponse.json({
            success: true,
            message: 'Lead captured successfully and catalog sent to email.'
        }, { status: 200 });

    } catch (error) {
        console.error('Lead capture error:', error);
        return NextResponse.json({
            success: false,
            message: 'Internal server error'
        }, { status: 500 });
    }
}
