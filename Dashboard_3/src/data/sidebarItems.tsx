import {
  Attendance,
  Calendar,
  Employee,
  Hiring,
  Home,
  Inbox,
  Payroll,
  Project,
  Report,
  Setting,
  Support,
  Task,
} from "@/assets/icons";

export const items = {
  main: [
    {
      title: "Dashboard",
      url: "dashboard",
      icon: Home,
    },
    {
      title: "Task",
      url: "task",
      icon: Task,
      badge: 24,
    },
    {
      title: "Inbox",
      url: "inbox",
      icon: Inbox,
      badge: 9,
    },
    {
      title: "Hiring",
      url: "hiring",
      icon: Hiring,
    },
    {
      title: "Calendar",
      url: "calendar",
      icon: Calendar,
      badge: 4,
    },
  ],
  management: [
    {
      title: "Employee",
      url: "employee",
      icon: Employee,
    },
    {
      title: "Attendance",
      url: "attendance",
      icon: Attendance,
    },
    {
      title: "Project",
      url: "project",
      icon: Project,
    },
    {
      title: "Payroll",
      url: "payroll",
      icon: Payroll,
    },
    {
      title: "Report",
      url: "report",
      icon: Report,
    },
  ],
  others: [
    {
      title: "Setting",
      url: "setting",
      icon: Setting,
    },
    {
      title: "Help & Support",
      url: "help",
      icon: Support,
    },
  ],
};
