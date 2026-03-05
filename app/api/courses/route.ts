import { NextResponse } from "next/server";
import { COURSES } from "@/data/courses";

export async function GET(): Promise<NextResponse> {
  try {
    const courses = COURSES.map(c => ({
      id: c.id,
      slug: c.slug,
      title: c.title,
      description: c.description,
      price: c.price,
      currency: c.currency,
      thumbnail: c.thumbnail
    }));

    return NextResponse.json({ data: courses }, { status: 200 });
  } catch (error) {
    console.error("Courses API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch courses" },
      { status: 500 }
    );
  }
}
