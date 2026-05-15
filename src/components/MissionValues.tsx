import { motion } from "motion/react";
import { useLanguage } from "../i18n/LanguageContext";

const VALUE_TITLES = [
  "Bio-Logic Innovation",
  "Extreme Personalization",
  "Timeless Aesthetics",
] as const;

export default function MissionValues() {
  const { t } = useLanguage();

  const values = [
    { title: VALUE_TITLES[0], desc: t.mission.values.bioLogic },
    { title: VALUE_TITLES[1], desc: t.mission.values.personalization },
    { title: VALUE_TITLES[2], desc: t.mission.values.aesthetics },
  ];

  return (
    <section id="mission" className="py-32 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start pb-32">
          <motion.div
            className="space-y-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <span className="text-universe-teal text-[10px] tracking-[0.5em] uppercase block">Mission</span>
              <h2 className="text-4xl md:text-5xl font-display text-gradient">{t.mission.statement}</h2>
            </div>

            <div className="space-y-6">
              <span className="text-universe-teal text-[10px] tracking-[0.5em] uppercase block">Vision</span>
              <p className="text-xl md:text-2xl font-display text-universe-silver leading-relaxed italic">{t.mission.vision}</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-12">
            <span className="text-universe-teal text-[10px] tracking-[0.5em] uppercase block mb-4">Core Values</span>
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="space-y-4 pb-8 border-b border-white/5"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <h3 className="text-xl font-display text-universe-prism tracking-wider">{v.title}</h3>
                <p className="text-universe-silver text-sm opacity-60 leading-relaxed max-w-md">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
