import { TrendingUp, DollarSign, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

export const FinancialProjectionsSlide = () => {
  const projections = [
    {
      year: "Year 1",
      revenue: "$3.2M",
      margin: "35%",
      profit: "$1.12M",
      growth: "-"
    },
    {
      year: "Year 2", 
      revenue: "$4.48M",
      margin: "40%",
      profit: "$1.79M",
      growth: "+40%"
    },
    {
      year: "Year 3",
      revenue: "$6.27M",
      margin: "40%+",
      profit: "$2.51M",
      growth: "+40%"
    }
  ];

  const revenueBreakdown = [
    { category: "PMA Field Services", y1: 2.2, y2: 2.9, y3: 3.8 },
    { category: "SaaS Subscriptions", y1: 0.6, y2: 1.2, y3: 1.9 },
    { category: "Data Licensing", y1: 0.3, y2: 0.25, y3: 0.4 },
    { category: "Bundled Services", y1: 0.1, y2: 0.13, y3: 0.17 }
  ];

  const keyMetrics = [
    { metric: "Customer Acquisition Cost", y1: "$2.5K", y2: "$2.0K", y3: "$1.5K" },
    { metric: "Customer Lifetime Value", y1: "$75K", y2: "$95K", y3: "$125K" },
    { metric: "Monthly Recurring Revenue", y1: "$50K", y2: "$100K", y3: "$158K" },
    { metric: "Gross Margin", y1: "65%", y2: "68%", y3: "70%" }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Financial Projections</h1>
        <p className="text-xl text-muted-foreground">
          Strong growth trajectory with improving margins
        </p>
      </div>

      {/* Main Projections */}
      <div className="grid md:grid-cols-3 gap-6">
        {projections.map((projection, index) => (
          <Card key={index} className={`p-6 ${index === 1 ? 'border-primary shadow-lg' : ''}`}>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{projection.year}</h3>
                {projection.growth !== "-" && (
                  <span className="text-sm font-bold text-success bg-success/10 px-2 py-1 rounded">
                    {projection.growth}
                  </span>
                )}
              </div>
              <div className="space-y-2">
                <div>
                  <div className="text-3xl font-bold text-primary">{projection.revenue}</div>
                  <div className="text-sm text-muted-foreground">Revenue</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xl font-semibold">{projection.margin}</div>
                    <div className="text-sm text-muted-foreground">Margin</div>
                  </div>
                  <div>
                    <div className="text-xl font-semibold text-success">{projection.profit}</div>
                    <div className="text-sm text-muted-foreground">Profit</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Revenue Breakdown */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-center">Revenue Breakdown by Category</h3>
        <Card className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Category</th>
                  <th className="text-right py-2">Year 1</th>
                  <th className="text-right py-2">Year 2</th>
                  <th className="text-right py-2">Year 3</th>
                </tr>
              </thead>
              <tbody>
                {revenueBreakdown.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3 font-medium">{item.category}</td>
                    <td className="text-right py-3">${item.y1}M</td>
                    <td className="text-right py-3">${item.y2}M</td>
                    <td className="text-right py-3">${item.y3}M</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {/* Key Metrics */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-center">Key Performance Metrics</h3>
        <div className="grid lg:grid-cols-2 gap-4">
          {keyMetrics.map((metric, index) => (
            <Card key={index} className="p-4">
              <div className="space-y-3">
                <h4 className="font-semibold">{metric.metric}</h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-primary">{metric.y1}</div>
                    <div className="text-xs text-muted-foreground">Year 1</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-accent">{metric.y2}</div>
                    <div className="text-xs text-muted-foreground">Year 2</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-success">{metric.y3}</div>
                    <div className="text-xs text-muted-foreground">Year 3</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Growth Drivers */}
      <Card className="p-6 bg-primary/5 border-primary/20">
        <h3 className="text-xl font-semibold text-primary mb-4">Growth Drivers</h3>
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <TrendingUp className="h-6 w-6 text-primary mt-1" />
            <div>
              <div className="font-medium">Market Expansion</div>
              <div className="text-sm text-muted-foreground">Geographic growth into new states</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <DollarSign className="h-6 w-6 text-primary mt-1" />
            <div>
              <div className="font-medium">SaaS Growth</div>
              <div className="text-sm text-muted-foreground">Recurring revenue scaling rapidly</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Target className="h-6 w-6 text-primary mt-1" />
            <div>
              <div className="font-medium">Operational Efficiency</div>
              <div className="text-sm text-muted-foreground">AI automation improving margins</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};