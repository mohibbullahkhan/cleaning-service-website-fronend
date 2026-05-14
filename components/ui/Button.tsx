"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps {
  variant?: "primary" | "outline" | "black";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  onClick?: () => void;
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
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-tight transition-all duration-300 rounded-[12px] active:scale-[0.97] no-underline group";
  
  const variants = {
    primary: "bg-[#E8521A] text-white hover:bg-[#111111] hover:shadow-[0_10px_25px_-5px_rgba(232,82,26,0.3)] hover:-translate-y-0.5",
    black: "bg-[#111111] text-white hover:bg-[#E8521A] hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.2)] hover:-translate-y-0.5",
    outline: "bg-transparent border-2 border-[#E8521A] text-[#E8521A] hover:bg-[#E8521A] hover:text-white hover:-translate-y-0.5",
  };

  const sizes = {
    sm: "px-5 py-2 text-[13px]",
    md: "px-7 py-3 text-[14px]",
    lg: "px-10 py-4 text-[16px]",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {children}
      {showArrow && (
        <span className="ml-2.5 w-5 h-5 sm:w-6 sm:h-6 rounded-[8px] bg-white/20 flex items-center justify-center text-[10px] sm:text-[12px] font-bold leading-none group-hover:bg-white/10 transition-colors">
          →
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
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
