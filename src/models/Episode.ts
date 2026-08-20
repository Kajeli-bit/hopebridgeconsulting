import mongoose, { Schema, Document, models, model } from "mongoose";

export interface IEpisode extends Document {
  number: number;
  title: string;
  description: string;
  category: string;
  date: string;
  audioUrl: string;
  image: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const EpisodeSchema = new Schema<IEpisode>(
  {
    number: {
      type: Number,
      required: [true, "Episode number is required"],
      unique: true,
    },
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
      enum: [
        "Mental Health",
        "Relationships",
        "Family",
        "Workplace",
        "Leadership & Organizations",
        "Community Development",
        "Personal Growth",
      ],
      trim: true,
    },
    date: {
      type: String,
      required: [true, "Date is required"],
    },
    audioUrl: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
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

const Episode = models.Episode || model<IEpisode>("Episode", EpisodeSchema);

export default Episode;
