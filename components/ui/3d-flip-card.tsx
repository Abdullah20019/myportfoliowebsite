"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { createPortal } from "react-dom";

interface CardImage {
  src: string;
  alt: string;
}

interface CardStackProps {
  images: CardImage[];
  className?: string;
  cardWidth?: number;
  cardHeight?: number;
  spacing?: {
    x?: number;
    y?: number;
  };
}

interface CardProps extends CardImage {
  index: number;
  isHovered: boolean;
  isMobile: boolean;
  isFront?: boolean;
  frontCardIndex: number | null;
  onClick: (index: number) => void;
  width: number;
  height: number;
  spacing: { x?: number; y?: number };
}

interface ImageModalProps {
  images: CardImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onThumbnailClick: (index: number) => void;
}

const ImageModal = ({ images, currentIndex, isOpen, onClose, onNext, onPrev, onThumbnailClick }: ImageModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-50 rounded-full bg-red-500/80 p-2 text-white shadow-lg transition-colors hover:bg-red-600 sm:right-4 sm:top-4"
        >
          <X className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-2 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 sm:left-4 sm:p-3"
        >
          <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-2 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 sm:right-4 sm:p-3"
        >
          <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
        </button>

        <div className="absolute bottom-3 left-1/2 z-50 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1.5 text-xs text-white sm:bottom-4 sm:px-4 sm:py-2 sm:text-sm">
          {currentIndex + 1} / {images.length}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0"
          onClick={(e) => e.stopPropagation()}
        >
          <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="h-full w-full object-contain bg-black" />
        </motion.div>

        <div className="absolute bottom-12 left-1/2 flex max-w-[90vw] -translate-x-1/2 gap-1.5 overflow-x-auto rounded-full bg-black/50 px-3 py-1.5 sm:bottom-16 sm:max-w-[80vw] sm:gap-2 sm:px-4 sm:py-2">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                onThumbnailClick(idx);
              }}
              className={cn(
                "relative h-9 w-12 flex-shrink-0 overflow-hidden rounded-md border-2 transition-all sm:h-12 sm:w-16 sm:rounded-lg",
                idx === currentIndex ? "scale-110 border-white" : "border-white/30 opacity-60 hover:border-white/60 hover:opacity-100"
              )}
            >
              <Image src={img.src} alt={img.alt} fill className="object-cover" />
            </button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const Card = ({ src, alt, index, isHovered, isMobile, isFront, frontCardIndex, onClick, width, height, spacing }: CardProps) => {
  return (
    <motion.div
      className={cn("absolute cursor-pointer overflow-hidden rounded-xl shadow-lg", isFront && "z-20")}
      style={{
        width,
        height,
        transformStyle: "preserve-3d",
        transformOrigin: isMobile ? "top center" : "left center",
        zIndex: isFront ? 20 : 5 - index,
        filter: isFront || frontCardIndex === null ? "none" : "blur(5px)",
      }}
      initial={{ rotateY: 0, x: 0, y: 0, scale: 1, boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)" }}
      animate={
        isFront
          ? {
              scale: 1.1,
              rotateY: 0,
              x: 0,
              y: isMobile ? 0 : -40,
              z: 50,
              boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.5)",
            }
          : isHovered
            ? {
                rotateY: isMobile ? 0 : -45,
                x: isMobile ? 0 : index * (spacing.x ?? 50),
                y: isMobile ? index * (spacing.y ?? 28) : index * -5,
                z: index * 15,
                scale: isMobile ? 1.02 : 1.05,
                boxShadow: `10px 20px 30px rgba(0, 0, 0, ${0.2 + index * 0.05})`,
                transition: { type: "spring", stiffness: 300, damping: 50, delay: index * 0.1 },
              }
            : {
                rotateY: 0,
                x: 0,
                y: 0,
                z: 0,
                scale: 1,
                boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
                transition: { type: "spring", stiffness: 300, damping: 20, delay: (4 - index) * 0.1 },
              }
      }
      onClick={() => onClick(index)}
    >
      <Image src={src} alt={alt} fill className="pointer-events-none rounded-xl object-cover" />

      <motion.div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-opacity hover:opacity-100" initial={false}>
        <span className="rounded-full bg-black/50 px-3 py-1.5 text-sm font-medium text-white">Click to view</span>
      </motion.div>
    </motion.div>
  );
};

export function CardStack3D({ images, className, cardWidth = 320, cardHeight = 192, spacing = { x: 50, y: 50 } }: CardStackProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [frontCardIndex, setFrontCardIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(1280);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const resolvedWidth = useMemo(() => {
    if (viewportWidth <= 400) return Math.min(cardWidth, viewportWidth - 88);
    if (viewportWidth <= 640) return Math.min(cardWidth, viewportWidth - 110);
    if (viewportWidth <= 768) return Math.min(cardWidth, viewportWidth - 150);
    return cardWidth;
  }, [cardWidth, viewportWidth]);

  const resolvedHeight = Math.round((resolvedWidth / cardWidth) * cardHeight);
  const previewImages = isMobile ? images.slice(0, 1) : images;

  const resolvedSpacing = useMemo(
    () => ({
      x: isMobile ? Math.min(spacing.x ?? 50, 24) : spacing.x,
      y: isMobile ? Math.min(spacing.y ?? 50, 26) : spacing.y,
    }),
    [isMobile, spacing.x, spacing.y]
  );

  const handleCardClick = (index: number) => {
    setModalIndex(index);
    setIsModalOpen(true);
  };

  const handleNext = () => setModalIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () => setModalIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFrontCardIndex(null);
  };

  return (
    <>
      <div className={cn("flex items-center justify-center py-10 sm:py-16", className)}>
        <div
          className="relative perspective-1000 max-w-full"
          style={{ width: resolvedWidth, height: resolvedHeight }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {previewImages.map((image, index) => (
            <Card
              key={index}
              {...image}
              index={index}
              isHovered={isHovered}
              isMobile={isMobile}
              isFront={frontCardIndex === index}
              frontCardIndex={frontCardIndex}
              onClick={() => handleCardClick(isMobile ? 0 : index)}
              width={resolvedWidth}
              height={resolvedHeight}
              spacing={resolvedSpacing}
            />
          ))}

          {isMobile && (
            <div className="absolute inset-x-0 -bottom-8 text-center text-xs text-neutral-400">
              Tap preview to browse all {images.length} screens
            </div>
          )}
        </div>
      </div>

      {typeof document !== "undefined" &&
        createPortal(
          <ImageModal
            images={images}
            currentIndex={modalIndex}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onNext={handleNext}
            onPrev={handlePrev}
            onThumbnailClick={setModalIndex}
          />,
          document.body
        )}
    </>
  );
}

export default CardStack3D;