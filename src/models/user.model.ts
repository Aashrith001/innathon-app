import { Document, Schema, Model, model } from 'mongoose';

export interface IUser extends Document {
    username: string,
    password: string,
    fullName: string,
    phoneNumber: string,
    email: string,
}

const userSchema: Schema = new Schema({
    username: { type: String, trim: true, unique: true },
    password: { type: String },
    fullName: { type: String, require: true },
    phoneNumber: { type: String, trim: true, required: true },
    email: { type: String, require: 'Email Id is required', trim: true, required: true, unique: true },
})

export const User: Model<IUser> = model<IUser>('User', userSchema);