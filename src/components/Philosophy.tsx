import React from "react";
import { motion } from "motion/react";

export default function Philosophy() {
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
          <h2 className="text-3xl md:text-5xl font-display leading-tight mb-12 text-gradient">
            あなたの身体という宇宙を、<br className="hidden md:block" />
            美しく書き換える。
          </h2>
          <div className="space-y-8 text-universe-silver text-base md:text-lg leading-relaxed font-light tracking-wide max-w-2xl mx-auto opacity-80">
            <p>
              現代社会を生きる私たちの身体は、絶え間ないストレスや環境の変化という「重力」に縛られ、細胞の輝きを失いかけています。
            </p>
            <p>
              RE-VERSEとは、単に過去に戻ることではありません。それは蓄積されたダメージをリセットし、眠っていた本来の生命力を呼び覚ますプロセス。
            </p>
            <p>
              私たちはテクノロジーという光を用いて、あなたの内なる宇宙を、最も美しい状態へと再構築します。
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative Gradient Blob */}
      <motion.div 
        className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-universe-teal/5 blur-[120px] rounded-full pointer-events-none"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    </section>
  );
}
