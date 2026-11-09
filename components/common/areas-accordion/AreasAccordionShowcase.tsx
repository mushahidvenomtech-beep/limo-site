'use client';

import React from 'react';
import AccordionGallery, { AccordionGalleryItem } from '@/components/common/accordion-gallery/AccordionGallery';

interface AreasAccordionShowcaseProps {
  title?: string;
  subtitle?: string;
  showSubtitle?: boolean;
  className?: string;
}

const row1Areas: AccordionGalleryItem[] = [
  {
    image: '/images/areas/vancouver.jpg',
    label: 'Vancouver',
    subtitle: 'Transit estimate →',
    link: '/service-areas/kitsilano-bc',
    alt: 'Vancouver Luxury Limo Chauffeur Service'
  },
  {
    image: '/images/areas/whistler.jpg',
    label: 'Whistler',
    subtitle: 'Transit estimate →',
    link: '/services/whistler-transfers',
    alt: 'Whistler Shuttle & Transfer Service'
  },
  {
    image: '/images/areas/yvr-airport.jpg',
    label: 'YVR Airport',
    subtitle: 'Transit estimate →',
    link: '/services/airport-limo-service',
    alt: 'YVR Airport Luxury Limo Transportation'
  },
  {
    image: '/images/areas/richmond.jpg',
    label: 'Richmond',
    subtitle: 'Transit estimate →',
    link: '/service-areas/richmond-bc',
    alt: 'Richmond Chauffeur Service'
  }
];

const row2Areas: AccordionGalleryItem[] = [
  {
    image: '/images/areas/burnaby.jpg',
    label: 'Burnaby',
    subtitle: 'Transit estimate →',
    link: '/service-areas/burnaby-bc',
    alt: 'Burnaby Luxury Transportation'
  },
  {
    image: '/images/areas/surrey.jpg',
    label: 'Surrey',
    subtitle: 'Transit estimate →',
    link: '/service-areas/surrey-bc',
    alt: 'Surrey Limousine Service'
  },
  {
    image: '/images/areas/north-vancouver.jpg',
    label: 'North Vancouver',
    subtitle: 'Transit estimate →',
    link: '/service-areas/fairview-bc',
    alt: 'North Vancouver Limo Service'
  },
  {
    image: '/images/areas/fraser-valley.jpg',
    label: 'Fraser Valley',
    subtitle: 'Transit estimate →',
    link: '/service-areas/killarney-bc',
    alt: 'Fraser Valley Transportation Services'
  }
];

export default function AreasAccordionShowcase({
  title = 'Areas We Serve',
  subtitle,
  showSubtitle = false,
  className = ''
}: AreasAccordionShowcaseProps) {
  return (
    <section className={`relative w-full py-16 lg:py-24 overflow-hidden ${className}`}>
      {/* 0.4 Opacity Smoke Background Layer */}
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(14,165,233,0.06),transparent_70%),radial-gradient(ellipse_60%_50%_at_20%_80%,rgba(99,102,241,0.05),transparent_60%)] opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
            {title}
          </h2>
          {showSubtitle && subtitle && (
            <p className="text-xs sm:text-sm text-slate-500 mt-2.5 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* 2-Row Accordion Gallery Matching Mockup */}
        <div className="flex flex-col gap-4 md:gap-5 w-full">
          {/* Row 1: Vancouver, Whistler, YVR Airport, Richmond */}
          <div className="w-full">
            <AccordionGallery
              items={row1Areas}
              defaultIndex={0}
              expandRatio={0.48}
              height={290}
              gap={12}
              radius={18}
              duration={0.65}
              tilt={7}
              parallax={0.45}
              accentColor="#38bdf8"
              overlayColor="#020617"
              grayscale={true}
              trigger="hover"
              className="w-full"
            />
          </div>

          {/* Row 2: Burnaby, Surrey, North Vancouver, Fraser Valley */}
          <div className="w-full">
            <AccordionGallery
              items={row2Areas}
              defaultIndex={1}
              expandRatio={0.48}
              height={290}
              gap={12}
              radius={18}
              duration={0.65}
              tilt={7}
              parallax={0.45}
              accentColor="#60a5fa"
              overlayColor="#020617"
              grayscale={true}
              trigger="hover"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

