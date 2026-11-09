import ContactUsScreen from "@/screens/contact-us/ContactUsScreen";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | MJ Limos Vancouver",
  description:
    "Request a free quote for Vancouver limo service, airport transfers, black car service, Whistler trips, and corporate chauffeured transportation.",
};

export default function ContactUsPage() {
  return <ContactUsScreen />;
}

