'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Service', href: '/service' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Testimonial', href: '/testimonial' },
  { label: 'Contact', href: '/contact' }
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  // Add shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav
        className={`
          w-full bg-[#F0F0EE] z-50 sticky top-0
          transition-shadow duration-300
          ${scrolled ? 'shadow-[0_2px_16px_rgba(0,0,0,0.08)]' : ''}
        `}
        style={{ fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif' }}
      >
        <div className="flex items-center justify-between px-6 sm:px-10 lg:px-12 h-[68px]">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-2 no-underline shrink-0 z-10 animate-slide-down">
            <div className="w-7 h-7 bg-[#E8521A] rounded-[7px] flex items-center justify-center">
              <svg viewBox="0 0 20 20" className="w-4 h-4 fill-white">
                <path d="M10 2C5.6 2 2 5.6 2 10s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 9.2c-2.7 0-5-1.4-5-2.7 0-1.4 2.3-2.7 5-2.7s5 1.3 5 2.7c0 1.3-2.3 2.7-5 2.7z" />
              </svg>
            </div>
            <span
              className="text-[#111111] font-bold text-[17px]"
              style={{ fontFamily: 'var(--font-roboto), Roboto, sans-serif' }}
            >
              OmahResik
            </span>
          </Link>

          {/* ── Desktop Nav Links (centered absolutely) ── */}
          <ul className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-1 list-none m-0 p-0">
            {navLinks.map(({ label, href }, i) => {
              const isActive = pathname === href
              return (
                <li key={href} className="animate-slide-down" style={{ animationDelay: `${i * 100 + 200}ms` }}>
                  <Link
                    href={href}
                    className={`
                      flex items-center gap-1.5 px-[14px] py-[7px] rounded-full
                      text-[14px] no-underline transition-colors duration-200
                      ${isActive
                        ? 'text-[#111111] font-semibold'
                        : 'text-[#555555] font-medium hover:text-[#111111]'
                      }
                    `}
                  >
                    {isActive && (
                      <span className="w-[6px] h-[6px] rounded-full bg-[#E8521A] shrink-0 animate-pulse" />
                    )}
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* ── Right side ── */}
          <div className="flex items-center gap-3 z-10 animate-fade-in" style={{ animationDelay: '800ms' }}>

            {/* Book button — always visible */}
            <Link
              href="/contact"
              className="
                flex items-center gap-2
                bg-[#E8521A] text-white
                text-[13px] sm:text-[14px] font-semibold
                pl-4 sm:pl-5 pr-[8px] sm:pr-[10px] py-[8px] sm:py-[9px]
                rounded-full no-underline
                transition-all duration-200
                hover:opacity-85 hover:-translate-y-0.5
              "
            >
              Book
              <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/25 flex items-center justify-center text-[13px] font-bold leading-none">
                •
              </span>
            </Link>

            {/* Hamburger — mobile & tablet only */}
            <button
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="
                lg:hidden flex flex-col justify-center items-center
                w-10 h-10 rounded-full gap-0
                bg-[#111111]
                shrink-0 transition-all duration-200
                hover:opacity-80
              "
            >
              <span
                className={`
                  block w-4 h-[1.5px] bg-white rounded
                  transition-all duration-300 origin-center
                  ${menuOpen ? 'rotate-45 translate-y-[1.5px]' : '-translate-y-[3px]'}
                `}
              />
              <span
                className={`
                  block w-4 h-[1.5px] bg-white rounded
                  transition-all duration-300 origin-center
                  ${menuOpen ? '-rotate-45 -translate-y-[1.5px]' : 'translate-y-[3px]'}
                `}
              />
            </button>
          </div>

        </div>

        {/* ── Mobile Dropdown Menu ── */}
        <div
          className={`
            lg:hidden overflow-hidden
            transition-all duration-300 ease-in-out
            ${menuOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}
          `}
        >
          <ul className="flex flex-col list-none m-0 px-5 sm:px-8 pb-6 pt-2 gap-1">
            {navLinks.map(({ label, href }) => {
              const isActive = pathname === href
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`
                      flex items-center gap-3 px-4 py-[11px] rounded-xl
                      text-[15px] no-underline transition-all duration-200
                      ${isActive
                        ? 'bg-[#111111] text-white font-semibold'
                        : 'text-[#555555] font-medium hover:bg-black/5 hover:text-[#111111]'
                      }
                    `}
                  >
                    {isActive && (
                      <span className="w-[6px] h-[6px] rounded-full bg-[#E8521A] shrink-0" />
                    )}
                    {label}
                  </Link>
                </li>
              )
            })}

            {/* Full-width CTA at bottom of mobile menu */}
            <li className="mt-3 pt-4 border-t border-black/[0.07]">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="
                  flex items-center justify-center gap-2 w-full
                  bg-[#E8521A] text-white
                  text-[14px] font-semibold
                  px-5 py-[13px] rounded-xl no-underline
                  transition-opacity duration-200 hover:opacity-85
                "
              >
                Book a Cleaner →
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* ── Backdrop overlay (mobile) ── */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`
          fixed inset-0 bg-black/20 z-40 lg:hidden
          backdrop-blur-[2px]
          transition-opacity duration-300
          ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      />
    </>
  )
}