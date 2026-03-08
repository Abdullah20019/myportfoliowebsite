"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Bot, Globe, Layers, Palette, Server } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Custom Website Development",
    description: "Tailored websites built with modern technologies, optimized for performance, clarity, and conversion.",
    deliverable: "Brand sites, landing pages, portfolios",
    tag: "Frontend",
  },
  {
    icon: Layers,
    title: "Full-Stack Web Apps",
    description: "End-to-end web applications with robust frontend experiences and practical backend structure.",
    deliverable: "Dashboards, portals, custom workflows",
    tag: "Application",
  },
  {
    icon: Palette,
    title: "Responsive UI and UX",
    description: "Interfaces designed to feel intuitive, consistent, and premium across phones, tablets, and desktops.",
    deliverable: "Layout systems, polished sections, redesigns",
    tag: "Design",
  },
  {
    icon: Server,
    title: "Backend and API Integration",
    description: "Seamless integration of third-party services, custom APIs, and data-driven features.",
    deliverable: "Forms, CMS, booking, external services",
    tag: "Backend",
  },
  {
    icon: Bot,
    title: "Automation for Web Workflows",
    description: "Smart automation to reduce manual steps and add real operational value to websites and internal flows.",
    deliverable: "Lead flow, AI-assisted actions, automations",
    tag: "Automation",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-neutral-900/55 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.26)] backdrop-blur-xl transition-all duration-300 hover:border-green-400/25 hover:shadow-[0_22px_70px_rgba(16,185,129,0.1)] sm:p-7"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.14),transparent_36%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex h-full flex-col">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/25 text-green-400 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
            <Icon className="h-6 w-6" />
          </div>
          <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-300">
            {service.tag}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-white">{service.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-neutral-400">{service.description}</p>

        <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
          <p className="text-[11px] uppercase tracking-[0.22em] text-neutral-500">Typical deliverables</p>
          <p className="mt-2 text-sm text-neutral-300">{service.deliverable}</p>
        </div>

        <a
          href="#contact"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-green-300 transition-colors hover:text-green-200"
        >
          Discuss this service
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={sectionRef} className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-24 xl:py-32">
      <div className="pointer-events-none absolute inset-0 bg-black/10" />
      <div className="pointer-events-none absolute inset-x-0 top-16 h-80 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.1),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6 }}
          className="mb-12 grid gap-8 lg:mb-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-end"
        >
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-neutral-300">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Services
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Services presented like <span className="text-gradient">premium solution cards</span>, not a basic list.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-400 sm:text-lg sm:leading-8">
              I help brands and businesses launch polished web experiences — from focused websites to full-featured web apps and automation-backed workflows.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">Focus</p>
              <p className="mt-2 text-2xl font-semibold text-white">05</p>
              <p className="mt-1 text-sm text-neutral-400">Core service offerings</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">Style</p>
              <p className="mt-2 text-2xl font-semibold text-white">Modern</p>
              <p className="mt-1 text-sm text-neutral-400">Premium dark UI with motion</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">Outcome</p>
              <p className="mt-2 text-2xl font-semibold text-white">Launch-ready</p>
              <p className="mt-1 text-sm text-neutral-400">Clear structure and delivery focus</p>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}