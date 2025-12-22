import { Link, useLocation, useSearch } from "wouter";
import { useState, useEffect, useMemo } from "react";
import { LayoutContainer } from "@/components/layout/LayoutContainer";
import { Header } from "@/components/layout/Header";
import { Card, CardContent } from "@/components/ui/card";
import southBay4ListImage from "@assets/8_1764723336892.png";
import coveIIListImage from "@assets/img63_1764723479351.jpg";
import diamondzListImage from "@assets/DANUBE-DIAMONDZ-BROCHURE-investindxb-14.pdf_1764723549693.png";
import stellaListImage from "@assets/10.stella_residences_1764723641268.png";
import gladeHavenListImage from "@assets/09112023033443Haven_by_Aldar-83.pdf_1764723727390.png";
import samanaIbizaListImage from "@assets/IMG-1_1764723820267.jpg";
import theonAthlonListImage from "@assets/ATHLON_Brochure-31.pdf_1764723875206.png";
import jumeirahBayListImage from "@assets/WhatsApp_Image_2025-09-11_at_17.05.54_(1)_1764723983022.jpeg";
import palaceResidencesListImage from "@assets/WhatsApp_Image_2025-07-04_at_18.13.41_1764724919393.jpeg";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Search, SlidersHorizontal, RotateCcw, Bed, Bath, Maximize, Heart, Share2, Eye, ArrowRightIcon, Facebook, Instagram, Linkedin, X } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

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


const propertiesData = [
  {
    id: 1,
    image: southBay4ListImage,
    price: "4,200,000 AED",
    title: "SOUTH BAY 4",
    location: "South Bay 4, South Bay, Dubai South...",
    beds: 4,
    baths: 6,
    sqft: "3565 sqft",
    status: "for-sale",
    type: "villa",
    badge: "OFF PLAN PROPERTIES",
  },
  {
    id: 2,
    image: coveIIListImage,
    price: "2,899,999 AED",
    title: "COVE-II",
    location: "The Cove II Building II, The Cove II, Dubai...",
    beds: 2,
    baths: 2,
    sqft: "1,111 sqft",
    status: "for-sale",
    type: "apartment",
    badge: "OFF PLAN PROPERTIES",
  },
  {
    id: 3,
    image: diamondzListImage,
    price: "1,250,000 AED",
    title: "DIAMONDZ BY DANUBE",
    location: "Diamondz By Danube, Jumeirah Lake...",
    beds: 0,
    baths: 1,
    sqft: "479 sqft",
    status: "for-sale",
    type: "apartment",
    badge: "OFF PLAN PROPERTIES",
    bedsLabel: "Studio",
  },
  {
    id: 4,
    image: stellaListImage,
    price: "1,300,000 AED",
    title: "STELLA RESIDENCES",
    location: "The Stella Residences, Al Furjan, Dubai",
    beds: 1,
    baths: 2,
    sqft: "902 sqft",
    status: "for-sale",
    type: "apartment",
    badge: "OFF PLAN PROPERTIES",
  },
  {
    id: 5,
    image: gladeHavenListImage,
    price: "3,490,000 AED",
    title: "GLADE, HAVEN BY ALDAR",
    location: "Glade, Haven By Aldar, Dubai Land, Dubai",
    beds: 3,
    baths: 4,
    sqft: "2041 sqft",
    status: "for-sale",
    type: "townhouse",
    badge: "OFF PLAN PROPERTIES",
  },
  {
    id: 6,
    image: samanaIbizaListImage,
    price: "1,100,000 AED",
    title: "SAMANA IBIZA",
    location: "Samana Ibiza, Dubai Land Residence...",
    beds: 1,
    baths: 2,
    sqft: "874 sqft",
    status: "for-sale",
    type: "apartment",
    badge: "OFF PLAN PROPERTIES",
  },
  {
    id: 7,
    image: theonAthlonListImage,
    price: "4,500,000 AED",
    title: "THEON AT ATHLON",
    location: "Theon at Athlon, Athlon by Aldar, Dubai...",
    beds: 4,
    baths: 5,
    sqft: "3116 sqft",
    status: "for-sale",
    type: "villa",
    badge: "OFF PLAN PROPERTIES",
  },
  {
    id: 8,
    image: jumeirahBayListImage,
    price: "100,000 AED / Yearly",
    title: "JUMEIRAH BAY X1",
    location: "Jumeirah Bay X1, JLT Cluster X, Dubai",
    beds: 1,
    baths: 2,
    sqft: "991 sqft",
    status: "for-rent",
    type: "apartment",
    badge: "READY TO MOVE",
  },
  {
    id: 9,
    image: palaceResidencesListImage,
    price: "5,650,000 AED",
    title: "PALACE RESIDENCES 3BHK",
    location: "Palace Residences, Dubai Creek Harbour...",
    beds: 3,
    baths: 4,
    sqft: "1800 sqft",
    status: "for-sale",
    type: "penthouse",
    badge: "WATERFRONT LIVING",
  },
];

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

export const ProjectsPage = (): JSX.Element => {
  const [location, setLocation] = useLocation();
  const searchString = useSearch();
  
  const [keyword, setKeyword] = useState("");
  const [status, setStatus] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [beds, setBeds] = useState("");
  const [baths, setBaths] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(searchString);
    setKeyword(params.get("keyword") || "");
    setStatus(params.get("status") || "");
    setPropertyType(params.get("type") || "");
    setBeds(params.get("beds") || "");
    setBaths(params.get("baths") || "");
  }, [searchString]);

  const filteredProperties = useMemo(() => {
    return propertiesData.filter((property) => {
      if (keyword) {
        const searchTerm = keyword.toLowerCase();
        const matchesKeyword = 
          property.title.toLowerCase().includes(searchTerm) ||
          property.location.toLowerCase().includes(searchTerm);
        if (!matchesKeyword) return false;
      }
      
      if (status) {
        if (property.status !== status) return false;
      }
      
      if (propertyType) {
        if (property.type !== propertyType) return false;
      }
      
      if (beds) {
        if (beds === "studio" && property.beds !== 0) return false;
        if (beds === "4" && property.beds < 4) return false;
        if (beds !== "studio" && beds !== "4" && property.beds !== parseInt(beds)) return false;
      }
      
      if (baths) {
        if (baths === "4" && property.baths < 4) return false;
        if (baths !== "4" && property.baths !== parseInt(baths)) return false;
      }
      
      return true;
    });
  }, [keyword, status, propertyType, beds, baths]);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (keyword) params.set("keyword", keyword);
    if (status) params.set("status", status);
    if (propertyType) params.set("type", propertyType);
    if (beds) params.set("beds", beds);
    if (baths) params.set("baths", baths);
    
    const queryString = params.toString();
    setLocation(`/projects${queryString ? `?${queryString}` : ""}`);
  };

  const handleReset = () => {
    setKeyword("");
    setStatus("");
    setPropertyType("");
    setBeds("");
    setBaths("");
    setLocation("/projects");
  };

  const updateUrlWithFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchString);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    const queryString = params.toString();
    setLocation(`/projects${queryString ? `?${queryString}` : ""}`);
  };

  const activeFiltersCount = [keyword, status, propertyType, beds, baths].filter(Boolean).length;

  const getStatusLabel = (statusValue: string) => {
    switch (statusValue) {
      case "for-sale": return "For Sale";
      case "for-rent": return "For Rent";
      case "off-plan": return "Off Plan";
      default: return statusValue;
    }
  };
  
  return (
    <div className="flex flex-col items-center bg-for-bg-dark w-full">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <LayoutContainer className="py-8 md:py-12 lg:py-[60px]">
        {/* Title Section */}
        <div className="flex flex-col gap-3 mb-8 md:mb-10">
          <h1 className="text-[#181a20] text-2xl md:text-3xl lg:text-[36px] font-semibold" data-testid="text-page-title">
            Our Exclusive Listings
          </h1>
          <p className="text-[#717171] text-sm md:text-base lg:text-lg" data-testid="text-page-description">
            Be the first to invest in our handpicked selection of off-plan properties. Benefit from pre-launch prices and priority access to the finest residences.
          </p>
        </div>

        {/* Search Filters */}
        <div className="flex flex-wrap gap-3 md:gap-4 mb-6">
          <div className="flex-1 min-w-[200px] max-w-[400px]">
            <Input
              placeholder="What are you looking for"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="h-12 rounded-[10px] border-[#e0e0e0] text-base"
              data-testid="input-search"
            />
          </div>
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger className="w-full md:w-[140px] h-12 rounded-[10px] border-[#e0e0e0]" data-testid="select-status">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="for-sale">For Sale</SelectItem>
              <SelectItem value="for-rent">For Rent</SelectItem>
              <SelectItem value="off-plan">Off Plan</SelectItem>
            </SelectContent>
          </Select>
          <Select value={propertyType} onValueChange={setPropertyType}>
            <SelectTrigger className="w-full md:w-[140px] h-12 rounded-[10px] border-[#e0e0e0]" data-testid="select-type">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
              <SelectItem value="townhouse">Townhouse</SelectItem>
              <SelectItem value="penthouse">Penthouse</SelectItem>
            </SelectContent>
          </Select>
          <Select value={beds} onValueChange={setBeds}>
            <SelectTrigger className="w-full md:w-[120px] h-12 rounded-[10px] border-[#e0e0e0]" data-testid="select-beds">
              <SelectValue placeholder="Beds" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="studio">Studio</SelectItem>
              <SelectItem value="1">1 Bed</SelectItem>
              <SelectItem value="2">2 Beds</SelectItem>
              <SelectItem value="3">3 Beds</SelectItem>
              <SelectItem value="4">4+ Beds</SelectItem>
            </SelectContent>
          </Select>
          <Select value={baths} onValueChange={setBaths}>
            <SelectTrigger className="w-full md:w-[120px] h-12 rounded-[10px] border-[#e0e0e0]" data-testid="select-baths">
              <SelectValue placeholder="Baths" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Bath</SelectItem>
              <SelectItem value="2">2 Baths</SelectItem>
              <SelectItem value="3">3 Baths</SelectItem>
              <SelectItem value="4">4+ Baths</SelectItem>
            </SelectContent>
          </Select>
          <Button 
            variant="outline" 
            size="icon" 
            className="h-12 w-12 rounded-[10px] border-[#e0e0e0]" 
            onClick={handleReset}
            data-testid="button-reset"
          >
            <RotateCcw className="h-5 w-5 text-[#636366]" />
          </Button>
          <Dialog open={showAdvanced} onOpenChange={setShowAdvanced}>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                size="icon" 
                className={`h-12 w-12 rounded-[10px] border-[#e0e0e0] relative ${activeFiltersCount > 0 ? 'border-[#ef7f1a]' : ''}`}
                data-testid="button-filters"
              >
                <SlidersHorizontal className="h-5 w-5 text-[#636366]" />
                {activeFiltersCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#ef7f1a] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {activeFiltersCount}
                  </span>
                )}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Advanced Filters</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Keyword</label>
                  <Input
                    placeholder="Search by name or location"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    data-testid="input-advanced-keyword"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Status</label>
                  <Select value={status} onValueChange={setStatus}>
                    <SelectTrigger data-testid="select-advanced-status">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="for-sale">For Sale</SelectItem>
                      <SelectItem value="for-rent">For Rent</SelectItem>
                      <SelectItem value="off-plan">Off Plan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Property Type</label>
                  <Select value={propertyType} onValueChange={setPropertyType}>
                    <SelectTrigger data-testid="select-advanced-type">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                      <SelectItem value="townhouse">Townhouse</SelectItem>
                      <SelectItem value="penthouse">Penthouse</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Bedrooms</label>
                    <Select value={beds} onValueChange={setBeds}>
                      <SelectTrigger data-testid="select-advanced-beds">
                        <SelectValue placeholder="Beds" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="studio">Studio</SelectItem>
                        <SelectItem value="1">1 Bed</SelectItem>
                        <SelectItem value="2">2 Beds</SelectItem>
                        <SelectItem value="3">3 Beds</SelectItem>
                        <SelectItem value="4">4+ Beds</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Bathrooms</label>
                    <Select value={baths} onValueChange={setBaths}>
                      <SelectTrigger data-testid="select-advanced-baths">
                        <SelectValue placeholder="Baths" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Bath</SelectItem>
                        <SelectItem value="2">2 Baths</SelectItem>
                        <SelectItem value="3">3 Baths</SelectItem>
                        <SelectItem value="4">4+ Baths</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex gap-3 pt-2">
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={handleReset}
                    data-testid="button-advanced-reset"
                  >
                    Reset All
                  </Button>
                  <Button 
                    className="flex-1 bg-[#ef7f1a] hover:bg-[#ef7f1a]/90 text-white"
                    onClick={() => {
                      setShowAdvanced(false);
                      handleSearch();
                    }}
                    data-testid="button-advanced-apply"
                  >
                    Apply Filters
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          <Button 
            className="h-12 px-6 rounded-[10px] bg-[#ef7f1a] hover:bg-[#ef7f1a]/90 text-white font-semibold" 
            onClick={handleSearch}
            data-testid="button-search"
          >
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </div>

        {/* Active Filters Display */}
        {activeFiltersCount > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="text-sm text-[#717171]">Active filters:</span>
            {keyword && (
              <Badge variant="secondary" className="flex items-center gap-1 px-3 py-1">
                Keyword: {keyword}
                <button onClick={() => { setKeyword(""); updateUrlWithFilter("keyword", ""); }} className="ml-1 hover:opacity-70">
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {status && (
              <Badge variant="secondary" className="flex items-center gap-1 px-3 py-1">
                {getStatusLabel(status)}
                <button onClick={() => { setStatus(""); updateUrlWithFilter("status", ""); }} className="ml-1 hover:opacity-70">
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {propertyType && (
              <Badge variant="secondary" className="flex items-center gap-1 px-3 py-1">
                {propertyType.charAt(0).toUpperCase() + propertyType.slice(1)}
                <button onClick={() => { setPropertyType(""); updateUrlWithFilter("type", ""); }} className="ml-1 hover:opacity-70">
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {beds && (
              <Badge variant="secondary" className="flex items-center gap-1 px-3 py-1">
                {beds === "studio" ? "Studio" : beds === "4" ? "4+ Beds" : `${beds} Bed${beds !== "1" ? "s" : ""}`}
                <button onClick={() => { setBeds(""); updateUrlWithFilter("beds", ""); }} className="ml-1 hover:opacity-70">
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {baths && (
              <Badge variant="secondary" className="flex items-center gap-1 px-3 py-1">
                {baths === "4" ? "4+ Baths" : `${baths} Bath${baths !== "1" ? "s" : ""}`}
                <button onClick={() => { setBaths(""); updateUrlWithFilter("baths", ""); }} className="ml-1 hover:opacity-70">
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            <button 
              onClick={handleReset}
              className="text-sm text-[#ef7f1a] hover:underline ml-2"
              data-testid="button-clear-all-filters"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-[#717171]" data-testid="text-results-count">
            Showing {filteredProperties.length} of {propertiesData.length} properties
          </p>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16">
          {filteredProperties.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-[#717171] text-lg mb-4">No properties found matching your criteria.</p>
              <Button 
                variant="outline" 
                onClick={handleReset}
                className="text-[#ef7f1a] border-[#ef7f1a]"
                data-testid="button-no-results-reset"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
          filteredProperties.map((property) => (
            <Link href={`/property/${property.id}`} key={property.id}>
            <Card
              className="bg-white border border-[#e9e9e9] rounded-xl overflow-visible cursor-pointer hover-elevate"
              data-testid={`card-property-${property.id}`}
            >
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative h-[200px] md:h-[239px]">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#181a20] opacity-10" />
                  <Badge 
                    className="absolute top-5 left-5 bg-[#ef7f1a] text-white text-xs font-semibold px-3 py-1.5 rounded-md border-0"
                    data-testid={`badge-property-type-${property.id}`}
                  >
                    {property.badge}
                  </Badge>
                  <div className="absolute bottom-4 left-5 bg-white rounded-md px-4 py-2">
                    <span className="text-[#181a20] font-semibold text-sm" data-testid={`text-property-price-${property.id}`}>{property.price}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-[#181a20] font-medium text-lg mb-1" data-testid={`text-property-title-${property.id}`}>
                    {property.title}
                  </h3>
                  <p className="text-[#575757] text-sm mb-3 truncate" data-testid={`text-property-location-${property.id}`}>
                    {property.location}
                  </p>

                  {/* Property Details */}
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <div className="flex items-center gap-1.5">
                      <Bed className="w-4 h-4 text-[#181a20]" />
                      <span className="text-[#181a20] text-sm" data-testid={`text-property-beds-${property.id}`}>
                        {property.bedsLabel || `${property.beds} Beds`}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Bath className="w-4 h-4 text-[#181a20]" />
                      <span className="text-[#181a20] text-sm" data-testid={`text-property-baths-${property.id}`}>{property.baths} Baths</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Maximize className="w-4 h-4 text-[#181a20]" />
                      <span className="text-[#181a20] text-sm" data-testid={`text-property-sqft-${property.id}`}>{property.sqft}</span>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#e9e9e9]">
                    <span className="text-[#181a20] text-sm" data-testid={`text-property-status-${property.id}`}>{getStatusLabel(property.status)}</span>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="icon" className="h-9 w-9 rounded-md bg-white" data-testid={`button-favorite-${property.id}`}>
                        <Heart className="w-4 h-4 text-[#636366]" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-9 w-9 rounded-md bg-white" data-testid={`button-share-${property.id}`}>
                        <Share2 className="w-4 h-4 text-[#636366]" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-9 w-9 rounded-md bg-white" data-testid={`button-view-${property.id}`}>
                        <Eye className="w-4 h-4 text-[#636366]" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            </Link>
          ))
          )}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mb-16 md:mb-20">
          <Link href="/contact">
            <Button className="bg-[#ef7f1a] hover:bg-[#ef7f1a]/90 text-white font-semibold px-8 py-3 rounded-xl" data-testid="button-view-more">
              View More
            </Button>
          </Link>
        </div>

        {/* Projects Section - Same as Homepage */}
        <section className="flex flex-col items-start gap-6 md:gap-[30px] w-full">
          <header className="flex flex-col items-start gap-2 w-full">
            <h1 className="w-full font-h-1 font-[number:var(--h-1-font-weight)] text-icons text-2xl md:text-3xl lg:text-[length:var(--h-1-font-size)] tracking-[var(--h-1-letter-spacing)] leading-[var(--h-1-line-height)] [font-style:var(--h-1-font-style)] text-left" data-testid="text-projects-title">
              Projects
            </h1>

            <p className="w-full font-p1-regular font-[number:var(--p1-regular-font-weight)] text-placeholder text-sm md:text-base lg:text-[length:var(--p1-regular-font-size)] tracking-[var(--p1-regular-letter-spacing)] leading-[var(--p1-regular-line-height)] [font-style:var(--p1-regular-font-style)] text-left" data-testid="text-projects-description">
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

                      <Badge className="absolute bottom-3 left-3 md:bottom-4 md:left-4 bg-for-bg-dark rounded-md px-3 py-2 md:px-[17px] md:py-[11px] h-auto border-0" data-testid={`badge-project-price-${index}`}>
                        <span className="font-p3-semibold font-[number:var(--p3-semibold-font-weight)] text-icons text-xs md:text-[length:var(--p3-semibold-font-size)] tracking-[var(--p3-semibold-letter-spacing)] leading-[var(--p3-semibold-line-height)] [font-style:var(--p3-semibold-font-style)]">
                          {project.price}
                        </span>
                      </Badge>
                    </div>

                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-4 w-full mt-4">
                      <div className="flex flex-col flex-1 items-start gap-2">
                        <h3 className="w-full font-p-medium font-[number:var(--p-medium-font-weight)] text-[#1e1e1e] text-base md:text-[length:var(--p-medium-font-size)] tracking-[var(--p-medium-letter-spacing)] leading-[var(--p-medium-line-height)] [font-style:var(--p-medium-font-style)]" data-testid={`text-project-title-${index}`}>
                          {project.title}
                        </h3>

                        <p className="font-p2-regular font-[number:var(--p2-regular-font-weight)] text-[#757575] text-sm md:text-[length:var(--p2-regular-font-size)] tracking-[var(--p2-regular-letter-spacing)] leading-[var(--p2-regular-line-height)] [font-style:var(--p2-regular-font-style)]" data-testid={`text-project-location-${index}`}>
                          {project.location}
                        </p>

                        <div className="flex items-center gap-2 md:gap-3 flex-wrap">
                          <img
                            className="w-4 h-4"
                            alt="Bedrooms icon"
                            src="/figmaAssets/icon-3.svg"
                          />

                          <span className="font-p3-regular font-[number:var(--p3-regular-font-weight)] text-icons text-xs md:text-[length:var(--p3-regular-font-size)] tracking-[var(--p3-regular-letter-spacing)] leading-[var(--p3-regular-line-height)] [font-style:var(--p3-regular-font-style)]" data-testid={`text-project-bedrooms-${index}`}>
                            {project.bedrooms}
                          </span>

                          <img
                            className="w-4 h-4"
                            alt="Area icon"
                            src="/figmaAssets/icon-1.svg"
                          />

                          <span className="font-p3-regular font-[number:var(--p3-regular-font-weight)] text-icons text-xs md:text-[length:var(--p3-regular-font-size)] tracking-[var(--p3-regular-letter-spacing)] leading-[var(--p3-regular-line-height)] [font-style:var(--p3-regular-font-style)]" data-testid={`text-project-area-${index}`}>
                            {project.area}
                          </span>
                        </div>
                      </div>

                      <Link href="/contact">
                        <Button
                          variant="outline"
                          className="h-auto px-6 md:px-[43px] py-3 md:py-[17px] bg-white rounded-xl border-[#ef7f1a] hover:bg-[#ef7f1a]/5"
                          data-testid={`button-project-upcoming-${index}`}
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
      </LayoutContainer>

      {/* Footer - Same as Homepage */}
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
