import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import BrochureLead from '@/models/BrochureLead';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, course } = body;

        // Minimal validation
        if (!name || !email || !phone) {
            return NextResponse.json(
                { success: false, error: 'Name, email, and phone are required.' },
                { status: 400 }
            );
        }

        await connectDB();

        // Create the lead in the collection 'institute_brochure_downloads'
        // (The collection name is handled in the model definition)
        await BrochureLead.create({
            name,
            email,
            phone,
            courseInterest: course || 'Not Specified',
            source: 'brochure_download'
        });

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error('Brochure API Error:', error);
        return NextResponse.json(
            { success: false, error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
