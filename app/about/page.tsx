import React from "react";
import PageHero from "@/components/ui/PageHero";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function AboutPage() {
  return (
    <main className="bg-white">
      <PageHero 
        title="Our Heritage"
        subtitle="Founded in Ponorogo, OmahResik was built on a simple principle: every home deserves the meticulous care of a professional touch."
        image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
      />

      {/* Our Mission */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-24 items-center">
          <div className="space-y-12">
            <div>
               <div className="inline-flex items-center gap-3 bg-[#EEF5E0] px-5 py-2.5 rounded-full mb-8">
                  <span className="w-2 h-2 rounded-full bg-[#E8521A] shrink-0" />
                  <span className="text-[10px] font-black text-[#111] uppercase tracking-[0.3em]">OUR MISSION</span>
               </div>
               <h2 className="text-5xl md:text-8xl font-black text-[#111] leading-[0.95] tracking-tighter">
                 We don&apos;t just clean. <br /> <span className="text-[#E8521A]">We transform.</span>
               </h2>
            </div>
            
            <div className="max-w-2xl space-y-8">
               <p className="text-2xl text-gray-500 font-medium leading-relaxed">
                 At OmahResik, we believe that a clean environment is the foundation of a healthy, productive, and happy life.
               </p>
               <p className="text-lg text-gray-400 font-medium leading-relaxed">
                 Founded in Ponorogo, we have grown from a small family-run operation into a leading name in premium cleaning services, yet our core values remain unchanged: integrity, excellence, and a deep respect for your sanctuary.
               </p>
            </div>

            <div className="grid grid-cols-2 gap-12 pt-12 border-t border-gray-100">
               <div>
                  <p className="text-6xl font-black text-[#111] mb-2">10+</p>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Years of Perfection</p>
               </div>
               <div>
                  <p className="text-6xl font-black text-[#111] mb-2">50+</p>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Elite Specialists</p>
               </div>
            </div>
          </div>

          <div className="relative w-full lg:w-[500px] h-[600px] md:h-[800px] rounded-[80px] overflow-hidden shadow-[0_60px_100px_-20px_rgba(0,0,0,0.2)] group">
            <Image 
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80"
              alt="Team"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111]/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* Core Values - Grid with Icons */}
      <section className="py-32 px-6 bg-[#111] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E8521A]/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto text-center mb-24">
           <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tight">
             Values that <span className="text-[#E8521A]">guide us</span>
           </h2>
           <p className="text-gray-400 font-medium text-xl max-w-2xl mx-auto">
             The pillars of the OmahResik standard.
           </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: "💎", title: "Uncompromising Quality", desc: "We pay attention to the details others miss, ensuring perfection in every corner." },
            { icon: "🤝", title: "Absolute Reliability", desc: "We arrive on time, every time, with the tools and passion to get the job done right." },
            { icon: "🌿", title: "Eco-Consciousness", desc: "Our products are safe for you, your pets, and the planet we all share." },
            { icon: "✨", title: "Modern Technology", desc: "We use the latest equipment and systems to deliver efficient, superior results." },
          ].map((val, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-md p-12 rounded-[60px] border border-white/10 hover:bg-white/10 transition-all duration-500 group">
              <div className="text-5xl mb-10 transition-transform group-hover:scale-125 duration-500">{val.icon}</div>
              <h3 className="text-2xl font-black mb-6 leading-tight">{val.title}</h3>
              <p className="text-gray-400 leading-relaxed font-medium text-lg">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Showcase */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-2xl space-y-6">
               <h2 className="text-4xl md:text-7xl font-black text-[#111] leading-tight tracking-tight">
                 Meet our <br /> <span className="text-[#E8521A]">leadership</span>
               </h2>
               <p className="text-gray-500 font-medium text-xl">
                 The dedicated minds driving our vision for a cleaner world.
               </p>
            </div>
            <Button href="/contact" variant="outline" className="px-10 py-5 rounded-full border-2 font-black text-xs uppercase tracking-[0.2em]">Join the family</Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { name: "Renald Pratama", role: "Founder & CEO", img: "3" },
              { name: "Siska Wijaya", role: "Head of Operations", img: "12" },
              { name: "Budi Santoso", role: "Quality Assurance", img: "22" },
              { name: "Dewi Lestari", role: "Client Relations", img: "48" },
            ].map((member, i) => (
              <div key={i} className="group">
                <div className="relative aspect-[3/4] rounded-[48px] overflow-hidden mb-10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)]">
                   <Image 
                     src={`https://i.pravatar.cc/600?img=${member.img}`}
                     alt={member.name}
                     fill
                     className="object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#111]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-2xl font-black text-[#111] mb-2">{member.name}</h3>
                <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-[#EFEFED] text-center">
         <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-4xl md:text-5xl font-black text-[#111]">Want to be part of the excellence?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <Button href="/contact" size="lg" className="px-12 rounded-full">Apply Now</Button>
               <Button href="/contact" variant="outline" size="lg" className="px-12 rounded-full">Contact HR</Button>
            </div>
         </div>
      </section>
    </main>
  );
}
