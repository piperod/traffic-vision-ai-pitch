import { CheckCircle, Zap, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const SolutionSlide = () => {
  const features = [
    {
      icon: Target,
      title: "Full-Service Data Collection",
      description: "PMA offers comprehensive data collection: pedestrian, vehicle, transit, and parking studies",
      highlight: "25 years experience"
    },
    {
      icon: Zap,
      title: "AI-Powered Analytics Platform",
      description: "13Classifications.Ai provides cutting-edge analytics with industry-leading accuracy",
      highlight: "98% accuracy"
    },
    {
      icon: CheckCircle,
      title: "End-to-End Solution",
      description: "Complete traffic data collection and analytics under one unified umbrella",
      highlight: "Seamless integration"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-primary-gradient bg-clip-text text-transparent">
          Our Solution
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Combining proven field expertise with cutting-edge AI technology
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="p-6 relative overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <feature.icon className="h-8 w-8 text-primary" />
                <Badge variant="secondary">{feature.highlight}</Badge>
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card className="p-6 bg-success/5 border-success/20">
          <h3 className="text-xl font-semibold text-success mb-4">Game-Changing Results</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-success" />
              <span>AI platform developed over 14 months, now officially launched</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-success" />
              <span>90% reduction in monthly data analysis costs</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-success" />
              <span>$450,000 added to 2024 annual profits</span>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-primary/5 border-primary/20">
          <h3 className="text-xl font-semibold text-primary mb-4">Strategic Advantage</h3>
          <p className="text-muted-foreground mb-4">
            PMA transitioned from using third-party AI providers to developing proprietary technology, 
            creating a massive competitive moat and cost advantage.
          </p>
          <div className="text-2xl font-bold text-primary">25-year legacy + cutting-edge AI</div>
        </Card>
      </div>
    </div>
  );
};