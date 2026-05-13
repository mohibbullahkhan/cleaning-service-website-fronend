import React from "react";
import Link from "next/link";

interface ButtonProps {
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: "button" | "submit";
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  onClick,
  href,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-full active:scale-95";
  
  const variants = {
    primary: "bg-[#1A1A1A] text-white hover:bg-zinc-800",
    outline: "bg-transparent border-2 border-[#1A1A1A] text-[#1A1A1A] hover:bg-zinc-100",
  };

  const sizes = {
    sm: "px-6 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}
