import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GlobalAnimatedBackground } from "@/components/ui/global-animated-background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdullah | Full-Stack Web Developer",
  description:
    "Full-Stack Web Developer specializing in responsive websites, UI design, and automation integration.",
  openGraph: {
    title: "Abdullah | Full-Stack Web Developer",
    description:
      "Full-Stack Web Developer specializing in responsive websites, UI design, and automation integration.",
    images: [
      {
        url: "/og.png",
        width: 688,
        height: 535,
        alt: "Abdullah portfolio OG image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah | Full-Stack Web Developer",
    description:
      "Full-Stack Web Developer specializing in responsive websites, UI design, and automation integration.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/og.png",
    shortcut: "/og.png",
    apple: "/og.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <GlobalAnimatedBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}