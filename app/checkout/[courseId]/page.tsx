import { redirect } from "next/navigation";

export default async function LegacyCheckoutByCoursePage({
  params
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = await params;
  redirect(`/checkout?course=${encodeURIComponent(courseId)}`);
}
