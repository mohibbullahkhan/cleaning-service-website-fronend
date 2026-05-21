import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 md:mb-12 ${align === "center" ? "text-center" : "text-left"} ${className}`}>
      <h2 className="text-2xl md:text-3xl font-semibold text-[#1A1A1A] leading-[1.15] tracking-[-0.03em] mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="font-subtitle text-[15px] md:text-[16px] leading-7 text-[#6B7280] max-w-2xl mx-auto font-medium">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 flex ${align === "center" ? "justify-center" : "justify-start"}`}>
        <div className="h-1 w-12 rounded-full bg-[#D1E8C4]"></div>
      </div>
    </div>
  );
}
