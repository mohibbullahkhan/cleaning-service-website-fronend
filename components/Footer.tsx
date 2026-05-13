import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EEF5E0]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">

          {/* Brand & Newsletter */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <Link href="/" className="flex items-center gap-3 mb-8 group">
                <div className="w-10 h-10 bg-[#E8521A] rounded-xl flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform">
                  ✨
                </div>
                <span className="text-2xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-roboto), Roboto, sans-serif' }}>
                  OmahResik
                </span>
              </Link>
              <p className="text-gray-400 font-medium text-lg leading-relaxed max-w-sm">
                Redefining the standard of cleanliness. We provide premium cleaning solutions for modern homes and forward-thinking businesses.
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-sm font-bold text-gray-300 uppercase tracking-[0.2em]">Subscribe to our newsletter</h4>
              <div className="flex max-w-md">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 bg-white/5 border border-white/10 rounded-l-2xl px-6 py-4 text-white focus:outline-none focus:border-[#E8521A] transition-colors"
                />
                <button className="bg-[#E8521A] hover:bg-[#FF7A1A] text-white font-bold px-6 py-4 rounded-r-2xl transition-all">
                  Join
                </button>
              </div>
              <p className="text-xs text-gray-500">Stay updated with our latest offers and cleaning tips.</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-roboto), Roboto, sans-serif' }}>Explore</h3>
            <ul className="space-y-4">
              {[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/service' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'Blog', href: '/blog' },
                { label: 'Reviews', href: '/testimonial' }
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 font-medium hover:text-[#E8521A] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-roboto), Roboto, sans-serif' }}>Specialties</h3>
            <ul className="space-y-4">
              {[
                'Residential', 'Commercial', 'Deep Clean', 'Post-Construction', 'Move-In/Out'
              ].map((service) => (
                <li key={service}>
                  <Link href="/service" className="text-gray-400 font-medium hover:text-[#E8521A] transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-8">
            <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-roboto), Roboto, sans-serif' }}>Say Hello</h3>
            <ul className="space-y-6">
              <li className="flex gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#E8521A] transition-colors">📍</div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Our Office</p>
                  <p className="text-gray-300 font-medium leading-tight">Ponorogo, East Java, ID</p>
                </div>
              </li>
              <li className="flex gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#E8521A] transition-colors">📞</div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Call Us</p>
                  <p className="text-gray-300 font-bold text-lg leading-tight">+62 812-3456-7890</p>
                </div>
              </li>
            </ul>

            <div className="flex gap-4 pt-4">
              {['facebook', 'instagram', 'twitter', 'linkedin'].map((social) => (
                <Link key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white hover:text-black transition-all">
                  <span className="sr-only">{social}</span>
                  <div className="text-xs font-bold uppercase tracking-tighter">{social.slice(0, 2)}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-500 text-sm font-semibold">
          <p>© 2026 OmahResik Cleaning. All rights reserved.</p>
          <div className="flex gap-10">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
