import { AlertTriangle, Clock, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";

export const ProblemSlide = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Traffic Congestion & Safety",
      description: "U.S. cities face increasing traffic congestion and safety issues affecting millions daily",
      stat: "8.8B hours lost annually"
    },
    {
      icon: Clock,
      title: "Outdated Data Collection",
      description: "Manual data collection is slow, expensive, and prone to human errors",
      stat: "72% accuracy typical"
    },
    {
      icon: DollarSign,
      title: "Lack of Real-Time Insights",
      description: "Engineering firms and DOTs lack reliable, real-time, multimodal traffic data",
      stat: "$87B infrastructure gap"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">The Problem</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Critical gaps in traffic data collection are costing cities billions and compromising safety
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {problems.map((problem, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <problem.icon className="h-8 w-8 text-destructive" />
                <span className="text-sm font-bold text-destructive bg-destructive/10 px-2 py-1 rounded">
                  {problem.stat}
                </span>
              </div>
              <h3 className="text-xl font-semibold">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-destructive mb-4">The Cost of Inaction</h3>
        <div className="grid sm:grid-cols-3 gap-6">
          <div>
            <div className="text-3xl font-bold text-destructive">$166B</div>
            <div className="text-sm text-muted-foreground">Annual congestion cost</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-destructive">42,000+</div>
            <div className="text-sm text-muted-foreground">Traffic fatalities yearly</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-destructive">54 hours</div>
            <div className="text-sm text-muted-foreground">Lost per commuter annually</div>
          </div>
        </div>
      </div>
    </div>
  );
};