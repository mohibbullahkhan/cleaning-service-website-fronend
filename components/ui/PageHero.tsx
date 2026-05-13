import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle: string;
  image: string;
}

export default function PageHero({ title, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative w-full bg-[#EFEFED] flex flex-col items-center overflow-hidden pt-20 pb-32">
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#EFEFED] via-transparent to-[#EFEFED]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 
          className="text-[#111111] leading-[1.1] tracking-[-3px] mb-6"
          style={{
            fontFamily: "var(--font-roboto), Roboto, sans-serif",
            fontSize: "clamp(48px, 10vw, 100px)",
            fontWeight: 800,
          }}
        >
          {title}
        </h1>
        <p className="text-[16px] md:text-[18px] text-[#666] leading-[1.6] max-w-2xl mx-auto font-medium">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
