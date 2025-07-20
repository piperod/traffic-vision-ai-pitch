import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

export const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur border-b border-border p-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="text-sm text-muted-foreground">
            Slide {currentSlide + 1} of {slides.length}: {slides[currentSlide].title}
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={prevSlide} disabled={currentSlide === 0}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={nextSlide} disabled={currentSlide === slides.length - 1}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Slide Content */}
      <div className="pt-20">
        <PresentationSlide>
          <CurrentSlideComponent />
        </PresentationSlide>
      </div>

      {/* Slide Indicator */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <Card className="px-4 py-2">
          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-primary w-6"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </Card>
      </div>

      {/* Keyboard Navigation */}
      <div className="sr-only">
        <Button onClick={prevSlide}>Previous Slide</Button>
        <Button onClick={nextSlide}>Next Slide</Button>
      </div>
    </div>
  );
};