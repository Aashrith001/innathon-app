import { Document, Schema, Model, model } from 'mongoose';

export interface IWorkType extends Document {
    name: string,
}

const workTypeSchema: Schema = new Schema({
    name: { type: String, trim: true, unique: true, required: true },
}).index({ name: 1 }, { unique: true, collation: { locale: 'en', strength: 2 } })

export const WorkType: Model<IWorkType> = model<IWorkType>('WorkType', workTypeSchema);