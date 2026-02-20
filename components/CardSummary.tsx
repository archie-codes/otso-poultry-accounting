import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface CardSummaryProps {
  title: string;
  amount: string;
  icon: ReactNode;
  trend?: string;
  gradient: string;
}

export default function CardSummary({
  title,
  amount,
  icon,
  trend,
  gradient,
}: CardSummaryProps) {
  return (
    <Card className="relative overflow-hidden group border-border/50 bg-background/50 backdrop-blur-xl">
      <div
        className={`absolute inset-0 opacity-10 transition-opacity duration-500 group-hover:opacity-20 bg-linear-to-br ${gradient}`}
      />
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div
          className={`p-2 rounded-xl bg-linear-to-br ${gradient} text-white shadow-sm`}
        >
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{amount}</div>
        {trend && (
          <p className="text-xs text-muted-foreground mt-1">
            <span className="text-emerald-500 font-medium">{trend}</span> from
            last month
          </p>
        )}
      </CardContent>
    </Card>
  );
}
