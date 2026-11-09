import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BookingModalProvider } from "@/components/common/booking-modal/BookingModalContext";
import SmoothScrollProvider from "@/components/common/smooth-scroll/SmoothScrollProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MJ Limos | Vancouver Limo, Black Car & Chauffeur Service",
  description: "Vancouver Limo, Black Car & Chauffeur Service. Luxury transportation, airport transfers, corporate travel, Whistler transfers, and executive chauffeured services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-[#fcfcfd] text-slate-900"
        suppressHydrationWarning
      >
        <SmoothScrollProvider>
          <BookingModalProvider>{children}</BookingModalProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
