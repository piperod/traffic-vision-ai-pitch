import { CheckCircle, Award, MapPin, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const TractionSlide = () => {
  const milestones = [
    {
      icon: Award,
      title: "FDOT-Certified DBE",
      description: "Disadvantaged Business Enterprise certification with Florida DOT",
      status: "Active",
      color: "text-success"
    },
    {
      icon: MapPin,
      title: "Multi-State Contracts",
      description: "Active contracts in Florida and Louisiana with ongoing projects",
      status: "Expanding",
      color: "text-primary"
    },
    {
      icon: Rocket,
      title: "AI Platform Phase I Complete",
      description: "Analytics platform fully developed and tested with 98% accuracy",
      status: "Launched",
      color: "text-accent"
    },
    {
      icon: CheckCircle,
      title: "Enterprise Pilots",
      description: "Ongoing pilot programs with regional engineering firms",
      status: "Active",
      color: "text-warning"
    }
  ];

  const metrics = [
    { label: "Years in Business", value: "25+", description: "Proven track record" },
    { label: "AI Development", value: "14 months", description: "Platform creation" },
    { label: "Cost Reduction", value: "90%", description: "Analysis efficiency" },
    { label: "Accuracy Rate", value: "98%", description: "AI performance" }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Traction & Milestones</h1>
        <p className="text-xl text-muted-foreground">
          Proven results and strong market position
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <Card key={index} className="p-6 text-center hover:shadow-lg transition-all">
            <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
            <div className="font-semibold mb-1">{metric.label}</div>
            <div className="text-sm text-muted-foreground">{metric.description}</div>
          </Card>
        ))}
      </div>

      {/* Milestones */}
      <div className="grid md:grid-cols-2 gap-6">
        {milestones.map((milestone, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-all">
            <div className="flex items-start gap-4">
              <milestone.icon className={`h-8 w-8 ${milestone.color} mt-1`} />
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold">{milestone.title}</h3>
                  <Badge variant="outline" className={milestone.color}>
                    {milestone.status}
                  </Badge>
                </div>
                <p className="text-muted-foreground">{milestone.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Success Story */}
      <Card className="p-6 bg-success/5 border-success/20">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold text-success">$450,000 Annual Impact</h3>
          <p className="text-lg">
            By developing our proprietary AI platform, we eliminated dependency on third-party providers, 
            reducing monthly analysis costs by 90% and adding nearly half a million to annual profits.
          </p>
          <div className="flex justify-center items-center gap-8 text-sm text-muted-foreground">
            <div>
              <div className="text-2xl font-bold text-destructive">$50,000</div>
              <div>Monthly cost (before)</div>
            </div>
            <div className="text-2xl">→</div>
            <div>
              <div className="text-2xl font-bold text-success">$5,000</div>
              <div>Monthly cost (after)</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};