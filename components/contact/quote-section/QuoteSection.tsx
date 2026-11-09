import React from "react";
import ContactInfo from "@/components/contact/contact-info/ContactInfo";
import QuoteForm from "@/components/contact/quote-form/QuoteForm";

export default function QuoteSection() {
  return (
    <section className="w-full py-14 lg:py-20 bg-[#f7f9fb]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Heading, intro copy, 3 contact cards, social icons */}
          <div className="lg:col-span-6 pt-2">
            <ContactInfo />
          </div>

          {/* Right Column: Multi-layered 3D Request a Quote Card */}
          <div className="lg:col-span-6">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}

