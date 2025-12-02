import mongoose, { mongo } from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["student", "alumni"],
      required: true,
    },
  },
  {
    timestamps: true, // it shows created and updated at....
  }
);
const UserModel = mongoose.model("users", UserSchema);

export { UserModel };
