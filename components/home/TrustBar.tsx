"use client";

import React from "react";

export default function TrustBar() {
  return (
    <section className="py-12 bg-white border-y border-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-40 hover:opacity-100 transition-opacity duration-500">
          {['GREEN SEAL', 'CLEANING INST', 'SAFE FOR PETS', '100% ORGANIC', 'B-CORP'].map((logo) => (
            <div key={logo} className="text-sm font-black tracking-[0.4em] text-[#111]">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
