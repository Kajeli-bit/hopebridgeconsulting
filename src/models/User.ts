import mongoose, { Schema, Document } from "mongoose";

export const USER_ROLES = ["superadmin", "admin", "user"] as const;
export type UserRole = (typeof USER_ROLES)[number];

export interface IUser extends Document {
  email: string;
  name: string;
  password: string;
  role: UserRole;
  createdAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    name: { type: String, required: true },
    password: { type: String, required: false },
    role: { type: String, enum: USER_ROLES, default: "user" },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
