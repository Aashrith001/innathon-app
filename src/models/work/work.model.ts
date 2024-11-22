import { Document, Schema, Model, model, Types } from 'mongoose';
import { IWorkType } from './type.model';
import { IEquipment } from '../equipment/equipment.model';

export interface IWork extends Document {
    name: string,
    type: Types.ObjectId | IWorkType,
    equipments: [{ equipment: IEquipment, days: number }],
    days: number,
    cost: number
}

const workSchema: Schema = new Schema({
    name: { type: String, trim: true, unique: true, required: true },
    type: { type: Schema.Types.ObjectId, ref: 'WorkType', required: true },
    equipments: [{
        equipment: { type: Schema.Types.ObjectId, ref: 'Equipment', required: true },
        days: { type: Number, default: 1 },
    }],
    days: { type: Number, required: true },
    cost: { type: Number, required: true },
}).index({ type: 1, name: 1 }, { unique: true, collation: { locale: 'en', strength: 2 } })

export const Work: Model<IWork> = model<IWork>('Work', workSchema);