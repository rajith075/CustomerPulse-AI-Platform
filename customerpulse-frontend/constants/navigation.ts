import {
   IconLayoutDashboard,
  IconUpload,
  IconUsers,
  IconReportAnalytics,
  IconChartBar,
  IconCoins,
  IconBrain,
  IconHistory,
  IconSettings,
} from "@tabler/icons-react";

export interface NavigationItem {
  title: string;
  href: string;
  icon: React.ElementType;
}

export const navigation: NavigationItem[] = [
  {
  title: "Dashboard",
  href: "/dashboard",
  icon: IconLayoutDashboard,
},
  {
    title: "Upload Dataset",
    href: "/upload",
    icon: IconUpload,
  },
  {
    title: "Customers",
    href: "/customers",
    icon: IconUsers,
  },
  {
  title: "Reports",
  href: "/reports",
  icon: IconReportAnalytics,
},
  {
    title: "Analytics",
    href: "/analytics",
    icon: IconChartBar,
  },
  {
    title: "Revenue",
    href: "/revenue",
    icon: IconCoins,
  },

  {
    title: "AI Consultant",
    href: "/ai",
    icon: IconBrain,
  },
  {
    title: "History",
    href: "/history",
    icon: IconHistory,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: IconSettings,
  },
];