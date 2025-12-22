import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

const propertyTypes = [
  {
    type: "APARTMENTS",
    count: "10 Estates",
    description:
      "Discover luxury and tranquility in exquisite beachfront villas.",
    image: "/figmaAssets/h4-t2-jpg.png",
    link: "/projects?type=apartment",
  },
  {
    type: "VILLAS",
    count: "8 Residences",
    description:
      "Enjoy contemporary comfort in vibrant condominium communities.",
    image: "/figmaAssets/h4-t4-jpg.png",
    link: "/projects?type=villa",
  },
  {
    type: "TOWNHOUSES",
    count: "12 Rooms",
    description: "Relish simplicity and coziness in modern studio living.",
    image: "/figmaAssets/h4-t5-jpg.png",
    link: "/projects?type=townhouse",
  },
  {
    type: "COMMERCIALS",
    count: "5 Spaces",
    description: "Experience industrial charm in spacious downtown lofts.",
    image: "/figmaAssets/h4-t3-jpg.png",
    link: "/projects",
  },
  {
    type: "MANSIONS",
    count: "15 Units",
    description: "Embrace urban sophistication in stylish city apartments.",
    image: "/figmaAssets/h4-t1-jpg.png",
    link: "/projects?type=penthouse",
  },
];

export const FeaturedPropertiesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-8 md:gap-[55px]">
      <header className="flex flex-col items-start gap-2 md:gap-3 w-full">
        <h2 className="font-h-1 font-[number:var(--h-1-font-weight)] text-icons text-xl md:text-2xl lg:text-[length:var(--h-1-font-size)] tracking-[var(--h-1-letter-spacing)] leading-[var(--h-1-line-height)] [font-style:var(--h-1-font-style)] text-left">
          Explore New Lifestyles
        </h2>

        <p className="max-w-[1147px] font-p1-regular font-[number:var(--p1-regular-font-weight)] text-placeholder text-sm md:text-base lg:text-[length:var(--p1-regular-font-size)] tracking-[var(--p1-regular-letter-spacing)] leading-[var(--p1-regular-line-height)] [font-style:var(--p1-regular-font-style)] text-left">
          Browse our diverse selection of apartments, from cozy studios to
          luxurious penthouses, each offering unique features and amenities.
        </p>
      </header>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-[30px] w-full">
        {propertyTypes.map((property, index) => (
          <Link 
            key={index}
            href={property.link}
            className="flex flex-col items-start gap-4 md:gap-[27px] cursor-pointer group"
            data-testid={`link-lifestyle-${property.type.toLowerCase()}`}
          >
            <Card className="w-full shadow-[0px_10px_20px_#181a200d] bg-for-bg-dark rounded-xl overflow-hidden border-0 transition-transform duration-200 group-hover:scale-[1.02]">
              <CardContent className="p-0">
                <div
                  className="w-full h-[140px] md:h-[190px] bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${property.image})` }}
                />

                <div className="px-4 py-4 md:px-5 md:py-[26px] space-y-1 md:space-y-2">
                  <h3 className="font-p-medium font-[number:var(--p-medium-font-weight)] text-icons text-sm md:text-[length:var(--p-medium-font-size)] tracking-[var(--p-medium-letter-spacing)] leading-[var(--p-medium-line-height)] [font-style:var(--p-medium-font-style)]">
                    {property.type}
                  </h3>

                  <p className="text-placeholder font-p3-regular font-[number:var(--p3-regular-font-weight)] text-xs md:text-[length:var(--p3-regular-font-size)] tracking-[var(--p3-regular-letter-spacing)] leading-[var(--p3-regular-line-height)] [font-style:var(--p3-regular-font-style)]">
                    {property.count}
                  </p>
                </div>
              </CardContent>
            </Card>

            <p className="flex items-center justify-center self-stretch font-p2-regular font-[number:var(--p2-regular-font-weight)] text-placeholder text-xs md:text-[length:var(--p2-regular-font-size)] text-center tracking-[var(--p2-regular-letter-spacing)] leading-[var(--p2-regular-line-height)] [font-style:var(--p2-regular-font-style)]">
              {property.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};
