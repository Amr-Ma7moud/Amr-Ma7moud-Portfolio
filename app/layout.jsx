import { Inter, Fira_Code } from "next/font/google"
import "./globals.css"

// Optimize font loading with subsets and display swap
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-code",
})

export const metadata = {
  title: {
    default: "Amr Mahmoud | Web & Android Developer",
    template: "%s | Amr Mahmoud"
  },
  description: "Digital portfolio showcasing my expertise in modern web development, featuring projects built with React, Next.js, and cutting-edge technologies. Let's build something amazing together.",
  keywords: "Web & Android Developer, React, Next.js, JavaScript, TypeScript, Web Development, Portfolio, Egypt, E-JUST",
  authors: [{ name: "Amr Mahmoud" }],
  creator: "Amr Mahmoud",
  
  // Open Graph metadata for social sharing
  openGraph: {
    title: "Amr Mahmoud | Web & Android Developer",
    description: "Digital portfolio showcasing my expertise in modern web development",
    url: "https://amr-mahmoud.vercel.app",
    siteName: "Amr Mahmoud Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Amr Mahmoud - Web & Android Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Amr Mahmoud | Web & Android Developer",
    description: "Digital portfolio showcasing my expertise in modern web development",
    creator: "@amr_mahmoud",
    images: ["/og-image.png"],
  },
  
  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html 
      lang="en" 
      className="dark scroll-smooth"
      suppressHydrationWarning
    >
      <head>
        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#111827" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
      </head>
      
      <body className={`${inter.variable} ${firaCode.variable} font-sans bg-gray-950 text-gray-100 antialiased`}>
        {/* Main content */}
        {children}
      </body>
    </html>
  )
}