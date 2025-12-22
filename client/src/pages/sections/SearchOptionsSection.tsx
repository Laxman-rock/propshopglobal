import { ArrowRightIcon, CheckIcon } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Find excellent deals",
    description:
      "Selling a property doesn't have to be complicated. Explore easy, transparent and expert-guided options designed to help you get the best value with minimal effort",
  },
  {
    title: "Friendly host & Fast support",
    description:
      "Get quick help from our expert team whenever you need it whether you're listing, negotiating, or finalizing your sale.",
  },
  {
    title: "List your own property",
    description:
      "Easily upload property details, images, and pricing. Our platform helps you reach more buyers and sell faster.",
  },
];

export const SearchOptionsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-2.5">
      <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-[25px] w-full">
        <div className="flex flex-col w-full lg:w-1/2 lg:max-w-[674px] items-start gap-6 md:gap-[30px]">
          <div className="flex flex-col items-start gap-4 md:gap-5 w-full">
            <h2 className="[font-family:'Roboto',Helvetica] font-bold text-[#181a20] text-2xl md:text-3xl lg:text-[40px] tracking-[0] leading-tight md:leading-[normal] text-left">
              Let&apos;s Find The Best Option For You
            </h2>

            <p className="[font-family:'Roboto',Helvetica] font-normal text-[#575757] text-sm md:text-lg tracking-[0] leading-normal md:leading-[normal] text-left">
              Selling a property doesn&apos;t have to be complicated. Explore
              easy, transparent and expert-guided options designed to help you
              get the best value with minimal effort
            </p>
          </div>

          <div className="flex flex-col items-start gap-6 md:gap-[30px] w-full">
            <div className="flex flex-col items-start gap-6 md:gap-[30px] w-full">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start gap-3 md:gap-4 w-full"
                >
                  <div className="inline-flex items-center gap-3 md:gap-[15px]">
                    <div className="flex items-center justify-center w-5 h-5 md:w-[25px] md:h-[25px] bg-[#088000] rounded-full">
                      <CheckIcon
                        className="w-2.5 h-2.5 md:w-3 md:h-3 text-white"
                        strokeWidth={3}
                      />
                    </div>

                    <h3 className="[font-family:'Roboto',Helvetica] font-medium text-[#575757] text-base md:text-xl tracking-[0] leading-[normal]">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#575757] text-sm md:text-lg tracking-[0] leading-normal md:leading-[normal] max-w-[593px]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <Link href="/contact">
              <Button
                variant="outline"
                className="w-full md:w-[333px] h-auto px-6 md:px-[43px] py-3 md:py-[17px] bg-white rounded-xl border-[#ef7f1a] hover:bg-[#ef7f1a]/5"
              >
                <span className="[font-family:'Roboto',Helvetica] font-medium text-[#ef7f1a] text-base md:text-xl tracking-[0] leading-[normal]">
                  Reach Us Now
                </span>
                <ArrowRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#ef7f1a] ml-[5px]" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative w-full lg:flex-1 h-[300px] md:h-[450px] lg:h-[600px]">
          <div
            className="absolute top-0 left-0 w-[45%] md:w-[40%] h-[70%] md:h-[75%] bg-cover bg-center rounded-lg"
            style={{ backgroundImage: "url(/figmaAssets/h1-jpg.png)" }}
          />

          <div className="absolute right-0 bottom-0 w-[65%] md:w-[70%] h-[65%] md:h-[85%]">
            <div
              className="w-full h-full rounded-[20px] bg-cover bg-center"
              style={{ backgroundImage: "url(/figmaAssets/h2-jpg.png)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
