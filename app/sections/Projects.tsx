"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Building2, Scissors, Sparkles } from "lucide-react";
import { CardStack3D } from "@/components/ui/3d-flip-card";

type ProjectCategory = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  result: string;
  icon: typeof Building2;
  color: string;
  ringColor: string;
  borderColor: string;
  surfaceClass: string;
  stats: { label: string; value: string }[];
  tags: string[];
  images: { src: string; alt: string }[];
};

const projectCategories: ProjectCategory[] = [
  {
    id: "clinic",
    title: "Clinic Websites",
    subtitle: "Healthcare and Medical Platforms",
    description:
      "Professional healthcare websites built to earn trust quickly and make appointments easier to book.",
    result: "Clear service pages and stronger conversion paths for clinics.",
    icon: Building2,
    color: "from-emerald-400 via-green-500 to-teal-500",
    ringColor: "ring-emerald-500/20",
    borderColor: "border-emerald-500/20",
    surfaceClass: "from-emerald-500/12 via-emerald-500/6 to-transparent",
    stats: [
      { label: "Projects", value: "8+" },
      { label: "Clients", value: "15+" },
      { label: "Focus", value: "Trust-first UI" },
    ],
    tags: ["Next.js", "Responsive", "Booking Flow"],
    images: [
      { src: "/ss/clinic.png", alt: "Arwa Dental Surgery homepage" },
      { src: "/ss/clinic1.png", alt: "Dental clinic services page" },
      { src: "/ss/clinic2.png", alt: "Clinic appointment booking" },
      { src: "/ss/clinic3.png", alt: "Dental care services" },
      { src: "/ss/clinic4.png", alt: "Clinic contact page" },
      { src: "/ss/clinic12.png", alt: "Clinic gallery 1" },
      { src: "/ss/clinic13.png", alt: "Clinic gallery 2" },
      { src: "/ss/clinic14.png", alt: "Clinic gallery 3" },
      { src: "/ss/clinic15.png", alt: "Clinic gallery 4" },
    ],
  },
  {
    id: "beauty-salon",
    title: "Beauty Salon",
    subtitle: "Beauty and Wellness Experiences",
    description:
      "Elegant salon websites designed to showcase services beautifully and turn interest into bookings.",
    result: "Luxury presentation with a cleaner path from browsing to booking.",
    icon: Sparkles,
    color: "from-fuchsia-400 via-pink-500 to-rose-500",
    ringColor: "ring-pink-500/20",
    borderColor: "border-pink-500/20",
    surfaceClass: "from-pink-500/12 via-rose-500/6 to-transparent",
    stats: [
      { label: "Projects", value: "3+" },
      { label: "Clients", value: "8+" },
      { label: "Focus", value: "Luxury positioning" },
    ],
    tags: ["Branding", "Service Showcase", "Booking"],
    images: [
      { src: "/ss/salon.png", alt: "Beauty salon homepage" },
      { src: "/ss/salon1.png", alt: "Salon services page" },
      { src: "/ss/salon2.png", alt: "Bridal services page" },
      {
        src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
        alt: "Beauty salon interior",
      },
      {
        src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
        alt: "Hair styling showcase",
      },
    ],
  },
  {
    id: "hair-salon",
    title: "Hair Salon",
    subtitle: "Barbershop and Grooming Brands",
    description:
      "Bold salon and barbershop websites with sharper visuals, clear services, and stronger booking intent.",
    result: "Stronger brand personality and faster access to key actions.",
    icon: Scissors,
    color: "from-amber-300 via-orange-500 to-red-500",
    ringColor: "ring-orange-500/20",
    borderColor: "border-orange-500/20",
    surfaceClass: "from-orange-500/12 via-amber-500/6 to-transparent",
    stats: [
      { label: "Projects", value: "6+" },
      { label: "Clients", value: "12+" },
      { label: "Focus", value: "Editorial energy" },
    ],
    tags: ["Mobile-First", "Animation", "Service CTA"],
    images: [
      { src: "/ss/barber.png", alt: "Barbershop homepage" },
      { src: "/ss/barber1.png", alt: "Barbershop services" },
      { src: "/ss/barber2.png", alt: "Hair styling gallery" },
      { src: "/ss/barber3.png", alt: "Barbershop interior" },
      { src: "/ss/barber4.png", alt: "Grooming services" },
    ],
  },
];

function StatsBlock({ stats }: { stats: ProjectCategory["stats"] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-[11px] uppercase tracking-[0.22em] text-neutral-500">{stat.label}</p>
          <p className="mt-2 text-lg font-semibold text-white sm:text-xl">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}

function ProjectHeader({ category }: { category: ProjectCategory }) {
  const Icon = category.icon;

  return (
    <div className="mb-5 flex flex-wrap items-center gap-2.5 sm:gap-3">
      <div className={`inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-neutral-200 ring-1 sm:px-4 sm:text-sm ${category.ringColor}`}>
        <Icon className="h-4 w-4" />
        {category.subtitle}
      </div>
    </div>
  );
}

function MobileProjectCard({ category }: { category: ProjectCategory }) {
  return (
    <div className="lg:hidden rounded-[24px] border border-white/10 bg-neutral-950/75 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl">
      <ProjectHeader category={category} />

      <h3 className="text-2xl font-semibold tracking-tight text-white">{category.title}</h3>
      <p className="mt-4 text-sm leading-7 text-neutral-300">{category.description}</p>

      <div className="mt-5">
        <StatsBlock stats={category.stats} />
      </div>

      <div className="mt-5 rounded-[22px] border border-white/10 bg-black/20 p-4">
        <CardStack3D
          images={category.images}
          cardWidth={360}
          cardHeight={235}
          spacing={{ x: 50, y: 44 }}
          className="w-full"
        />
      </div>

      <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-5">
        <p className="text-[11px] uppercase tracking-[0.22em] text-neutral-500">Why it converts</p>
        <p className="mt-2 text-sm leading-7 text-neutral-300">{category.result}</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2.5">
        {category.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-neutral-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-col items-stretch gap-3">
        <a
          href="#contact"
          className={`inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r ${category.color} px-5 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-300 hover:-translate-y-0.5`}
        >
          Start a similar project
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

function DesktopProjectCard({ category, index }: { category: ProjectCategory; index: number }) {
  const contentOrder = index % 2 === 0 ? "lg:order-1" : "lg:order-2";
  const visualOrder = index % 2 === 0 ? "lg:order-2" : "lg:order-1";

  return (
    <div className="hidden lg:grid lg:grid-cols-[1.02fr_1fr] lg:items-stretch">
      <div className={`flex flex-col justify-between p-12 ${contentOrder}`}>
        <div>
          <ProjectHeader category={category} />

          <div className="mb-8 max-w-2xl">
            <h3 className="mb-4 text-4xl font-semibold tracking-tight text-white lg:text-[2.8rem]">{category.title}</h3>
            <p className="text-lg leading-8 text-neutral-300">{category.description}</p>
          </div>

          <div className="mb-8">
            <StatsBlock stats={category.stats} />
          </div>

          <div className="mb-8 rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="text-[11px] uppercase tracking-[0.22em] text-neutral-500">Why it converts</p>
            <p className="mt-2 text-sm leading-7 text-neutral-300">{category.result}</p>
          </div>

          <div className="mb-8 flex flex-wrap gap-2.5">
            {category.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-5">
          <a
            href="#contact"
            className={`inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r ${category.color} px-5 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-300 hover:-translate-y-0.5`}
          >
            Start a similar project
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className={`relative min-h-[560px] overflow-hidden border-l border-white/10 ${visualOrder}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_38%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent)]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="relative flex h-full flex-col justify-center p-10">
          <div className="absolute inset-x-8 top-1/2 h-36 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
          <CardStack3D
            images={category.images}
            cardWidth={360}
            cardHeight={235}
            spacing={{ x: 50, y: 44 }}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}

function ProjectShowcase({
  category,
  index,
}: {
  category: ProjectCategory;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const cardClassName = [
    "group relative overflow-hidden rounded-[24px] sm:rounded-[32px] border bg-neutral-950/70 backdrop-blur-xl",
    category.borderColor,
    "shadow-[0_24px_80px_rgba(0,0,0,0.35)]",
  ].join(" ");

  return (
    <motion.article
      ref={ref}
      id={category.id}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      className={cardClassName}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${category.surfaceClass} opacity-100`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_30%)]" />

      <div className="relative">
        <MobileProjectCard category={category} />
        <DesktopProjectCard category={category} index={index} />
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-24 xl:px-12 xl:py-32"
    >
      <div className="absolute inset-0 pointer-events-none bg-black/10" />
      <div className="absolute inset-x-0 top-24 h-96 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.14),transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6 }}
          className="mb-12 grid gap-6 sm:mb-14 sm:gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end"
        >
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-neutral-300">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Selected Projects
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Selected work that feels <span className="text-gradient">clean, credible, and conversion-focused</span>.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-400 sm:mt-5 sm:text-lg sm:leading-8">
              A simpler showcase of the types of websites I build best — with proof, visual quality, and one clear path to start a project.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">Sectors</p>
              <p className="mt-2 text-2xl font-semibold text-white">03</p>
              <p className="mt-1 text-sm text-neutral-400">Healthcare, beauty, grooming</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">Delivered</p>
              <p className="mt-2 text-2xl font-semibold text-white">17+</p>
              <p className="mt-1 text-sm text-neutral-400">Responsive client websites</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">Goal</p>
              <p className="mt-2 text-2xl font-semibold text-white">More inquiries</p>
              <p className="mt-1 text-sm text-neutral-400">Cleaner pages that convert better</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ delay: 0.15, duration: 0.55 }}
          className="mb-10 flex flex-wrap gap-2.5 sm:mb-12 sm:gap-3"
        >
          {projectCategories.map((category) => {
            const Icon = category.icon;
            return (
              <a
                key={category.id}
                href={`#${category.id}`}
                className={`inline-flex max-w-full items-center gap-2 rounded-full border ${category.borderColor} bg-white/[0.04] px-3.5 py-2 text-xs font-medium text-neutral-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:text-white sm:px-4 sm:py-2.5 sm:text-sm`}
              >
                <Icon className="h-4 w-4" />
                {category.title}
              </a>
            );
          })}
        </motion.div>

        <div className="space-y-8 lg:space-y-10">
          {projectCategories.map((category, index) => (
            <ProjectShowcase key={category.id} category={category} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-14 rounded-[24px] border border-white/10 bg-white/[0.03] px-5 py-7 text-center sm:rounded-[28px] sm:px-8 lg:mt-20 lg:px-12"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-neutral-500">Ready to simplify your website?</p>
          <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
            Let&apos;s build something clear, professional, and conversion-focused.
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-neutral-400 sm:text-base">
            If you want a site that looks better, feels easier to trust, and makes it simpler for clients to contact you, I can help.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-5 py-3 text-sm font-semibold text-green-300 transition-colors hover:border-green-400/30 hover:text-green-200 sm:w-auto"
          >
            Start a project inquiry
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
