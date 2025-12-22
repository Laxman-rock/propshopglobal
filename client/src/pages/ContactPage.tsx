import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/propshopglobal", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/propshopglobal.dxb/#", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/propshop-global-dubai/", label: "LinkedIn" },
  { icon: SiWhatsapp, href: "https://wa.me/97142515556", label: "WhatsApp" },
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


const propertyOptions = [
  { value: "apartment", label: "Apartment" },
  { value: "villa", label: "Villa" },
  { value: "townhouse", label: "Townhouse" },
  { value: "penthouse", label: "Penthouse" },
  { value: "commercial", label: "Commercial" },
  { value: "land", label: "Land" },
];

const budgetOptions = [
  { value: "under-500k", label: "Under AED 500,000" },
  { value: "500k-1m", label: "AED 500,000 - 1,000,000" },
  { value: "1m-2m", label: "AED 1,000,000 - 2,000,000" },
  { value: "2m-5m", label: "AED 2,000,000 - 5,000,000" },
  { value: "5m-10m", label: "AED 5,000,000 - 10,000,000" },
  { value: "above-10m", label: "Above AED 10,000,000" },
];

interface ContactFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  propertyInterested: string;
  budget: string;
  message: string;
}

export const ContactPage = (): JSX.Element => {
  const [location] = useLocation();
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      propertyInterested: "",
      budget: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log("Form submitted:", data);
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll get back to you soon.",
    });
    form.reset();
  };

  return (
    <div className="flex flex-col items-center bg-white w-full">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-[110px] bg-[#f8f8f8]">
        <div className="max-w-[1700px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Register Your Interest Form */}
            <Card className="border-[#e0e0e0] shadow-lg" data-testid="card-register-interest">
              <CardContent className="p-6 md:p-8 lg:p-10">
                <h2 className="text-[#181a20] text-2xl md:text-3xl font-bold mb-2" data-testid="text-form-title">
                  Register Your Interest
                </h2>
                <p className="text-[#ef7f1a] text-lg font-semibold mb-6" data-testid="text-form-subtitle">
                  Prop Shop Global
                </p>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[#181a20] font-medium">First Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter your first name"
                                className="border-[#e0e0e0] focus:border-[#ef7f1a]"
                                data-testid="input-first-name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[#181a20] font-medium">Last Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter your last name"
                                className="border-[#e0e0e0] focus:border-[#ef7f1a]"
                                data-testid="input-last-name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[#181a20] font-medium">Email</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="Enter your email"
                                className="border-[#e0e0e0] focus:border-[#ef7f1a]"
                                data-testid="input-email"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[#181a20] font-medium">Phone</FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="Enter your phone number"
                                className="border-[#e0e0e0] focus:border-[#ef7f1a]"
                                data-testid="input-phone"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="propertyInterested"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[#181a20] font-medium">Property Interested In</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="border-[#e0e0e0] focus:border-[#ef7f1a]" data-testid="select-property">
                                  <SelectValue placeholder="Select property you interested in" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {propertyOptions.map((option) => (
                                  <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="budget"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[#181a20] font-medium">Budget</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="border-[#e0e0e0] focus:border-[#ef7f1a]" data-testid="select-budget">
                                  <SelectValue placeholder="Select your budget" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {budgetOptions.map((option) => (
                                  <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#181a20] font-medium">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Write your message"
                              className="border-[#e0e0e0] focus:border-[#ef7f1a] min-h-[120px] resize-none"
                              data-testid="textarea-message"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-[#ef7f1a] hover:bg-[#ef7f1a]/90 text-white font-semibold py-3 rounded-lg mt-2"
                      data-testid="button-submit"
                    >
                      Submit
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Company Contact Details */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <p className="text-[#575757] text-sm uppercase tracking-wider" data-testid="text-company-type">
                  Real Estate Consultancy
                </p>
                <h2 className="text-[#181a20] text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight" data-testid="text-company-tagline">
                  Connecting You to Exceptional Properties
                </h2>
                <p className="text-[#575757] text-base lg:text-lg leading-relaxed" data-testid="text-company-description">
                  Your journey to the perfect home or investment begins here. Reach out to us our team is ready to assist you every step of the way.
                </p>
              </div>

              <div className="flex flex-col gap-6 mt-4">
                <div className="flex items-start gap-4" data-testid="contact-address">
                  <div className="w-12 h-12 rounded-full bg-[#ef7f1a]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#ef7f1a]" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[#181a20] font-semibold text-base">Address:</p>
                    <p className="text-[#575757] text-base">
                      Unit Number: 311, 3rd Floor Burlington Tower, Business Bay, Dubai, UAE.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4" data-testid="contact-phone">
                  <div className="w-12 h-12 rounded-full bg-[#ef7f1a]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#ef7f1a]" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[#181a20] font-semibold text-base">Mobile:</p>
                    <a href="tel:+97142515556" className="text-[#575757] text-base hover:text-[#ef7f1a] transition-colors">
                      +971 42 51 5556
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4" data-testid="contact-email">
                  <div className="w-12 h-12 rounded-full bg-[#ef7f1a]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#ef7f1a]" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[#181a20] font-semibold text-base">Email:</p>
                    <a href="mailto:info@propshopglobal.org" className="text-[#575757] text-base hover:text-[#ef7f1a] transition-colors">
                      info@propshopglobal.org
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Map - Burlington Tower, Business Bay Dubai */}
              <div className="relative h-[250px] md:h-[300px] rounded-xl overflow-hidden mt-4" data-testid="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178509261445!2d55.26295431544356!3d25.18769998389652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d1d61b9c3f%3A0x54c0c0b0f5ab5b8c!2sBurlington%20Tower%20-%20Business%20Bay%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1701600000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Prop Shop Global Location - Burlington Tower, Business Bay, Dubai"
                  className="rounded-xl"
                  data-testid="google-map-embed"
                />
              </div>
              
              {/* View on Google Maps Link */}
              <a 
                href="https://www.google.com/maps/place/Burlington+Tower+-+Business+Bay+-+Dubai+-+United+Arab+Emirates"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#ef7f1a] hover:text-[#ef7f1a]/80 font-medium transition-colors mt-2"
                data-testid="link-view-google-maps"
              >
                <MapPin className="w-4 h-4" />
                <span>View on Google Maps</span>
              </a>
            </div>
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
