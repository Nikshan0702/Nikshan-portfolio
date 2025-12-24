'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { projectsData } from '../data/projects'
import Container from './Container'
import Section from './Section'
import Button from './Button'

export default function Hero() {
  const downloadResume = (event) => {
    event.preventDefault()
    const resumeUrl = '/NIkshanPathmaseelan.pdf'
    const link = document.createElement('a')
    link.href = resumeUrl
    link.download = 'NikshanPathmaseelan_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const reveal = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  }

  const proof = [
    `${projectsData.length}+ shipped projects`,
    'Full-stack + mobile delivery',
    'Based in Malabe, Sri Lanka',
  ]

  return (
    <Section id="home" className="pt-28">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div className="space-y-6">
            <motion.p
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="text-xs uppercase tracking-[0.3em] text-zinc-400"
            >
              Nikshan Pathmaseelan ·Software Engineer
            </motion.p>
            <motion.h1
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
              className="text-4xl md:text-slate-950 font-serif text-black"
            >
              Building calm, high-performance products with care and precision.
            </motion.h1>
            <motion.p
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
              className="max-w-xl text-base text-zinc-600"
            >
              I design and engineer digital experiences with a focus on clarity, speed, and thoughtful details. From product strategy to production-ready builds.
            </motion.p>
            <motion.div
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
              className="flex flex-wrap gap-4"
            >
              <Button href="#work" variant="primary">View work</Button>
              <Button onClick={downloadResume} variant="secondary" type="button">Download resume</Button>
            </motion.div>
    
          </div>
          <motion.div
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.25 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative h-64 w-52 overflow-hidden rounded-[32px] border border-zinc-200 bg-zinc-50">
              <Image
                src="/images/dp.PNG"
                alt="Nikshan Pathmaseelan"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
``