"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import BookingModal from "./BookingModal";

export interface BookingFormInitialData {
  name?: string;
  email?: string;
  phone?: string;
  passengers?: string;
  date?: string;
  time?: string;
  pickupLocation?: string;
  dropoffLocation?: string;
  serviceType?: string;
  vehicleType?: string;
  hours?: string;
  stop?: string;
  note?: string;
}

interface BookingModalContextType {
  isOpen: boolean;
  openBookingModal: (initialData?: BookingFormInitialData) => void;
  closeBookingModal: () => void;
  initialData: BookingFormInitialData;
}

const BookingModalContext = createContext<BookingModalContextType | undefined>(undefined);

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialData, setInitialData] = useState<BookingFormInitialData>({});

  const openBookingModal = (data?: BookingFormInitialData) => {
    if (data) {
      setInitialData(data);
    } else {
      setInitialData({});
    }
    setIsOpen(true);
  };

  const closeBookingModal = () => {
    setIsOpen(false);
  };

  // Global click interceptor for all "Book Now" / "Book Online" CTAs across the entire website
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a, button, [role='button']");
      if (!target) return;

      const href = target.getAttribute("href") || "";
      const rawText = (target.textContent || "").trim();
      const text = rawText.toLowerCase();

      // Never intercept direct phone calls
      if (text.includes("call now") || href.startsWith("tel:")) {
        return;
      }

      const isDataBook = target.hasAttribute("data-book-now");
      const isHashBook =
        href === "#book-now" ||
        href === "#book" ||
        href === "/book-now" ||
        href === "#booking" ||
        href === "#book-online";

      // Match button/link CTA text (ensuring it's a short CTA button, not a body paragraph)
      const isShortCta = rawText.length <= 40;
      const isBookText =
        isShortCta &&
        (text.includes("book now") ||
          text.includes("book online") ||
          text.includes("book your ride") ||
          text.includes("book your limo") ||
          text.includes("book today") ||
          text.includes("get the quote") ||
          text.includes("get a quote") ||
          text.includes("reserve now") ||
          text.includes("reserve online") ||
          text.includes("reserve today") ||
          text.includes("reserve your"));

      if (isDataBook || isHashBook || isBookText) {
        e.preventDefault();
        e.stopPropagation();

        // Detect if parent card mentions a vehicle
        let vehicle = target.getAttribute("data-vehicle") || undefined;
        const service = target.getAttribute("data-service") || undefined;

        if (!vehicle) {
          const card = target.closest("div, article");
          const cardHeading = card?.querySelector("h3, h4, .font-bold")?.textContent?.trim() || "";
          if (/sedan/i.test(cardHeading)) vehicle = "Executive Sedan";
          else if (/continental/i.test(cardHeading)) vehicle = "Lincoln Continental";
          else if (/gls/i.test(cardHeading)) vehicle = "Mercedes-Benz GLS";
          else if (/yukon|suburban/i.test(cardHeading)) vehicle = "Extended SUV";
          else if (/sprinter/i.test(cardHeading)) vehicle = "Mercedes Sprinter";
          else if (/passenger van/i.test(cardHeading)) vehicle = "Luxury Passenger Van";
          else if (/mini.?coach/i.test(cardHeading)) vehicle = "Executive Mini-Coach";
          else if (/suv/i.test(cardHeading)) vehicle = "Luxury SUV";
        }

        openBookingModal({ vehicleType: vehicle, serviceType: service });
      }
    };

    document.addEventListener("click", handleGlobalClick, true);
    return () => document.removeEventListener("click", handleGlobalClick, true);
  }, []);

  return (
    <BookingModalContext.Provider
      value={{ isOpen, openBookingModal, closeBookingModal, initialData }}
    >
      {children}
      <BookingModal
        isOpen={isOpen}
        onClose={closeBookingModal}
        initialData={initialData}
      />
    </BookingModalContext.Provider>
  );
}

export function useBookingModal() {
  const context = useContext(BookingModalContext);
  if (!context) {
    throw new Error("useBookingModal must be used within a BookingModalProvider");
  }
  return context;
}
