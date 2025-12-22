import { Link, useLocation } from "wouter";
import { useState, useCallback } from "react";
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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Search, SlidersHorizontal, Bed, Bath } from "lucide-react";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

interface SearchFormProps {
  currentStatus: string;
  keyword: string;
  propertyType: string;
  beds: string;
  baths: string;
  showAdvanced: boolean;
  onKeywordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onPropertyTypeChange: (value: string) => void;
  onBedsChange: (value: string) => void;
  onBathsChange: (value: string) => void;
  onShowAdvancedChange: (open: boolean) => void;
  onSearch: () => void;
}

const SearchForm = ({
  currentStatus,
  keyword,
  propertyType,
  beds,
  baths,
  showAdvanced,
  onKeywordChange,
  onKeyDown,
  onPropertyTypeChange,
  onBedsChange,
  onBathsChange,
  onShowAdvancedChange,
  onSearch,
}: SearchFormProps) => (
  <div className="w-full bg-for-bg-dark rounded-none px-3 md:px-5 py-4 md:py-[21px]">
    <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-4">
      <div className="flex-1 bg-graysgray-6 rounded-xl px-4 md:px-5 py-3 md:py-[15px]">
        <Input
          placeholder="Enter Keyword"
          value={keyword}
          onChange={onKeywordChange}
          onKeyDown={onKeyDown}
          maxLength={50}
          className="border-0 bg-transparent p-0 h-auto font-[number:var(--p3-regular-font-weight)] text-[#181a20] text-sm placeholder:text-placeholder focus-visible:ring-0 focus-visible:ring-offset-0"
          data-testid="input-hero-keyword"
        />
      </div>

      <div className="hidden md:flex items-center gap-2">
        <span className="[font-family:'Poppins',Helvetica] font-normal text-icons text-sm tracking-[0] leading-[26.6px] whitespace-nowrap">
          Type
        </span>
      </div>

      <div className="flex-1 md:flex-initial md:w-[200px] bg-graysgray-6 rounded-xl px-3 py-[5px]">
        <Select value={propertyType} onValueChange={onPropertyTypeChange}>
          <SelectTrigger 
            className="border-0 bg-transparent h-[42px] font-p3-regular font-[number:var(--p3-regular-font-weight)] text-[#181a20] text-[length:var(--p3-regular-font-size)] focus:ring-0 focus:ring-offset-0"
            data-testid="select-hero-type"
          >
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apartment">Apartment</SelectItem>
            <SelectItem value="villa">Villa</SelectItem>
            <SelectItem value="townhouse">Townhouse</SelectItem>
            <SelectItem value="penthouse">Penthouse</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center justify-between md:justify-start gap-4 md:gap-6">
        <Dialog open={showAdvanced} onOpenChange={onShowAdvancedChange}>
          <DialogTrigger asChild>
            <button 
              className="inline-flex items-center gap-2.5 hover:opacity-80 transition-opacity"
              data-testid="button-hero-advanced"
            >
              <SlidersHorizontal className="w-4 h-4 text-icons" />
              <span className="font-p2-regular font-[number:var(--p2-regular-font-weight)] text-icons text-sm md:text-[length:var(--p2-regular-font-size)] tracking-[var(--p2-regular-letter-spacing)] leading-[var(--p2-regular-line-height)] whitespace-nowrap [font-style:var(--p2-regular-font-style)]">
                Advanced
              </span>
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Advanced Filters</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-foreground">Bedrooms</label>
                <Select value={beds} onValueChange={onBedsChange}>
                  <SelectTrigger className="w-full" data-testid="select-advanced-beds">
                    <SelectValue placeholder="Select bedrooms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="studio">Studio</SelectItem>
                    <SelectItem value="1">1 Bedroom</SelectItem>
                    <SelectItem value="2">2 Bedrooms</SelectItem>
                    <SelectItem value="3">3 Bedrooms</SelectItem>
                    <SelectItem value="4">4+ Bedrooms</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-foreground">Bathrooms</label>
                <Select value={baths} onValueChange={onBathsChange}>
                  <SelectTrigger className="w-full" data-testid="select-advanced-baths">
                    <SelectValue placeholder="Select bathrooms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Bathroom</SelectItem>
                    <SelectItem value="2">2 Bathrooms</SelectItem>
                    <SelectItem value="3">3 Bathrooms</SelectItem>
                    <SelectItem value="4">4+ Bathrooms</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button 
                onClick={() => {
                  onShowAdvancedChange(false);
                  onSearch();
                }}
                className="w-full bg-[#ef7f1a] hover:bg-[#ef7f1a]/90 text-white"
                data-testid="button-advanced-apply"
              >
                Apply Filters
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        <button 
          onClick={onSearch}
          className="hover:opacity-80 transition-opacity bg-[#ef7f1a] rounded-[10px] p-3 md:p-[15px]"
          data-testid="button-hero-search"
        >
          <Search className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </button>
      </div>
    </div>
  </div>
);

export const HeroImageSection = (): JSX.Element => {
  const [location, setLocation] = useLocation();
  const [keyword, setKeyword] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [status, setStatus] = useState("all");
  const [beds, setBeds] = useState("");
  const [baths, setBaths] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);
  
  const handleSearch = useCallback(() => {
    const params = new URLSearchParams();
    if (keyword) params.set("keyword", keyword);
    if (propertyType) params.set("type", propertyType);
    if (status && status !== "all") params.set("status", status);
    if (beds) params.set("beds", beds);
    if (baths) params.set("baths", baths);
    
    const queryString = params.toString();
    setLocation(`/projects${queryString ? `?${queryString}` : ""}`);
  }, [keyword, propertyType, status, beds, baths, setLocation]);

  const handleTabChange = useCallback((value: string) => {
    setStatus(value);
  }, []);

  const handleKeywordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.slice(0, 50);
    setKeyword(newValue);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  }, [handleSearch]);
  
  return (
    <section className="flex flex-col items-center relative w-full">
      <div className="flex flex-col items-start relative w-full">
        <div className="relative w-full min-h-[500px] md:min-h-[650px] lg:min-h-[827px] bg-[linear-gradient(0deg,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.3)_100%),url(../figmaAssets/section---main---section.png)] bg-cover bg-center bg-no-repeat">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1700px]">
            <header className="flex items-center justify-between pt-4 pb-4 md:pt-5 md:pb-5">
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
            </header>

            <div className="flex flex-col items-center gap-8 md:gap-12 lg:gap-[72px] pt-12 pb-12 md:pt-[100px] md:pb-[100px] lg:pt-[150px] lg:pb-[150px] max-w-[1206px] mx-auto">
              <div className="flex flex-col items-start gap-5 md:gap-[30px] w-full">
                <div className="flex flex-col items-start gap-3 md:gap-5 w-full">
                  <h1 className="[font-family:'Roboto',Helvetica] font-normal text-transparent text-3xl md:text-5xl lg:text-[70px] tracking-[0] leading-tight md:leading-[1.2] lg:leading-[84.0px]">
                    <span className="font-black text-[#ffffff]">
                      FIND YOUR NEXT
                      <br />
                      PERFECT{" "}
                    </span>
                    <span className="font-black text-[#ef7f1a]">PLACE</span>
                  </h1>
                </div>

                <Link href="/projects">
                  <Button className="h-12 md:h-14 px-4 md:px-6 py-3 md:py-[18px] bg-app-primary rounded-[10px] hover:bg-app-primary/90">
                    <span className="font-p1-regular font-[number:var(--p1-regular-font-weight)] text-for-bg-dark text-sm md:text-[length:var(--p1-regular-font-size)] tracking-[var(--p1-regular-letter-spacing)] leading-[var(--p1-regular-line-height)] [font-style:var(--p1-regular-font-style)]">
                      Explore More
                    </span>
                  </Button>
                </Link>
              </div>

              <div className="flex flex-col items-center gap-6 md:gap-11 w-full">
                <Tabs defaultValue="all" className="w-full" onValueChange={handleTabChange}>
                  <TabsList className="inline-flex h-auto bg-for-bg-dark p-0 gap-2 md:gap-3 rounded-none overflow-x-auto">
                    <TabsTrigger
                      value="all"
                      className="group relative h-[45px] md:h-[54.59px] px-4 md:px-6 bg-for-bg-dark rounded-none border-b-2 border-transparent data-[state=active]:border-[#ef7f1a] data-[state=active]:bg-for-bg-dark data-[state=inactive]:bg-for-bg-dark data-[state=active]:shadow-none transition-all duration-200"
                      data-testid="tab-all"
                    >
                      <span className="[font-family:'Roboto',Helvetica] font-semibold text-xs md:text-sm tracking-[0] leading-[26.6px] text-icons transition-colors duration-200 group-data-[state=active]:text-[#ef7f1a]">
                        All
                      </span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="for-sale"
                      className="group h-[45px] md:h-[54.59px] px-4 md:px-6 bg-for-bg-dark rounded-none border-b-2 border-transparent data-[state=active]:border-[#ef7f1a] data-[state=active]:bg-for-bg-dark data-[state=inactive]:bg-for-bg-dark data-[state=active]:shadow-none transition-all duration-200"
                      data-testid="tab-for-sale"
                    >
                      <span className="font-[number:var(--p3-regular-font-weight)] text-xs md:text-[length:var(--p3-regular-font-size)] tracking-[var(--p3-regular-letter-spacing)] leading-[var(--p3-regular-line-height)] text-icons transition-colors duration-200 group-data-[state=active]:text-[#ef7f1a] group-data-[state=active]:font-semibold">
                        For Sale
                      </span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="for-rent"
                      className="group h-[45px] md:h-[54.59px] px-4 md:px-6 bg-for-bg-dark rounded-none border-b-2 border-transparent data-[state=active]:border-[#ef7f1a] data-[state=active]:bg-for-bg-dark data-[state=inactive]:bg-for-bg-dark data-[state=active]:shadow-none transition-all duration-200"
                      data-testid="tab-for-rent"
                    >
                      <span className="font-[number:var(--p3-regular-font-weight)] text-xs md:text-[length:var(--p3-regular-font-size)] tracking-[var(--p3-regular-letter-spacing)] leading-[var(--p3-regular-line-height)] text-icons transition-colors duration-200 group-data-[state=active]:text-[#ef7f1a] group-data-[state=active]:font-semibold">
                        For Rent
                      </span>
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="all" className="mt-0">
                    <SearchForm 
                      currentStatus="all"
                      keyword={keyword}
                      propertyType={propertyType}
                      beds={beds}
                      baths={baths}
                      showAdvanced={showAdvanced}
                      onKeywordChange={handleKeywordChange}
                      onKeyDown={handleKeyDown}
                      onPropertyTypeChange={setPropertyType}
                      onBedsChange={setBeds}
                      onBathsChange={setBaths}
                      onShowAdvancedChange={setShowAdvanced}
                      onSearch={handleSearch}
                    />
                  </TabsContent>

                  <TabsContent value="for-sale" className="mt-0">
                    <SearchForm 
                      currentStatus="for-sale"
                      keyword={keyword}
                      propertyType={propertyType}
                      beds={beds}
                      baths={baths}
                      showAdvanced={showAdvanced}
                      onKeywordChange={handleKeywordChange}
                      onKeyDown={handleKeyDown}
                      onPropertyTypeChange={setPropertyType}
                      onBedsChange={setBeds}
                      onBathsChange={setBaths}
                      onShowAdvancedChange={setShowAdvanced}
                      onSearch={handleSearch}
                    />
                  </TabsContent>

                  <TabsContent value="for-rent" className="mt-0">
                    <SearchForm 
                      currentStatus="for-rent"
                      keyword={keyword}
                      propertyType={propertyType}
                      beds={beds}
                      baths={baths}
                      showAdvanced={showAdvanced}
                      onKeywordChange={handleKeywordChange}
                      onKeyDown={handleKeyDown}
                      onPropertyTypeChange={setPropertyType}
                      onBedsChange={setBeds}
                      onBathsChange={setBaths}
                      onShowAdvancedChange={setShowAdvanced}
                      onSearch={handleSearch}
                    />
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
