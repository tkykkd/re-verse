import React from "react";
import { motion } from "motion/react";
import luminaImage from "../assets/luminasense.png";
import chronosImage from "../assets/chronos-pod.png";

interface ProductProps {
  key?: string;
  product: {
    id: string;
    name: string;
    tagline: string;
    description: string;
    features: string[];
    color: string;
    image: string;
  };
  reversed: boolean;
}

const PRODUCTS = [
  {
    id: "lumina",
    name: "LuminaSense Bio-Optimizer",
    tagline: "今、この瞬間のあなたに、完璧な一滴を。",
    description: "AIが24時間体制でバイタルと肌環境を解析。その場で「飲む美容液」と「塗る美容液」を3D分子プリンティング調合。常にベストコンディションで発光するような素肌へ。",
    features: ["AIバイタル解析", "3D分子プリンティング", "パーソナライズ処方"],
    color: "bg-universe-teal/10",
    image: luminaImage,
  },
  {
    id: "chronos",
    name: "Chronos-Rejuvenation Pod",
    tagline: "眠るたびに、生命は宇宙で再生される。",
    description: "無重力姿勢、赤近赤外線療法、高気圧酸素。睡眠を「細胞の修復工場」へと変える。朝、目が覚めた瞬間に感じる身体の圧倒的な軽さと、みなぎる活力。",
    features: ["無重力姿勢制御", "赤近赤外線療法", "高気圧酸素カプセル"],
    color: "bg-blue-900/10",
    image: chronosImage,
  }
];

export default function Products() {
  return (
    <section id="products" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-universe-teal text-[10px] tracking-[0.5em] uppercase mb-4 block">Collection</span>
          <h2 className="text-3xl md:text-5xl font-display text-universe-prism">The Innovations</h2>
        </motion.div>

        <div className="space-y-40">
          {PRODUCTS.map((product, idx) => (
            <ProductCard key={product.id} product={product} reversed={idx % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, reversed }: ProductProps) {
  return (
    <div className={`flex flex-col md:flex-row gap-12 md:gap-24 items-center ${reversed ? "md:flex-row-reverse" : ""}`}>
      {/* Product Image Wrap */}
      <motion.div 
        className="flex-1 w-full aspect-square md:aspect-[4/3] group relative overflow-hidden"
        initial={{ opacity: 0, x: reversed ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={`absolute inset-0 ${product.color} mix-blend-overlay z-10 group-hover:opacity-50 transition-opacity`} />
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
        />
        {/* Decorative Lines */}
        <div className="absolute top-4 left-4 border-l border-t border-universe-teal/30 w-20 h-20 z-20 pointer-events-none" />
        <div className="absolute bottom-4 right-4 border-r border-b border-universe-teal/30 w-20 h-20 z-20 pointer-events-none" />
      </motion.div>

      {/* Product Content */}
      <motion.div 
        className="flex-1 space-y-8"
        initial={{ opacity: 0, x: reversed ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        <div className="space-y-4">
          <span className="text-universe-teal text-[10px] tracking-[0.3em] uppercase block font-medium">Product {product.id === 'lumina' ? '01' : '02'}</span>
          <h3 className="text-3xl md:text-4xl font-display text-universe-prism tracking-wide">{product.name}</h3>
          <p className="text-universe-teal text-lg font-display italic opacity-90">{product.tagline}</p>
        </div>
        
        <p className="text-universe-silver text-base leading-relaxed font-light opacity-80 max-w-lg">
          {product.description}
        </p>

        <ul className="space-y-3">
          {product.features.map((feature: string) => (
            <li key={feature} className="flex items-center gap-4 text-xs tracking-[0.1em] text-universe-silver">
              <span className="w-1.5 h-px bg-universe-teal" />
              {feature}
            </li>
          ))}
        </ul>

        <motion.button 
          className="group flex items-center gap-4 text-[10px] tracking-[0.4em] uppercase text-universe-prism hover:text-universe-teal transition-colors"
          whileHover={{ x: 10 }}
        >
          Discover More
          <span className="w-12 h-px bg-universe-prism group-hover:bg-universe-teal transition-colors" />
        </motion.button>
      </motion.div>
    </div>
  );
}
