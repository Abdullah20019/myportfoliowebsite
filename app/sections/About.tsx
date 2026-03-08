"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { BadgeCheck, Sparkles, Workflow, Zap } from "lucide-react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, target, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (value) => setCount(Math.floor(value)),
    });

    return () => controls.stop();
  }, [isInView, target]);

  return (
    <span ref={ref} className="text-4xl font-semibold text-white sm:text-5xl">
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 10, suffix: "+", label: "Responsive Websites" },
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 20, suffix: "+", label: "Projects Delivered" },
];

const pillars = [
  {
    icon: Sparkles,
    title: "Design-led execution",
    description: "I aim for clean visual hierarchy, strong contrast, and premium-feeling layouts that reflect the brand well.",
  },
  {
    icon: Workflow,
    title: "Systematic builds",
    description: "From planning and structure to UI patterns and deployment, I build with maintainability in mind.",
  },
  {
    icon: Zap,
    title: "Performance-minded polish",
    description: "Animations, responsiveness, and conversions are balanced with speed, clarity, and usability.",
  },
];

const highlights = [
  "Responsive, mobile-first design",
  "Modern React and Next.js applications",
  "Clean, maintainable code architecture",
  "Performance-optimized solutions",
];

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={sectionRef} className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-24 xl:py-32">
      <div className="pointer-events-none absolute inset-0 bg-black/10" />
      <div className="pointer-events-none absolute inset-x-0 top-20 h-80 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.1),transparent_42%)]" />

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
              About Me
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              I build websites that feel <span className="text-gradient">professional, intentional, and conversion-ready</span>.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-400 sm:text-lg sm:leading-8">
              I am a web-focused developer who combines visual polish with practical implementation — building modern, responsive sites and interactive apps that look sharp and work reliably.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-left">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                <p className="mt-2 text-sm text-neutral-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[28px] border border-white/10 bg-neutral-900/55 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-8"
          >
            <p className="text-[11px] uppercase tracking-[0.28em] text-green-400/90">Approach</p>
            <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">A balance of aesthetics, structure, and real-world usability.</h3>
            <div className="mt-5 space-y-4 text-sm leading-7 text-neutral-300 sm:text-base sm:leading-8">
              <p>
                My work sits between design sensitivity and technical execution. I care about spacing, hierarchy, responsiveness, and motion — but also about maintainable structure, reusable components, and shipping smoothly.
              </p>
              <p>
                Whether it is a portfolio, service website, or custom web app, I aim to create an experience that feels premium to the user and practical for the business behind it.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5">
              <div className="mb-4 text-sm font-medium text-white">What clients can expect</div>
              <div className="space-y-3">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-6 text-neutral-300">
                    <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-green-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="grid gap-4 sm:gap-5"
          >
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                  transition={{ duration: 0.45, delay: 0.24 + index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition-all duration-300 hover:border-green-400/25 hover:shadow-[0_16px_48px_rgba(16,185,129,0.1)] sm:p-6"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.14),transparent_35%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/25 text-green-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{pillar.title}</h4>
                      <p className="mt-2 text-sm leading-7 text-neutral-400">{pillar.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}