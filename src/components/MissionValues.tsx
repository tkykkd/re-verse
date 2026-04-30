import React from "react";
import { motion } from "motion/react";

const VALUES = [
  {
    title: "Bio-Logic Innovation",
    desc: "生物学的根拠に基づいた絶え間ない革新が、私たちのDNAです。"
  },
  {
    title: "Extreme Personalization",
    desc: "37兆個の細胞ひとつひとつに寄り添う、究極の個別最適化を実現します。"
  },
  {
    title: "Timeless Aesthetics",
    desc: "時代に左右されない、普遍的かつ洗練された美しさを追求します。"
  }
];

export default function MissionValues() {
  return (
    <section id="mission" className="py-32 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start pb-32">
          {/* Mission & Vision */}
          <motion.div 
            className="space-y-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <span className="text-universe-teal text-[10px] tracking-[0.5em] uppercase block">Mission</span>
              <h2 className="text-4xl md:text-5xl font-display text-gradient">
                老化という概念を<br />過去のものにする。
              </h2>
            </div>
            
            <div className="space-y-6">
              <span className="text-universe-teal text-[10px] tracking-[0.5em] uppercase block">Vision</span>
              <p className="text-xl md:text-2xl font-display text-universe-silver leading-relaxed italic">
                「世界でもっとも『時間』を味方につける<br />ウェルネス・カンパニーへ」
              </p>
            </div>
          </motion.div>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 gap-12">
            <span className="text-universe-teal text-[10px] tracking-[0.5em] uppercase block mb-4">Core Values</span>
            {VALUES.map((v, i) => (
              <motion.div 
                key={v.title}
                className="space-y-4 pb-8 border-b border-white/5"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <h3 className="text-xl font-display text-universe-prism tracking-wider">{v.title}</h3>
                <p className="text-universe-silver text-sm opacity-60 leading-relaxed max-w-md">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
