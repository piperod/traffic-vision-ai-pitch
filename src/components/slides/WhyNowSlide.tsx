import { Zap, CheckCircle, Target, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

export const WhyNowSlide = () => {
  const reasons = [
    {
      icon: CheckCircle,
      title: "Proven Results & Contracts",
      description: "PMA has established relationships and active contracts providing immediate revenue base",
      details: ["FDOT DBE certification", "Active multi-state contracts", "$450K cost savings proven", "25-year reputation"],
      color: "text-success"
    },
    {
      icon: Zap,
      title: "Platform Complete & Tested",
      description: "13Classifications.Ai Phase I is fully developed, tested, and delivering 98% accuracy",
      details: ["14 months of development", "98% accuracy achieved", "Successfully reducing costs", "Ready for Phase II expansion"],
      color: "text-primary"
    },
    {
      icon: Target,
      title: "Market Pain Point Solved",
      description: "Unified offering addresses critical industry gap between data collection and analytics",
      details: ["Eliminates vendor fragmentation", "End-to-end solution", "Proven cost reduction", "Immediate market need"],
      color: "text-accent"
    },
    {
      icon: TrendingUp,
      title: "Perfect Market Timing",
      description: "Infrastructure investment and smart city initiatives creating unprecedented demand",
      details: ["$1.2T infrastructure package", "Smart city adoption", "Government AI initiatives", "Post-pandemic mobility focus"],
      color: "text-warning"
    }
  ];

  const marketForces = [
    { force: "Infrastructure Investment", impact: "$1.2T federal package", urgency: "Active now" },
    { force: "Technology Adoption", impact: "AI/IoT mainstreaming", urgency: "Accelerating" },
    { force: "Government Modernization", impact: "Digital transformation", urgency: "Mandated" },
    { force: "Data-Driven Decisions", impact: "Evidence-based planning", urgency: "Essential" }
  ];

  const competitiveWindow = [
    { window: "Now - 6 months", opportunity: "First-mover advantage in unified platform", risk: "Competitors copy approach" },
    { window: "6 - 18 months", opportunity: "Scale customer base rapidly", risk: "Market becomes crowded" },
    { window: "18+ months", opportunity: "Market leadership position", risk: "Miss growth opportunity" }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Why Now</h1>
        <p className="text-xl text-muted-foreground">
          Perfect convergence of proven solutions, market readiness, and unprecedented opportunity
        </p>
      </div>

      {/* Core Reasons */}
      <div className="grid lg:grid-cols-2 gap-6">
        {reasons.map((reason, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-all">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <reason.icon className={`h-8 w-8 ${reason.color}`} />
                <h3 className="text-xl font-semibold">{reason.title}</h3>
              </div>
              <p className="text-muted-foreground">{reason.description}</p>
              <div className="space-y-2">
                {reason.details.map((detail, dIndex) => (
                  <div key={dIndex} className="flex items-center gap-2 text-sm">
                    <div className={`w-2 h-2 rounded-full ${reason.color.replace('text-', 'bg-')}`}></div>
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Market Forces */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-center">Driving Market Forces</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {marketForces.map((force, index) => (
            <Card key={index} className="p-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-primary">{force.force}</h4>
                <div className="text-sm space-y-1">
                  <div className="text-muted-foreground">{force.impact}</div>
                  <div className="text-xs bg-warning/20 text-warning px-2 py-1 rounded">
                    {force.urgency}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Competitive Window */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-center">Competitive Window</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {competitiveWindow.map((window, index) => (
            <Card key={index} className="p-6">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-primary">{window.window}</h4>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm font-medium text-success">Opportunity</div>
                    <div className="text-sm text-muted-foreground">{window.opportunity}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-destructive">Risk</div>
                    <div className="text-sm text-muted-foreground">{window.risk}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Expansion Strategy */}
      <Card className="p-6 bg-primary/5 border-primary/20">
        <h3 className="text-xl font-semibold text-primary mb-4">Strategic Position for Growth</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">Florida</div>
            <div className="text-sm text-muted-foreground">Established base</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent">Virginia</div>
            <div className="text-sm text-muted-foreground">Active expansion</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-success">East Coast</div>
            <div className="text-sm text-muted-foreground">Next target</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-warning">National</div>
            <div className="text-sm text-muted-foreground">Long-term goal</div>
          </div>
        </div>
      </Card>

      {/* Urgency Call-out */}
      <div className="text-center p-8 bg-accent-gradient rounded-lg">
        <h3 className="text-2xl font-bold text-white mb-4">The Window is Open</h3>
        <p className="text-white/90 text-lg mb-4">
          We have proven technology, established relationships, and a clear path to market leadership
        </p>
        <div className="text-white font-semibold">
          Now is the time to scale and capture this unprecedented opportunity
        </div>
      </div>
    </div>
  );
};