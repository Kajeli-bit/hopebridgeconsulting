import type { Metadata } from "next";
import BookClient from "./BookClient";

export const metadata: Metadata = {
  title: "Book a Counseling or Consultancy Session | Hope Bridge Consulting",
  description:
    "Book a counseling or consultancy session with Hope Bridge Consulting and Consultancy in Dar es Salaam, Tanzania — individual counseling, marriage and couples counseling, family counseling, organizational development, and project consultancy.",
};

export default function BookPage() {
  return <BookClient />;
}
