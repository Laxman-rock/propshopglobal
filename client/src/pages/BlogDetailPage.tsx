import { Link, useParams, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Linkedin, Instagram, Menu } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

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


const blogArticles = [
  {
    id: 1,
    slug: "dubai-real-estate-market-trends-2024",
    title: "Dubai Real Estate Market Trends 2025: What Buyers Need to Know",
    description: "Explore the latest trends shaping Dubai's property market, from luxury developments to emerging investment hotspots.",
    image: "/figmaAssets/dubai_skyline_luxury_f84236ad.jpg",
    date: "November 28, 2024",
    author: "Sarah Johnson",
    readTime: "8 min read",
    category: "Market Insights",
    content: `
      <p>Dubai's real estate market continues to demonstrate remarkable resilience and growth in 2024, attracting investors from around the globe. The emirate's strategic position as a global business hub, combined with its world-class infrastructure and tax-friendly policies, makes it an increasingly attractive destination for property investment.</p>
      
      <h2>Key Market Trends</h2>
      
      <p>The Dubai property market has experienced significant transformations in recent years. Here are the key trends that buyers and investors need to be aware of:</p>
      
      <h3>1. Luxury Segment Growth</h3>
      <p>The luxury real estate segment has seen unprecedented demand, with ultra-high-net-worth individuals seeking premium waterfront properties and penthouse apartments. Areas like Palm Jumeirah, Dubai Marina, and Downtown Dubai continue to command premium prices, with some properties selling for record-breaking amounts.</p>
      
      <h3>2. Off-Plan Investment Opportunities</h3>
      <p>Off-plan properties remain popular among investors, offering attractive payment plans and potential for capital appreciation. Developers are launching innovative projects with cutting-edge amenities, sustainable features, and smart home technologies.</p>
      
      <h3>3. Sustainable Development Focus</h3>
      <p>Environmental sustainability is becoming a priority in new developments. Green buildings, energy-efficient designs, and eco-friendly communities are increasingly in demand as buyers become more environmentally conscious.</p>
      
      <h3>4. Technology Integration</h3>
      <p>Smart home features and PropTech solutions are transforming how properties are bought, sold, and managed. Virtual property tours, blockchain-based transactions, and AI-powered property management systems are becoming standard offerings.</p>
      
      <h2>Investment Hotspots</h2>
      
      <p>Several areas in Dubai are emerging as promising investment destinations:</p>
      
      <ul>
        <li><strong>Dubai Creek Harbour:</strong> A master-planned community offering waterfront living with stunning views of the Dubai skyline</li>
        <li><strong>Mohammed Bin Rashid City:</strong> An ambitious development featuring luxury villas, apartments, and world-class amenities</li>
        <li><strong>Dubai South:</strong> Strategic location near Al Maktoum International Airport and Expo 2020 site</li>
        <li><strong>Jumeirah Village Circle:</strong> Affordable options with excellent rental yields</li>
      </ul>
      
      <h2>Buyer Recommendations</h2>
      
      <p>For those considering investing in Dubai real estate in 2024, here are some key recommendations:</p>
      
      <ol>
        <li>Work with registered real estate agents and developers</li>
        <li>Conduct thorough due diligence on the property and developer</li>
        <li>Understand the total cost of ownership including service charges</li>
        <li>Consider the long-term rental potential and capital appreciation prospects</li>
        <li>Stay informed about regulatory changes and market developments</li>
      </ol>
      
      <p>Dubai's real estate market offers compelling opportunities for both end-users and investors. With proper research and guidance from experienced professionals, buyers can make informed decisions that align with their investment goals.</p>
    `
  },
  {
    id: 2,
    slug: "golden-visa-uae-property-investment",
    title: "Golden Visa Through Property Investment: Complete Guide",
    description: "Learn how to obtain UAE residency through real estate investment with our comprehensive guide to the Golden Visa program.",
    image: "/figmaAssets/modern_luxury_apartm_fc047551.jpg",
    date: "November 25, 2024",
    author: "Ahmed Al Mansouri",
    readTime: "10 min read",
    category: "Investment Guide",
    content: `
      <p>The UAE Golden Visa program has revolutionized long-term residency options for investors, entrepreneurs, and talented individuals. For property investors, this program offers an attractive pathway to secure residency in one of the world's most dynamic economies.</p>
      
      <h2>What is the Golden Visa?</h2>
      
      <p>The Golden Visa is a long-term residence visa that allows foreign nationals to live, work, and study in the UAE without the need for a national sponsor. The visa can be issued for 5 or 10 years and is automatically renewed.</p>
      
      <h2>Property Investment Requirements</h2>
      
      <p>To qualify for a Golden Visa through property investment, you need to meet the following criteria:</p>
      
      <h3>10-Year Golden Visa</h3>
      <ul>
        <li>Invest at least AED 2 million in property</li>
        <li>Property can be off-plan, under construction, or ready</li>
        <li>Multiple properties can be combined to meet the threshold</li>
        <li>Property can be mortgaged (must be from approved UAE banks)</li>
      </ul>
      
      <h3>5-Year Golden Visa</h3>
      <ul>
        <li>Invest at least AED 2 million in property</li>
        <li>Property must be ready (not off-plan)</li>
        <li>No mortgage restrictions for the 5-year visa</li>
      </ul>
      
      <h2>Application Process</h2>
      
      <p>The application process for the Golden Visa through property investment involves several steps:</p>
      
      <ol>
        <li><strong>Property Purchase:</strong> Complete the purchase of qualifying property</li>
        <li><strong>Document Preparation:</strong> Gather required documents including title deed, passport, photos, and insurance</li>
        <li><strong>Application Submission:</strong> Submit through ICA or GDRFA platforms</li>
        <li><strong>Biometrics:</strong> Complete biometric registration at designated centers</li>
        <li><strong>Visa Issuance:</strong> Receive your Golden Visa upon approval</li>
      </ol>
      
      <h2>Benefits of the Golden Visa</h2>
      
      <p>The Golden Visa offers numerous advantages for property investors:</p>
      
      <ul>
        <li>Long-term residency security (5 or 10 years)</li>
        <li>Ability to sponsor family members</li>
        <li>No minimum stay requirement in UAE</li>
        <li>Access to UAE banking and financial services</li>
        <li>Pathway to business opportunities in the region</li>
        <li>World-class healthcare and education access</li>
      </ul>
      
      <h2>Tips for Investors</h2>
      
      <p>Consider these recommendations when planning your Golden Visa property investment:</p>
      
      <ul>
        <li>Work with RERA-registered agents for property purchases</li>
        <li>Ensure the property meets the minimum value requirement</li>
        <li>Keep all documentation organized for smooth processing</li>
        <li>Consider the property's potential for rental income</li>
        <li>Stay updated on any policy changes to the program</li>
      </ul>
      
      <p>The Golden Visa program represents a significant opportunity for investors seeking long-term residency in the UAE while building their property portfolio in one of the world's most dynamic real estate markets.</p>
    `
  },
  {
    id: 3,
    slug: "top-neighborhoods-dubai-2025",
    title: "Top 10 Neighborhoods to Watch in Dubai 2025",
    description: "Discover the most promising residential areas in Dubai for living and investment in the coming year.",
    image: "/figmaAssets/luxury_waterfront_ap_531d97c0.jpg",
    date: "November 22, 2024",
    author: "Maria Santos",
    readTime: "12 min read",
    category: "Neighborhood Guide",
    content: `
      <p>As Dubai continues to evolve and expand, certain neighborhoods are emerging as the most desirable locations for living and investment. Whether you're seeking luxury waterfront living, family-friendly communities, or promising investment opportunities, this guide highlights the top 10 neighborhoods to watch in 2025.</p>
      
      <h2>1. Dubai Creek Harbour</h2>
      <p>Set to become the new center of Dubai, Creek Harbour offers stunning waterfront living with views of the historic creek and the upcoming Dubai Creek Tower. The area features a mix of residential, commercial, and retail spaces, making it a complete urban destination.</p>
      
      <h2>2. Dubai Hills Estate</h2>
      <p>This master-planned community has become one of the most sought-after addresses in Dubai. With its 18-hole championship golf course, excellent schools, and the Dubai Hills Mall, it offers a perfect blend of luxury and convenience.</p>
      
      <h2>3. Palm Jumeirah</h2>
      <p>The iconic palm-shaped island continues to be Dubai's premier luxury address. Recent developments have added new hotels, residences, and The Palm Tower, enhancing the area's appeal to high-net-worth individuals.</p>
      
      <h2>4. Mohammed Bin Rashid City (MBR City)</h2>
      <p>One of Dubai's largest developments, MBR City includes District One, which features crystal lagoons, sandy beaches, and luxury villas. The area offers a resort-style living experience within the city.</p>
      
      <h2>5. Dubai Marina</h2>
      <p>This established waterfront community remains popular for its vibrant lifestyle, excellent dining options, and stunning marina views. The area continues to attract young professionals and investors alike.</p>
      
      <h2>6. Jumeirah Village Circle (JVC)</h2>
      <p>For those seeking affordability without compromising on quality, JVC offers excellent value. The family-friendly community has seen significant infrastructure improvements and offers strong rental yields.</p>
      
      <h2>7. Emaar Beachfront</h2>
      <p>This exclusive island development offers private beach access, luxury apartments, and proximity to Dubai Marina. It's perfect for those seeking a beachfront lifestyle in a prime location.</p>
      
      <h2>8. Business Bay</h2>
      <p>Adjacent to Downtown Dubai, Business Bay has transformed into a mixed-use district with residential, commercial, and retail developments. Its central location and waterfront properties make it highly attractive.</p>
      
      <h2>9. Arabian Ranches III</h2>
      <p>The latest phase of this successful community offers modern villas, townhouses, and excellent amenities. It's ideal for families seeking a suburban lifestyle with easy access to the city.</p>
      
      <h2>10. Dubai South</h2>
      <p>Positioned near Al Maktoum International Airport and the Expo 2020 site, Dubai South is set for significant growth. The area offers affordable options with excellent future appreciation potential.</p>
      
      <h2>Investment Considerations</h2>
      
      <p>When choosing a neighborhood for investment or residence, consider:</p>
      <ul>
        <li>Infrastructure development and future plans</li>
        <li>Proximity to key attractions and amenities</li>
        <li>Rental yield potential</li>
        <li>Community facilities and lifestyle offerings</li>
        <li>Developer reputation and quality of construction</li>
      </ul>
      
      <p>Dubai's diverse neighborhoods offer something for everyone, from bustling urban centers to peaceful suburban communities. Understanding the unique characteristics of each area is key to making the right choice for your lifestyle and investment goals.</p>
    `
  },
  {
    id: 4,
    slug: "luxury-penthouses-dubai-ultimate-guide",
    title: "Luxury Penthouses in Dubai: The Ultimate Guide",
    description: "From Palm Jumeirah to Downtown Dubai, explore the most exclusive penthouse properties in the emirate.",
    image: "/figmaAssets/luxury_penthouse_ter_9bd71466.jpg",
    date: "November 18, 2024",
    author: "James Mitchell",
    readTime: "15 min read",
    category: "Luxury Living",
    content: `
      <p>Dubai's skyline is punctuated by some of the world's most spectacular penthouses, offering unparalleled luxury, breathtaking views, and exclusive amenities. This guide explores the pinnacle of luxury living in the emirate.</p>
      
      <h2>What Defines a Dubai Luxury Penthouse?</h2>
      
      <p>Dubai's luxury penthouses set themselves apart through:</p>
      <ul>
        <li>Expansive living spaces often exceeding 10,000 square feet</li>
        <li>Private pools and terraces with panoramic views</li>
        <li>Smart home technology and automation systems</li>
        <li>Premium finishes from world-renowned designers</li>
        <li>Private elevators and dedicated parking</li>
        <li>Concierge services and 24/7 security</li>
      </ul>
      
      <h2>Top Locations for Penthouses</h2>
      
      <h3>Palm Jumeirah</h3>
      <p>The crown jewel of Dubai's luxury real estate, Palm Jumeirah offers penthouses with private beach access, marina views, and proximity to world-class hotels and restaurants. Notable developments include One Palm, The Royal Atlantis, and FIVE Palm Jumeirah.</p>
      
      <h3>Downtown Dubai</h3>
      <p>Home to the Burj Khalifa and Dubai Mall, Downtown Dubai offers penthouses with iconic city views. The Boulevard residences and Opera District feature some of the most exclusive addresses in the area.</p>
      
      <h3>Dubai Marina</h3>
      <p>Marina penthouses offer stunning waterfront views and a vibrant lifestyle. The Marina Gate, Cayan Tower, and Princess Tower feature some of the most desirable penthouse units.</p>
      
      <h3>Emirates Hills</h3>
      <p>Dubai's answer to Beverly Hills, Emirates Hills offers villa-style penthouses with golf course views and ultra-private living in a gated community.</p>
      
      <h2>Record-Breaking Sales</h2>
      
      <p>Dubai has witnessed several record-breaking penthouse sales in recent years:</p>
      <ul>
        <li>One Palm penthouse sold for AED 163 million</li>
        <li>Burj Khalifa penthouse transactions exceeding AED 100 million</li>
        <li>The Royal Atlantis units attracting premium prices</li>
      </ul>
      
      <h2>Investment Potential</h2>
      
      <p>Luxury penthouses in Dubai offer unique investment characteristics:</p>
      <ul>
        <li>Limited supply ensures value retention</li>
        <li>Strong demand from international HNWI buyers</li>
        <li>Premium rental yields for short-term luxury rentals</li>
        <li>Potential for significant capital appreciation in prime locations</li>
      </ul>
      
      <h2>Buying Considerations</h2>
      
      <p>When purchasing a luxury penthouse in Dubai:</p>
      <ol>
        <li>Engage experienced luxury real estate specialists</li>
        <li>Verify developer track record and quality standards</li>
        <li>Review service charges and maintenance costs</li>
        <li>Consider the building's amenities and management</li>
        <li>Evaluate the long-term development plans for the area</li>
      </ol>
      
      <p>Dubai's luxury penthouse market represents the pinnacle of real estate investment, combining exceptional lifestyle with strong investment fundamentals in one of the world's most dynamic cities.</p>
    `
  },
  {
    id: 5,
    slug: "smart-homes-dubai-future-living",
    title: "Smart Homes in Dubai: The Future of Living",
    description: "How technology is transforming Dubai's residential properties with smart home innovations.",
    image: "/figmaAssets/smart_home_technolog_4c335415.jpg",
    date: "November 15, 2024",
    author: "Tech Living Team",
    readTime: "7 min read",
    category: "Technology",
    content: `
      <p>Dubai is at the forefront of smart city development, and this technological innovation extends to residential properties. Smart homes are no longer a luxury but an expectation in many new developments across the emirate.</p>
      
      <h2>What Makes a Home "Smart"?</h2>
      
      <p>A smart home integrates technology to automate and enhance various aspects of daily living:</p>
      <ul>
        <li>Automated lighting and climate control</li>
        <li>Voice-activated systems and AI assistants</li>
        <li>Security systems with facial recognition and remote monitoring</li>
        <li>Energy management and sustainability features</li>
        <li>Integrated entertainment and communication systems</li>
      </ul>
      
      <h2>Leading Smart Home Developments</h2>
      
      <h3>Sustainable City</h3>
      <p>This eco-friendly community showcases how smart technology can reduce environmental impact while enhancing comfort. Solar panels, greywater recycling, and smart energy management are standard features.</p>
      
      <h3>Emaar Properties</h3>
      <p>Dubai's leading developer has integrated smart home technology across its portfolio, from Downtown Dubai to Dubai Hills Estate. The Emaar Home app allows residents to control various aspects of their home remotely.</p>
      
      <h3>DAMAC Properties</h3>
      <p>DAMAC has partnered with technology providers to offer premium smart home features in their luxury developments, including the AYKON City and DAMAC Hills communities.</p>
      
      <h2>Key Smart Home Features</h2>
      
      <h3>Climate Control</h3>
      <p>Smart thermostats learn your preferences and optimize energy usage while maintaining comfort. In Dubai's climate, this can result in significant energy savings.</p>
      
      <h3>Security Systems</h3>
      <p>Advanced security features include biometric access, smart locks, video doorbells, and 24/7 remote monitoring. Integration with mobile apps allows real-time alerts and control.</p>
      
      <h3>Lighting</h3>
      <p>Automated lighting systems adjust based on time of day, occupancy, and natural light levels. Scene settings can transform the ambiance at the touch of a button.</p>
      
      <h3>Entertainment</h3>
      <p>Multi-room audio systems, smart TVs, and integrated home theaters create immersive entertainment experiences controlled through a single interface.</p>
      
      <h2>Benefits of Smart Homes</h2>
      
      <ul>
        <li><strong>Convenience:</strong> Control your home from anywhere via smartphone</li>
        <li><strong>Energy Efficiency:</strong> Reduce consumption and lower utility bills</li>
        <li><strong>Security:</strong> Enhanced protection and peace of mind</li>
        <li><strong>Property Value:</strong> Smart features increase resale appeal</li>
        <li><strong>Sustainability:</strong> Contribute to Dubai's green initiatives</li>
      </ul>
      
      <h2>The Future Outlook</h2>
      
      <p>Dubai's smart home market is expected to grow significantly as:</p>
      <ul>
        <li>5G connectivity enables faster and more reliable smart systems</li>
        <li>AI integration becomes more sophisticated</li>
        <li>Sustainability requirements drive smart energy adoption</li>
        <li>Buyer expectations continue to evolve</li>
      </ul>
      
      <p>Investing in a smart home in Dubai means investing in the future of living, combining cutting-edge technology with the emirate's commitment to innovation and sustainability.</p>
    `
  },
  {
    id: 6,
    slug: "off-plan-vs-ready-properties",
    title: "Off-Plan vs Ready Properties: Which Is Right for You?",
    description: "Weighing the pros and cons of buying off-plan versus move-in ready properties in Dubai's dynamic market.",
    image: "/figmaAssets/modern_luxury_apartm_51824214.jpg",
    date: "November 22, 2024",
    author: "Property Insights Team",
    readTime: "9 min read",
    category: "Buying Guide",
    content: `
      <p>One of the most important decisions facing property buyers in Dubai is whether to invest in off-plan properties or purchase ready-to-move-in homes. Both options offer distinct advantages and considerations that can significantly impact your investment strategy and lifestyle.</p>
      
      <h2>Understanding Off-Plan Properties</h2>
      
      <p>Off-plan properties are purchased before construction is complete, often during the early development stages. In Dubai's dynamic market, off-plan sales have become increasingly popular among investors and end-users alike.</p>
      
      <h3>Advantages of Off-Plan</h3>
      <ul>
        <li><strong>Lower Entry Prices:</strong> Off-plan properties typically offer 10-30% lower prices compared to completed units in the same development</li>
        <li><strong>Flexible Payment Plans:</strong> Developers offer extended payment schedules, often allowing you to pay over 3-5 years or even post-handover</li>
        <li><strong>Capital Appreciation:</strong> As construction progresses, property values often increase, potentially offering significant returns by completion</li>
        <li><strong>Customization Options:</strong> Many developers allow buyers to choose finishes, layouts, and upgrades</li>
        <li><strong>First Pick of Units:</strong> Early buyers can select premium units with best views and locations</li>
      </ul>
      
      <h3>Considerations for Off-Plan</h3>
      <ul>
        <li>Construction delays are possible, affecting handover dates</li>
        <li>Final product may differ slightly from showroom models</li>
        <li>You cannot immediately move in or rent out the property</li>
        <li>Market conditions may change during the construction period</li>
      </ul>
      
      <h2>Understanding Ready Properties</h2>
      
      <p>Ready properties are completed units available for immediate possession. These can be brand new from developers or resale properties from existing owners.</p>
      
      <h3>Advantages of Ready Properties</h3>
      <ul>
        <li><strong>Immediate Possession:</strong> Move in right away or start generating rental income immediately</li>
        <li><strong>What You See Is What You Get:</strong> Inspect the actual unit, neighborhood, and amenities before buying</li>
        <li><strong>Established Communities:</strong> Move into developed areas with functioning facilities and established resident communities</li>
        <li><strong>Faster Mortgage Processing:</strong> Banks typically offer better terms for ready properties</li>
        <li><strong>No Construction Risk:</strong> Eliminate concerns about delays or developer issues</li>
      </ul>
      
      <h3>Considerations for Ready Properties</h3>
      <ul>
        <li>Higher upfront costs compared to off-plan</li>
        <li>Full payment or mortgage required upon purchase</li>
        <li>Limited customization options</li>
        <li>Best units may already be sold</li>
      </ul>
      
      <h2>Financial Comparison</h2>
      
      <h3>Payment Structure</h3>
      <p><strong>Off-Plan:</strong> Typically requires 10-20% down payment with installments during construction and remaining balance at handover.</p>
      <p><strong>Ready:</strong> Requires full payment (or mortgage financing) upon transfer, typically 20-25% down payment for mortgages.</p>
      
      <h3>Return on Investment</h3>
      <p>Off-plan properties may offer higher capital appreciation potential, while ready properties provide immediate rental income. Consider your investment timeline and cash flow requirements when choosing.</p>
      
      <h2>Who Should Buy Off-Plan?</h2>
      
      <ul>
        <li>Investors looking for capital appreciation over 2-4 years</li>
        <li>Buyers who want to benefit from flexible payment plans</li>
        <li>Those who don't need immediate occupancy</li>
        <li>Investors comfortable with some level of construction risk</li>
        <li>Buyers looking for below-market entry prices</li>
      </ul>
      
      <h2>Who Should Buy Ready?</h2>
      
      <ul>
        <li>End-users who need to move in immediately</li>
        <li>Investors seeking immediate rental income</li>
        <li>Buyers who want to inspect the property before purchase</li>
        <li>Those who prefer established communities</li>
        <li>Investors seeking straightforward mortgage financing</li>
      </ul>
      
      <h2>Due Diligence Tips</h2>
      
      <h3>For Off-Plan Purchases:</h3>
      <ol>
        <li>Research the developer's track record and completed projects</li>
        <li>Verify the project is registered with Dubai Land Department (DLD)</li>
        <li>Review the escrow account arrangement</li>
        <li>Understand the payment plan and any penalties</li>
        <li>Check the expected completion date and delay clauses</li>
      </ol>
      
      <h3>For Ready Properties:</h3>
      <ol>
        <li>Conduct a thorough property inspection</li>
        <li>Verify the title deed and ownership status</li>
        <li>Check for any outstanding service charges or debts</li>
        <li>Review the community's service quality and facilities</li>
        <li>Assess the current rental market for the area</li>
      </ol>
      
      <h2>Making Your Decision</h2>
      
      <p>The choice between off-plan and ready properties depends on your individual circumstances:</p>
      <ul>
        <li><strong>Budget:</strong> Off-plan may suit those with limited immediate capital</li>
        <li><strong>Timeline:</strong> Ready properties for immediate needs, off-plan for long-term planning</li>
        <li><strong>Risk Tolerance:</strong> Off-plan involves more uncertainty but potentially higher rewards</li>
        <li><strong>Investment Goals:</strong> Consider whether you prioritize capital growth or rental income</li>
      </ul>
      
      <p>Both options can be excellent investments in Dubai's thriving real estate market. Consult with a qualified real estate professional to determine which approach aligns best with your financial goals and lifestyle requirements.</p>
    `
  }
];

const relatedArticles = [
  {
    id: 6,
    slug: "investment-property-guide",
    title: "Investment Property Guide for First-Time Buyers",
    image: "/figmaAssets/dubai_skyline_luxury_f84236ad.jpg",
    date: "November 10, 2024"
  },
  {
    id: 7,
    slug: "villa-vs-apartment",
    title: "Villa vs Apartment: Which is Right for You?",
    image: "/figmaAssets/modern_luxury_apartm_fc047551.jpg",
    date: "November 8, 2024"
  },
  {
    id: 8,
    slug: "rental-market-analysis",
    title: "Dubai Rental Market Analysis 2024",
    image: "/figmaAssets/luxury_penthouse_ter_9bd71466.jpg",
    date: "November 5, 2024"
  }
];


export const BlogDetailPage = () => {
  const { slug } = useParams();
  const [location] = useLocation();
  
  const article = blogArticles.find(a => a.slug === slug);
  
  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#181a20] mb-4">Article Not Found</h1>
          <p className="text-[#575757] mb-6">The article you're looking for doesn't exist.</p>
          <Link href="/blog">
            <Button className="bg-[#ef7f1a] hover:bg-[#ef7f1a]/90 text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header - Same as Homepage */}
      <header className="bg-icons">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1700px]">
          <div className="flex items-center justify-between py-4 md:py-5">
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
                const isActive = item.href === "/blog" || location.startsWith("/blog");
                const isBlogLink = item.href === "/blog";
                return (
                  <div key={index} className="relative">
                    <Link
                      href={item.href}
                      className="[font-family:'Roboto',Helvetica] font-semibold text-for-bg-dark text-sm lg:text-base tracking-[0] leading-[26.6px] whitespace-nowrap hover:opacity-80 transition-opacity"
                      data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {item.label}
                    </Link>
                    {isBlogLink && (
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
                    const isActive = item.href === "/blog" || location.startsWith("/blog");
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
        </div>
      </header>

      {/* Breadcrumb */}
      <section className="w-full px-4 md:px-8 lg:px-[110px] py-4 bg-[#f8f8f8]">
        <div className="max-w-[1700px] mx-auto">
          <nav className="flex items-center gap-2 text-sm" data-testid="breadcrumb">
            <Link href="/" className="text-[#575757] hover:text-[#ef7f1a]">Home</Link>
            <span className="text-[#575757]">/</span>
            <Link href="/blog" className="text-[#575757] hover:text-[#ef7f1a]">Blog</Link>
            <span className="text-[#575757]">/</span>
            <span className="text-[#181a20]">{article.title}</span>
          </nav>
        </div>
      </section>

      {/* Article Content */}
      <article className="w-full px-4 md:px-8 lg:px-[110px] py-8 md:py-12">
        <div className="max-w-[1700px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Back Button */}
              <Link href="/blog">
                <Button variant="ghost" className="mb-6 text-[#575757] hover:text-[#ef7f1a]" data-testid="button-back">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </Button>
              </Link>

              {/* Category Badge */}
              <span className="inline-block px-3 py-1 bg-[#ef7f1a]/10 text-[#ef7f1a] text-sm font-medium rounded-full mb-4" data-testid="text-category">
                {article.category}
              </span>

              {/* Title */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#181a20] mb-6" data-testid="text-title">
                {article.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-[#575757] mb-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span className="text-sm" data-testid="text-author">{article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm" data-testid="text-date">{article.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm" data-testid="text-read-time">{article.readTime}</span>
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden mb-8">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                  data-testid="img-featured"
                />
              </div>

              {/* Article Content */}
              <div 
                className="prose prose-lg max-w-none text-[#181a20]"
                dangerouslySetInnerHTML={{ __html: article.content }}
                data-testid="article-content"
              />

              {/* Share Section */}
              <div className="mt-10 pt-6 border-t border-[#e0e0e0]">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="text-[#181a20] font-medium flex items-center gap-2">
                    <Share2 className="w-5 h-5" />
                    Share this article:
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href={`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 bg-[#1877f2] rounded-full hover:opacity-90 transition-opacity"
                      data-testid="button-share-facebook"
                    >
                      <Facebook className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={`https://linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(article.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 bg-[#0077b5] rounded-full hover:opacity-90 transition-opacity"
                      data-testid="button-share-linkedin"
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Related Articles */}
              <div className="sticky top-6">
                <h3 className="text-xl font-semibold text-[#181a20] mb-6" data-testid="text-related-title">
                  Related Articles
                </h3>
                <div className="flex flex-col gap-4">
                  {relatedArticles.map((related, index) => (
                    <Link key={related.id} href={`/blog/${related.slug}`}>
                      <Card className="overflow-hidden border-[#e0e0e0] hover-elevate cursor-pointer" data-testid={`card-related-${index}`}>
                        <div className="flex gap-4">
                          <div className="w-24 h-24 flex-shrink-0">
                            <img
                              src={related.image}
                              alt={related.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <CardContent className="flex-1 p-3">
                            <h4 className="text-sm font-medium text-[#181a20] line-clamp-2 mb-2">
                              {related.title}
                            </h4>
                            <span className="text-xs text-[#575757]">{related.date}</span>
                          </CardContent>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>

                {/* CTA Card */}
                <Card className="mt-6 bg-[#ef7f1a] border-0" data-testid="card-cta">
                  <CardContent className="p-6 text-center">
                    <h4 className="text-lg font-semibold text-white mb-3">
                      Looking for Your Dream Property?
                    </h4>
                    <p className="text-white/80 text-sm mb-4">
                      Let our experts help you find the perfect property in Dubai.
                    </p>
                    <Link href="/contact">
                      <Button className="bg-white text-[#ef7f1a] hover:bg-white/90" data-testid="button-contact-expert">
                        Contact an Expert
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="flex flex-col w-full items-start gap-8 md:gap-[60px] px-4 md:px-8 lg:px-[110px] py-8 md:py-[60px] bg-icons mt-auto">
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

export default BlogDetailPage;
