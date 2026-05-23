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
          className="object-cover opacity-[0.14]"
          priority
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.88),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.72)_0%,rgba(245,243,238,0.76)_45%,rgba(245,243,238,1)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mx-auto mb-2.5 inline-flex rounded-full border border-black/8 bg-white/70 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.24em] text-[#7D7D7D] backdrop-blur">
          {eyebrow}
        </div>
        <h1 className="text-[clamp(1.35rem,2.8vw,2.05rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#111111]">
          {title}
        </h1>
        <p className="font-subtitle mx-auto mt-2.5 max-w-2xl text-[13px] leading-[1.55] text-[#666] md:text-[14px]">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
