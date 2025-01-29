import {
  CustomerSupportIcon,
  DashboardIcon,
  SubscriptionAndBillingIcon,
  EmployeesIcon,
  TeamsIcon,
  AccessControlIcon,
  ConfigurationsIcon,
  PlatformManagementIcon,
  PaymentManagementIcon,
  SubscriptionIcon,
} from "@/svg/Menu/MenuIcons";

const MenuItems = [
  {
    title: "Dashboard",
    icon: DashboardIcon,
    route: "/admin/dashboard",
    isExpandable: false,
    subItems: [],
    permission: "",
  },

  {
    title: "Subscription",
    icon: SubscriptionIcon,
    route: "/admin/subscription",
    isExpandable: false,
    subItems: [],
    permission: "",
  },
  {
    title: "Coupons",
    icon: SubscriptionAndBillingIcon,
    route: "/admin/coupons",
    isExpandable: false,
    subItems: [],
    permission: "",
  },
  {
    title: "Customer Support",
    icon: CustomerSupportIcon,
    route: "/admin/customer-support",
    isExpandable: false,
    subItems: [],
    permission: "",
  },
  {
    title: "Settings",
    icon: ConfigurationsIcon,
    route: "/admin/settings",
    isExpandable: true,
    subItems: [
      {
        title: "Employees",
        route: "/employees",
        icon: EmployeesIcon,

        permission: "",
      },
      {
        title: "Access Control",
        route: "/access-control",
        icon: AccessControlIcon,

        permission: "",
      },
    ],
    permission: "",
  },

  {
    title: "Client Management",
    icon: TeamsIcon,
    route: "/admin/client-management",
    isExpandable: false,
    subItems: [],
    permission: "",
  },
  {
    title: "Platform Management",
    icon: PlatformManagementIcon,
    route: "/admin/platform-management",
    isExpandable: false,
    subItems: [],
    permission: "",
  },
  {
    title: "Payment Management",
    icon: PaymentManagementIcon,
    route: "/admin/payment-management",
    isExpandable: false,
    subItems: [],
    permission: "",
  },
];

export default MenuItems;
