import { Document, Schema, Model, model, Types } from 'mongoose';
import { IEquipmentType } from './type.model';

export interface IEquipment extends Document {
    name: string,
    type: Types.ObjectId | IEquipmentType
}

const equipmentSchema: Schema = new Schema({
    name: { type: String, trim: true, unique: true, required: true },
    type: { type: Schema.Types.ObjectId, ref: 'EquipmentType', required: true },
}).index({ type: 1, name: 1 }, { unique: true, collation: { locale: 'en', strength: 2 } })

export const Equipment: Model<IEquipment> = model<IEquipment>('Equipment', equipmentSchema);