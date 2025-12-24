'use client'

import { projectsData } from '../data/projects'
import Container from './Container'
import Section from './Section'
import FeaturedProject from './FeaturedProject'
import ProjectCard from './ProjectCard'
import { motion } from 'framer-motion'

export default function Projects() {
  const featuredProject = projectsData.find((project) => project.featured)
  const gridProjects = projectsData.filter((project) => project.id !== featuredProject?.id)

  return (
    <Section id="work" className="border-t border-zinc-100">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="mb-12 space-y-4"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">Selected work</p>
          <h2 className="text-3xl md:text-4xl font-serif text-black">Projects that show range and rigor.</h2>
          <p className="max-w-2xl text-base text-zinc-600">
            A focused set of full-stack, web, and mobile builds with clear roles, stacks, and outcomes.
          </p>
        </motion.div>

        <FeaturedProject project={featuredProject} />

        <div className="mt-10 grid items-stretch gap-6 md:grid-cols-3">
          {gridProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
