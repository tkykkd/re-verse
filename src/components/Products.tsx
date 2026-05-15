import { Fragment } from "react";
import { motion } from "motion/react";
import luminaImage from "../assets/luminasense.png";
import chronosImage from "../assets/chronos-pod.png";
import { useLanguage } from "../i18n/LanguageContext";

const PRODUCT_META = [
  {
    id: "lumina",
    name: "LuminaSense Bio-Optimizer",
    color: "bg-universe-teal/10",
    image: luminaImage,
  },
  {
    id: "chronos",
    name: "Chronos-Rejuvenation Pod",
    color: "bg-blue-900/10",
    image: chronosImage,
  },
] as const;

export default function Products() {
  const { t } = useLanguage();

  const products = [
    { ...PRODUCT_META[0], ...t.products.lumina },
    { ...PRODUCT_META[1], ...t.products.chronos },
  ];

  return (
    <section id="products" className="py-32 px-6">
      <motion.div className="max-w-7xl mx-auto">
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
          {products.map((product, idx) => (
            <Fragment key={product.id}>
              <ProductCard product={product} reversed={idx % 2 !== 0} index={idx} />
            </Fragment>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  color: string;
  image: string;
};

function ProductCard({
  product,
  reversed,
  index,
}: {
  product: Product;
  reversed: boolean;
  index: number;
}) {
  return (
    <div className={`flex flex-col md:flex-row gap-12 md:gap-24 items-center ${reversed ? "md:flex-row-reverse" : ""}`}>
      <motion.div
        className="flex-1 w-full aspect-square md:aspect-[4/3] group relative overflow-hidden"
        initial={{ opacity: 0, x: reversed ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div className={`absolute inset-0 ${product.color} mix-blend-overlay z-10 group-hover:opacity-50 transition-opacity`} />
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
        />
        <div className="absolute top-4 left-4 border-l border-t border-universe-teal/30 w-20 h-20 z-20 pointer-events-none" />
        <div className="absolute bottom-4 right-4 border-r border-b border-universe-teal/30 w-20 h-20 z-20 pointer-events-none" />
      </motion.div>

      <motion.div
        className="flex-1 space-y-8"
        initial={{ opacity: 0, x: reversed ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        <div className="space-y-4">
          <span className="text-universe-teal text-[10px] tracking-[0.3em] uppercase block font-medium">
            Product {index === 0 ? "01" : "02"}
          </span>
          <h3 className="text-3xl md:text-4xl font-display text-universe-prism tracking-wide">{product.name}</h3>
          <p className="text-universe-teal text-lg font-display italic opacity-90">{product.tagline}</p>
        </div>

        <p className="text-universe-silver text-base leading-relaxed font-light opacity-80 max-w-lg">{product.description}</p>

        <ul className="space-y-3">
          {product.features.map((feature) => (
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
