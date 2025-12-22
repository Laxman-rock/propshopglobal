import { ArrowRightIcon } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const properties = [
  {
    id: 1,
    image: "/figmaAssets/p2-570x370-jpg.png",
    price: "4,200,000 AED",
    title: "SOUTH BAY 4",
    location: "South Bay 4,  South Bay,  Dubai South......",
    beds: "4 Beds",
    baths: "6 Baths",
    sqft: "3565 sqft",
  },
  {
    id: 2,
    image: "/figmaAssets/p6-570x370-jpg.png",
    price: "2,899,999 AED",
    title: "COVE-II",
    location: "The Cove II Building 9,  The Cove ll,  Dubai....",
    beds: "2 Beds",
    baths: "2 Baths",
    sqft: "1,111 sqft",
  },
  {
    id: 3,
    image: "/figmaAssets/p9-570x370-jpg.png",
    price: "1,250,000 AED",
    title: "DIAMONDZ BY DANUBE",
    location: "Diamondz By Danube,  Jumeirah Lake ....",
    beds: "Studio",
    baths: "1 Baths",
    sqft: "419 sqft",
  },
  {
    id: 4,
    image: "/figmaAssets/p16-570x370-jpg.png",
    price: "1,300,000 AED",
    title: "STELLA RESIDENCES",
    location: "The Stella Residences,  Al Furjan,  Dubai",
    beds: "1 Beds",
    baths: "2 Baths",
    sqft: "902 sqft",
  },
];

export const PropertyHighlightsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-8 md:gap-[55px]">
      <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 w-full">
        <div className="flex flex-col items-start gap-2 md:gap-3">
          <h1 className="font-h-1 font-[number:var(--h-1-font-weight)] text-icons text-xl md:text-2xl lg:text-[length:var(--h-1-font-size)] tracking-[var(--h-1-letter-spacing)] leading-[var(--h-1-line-height)] [font-style:var(--h-1-font-style)] text-left">
            Our Exclusive Listings
          </h1>
          <p className="max-w-[1018px] font-p1-regular font-[number:var(--p1-regular-font-weight)] text-placeholder text-sm md:text-base lg:text-[length:var(--p1-regular-font-size)] tracking-[var(--p1-regular-letter-spacing)] leading-[var(--p1-regular-line-height)] [font-style:var(--p1-regular-font-style)] text-left">
            Discover our latest off-plan properties in prime locations. Invest
            early and secure your dream home with exclusive launch offers.
          </p>
        </div>
        <Link href="/projects">
          <Button className="h-12 md:h-[70px] w-full md:w-[206px] bg-app-primary hover:bg-app-primary/90 rounded-xl gap-2">
            <span className="font-p2-semibold font-[number:var(--p2-semibold-font-weight)] text-for-bg-dark text-sm md:text-[length:var(--p2-semibold-font-size)] tracking-[var(--p2-semibold-letter-spacing)] leading-[var(--p2-semibold-line-height)] [font-style:var(--p2-semibold-font-style)]">
              See All Properties
            </span>
            <ArrowRightIcon className="w-[15px] h-[15px]" />
          </Button>
        </Link>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-[30px] w-full">
        {properties.map((property) => (
          <Link href={`/property/${property.id}`} key={property.id}>
          <Card
            className="border border-solid border-[#e9e9e9] bg-for-bg-dark rounded-xl overflow-hidden h-full cursor-pointer hover-elevate"
            data-testid={`card-offplan-property-${property.id}`}
          >
            <CardContent className="p-0 flex flex-col h-full">
              <div className="relative h-[200px] md:h-[239px] flex-shrink-0">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${property.image})` }}
                />
                <div className="absolute inset-0 bg-icons opacity-10" />
                <Badge className="absolute top-3 left-3 md:top-[21px] md:left-[21px] h-[26px] md:h-[30px] gap-1 bg-app-primary hover:bg-app-primary rounded-md">
                  <img
                    className="w-3 h-3 md:w-3.5 md:h-3.5"
                    alt="Icon"
                    src="/figmaAssets/icon-4.svg"
                  />
                  <span className="font-p4-semibold font-[number:var(--p4-semibold-font-weight)] text-for-bg-dark text-[10px] md:text-[length:var(--p4-semibold-font-size)] tracking-[var(--p4-semibold-letter-spacing)] leading-[var(--p4-semibold-line-height)] [font-style:var(--p4-semibold-font-style)]">
                    OFF PLAN PROPERTIES
                  </span>
                </Badge>
                <div className="absolute bottom-3 left-3 md:bottom-[19px] md:left-[21px] h-[35px] md:h-[39px] px-3 md:px-[17px] flex items-center bg-for-bg-dark rounded-md">
                  <span className="font-p3-semibold font-[number:var(--p3-semibold-font-weight)] text-icons text-xs md:text-[length:var(--p3-semibold-font-size)] tracking-[var(--p3-semibold-letter-spacing)] leading-[var(--p3-semibold-line-height)] [font-style:var(--p3-semibold-font-style)]">
                    {property.price}
                  </span>
                </div>
              </div>

              <div className="flex flex-col flex-1 px-4 pt-4 pb-4 md:px-[21px] md:pt-[18px] md:pb-[21px]">
                <h3 className="font-p-medium font-[number:var(--p-medium-font-weight)] text-icons text-sm md:text-[length:var(--p-medium-font-size)] tracking-[var(--p-medium-letter-spacing)] leading-[var(--p-medium-line-height)] [font-style:var(--p-medium-font-style)] mb-2 text-left min-h-[20px] md:min-h-[24px]">
                  {property.title}
                </h3>
                <p className="font-p2-regular font-[number:var(--p2-regular-font-weight)] text-placeholder text-xs md:text-[length:var(--p2-regular-font-size)] tracking-[var(--p2-regular-letter-spacing)] leading-[var(--p2-regular-line-height)] [font-style:var(--p2-regular-font-style)] mb-3 md:mb-[13px] text-left min-h-[16px] md:min-h-[20px]">
                  {property.location}
                </p>

                <div className="flex items-center gap-1.5 md:gap-2 mb-4 md:mb-[18px]">
                  <div className="flex items-center gap-1">
                    <img
                      className="w-3 h-3 md:w-3.5 md:h-3.5"
                      alt="Beds icon"
                      src="/figmaAssets/icon.svg"
                    />
                    <span className="font-p3-regular font-[number:var(--p3-regular-font-weight)] text-icons text-[10px] md:text-xs tracking-[var(--p3-regular-letter-spacing)] leading-[var(--p3-regular-line-height)] whitespace-nowrap">
                      {property.beds}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <img
                      className="w-3 h-3 md:w-3.5 md:h-3.5"
                      alt="Baths icon"
                      src="/figmaAssets/icon-18.svg"
                    />
                    <span className="font-p3-regular font-[number:var(--p3-regular-font-weight)] text-icons text-[10px] md:text-xs tracking-[var(--p3-regular-letter-spacing)] leading-[var(--p3-regular-line-height)] whitespace-nowrap">
                      {property.baths}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <img
                      className="w-3 h-3 md:w-3.5 md:h-3.5"
                      alt="Area icon"
                      src="/figmaAssets/icon-1.svg"
                    />
                    <span className="font-p3-regular font-[number:var(--p3-regular-font-weight)] text-icons text-[10px] md:text-xs tracking-[var(--p3-regular-letter-spacing)] leading-[var(--p3-regular-line-height)] whitespace-nowrap">
                      {property.sqft}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center gap-2 pt-3 md:pt-4 border-t border-solid border-[#e9e9e9] mt-auto">
                  <span className="font-p3-regular font-[number:var(--p3-regular-font-weight)] text-icons text-xs md:text-[length:var(--p3-regular-font-size)] tracking-[var(--p3-regular-letter-spacing)] leading-[var(--p3-regular-line-height)] [font-style:var(--p3-regular-font-style)]">
                    For Sale
                  </span>
                  <img
                    className="h-[28px] w-[90px] md:h-[35px] md:w-[113px]"
                    alt="Actions"
                    src="/figmaAssets/div-ms-auto.svg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};
