'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, MessageCircle, Phone } from 'lucide-react'
import Container from './Container'
import Section from './Section'

export default function Contact() {
  const reveal = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  }

  const contactItems = [
    {
      title: 'Email',
      value: 'nikshanps07@gmail.com',
      href: 'mailto:nikshanps07@gmail.com',
      icon: Mail,
    },
    {
      title: 'LinkedIn',
      value: 'linkedin.com/in/nikshan-pathmaseelan',
      href: 'https://www.linkedin.com/in/nikshan-pathmaseelan/',
      icon: Linkedin,
    },
    {
      title: 'WhatsApp',
      value: '+94 77 112 9911',
      href: 'https://wa.me/94771129911',
      icon: MessageCircle,
    },
    {
      title: 'Call',
      value: '+94 77 112 9911',
      href: 'tel:+94771129911',
      icon: Phone,
    },
  ]

  return (
    <Section id="contact" className="border-t border-zinc-100">
      <Container>
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="mb-12"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">Contact</p>
          <h2 className="mt-4 text-3xl md:text-4xl font-serif text-black">Let’s connect professionally.</h2>
          <p className="mt-4 max-w-2xl text-base text-zinc-600">
            I’m open to full-time opportunities and selected freelance engagements. Please reach out with context, and I’ll respond .
          </p>
        </motion.div>

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="grid gap-6 md:grid-cols-2"
        >
          {contactItems.map((item) => {
            const Icon = item.icon
            return (
            <a
              key={item.title}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center justify-between rounded-2xl border border-zinc-200 px-6 py-5 transition-colors hover:border-zinc-400"
            >
              <div className="flex items-center gap-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-500">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">{item.title}</p>
                  <p className="mt-2 text-sm text-black">{item.value}</p>
                </div>
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-zinc-400">Open</span>
            </a>
          )})}
        </motion.div>
      </Container>
    </Section>
  )
}
