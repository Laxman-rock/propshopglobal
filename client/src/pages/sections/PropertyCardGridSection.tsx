import { ArrowRightIcon } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const projectsData = [
  {
    image: "/figmaAssets/image-4.png",
    price: "1.35M – 2.75M AED",
    title: "RISE BY ATHLON",
    location: "Dubailand, Dubai",
    bedrooms: "1–3 BR",
    area: "936–2,152 sq ft",
  },
  {
    image: "/figmaAssets/image-5.png",
    price: "8.10M+ AED",
    title: "EMAAR OASIS PHASE-II",
    location: "Dubai (Emaar Master Community)",
    bedrooms: "2–5 BR",
    area: "1,000–5,000+ sq ft",
  },
  {
    image: "/figmaAssets/image-6.png",
    price: "1.90M – ~3.3M+ AED",
    title: "DUBAI ISLAND (ELLINGTON)",
    location: "Dubai Islands, Dubai",
    bedrooms: "1–4 BR",
    area: "820–6,085 sq ft",
  },
  {
    image: "/figmaAssets/image-7.png",
    price: "2.4M+ AED",
    title: "EMAAR HEIGHTS",
    location: "Dubai (Emaar Development Zone)",
    bedrooms: "1–4 BR",
    area: "750–3,000+ sq ft",
  },
];

export const PropertyCardGridSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-6 md:gap-[30px] w-full">
      <header className="flex flex-col items-start gap-2 w-full">
        <h1 className="w-full font-h-1 font-[number:var(--h-1-font-weight)] text-icons text-2xl md:text-3xl lg:text-[length:var(--h-1-font-size)] tracking-[var(--h-1-letter-spacing)] leading-[var(--h-1-line-height)] [font-style:var(--h-1-font-style)] text-left">
          Projects
        </h1>

        <p className="w-full font-p1-regular font-[number:var(--p1-regular-font-weight)] text-placeholder text-sm md:text-base lg:text-[length:var(--p1-regular-font-size)] tracking-[var(--p1-regular-letter-spacing)] leading-[var(--p1-regular-line-height)] [font-style:var(--p1-regular-font-style)] text-left">
          Explore premium residential developments offering curated lifestyles,
          modern architecture, and exceptional living experiences across Dubai.
        </p>
      </header>

      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-[30px]">
          {projectsData.map((project, index) => (
            <Card
              key={index}
              className="flex flex-col items-start gap-4 p-4 md:p-6 lg:p-[30px] bg-[#ffffff] rounded-xl border border-solid border-[#d9d9d9] w-full"
              data-testid={`card-project-${index}`}
            >
              <CardContent className="p-0 w-full">
                <div className="relative w-full h-[250px] md:h-[300px] lg:h-[400px] rounded-lg overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt={project.title}
                    src={project.image}
                  />

                  <Badge className="absolute bottom-3 left-3 md:bottom-4 md:left-4 bg-for-bg-dark rounded-md px-3 py-2 md:px-[17px] md:py-[11px] h-auto border-0">
                    <span className="font-p3-semibold font-[number:var(--p3-semibold-font-weight)] text-icons text-xs md:text-[length:var(--p3-semibold-font-size)] tracking-[var(--p3-semibold-letter-spacing)] leading-[var(--p3-semibold-line-height)] [font-style:var(--p3-semibold-font-style)]">
                      {project.price}
                    </span>
                  </Badge>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-4 w-full mt-4">
                  <div className="flex flex-col flex-1 items-start gap-2">
                    <h3 className="w-full font-p-medium font-[number:var(--p-medium-font-weight)] text-[#1e1e1e] text-base md:text-[length:var(--p-medium-font-size)] tracking-[var(--p-medium-letter-spacing)] leading-[var(--p-medium-line-height)] [font-style:var(--p-medium-font-style)]">
                      {project.title}
                    </h3>

                    <p className="font-p2-regular font-[number:var(--p2-regular-font-weight)] text-[#757575] text-sm md:text-[length:var(--p2-regular-font-size)] tracking-[var(--p2-regular-letter-spacing)] leading-[var(--p2-regular-line-height)] [font-style:var(--p2-regular-font-style)]">
                      {project.location}
                    </p>

                    <div className="flex items-center gap-2 md:gap-3 flex-wrap">
                      <img
                        className="w-4 h-4"
                        alt="Bedrooms icon"
                        src="/figmaAssets/icon-3.svg"
                      />

                      <span className="font-p3-regular font-[number:var(--p3-regular-font-weight)] text-icons text-xs md:text-[length:var(--p3-regular-font-size)] tracking-[var(--p3-regular-letter-spacing)] leading-[var(--p3-regular-line-height)] [font-style:var(--p3-regular-font-style)]">
                        {project.bedrooms}
                      </span>

                      <img
                        className="w-4 h-4"
                        alt="Area icon"
                        src="/figmaAssets/icon-1.svg"
                      />

                      <span className="font-p3-regular font-[number:var(--p3-regular-font-weight)] text-icons text-xs md:text-[length:var(--p3-regular-font-size)] tracking-[var(--p3-regular-letter-spacing)] leading-[var(--p3-regular-line-height)] [font-style:var(--p3-regular-font-style)]">
                        {project.area}
                      </span>
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="h-auto px-6 md:px-[43px] py-3 md:py-[17px] bg-white rounded-xl border-[#ef7f1a] hover:bg-[#ef7f1a]/5"
                      data-testid={`button-upcoming-${index}`}
                    >
                      <span className="[font-family:'Roboto',Helvetica] font-medium text-[#ef7f1a] text-base md:text-xl tracking-[0] leading-[normal]">
                        UPCOMING
                      </span>
                      <ArrowRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#ef7f1a] ml-[5px]" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
