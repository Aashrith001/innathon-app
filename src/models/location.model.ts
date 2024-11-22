import { Document, Schema, Model, model, Types } from 'mongoose';
import { IActivity } from './activity.model';

export interface IActivityCount {
    activity: Types.ObjectId | IActivity;
    count: number;
}

export interface ILocation extends Document {
    name: string;
    activities: [IActivityCount];
}

const locationSchema: Schema = new Schema({
    name: { type: String, required: true },
    activities: [
        {
            activity: { type: Schema.Types.ObjectId, ref: 'Activity', required: true },
            count: { type: Number, required: true, default: 0 }
        }
    ]
});

export const Location: Model<ILocation> = model<ILocation>('Location', locationSchema);