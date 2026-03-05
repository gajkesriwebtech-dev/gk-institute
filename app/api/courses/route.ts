import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/server/db";
import CourseModel from "@/models/Course";

export async function GET(): Promise<NextResponse> {
  try {
    await connectToDatabase();
    const courses = await CourseModel.find({ isPublished: true })
      .select("slug title description price currency thumbnail")
      .lean();

    return NextResponse.json({ data: courses }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch courses" },
      { status: 500 }
    );
  }
}
