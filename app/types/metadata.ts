export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
  }
}

export const siteConfig: SiteConfig = {
  name: "Manifold Finance",
  description: "Powering Markets across Networks",
  url: "https://manifoldfinance.com",
  ogImage: "https://manifoldfinance.com/og.jpg",
  links: {
    twitter: "https://twitter.com/@foldfinance",
    github: "https://github.com/manifoldfinance",
  },
}
