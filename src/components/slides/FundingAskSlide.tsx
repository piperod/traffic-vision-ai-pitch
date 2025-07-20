import { DollarSign, Users, Zap, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

export const FundingAskSlide = () => {
  const useOfFunds = [
    {
      icon: Users,
      category: "Team Expansion",
      amount: "$2.4M",
      percentage: "40%",
      description: "Expand field operations & AI development team",
      details: ["15 additional field technicians", "5 AI/ML engineers", "3 sales professionals", "2 customer success managers"]
    },
    {
      icon: Zap,
      category: "Platform Development", 
      amount: "$1.8M",
      percentage: "30%",
      description: "Complete Phase II analytics platform",
      details: ["Advanced predictive modeling", "Real-time monitoring capabilities", "Mobile applications", "Enterprise integrations"]
    },
    {
      icon: Target,
      category: "Infrastructure & Support",
      amount: "$1.2M", 
      percentage: "20%",
      description: "Scalable infrastructure and support systems",
      details: ["Cloud infrastructure scaling", "Data security enhancements", "Quality assurance systems", "24/7 support capabilities"]
    },
    {
      icon: DollarSign,
      category: "Sales & Marketing",
      amount: "$600K",
      percentage: "10%",
      description: "Targeted marketing to DOTs and MPOs",
      details: ["Trade show participation", "Digital marketing campaigns", "Sales enablement tools", "Customer acquisition programs"]
    }
  ];

  const milestones = [
    { timeframe: "Months 1-6", goals: ["Hire 10 team members", "Launch Phase II platform", "Secure 3 new state contracts"] },
    { timeframe: "Months 7-12", goals: ["Scale to 25 new clients", "$2M ARR milestone", "Expand to 3 new states"] },
    { timeframe: "Months 13-18", goals: ["$4M ARR milestone", "Series B readiness", "National market presence"] }
  ];

  const investorBenefits = [
    { benefit: "Proven Market Traction", description: "25-year established business with active contracts" },
    { benefit: "Defensible Technology", description: "Proprietary AI platform with 98% accuracy" },
    { benefit: "Recurring Revenue", description: "SaaS model with strong unit economics" },
    { benefit: "Experienced Team", description: "Industry veterans with deep domain expertise" }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Funding Ask</h1>
        <div className="space-y-2">
          <div className="text-6xl font-bold bg-primary-gradient bg-clip-text text-transparent">
            $6,000,000
          </div>
          <p className="text-xl text-muted-foreground">Series A Equity Funding</p>
        </div>
      </div>

      {/* Use of Funds */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-center">Use of Funds</h3>
        <div className="grid lg:grid-cols-2 gap-6">
          {useOfFunds.map((fund, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <fund.icon className="h-8 w-8 text-primary" />
                    <h4 className="text-xl font-semibold">{fund.category}</h4>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{fund.amount}</div>
                    <div className="text-sm text-muted-foreground">{fund.percentage}</div>
                  </div>
                </div>
                <p className="text-muted-foreground">{fund.description}</p>
                <div className="space-y-2">
                  {fund.details.map((detail, dIndex) => (
                    <div key={dIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Milestones */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-center">18-Month Milestones</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {milestones.map((milestone, index) => (
            <Card key={index} className="p-6">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-primary">{milestone.timeframe}</h4>
                <div className="space-y-2">
                  {milestone.goals.map((goal, gIndex) => (
                    <div key={gIndex} className="flex items-start gap-2 text-sm">
                      <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                      {goal}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Investor Benefits */}
      <Card className="p-6 bg-accent/5 border-accent/20">
        <h3 className="text-xl font-semibold text-accent mb-4">Why Invest Now</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {investorBenefits.map((item, index) => (
            <div key={index} className="space-y-2">
              <h4 className="font-semibold">{item.benefit}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* ROI Projection */}
      <div className="text-center p-8 bg-primary-gradient rounded-lg">
        <h3 className="text-2xl font-bold text-white mb-4">Projected Returns</h3>
        <div className="grid sm:grid-cols-3 gap-6 text-white">
          <div>
            <div className="text-3xl font-bold">3-5x</div>
            <div className="text-white/90">Expected ROI</div>
          </div>
          <div>
            <div className="text-3xl font-bold">3-5 years</div>
            <div className="text-white/90">Investment horizon</div>
          </div>
          <div>
            <div className="text-3xl font-bold">$50M+</div>
            <div className="text-white/90">Projected valuation</div>
          </div>
        </div>
      </div>
    </div>
  );
};