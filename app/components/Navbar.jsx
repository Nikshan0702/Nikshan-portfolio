'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' }, 
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className={`sticky top-0 z-50 w-full border-b border-transparent bg-white/80 backdrop-blur ${
        scrolled ? 'border-zinc-200 shadow-[0_10px_30px_rgba(0,0,0,0.04)]' : ''
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-8">
        <a href="#home" className="text-sm font-medium uppercase tracking-[0.3em] text-black">
          Nikshan
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-zinc-600 transition-colors hover:text-black"
            >
              {item.name}
            </a>
          ))}
          <a
            href="/NIkshanPathmaseelan.pdf"
            download
            className="inline-flex items-center justify-center rounded-full border border-black px-5 py-2 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white"
          >
            Resume
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center rounded-full border border-zinc-200 p-2 text-black md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-zinc-100 bg-white px-6 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm text-zinc-600"
              >
                {item.name}
              </a>
            ))}
            <a
              href="/NIkshanPathmaseelan.pdf"
              download
              className="inline-flex items-center justify-center rounded-full border border-black px-5 py-2 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </motion.nav>
  )
}
