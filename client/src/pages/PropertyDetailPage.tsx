import { Link, useParams, useLocation } from "wouter";
import { useState } from "react";
import { LayoutContainer } from "@/components/layout/LayoutContainer";
import { Header } from "@/components/layout/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Bed, Bath, Car, Maximize, MapPin, Phone, Building2, Waves, Trees, Dumbbell, Users, Baby, Shield, PawPrint, Facebook, Instagram, Linkedin } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useToast } from "@/hooks/use-toast";

import southBay4Main from "@assets/1_1764720841330.png";
import southBay4Gallery2 from "@assets/2_1764720841330.png";
import southBay4Gallery3 from "@assets/3_1764720841331.png";
import southBay4Gallery4 from "@assets/4_1764720841331.png";
import southBay4Gallery5 from "@assets/5_1764720841331.png";
import southBay4Gallery6 from "@assets/6_1764720841331.png";
import southBay4Gallery7 from "@assets/7_1764720841330.png";

import coveIIMain from "@assets/img118_1764721577533.jpg";
import coveIIGallery2 from "@assets/img45_1764721592588.jpg";
import coveIIGallery3 from "@assets/img92_1764721603648.jpg";
import coveIIGallery4 from "@assets/img136_1764721618988.jpg";
import coveIIGallery5 from "@assets/img139_1764721618988.jpg";

import diamondzMain from "@assets/DANUBE-DIAMONDZ-BROCHURE-investindxb-14.pdf_1764724160838.png";
import diamondzGallery2 from "@assets/DANUBE-DIAMONDZ-BROCHURE-investindxb-9.pdf_1764724209363.png";
import diamondzGallery3 from "@assets/bedroom_(1)_1764724270037.jpg";
import diamondzGallery4 from "@assets/living-room-1-bedroom_1764724277823.jpg";
import diamondzGallery5 from "@assets/DANUBE-DIAMONDZ-BROCHURE-investindxb-15.pdf_1764724287008.png";

import stellaMain from "@assets/10.stella_residences_1764724335744.png";
import stellaGallery2 from "@assets/03._stella_residence_s_1764724326176.png";
import stellaGallery3 from "@assets/01._stella_residences.img_1764724345758.jpg";
import stellaGallery4 from "@assets/09.stella_residences_1764724354580.png";
import stellaGallery5 from "@assets/02._stella_residences_1764724362682.jpeg";

import gladeHavenMain from "@assets/09112023033443Haven_by_Aldar-83.pdf_1764724417614.png";
import gladeHavenGallery2 from "@assets/09112023033443Haven_by_Aldar-24.pdf_1764724438163.png";
import gladeHavenGallery3 from "@assets/09112023033443Haven_by_Aldar-89.pdf_1764724447890.png";
import gladeHavenGallery4 from "@assets/09112023033443Haven_by_Aldar-30.pdf_1764724462905.png";
import gladeHavenGallery5 from "@assets/09112023033443Haven_by_Aldar-29.pdf_1764724470601.png";

import samanaIbizaMain from "@assets/IMG-1_1764724518346.jpg";
import samanaIbizaGallery2 from "@assets/19292_1764724524639.jpg";
import samanaIbizaGallery3 from "@assets/19290_1764724543718.jpg";
import samanaIbizaGallery4 from "@assets/19291_1764724543719.jpg";
import samanaIbizaGallery5 from "@assets/19296_1764724543720.jpg";

import theonAthlonMain from "@assets/ATHLON_Brochure-32.pdf_1764724585093.png";
import theonAthlonGallery2 from "@assets/ATHLon_1_1764724598012.png";
import theonAthlonGallery3 from "@assets/ATHLON_Brochure-21.pdf_1764724598013.png";
import theonAthlonGallery4 from "@assets/ATHLON_Brochure-70.pdf_1764724654147.png";
import theonAthlonGallery5 from "@assets/ATHLON_Brochure-71.pdf_1764724654147.png";

import jumeirahBayMain from "@assets/WhatsApp_Image_2025-09-11_at_17.05.53_(1)_1764724770131.jpeg";
import jumeirahBayGallery2 from "@assets/WhatsApp_Image_2025-09-11_at_17.05.54_(1)_1764724770132.jpeg";
import jumeirahBayGallery3 from "@assets/WhatsApp_Image_2025-09-11_at_17.05.54_1764724770132.jpeg";
import jumeirahBayGallery4 from "@assets/WhatsApp_Image_2025-09-11_at_17.05.55_(1)_1764724770133.jpeg";
import jumeirahBayGallery5 from "@assets/WhatsApp_Image_2025-09-11_at_17.05.55_1764724770134.jpeg";

import palaceResidencesMain from "@assets/WhatsApp_Image_2025-07-04_at_18.13.34_(1)_1764724870919.jpeg";
import palaceResidencesGallery2 from "@assets/WhatsApp_Image_2025-07-04_at_18.13.34_1764724870920.jpeg";
import palaceResidencesGallery3 from "@assets/WhatsApp_Image_2025-07-04_at_18.13.39_1764724870922.jpeg";
import palaceResidencesGallery4 from "@assets/WhatsApp_Image_2025-07-04_at_18.13.41_(1)_1764724870923.jpeg";
import palaceResidencesGallery5 from "@assets/WhatsApp_Image_2025-07-04_at_18.13.41_1764724870923.jpeg";

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


const budgetOptions = [
  { value: "under-500k", label: "Under AED 500,000" },
  { value: "500k-1m", label: "AED 500,000 - 1,000,000" },
  { value: "1m-2m", label: "AED 1,000,000 - 2,000,000" },
  { value: "2m-5m", label: "AED 2,000,000 - 5,000,000" },
  { value: "5m-10m", label: "AED 5,000,000 - 10,000,000" },
  { value: "above-10m", label: "Above AED 10,000,000" },
];

interface PropertyData {
  id: number;
  title: string;
  location: string;
  price: string;
  pricePerSqft: string;
  saleType: string;
  referenceId: string;
  headline: string;
  description: string;
  images: {
    main: string;
    gallery: string[];
  };
  features: {
    bedrooms: number;
    bedroomsLabel: string;
    bathrooms: number;
    garage: number;
    builtYear: number;
    sqft: string;
    landSize: string;
  };
  propertyFeatures: string[];
  communityAmenities: string[];
  specifications: {
    status: string;
    floors: number;
    bathrooms: number;
    yearBuilt: string;
    landArea: string;
    projectId: string;
  };
  amenities: Array<{ icon: string; label: string }>;
  nearbyLocations: Array<{ name: string; distance: string }>;
  schools: string[];
}

const propertiesDataMap: Record<string, PropertyData> = {
  "1": {
    id: 1,
    title: "SOUTH BAY 4",
    location: "South Bay 4, South Bay, Dubai South (Dubai World Central), Dubai",
    price: "4,200,000 AED",
    pricePerSqft: "1,178/Sq Ft",
    saleType: "Sale",
    referenceId: "HM01-SBDS-041",
    headline: "Premium Townhouse | Lagoon Living | Spacious Layout",
    description: "Prop Shop Global Real Estate proudly presents this premium four-bedroom townhouse in the vibrant South Bay 4 community. Perfect for families seeking comfort, space, and a dynamic neighborhood to call home. This is a perfect opportunity to invest in a well-planned community that offers lifestyle, convenience, and long-term value.",
    images: {
      main: southBay4Main,
      gallery: [
        southBay4Gallery2,
        southBay4Gallery3,
        southBay4Gallery4,
        southBay4Gallery5,
        southBay4Gallery6,
        southBay4Gallery7,
      ],
    },
    features: {
      bedrooms: 4,
      bedroomsLabel: "Bedrooms",
      bathrooms: 6,
      garage: 2,
      builtYear: 2026,
      sqft: "3565 sqft",
      landSize: "2745 Sq Ft",
    },
    propertyFeatures: [
      "Four ensuite bedrooms",
      "Six bathrooms",
      "Maid's room with attached bathroom",
      "Open kitchen layout",
      "Spacious living and dining area",
      "Private garden and covered parking",
    ],
    communityAmenities: [
      "Crystal lagoon and swimming pool",
      "Clubhouse and fitness center",
      "Jogging and cycling tracks",
      "Yoga and meditation areas",
      "Shopping mall and dining outlets",
      "Mosque, parks, and green spaces",
      "Family-friendly gated community",
    ],
    specifications: {
      status: "Off Plan",
      floors: 4,
      bathrooms: 6,
      yearBuilt: "Q4 2026",
      landArea: "2745 Sq Ft",
      projectId: "HM01-SBDS-041",
    },
    amenities: [
      { icon: "Building2", label: "Balcony" },
      { icon: "Building2", label: "Built-in Wardrobes" },
      { icon: "Car", label: "Covered Parking" },
      { icon: "Users", label: "Maids Room" },
      { icon: "PawPrint", label: "Pets Allowed" },
      { icon: "Trees", label: "Private Garden" },
      { icon: "Waves", label: "Private Pool" },
    ],
    nearbyLocations: [
      { name: "Expo City", distance: "6 mins" },
      { name: "Al Maktoum International Airport", distance: "19 mins" },
      { name: "Dubai Mall", distance: "38 mins" },
      { name: "Jumeirah Beach Residence & Marina", distance: "36 mins" },
    ],
    schools: [
      "GEMS First Point School - 3 km",
      "South View School - 5 km",
    ],
  },
  "2": {
    id: 2,
    title: "COVE-II",
    location: "The Cove II Building 9, The Cove II, Dubai Creek Harbour (The Lagoons), Dubai",
    price: "2,899,999 AED",
    pricePerSqft: "2,610/Sq Ft",
    saleType: "Sale",
    referenceId: "HM01-EMDCH-021-0",
    headline: "Water View | High ROI | Handover Q4 2026",
    description: "Prop Shop Global Real Estate is excited to present a 2 Bedroom Apartment at The Cove II-Building 9 by Emaar, located in the heart of Dubai Creek Harbour with direct access to Creek Island's vibrant waterfront. This 20-storey residential tower is part of The Cove II, a sophisticated waterfront development offering exceptional views, modern finishes, and lifestyle amenities. Whether you're seeking a family home or a high-potential investment, this is a rare opportunity in one of Dubai's fastest-growing areas.",
    images: {
      main: coveIIMain,
      gallery: [
        coveIIGallery2,
        coveIIGallery3,
        coveIIGallery4,
        coveIIGallery5,
      ],
    },
    features: {
      bedrooms: 2,
      bedroomsLabel: "Bedrooms",
      bathrooms: 2,
      garage: 1,
      builtYear: 2026,
      sqft: "1,111 sqft",
      landSize: "1,111 Sq Ft",
    },
    propertyFeatures: [
      "2 Bedrooms with 2 Bathrooms",
      "1,111 Sq. Ft living space",
      "2 Private Balconies",
      "Modern Layout by Emaar",
      "Family-friendly & Pet-friendly Community",
      "Ideal for Investment or End Use",
    ],
    communityAmenities: [
      "Swimming Pool & Sun Deck",
      "Fully Equipped Gymnasium",
      "Creek Promenade Access",
      "Children's Play Area",
      "Nearby Supermarkets & Retail Outlets",
      "24/7 Security & Concierge",
      "Close to Central Park & Ras Al Khor Wildlife Sanctuary",
      "Walking Distance to Creek Marina & Central Park",
    ],
    specifications: {
      status: "Off Plan",
      floors: 20,
      bathrooms: 2,
      yearBuilt: "Q4 2026",
      landArea: "1,111 Sq Ft",
      projectId: "HM01-EMDCH-021-0",
    },
    amenities: [
      { icon: "Building2", label: "Balcony" },
      { icon: "Waves", label: "Central A/C" },
      { icon: "Car", label: "Covered Parking" },
      { icon: "PawPrint", label: "Pets Allowed" },
      { icon: "Dumbbell", label: "Shared Gym" },
      { icon: "Building2", label: "View of Landmark" },
      { icon: "Baby", label: "Children's Play Area" },
      { icon: "Building2", label: "Lobby in Building" },
      { icon: "Waves", label: "Children's Pool" },
    ],
    nearbyLocations: [
      { name: "DXB Airport", distance: "15 mins" },
      { name: "Central Park", distance: "Walking distance" },
      { name: "Ras Al Khor Wildlife Sanctuary", distance: "Nearby" },
      { name: "Festival City", distance: "Nearby" },
    ],
    schools: [
      "Swiss International Scientific School - 1.2 km",
      "Deira International School - 3.2 km",
    ],
  },
  "3": {
    id: 3,
    title: "DIAMONDZ BY DANUBE",
    location: "Diamondz By Danube, Jumeirah Lake Towers, Dubai",
    price: "1,250,000 AED",
    pricePerSqft: "2,982/Sq Ft",
    saleType: "Sale",
    referenceId: "GUN01-DANJLT-001",
    headline: "Jumeirah Island View | Fully Furnished | PHPP",
    description: "Prop Shop Global Real Estate presents this brand-new studio apartment in Diamondz by Danube, an iconic 65-storey residential tower located in the lively Jumeirah Lakes Towers community. This residence offers an excellent opportunity for professionals and investors seeking a modern lifestyle in a premium address. This studio in Diamondz by Danube combines luxury, location, and convenience, offering a refined lifestyle in one of Dubai's most dynamic communities.",
    images: {
      main: diamondzMain,
      gallery: [
        diamondzGallery2,
        diamondzGallery3,
        diamondzGallery4,
        diamondzGallery5,
      ],
    },
    features: {
      bedrooms: 0,
      bedroomsLabel: "Studio",
      bathrooms: 1,
      garage: 1,
      builtYear: 2025,
      sqft: "419 sqft",
      landSize: "419 Sq Ft",
    },
    propertyFeatures: [
      "Studio Apartment with 1 Bathroom",
      "Size: 419 sq ft",
      "Modern open-plan layout",
      "Fitted kitchen with contemporary finishes",
      "Balcony with community view",
      "Built-in wardrobes and smart storage solutions",
    ],
    communityAmenities: [
      "Infinity swimming pool and pool cabanas",
      "Aqua gym and outdoor fitness zones",
      "Badminton and basketball courts",
      "Jogging track and cricket pitch",
      "Jacuzzi, sauna, and spa",
      "Children's pool, splash pad, and kids' club",
      "Outdoor cinema, library, and business lounge",
      "Beauty salon, prayer rooms, and concierge service",
      "Three basement levels of secure parking",
    ],
    specifications: {
      status: "Off Plan",
      floors: 65,
      bathrooms: 1,
      yearBuilt: "2025",
      landArea: "419 Sq Ft",
      projectId: "GUN01-DANJLT-001",
    },
    amenities: [
      { icon: "Building2", label: "Built-in Wardrobes" },
      { icon: "Waves", label: "Central A/C" },
      { icon: "Waves", label: "Shared Pool" },
      { icon: "Dumbbell", label: "Shared Gym" },
      { icon: "Building2", label: "Lobby in Building" },
    ],
    nearbyLocations: [
      { name: "Palm Jumeirah", distance: "10 mins" },
      { name: "Emirates Golf Club", distance: "Close proximity" },
      { name: "Marina Beach", distance: "Close proximity" },
      { name: "Sheikh Zayed Road", distance: "Easy access" },
    ],
    schools: [
      "Emirates International School, Meadows - 3.5 km",
      "Dubai British School, Emirates Hills - 4.0 km",
      "Regent International School - 4.2 km",
    ],
  },
  "4": {
    id: 4,
    title: "STELLA RESIDENCES",
    location: "The Stella Residences, Al Furjan, Dubai",
    price: "1,300,000 AED",
    pricePerSqft: "1,441/Sq Ft",
    saleType: "Sale",
    referenceId: "SAG01-ALGTAFURJN-011",
    headline: "Urgent Deal | Near to Handover | Near Metro",
    description: "Prop Shop Global Real Estate is delighted to present this 1-bedroom apartment in the upcoming The Stella Residences, located in the vibrant Al Furjan community. Offering contemporary design, luxurious living, and a range of premium amenities, this residence is perfect for investors and end-users seeking comfort and convenience in a thriving neighborhood. This is an exceptional opportunity to secure a modern home in one of Dubai's fastest-growing communities.",
    images: {
      main: stellaMain,
      gallery: [
        stellaGallery2,
        stellaGallery3,
        stellaGallery4,
        stellaGallery5,
      ],
    },
    features: {
      bedrooms: 1,
      bedroomsLabel: "Bedroom",
      bathrooms: 2,
      garage: 1,
      builtYear: 2026,
      sqft: "902 sqft",
      landSize: "83.86 SQM",
    },
    propertyFeatures: [
      "Spacious 1-Bedroom Apartment",
      "Large Terrace with Outdoor Space",
      "Open-Plan Living and Dining Area",
      "Modern Fully-Fitted Kitchen",
      "Built-in Wardrobes",
      "En-suite Bathroom with Premium Finishes",
      "Guest Powder Room",
      "Dedicated Storage Space",
      "Contemporary Layout with Smart Space Utilization",
    ],
    communityAmenities: [
      "Children's swimming pool and indoor/outdoor play areas",
      "Resort-style swimming pool with sun loungers",
      "Fully equipped fitness centre and spa",
      "Landscaped gardens and relaxation areas",
      "Dedicated community spaces for social gatherings",
      "24/7 Security and basement parking",
    ],
    specifications: {
      status: "Off Plan",
      floors: 1,
      bathrooms: 2,
      yearBuilt: "Q1 2026",
      landArea: "902 Sq Ft",
      projectId: "SAG01-ALGTAFURJN-011",
    },
    amenities: [
      { icon: "Building2", label: "Balcony" },
      { icon: "Building2", label: "Built-in Wardrobes" },
      { icon: "Car", label: "Covered Parking" },
      { icon: "Waves", label: "Shared Pool" },
      { icon: "Dumbbell", label: "Shared Gym" },
      { icon: "Building2", label: "Lobby in Building" },
      { icon: "Building2", label: "Vastu-compliant" },
    ],
    nearbyLocations: [
      { name: "Dubai Mall", distance: "27 mins" },
      { name: "Palm Jumeirah", distance: "18 mins" },
      { name: "The Walk JBR", distance: "19 mins" },
      { name: "Dubai International Airport (DXB)", distance: "34 mins" },
      { name: "Al Maktoum International Airport", distance: "26 mins" },
    ],
    schools: [
      "The Arbor School - 0.6 km (British Curriculum)",
      "Arcadia Global School - 1.2 km (British Curriculum)",
      "Delhi Private School Dubai - 2.2 km (Indian Curriculum)",
    ],
  },
  "5": {
    id: 5,
    title: "GLADE, HAVEN BY ALDAR",
    location: "Glade, Haven By Aldar, Dubai Land, Dubai",
    price: "3,400,000 AED",
    pricePerSqft: "1,605/Sq Ft",
    saleType: "Sale",
    referenceId: "KRI01-HAVENDL-031",
    headline: "Corner Unit | Motivated Seller | Prime Location",
    description: "Prop Shop Global Real Estate is delighted to present this 3-bedroom townhouse in Haven by Aldar, a wellness-inspired residential community nestled in Wadi Al Safa 5, Dubailand. Designed with nature, sustainability, and modern family living in mind, this property offers a serene retreat without compromising on urban connectivity and convenience. This 3-bedroom townhouse offers the perfect blend of luxury, comfort, and sustainability.",
    images: {
      main: gladeHavenMain,
      gallery: [
        gladeHavenGallery2,
        gladeHavenGallery3,
        gladeHavenGallery4,
        gladeHavenGallery5,
      ],
    },
    features: {
      bedrooms: 3,
      bedroomsLabel: "Bedrooms",
      bathrooms: 4,
      garage: 2,
      builtYear: 2028,
      sqft: "2119 sqft",
      landSize: "1816 Sq Ft",
    },
    propertyFeatures: [
      "3 Bedrooms + Maid's Room",
      "4 Bathrooms",
      "BUA: 2,118.96 sq. ft",
      "Ground + First Floor Layout",
      "Spacious Living and Dining Area opening to private garden",
      "Open-Plan Kitchen with modern cabinetry and natural light",
      "Maid's Room with En-suite Bathroom",
      "Guest Powder Room on ground floor",
      "Private Garden & Outdoor Terrace",
      "Master Bedroom with Walk-in Closet and Private Balcony",
      "Two Secondary Bedrooms with Shared Bathroom",
      "Covered Parking for 2 Cars",
    ],
    communityAmenities: [
      "Family and Lap Swimming Pools",
      "Fully Equipped Fitness Centre and Wellness Studio",
      "Running and Cycling Tracks",
      "Yoga Decks and Meditation Spaces",
      "Children's Play Areas and Splash Park",
      "Clubhouse and Community Lounge",
      "Landscaped Parks and Green Trails",
      "Retail Promenade and Café Spaces",
      "24/7 Security and Gated Access",
    ],
    specifications: {
      status: "Off Plan",
      floors: 2,
      bathrooms: 4,
      yearBuilt: "March 2028",
      landArea: "1816 Sq Ft",
      projectId: "KRI01-HAVENDL-031",
    },
    amenities: [
      { icon: "Building2", label: "Built-in Wardrobes" },
      { icon: "Car", label: "Covered Parking" },
      { icon: "Users", label: "Maids Room" },
      { icon: "PawPrint", label: "Pets Allowed" },
      { icon: "Trees", label: "Private Garden" },
      { icon: "Waves", label: "Shared Pool" },
      { icon: "Shield", label: "Security" },
      { icon: "Dumbbell", label: "Shared Gym" },
      { icon: "Building2", label: "Walk-in Closet" },
      { icon: "Baby", label: "Children's Play Area" },
    ],
    nearbyLocations: [
      { name: "Dubai Hills Mall", distance: "20 mins" },
      { name: "Dubai Mall", distance: "22 mins" },
      { name: "Al Maktoum International Airport", distance: "33 mins" },
    ],
    schools: [
      "GEMS Winchester School - 2.7 km (British Curriculum)",
      "Victory Heights Primary School - 2.9 km (British Curriculum)",
    ],
  },
  "6": {
    id: 6,
    title: "SAMANA IBIZA",
    location: "Samana Ibiza, Dubai Land Residence Complex, Dubai Land, Dubai",
    price: "1,100,000 AED",
    pricePerSqft: "1,280/Sq Ft",
    saleType: "Sale",
    referenceId: "HM01-DLANDSMNA-011",
    headline: "Below OP | Investor Deal | Private Pool",
    description: "Prop Shop Global Real Estate is delighted to present this 1 bedroom apartment in the upcoming Samana Ibiza, located in the DubaiLand Residence Complex. Offering modern design, private luxury and world class amenities, this residence is ideal for investors and end users seeking contemporary comfort in a thriving community. With every apartment featuring its own private pool and a perfect blend of style and functionality, Samana Ibiza redefines urban living.",
    images: {
      main: samanaIbizaMain,
      gallery: [
        samanaIbizaGallery2,
        samanaIbizaGallery3,
        samanaIbizaGallery4,
        samanaIbizaGallery5,
      ],
    },
    features: {
      bedrooms: 1,
      bedroomsLabel: "Bedroom",
      bathrooms: 2,
      garage: 1,
      builtYear: 2028,
      sqft: "859 sqft",
      landSize: "859 Sq Ft",
    },
    propertyFeatures: [
      "Spacious 1-Bedroom Apartment",
      "Private Pool on Balcony",
      "Large Balcony with Outdoor Seating Area",
      "Open-Plan Living & Dining Area",
      "Modern Fully-Fitted Kitchen",
      "Bedroom with Built-in Wardrobes & Dressing Area",
      "En-suite Bathroom with Premium Finishes",
      "Guest Powder Room",
      "Dedicated Laundry Space",
      "Floor-to-Ceiling Windows for Natural Light",
      "Contemporary Layout with Smart Space Utilization",
    ],
    communityAmenities: [
      "Resort style swimming pool and sunken seating areas",
      "Fully equipped fitness centre and spa",
      "Children's play area and family friendly community spaces",
      "Dedicated community centre with social spaces",
      "Landscaped areas for relaxation",
      "Round the clock security and basement parking",
    ],
    specifications: {
      status: "Off Plan",
      floors: 1,
      bathrooms: 2,
      yearBuilt: "April 2028",
      landArea: "859 Sq Ft",
      projectId: "HM01-DLANDSMNA-011",
    },
    amenities: [
      { icon: "Building2", label: "Built-in Wardrobes" },
      { icon: "Car", label: "Covered Parking" },
      { icon: "Dumbbell", label: "Shared Gym" },
      { icon: "Baby", label: "Children's Play Area" },
      { icon: "Building2", label: "Lobby in Building" },
      { icon: "Waves", label: "Children's Pool" },
    ],
    nearbyLocations: [
      { name: "Dubai Mall", distance: "20 mins" },
      { name: "Palm Jumeirah & Burj Al Arab", distance: "30 mins" },
      { name: "JBR Walk", distance: "34 mins" },
      { name: "Dubai International Airport (DXB)", distance: "21 mins" },
      { name: "Al Maktoum International Airport", distance: "32 mins" },
    ],
    schools: [
      "Nearby schools in Dubai Land area",
    ],
  },
  "7": {
    id: 7,
    title: "THEON AT ATHLON",
    location: "Theon at Athlon, Athlon by Aldar, Dubai Land, Dubai",
    price: "4,500,000 AED",
    pricePerSqft: "1,443/Sq Ft",
    saleType: "Sale",
    referenceId: "SUJ01-ALDARD3-041",
    headline: "2 Corner Unit | Near to Amenities | Negotiable",
    description: "Prop Shop Global Real Estate presents this brand-new 4-bedroom Townhouse in Theon at Athlon, a contemporary sub-community within the vibrant Athlon district in Dubai. This Townhouse offers an excellent opportunity for families and investors looking to be part of a modern, amenity-rich community. This Townhouse offers a perfect blend of modern design, community living, and lifestyle convenience in one of Dubai's upcoming residential hotspots.",
    images: {
      main: theonAthlonMain,
      gallery: [
        theonAthlonGallery2,
        theonAthlonGallery3,
        theonAthlonGallery4,
        theonAthlonGallery5,
      ],
    },
    features: {
      bedrooms: 4,
      bedroomsLabel: "Bedrooms + Maid Room",
      bathrooms: 5,
      garage: 2,
      builtYear: 2025,
      sqft: "3118 sqft",
      landSize: "3118 Sq Ft",
    },
    propertyFeatures: [
      "4 Bedrooms + Maid Room",
      "5 Bathrooms",
      "Size: 3118.20 sq ft",
      "Spacious living and dining areas",
      "Open-plan kitchen with fitted cabinets",
      "Private garden and terrace access",
      "Built-in wardrobes and ample storage",
    ],
    communityAmenities: [
      "Basketball court, climbing wall, and skate park",
      "Family and lap pools, splash pad, and outdoor cinema",
      "Outdoor fitness facilities, running track, and cycle routes",
      "Padel tennis court, table tennis courts, and yoga & meditation areas",
      "Landscaped gardens, clubhouse, and public transport access",
    ],
    specifications: {
      status: "Off Plan",
      floors: 2,
      bathrooms: 5,
      yearBuilt: "2025",
      landArea: "3118 Sq Ft",
      projectId: "SUJ01-ALDARD3-041",
    },
    amenities: [
      { icon: "Building2", label: "Built-in Wardrobes" },
      { icon: "Waves", label: "Central A/C" },
      { icon: "Car", label: "Covered Parking" },
      { icon: "Users", label: "Maids Room" },
      { icon: "Trees", label: "Private Garden" },
      { icon: "Baby", label: "Children's Play Area" },
    ],
    nearbyLocations: [
      { name: "Global Village", distance: "1.4 km" },
      { name: "IMG Worlds of Adventure", distance: "2.4 km" },
      { name: "Arabian Ranches Golf Club", distance: "5 km" },
    ],
    schools: [
      "GEMS Winchester School - 2.7 km (British curriculum)",
      "Victory Heights Primary School - 2.9 km (British curriculum)",
      "Dunecrest American School - 3.6 km (American IB curriculum)",
      "Jumeirah English Speaking School, Arabian Ranches - 4.5 km (British & IB curriculum)",
    ],
  },
  "8": {
    id: 8,
    title: "JUMEIRAH BAY X1",
    location: "Jumeirah Bay X1, JLT Cluster X, Jumeirah Lake Towers, Dubai",
    price: "100,000 AED / Yearly",
    pricePerSqft: "101/Sq Ft",
    saleType: "Rent",
    referenceId: "SAG01-MISMAKJLT-011",
    headline: "Ready to Move In | Golf View | Negotiable",
    description: "Prop Shop Global Real Estate presents this spacious and bright 1 bedroom apartment in Jumeirah Bay X1, located in the lively Jumeirah Lakes Towers community. The apartment is ideal for professionals or small families who want a central location with modern comforts. This apartment offers the perfect combination of comfort, convenience and lifestyle in one of Dubai's most popular communities.",
    images: {
      main: jumeirahBayMain,
      gallery: [
        jumeirahBayGallery2,
        jumeirahBayGallery3,
        jumeirahBayGallery4,
        jumeirahBayGallery5,
      ],
    },
    features: {
      bedrooms: 1,
      bedroomsLabel: "Bedroom",
      bathrooms: 2,
      garage: 1,
      builtYear: 2015,
      sqft: "991 sqft",
      landSize: "991 Sq Ft",
    },
    propertyFeatures: [
      "1 Bedroom",
      "2 Bathrooms",
      "Size 991.46 sq ft approximately",
      "Golf views",
      "Unfurnished",
      "Built-in wardrobes and ample storage",
      "Open plan kitchen with fitted cabinets",
      "Balcony access",
    ],
    communityAmenities: [
      "24-hour security and CCTV surveillance",
      "Covered parking",
      "Shared swimming pool and fully equipped gym",
      "Sauna and steam room facilities",
      "High-speed elevators",
      "Concierge and maintenance services",
    ],
    specifications: {
      status: "Ready",
      floors: 1,
      bathrooms: 2,
      yearBuilt: "Ready",
      landArea: "991 Sq Ft",
      projectId: "SAG01-MISMAKJLT-011",
    },
    amenities: [
      { icon: "Building2", label: "Balcony" },
      { icon: "Building2", label: "Built-in Wardrobes" },
      { icon: "Car", label: "Covered Parking" },
      { icon: "Waves", label: "Shared Pool" },
      { icon: "Dumbbell", label: "Shared Gym" },
    ],
    nearbyLocations: [
      { name: "Sobha Realty Metro Station", distance: "2 min walk" },
      { name: "Sheikh Zayed Road", distance: "Easy access" },
      { name: "Lakes and landscaped parks", distance: "Nearby" },
    ],
    schools: [
      "Emirates International School Meadows - 1.8 km (IB curriculum)",
      "Regent International School - 2.3 km (British curriculum)",
    ],
  },
  "9": {
    id: 9,
    title: "PALACE RESIDENCES 3BHK",
    location: "Palace Residences, Dubai Creek Harbour (The Lagoons), Dubai",
    price: "5,650,000 AED",
    pricePerSqft: "3,139/Sq Ft",
    saleType: "Sale",
    referenceId: "HM01-EMDCH-031",
    headline: "Burj and Creek Beach View | Spacious | Maids Room",
    description: "Prop Shop Global Real Estate is proud to offer this spacious 3-bedroom apartment with a maid's room at Palace Residences by Emaar, featuring stunning views of Creek Beach and the Burj Khalifa. Set in one of Dubai's most vibrant waterfront locations, Palace Residences offers a relaxed yet upscale lifestyle with everything you need just steps away. The apartment is part of a beautifully designed development with two 44-storey towers, offering a mix of 1 to 4-bedroom branded homes managed by Address Hotels + Resorts. With open views of the canal, beach, and iconic skyline, this apartment is perfect whether you're planning to move in or looking for a high-potential investment.",
    images: {
      main: palaceResidencesMain,
      gallery: [
        palaceResidencesGallery2,
        palaceResidencesGallery3,
        palaceResidencesGallery4,
        palaceResidencesGallery5,
      ],
    },
    features: {
      bedrooms: 3,
      bedroomsLabel: "Bedrooms + Maid's Room",
      bathrooms: 4,
      garage: 2,
      builtYear: 2024,
      sqft: "1800 sqft",
      landSize: "1800 Sq Ft",
    },
    propertyFeatures: [
      "3 Bedrooms + Maid's Room",
      "4 Bathrooms",
      "2 Private Balconies",
      "1,800 Sq. Ft",
      "2 Covered Parking Spaces",
      "Direct views of Creek Beach & Burj Khalifa",
    ],
    communityAmenities: [
      "Swimming Pool",
      "Fully Equipped Gym",
      "Kids Play Area",
      "Health Care Centre",
      "Fine Dining Restaurants",
      "Supermarket & Retail Outlets",
      "Direct Access to Creek Promenade",
      "Walking distance to Palace Hotel & Creek Marina",
    ],
    specifications: {
      status: "Ready",
      floors: 1,
      bathrooms: 4,
      yearBuilt: "2024",
      landArea: "1800 Sq Ft",
      projectId: "HM01-EMDCH-031",
    },
    amenities: [
      { icon: "Building2", label: "Balcony" },
      { icon: "Building2", label: "Built-in Wardrobes" },
      { icon: "Car", label: "Covered Parking" },
      { icon: "Shield", label: "Security" },
      { icon: "Users", label: "Maids Room" },
      { icon: "Dumbbell", label: "Shared Gym" },
      { icon: "Waves", label: "Central A/C" },
      { icon: "Waves", label: "View of Water" },
      { icon: "Building2", label: "View of Landmark" },
      { icon: "Baby", label: "Children's Play Area" },
      { icon: "Building2", label: "Lobby in Building" },
      { icon: "Waves", label: "Children's Pool" },
    ],
    nearbyLocations: [
      { name: "Creek Beach", distance: "Direct view" },
      { name: "Burj Khalifa", distance: "Direct view" },
      { name: "Palace Hotel", distance: "Walking distance" },
      { name: "Creek Marina", distance: "Walking distance" },
      { name: "Creek Promenade", distance: "Direct access" },
    ],
    schools: [
      "Nearby schools in Dubai Creek Harbour area",
    ],
  },
};

const defaultPropertyData = {
  id: 1,
  title: "THEON AT ATHLON",
  location: "Theon at Athlon, Athlon by Aldar, Dubai Land, Dubai",
  price: "4,500,000 AED",
  pricePerSqft: "1,200/Sq Ft",
  saleType: "Sale",
  referenceId: "SUJ01-ALDARD3-041",
  headline: "2 CORNER UNIT | NEAR TO AMENITIES | NEGOTIABLE",
  description: "Prop Shop Global Real Estate presents this brand-new 4-bedroom Townhouse in Theon at Athlon, a contemporary sub-community within the vibrant Athlon district in Dubai. This Townhouse offers an excellent opportunity for families and investors looking to be part of a modern, amenity-rich community",
  images: {
    main: "/figmaAssets/rectangle-4403.png",
    gallery: [
      "/figmaAssets/rectangle-4405.png",
      "/figmaAssets/rectangle-4406.png",
      "/figmaAssets/rectangle-4407.png",
      "/figmaAssets/frame-2071857208.png",
    ],
  },
  features: {
    bedrooms: 4,
    bedroomsLabel: "Bedrooms + Maid Room",
    bathrooms: 5,
    garage: 2,
    builtYear: 2024,
    sqft: "3565 sqft",
    landSize: "3116 Sq Ft",
  },
  propertyFeatures: [
    "Spacious living and dining areas",
    "Open-plan kitchen with fitted cabinets",
    "Private garden and terrace access",
    "Built-in wardrobes and ample storage",
  ],
  communityAmenities: [
    "Basketball court, LAY driving path, and skate park",
    "Family-safe parks, splash pad, and outdoor cinemas",
    "Martial arts facilities, training yards, and cycle tracks",
    "Retail service courts, table tennis courts, and yoga & meditation areas",
    "Landscaped gardens, clubhouses, and public transport access",
  ],
  specifications: {
    status: "Off Plan",
    floors: 4,
    bathrooms: 5,
    yearBuilt: "2024",
    landArea: "3116 Sq Ft",
    projectId: "SUJ01-ALDARD3-041",
  },
  amenities: [
    { icon: "Building2", label: "Built-in Wardrobes" },
    { icon: "Waves", label: "Central A/C" },
    { icon: "Car", label: "Covered Parking" },
    { icon: "Users", label: "Maids Room" },
    { icon: "Trees", label: "Private Garden" },
    { icon: "Baby", label: "Children's Play Area" },
  ],
  nearbyLocations: [
    { name: "Global Village", distance: "2 kms" },
    { name: "IMG Worlds of Adventure", distance: "2 kms" },
    { name: "Dubai Racing Club (Meydan Racecourse All Quoz 2) & Bab", distance: "7 kms" },
    { name: "Parks oasis park, safari desert camp, yoga & meditation areas", distance: "" },
    { name: "Landscaped gardens, clubhouses, and public transport access", distance: "" },
  ],
  schools: [
    "GEMS Winchester Institute Dubai - 2.7 km, British curriculum",
    "Victory Heights Primary School - 2.9 km, British curriculum",
    "Dovecote Green American School - 3.4 km, American IB curriculum",
    "Al Amani English Speaking School, Kalison Meadows - 10 km, British & IB curriculum",
  ],
};

const iconMap: Record<string, typeof Building2> = {
  Building2,
  Waves,
  Car,
  Users,
  Trees,
  Baby,
  Dumbbell,
  Shield,
  PawPrint,
};

export const PropertyDetailPage = (): JSX.Element => {
  const params = useParams();
  const [location] = useLocation();
  const { toast } = useToast();
  const propertyId = params.id || "1";
  
  const propertyData = propertiesDataMap[propertyId] || defaultPropertyData;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    propertyInterested: "",
    budget: "",
    message: "",
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, consent: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.email || !formData.phone) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in all required fields (First Name, Email, Phone).",
        variant: "destructive",
      });
      return;
    }

    if (!formData.consent) {
      toast({
        title: "Consent Required",
        description: "Please agree to the terms and conditions.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    console.log("Form submitted:", formData);
    
    setTimeout(() => {
      toast({
        title: "Interest Registered!",
        description: "Thank you for your interest. Our team will contact you soon.",
      });
      
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        propertyInterested: "",
        budget: "",
        message: "",
        consent: false,
      });
      setIsSubmitting(false);
    }, 500);
  };
  
  return (
    <div className="flex flex-col items-center bg-white w-full">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="w-full px-4 md:px-8 lg:px-[110px] py-8 md:py-12 lg:py-[60px]">
        <div className="max-w-[1700px] mx-auto">
          {/* Title Section */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 md:gap-6">
                <Link href="/projects">
                  <Button variant="ghost" size="icon" className="rounded-full" data-testid="button-back">
                    <ArrowLeft className="h-6 w-6" />
                  </Button>
                </Link>
                <h1 className="text-[#1c1c1b] text-2xl md:text-3xl lg:text-[40px] font-bold capitalize [font-family:'Roboto',Helvetica]" data-testid="text-property-title">
                  {propertyData.title}
                </h1>
              </div>
              <div className="flex items-center gap-2 pl-14 md:pl-16 lg:pl-[60px]">
                <MapPin className="w-5 h-5 text-[#717171]" />
                <span className="text-[#717171] text-sm lg:text-base [font-family:'Roboto',Helvetica]" data-testid="text-property-location">
                  {propertyData.location}
                </span>
              </div>
            </div>
            <div className="flex flex-col items-start lg:items-end gap-2 lg:text-right pl-14 md:pl-16 lg:pl-0">
              <span className="text-[#ef7f1a] text-2xl md:text-3xl lg:text-[40px] font-bold capitalize [font-family:'Roboto',Helvetica]" data-testid="text-property-price">
                {propertyData.price} / {propertyData.saleType}
              </span>
              <span className="text-[#636366] text-sm lg:text-base [font-family:'Roboto',Helvetica]" data-testid="text-price-per-sqft">
                {propertyData.pricePerSqft}
              </span>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="flex flex-col lg:flex-row gap-3 mb-10">
            {/* Main Image - stretches to match gallery height */}
            <div className="w-full lg:flex-1 h-[300px] md:h-[450px] lg:h-auto rounded-md overflow-hidden relative">
              <img
                src={propertyData.images.main}
                alt={propertyData.title}
                className="w-full h-full lg:absolute lg:inset-0 object-cover"
                data-testid="img-property-main"
              />
            </div>
            {/* Gallery Images with labels */}
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible lg:w-[280px]">
              {propertyData.images.gallery.slice(0, 3).map((image, index) => (
                <div
                  key={index}
                  className="min-w-[140px] md:min-w-[170px] lg:min-w-0 lg:w-full h-[140px] md:h-[160px] lg:h-[160px] rounded-md overflow-hidden flex-shrink-0 relative"
                >
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover"
                    data-testid={`img-gallery-${index}`}
                  />
                  <div className="absolute bottom-2 left-2 bg-black/50 backdrop-blur-sm rounded px-2 py-1">
                    <span className="text-white text-xs font-medium">{index + 1}</span>
                  </div>
                </div>
              ))}
              {propertyData.images.gallery.length > 3 && (
                <div className="min-w-[140px] md:min-w-[170px] lg:min-w-0 lg:w-full h-[140px] md:h-[160px] lg:h-[160px] rounded-md overflow-hidden relative flex-shrink-0">
                  <img
                    src={propertyData.images.gallery[3]}
                    alt="More images"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/50 flex items-center justify-center">
                    <div className="bg-[rgba(37,75,134,0.5)] backdrop-blur-md rounded-lg px-5 py-4">
                      <span className="text-white text-xl font-bold">+{propertyData.images.gallery.length - 3} More</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

        {/* Description Section */}
        <div className="flex flex-col gap-6 mb-10">
          <h2 className="text-[#181a20] text-xl md:text-2xl lg:text-[32px] font-semibold" data-testid="text-headline">
            {propertyData.headline}
          </h2>
          <p className="text-[#575757] text-base lg:text-lg leading-relaxed" data-testid="text-description">
            {propertyData.description}
          </p>
        </div>

        {/* Property Features */}
        <div className="flex flex-col gap-6 mb-10">
          <div className="flex items-center justify-between">
            <h2 className="text-[#181a20] text-xl md:text-2xl lg:text-[32px] font-semibold" data-testid="text-features-title">
              Property Features
            </h2>
            <span className="text-[#181a20] text-sm lg:text-base" data-testid="text-reference-id">
              Reference ID: {propertyData.referenceId}
            </span>
          </div>
          <Card className="border-[#e0e0e0]">
            <CardContent className="p-6 lg:p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Bed className="w-6 h-6 text-[#8a8a8a]" />
                    <span className="text-[#181a20] text-base lg:text-lg font-medium" data-testid="text-bedrooms">{propertyData.features.bedrooms}</span>
                  </div>
                  <span className="text-[#575757] text-sm lg:text-base">{propertyData.features.bedroomsLabel}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Bath className="w-6 h-6 text-[#8a8a8a]" />
                    <span className="text-[#181a20] text-base lg:text-lg font-medium" data-testid="text-bathrooms">{propertyData.features.bathrooms}</span>
                  </div>
                  <span className="text-[#575757] text-sm lg:text-base">Bathrooms</span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Car className="w-6 h-6 text-[#8a8a8a]" />
                    <span className="text-[#181a20] text-base lg:text-lg font-medium" data-testid="text-garage">{propertyData.features.garage}</span>
                  </div>
                  <span className="text-[#575757] text-sm lg:text-base">Garage</span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Maximize className="w-6 h-6 text-[#8a8a8a]" />
                    <span className="text-[#181a20] text-base lg:text-lg font-medium" data-testid="text-sqft">{propertyData.features.sqft}</span>
                  </div>
                  <span className="text-[#575757] text-sm lg:text-base">Sq Ft</span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-6 h-6 text-[#8a8a8a]" />
                    <span className="text-[#181a20] text-base lg:text-lg font-medium" data-testid="text-year-built">{propertyData.features.builtYear}</span>
                  </div>
                  <span className="text-[#575757] text-sm lg:text-base">Year Built</span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Maximize className="w-6 h-6 text-[#8a8a8a]" />
                    <span className="text-[#181a20] text-base lg:text-lg font-medium" data-testid="text-land-size">{propertyData.features.landSize}</span>
                  </div>
                  <span className="text-[#575757] text-sm lg:text-base">Land Area Size</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Property Features List */}
          <ul className="list-disc list-inside space-y-2 pl-4">
            {propertyData.propertyFeatures.map((feature, index) => (
              <li key={index} className="text-[#575757] text-base lg:text-lg" data-testid={`text-property-feature-${index}`}>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Community & Amenities */}
        <div className="flex flex-col gap-6 mb-10">
          <h2 className="text-[#181a20] text-xl md:text-2xl lg:text-[32px] font-semibold" data-testid="text-community-title">
            Community & Amenities
          </h2>
          <p className="text-[#575757] text-base lg:text-lg">
            Residents of Theon at Athlon enjoy access to the wide array of amenities in the Athlon community, including:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            {propertyData.communityAmenities.map((amenity, index) => (
              <li key={index} className="text-[#575757] text-base lg:text-lg" data-testid={`text-community-amenity-${index}`}>
                {amenity}
              </li>
            ))}
          </ul>
        </div>

        {/* Specifications */}
        <div className="flex flex-col gap-6 mb-10">
          <h2 className="text-[#181a20] text-xl md:text-2xl lg:text-[32px] font-semibold" data-testid="text-specifications-title">
            Specifications
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="flex flex-col gap-1">
              <span className="text-[#575757] text-sm">Status</span>
              <span className="text-[#181a20] text-base font-medium" data-testid="text-spec-status">{propertyData.specifications.status}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#575757] text-sm">Floors</span>
              <span className="text-[#181a20] text-base font-medium" data-testid="text-spec-floors">{propertyData.specifications.floors}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#575757] text-sm">Bathrooms</span>
              <span className="text-[#181a20] text-base font-medium" data-testid="text-spec-bathrooms">{propertyData.specifications.bathrooms}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#575757] text-sm">Year Built</span>
              <span className="text-[#181a20] text-base font-medium" data-testid="text-spec-year">{propertyData.specifications.yearBuilt}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#575757] text-sm">Land Area Size</span>
              <span className="text-[#181a20] text-base font-medium" data-testid="text-spec-land">{propertyData.specifications.landArea}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#575757] text-sm">Project ID</span>
              <span className="text-[#181a20] text-base font-medium" data-testid="text-spec-project-id">{propertyData.specifications.projectId}</span>
            </div>
          </div>
        </div>

        {/* Amenities Tags */}
        <div className="flex flex-col gap-6 mb-10">
          <h2 className="text-[#181a20] text-xl md:text-2xl lg:text-[32px] font-semibold" data-testid="text-amenities-title">
            Amenities
          </h2>
          <div className="flex flex-wrap gap-3">
            {propertyData.amenities.map((amenity, index) => {
              const IconComponent = iconMap[amenity.icon] || Building2;
              return (
                <Badge
                  key={index}
                  variant="outline"
                  className="flex items-center gap-2 px-4 py-2 text-[#181a20] border-[#e0e0e0] rounded-full"
                  data-testid={`badge-amenity-${index}`}
                >
                  <IconComponent className="w-4 h-4" />
                  {amenity.label}
                </Badge>
              );
            })}
          </div>
        </div>

        {/* Location Highlight */}
        <div className="flex flex-col gap-6 mb-10">
          <div className="flex items-center justify-between">
            <h2 className="text-[#181a20] text-xl md:text-2xl lg:text-[32px] font-semibold" data-testid="text-location-title">
              Location Highlight
            </h2>
            <Button className="bg-[#ef7f1a] hover:bg-[#ef7f1a]/90 text-white rounded-lg" data-testid="button-view-map">
              View Map
            </Button>
          </div>
          <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden bg-gray-100">
            <img
              src="/figmaAssets/rectangle-625.png"
              alt="Location Map"
              className="w-full h-full object-cover"
              data-testid="img-location-map"
            />
          </div>
          
          {/* Nearby Locations */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[#181a20] text-lg font-semibold">Easy access to major roads and transport links</h3>
            <div className="space-y-3">
              {propertyData.nearbyLocations.map((location, index) => (
                <div key={index} className="flex items-center gap-2" data-testid={`location-nearby-${index}`}>
                  <div className="w-5 h-5 rounded-full border border-[#ef7f1a] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#ef7f1a]" />
                  </div>
                  <span className="text-[#575757] text-sm lg:text-base">
                    {location.distance && `${location.distance} to `}{location.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Schools Nearby */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[#181a20] text-lg font-semibold">Schools Nearby</h3>
            <div className="space-y-3">
              {propertyData.schools.map((school, index) => (
                <div key={index} className="flex items-center gap-2" data-testid={`location-school-${index}`}>
                  <div className="w-5 h-5 rounded-full border border-[#ef7f1a] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#ef7f1a]" />
                  </div>
                  <span className="text-[#575757] text-sm lg:text-base">{school}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#1c1c1b] rounded-xl p-6 md:p-8 lg:p-12 mb-10">
          <div className="flex flex-col gap-4 max-w-3xl">
            <h2 className="text-white text-xl md:text-2xl lg:text-[32px] font-semibold" data-testid="text-cta-title">
              This Townhouse in Theon At Athlon Offers A Perfect Blend Of Modern Design, Community Living, And Lifestyle Conveniences In One Of Dubai's Upcoming Residential Hotspots.
            </h2>
            <p className="text-gray-300 text-base lg:text-lg">
              Contact Prop Shop Global Real Estate today to schedule a viewing or to learn more about this exciting investment opportunity.
            </p>
            <Link href="/contact">
              <Button className="w-fit bg-[#ef7f1a] hover:bg-[#ef7f1a]/90 text-white font-semibold px-6 py-3 rounded-lg" data-testid="button-schedule-viewing">
                Schedule a Viewing
              </Button>
            </Link>
          </div>
        </div>

        {/* Register Interest Form */}
        <div className="flex flex-col gap-6 mb-10">
          <h2 className="text-[#181a20] text-xl md:text-2xl lg:text-[32px] font-semibold" data-testid="text-register-title">
            Register Your Interest
          </h2>
          <Card className="border-[#e0e0e0]">
            <CardContent className="p-6 lg:p-8">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[#181a20] text-sm font-medium">First Name *</label>
                  <Input 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter your first name" 
                    className="border-[#e0e0e0]" 
                    data-testid="input-first-name" 
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#181a20] text-sm font-medium">Last Name</label>
                  <Input 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter your last name" 
                    className="border-[#e0e0e0]" 
                    data-testid="input-last-name" 
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#181a20] text-sm font-medium">Email *</label>
                  <Input 
                    name="email"
                    type="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email" 
                    className="border-[#e0e0e0]" 
                    data-testid="input-email" 
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#181a20] text-sm font-medium">Phone *</label>
                  <Input 
                    name="phone"
                    type="tel" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone" 
                    className="border-[#e0e0e0]" 
                    data-testid="input-phone" 
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#181a20] text-sm font-medium">Property Interested in</label>
                  <Select value={formData.propertyInterested} onValueChange={(value) => handleSelectChange("propertyInterested", value)}>
                    <SelectTrigger className="border-[#e0e0e0]" data-testid="select-property-interest">
                      <SelectValue placeholder="Select property" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="south-bay-4">South Bay 4</SelectItem>
                      <SelectItem value="cove-ii">Cove II</SelectItem>
                      <SelectItem value="theon-athlon">Theon at Athlon</SelectItem>
                      <SelectItem value="diamondz">Diamondz by Danube</SelectItem>
                      <SelectItem value="stella">Stella Residences</SelectItem>
                      <SelectItem value="glade-haven">Glade Haven by Aldar</SelectItem>
                      <SelectItem value="samana-ibiza">Samana Ibiza</SelectItem>
                      <SelectItem value="jumeirah-bay">Jumeirah Bay X1</SelectItem>
                      <SelectItem value="palace-residences">Palace Residences 3BHK</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#181a20] text-sm font-medium">Budget</label>
                  <Select value={formData.budget} onValueChange={(value) => handleSelectChange("budget", value)}>
                    <SelectTrigger className="border-[#e0e0e0]" data-testid="select-budget">
                      <SelectValue placeholder="Select your budget" />
                    </SelectTrigger>
                    <SelectContent>
                      {budgetOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-[#181a20] text-sm font-medium">Message</label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your message" 
                    className="border-[#e0e0e0] min-h-[120px]" 
                    data-testid="input-message" 
                  />
                </div>
                <div className="flex items-start gap-2 md:col-span-2">
                  <Checkbox 
                    id="consent" 
                    checked={formData.consent}
                    onCheckedChange={handleCheckboxChange}
                    data-testid="checkbox-consent" 
                  />
                  <label htmlFor="consent" className="text-[#575757] text-sm cursor-pointer">
                    I agree to the terms and conditions and privacy policy *
                  </label>
                </div>
                <div className="md:col-span-2">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full md:w-auto bg-[#ef7f1a] hover:bg-[#ef7f1a]/90 text-white font-semibold px-8 py-3 rounded-lg disabled:opacity-50" 
                    data-testid="button-submit-interest"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
        </div>
      </div>

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
