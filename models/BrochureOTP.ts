import mongoose, { Schema, Document } from "mongoose";

export interface IBrochureOTP extends Document {
    email: string;
    otp: string;
    expiresAt: Date;
    createdAt: Date;
}

const BrochureOTPSchema: Schema = new Schema({
    email: { type: String, required: true, index: true },
    otp: { type: String, required: true },
    expiresAt: {
        type: Date,
        required: true,
        index: { expires: 0 } // TTL index: deletes document at expiresAt
    },
    createdAt: { type: Date, default: Date.now }
});

// Primary index for lookup
BrochureOTPSchema.index({ email: 1, createdAt: -1 });

export default mongoose.models.BrochureOTP || mongoose.model<IBrochureOTP>("BrochureOTP", BrochureOTPSchema);
