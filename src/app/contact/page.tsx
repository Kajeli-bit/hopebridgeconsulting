import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Hope Bridge Consulting | Counseling & Consultancy in Dar es Salaam",
  description:
    "Get in touch with Hope Bridge Consulting and Consultancy in Dar es Salaam, Tanzania. Call, WhatsApp, or email for counseling or organizational consultancy support.",
};

export default function ContactPage() {
  return <ContactClient />;
}
