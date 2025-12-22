import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const blogPosts = [
  {
    slug: "dubai-real-estate-market-trends-2024",
    image: "/figmaAssets/dubai_skyline_luxury_f84236ad.jpg",
    title: "Dubai Real Estate Market Hits Record High in 2025",
    description:
      "Dubai's property market continues its remarkable growth trajectory, with transaction volumes reaching unprecedented levels.",
    imageClass: "bg-[url(/figmaAssets/dubai_skyline_luxury_f84236ad.jpg)] bg-cover bg-center",
    imageHeight: "h-[200px] md:h-[298px]",
    contentHeight: "h-auto md:h-[193px]",
    date: "Dec 1, 2024",
  },
  {
    slug: "top-neighborhoods-dubai-2025",
    image: "/figmaAssets/dubai_skyline_luxury_29f1ffa8.jpg",
    title: "Top 5 Emerging Neighborhoods in Dubai for 2025",
    description:
      "From Dubai South to Jumeirah Village Circle, explore the hottest areas attracting investors and homebuyers alike.",
    imageClass: "bg-[url(/figmaAssets/dubai_skyline_luxury_29f1ffa8.jpg)] bg-cover bg-center",
    imageHeight: "h-[200px] md:h-[274px]",
    contentHeight: "h-auto md:h-[216px]",
    date: "Nov 28, 2024",
  },
  {
    slug: "off-plan-vs-ready-properties",
    image: "/figmaAssets/modern_luxury_apartm_51824214.jpg",
    title: "Off-Plan vs Ready Properties: Which Is Right for You?",
    description:
      "Weighing the pros and cons of buying off-plan versus move-in ready properties in Dubai's dynamic market.",
    imageClass: "",
    imageHeight: "h-[200px] md:h-[299px]",
    contentHeight: "h-auto md:h-[193px]",
    date: "Nov 22, 2024",
  },
];

export const AgentsSection = (): JSX.Element => {
  return (
    <section className="flex w-full items-start gap-[30px] relative">
      <div className="flex flex-col w-full items-start gap-6 md:gap-10 relative">
        <header className="flex flex-col items-center justify-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
          <h1 className="w-full max-w-[630px] mt-[-1.00px] font-h-1 font-[number:var(--h-1-font-weight)] text-icons text-xl md:text-2xl lg:text-[length:var(--h-1-font-size)] text-center leading-[var(--h-1-line-height)] relative tracking-[var(--h-1-letter-spacing)] [font-style:var(--h-1-font-style)]">
            Our Blog
          </h1>
        </header>

        <div className="flex flex-col items-center justify-center gap-6 md:gap-[30px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-[30px] w-full">
            {blogPosts.map((post, index) => (
              <Link 
                key={index} 
                href={`/blog/${post.slug}`}
                data-testid={`blog-card-${post.slug}`}
              >
                <Card
                  className="flex flex-col w-full items-center justify-center relative bg-for-bg-dark rounded-[10px] overflow-hidden border border-solid border-[#e2e2e2] shadow-EF-1 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="p-0 w-full">
                    {index === 2 ? (
                      <div
                        className={`${post.imageHeight} relative self-stretch w-full`}
                      >
                        <img
                          className="absolute top-0 left-0 w-full h-full rounded-[10px_10px_0px_0px] object-cover"
                          alt={post.title}
                          src={post.image}
                        />
                      </div>
                    ) : (
                      <div
                        className={`relative self-stretch w-full ${post.imageHeight} ${post.imageClass}`}
                      />
                    )}

                    <div
                      className={`flex flex-col ${post.contentHeight} items-start gap-4 md:gap-5 p-4 md:p-[30px] relative self-stretch w-full`}
                    >
                      <div className="flex flex-col items-start gap-3 md:gap-4 relative self-stretch w-full flex-[0_0_auto]">
                        <h3 className="relative self-stretch mt-[-1.00px] font-p1-semibold font-[number:var(--p1-semibold-font-weight)] text-icons text-base md:text-[length:var(--p1-semibold-font-size)] tracking-[var(--p1-semibold-letter-spacing)] leading-[var(--p1-semibold-line-height)] [font-style:var(--p1-semibold-font-style)]">
                          {post.title}
                        </h3>

                        <p className="relative self-stretch font-p2-regular font-[number:var(--p2-regular-font-weight)] text-placeholder text-sm md:text-[length:var(--p2-regular-font-size)] tracking-[var(--p2-regular-letter-spacing)] leading-[var(--p2-regular-line-height)] [font-style:var(--p2-regular-font-style)]">
                          {post.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <Link href="/blog">
            <Button className="justify-center px-4 md:px-5 py-2.5 md:py-3 bg-[#ef7f1a] rounded-[10px] overflow-hidden inline-flex items-center gap-2.5 relative flex-[0_0_auto] h-auto hover:bg-[#ef7f1a]/90">
              <span className="relative w-fit mt-[-1.00px] font-p2-semibold font-[number:var(--p2-semibold-font-weight)] text-white text-sm md:text-[length:var(--p2-semibold-font-size)] tracking-[var(--p2-semibold-letter-spacing)] leading-[var(--p2-semibold-line-height)] whitespace-nowrap [font-style:var(--p2-semibold-font-style)]">View all</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
