import React, { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import Logo from "./Logo";
import { Instagram, Twitter, Linkedin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const [activeDoc, setActiveDoc] = useState<"privacy" | "terms" | null>(null);
  const documentContent = useMemo(() => {
    if (activeDoc === "privacy") {
      return {
        title: "Privacy Policy（プライバシーポリシー）",
        subtitle: "個人情報保護方針",
        sections: [
          {
            heading: "基本方針",
            body: "RE-VERSE Technologies 株式会社（以下「当社」）は、お客様の美と健康を最適化するサービスを提供するにあたり、個人情報の保護を最重要課題と位置づけ、以下の通りプライバシーポリシーを定めます。"
          },
          {
            heading: "収集する情報",
            body: "当社は、本サイトの利用および当社製品（LuminaSense, Chronos Pod）の使用にあたり、氏名・連絡先・住所、生体データ（肌の状態、心拍数、睡眠サイクル、栄養状態等）、デバイスの利用履歴を収集する場合があります。"
          },
          {
            heading: "利用目的",
            body: "収集した情報は、お客様に合わせたパーソナライズ調合、製品性能向上と研究開発、メンテナンスおよびカスタマーサポートのために利用します。"
          },
          {
            heading: "情報の保護と管理",
            body: "当社は、お客様の生体データを暗号化し、最高水準のセキュリティ環境下で厳重に管理します。法令に基づく場合を除き、お客様の同意なく第三者に個人情報を提供することはありません。"
          },
          {
            heading: "データの権利",
            body: "お客様は、ご自身の個人情報の開示、訂正、または削除をいつでも求めることができます。"
          },
          {
            heading: "お問い合わせ先",
            body: "プライバシーに関するお問い合わせは、本サイトのお問い合わせフォームよりご連絡ください。"
          }
        ]
      };
    }

    return {
      title: "Terms of Service（利用規約）",
      subtitle: "サービス利用規約",
      sections: [
        {
          heading: "本規約について",
          body: "この利用規約（以下「本規約」）は、RE-VERSE Technologies 株式会社（以下「当社」）が提供するウェブサイトおよび製品（以下「本サービス」）の利用条件を定めるものです。"
        },
        {
          heading: "本規約への同意",
          body: "ユーザーは、本サービスを利用することにより、本規約のすべての条項に同意したものとみなされます。"
        },
        {
          heading: "製品の使用",
          body: "LuminaSense および Chronos Pod は、当社の指定する方法に従って適切に使用してください。生体解析に基づくアドバイスは健康維持を目的としており、医療行為に代わるものではありません。"
        },
        {
          heading: "知的財産権",
          body: "本サービスに関連するすべてのテキスト、デザイン（ロゴ等）、独自のアルゴリズム、テクノロジーに関する知的財産権は、すべて当社に帰属します。無断転載・複製・解析行為を禁じます。"
        },
        {
          heading: "禁止事項",
          body: "ユーザーは、虚偽の情報登録、システムの不正アクセスまたは改ざん、他のユーザーの利用を妨げる行為を行ってはなりません。"
        },
        {
          heading: "免責事項",
          body: "当社は、本サービスの利用によって生じた損害について、当社の過失による場合を除き、一切の責任を負わないものとします。また、個人の体質や環境により、期待される効果には個人差があることをご了承ください。"
        },
        {
          heading: "規約の変更",
          body: "当社は、必要に応じて本規約を変更できるものとします。変更後の規約は、本サイトに掲示した時点で効力が発生します。"
        },
        {
          heading: "準拠法・裁判管轄",
          body: "本規約の解釈にあたっては日本法を準拠法とし、東京地方裁判所を第一審の専属的合意管轄裁判所とします。"
        }
      ]
    };
  }, [activeDoc]);

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
        {/* Decorative Gradient */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-universe-teal/5 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2" />
      
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-32">
            {/* Brand Col */}
            <div className="lg:col-span-2 space-y-8">
              <Logo />
              <h3 className="text-2xl font-display text-universe-silver max-w-sm leading-snug">
                あなたの身体という宇宙を、<br />美しく書き換える。
              </h3>
              <div className="flex gap-6">
                <SocialIcon icon={<Twitter size={18} />} />
                <SocialIcon icon={<Instagram size={18} />} />
                <SocialIcon icon={<Linkedin size={18} />} />
              </div>
            </div>

            {/* Navigation Col */}
            <div className="space-y-8">
              <h4 className="text-[10px] tracking-[0.4em] uppercase text-universe-teal/60 font-semibold">Discovery</h4>
              <ul className="space-y-4">
                <FooterLink>Technology</FooterLink>
                <FooterLink>Products</FooterLink>
                <FooterLink>About Us</FooterLink>
                <FooterLink>Journal</FooterLink>
              </ul>
            </div>

            {/* Newsletter Col */}
            <div className="space-y-8">
              <h4 className="text-[10px] tracking-[0.4em] uppercase text-universe-teal/60 font-semibold">Intelligence</h4>
              <p className="text-xs text-universe-silver opacity-60 leading-relaxed">
                最新のバイオテクノロジーとRE-VERSEの革新を、あなたの受信箱へ。
              </p>
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
          </div>

          {/* Bottom Bar */}
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

      {activeDoc && (
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
