import {
  IconAlertTriangle,
  IconCurrencyDollar,
  IconRobot,
  IconUsers,
} from "@tabler/icons-react";

export type KPIAccent =
  | "brand"
  | "health"
  | "risk"
  | "ai"
  | "analytics"
  | "forecast";

export interface DashboardStat {
  title: string;
  value: string;
  change: string;
  description: string;
  icon: React.ElementType;
  accent: KPIAccent;
}

export const dashboardStats: DashboardStat[] = [
  {
    title: "Revenue At Risk",
    value: "$241K",
    change: "+18.4%",
    description: "Compared to last month",
    icon: IconCurrencyDollar,
    accent: "brand",
  },

  {
    title: "Customers",
    value: "2,846",
    change: "+124",
    description: "Active customers",
    icon: IconUsers,
    accent: "health",
  },

  {
    title: "High Risk",
    value: "126",
    change: "-9",
    description: "Needs attention",
    icon: IconAlertTriangle,
    accent: "risk",
  },

  {
    title: "AI Confidence",
    value: "98.2%",
    change: "+0.6%",
    description: "Prediction confidence",
    icon: IconRobot,
    accent: "ai",
  },
];

export const revenueData = [
  { month: "Jan", revenue: 120 },
  { month: "Feb", revenue: 145 },
  { month: "Mar", revenue: 162 },
  { month: "Apr", revenue: 180 },
  { month: "May", revenue: 215 },
  { month: "Jun", revenue: 241 },
];