"use client"

import React, { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const firstItem = items[0]?.name ?? ""
  const [activeTab, setActiveTab] = useState(firstItem)

  const sectionIds = useMemo(
    () => items.map((item) => item.url.replace("#", "")).filter(Boolean),
    [items]
  )

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35
      let currentSection = firstItem

      for (const item of items) {
        const sectionId = item.url.replace("#", "")
        const element = document.getElementById(sectionId)

        if (!element) continue

        const { offsetTop, offsetHeight } = element
        const sectionBottom = offsetTop + offsetHeight

        if (scrollPosition >= offsetTop && scrollPosition < sectionBottom) {
          currentSection = item.name
        }
      }

      setActiveTab(currentSection)
    }

    updateActiveSection()
    window.addEventListener("scroll", updateActiveSection, { passive: true })
    window.addEventListener("hashchange", updateActiveSection)
    window.addEventListener("resize", updateActiveSection)

    return () => {
      window.removeEventListener("scroll", updateActiveSection)
      window.removeEventListener("hashchange", updateActiveSection)
      window.removeEventListener("resize", updateActiveSection)
    }
  }, [firstItem, items, sectionIds])

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-3 z-50 px-3 sm:inset-x-auto sm:bottom-auto sm:left-1/2 sm:top-0 sm:-translate-x-1/2 sm:px-0 sm:pt-6",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-max items-center gap-1 overflow-x-auto rounded-full border border-border bg-background/70 px-1 py-1 shadow-lg backdrop-blur-lg sm:gap-3 [&::-webkit-scrollbar]:hidden">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative flex min-w-[56px] items-center justify-center rounded-full px-3 py-2 text-xs font-semibold transition-colors sm:min-w-0 sm:px-6 sm:text-sm",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-muted text-primary",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full rounded-full bg-primary/5 -z-10"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="absolute -top-2 left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full bg-primary sm:block hidden">
                    <div className="absolute -left-2 -top-2 h-6 w-12 rounded-full bg-primary/20 blur-md" />
                    <div className="absolute -top-1 h-6 w-8 rounded-full bg-primary/20 blur-md" />
                    <div className="absolute left-2 top-0 h-4 w-4 rounded-full bg-primary/20 blur-sm" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}