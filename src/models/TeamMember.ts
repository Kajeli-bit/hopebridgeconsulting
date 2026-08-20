import mongoose, { Schema, Document, models, model } from "mongoose";

export interface ITeamMember extends Document {
  name: string;
  role: string;
  bio: string;
  image: string;
  initials: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const TeamMemberSchema = new Schema<ITeamMember>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    role: {
      type: String,
      required: [true, "Role is required"],
      trim: true,
    },
    bio: {
      type: String,
      required: [true, "Bio is required"],
      trim: true,
    },
    image: {
      type: String,
      default: "",
    },
    initials: {
      type: String,
      default: "",
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Auto-generate initials from name if not provided
TeamMemberSchema.pre("save", function (next) {
  if (!this.initials && this.name) {
    this.initials = this.name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  }
  next();
});

const TeamMember = models.TeamMember || model<ITeamMember>("TeamMember", TeamMemberSchema);

export default TeamMember;
