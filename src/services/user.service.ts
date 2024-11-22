import { IUser, User } from "../models/user.model";


export const getAllUsers = async (): Promise<IUser[]> => {
    const users = await User.find({});
    return users;
}