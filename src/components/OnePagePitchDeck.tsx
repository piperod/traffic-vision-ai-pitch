import { PresentationSlide } from "./slides/PresentationSlide";
import { CompanyOverviewSlide } from "./slides/CompanyOverviewSlide";
import { ProblemSlide } from "./slides/ProblemSlide";
import { SolutionSlide } from "./slides/SolutionSlide";
import { ProductStackSlide } from "./slides/ProductStackSlide";
import { TractionSlide } from "./slides/TractionSlide";
import { MarketOpportunitySlide } from "./slides/MarketOpportunitySlide";
import { BusinessModelSlide } from "./slides/BusinessModelSlide";
import { GoToMarketSlide } from "./slides/GoToMarketSlide";
import { FinancialProjectionsSlide } from "./slides/FinancialProjectionsSlide";
import { FundingAskSlide } from "./slides/FundingAskSlide";
import { TeamSlide } from "./slides/TeamSlide";
import { WhyNowSlide } from "./slides/WhyNowSlide";
import { ThankYouSlide } from "./slides/ThankYouSlide";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";

const slides = [
  { component: CompanyOverviewSlide, title: "Company Overview" },
  { component: ProblemSlide, title: "The Problem" },
  { component: SolutionSlide, title: "Our Solution" },
  { component: ProductStackSlide, title: "Product & Service Stack" },
  { component: TractionSlide, title: "Traction & Milestones" },
  { component: MarketOpportunitySlide, title: "Market Opportunity" },
  { component: BusinessModelSlide, title: "Business Model" },
  { component: GoToMarketSlide, title: "Go-to-Market Strategy" },
  { component: FinancialProjectionsSlide, title: "Financial Projections" },
  { component: FundingAskSlide, title: "Funding Ask" },
  { component: TeamSlide, title: "Team" },
  { component: WhyNowSlide, title: "Why Now" },
  { component: ThankYouSlide, title: "Thank You" },
];

export const OnePagePitchDeck = () => {
  const scrollToSection = (sectionId: string) => {
    console.log('Scrolling to section:', sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      console.log('Element found, scrolling...');
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      console.log('Element not found:', sectionId);
    }
    // Close dropdown after a short delay
    setTimeout(() => {
      const dropdownTrigger = document.querySelector('[data-radix-dropdown-menu-trigger]');
      if (dropdownTrigger) {
        (dropdownTrigger as HTMLElement).click();
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur border-b border-border p-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="text-lg font-semibold text-primary">
            Traffic Vision AI - Pitch Deck
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent/10">
                Navigate Sections
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64">
              {slides.map((slide, index) => (
                <DropdownMenuItem 
                  key={index} 
                  onClick={() => scrollToSection(`slide-${index}`)}
                  className="flex items-center justify-between w-full cursor-pointer"
                >
                  <span className="text-sm font-medium text-primary">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {slide.title}
                  </span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Slides Content */}
      <div className="pt-20 space-y-8">
        {slides.map((slide, index) => {
          const SlideComponent = slide.component;
          return (
            <section key={index} id={`slide-${index}`} className="scroll-mt-20">
              <PresentationSlide>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">
                      {slide.title}
                    </h2>
                  </div>
                  <SlideComponent />
                </div>
              </PresentationSlide>
              {index < slides.length - 1 && (
                <div className="max-w-7xl mx-auto px-8">
                  <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
                </div>
              )}
            </section>
          );
        })}
      </div>

      {/* Back to Top Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="#"
          className="bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
          aria-label="Back to top"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}; 