import { motion } from "motion/react";
import { useLanguage } from "../i18n/LanguageContext";

export default function Company() {
  const { t } = useLanguage();

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
          <div className="space-y-4">
            <span className="text-universe-teal text-[10px] tracking-[0.5em] uppercase block">Corporation</span>
            <h2 className="text-3xl font-display text-universe-prism">Company Profile</h2>
          </div>

          <div className="space-y-12">
            <InfoItem label="Company Name" value={t.company.name} subValue="RE-VERSE Technologies Inc." />
            <InfoItem label="Established" value={t.company.established} />
            <InfoItem label="CEO" value={t.company.ceo} subValue="Kaito Reize" />
          </div>

          <div className="space-y-12">
            <InfoItem label="Location" value={t.company.location} />
            <InfoItem label="Business" value={t.company.business} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function InfoItem({
  label,
  value,
  subValue,
}: {
  label: string;
  value: string | string[];
  subValue?: string;
}) {
  return (
    <div className="space-y-2">
      <span className="text-[10px] tracking-[0.2em] text-universe-silver opacity-40 uppercase font-medium">{label}</span>
      {Array.isArray(value) ? (
        <ul className="space-y-1">
          {value.map((v, i) => (
            <li key={i} className="text-sm text-universe-prism font-light">
              {v}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-base text-universe-prism font-light">{value}</p>
      )}
      {subValue && <p className="text-[10px] text-universe-teal opacity-60 tracking-wider uppercase">{subValue}</p>}
    </div>
  );
}
