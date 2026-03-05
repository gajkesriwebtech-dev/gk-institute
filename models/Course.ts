import { Schema, model, models, type InferSchemaType } from "mongoose";

const courseSchema = new Schema(
  {
    id: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    category: { type: String, default: "" },
    description: { type: String, required: true },
    overview: { type: String, default: "" },
    thumbnail: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    originalPrice: { type: Number, default: 0 },
    currency: { type: String, default: "INR" },
    duration: { type: String, default: "" },
    highlights: { type: [String], default: [] },
    keyFeatures: { type: [String], default: [] },
    jobRoles: { type: [String], default: [] },
    programType: { type: String, enum: ['pro', 'advanced', 'short'], default: 'pro' },
    isPublished: { type: Boolean, default: true },
    syllabusPdf: { type: String, default: "" },
    brochurePdf: { type: String, default: "" },
    modules: [{
      title: { type: String, required: true },
      topics: { type: [String], default: [] }
    }],
    outcomes: [{
      id: { type: Number, required: true },
      title: { type: String, required: true },
      description: { type: String, required: true }
    }]
  },
  { timestamps: true }
);

export type CourseDocument = InferSchemaType<typeof courseSchema> & {
  _id: string;
};

const CourseModel = models.Course || model("Course", courseSchema);

export default CourseModel;
