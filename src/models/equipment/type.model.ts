import { Document, Schema, Model, model } from 'mongoose';

export interface IEquipmentType extends Document {
    name: string,
    cost: number,
}

const equipmentTypeSchema: Schema = new Schema({
    name: { type: String, trim: true, unique: true, required: true },
    cost: { type: Number, default: 0 },
}).index({ name: 1 }, { unique: true, collation: { locale: 'en', strength: 2 } })

export const EquipmentType: Model<IEquipmentType> = model<IEquipmentType>('EquipmentType', equipmentTypeSchema);