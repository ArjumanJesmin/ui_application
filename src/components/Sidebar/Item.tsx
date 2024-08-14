import {
  User,
  Inbox,
  CreditCard,
  Bell,
  Settings,
  Shield,
  FileText,
} from "lucide-react";

export const menuList = [
  {
    group: "General",
    item: [
      {
        link: "/profile",
        icon: <User />,
        text: "Profile",
      },
      {
        link: "/inbox",
        icon: <Inbox />,
        text: "Inbox",
      },
      {
        link: "/billing",
        icon: <CreditCard />,
        text: "Billing",
      },
      {
        link: "/notifications",
        icon: <Bell />,
        text: "Notifications",
      },
    ],
  },
  {
    group: "Settings",
    item: [
      {
        link: "/general-settings",
        icon: <Settings />,
        text: "General Settings",
      },
      {
        link: "/privacy",
        icon: <Shield />,
        text: "Privacy",
      },
      {
        link: "/logs",
        icon: <FileText />,
        text: "Logs",
      },
    ],
  },
];
