import React from "react";
import { motion } from "motion/react";

export default function Company() {
  return (
    <section id="company" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Section Title Column */}
          <div className="space-y-4">
            <span className="text-universe-teal text-[10px] tracking-[0.5em] uppercase block">Corporation</span>
            <h2 className="text-3xl font-display text-universe-prism">Company Profile</h2>
          </div>

          {/* Details Column 1 */}
          <div className="space-y-12">
            <InfoItem label="Company Name" value="RE-VERSE Technologies 株式会社" subValue="RE-VERSE Technologies Inc." />
            <InfoItem label="Established" value="2025年11月1日" />
            <InfoItem label="CEO" value="零瀬 海斗" subValue="Kaito Reize" />
          </div>

          {/* Details Column 2 */}
          <div className="space-y-12">
            <InfoItem 
              label="Location" 
              value="〒107-0062 東京都港区南青山 5-1-1 RE-VERSEビル" 
            />
            <InfoItem 
              label="Business" 
              value={[
                "AI搭載型次世代スキンケアデバイスの開発・製造",
                "再生医学に基づいた高機能スリープポッドの展開",
                "生体データ解析によるパーソナライズ・ウェルネス",
                "バイオテクノロジーを用いたサプリメントの研究・開発"
              ]} 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function InfoItem({ label, value, subValue }: { label: string; value: string | string[]; subValue?: string }) {
  return (
    <div className="space-y-2">
      <span className="text-[10px] tracking-[0.2em] text-universe-silver opacity-40 uppercase font-medium">{label}</span>
      {Array.isArray(value) ? (
        <ul className="space-y-1">
          {value.map((v, i) => (
            <li key={i} className="text-sm text-universe-prism font-light">{v}</li>
          ))}
        </ul>
      ) : (
        <p className="text-base text-universe-prism font-light">{value}</p>
      )}
      {subValue && <p className="text-[10px] text-universe-teal opacity-60 tracking-wider uppercase">{subValue}</p>}
    </div>
  );
}
