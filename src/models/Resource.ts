import mongoose, { Schema, Document, models, model } from "mongoose";

export interface IResource extends Document {
  title: string;
  description: string;
  category: string;
  content: string;
  image: string;
  author: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ResourceSchema = new Schema<IResource>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      enum: ["Mental Health", "Relationships", "Workplace", "Consultancy"],
      trim: true,
    },
    content: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
    author: {
      type: String,
      default: "Hope Bridge Team",
    },
    published: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Resource = models.Resource || model<IResource>("Resource", ResourceSchema);

export default Resource;
