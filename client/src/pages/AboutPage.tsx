import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Phone, Mail, ArrowRight, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

import aravBathlaImg from "@assets/Arav_Bathla_1764716362938.png";
import hardikMarwahaImg from "@assets/Hardik_Marwaha_1764716362938.png";
import samarthNarulaImg from "@assets/Samarth_Narula_1764716362938.png";
import sagarMarwahaImg from "@assets/Sagar_Marwaha_1764716362937.png"; 
import heroBackgroundImg from "@assets/stock_images/palm_jumeirah_dubai__c5859750.jpg";
import whoWeAreImg from "@assets/stock_images/professional_busines_4b32345c.jpeg";
import whatWeDoImgLeft from "@assets/stock_images/Hardik_marwaha-left.jpg"; 

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


const services = [
  {
    title: "Property Investment",
    description: "with strong growth potential",
    icon: "/figmaAssets/icon-1.svg",
  },
  {
    title: "Property Management",
    description: "for residential and commercial assets",
    icon: "/figmaAssets/icon-3.svg",
  },
  {
    title: "Portfolio Management",
    description: "for smooth, worry-free ownership",
    icon: "/figmaAssets/icon-1.svg",
  },
  {
    title: "Real estate Sales",
    description: "for developers and large-scale developments",
    icon: "/figmaAssets/icon-3.svg",
  },
  {
    title: "Investment Consultation and Advisory",
    description: "for residential and commercial assets",
    icon: "/figmaAssets/icon-3.svg",
  },
];

const leadership = [
  {
    name: "Arav Bathla",
    role: "CEO & Managing Director",
    email: "arav.bathla@propshopglobal.ae",
    image: aravBathlaImg,
  },
  {
    name: "Hardik Marwaha",
    role: "Chief Sales Officer",
    email: "hardik.marwaha@propshopglobal.ae",
    image: hardikMarwahaImg,
  },
];

const topAgents = [
  {
    name: "Samarth Narula",
    phone: "+971 55 682 2259",
    email: "samarth@propshopglobal.org",
    image: samarthNarulaImg,
  },
  {
    name: "Sagar Marwaha",
    phone: "+971 56 345 6798",
    email: "sagarmarwaha@propshopglobal.org",
    image: sagarMarwahaImg,
  },
  // {
  //   name: "Harjas Singh Kohli",
  //   phone: "+971 56 749 2413",
  //   email: "harjas.singh@propshopglobal.ae",
  //   image: harjasSinghKohliImg,
  // },
];

export const AboutPage = (): JSX.Element => {
  const [location] = useLocation();

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
      <section className="w-full relative py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-[110px]">
        <div className="absolute inset-0">
          <img
            src={heroBackgroundImg}
            alt="Palm Jumeirah Dubai island villas and skyline"
            className="w-full h-full object-cover"
            data-testid="img-hero-background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1c1c1b]/85 via-[#1c1c1b]/70 to-[#1c1c1b]/85" />
        </div>
        <div className="max-w-[1700px] mx-auto text-center relative z-10">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-bold mb-6 leading-tight" data-testid="text-hero-title">
            About PROP SHOP GLOBAL
          </h1>
          <p className="text-[#ef7f1a] text-xl md:text-2xl lg:text-3xl font-semibold mb-4" data-testid="text-hero-tagline">
            Your Gateway to Smarter Investments
          </p>
          <p className="text-lg md:text-xl lg:text-2xl mb-6 text-[#ffffff]" data-testid="text-hero-subtitle">
            The New Way to Fulfill Your Dreams in Dubai.
          </p>
          <p className="text-base md:text-lg max-w-3xl mx-auto text-[#ffffff]" data-testid="text-hero-description">
            Discover opportunities designed for growth, stability, and long-term value.
          </p>
        </div>
      </section>
      {/* Who We Are Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-[110px] bg-white">
        <div className="max-w-[1700px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="flex flex-col gap-6">
              <h2 className="text-[#181a20] text-2xl md:text-3xl lg:text-[40px] font-bold" data-testid="text-who-we-are-title">
                From our CEO
              </h2>
              <div className="flex flex-col gap-4">
                <p className="text-[#575757] text-base lg:text-lg leading-relaxed" data-testid="text-who-we-are-p1">
                At Prop Shop Global, we know real estate is more than just a transaction it's about unlocking sustainable success and matching clients with the perfect opportunities. We redefine the real estate experience in Dubai helping families, investors, and communities find spaces they can truly call their own.
                </p>
                <p className="text-[#575757] text-base lg:text-lg leading-relaxed" data-testid="text-who-we-are-p2">
                Guided by integrity, innovation, and client-focused service, our team turns opportunities into confident, informed decisions. In a dynamic market, we stay ahead with foresight, strategy, and the latest technologies to add real value to every client's journey. More than a company, Prop Shop Global is a community built on trust, dedication, and shared success.
                </p>
                <div className="mt-2">
                  <p className="text-[#181a20] text-[22px] italic font-bold leading-tight" data-testid="text-ceo-name" style={{ fontFamily: "Georgia, serif" }}>
                    Arav Bathla
                  </p>
                  <p className="text-[#181a20] text-lg leading-tight mt-1" data-testid="text-ceo-role">
                    CEO & Managing Director
                  </p>
                </div> 
              </div>
              <Link href="/contact">
                <Button className="w-fit bg-[#ef7f1a] hover:bg-[#ef7f1a]/90 text-white font-semibold px-8 py-3 rounded-lg" data-testid="button-contact-us">
                  Contact Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="relative h-[250px] md:h-[300px] lg:h-[750px] rounded-xl overflow-hidden ">
              <img
                src={whoWeAreImg}
                alt="Prop Shop Global Team"
                className="w-full h-full object-contain"
                style={{ objectFit: "cover",objectPosition: "center bottom"}}
                width={500}
                height={1000}
                data-testid="img-who-we-are"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>
      {/* Hardik Marwaha Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-[110px] bg-[#f8f8f8]">
        <div className="max-w-[1700px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="relative h-[250px] md:h-[300px] lg:h-[700px] rounded-xl overflow-hidden order-2 lg:order-1">
              <img
                src={whatWeDoImgLeft}
                alt="Hardik Marwaha"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center top" }}
                width={500}
                height={1000}
                data-testid="img-hardik"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <div className="flex flex-col gap-6 order-1 lg:order-2">
              <h2 className="text-[#181a20] text-2xl md:text-3xl lg:text-[40px] font-bold" data-testid="text-hardik-title">
                From our CSO
              </h2>
              <div className="flex flex-col gap-4">
                <p className="text-[#575757] text-base lg:text-lg leading-relaxed" data-testid="text-hardik-p1">
                  With more than 12 years in global real estate, I’ve realized that true success doesn’t come from selling properties. It comes from understanding people and fostering relationships that stand the test of time. At Prop Shop Global, our team lives by this belief in everything we do.
                </p>
                <p className="text-[#575757] text-base lg:text-lg leading-relaxed" data-testid="text-hardik-p2">
                  We start by listening. Every client has their own story, goals, and vision, and together, we provide honest market insights and tailored guidance they can rely on. Our collective experience has helped us achieve exceptional results and industry recognition, but what matters most is the trust our clients place in us and the enduring relationships we build. There’s no greater reward than seeing our clients return and bring their families and friends because they know we’re a team they can count on.
                </p>
                <div className="mt-2">
                  <p className="text-[#181a20] text-[22px] italic font-bold leading-tight" data-testid="text-hardik-name" style={{ fontFamily: "Georgia, serif" }}>
                    Hardik Marwaha
                  </p>
                  <p className="text-[#181a20] text-lg leading-tight mt-1" data-testid="text-hardik-role">
                    Chief Sales Officer
                  </p>
                </div> 
              </div>
              <Link href="/contact">
                <Button className="w-fit bg-[#ef7f1a] hover:bg-[#ef7f1a]/90 text-white font-semibold px-8 py-3 rounded-lg" data-testid="button-contact-us-hardik">
                  Contact Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* What We Do Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-[110px] bg-white">
        <div className="max-w-[1700px] mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-[#181a20] text-2xl md:text-3xl lg:text-[40px] font-bold mb-4" data-testid="text-what-we-do-title">
              What We Do
            </h2>
            <p className="text-[#575757] text-base lg:text-lg max-w-2xl mx-auto" data-testid="text-what-we-do-subtitle">
              We help investors and homeowners make confident decisions with:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {services.slice(0, 3).map((service, index) => (
              <Card key={index} className="border-[#e0e0e0] hover-elevate" data-testid={`card-service-${index}`}>
                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-[#ef7f1a]/10 flex items-center justify-center">
                    <img src={service.icon} alt={service.title} className="w-8 h-8" />
                  </div>
                  <h3 className="text-[#181a20] text-lg font-semibold" data-testid={`text-service-title-${index}`}>
                    {service.title}
                  </h3>
                  <p className="text-[#575757] text-sm" data-testid={`text-service-desc-${index}`}>
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
            {services.length > 3 && (
              <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex flex-col sm:flex-row lg:justify-center gap-6">
                {services.slice(3).map((service, index) => (
                  <Card 
                    key={index + 3} 
                    className="border-[#e0e0e0] hover-elevate w-full sm:flex-1 sm:max-w-none lg:max-w-[300px]" 
                    data-testid={`card-service-${index + 3}`}
                  >
                    <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-[#ef7f1a]/10 flex items-center justify-center">
                        <img src={service.icon} alt={service.title} className="w-8 h-8" />
                      </div>
                      <h3 className="text-[#181a20] text-lg font-semibold" data-testid={`text-service-title-${index + 3}`}>
                        {service.title}
                      </h3>
                      <p className="text-[#575757] text-sm" data-testid={`text-service-desc-${index + 3}`}>
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-center">
            <Link href="/contact">
              <Button className="bg-[#ef7f1a] hover:bg-[#ef7f1a]/90 text-white font-semibold px-8 py-3 rounded-lg" data-testid="button-reach-us">
                Reach Us Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Leadership Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-[110px] bg-white">
        <div className="max-w-[1700px] mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-[#181a20] text-2xl md:text-3xl lg:text-[40px] font-bold mb-4" data-testid="text-leadership-title">
              Leadership
            </h2>
            <p className="text-[#575757] text-base lg:text-lg max-w-2xl mx-auto" data-testid="text-leadership-subtitle">
              Inspiring leadership that drives innovation, growth, and excellence in real estate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 max-w-4xl mx-auto">
            {leadership.map((leader, index) => (
              <Card key={index} className="border-[#e0e0e0] overflow-hidden" data-testid={`card-leader-${index}`}>
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-[#1c1c1b] to-[#2d2d2c] p-6 lg:p-8 flex flex-col items-center text-center">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white/20 mb-4">
                      <img
                        src={leader.image}
                        alt={leader.name} 
                        data-testid={`img-leader-${index}`}
                      />
                    </div>
                    <h3 className="text-white text-xl md:text-2xl font-bold mb-1" data-testid={`text-leader-name-${index}`}>
                      {leader.name}
                    </h3>
                    <p className="text-[#ef7f1a] text-base md:text-lg font-medium mb-2" data-testid={`text-leader-role-${index}`}>
                      {leader.role}
                    </p>
                  </div>
                  <div className="p-4 lg:p-6 flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-[#ef7f1a]" />
                      <a href={`mailto:${leader.email}`} className="text-[#575757] text-sm hover:text-[#ef7f1a] transition-colors" data-testid={`link-leader-email-${index}`}>
                        {leader.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Top Agents Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-[110px] bg-[#f8f8f8]">
        <div className="max-w-[1700px] mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-[#181a20] text-2xl md:text-3xl lg:text-[40px] font-bold mb-4" data-testid="text-agents-title">
              Top Agents
            </h2>
            <p className="text-[#575757] text-base lg:text-lg max-w-2xl mx-auto" data-testid="text-agents-subtitle">
              Top agents delivering excellence with expertise, dedication, and results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 max-w-4xl mx-auto">
            {topAgents.map((agent, index) => (
              <Card key={index} className="border-[#e0e0e0] hover-elevate" data-testid={`card-agent-${index}`}>
                <CardContent className="p-6 lg:p-8 flex flex-col items-center text-center gap-4">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-[#ef7f1a]/20">
                    <img
                      src={agent.image}
                      alt={agent.name} 
                      data-testid={`img-agent-${index}`}
                    />
                  </div>
                  <h3 className="text-[#181a20] text-lg md:text-xl font-semibold" data-testid={`text-agent-name-${index}`}>
                    {agent.name}
                  </h3>
                  <div className="flex flex-col gap-2 w-full">
                    <div className="flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4 text-[#ef7f1a]" />
                      <a href={`tel:${agent.phone}`} className="text-[#575757] text-sm hover:text-[#ef7f1a] transition-colors" data-testid={`link-agent-phone-${index}`}>
                        {agent.phone}
                      </a>
                    </div>
                    {agent.email && (
                      <div className="flex items-center justify-center gap-2">
                        <Mail className="w-4 h-4 text-[#ef7f1a]" />
                        <a href={`mailto:${agent.email}`} className="text-[#575757] text-sm hover:text-[#ef7f1a] transition-colors truncate" data-testid={`link-agent-email-${index}`}>
                          {agent.email}
                        </a>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-[110px] bg-[#1c1c1b]">
        <div className="max-w-[1700px] mx-auto text-center">
          <h2 className="text-white text-2xl md:text-3xl lg:text-[40px] font-bold mb-4" data-testid="text-cta-title">
            Ready to Start Your Investment Journey?
          </h2>
          <p className="text-white/70 text-base lg:text-lg mb-8 max-w-2xl mx-auto" data-testid="text-cta-description">
            Connect with our expert team today and discover how Prop Shop Global can help you achieve your real estate goals in Dubai.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-[#ef7f1a] hover:bg-[#ef7f1a]/90 text-white font-semibold px-8 py-3 rounded-lg" data-testid="button-cta-contact">
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline" className="border-[#ef7f1a] text-[#ef7f1a] hover:bg-transparent hover:text-[#ef7f1a] font-semibold px-8 py-3 rounded-lg" data-testid="button-cta-projects">
                View Projects
              </Button>
            </Link>
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
