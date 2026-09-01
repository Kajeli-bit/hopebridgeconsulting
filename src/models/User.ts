import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  email: string;
  name: string;
  password: string;
  role: "admin" | "user";
  isInvited: boolean;
  inviteToken: string | null;
  inviteExpiry: Date | null;
  createdAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    name: { type: String, required: true },
    password: { type: String, required: false },
    role: { type: String, enum: ["admin", "user"], default: "user" },
    isInvited: { type: Boolean, default: false },
    inviteToken: { type: String, default: null },
    inviteExpiry: { type: Date, default: null },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
