import mongoose, { Schema, Document } from "mongoose";

export interface IBooking extends Document {
  serviceType: string;
  service: string;
  date: string;
  time: string;
  format: string;
  name: string;
  phone: string;
  email: string;
  communication: string;
  notes: string;
  status: "pending" | "confirmed" | "cancelled";
  createdAt: Date;
}

const BookingSchema = new Schema<IBooking>(
  {
    serviceType: { type: String, required: true },
    service: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    format: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, default: "" },
    communication: { type: String, default: "" },
    notes: { type: String, default: "" },
    status: { type: String, enum: ["pending", "confirmed", "cancelled"], default: "pending" },
  },
  { timestamps: true }
);

export default mongoose.models.Booking || mongoose.model<IBooking>("Booking", BookingSchema);
