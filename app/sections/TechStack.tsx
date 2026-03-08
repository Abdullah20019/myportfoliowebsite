"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiCss3,
  SiFigma,
  SiFramer,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiOpenai,
  SiPostgresql,
  SiPython,
  SiRailway,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import type { IconType } from "react-icons";

type SkillItem = {
  name: string;
  icon: IconType;
  accent: string;
  note: string;
  level: number;
  experience: string;
};

type SkillGroup = {
  title: string;
  eyebrow: string;
  description: string;
  skills: SkillItem[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Craft",
    eyebrow: "Interface systems",
    description:
      "Modern UI layers focused on responsiveness, polish, interaction, and scalable component structure.",
    skills: [
      { name: "HTML5", icon: SiHtml5, accent: "text-orange-400", note: "Semantic structure", level: 95, experience: "Advanced" },
      { name: "CSS3", icon: SiCss3, accent: "text-blue-400", note: "Responsive layouts", level: 92, experience: "Advanced" },
      { name: "JavaScript", icon: SiJavascript, accent: "text-yellow-300", note: "Interactive behavior", level: 90, experience: "Advanced" },
      { name: "TypeScript", icon: SiTypescript, accent: "text-sky-400", note: "Type-safe code", level: 86, experience: "Strong" },
      { name: "React", icon: SiReact, accent: "text-cyan-300", note: "Reusable interfaces", level: 91, experience: "Advanced" },
      { name: "Next.js", icon: SiNextdotjs, accent: "text-white", note: "App architecture", level: 89, experience: "Strong" },
      { name: "Tailwind CSS", icon: SiTailwindcss, accent: "text-teal-300", note: "Fast UI styling", level: 94, experience: "Advanced" },
      { name: "Framer Motion", icon: SiFramer, accent: "text-fuchsia-300", note: "Motion systems", level: 84, experience: "Strong" },
    ],
  },
  {
    title: "Backend and Delivery",
    eyebrow: "Infrastructure and shipping",
    description:
      "Tools and services I use to build reliable apps, connect APIs, and deploy production-ready projects.",
    skills: [
      { name: "Python", icon: SiPython, accent: "text-yellow-300", note: "Automation logic", level: 88, experience: "Strong" },
      { name: "PostgreSQL", icon: SiPostgresql, accent: "text-sky-300", note: "Structured data", level: 72, experience: "Working" },
      { name: "Git", icon: SiGit, accent: "text-orange-400", note: "Version control", level: 86, experience: "Strong" },
      { name: "GitHub", icon: SiGithub, accent: "text-white", note: "Source collaboration", level: 90, experience: "Advanced" },
      { name: "Vercel", icon: SiVercel, accent: "text-white", note: "Frontend deployment", level: 89, experience: "Strong" },
      { name: "Railway", icon: SiRailway, accent: "text-violet-300", note: "Backend hosting", level: 74, experience: "Working" },
      { name: "OpenAI", icon: SiOpenai, accent: "text-emerald-300", note: "AI integration", level: 83, experience: "Strong" },
      { name: "Figma", icon: SiFigma, accent: "text-pink-300", note: "Design handoff", level: 78, experience: "Working" },
    ],
  },
];

function SkillCard({ skill, index }: { skill: SkillItem; index: number }) {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{ y: -6, scale: 1.015 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm transition-all duration-300 hover:border-green-400/30 hover:bg-white/[0.06] hover:shadow-[0_18px_50px_rgba(16,185,129,0.12)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.16),transparent_35%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <motion.div
        className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-green-400/70 to-transparent opacity-0 group-hover:opacity-100"
        initial={false}
        animate={{ x: ["-120%", "120%"] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative">
        <div className="flex items-start gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/25 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
            <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${skill.accent}`} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-3">
              <h4 className="truncate text-sm font-semibold text-white sm:text-base">{skill.name}</h4>
              <span className="shrink-0 rounded-full border border-white/10 bg-black/25 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-300">
                {skill.experience}
              </span>
            </div>
            <p className="mt-1 text-xs leading-5 text-neutral-400 sm:text-sm">{skill.note}</p>
          </div>
        </div>

        <div className="mt-4">
          <div className="mb-2 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-neutral-500">
            <span>Proficiency</span>
            <span>{skill.level}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/8">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 + index * 0.04 }}
              className="h-full rounded-full bg-gradient-to-r from-green-400 via-emerald-400 to-teal-300 shadow-[0_0_18px_rgba(52,211,153,0.35)]"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SkillGroupCard({ group, index }: { group: SkillGroup; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="relative overflow-hidden rounded-[28px] border border-white/10 bg-neutral-900/55 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-7 lg:p-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.08),transparent_32%)]" />
      <div className="relative">
        <div className="mb-6 max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.28em] text-green-400/90">{group.eyebrow}</p>
          <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">{group.title}</h3>
          <p className="mt-3 max-w-xl text-sm leading-7 text-neutral-400 sm:text-base">{group.description}</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {group.skills.map((skill, skillIndex) => (
            <SkillCard key={skill.name} skill={skill} index={skillIndex} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function TechStack() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="tech" ref={sectionRef} className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-24 xl:py-32">
      <div className="pointer-events-none absolute inset-0 bg-black/10" />
      <div className="pointer-events-none absolute inset-x-0 top-16 h-72 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6 }}
          className="mb-12 grid gap-8 lg:mb-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"
        >
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-neutral-300">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Core Stack
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Tools I use to build <span className="text-gradient">polished, production-ready</span> websites.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-400 sm:text-lg sm:leading-8">
              Inspired by premium portfolio and Figma-style system sections, this area now highlights my working stack with clearer grouping, recognizable logos, visible skill depth, and subtle interaction polish.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">Frontend</p>
              <p className="mt-2 text-2xl font-semibold text-white">08</p>
              <p className="mt-1 text-sm text-neutral-400">Interfaces, motion, and responsive systems</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">Backend</p>
              <p className="mt-2 text-2xl font-semibold text-white">05+</p>
              <p className="mt-1 text-sm text-neutral-400">Logic, APIs, databases, deployment</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">Workflow</p>
              <p className="mt-2 text-2xl font-semibold text-white">Design to Ship</p>
              <p className="mt-1 text-sm text-neutral-400">Figma handoff through production delivery</p>
            </div>
          </div>
        </motion.div>

        <div className="space-y-6 lg:space-y-8">
          {skillGroups.map((group, index) => (
            <SkillGroupCard key={group.title} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}