import type { StaticImageData } from 'next/image'
import medImage from '../Projectsimages/med.png'
import sm from '../Projectsimages/sm.png'
import studio from '../Projectsimages/studio.png'
import datsale from '../Projectsimages/datsale.png'
import cycle from '../Projectsimages/cycle.png'
import mobGcom from '../Projectsimages/MobGcom.png'
import sbcp from '../Projectsimages/SBCP.png'
import petcare from '../Projectsimages/Petcare.jpeg'
import urban from '../Projectsimages/urban.png'
import green from '../Projectsimages/green.png'

export type ProjectLink = {
  type: 'demo' | 'github' | 'whatsapp'
  url: string
  label: string
}

export type Project = {
  id: string
  title: string
  description: string
  image: string | StaticImageData
  category: 'fullstack' | 'web' | 'mobile' | 'database' | 'api'
  featured?: boolean
  status?: 'completed' | 'in-progress' | 'planned'
  priority?: boolean
  technologies: string[]
  links: ProjectLink[]
  role: string
  outcomes: string[]
}

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Medical Representatives Management System',
    description: 'A comprehensive web application connecting medical representatives with healthcare providers, featuring appointment scheduling, product catalog, and real-time communication tools.',
    image: medImage,
    category: 'fullstack',
    featured: true,
    status: 'completed',
    priority: true,
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB','tailwindcss',],
    links: [
      { type: 'demo', url: 'https://medical-system-demo.com', label: 'Live Demo' },
      { type: 'github', url: 'https://github.com/Nikshan0702/Medicos_Final.git', label: 'GitHub' },
      { type: 'whatsapp', url: '94771129911', label: 'Discuss Project' }
    ],
    role: 'Full-stack developer',
    outcomes: [
      'Enabled appointment scheduling and product discovery for reps and clinics.',
      'Introduced real-time communication for faster coordination.'
    ]
  },
  {
    id: '2',
    title: 'Green Rent – Sustainable Apartment Finder App',
    description: 'A mobile application that helps users discover eco-rated apartments by combining sustainability scores, verified eco-certifications, sentiment-based reviews, and smart location-based search to support SDG 11: Sustainable Cities & Communities.',
    image: green,
    category: 'mobile',
    status: 'in-progress',
    priority: true,
    technologies: [
      'React Native',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'Google Maps API',
      'Google Vision API',
      'Sentiment Analysis API'
    ],
    links: [
      { type: 'demo', url: 'https://green-rent-demo.com', label: 'App Demo' },
      { type: 'github', url: 'https://github.com/Nikshan0702/GreenRent.git', label: 'GitHub' },
      { type: 'whatsapp', url: '94771129911', label: 'Discuss Project' }
    ],
    role: 'Mobile  App developer',
    outcomes: [
      'Designed and implemented eco-rating and badge system (Platinum, Gold, Silver).',
      'Integrated sentiment analysis to classify user reviews as positive, neutral, or negative.',
      'Built secure authentication and role-based access for renters, landlords, and admins.',
      'Implemented smart apartment discovery with map-based search and eco-friendly filters.',
      'Enabled certificate verification using OCR and rule-based scoring logic.',
      'Eco-rated apartment discovery with sustainability scores (0–100).',
      'User reviews with edit, delete, and sentiment analysis.',
      'AI-based eco-certificate verification using Google Vision OCR.',
      'Interactive apartment browsing with Google Maps integration.',
      'Smart filters for location, eco-level, and apartment type.',
      'Booking system for virtual and in-person apartment visits.'
    ],
  },
  {
    id: '3',
    title: 'Smart Business Connection Platform (SBCP)',
    description:
      'A web-based B2B platform for tender management and smart vendor connections—built to streamline procurement workflows, improve transparency, and enable data-driven decisions.',
    image: sbcp,
    category: 'web',
    status: 'completed',
    priority: true,
    technologies: ['Next.js', 'MongoDB', 'Node.js',  'JWT/Auth', 'Agile Scrum'],
    links: [
      { type: 'demo', url: 'https://sbcp-demo.com', label: 'Live Demo' },
      { type: 'github', url: 'https://github.com/Nikshan0702/Smart-Market.git', label: 'GitHub' },
      { type: 'whatsapp', url: '94771129911', label: 'Discuss Project' }
    ],
    role: 'Full-stack developer',
    outcomes: [
      'Built role-based authentication and company onboarding for corporates, dealers, agencies, and admins.',
      'Implemented tender lifecycle: create RFQs, submit quotations, compare bids, and award tenders.',
      'Developed smart vendor connection flow with partnership requests, approvals, and status tracking.',
      'Delivered a clean dashboard UI with reporting-ready structure for procurement analytics and transparency.'
    ]
  },
  {
    id: '4',
    title: 'URBAN Waste',
    description: 'Web-based integrated waste Management System ',
    image: urban,
    category: 'web',
    status: 'completed',
    priority: false,
    technologies: ['React', 'Spring boot', 'MongoDB', 'Tailwindcss', 'MVVM Architecture', 'Material Design'],
    links: [
      { type: 'demo', url: 'https://finance-tracker-demo.com', label: 'Live Demo' },
      { type: 'github', url: 'https://github.com/Nikshan0702/UrbanWaste360.git', label: 'GitHub' },
      { type: 'whatsapp', url: '94771129911', label: 'Discuss Project' }
    ],
    role: 'Full-stack developer',
    outcomes: [
      'Delivered budgeting and goal tracking workflows.',
      'Centralized income and expense visibility.',
'Secure resident account creation, login, and authentication',
'	Waste logging, updating, and monitoring features for residents',
' Automatic calculation of recycling credits and management of an in-app wallet',
' Manual recording of waste collection activities by waste collection personnel',
'	Bin validation and bin management to maintain accurate collection records',
'	A complete workflow for special waste pickup requests, approvals, and tracking',
'	Online payment processing using either wallet balance or debit/credit cards',
'Generation of reports and analytics that can be downloaded in PDF or CSV formats',

    ]
  },
  {
    id: '5',
    title: 'Smart Studio Booking Platform',
    description: 'A complete studio management solution with booking system, payment integration, and administrative tools for studio owners and customers.',
    image: studio,
    category: 'web',
    featured: true,
    status: 'completed',
    priority: true,
    technologies: ['Next.js', 'PostgreSQL', 'TypeScript', 'Tailwind CSS'],
    links: [
      { type: 'demo', url: 'https://studio-booking-demo.com', label: 'Live Demo' },
      { type: 'github', url: 'https://github.com/Nikshan0702/StudioBooking.git', label: 'GitHub' },
      { type: 'whatsapp', url: '94771129911', label: 'Discuss Project' }
    ],
    role: 'Full-stack developer',
    outcomes: [
      'Centralized studio bookings, payments, and admin workflows.',
      'Streamlined customer reservations with real-time availability.'
    ]
  },
  {
    id: '6',
    title: 'Cycle Ride Booking Mobile App',
    description: 'A mobile application for booking cycle rides with real-time location tracking, payment integration, and user profile management.',
    image: cycle,
    category: 'mobile',
    status: 'completed',
    priority: false,
    technologies: ['Kotlin', 'Java', 'Firebase'],
    links: [
      { type: 'demo', url: 'https://cycle-booking-demo.com', label: 'Live Demo' },
      { type: 'github', url: 'https://github.com/Nikshan0702/CycleWave.git', label: 'GitHub' },
      { type: 'whatsapp', url: '94771129911', label: 'Discuss Project' }
    ],
    role: 'Mobile App developer',
    outcomes: [
      'Enabled ride booking with live location tracking.',
      'Added payments and user profile management.'
    ]
  },
  {
    id: '7',
    title: 'Vehicle Spare Parts Management System',
    description: 'A comprehensive web-based system for managing vehicle spare parts inventory, sales tracking, and customer management with advanced reporting.',
    image: sm,
    category: 'web',
    status: 'completed',
    priority: false,
    technologies: ['JSP', 'Java', 'MySQL', 'Bootstrap'],
    links: [
      { type: 'demo', url: 'https://spare-parts-demo.com', label: 'Live Demo' },
      { type: 'github', url: 'https://github.com/Nikshan0702/SM-motors.git', label: 'GitHub' },
      { type: 'whatsapp', url: '94771129911', label: 'Discuss Project' }
    ],
    role: 'Full-stack developer',
    outcomes: [
      'Improved inventory visibility with sales and customer tracking.',
      'Delivered reporting workflows for operational decisions.'
    ]
  },
  {
    id: '8',
    title: 'Pet Care Management System',
    description: 'A comprehensive pet care management system with booking services, pet profiles, health records, and veterinary appointment scheduling.',
    image: petcare,
    category: 'web',
    status: 'completed',
    priority: false,
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS'],
    links: [
      { type: 'demo', url: 'https://pet-care-demo.com', label: 'Live Demo' },
      { type: 'github', url: 'https://github.com/Nikshan0702/Pawsitive.git', label: 'GitHub' },
      { type: 'whatsapp', url: '94771129911', label: 'Discuss Project' }
    ],
    role: 'Full-stack developer',
    outcomes: [
      'Unified booking, pet profiles, and health records.',
      'Improved appointment coordination for clinics and owners.'
    ]
  },
  {
    id: '9',
    title: 'DatSales E-commerce Platform',
    description: 'A modern e-commerce platform built with Next.js, featuring product management, shopping cart, and secure payment processing with PostgreSQL database.',
    image: datsale,
    category: 'web',
    status: 'completed',
    priority: false,
    technologies: ['Next.js', 'PostgreSQL',  'Tailwind CSS'],
    links: [
      { type: 'demo', url: 'https://datsales-demo.com', label: 'Live Demo' },
      { type: 'github', url: 'https://github.com/Nikshan0702/DATsales.git', label: 'GitHub' },
      { type: 'whatsapp', url: '94771129911', label: 'Discuss Project' }
    ],
    role: 'Full-stack developer',
    outcomes: [
      'Shipped end-to-end commerce flows with cart and checkout.',
      'Built a scalable product catalog backed by PostgreSQL.'
    ]
  },
  {
    id: '10',
    title: 'Gcom Complaint Management App',
    description: 'A mobile application for managing and tracking complaints with real-time updates, photo uploads, and communication features.',
    image: mobGcom,
    category: 'mobile',
    status: 'completed',
    priority: false,
    technologies: ['React Native', 'Express.js', 'MongoDB', 'Firebase Storage'],
    links: [
      { type: 'demo', url: 'https://gcom-app-demo.com', label: 'Live Demo' },
      { type: 'github', url: 'https://github.com/Nikshan0702/Gcomplaint.git', label: 'GitHub' },
      { type: 'whatsapp', url: '94771129911', label: 'Discuss Project' }
    ],
    role: 'Mobile App developer',
    outcomes: [
      'Enabled complaint tracking with photo uploads.',
      'Improved response loops with real-time updates.'
    ]
  },
 
]
