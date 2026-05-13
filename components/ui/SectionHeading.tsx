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
    <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"} ${className}`}>
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-[#6B7280] max-w-2xl mx-auto font-medium">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 flex ${align === "center" ? "justify-center" : "justify-start"}`}>
        <div className="w-12 h-1.5 bg-[#D1E8C4] rounded-full"></div>
      </div>
    </div>
  );
}
