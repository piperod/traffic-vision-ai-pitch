import { TrendingUp, Globe, MapPin, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";

export const MarketOpportunitySlide = () => {
  const marketSegments = [
    {
      title: "U.S. Traffic Data Collection",
      size: "$1.5B+",
      growth: "Growing",
      description: "Traditional traffic counting and data collection services"
    },
    {
      title: "Global Analytics Market",
      size: "$2B",
      growth: "12.5% CAGR",
      description: "AI-powered analytics and predictive modeling platforms"
    },
    {
      title: "Infrastructure Funding",
      size: "$1.2T",
      growth: "Accelerating",
      description: "Government investment driving demand for data-driven solutions"
    }
  ];

  const targetMarkets = [
    { region: "Florida DOT", status: "Primary Focus", opportunity: "Large existing relationship" },
    { region: "Virginia", status: "Expanding", opportunity: "New market entry" },
    { region: "East Coast", status: "Target", opportunity: "Regional expansion" },
    { region: "Municipalities", status: "Growing", opportunity: "Local government contracts" }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Market Opportunity</h1>
        <p className="text-xl text-muted-foreground">
          Massive market with accelerating demand for smart infrastructure
        </p>
      </div>

      {/* Market Size */}
      <div className="grid md:grid-cols-3 gap-6">
        {marketSegments.map((segment, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <TrendingUp className="h-8 w-8 text-primary" />
                <span className="text-sm font-semibold text-success bg-success/10 px-2 py-1 rounded">
                  {segment.growth}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{segment.title}</h3>
                <div className="text-3xl font-bold text-primary mb-2">{segment.size}</div>
                <p className="text-muted-foreground text-sm">{segment.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Total Addressable Market */}
      <Card className="p-8 bg-primary-gradient text-white">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold">Total Addressable Market</h3>
          <div className="text-6xl font-bold">$4.7B+</div>
          <p className="text-lg text-white/90">
            Combined market opportunity with strong government backing and infrastructure investment
          </p>
        </div>
      </Card>

      {/* Target Markets */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-center">Geographic Expansion Strategy</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {targetMarkets.map((market, index) => (
            <Card key={index} className="p-4 hover:shadow-md transition-all">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold">{market.region}</h4>
                </div>
                <div className="text-sm space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-primary font-medium">{market.status}</span>
                  </div>
                  <p className="text-muted-foreground">{market.opportunity}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Market Drivers */}
      <Card className="p-6 bg-accent/5 border-accent/20">
        <h3 className="text-xl font-semibold text-accent mb-4">Key Market Drivers</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex items-start gap-3">
            <DollarSign className="h-5 w-5 text-accent mt-1" />
            <div>
              <div className="font-medium">Infrastructure Investment</div>
              <div className="text-sm text-muted-foreground">$1.2T federal infrastructure package</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Globe className="h-5 w-5 text-accent mt-1" />
            <div>
              <div className="font-medium">Smart City Initiatives</div>
              <div className="text-sm text-muted-foreground">Cities investing in data-driven solutions</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <TrendingUp className="h-5 w-5 text-accent mt-1" />
            <div>
              <div className="font-medium">Technology Adoption</div>
              <div className="text-sm text-muted-foreground">AI and IoT transforming transportation</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};