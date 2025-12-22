import React, { useState, useEffect, useRef } from "react";
import { LayoutContainer } from "@/components/layout/LayoutContainer";
import { AgentsSection } from "./sections/AgentsSection";
import { BlogSection } from "./sections/BlogSection";
import { FeaturedPropertiesSection } from "./sections/FeaturedPropertiesSection";
import { HeroImageSection } from "./sections/HeroImageSection";
import { MainBannerSection } from "./sections/MainBannerSection";
import { PopularAreasSection } from "./sections/PopularAreasSection";
import { PropertyCardGridSection } from "./sections/PropertyCardGridSection";
import { PropertyHighlightsSection } from "./sections/PropertyHighlightsSection";
import { SearchOptionsSection } from "./sections/SearchOptionsSection";
import { VideoShowcaseSection } from "./sections/VideoShowcaseSection";

const clientLogos = [
  {
    src: "/figmaAssets/client-logo-02-2.png",
    alt: "Client logo",
  },
  {
    src: "/figmaAssets/nakheel-logo-2048x959.png",
    alt: "Nakheel logo",
  },
  {
    src: "/figmaAssets/dubai-south-2.png",
    alt: "Dubai south",
  },
  {
    src: "/figmaAssets/bnnr-2.png",
    alt: "Bnnr",
  },
  {
    src: "/figmaAssets/damac-2.png",
    alt: "Damac",
  },
  {
    src: "/figmaAssets/emaar-1.png",
    alt: "Emaar",
  },
];

const ANIMATION_DURATION = 30; // seconds
const TOTAL_DOTS = 3;

export const HomePage = (): JSX.Element => {
  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const animationRef = useRef<number>(0);
  const startTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    const updatePagination = () => {
      const elapsed = (Date.now() - startTimeRef.current) / 1000;
      const progress = (elapsed % ANIMATION_DURATION) / ANIMATION_DURATION;
      const dotIndex = Math.floor(progress * TOTAL_DOTS);
      setActiveDotIndex(dotIndex);
      animationRef.current = requestAnimationFrame(updatePagination);
    };

    animationRef.current = requestAnimationFrame(updatePagination);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);
  return (
    <div className="flex flex-col items-center justify-center gap-12 md:gap-16 lg:gap-[100px] relative bg-for-bg-dark w-full">
      <HeroImageSection />
      <MainBannerSection />
      
      <VideoShowcaseSection />
      
      <LayoutContainer>
        <PropertyCardGridSection />
      </LayoutContainer>
      
      <LayoutContainer>
        <PropertyHighlightsSection />
      </LayoutContainer>
      
      <LayoutContainer>
        <FeaturedPropertiesSection />
      </LayoutContainer>
      
      <LayoutContainer>
        <SearchOptionsSection />
      </LayoutContainer>
      
      <PopularAreasSection />
      
      <LayoutContainer>
        <AgentsSection />
      </LayoutContainer>

      <LayoutContainer className="flex flex-col items-center gap-8 md:gap-12 lg:gap-[88px]">
        <h2 className="w-full mt-[-1.00px] font-[number:var(--p-medium-font-weight)] text-icons text-base md:text-lg lg:text-[length:var(--p-medium-font-size)] font-p-medium text-center tracking-[var(--p-medium-letter-spacing)] leading-[var(--p-medium-line-height)] [font-style:var(--p-medium-font-style)]">
          Trusted by the world&apos;s best
        </h2>

        <div className="w-full overflow-hidden relative">
          <style>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .logo-scroll-container {
              display: flex;
              gap: 2.5rem;
              animation: scroll 30s linear infinite;
            }
            .logo-scroll-container:hover {
              animation-play-state: paused;
            }
            @media (min-width: 768px) {
              .logo-scroll-container {
                gap: 2.5rem;
              }
            }
            @media (min-width: 1024px) {
              .logo-scroll-container {
                gap: 4.5rem;
              }
            }
          `}</style>
          <div className="logo-scroll-container">
            {/* First set of logos */}
            {clientLogos.map((logo, index) => (
              <img
                key={`client-logo-${index}`}
                className="h-auto max-h-[60px] md:max-h-[90px] lg:max-h-[126px] w-auto max-w-[120px] md:max-w-[160px] lg:max-w-[211px] object-contain flex-shrink-0"
                alt={logo.alt}
                src={logo.src}
              />
            ))}
            {/* Duplicate set for seamless loop */}
            {clientLogos.map((logo, index) => (
              <img
                key={`client-logo-duplicate-${index}`}
                className="h-auto max-h-[60px] md:max-h-[90px] lg:max-h-[126px] w-auto max-w-[120px] md:max-w-[160px] lg:max-w-[211px] object-contain flex-shrink-0"
                alt={logo.alt}
                src={logo.src}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 w-full">
          {Array.from({ length: TOTAL_DOTS }).map((_, index) => (
            <div
              key={`pagination-dot-${index}`}
              className={`h-2.5 rounded-lg transition-all duration-300 ${
                index === activeDotIndex
                  ? "w-[11px] bg-[#222222]"
                  : "w-2.5 bg-[#c0c0c0]"
              }`}
            />
          ))}
        </div>
      </LayoutContainer>

      <BlogSection />
    </div>
  );
};
