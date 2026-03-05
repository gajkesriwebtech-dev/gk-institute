import { Schema, model, models, type InferSchemaType } from "mongoose";

const enrollmentSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", default: null },
    userEmail: { type: String, required: true, lowercase: true, trim: true },
    courseId: { type: String, required: true },
    amountPaid: { type: Number, required: true, min: 0 },
    currency: { type: String, required: true, default: "INR" },
    stripeSessionId: { type: String, default: null, unique: true, sparse: true },
    paymentMethod: {
      type: String,
      enum: ["stripe", "offline"],
      required: true
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "pending"
    },
    verificationCode: { type: String, default: null, unique: true, sparse: true },
    isClaimed: { type: Boolean, default: false },
    verifiedAt: { type: Date, default: null }
  },
  { timestamps: true }
);

enrollmentSchema.index({ userEmail: 1, courseId: 1 }, { unique: true });

export type EnrollmentDocument = InferSchemaType<typeof enrollmentSchema> & {
  _id: string;
};

const EnrollmentModel =
  models.Enrollment || model("Enrollment", enrollmentSchema);

export default EnrollmentModel;
