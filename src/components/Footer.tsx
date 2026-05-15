import React, { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import Logo from "./Logo";
import { Instagram, Twitter, Linkedin, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const [activeDoc, setActiveDoc] = useState<"privacy" | "terms" | null>(null);

  const documentContent = useMemo(() => {
    if (activeDoc === "privacy") return t.footer.privacy;
    if (activeDoc === "terms") return t.footer.terms;
    return null;
  }, [activeDoc, t]);

  useEffect(() => {
    if (!activeDoc) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveDoc(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeDoc]);

  return (
    <>
      <footer className="pt-32 pb-12 px-6 border-t border-white/5 bg-universe-midnight relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-universe-teal/5 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-32">
            <div className="lg:col-span-2 space-y-8">
              <Logo />
              <h3 className="text-2xl font-display text-universe-silver max-w-sm leading-snug">{t.footer.tagline}</h3>
              <div className="flex gap-6">
                <SocialIcon icon={<Twitter size={18} />} />
                <SocialIcon icon={<Instagram size={18} />} />
                <SocialIcon icon={<Linkedin size={18} />} />
              </div>
            </div>

            <div className="space-y-8">
              <h4 className="text-[10px] tracking-[0.4em] uppercase text-universe-teal/60 font-semibold">Discovery</h4>
              <ul className="space-y-4">
                <FooterLink>Technology</FooterLink>
                <FooterLink>Products</FooterLink>
                <FooterLink>About Us</FooterLink>
                <FooterLink>Journal</FooterLink>
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-[10px] tracking-[0.4em] uppercase text-universe-teal/60 font-semibold">Intelligence</h4>
              <p className="text-xs text-universe-silver opacity-60 leading-relaxed">{t.footer.newsletter}</p>
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-xs tracking-widest focus:outline-none focus:border-universe-teal transition-colors"
                />
                <button className="absolute right-0 top-1/2 -translate-y-1/2 text-universe-silver group-hover:text-universe-teal transition-colors">
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          </motion.div>

          <div className="mb-10 space-y-2 max-w-2xl text-[10px] leading-relaxed text-universe-silver/50 tracking-wide normal-case">
            <p>{t.footer.chatDisclaimer}</p>
            <p>{t.footer.portfolioNote}</p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5 opacity-40 text-[10px] tracking-[0.2em] uppercase font-medium">
            <p>© 2025 RE-VERSE Technologies Inc. All Rights Reserved.</p>
            <div className="flex gap-12">
              <button
                type="button"
                onClick={() => setActiveDoc("privacy")}
                className="hover:text-universe-teal transition-colors"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => setActiveDoc("terms")}
                className="hover:text-universe-teal transition-colors"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>

      {activeDoc && documentContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/70 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-3xl max-h-[80vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#070c18] px-7 py-8"
          >
            <div className="flex items-start justify-between gap-4 pb-5 border-b border-white/10">
              <div>
                <p className="text-[10px] tracking-[0.35em] uppercase text-universe-teal/70">Legal</p>
                <h3 className="text-xl font-display text-universe-prism mt-2">{documentContent.title}</h3>
                <p className="text-[11px] text-universe-silver/80 mt-1 tracking-[0.08em]">{documentContent.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={() => setActiveDoc(null)}
                className="text-[11px] tracking-[0.2em] uppercase text-universe-silver/70 hover:text-universe-teal transition-colors"
              >
                Close
              </button>
            </div>

            <div className="mt-6 space-y-5 text-[11px] leading-7 text-universe-silver/85 tracking-[0.02em]">
              {documentContent.sections.map((section) => (
                <section key={section.heading}>
                  <h4 className="text-[11px] font-semibold tracking-[0.12em] uppercase text-universe-prism/90">
                    {section.heading}
                  </h4>
                  <p className="mt-1">{section.body}</p>
                </section>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <motion.a
      href="#"
      className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-universe-silver hover:text-universe-teal hover:border-universe-teal transition-all"
      whileHover={{ scale: 1.1 }}
    >
      {icon}
    </motion.a>
  );
}

function FooterLink({ children }: { children: React.ReactNode }) {
  return (
    <li>
      <a href="#" className="text-xs tracking-[0.1em] text-universe-silver hover:text-universe-prism transition-colors">
        {children}
      </a>
    </li>
  );
}
