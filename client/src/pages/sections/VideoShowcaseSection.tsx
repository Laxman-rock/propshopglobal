import propertyShowcaseVideo from "@assets/generated_videos/dubai_luxury_property_showcase.mp4";

export const VideoShowcaseSection = (): JSX.Element => {
  return (
    <section className="w-full" data-testid="section-video-showcase">
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          data-testid="video-property-showcase"
        >
          <source src={propertyShowcaseVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="text-[#ef7f1a] text-sm md:text-base uppercase tracking-widest mb-2 md:mb-3" data-testid="text-video-subtitle">
            Discover Your Dream Property
          </p>
          <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold max-w-[900px] leading-tight" data-testid="text-video-title">
            Row Houses, Island Properties, Apartments & Villas
          </h2>
          <p className="text-[#ef7f1a]/90 text-sm md:text-lg mt-3 md:mt-4 max-w-[600px]" data-testid="text-video-description">
            Explore our exclusive collection of luxury properties in Dubai's most sought-after locations
          </p>
        </div>
      </div>
    </section>
  );
};
