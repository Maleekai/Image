"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface BottomSheetProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function BottomSheet({
  open,
  onClose,
  title,
  children,
  className,
}: BottomSheetProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="absolute inset-0 z-50 flex items-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 animate-fade-in"
        onClick={onClose}
      />
      {/* Sheet */}
      <div
        className={cn(
          "relative w-full bg-bg-secondary rounded-t-2xl animate-slide-up max-h-[85%] overflow-y-auto",
          className
        )}
      >
        {/* Handle */}
        <div className="flex items-center justify-center pt-3 pb-1">
          <div className="w-9 h-1 rounded-full bg-border-light" />
        </div>
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between px-4 pb-3">
            <h3 className="text-base font-semibold text-foreground">{title}</h3>
            <button
              onClick={onClose}
              className="flex items-center justify-center w-7 h-7 rounded-full bg-bg-tertiary"
              aria-label="关闭"
            >
              <X className="w-4 h-4 text-text-secondary" />
            </button>
          </div>
        )}
        {/* Content */}
        <div className="px-4 pb-6">{children}</div>
      </div>
    </div>
  );
}
