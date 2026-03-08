"use client";

import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";
import About from "./sections/About";
import Services from "./sections/Services";
import Contact from "./sections/Contact";
import { Footer7 } from "@/components/ui/footer-7";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import type { LucideIcon } from "lucide-react";
import { Home as HomeIcon, User, Briefcase, Layers, Mail } from "lucide-react";

const footerSections = [
  {
    title: "Services",
    links: [
      { name: "Web Development", href: "#services" },
      { name: "UI/UX Design", href: "#services" },
      { name: "Automation", href: "#services" },
      { name: "Consulting", href: "#contact" },
    ],
  },
  {
    title: "Portfolio",
    links: [
      { name: "Projects", href: "#projects" },
      { name: "Tech Stack", href: "#tech" },
      { name: "About Me", href: "#about" },
      { name: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Connect",
    links: [
      { name: "GitHub", href: "https://github.com/Abdullah20019" },
      { name: "X (Twitter)", href: "https://x.com/abdulla1133130" },
      { name: "Instagram", href: "https://instagram.com/yourwebdevv" },
      { name: "Email", href: "mailto:abdullahmasood20019@gmail.com" },
    ],
  },
];

const socialLinks = [
  { icon: <FaGithub className="size-5" />, href: "https://github.com/Abdullah20019", label: "GitHub" },
  { icon: <FaTwitter className="size-5" />, href: "https://x.com/abdulla1133130", label: "X (Twitter)" },
  { icon: <FaInstagram className="size-5" />, href: "https://instagram.com/yourwebdevv", label: "Instagram" },
];

const navItems: { name: string; url: string; icon: LucideIcon }[] = [
  { name: "Home", url: "#hero", icon: HomeIcon },
  { name: "About", url: "#about", icon: User },
  { name: "Projects", url: "#projects", icon: Briefcase },
  { name: "Services", url: "#services", icon: Layers },
  { name: "Contact", url: "#contact", icon: Mail },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black pb-24 sm:pb-0">
      <NavBar items={navItems} />
      <Hero />
      <Projects />
      <TechStack />
      <About />
      <Services />
      <Contact />

      <footer className="border-t border-neutral-800 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Footer7
            logo={{
              url: "#hero",
              src: "https://cdn-icons-png.flaticon.com/512/9436/9436196.png",
              alt: "Abdullah Portfolio",
              title: "Abdullah",
            }}
            sections={footerSections}
            description="Full-Stack Web Developer specializing in responsive websites, modern UI design, and automation integration."
            socialLinks={socialLinks}
            copyright={`© ${new Date().getFullYear()} Abdullah. All rights reserved.`}
            legalLinks={[
              { name: "Privacy Policy", href: "#" },
              { name: "Terms of Service", href: "#" },
            ]}
          />
        </div>
      </footer>
    </main>
  );
}