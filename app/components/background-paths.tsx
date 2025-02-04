"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

interface BackgroundPathsProps {
  title: string;
  subtitle?: string;
  primaryCta?: {
    href: string;
    text: string;
    variant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    className?: string;
  };
  secondaryCta?: {
    href: string;
    text: string;
    variant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    className?: string;
  };
}

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    d: `M${-800 + i * 20 * position} ${-400 + i * 25}C${-800 + i * 20 * position} ${-400 + i * 25} ${
      -600 + i * 20 * position
    } ${600 - i * 25} ${400 + i * 20 * position} ${800 - i * 25}C${1400 + i * 20 * position} ${
      1000 - i * 25
    } ${1600 + i * 20 * position} ${1600 - i * 25} ${1600 + i * 20 * position} ${1600 - i * 25}`,
    color: `rgba(124,228,108,${0.02 + i * 0.015})`,
    width: 0.5 + i * 0.05,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full text-green9" viewBox="0 0 1920 1080" fill="none">
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.015}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 30 + Math.random() * 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function BackgroundPaths({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: BackgroundPathsProps) {
  const [mainText, cursor] = title.split("|");
  const words = mainText.split(" ");

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-blackA12">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
        <FloatingPaths position={0.5} />
        <FloatingPaths position={-0.5} />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter font-heading">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-4 last:mr-0">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.1 + letterIndex * 0.03,
                      type: "spring",
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="inline-block text-white">
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
            {cursor && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="inline-block text-green9 ml-2">
                |
              </motion.span>
            )}
          </h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-lg sm:text-xl md:text-2xl text-whiteA11">
              {subtitle}
            </motion.p>
          )}

          {(primaryCta || secondaryCta) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="flex flex-wrap items-center justify-center gap-4 mt-8">
              {primaryCta && (
                <Link href={primaryCta.href}>
                  <Button variant={primaryCta.variant} className={primaryCta.className}>
                    {primaryCta.text}
                  </Button>
                </Link>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.href}>
                  <Button variant={secondaryCta.variant} className={secondaryCta.className}>
                    {secondaryCta.text}
                  </Button>
                </Link>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
