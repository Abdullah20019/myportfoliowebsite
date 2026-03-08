"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, ArrowUpRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/moving-border";

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />

      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative z-20 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1 bg-green-500/10 text-green-400 text-sm font-medium rounded-full mb-4"
          >
            Get In Touch
          </motion.span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
            Let's build a{" "}
            <span className="text-gradient">powerful web presence</span>.
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-7 text-neutral-400 sm:text-lg">
            Ready to bring your ideas to life? I'm always open to discussing
            new projects, creative ideas, or opportunities to be part of your
            vision.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center flex-wrap"
        >
          <Button
            as="a"
            href="mailto:abdullahmasood20019@gmail.com"
            borderRadius="9999px"
            containerClassName="h-auto w-full sm:w-auto"
            className="inline-flex min-h-[54px] items-center justify-center px-6 py-4 text-base font-semibold text-white bg-green-600 hover:bg-green-500 sm:px-8 sm:text-lg"
            borderClassName="bg-[radial-gradient(var(--green-400)_40%,transparent_60%)]"
          >
            <span className="inline-flex items-center gap-3">
              <Mail className="w-5 h-5" />
              Send Email
            </span>
          </Button>

          <Button
            as="a"
            href="https://github.com/Abdullah20019"
            target="_blank"
            rel="noopener noreferrer"
            borderRadius="9999px"
            containerClassName="h-auto w-full sm:w-auto"
            className="inline-flex min-h-[54px] items-center justify-center border-2 border-neutral-700 bg-neutral-900 px-6 py-4 text-base font-semibold text-neutral-300 hover:text-green-400 sm:px-8 sm:text-lg"
            borderClassName="bg-[radial-gradient(var(--emerald-500)_40%,transparent_60%)]"
          >
            <span className="inline-flex items-center gap-3">
              <Github className="w-5 h-5" />
              View GitHub
              <ArrowUpRight className="w-4 h-5" />
            </span>
          </Button>

          <Button
            as="a"
            href="https://wa.me/923325492944"
            target="_blank"
            rel="noopener noreferrer"
            borderRadius="9999px"
            containerClassName="h-auto w-full sm:w-auto"
            className="inline-flex min-h-[54px] items-center justify-center border-2 border-neutral-700 bg-neutral-900 px-6 py-4 text-base font-semibold text-neutral-300 hover:text-green-400 sm:px-8 sm:text-lg"
            borderClassName="bg-[radial-gradient(var(--emerald-500)_40%,transparent_60%)]"
          >
            <span className="inline-flex items-center gap-3">
              <MessageCircle className="w-5 h-5" />
              WhatsApp
              <ArrowUpRight className="w-4 h-5" />
            </span>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-neutral-800"
        >
          <p className="text-neutral-500 text-sm">
            Currently available for freelance projects and collaborations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
