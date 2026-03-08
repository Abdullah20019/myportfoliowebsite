"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/moving-border";
import { ElegantShape } from "@/components/ui/shape-landing-hero";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-0 pt-16 sm:pt-24"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ElegantShape
          delay={0.3}
          width={500}
          height={120}
          rotate={12}
          gradient="from-green-500/[0.12]"
          className="left-[-20%] sm:left-[-10%] md:left-[-5%] top-[14%] md:top-[20%]"
        />
        <ElegantShape
          delay={0.5}
          width={400}
          height={100}
          rotate={-15}
          gradient="from-emerald-500/[0.12]"
          className="right-[-15%] sm:right-[-5%] md:right-[0%] top-[58%] md:top-[65%]"
        />
        <ElegantShape
          delay={0.4}
          width={250}
          height={70}
          rotate={-8}
          gradient="from-green-400/[0.1]"
          className="left-[0%] md:left-[10%] bottom-[12%] md:bottom-[15%]"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80 pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-2 text-base text-neutral-400 sm:text-lg"
            >
              Hello.
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-4 text-4xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl"
            >
              I&apos;m {" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Abdullah
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-5 text-xl text-neutral-300 sm:text-3xl lg:text-4xl"
            >
              Full-Stack Web Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mx-auto mb-6 max-w-xl text-sm leading-7 text-neutral-400 sm:text-lg lg:mx-0"
            >
              Responsive Websites • UI Design • Automation Integration
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mx-auto mb-8 max-w-xl leading-7 text-neutral-500 lg:mx-0 sm:mb-10"
            >
              Crafting dynamic user experiences with production-ready sites and scalable web solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col gap-3 sm:flex-row sm:gap-4 sm:justify-center lg:justify-start"
            >
              <Button
                as="a"
                href="#projects"
                borderRadius="1.75rem"
                containerClassName="h-auto w-full sm:w-auto"
                className="group inline-flex min-h-[52px] items-center justify-center gap-2 bg-green-600 px-6 py-3 text-center font-semibold text-white hover:bg-green-500 sm:px-8 sm:py-4"
                borderClassName="bg-[radial-gradient(var(--green-400)_40%,transparent_60%)]"
              >
                <span className="inline-flex items-center gap-2">
                  View Work
                  <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
                </span>
              </Button>

              <Button
                as="a"
                href="#contact"
                borderRadius="1.75rem"
                containerClassName="h-auto w-full sm:w-auto"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 border-2 border-neutral-700 bg-neutral-900 px-6 py-3 text-center font-semibold text-neutral-300 hover:text-green-400 sm:px-8 sm:py-4"
                borderClassName="bg-[radial-gradient(var(--green-500)_40%,transparent_60%)]"
              >
                <span className="inline-flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Contact Me
                </span>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="relative hidden items-center justify-center lg:flex"
          >
            <div className="relative h-[360px] w-[360px] xl:h-[400px] xl:w-[400px]">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 blur-2xl opacity-45"
                animate={{ scale: [1, 1.08, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />

              <motion.div
                className="relative h-full w-full overflow-hidden rounded-[42px] border border-green-500/20 bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-transparent p-4 shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ type: "spring", stiffness: 220, damping: 24 }}
              >
                <div className="relative h-full w-full overflow-hidden rounded-[30px] border border-white/10 bg-neutral-950/70 backdrop-blur-xl">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.16),transparent_42%)]" />
                  <Image
                    src="/og.png"
                    alt="Abdullah illustration"
                    fill
                    priority
                    className="object-contain p-6"
                    sizes="(max-width: 1024px) 0px, (max-width: 1280px) 360px, 400px"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 sm:bottom-8 sm:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-neutral-500"
        >
          <span className="text-sm">Scroll</span>
          <div className="flex h-10 w-6 justify-center rounded-full border-2 border-neutral-700 pt-2">
            <motion.div
              className="h-1.5 w-1.5 rounded-full bg-neutral-400"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}