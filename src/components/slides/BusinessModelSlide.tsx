import { FileText, Repeat, Database, Package } from "lucide-react";
import { Card } from "@/components/ui/card";

export const BusinessModelSlide = () => {
  const revenueStreams = [
    {
      icon: FileText,
      title: "Project Fees (PMA)",
      description: "Field studies & consulting services",
      model: "Per-project pricing",
      typical: "$15K - $150K per project",
      color: "text-primary"
    },
    {
      icon: Repeat,
      title: "SaaS Subscriptions (13C.Ai)",
      description: "Dashboard access & predictive modeling",
      model: "Monthly/Annual subscriptions",
      typical: "$500 - $5K monthly",
      color: "text-accent"
    },
    {
      icon: Database,
      title: "Data Licensing",
      description: "Historical & anonymized traffic insights",
      model: "Data licensing fees",
      typical: "$1K - $25K per dataset",
      color: "text-success"
    },
    {
      icon: Package,
      title: "Bundled Services",
      description: "Full cycle from fieldwork to AI reports",
      model: "Integrated pricing",
      typical: "$25K - $300K per engagement",
      color: "text-warning"
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$500/month",
      features: ["Basic dashboards", "Standard reports", "Email support", "Up to 5 locations"]
    },
    {
      name: "Professional",
      price: "$2,000/month",
      features: ["Advanced analytics", "Custom reports", "Priority support", "Up to 25 locations", "API access"]
    },
    {
      name: "Enterprise",
      price: "$5,000+/month",
      features: ["Predictive modeling", "Real-time monitoring", "Dedicated support", "Unlimited locations", "Custom integrations"]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Business Model</h1>
        <p className="text-xl text-muted-foreground">
          Diversified revenue streams with recurring and project-based income
        </p>
      </div>

      {/* Revenue Streams */}
      <div className="grid lg:grid-cols-2 gap-6">
        {revenueStreams.map((stream, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-all">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <stream.icon className={`h-8 w-8 ${stream.color}`} />
                <h3 className="text-xl font-semibold">{stream.title}</h3>
              </div>
              <p className="text-muted-foreground">{stream.description}</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-semibold text-primary">Model</div>
                  <div>{stream.model}</div>
                </div>
                <div>
                  <div className="font-semibold text-primary">Range</div>
                  <div>{stream.typical}</div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* SaaS Pricing Tiers */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-center">13Classifications.Ai Pricing Tiers</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {pricingTiers.map((tier, index) => (
            <Card key={index} className={`p-6 ${index === 1 ? 'border-primary shadow-lg scale-105' : ''}`}>
              <div className="space-y-4">
                <div className="text-center">
                  <h4 className="text-xl font-semibold">{tier.name}</h4>
                  <div className="text-3xl font-bold text-primary mt-2">{tier.price}</div>
                </div>
                <ul className="space-y-2">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Revenue Mix */}
      <Card className="p-6 bg-muted/30">
        <h3 className="text-xl font-semibold mb-4">Projected Revenue Mix (Year 3)</h3>
        <div className="grid sm:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">45%</div>
            <div className="text-sm text-muted-foreground">Project Fees</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent">30%</div>
            <div className="text-sm text-muted-foreground">SaaS Subscriptions</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-success">15%</div>
            <div className="text-sm text-muted-foreground">Data Licensing</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-warning">10%</div>
            <div className="text-sm text-muted-foreground">Other Services</div>
          </div>
        </div>
      </Card>

      {/* Value Proposition */}
      <div className="text-center p-6 bg-primary-gradient rounded-lg">
        <h3 className="text-xl font-bold text-white mb-2">Competitive Advantage</h3>
        <p className="text-white/90">
          Unique position offering both data collection services AND AI analytics platform, 
          creating multiple revenue touchpoints and stronger client relationships
        </p>
      </div>
    </div>
  );
};