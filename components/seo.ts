import React from 'react'
import { Metadata } from 'next'

export function StaticHomeSeo (): Metadata {
  return {
    title: "Scraper for the top 50's",
    description: "Crawling for third party libraries and analitical information",
    applicationName: "Web crawler for the top 50 websites",
    creator: 'Kristof Kruller',
    keywords: 'nexjs, react, tech, javascript, web, webdev, development, frontend, backend, fullstack',
    robots: "index, follow",
    category: "anlalitical web app",
    icons: ["favicon", "fav.png"],
    assets: "fav.png",

    openGraph: {
      siteName: "Scraper for the top 50's",
      title: "Web crawler for the top 50 websites",
      description: "Crawling for third party libraries and analitical information",
      type: 'website',
      locale: 'en-HU',
      images: "fav.png",
    } || {},
    
    twitter: {
      site: "Scraper for the top 50's",
      title: "Web crawler for the top 50 websites",
      description: "Crawling for third party libraries and analitical information",
      creator: 'Kristof Kruller',
      images: "fav.png"
    } || {}
  }
}