import mongoose, { mongo } from "mongoose";

const UserSchema = new mongoose.Schema({});
const UserModel = mongoose.model("users", UserSchema);

export { UserModel };
