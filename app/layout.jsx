import './globals.css'
import { Playfair_Display, IBM_Plex_Sans } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

export const metadata = {
  title: 'Nikshan Pathmaseelan - Full Stack Developer',
  description: 'Personal portfolio of Nikshan Pathmaseelan, a passionate Full Stack Developer specializing in MERN stack, Next.js, and mobile development.',
  keywords: 'Full Stack Developer, MERN Stack, Next.js, React, Node.js, Mobile Development',
  authors: [{ name: 'Nikshan Pathmaseelan' }],
  creator: 'Nikshan Pathmaseelan',
  openGraph: {
    title: 'Nikshan Pathmaseelan - Full Stack Developer',
    description: 'Personal portfolio of Nikshan Pathmaseelan, a passionate Full Stack Developer.',
    url: 'https://nikshan-portfolio.vercel.app',
    siteName: 'Nikshan Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nikshan Pathmaseelan - Full Stack Developer',
    description: 'Personal portfolio of Nikshan Pathmaseelan, a passionate Full Stack Developer.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${plexSans.variable} ${playfair.variable} font-sans bg-white text-black antialiased`}>
        {children}
      </body>
    </html>
  )
}
