import { Document, Schema, Model, model } from 'mongoose';
import { IWorkType } from './work/type.model';

export interface IActivity extends Document {
    name: string;
    workTypeSequences: [
        {
            workType: IWorkType;
            parentWorkType?: IWorkType
        }
    ];
}

const activitySchema: Schema = new Schema({
    name: { type: String, required: true, unique: true },
    workTypeSequences: [
        {
            workType: { type: Schema.Types.ObjectId, ref: 'WorkType', required: true },
            parentWorkType: { type: Schema.Types.ObjectId, ref: 'WorkType' },
        }
    ]
});

export const Activity: Model<IActivity> = model<IActivity>('Activity', activitySchema);