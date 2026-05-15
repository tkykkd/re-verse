import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useLanguage } from "../i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const text = t.hero.headline;
    let i = 0;
    setDisplayText("");
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, [t.hero.headline]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 30% 30%, #050810 0%, #0A0E1A 100%)",
              "radial-gradient(circle at 70% 70%, #050810 0%, #0A0E1A 100%)",
              "radial-gradient(circle at 30% 30%, #050810 0%, #0A0E1A 100%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 bg-universe-prism/40 rounded-full"
              initial={{
                x: Math.random() * 2000 - 1000,
                y: Math.random() * 2000 - 1000,
                opacity: Math.random(),
              }}
              animate={{
                y: [null, Math.random() * -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="w-32 h-32 mx-auto mb-12 relative"
            animate={{ rotateY: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-universe-teal stroke-[2] opacity-80">
              <circle cx="50" cy="50" r="48" className="stroke-universe-teal/20" />
              <path d="M 30,50 C 30,20 70,20 70,50 C 70,80 30,80 30,50 Z" className="glow-teal" />
              <text x="50" y="55" className="fill-universe-prism text-[40px] font-display font-light" textAnchor="middle">
                R
              </text>
            </svg>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-display mb-6 tracking-[0.1em] text-universe-prism">
            {displayText}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-1 h-12 bg-universe-teal ml-1 align-middle"
            />
          </h1>

          <p className="text-universe-silver text-sm md:text-base tracking-[0.4em] uppercase opacity-70">
            {t.hero.subtext}
          </p>
        </motion.div>

        <motion.div
          className="absolute bottom-20 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div className="flex flex-col items-center gap-4">
            <span className="text-[10px] tracking-[0.5em] text-universe-silver/50 uppercase">Scroll to Explore</span>
            <motion.div
              className="w-px h-16 bg-linear-to-b from-universe-teal to-transparent"
              animate={{ scaleY: [0, 1, 0], originY: 0 }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
