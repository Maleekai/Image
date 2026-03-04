"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavBarProps {
  title: string;
  showBack?: boolean;
  rightContent?: React.ReactNode;
  className?: string;
  transparent?: boolean;
}

export function NavBar({
  title,
  showBack = false,
  rightContent,
  className,
  transparent = false,
}: NavBarProps) {
  const router = useRouter();

  return (
    <div
      className={cn(
        "flex items-center justify-between h-[44px] px-4",
        transparent ? "bg-transparent" : "bg-background",
        className
      )}
    >
      <div className="w-10 flex items-center">
        {showBack && (
          <button
            onClick={() => router.back()}
            className="flex items-center justify-center w-8 h-8 -ml-1 text-foreground"
            aria-label="返回"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}
      </div>
      <h1 className="text-base font-semibold text-foreground text-center flex-1 truncate">
        {title}
      </h1>
      <div className="w-10 flex items-center justify-end">{rightContent}</div>
    </div>
  );
}
