import { motion } from "motion/react";
import { useLanguage } from "../i18n/LanguageContext";

export default function Philosophy() {
  const { t } = useLanguage();

  return (
    <section id="philosophy" className="py-32 px-6 overflow-hidden relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-universe-teal text-[10px] tracking-[0.5em] uppercase mb-8 block font-medium">Philosophy</span>
          <h2 className="text-3xl md:text-5xl font-display leading-tight mb-12 text-gradient">{t.philosophy.heading}</h2>
          <div className="space-y-8 text-universe-silver text-base md:text-lg leading-relaxed font-light tracking-wide max-w-2xl mx-auto opacity-80">
            <p>{t.philosophy.p1}</p>
            <p>{t.philosophy.p2}</p>
            <p>{t.philosophy.p3}</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-universe-teal/5 blur-[120px] rounded-full pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    </section>
  );
}
