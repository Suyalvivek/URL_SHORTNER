import { UserModel } from "../models/user-schema.js";
export const registerUser =async (userObject) =>{
    try {
    const doc = await UserModel.create(userObject);// create user in db
    return doc;
    } catch (error) {
        throw error;
    }
}