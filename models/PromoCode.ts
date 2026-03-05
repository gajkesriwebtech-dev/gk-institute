import { Schema, model, models, type InferSchemaType } from "mongoose";

const promoCodeSchema = new Schema(
  {
    code: { type: String, required: true, unique: true, uppercase: true },
    discountPercent: { type: Number, required: true, min: 1, max: 100 },
    isActive: { type: Boolean, default: true },
    expiresAt: { type: Date, default: null },
    usageLimit: { type: Number, default: null },
    usedCount: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export type PromoCodeDocument = InferSchemaType<typeof promoCodeSchema> & {
  _id: string;
};

const PromoCodeModel = models.PromoCode || model("PromoCode", promoCodeSchema);

export default PromoCodeModel;
