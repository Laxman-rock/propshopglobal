import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const areaCards = [
  {
    title: "DUBAI HILL ESTATE",
    image: "/figmaAssets/link-7.png",
    className: "col-span-1 row-span-1",
  },
  {
    title: "DUBAI CREEK HARBOUR",
    image: "/figmaAssets/h7-c2-jpg-1.png",
    className: "col-span-1 row-span-1",
  },
  {
    title: "JUMRIEAH VILLAGE CIRCLE",
    image: "/figmaAssets/link-8.png",
    className: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    title: "DUBAI SOUTH",
    image: "/figmaAssets/link-6.png",
    className: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    title: "DOWNTOWN DUBAI",
    image: "/figmaAssets/link-5.png",
    className: "col-span-1 row-span-1",
  },
  {
    title: "DUBAI MARINA",
    image: "/figmaAssets/h7-c2-jpg-2.png",
    className: "col-span-1 row-span-1",
  },
  {
    title: "PALM JUMAIRAH",
    image: "/figmaAssets/link-8.png",
    className: "col-span-1 row-span-1",
  },
  {
    title: "DUBAI ISLAND",
    image: "/figmaAssets/link-7.png",
    className: "col-span-1 md:col-span-3 row-span-1",
  },
];

export const PopularAreasSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center gap-6 md:gap-10 w-full py-6 md:py-10">
      <header className="flex flex-col items-center justify-center gap-3 w-full px-4">
        <h2 className="font-h-1 font-[number:var(--h-1-font-weight)] text-icons text-xl md:text-2xl lg:text-[length:var(--h-1-font-size)] text-center tracking-[var(--h-1-letter-spacing)] leading-[var(--h-1-line-height)] [font-style:var(--h-1-font-style)]">
          Popular Areas In Dubai
        </h2>
      </header>

      <div className="w-full max-w-[1700px] px-4 md:px-8 lg:px-[110px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 auto-rows-[200px] md:auto-rows-[280px] lg:auto-rows-[369px]">
          {areaCards.map((area, index) => (
            <Card
              key={index}
              className={`${area.className} relative overflow-hidden rounded-none border-0 cursor-pointer transition-transform hover:scale-[1.02]`}
            >
              <CardContent className="p-0 h-full relative">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${area.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(26,28,33,0.5)] to-transparent opacity-80" />
                <div className="absolute top-4 left-4 md:top-[45px] md:left-[43px] [font-family:'Roboto',Helvetica] font-semibold text-for-bg-dark text-sm md:text-lg tracking-[0] leading-normal">
                  {area.title}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
