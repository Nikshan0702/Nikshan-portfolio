'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Container from './Container'
import Section from './Section'
import kfmLogo from '../Projectsimages/kfmlogo.jpg'
import dattreoLogo from '../Projectsimages/14.JPG'
import medicoLogo from '../Projectsimages/medico.png'


export default function About() {
  const reveal = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  }

  const aboutParagraphs = [
    "I’m an Undergraduate Software Engineer who builds reliable products across web and mobile. My work spans interface decisions through backend delivery, with a focus on clean architecture and systems that age well.",
    "I start by reducing ambiguity, then shape flows that are simple to use and efficient to maintain. Usability and performance are non-negotiable, especially when shipping for real clients and freelance engagements."
  ]

  const skillGroups = [
    {
      title: 'Frontend',
      items: ['React', 'Next.js', 'HTML', 'JavaScript'],
    },
    {
      title: 'Backend',
      items: ['Node.js', 'Express.js', 'Spring Boot', 'PHP','java'],
    },
    {
      title: 'Mobile',
      items: ['React Native', 'Kotlin'],
    },
    {
      title: 'Databases',
      items: ['MongoDB', 'PostgreSQL', 'MySQL', 'SQL Server'],
    },
    {
      title: 'Tools & Practices',
      items: ['Git', 'GitHub', 'REST API design', 'OOP','Docker','Jira'],
    },
    {
      title: 'Design & Prototyping',
      items: ['Figma', 'Adobe XD', 'Sketch'],
    }
  ]

  const projectCards = [
    {
      title: 'Dattreo',
      description: 'Streamlined scheduling and communication between reps and clinics.',
      role: 'Full Stack Developer',
      image: dattreoLogo,
      website: 'https://www.dattreo.com',
    },
    {
      title: 'KFM Studio',
      description: 'Booking flow and studio coordination for clients.',
      role: 'Full Stack Developer',
      image: kfmLogo,
      website: 'https://www.studiokfm.com',
    },
    {
      title: 'MEDICO',
      description: 'MEDICO is a comprehensive  management system for medical representatives, currently in development.',
      role: 'Full Stack Developer',
      image: medicoLogo,
      // website: 'https://www.studiokfm.com',
    },

  ]

  return (
    <Section id="about" className="border-t border-zinc-100">
      <Container>
        <motion.header
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="mb-10 space-y-4"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">About</p>
          <h2 className="text-3xl md:text-4xl font-serif text-black">Calm, product-first engineering.</h2>
          <p className="max-w-2xl text-base text-zinc-600">
            I build products that feel considered — minimal on the surface, solid underneath.
          </p>
        </motion.header>

        <div className="grid  gap-10 md:grid-cols-2">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          className="space-y-6 text-base text-zinc-600"
          >
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="pt-2 space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">Freelance & real-world projects</p>
              <div className="grid gap-4">
                {projectCards.map((project) => (
                  <motion.article
                    key={project.title}
                    variants={reveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    whileHover={{ y: -4 }}
                    className="group rounded-2xl border border-zinc-200 p-5"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-zinc-100 bg-white">
                        <Image
                          src={project.image}
                          alt={`${project.title} logo`}
                          fill
                          className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                          sizes="48px"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-black">
                          <span className="relative inline-block">
                            {project.title}
                            <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-black transition-transform duration-300 group-hover:scale-x-100" />
                          </span>
                        </h4>
                        <p className="mt-1 text-xs text-zinc-600">{project.description}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-xs text-zinc-500">
                      <span className="uppercase tracking-[0.2em]">{project.role}</span>
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black underline underline-offset-4 transition-opacity hover:opacity-70"
                      >
                        Visit site
                      </a>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="self-start space-y-4 -mt-1"
          >
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">Skills</p>
          <div className="space-y-4 ">
            {skillGroups.map((group) => (
                <div key={group.title} className="rounded-2xl border border-zinc-200 p-5">
                  <h3 className="text-sm font-medium text-black">{group.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </Container>
    </Section>
  )
}
