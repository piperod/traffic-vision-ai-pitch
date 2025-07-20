import { Target, TrendingUp, Users, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const GoToMarketSlide = () => {
  const strategies = [
    {
      icon: Award,
      title: "Leverage PMA's Market Position",
      description: "Utilize active state contracts & DBE certification for immediate credibility",
      priority: "Immediate",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      title: "Upsell to Existing Clients",
      description: "Introduce analytics platform to current PMA customer base",
      priority: "Month 1-3",
      color: "text-accent"
    },
    {
      icon: Target,
      title: "Direct MPO & Engineering Outreach",
      description: "Targeted sales to Metropolitan Planning Organizations and engineering firms",
      priority: "Month 3-6",
      color: "text-success"
    },
    {
      icon: Users,
      title: "Co-branded Marketing",
      description: "Joint proposals and conference marketing leveraging both brands",
      priority: "Ongoing",
      color: "text-warning"
    }
  ];

  const channels = [
    { name: "Existing Contracts", penetration: "85%", description: "Current PMA clients" },
    { name: "Direct Sales", penetration: "60%", description: "New client acquisition" },
    { name: "Partner Referrals", penetration: "40%", description: "Engineering firm partnerships" },
    { name: "Conference Marketing", penetration: "25%", description: "Industry events & trade shows" }
  ];

  const targetCustomers = [
    {
      segment: "State DOTs",
      size: "50+ nationwide",
      priority: "High",
      approach: "Leverage FDOT relationship"
    },
    {
      segment: "Engineering Firms",
      size: "500+ firms",
      priority: "High", 
      approach: "Direct sales & partnerships"
    },
    {
      segment: "MPOs",
      size: "400+ organizations",
      priority: "Medium",
      approach: "Government procurement process"
    },
    {
      segment: "Municipalities",
      size: "19,000+ cities",
      priority: "Medium",
      approach: "Pilot programs & case studies"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Go-to-Market Strategy</h1>
        <p className="text-xl text-muted-foreground">
          Leveraging 25 years of relationships and proven market position
        </p>
      </div>

      {/* Core Strategies */}
      <div className="grid lg:grid-cols-2 gap-6">
        {strategies.map((strategy, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <strategy.icon className={`h-8 w-8 ${strategy.color}`} />
                <Badge variant="outline">{strategy.priority}</Badge>
              </div>
              <h3 className="text-xl font-semibold">{strategy.title}</h3>
              <p className="text-muted-foreground">{strategy.description}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Sales Channels */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-center">Sales Channel Performance</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {channels.map((channel, index) => (
            <Card key={index} className="p-4">
              <div className="space-y-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{channel.penetration}</div>
                  <div className="font-semibold">{channel.name}</div>
                </div>
                <div className="text-sm text-muted-foreground text-center">
                  {channel.description}
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-1000"
                    style={{ width: channel.penetration }}
                  ></div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Target Customer Segments */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-center">Target Customer Segments</h3>
        <div className="grid lg:grid-cols-2 gap-4">
          {targetCustomers.map((customer, index) => (
            <Card key={index} className="p-4">
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-semibold text-lg">{customer.segment}</h4>
                <Badge variant={customer.priority === "High" ? "default" : "secondary"}>
                  {customer.priority}
                </Badge>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-muted-foreground">Market Size</div>
                  <div className="font-medium">{customer.size}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Approach</div>
                  <div className="font-medium">{customer.approach}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Competitive Advantages */}
      <Card className="p-6 bg-success/5 border-success/20">
        <h3 className="text-xl font-semibold text-success mb-4">Key Competitive Advantages</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
            <div>
              <div className="font-medium">FDOT DBE Certification</div>
              <div className="text-sm text-muted-foreground">Preferential bidding status</div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
            <div>
              <div className="font-medium">25-Year Track Record</div>
              <div className="text-sm text-muted-foreground">Proven field expertise</div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
            <div>
              <div className="font-medium">End-to-End Solution</div>
              <div className="text-sm text-muted-foreground">Unique market position</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};