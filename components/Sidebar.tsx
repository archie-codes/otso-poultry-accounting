"use client";
import {
  LayoutDashboard,
  Receipt,
  TrendingDown,
  FileBarChart,
  Settings,
  LogOut,
  Egg,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Sales", href: "#", icon: Receipt },
  { name: "Expenses", href: "#", icon: TrendingDown },
  { name: "Reports", href: "#", icon: FileBarChart },
  { name: "Settings", href: "#", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 border-r border-border/50 bg-card hidden md:flex flex-col h-full shadow-sm z-10">
      <div className="h-16 flex items-center px-6 border-b border-border/50">
        <Egg className="h-6 w-6 text-primary mr-3" />
        <span className="font-bold text-lg tracking-tight">Otso System</span>
      </div>

      <div className="flex-1 py-6 flex flex-col gap-2 px-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-md font-medium"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </div>

      <div className="p-4 border-t border-border/50">
        <Link
          href="/login"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors duration-200"
        >
          <LogOut className="h-5 w-5" />
          Logout
        </Link>
      </div>
    </div>
  );
}
