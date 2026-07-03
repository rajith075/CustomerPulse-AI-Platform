import {
  IconLayoutDashboard,
  IconUsers,
  IconChartBar,
  IconCurrencyDollar,
  IconFileAnalytics,
  IconRobot,
  IconHistory,
  IconSettings,
  IconBrain,
  IconTargetArrow,
  IconHeartHandshake,
  IconShieldExclamation,
  IconSearch,
} from "@tabler/icons-react";

export const searchItems = [
  // Pages
  {
    title: "Dashboard",
    description: "Open Executive Dashboard",
    category: "Pages",
    route: "/dashboard",
    icon: IconLayoutDashboard,
  },
  {
    title: "Customers",
    description: "Customer Management",
    category: "Pages",
    route: "/customers",
    icon: IconUsers,
  },
  {
    title: "Analytics",
    description: "Business Analytics",
    category: "Pages",
    route: "/analytics",
    icon: IconChartBar,
  },
  {
    title: "Revenue",
    description: "Revenue Intelligence",
    category: "Pages",
    route: "/revenue",
    icon: IconCurrencyDollar,
  },
  {
    title: "Reports",
    description: "Executive Reports",
    category: "Pages",
    route: "/reports",
    icon: IconFileAnalytics,
  },
  {
    title: "AI Consultant",
    description: "Talk with AI",
    category: "Pages",
    route: "/consultant",
    icon: IconRobot,
  },
  {
    title: "History",
    description: "AI History",
    category: "Pages",
    route: "/history",
    icon: IconHistory,
  },
  {
    title: "Settings",
    description: "Application Settings",
    category: "Pages",
    route: "/settings",
    icon: IconSettings,
  },

  // Dashboard Widgets
  {
    title: "Executive Summary",
    description: "Jump to Executive Summary",
    category: "Widget",
    route: "/dashboard#executive-summary",
    icon: IconBrain,
  },
  {
    title: "Risk Intelligence",
    description: "Jump to Risk Intelligence",
    category: "Widget",
    route: "/dashboard#risk-intelligence",
    icon: IconShieldExclamation,
  },
  {
    title: "Customer Health",
    description: "Jump to Customer Health",
    category: "Widget",
    route: "/dashboard#customer-health",
    icon: IconHeartHandshake,
  },

  // AI
  {
    title: "AI Decision Center",
    description: "Strategic AI Decisions",
    category: "AI",
    route: "/dashboard#decision-center",
    icon: IconTargetArrow,
  },

  // Quick Actions
  {
    title: "High Risk Customers",
    description: "Open High Risk Customers",
    category: "Quick Action",
    route: "/customers?risk=high",
    icon: IconSearch,
  },
];