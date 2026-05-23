"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps {
  variant?: "primary" | "outline" | "black";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  href?: string;
  className?: string;
  type?: "button" | "submit";
  showArrow?: boolean;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  onClick,
  href,
  className = "",
  type = "button",
  showArrow = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-sans font-semibold tracking-tight transition-all duration-300 rounded-[14px] active:scale-[0.98] no-underline group";

  const variants = {
    primary:
      "bg-[#E8521A] text-white shadow-[0_14px_32px_-20px_rgba(232,82,26,0.55)] hover:bg-[#111111] hover:shadow-[0_18px_36px_-22px_rgba(0,0,0,0.35)] hover:-translate-y-0.5",
    black:
      "bg-[#111111] text-white shadow-[0_14px_32px_-20px_rgba(0,0,0,0.4)] hover:bg-[#E8521A] hover:-translate-y-0.5",
    outline:
      "bg-white border border-black/10 text-[#111111] hover:border-[#E8521A]/40 hover:bg-[#FFF7F2] hover:text-[#E8521A] hover:-translate-y-0.5",
  };

  const sizes = {
    sm: "px-4 py-2.5 text-[13px]",
    md: "px-6 py-3 text-[14px]",
    lg: "px-8 py-3.5 text-[15px]",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {children}
      {showArrow && (
        <span className="ml-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-current/10 text-[11px] leading-none transition-colors group-hover:bg-current/15">
          &rarr;
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={combinedStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {content}
    </button>
  );
}
