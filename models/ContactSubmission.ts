import { Schema, model, models, type InferSchemaType } from "mongoose";

const contactSubmissionSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, trim: true },
    message: { type: String, required: true, trim: true },
    courseSlug: { type: String, trim: true },
    sourcePage: { type: String, trim: true },
    createdAt: { type: Date, default: Date.now },
    isRead: { type: Boolean, default: false }
  },
  { versionKey: false }
);

contactSubmissionSchema.index({ email: 1, createdAt: -1 });
contactSubmissionSchema.index({ isRead: 1, createdAt: -1 });

export type ContactSubmissionDocument = InferSchemaType<
  typeof contactSubmissionSchema
> & {
  _id: string;
};

const ContactSubmissionModel =
  models.ContactSubmission || model("ContactSubmission", contactSubmissionSchema);

export default ContactSubmissionModel;
