import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Search, ArrowRight, Calendar, Facebook, Instagram, Linkedin } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useState } from "react";

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/propshopglobal", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/propshopglobal.dxb/#", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/propshop-global-dubai/", label: "LinkedIn" },
  { icon: SiWhatsapp, href: "https://wa.me/97142515556", label: "WhatsApp" },
];

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

const contactInfo = [
  {
    icon: "/figmaAssets/group.png",
    text: "Unit Number: 311, 3rd Floor, Burlington Tower, Business Bay, Dubai, UAE.",
    iconClass: "w-4 h-5 md:w-[17.01px] md:h-[20.67px]",
    type: "address",
  },
  {
    icon: "/figmaAssets/component-4.svg",
    text: "+971 42 51 5556",
    iconClass: "w-4 h-4 md:w-5 md:h-5",
    type: "phone",
    href: "tel:+97142515556",
  },
  {
    icon: "/figmaAssets/fluent-mail-24-regular.svg",
    text: "info@propshopglobal.org",
    iconClass: "w-4 h-4 md:w-5 md:h-5",
    type: "email",
    href: "mailto:info@propshopglobal.org",
  },
];

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

const servicesLinks = [
  { label: "Buy a Property", href: "/projects" },
  { label: "Sell a Property", href: "/contact" },
  { label: "Rent a Property", href: "/projects" },
  { label: "Terms & Conditions", href: "/contact" },
  { label: "Privacy & Policy", href: "/contact" },
];


const featuredArticles = [
  {
    id: 1,
    slug: "dubai-real-estate-market-trends-2024",
    title: "Dubai Real Estate Market Hits Record High in 2025",
    description: "Dubai's property market continues its remarkable growth trajectory, with transaction volumes reaching unprecedented levels. Discover what's driving this surge and where opportunities lie.",
    image: "/figmaAssets/dubai_skyline_luxury_f84236ad.jpg",
    comments: 24,
    size: "large",
    date: "Dec 1, 2024",
  },
  {
    id: 2,
    slug: "top-neighborhoods-dubai-2025",
    title: "Top 5 Emerging Neighborhoods in Dubai for 2025",
    description: "From Dubai South to Jumeirah Village Circle, explore the hottest areas attracting investors and homebuyers alike.",
    image: "/figmaAssets/dubai_skyline_luxury_29f1ffa8.jpg",
    comments: 18,
    size: "medium",
    date: "Nov 28, 2024",
  },
  {
    id: 3,
    slug: "golden-visa-uae-property-investment",
    title: "Golden Visa: How Property Investment Opens Doors to UAE Residency",
    subtitle: "Investment Opportunities",
    description: "Everything you need to know about qualifying for UAE's Golden Visa through real estate investment.",
    image: "/figmaAssets/dubai_skyline_luxury_ea4a4980.jpg",
    comments: 32,
    size: "medium",
    date: "Nov 25, 2024",
  },
];

const popularArticles = [
  {
    id: 4,
    slug: "off-plan-vs-ready-properties",
    title: "Off-Plan vs Ready Properties: Which Is Right for You?",
    description: "Weighing the pros and cons of buying off-plan versus move-in ready properties in Dubai's dynamic market.",
    image: "/figmaAssets/modern_luxury_apartm_51824214.jpg",
    category: "Buying Guide",
    date: "Nov 22, 2024",
  },
  {
    id: 5,
    slug: "luxury-penthouses-dubai-ultimate-guide",
    title: "Luxury Living: Inside Dubai's Most Exclusive Penthouses",
    description: "A glimpse into the world of ultra-luxury real estate, featuring Dubai's most spectacular sky-high residences.",
    image: "/figmaAssets/luxury_penthouse_ter_9bd71466.jpg",
    category: "Luxury",
    date: "Nov 20, 2024",
  },
  {
    id: 6,
    slug: "smart-homes-dubai-future-living",
    title: "Smart Home Technology: The Future of Dubai Properties",
    description: "How AI and IoT are transforming residential living in Dubai, from automated systems to energy efficiency.",
    image: "/figmaAssets/smart_home_technolog_4c335415.jpg",
    category: "Technology",
    date: "Nov 18, 2024",
  },
];

const featuredListings = [
  {
    id: 7,
    slug: "first-time-buyer-guide-dubai",
    title: "First-Time Buyer's Guide to Dubai Real Estate",
    description: "Essential tips and steps for navigating your first property purchase in Dubai, from financing to handover.",
    image: "/figmaAssets/modern_luxury_apartm_fc047551.jpg",
    date: "Nov 15, 2024",
  },
  {
    id: 8,
    slug: "rental-yields-dubai-investment",
    title: "Rental Yields in Dubai: Where to Invest for Maximum Returns",
    description: "Analysis of the best areas in Dubai for rental income, with data-driven insights on expected ROI.",
    image: "/figmaAssets/modern_luxury_apartm_3f418edf.jpg",
    date: "Nov 12, 2024",
  },
];

const bottomArticles = [
  {
    id: 9,
    slug: "expo-city-dubai-real-estate",
    title: "Expo City Dubai: The Next Real Estate Hotspot",
    description: "How the legacy of Expo 2020 is creating new investment opportunities in this emerging district.",
    image: "/figmaAssets/luxury_penthouse_ter_00aa4515.jpg",
    date: "Nov 10, 2024",
  },
  {
    id: 10,
    slug: "dubai-property-registration-process",
    title: "Understanding Dubai's Property Registration Process",
    description: "A step-by-step guide to registering your property with Dubai Land Department and what fees to expect.",
    image: "/figmaAssets/smart_home_technolog_9eabe432.jpg",
    date: "Nov 8, 2024",
  },
  {
    id: 11,
    slug: "waterfront-living-dubai-marina-creek",
    title: "Waterfront Living: Dubai's Marina and Creek Communities",
    description: "Comparing lifestyle and investment potential across Dubai's premier waterfront developments.",
    image: "/figmaAssets/waterfront_marina_pr_ce39f84b.jpg",
    date: "Nov 5, 2024",
  },
];

export const BlogPage = (): JSX.Element => {
  const [location] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col items-center bg-white w-full">
      {/* Header */}
      <header className="w-full bg-icons px-4 md:px-8 lg:px-[110px] py-4 md:py-5">
        <div className="max-w-[1700px] mx-auto flex items-center justify-between">
          <Link href="/">
            <img
              className="w-[150px] md:w-[200px] lg:w-[265px] h-auto object-cover cursor-pointer"
              alt="Logo"
              src="/figmaAssets/image-2-1.png"
              data-testid="logo-home-link"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-[45px]">
            {navigationItems.map((item, index) => {
              const isActive = location === item.href;
              return (
                <div key={index} className="relative">
                  <Link
                    href={item.href}
                    className="[font-family:'Roboto',Helvetica] font-semibold text-for-bg-dark text-sm lg:text-base tracking-[0] leading-[26.6px] whitespace-nowrap hover:opacity-80 transition-opacity"
                    data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.label}
                  </Link>
                  {isActive && (
                    <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-for-bg-dark" />
                  )}
                </div>
              );
            })}
          </nav>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-for-bg-dark">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] sm:w-[260px] bg-white">
              <nav className="flex flex-col gap-4 mt-8">
                {navigationItems.map((item, index) => {
                  const isActive = location === item.href;
                  return (
                    <Link
                      key={index}
                      href={item.href}
                      className={`[font-family:'Roboto',Helvetica] font-semibold text-[#181a20] text-base tracking-[0] leading-[26.6px] py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors ${
                        isActive ? "bg-gray-100" : ""
                      }`}
                      data-testid={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      {/* Hero Section */}
      <section className="w-full bg-white py-12 md:py-16 px-4 md:px-8 lg:px-[110px]">
        <div className="max-w-[1700px] mx-auto text-center">
          <h1 className="text-[#ef7f1a] text-3xl md:text-4xl lg:text-5xl font-bold" data-testid="text-blog-title">
            Our Blog
          </h1>
        </div>
      </section>
      {/* Featured Articles Section */}
      <section className="w-full py-10 md:py-14 px-4 md:px-8 lg:px-[110px] bg-white">
        <div className="max-w-[1700px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Large Featured Article */}
            <Link href={`/blog/${featuredArticles[0].slug}`}>
              <Card className="overflow-hidden border-0 shadow-lg group hover-elevate cursor-pointer" data-testid="card-featured-article-0">
                <div className="relative h-[300px] md:h-[400px] lg:h-full">
                  <img
                    src={featuredArticles[0].image}
                    alt={featuredArticles[0].title}
                    className="w-full h-full object-cover"
                    data-testid="img-featured-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-bold mb-3" data-testid="text-featured-title-0">
                      {featuredArticles[0].title}
                    </h3>
                    <p className="text-sm md:text-base mb-4 line-clamp-2 text-[#ffffff]" data-testid="text-featured-desc-0">
                      {featuredArticles[0].description}
                    </p>
                    <div className="flex items-center justify-between text-[#ffffff]">
                      <div className="flex items-center gap-2 text-white/70">
                        {/* <Calendar className="w-4 h-4" />
                        <span className="text-sm">{featuredArticles[0].date}</span> */}
                      </div>
                      <Button variant="outline" size="sm" className="border-[#ef7f1a] text-[#ef7f1a] hover:bg-transparent hover:text-[#ef7f1a]" data-testid="button-explore-0">
                        Explore
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>

            {/* Right Column - Two Articles */}
            <div className="flex flex-col gap-6">
              {featuredArticles.slice(1).map((article, index) => (
                <Link key={article.id} href={`/blog/${article.slug}`}>
                  <Card className="overflow-hidden border-0 shadow-lg group hover-elevate cursor-pointer" data-testid={`card-featured-article-${index + 1}`}>
                    <div className="relative h-[200px] md:h-[240px]">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                        data-testid={`img-featured-${index + 1}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                        {article.subtitle && (
                          <p className="text-[#ef7f1a] text-sm font-medium mb-1">{article.subtitle}</p>
                        )}
                        <h3 className="text-white text-lg md:text-xl font-bold mb-2" data-testid={`text-featured-title-${index + 1}`}>
                          {article.title}
                        </h3>
                        <p className="text-sm mb-3 line-clamp-2 text-[#ffffff]" data-testid={`text-featured-desc-${index + 1}`}>
                          {article.description}
                        </p>
                        <div className="flex items-center justify-between text-[#ffffff]">
                          <div className="flex items-center gap-2 text-white/70">
                            {/* <Calendar className="w-4 h-4" />
                            <span className="text-sm">{article.date}</span> */}
                          </div>
                          <Button variant="outline" size="sm" className="border-[#ef7f1a] text-[#ef7f1a] hover:bg-transparent hover:text-[#ef7f1a]" data-testid={`button-explore-${index + 1}`}>
                            Explore
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Search Section */}
      <section className="w-full py-8 px-4 md:px-8 lg:px-[110px] bg-[#f8f8f8]">
        <div className="max-w-[1700px] mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center max-w-xl mx-auto">
            <div className="relative flex-1 w-full">
              <Input
                type="text"
                placeholder="Type to search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10 border-[#e0e0e0] focus:border-[#ef7f1a]"
                data-testid="input-search"
              />
            </div>
            <Button className="bg-[#ef7f1a] hover:bg-[#ef7f1a]/90 text-white px-8" data-testid="button-search">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </section>
      {/* Most Popular Section */}
      <section className="w-full py-10 md:py-14 px-4 md:px-8 lg:px-[110px] bg-white">
        <div className="max-w-[1700px] mx-auto">
          <h2 className="text-[#181a20] text-2xl md:text-3xl font-bold mb-8" data-testid="text-popular-title">
            Most Popular
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularArticles.map((article, index) => (
              <Link key={article.id} href={`/blog/${article.slug}`}>
                <Card className="overflow-hidden border-[#e0e0e0] hover-elevate cursor-pointer h-full" data-testid={`card-popular-${index}`}>
                  <div className="relative h-[200px]">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                      data-testid={`img-popular-${index}`}
                    />
                    <Badge className="absolute top-3 left-3 bg-[#ef7f1a] text-white" data-testid={`badge-category-${index}`}>
                      {article.category}
                    </Badge>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-[#181a20] text-lg font-semibold mb-2 line-clamp-2" data-testid={`text-popular-title-${index}`}>
                      {article.title}
                    </h3>
                    <p className="text-[#575757] text-sm line-clamp-3" data-testid={`text-popular-desc-${index}`}>
                      {article.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* Featured Listings Section */}
      <section className="w-full py-10 md:py-14 px-4 md:px-8 lg:px-[110px] bg-[#f8f8f8]">
        <div className="max-w-[1700px] mx-auto">
          <h2 className="text-[#181a20] text-2xl md:text-3xl font-bold mb-8" data-testid="text-listings-title">
            Featured Listings
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredListings.map((article, index) => (
              <Link key={article.id} href={`/blog/${article.slug}`}>
                <Card className="overflow-hidden border-[#e0e0e0] flex flex-col md:flex-row hover-elevate cursor-pointer h-full" data-testid={`card-listing-${index}`}>
                  <div className="relative h-[200px] md:h-auto md:w-[40%]">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                      data-testid={`img-listing-${index}`}
                    />
                  </div>
                  <CardContent className="p-5 flex-1 flex flex-col justify-center">
                    <h3 className="text-[#181a20] text-lg font-semibold mb-2" data-testid={`text-listing-title-${index}`}>
                      {article.title}
                    </h3>
                    <p className="text-[#575757] text-sm line-clamp-3" data-testid={`text-listing-desc-${index}`}>
                      {article.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Banner */}
      <section className="w-full py-10 md:py-14 px-4 md:px-8 lg:px-[110px] bg-[#1c1c1b]">
        <div className="max-w-[1700px] mx-auto text-center">
          <p className="text-[#ef7f1a] text-lg mb-2" data-testid="text-cta-subtitle">
            Stay Updated
          </p>
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-4" data-testid="text-cta-title">
            Subscribe to our newsletter for the latest Dubai real estate insights and market trends.
          </h2>
          <Link href="/contact">
            <Button className="mt-4 bg-[#ef7f1a] hover:bg-[#ef7f1a]/90 text-white px-8 py-3 rounded-xl" data-testid="button-subscribe">
              Subscribe Now
            </Button>
          </Link>
        </div>
      </section>
      {/* Bottom Articles Grid */}
      <section className="w-full py-10 md:py-14 px-4 md:px-8 lg:px-[110px] bg-white">
        <div className="max-w-[1700px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bottomArticles.map((article, index) => (
              <Link key={article.id} href={`/blog/${article.slug}`}>
                <Card className="overflow-hidden border-[#e0e0e0] hover-elevate cursor-pointer h-full" data-testid={`card-bottom-${index}`}>
                  <div className="relative h-[200px]">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                      data-testid={`img-bottom-${index}`}
                    />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-[#181a20] text-lg font-semibold mb-2 line-clamp-2" data-testid={`text-bottom-title-${index}`}>
                      {article.title}
                    </h3>
                    <p className="text-[#575757] text-sm line-clamp-3" data-testid={`text-bottom-desc-${index}`}>
                      {article.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="flex flex-col w-full items-start gap-8 md:gap-[60px] px-4 md:px-8 lg:px-[110px] py-8 md:py-[60px] bg-icons">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 md:gap-[30px] w-full max-w-[1700px] mx-auto">
          <div className="flex flex-col w-full lg:max-w-[695px] items-start gap-4 md:gap-6">
            <img
              className="w-[180px] md:w-[265px] h-auto object-cover"
              alt="Logo"
              src="/figmaAssets/image-2-1.png"
              data-testid="footer-logo"
            />

            <div className="flex flex-col items-start gap-3 md:gap-4 w-full">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-2 md:gap-3 w-full">
                  <img
                    className={item.iconClass}
                    alt="Contact icon"
                    src={item.icon}
                  />
                  <div className="flex items-start gap-2.5 flex-1">
                    {item.href ? (
                      <a
                        href={item.href}
                        className="flex-1 font-p font-[number:var(--p-font-weight)] text-for-bg-dark text-sm md:text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)] hover:text-[#ef7f1a] transition-colors"
                        data-testid={`link-contact-${item.type}`}
                      >
                        {item.text}
                      </a>
                    ) : (
                      <p className="flex-1 font-p font-[number:var(--p-font-weight)] text-for-bg-dark text-sm md:text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]">
                        {item.text}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-for-bg-dark/10 rounded-full hover:bg-app-primary transition-colors"
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-5 h-5 text-for-bg-dark" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 md:gap-[52px] w-full lg:w-auto">
            <nav className="flex flex-col w-full md:w-[143px] items-start gap-4 md:gap-6">
              <h4 className="mt-[-1.00px] font-h-4 font-[number:var(--h-4-font-weight)] text-for-bg-dark text-base md:text-[length:var(--h-4-font-size)] tracking-[var(--h-4-letter-spacing)] leading-[var(--h-4-line-height)] [font-style:var(--h-4-font-style)]">
                Explore
              </h4>
              <ul className="flex flex-col items-start gap-3 md:gap-4 w-full">
                {exploreLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      onClick={() => window.scrollTo(0, 0)}
                      className="font-p font-[number:var(--p-font-weight)] text-for-bg-dark text-sm md:text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)] hover:opacity-80 transition-opacity"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="flex flex-col w-full md:w-[158.92px] items-start gap-3 md:gap-4">
              <h4 className="mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-for-bg-dark text-base md:text-xl text-center tracking-[0] leading-7 whitespace-nowrap">
                Services
              </h4>
              <ul className="flex flex-col items-start gap-3 md:gap-4 w-full">
                {servicesLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      onClick={() => window.scrollTo(0, 0)}
                      className="[font-family:'Roboto',Helvetica] font-normal text-for-bg-dark text-sm md:text-base text-center tracking-[0] leading-6 whitespace-nowrap hover:opacity-80 transition-opacity"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

          </div>
        </div>
      </footer>
    </div>
  );
};
