import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IBrochureLead extends Document {
    name: string;
    email: string;
    phone: string;
    courseInterest: string;
    source: string;
    createdAt: Date;
}

const BrochureLeadSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    courseInterest: { type: String, required: true },
    source: { type: String, default: 'brochure_download' },
    createdAt: { type: Date, default: Date.now },
});

// Use the existing model if it exists, or create a new one
// Mapping to the specific collection 'institute_brochure_downloads'
const BrochureLead: Model<IBrochureLead> = mongoose.models.BrochureLead ||
    mongoose.model<IBrochureLead>('BrochureLead', BrochureLeadSchema, 'institute_brochure_downloads');

export default BrochureLead;
