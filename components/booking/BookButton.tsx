"use client";

import Button from "@/components/ui/Button";
import type { BookingServiceKey } from "./booking-data";

type BookButtonProps = {
  children?: React.ReactNode;
  service?: BookingServiceKey | null;
  className?: string;
  variant?: "primary" | "outline" | "black";
  size?: "sm" | "md" | "lg";
  showArrow?: boolean;
  onClick?: () => void;
};

export default function BookButton({
  children = "Book",
  service = null,
  className = "",
  variant = "primary",
  size = "md",
  showArrow = true,
  onClick,
}: BookButtonProps) {
  const href = service ? `/booking?service=${service}` : "/booking";

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      showArrow={showArrow}
      href={href}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
