import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle: string;
  image: string;
  eyebrow?: string;
}

export default function PageHero({ title, subtitle, image, eyebrow = "OmahResik" }: PageHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#F5F3EE] px-6 pb-7 pt-6 md:px-12 md:pb-8 md:pt-7 lg:px-24 lg:pb-9 lg:pt-8">
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-[0.35]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-[#F5F3EE]/60 to-[#F5F3EE]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mx-auto mb-2.5 inline-flex rounded-full border border-black/8 bg-white/70 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.24em] text-[#7D7D7D] backdrop-blur">
          {eyebrow}
        </div>
        <h1 className="text-[clamp(1.2rem,3vw,1.8rem)] whitespace-nowrap font-semibold leading-[1.1] tracking-[-0.02em] text-[#111111]">
          {title}
        </h1>
        <p className="font-subtitle mx-auto mt-2.5 max-w-2xl text-[13px] leading-[1.55] text-[#666] md:text-[14px]">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
