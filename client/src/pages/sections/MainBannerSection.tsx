import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

const servicesData = [
  {
    icon: "/figmaAssets/div-elementor-element-2.svg",
    title: "Buy a property",
    description:
      "Benefit from expert advice and insights to make informed property decisions.",
    buttonText: "Find a home",
    buttonVariant: "outline" as const,
    link: "/projects?status=for-sale",
  },
  {
    icon: "/figmaAssets/div-elementor-element.svg",
    title: "Sell a property",
    description:
      "Showcase your property to a wide audience and achieve the best market value.",
    buttonText: "Place an ad",
    buttonVariant: "default" as const,
    link: "/contact",
  },
  {
    icon: "/figmaAssets/div-elementor-element-1.svg",
    title: "Rent a property",
    description:
      "Explore a diverse range of rental options to find the perfect home for your needs.",
    buttonText: "Find a rental",
    buttonVariant: "outline" as const,
    link: "/projects?status=for-rent",
  },
];

export const MainBannerSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-8 md:gap-[55px] py-6 md:py-8 px-4 md:px-6 lg:px-8">
      <div className="inline-flex flex-col items-center gap-3">
        <h1 className="font-h-1 font-[number:var(--h-1-font-weight)] text-[#1b1b1a] text-2xl md:text-3xl lg:text-[length:var(--h-1-font-size)] text-center tracking-[var(--h-1-letter-spacing)] leading-[var(--h-1-line-height)] [font-style:var(--h-1-font-style)]">
          What We Are Providing
        </h1>

        <p className="max-w-4xl font-[number:var(--p1-regular-font-weight)] text-placeholder text-sm md:text-base lg:text-[length:var(--p1-regular-font-size)] font-p1-regular text-center tracking-[var(--p1-regular-letter-spacing)] leading-[var(--p1-regular-line-height)] [font-style:var(--p1-regular-font-style)]">
          Discover how Prop shop Global simplifies property transactions with
          expert guidance, diverse listings, and innovative tools for buying,
          selling, and renting.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 w-full max-w-[1400px]">
        {servicesData.map((service, index) => (
          <Card
            key={index}
            className={`w-full min-h-[350px] md:min-h-[398px] bg-white rounded-xl border-0 ${
              index === 1 ? "shadow-[0px_10px_40px_#181a2014]" : ""
            }`}
          >
            <CardContent className="flex flex-col items-center p-4 md:p-0 h-full pt-[12px] pb-12">
              <div className="flex justify-center items-center pt-8 pb-8 md:pt-[50px] md:pb-[50px]">
                <img
                  className="w-[70px] h-[100px] md:w-[90px] md:h-[125px]"
                  alt={service.title}
                  src={service.icon}
                />
              </div>

              <h3 className="[font-family:'Roboto',Helvetica] font-medium text-[#181a20] text-lg md:text-xl text-center tracking-[0] leading-[normal] mb-3 md:mb-[15px]">
                {service.title}
              </h3>

              <p className="w-full max-w-[355px] [font-family:'Roboto',Helvetica] font-normal text-[#575757] text-sm md:text-base text-center tracking-[0] leading-[normal] mb-3 md:mb-[15px] px-4 md:px-0">
                {service.description}
              </p>

              <Link href={service.link}>
                <Button
                  variant={service.buttonVariant}
                  className={`h-auto mt-3 md:mt-[15px] mb-12 px-6 md:px-[43px] py-3 md:py-[17px] rounded-xl ${
                    service.buttonVariant === "default"
                      ? "bg-[#ef7f1a] hover:bg-[#ef7f1a]/90"
                      : "bg-white border-[#ef7f1a] hover:bg-[#ef7f1a]/5"
                  }`}
                  data-testid={`button-service-${service.buttonText.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <span className={`[font-family:'Roboto',Helvetica] font-medium text-base md:text-xl tracking-[0] leading-[normal] ${
                    service.buttonVariant === "default" ? "text-white" : "text-[#ef7f1a]"
                  }`}>
                    {service.buttonText}
                  </span>
                  <ArrowRightIcon className={`w-4 h-4 md:w-5 md:h-5 ml-[5px] ${
                    service.buttonVariant === "default" ? "text-white" : "text-[#ef7f1a]"
                  }`} />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
