// components/NeumorfCard.tsx
import { ReactNode } from "react";
import "@/style/efectdark.css";

interface NeumorfCardProps {
  children: ReactNode;
  className?: string;
}

export function NeumorfCard({ children, className = "" }: NeumorfCardProps) {
  return (
    <div
      className={`
        neumor-pill
        p-6 md:p-8
        text-[#1A1A1A] dark:text-[#E5E7EB]
        ${className}
      `}
    >
      {children}
    </div>
  );
}
