import { Document, Schema, Model, model, Types } from 'mongoose';
import { IEquipment } from './equipment/equipment.model';
import { ILocation } from './location.model';

export enum EquipmentStatus {
    Maintenance = 'maintenance',
    Running = 'running'
}


export interface IDaywiseActivity extends Document {
    equipment: string | Types.ObjectId | IEquipment;
    status: EquipmentStatus;
    history: {
        date: Date;
        days: number;
        location: string | Types.ObjectId | ILocation;
        workingDays: number;
    }[];
    activity: {
        date: Date;
        checkInTime: Date;
        checkOutTime: Date;
        idealTime: number; // In hours
        fuel: number;
    }[];
}

const daywiseActivitySchema: Schema = new Schema({
    equipment: { type: Schema.Types.ObjectId, ref: 'Equipment', required: true },
    status: { type: String, enum: Object.values(EquipmentStatus), required: true },
    history: [
        {
            date: { type: Date, required: true },
            days: { type: Number, required: true },
            location: { type: Schema.Types.ObjectId, ref: 'Location', required: true },
            workingDays: { type: Number, required: true }
        }
    ],
    activity: [
        {
            date: { type: Date, required: true },
            checkInTime: { type: Date, required: true },
            checkOutTime: { type: Date, required: true },
            idealTime: { type: Number, required: true },
            fuel: { type: Number, required: true }
        }
    ]
});

export const DaywiseActivity: Model<IDaywiseActivity> = model<IDaywiseActivity>('DaywiseActivity', daywiseActivitySchema);