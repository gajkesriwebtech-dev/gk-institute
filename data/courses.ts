import { FULL_PROGRAM_CATALOG } from "./courses.data";
import { UnifiedCourse, CourseModule } from "@/types";

/**
 * @deprecated Use UnifiedCourse instead from '@/types'
 */
export interface Course extends UnifiedCourse { }

export const COURSES: UnifiedCourse[] = FULL_PROGRAM_CATALOG.map(program => ({
    ...program,
    slug: program.slug ?? program.id,
    overview: program.description,
    modules: program.modules ?? [],
    brochurePdf: (program as any).brochurePdf ?? "",
}));
