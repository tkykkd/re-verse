export type Locale = "ja" | "en" | "zh" | "th";

export const localeLabels: Record<Locale, string> = {
  ja: "日本語",
  en: "English",
  zh: "中文",
  th: "ไทย",
};

export type Translation = {
  meta: { title: string };
  hero: { headline: string; subtext: string };
  philosophy: {
    heading: string;
    p1: string;
    p2: string;
    p3: string;
  };
  products: {
    lumina: { tagline: string; description: string; features: string[] };
    chronos: { tagline: string; description: string; features: string[] };
  };
  mission: {
    statement: string;
    vision: string;
    values: { bioLogic: string; personalization: string; aesthetics: string };
  };
  company: {
    name: string;
    established: string;
    ceo: string;
    location: string;
    business: string[];
  };
  footer: {
    tagline: string;
    newsletter: string;
    chatDisclaimer: string;
    portfolioNote: string;
    privacy: {
      title: string;
      subtitle: string;
      sections: { heading: string; body: string }[];
    };
    terms: {
      title: string;
      subtitle: string;
      sections: { heading: string; body: string }[];
    };
  };
};

export const translations: Record<Locale, Translation> = {
  ja: {
    meta: {
      title: "RE-VERSE | あなたの身体という宇宙を、美しく書き換える。",
    },
    hero: {
      headline: "さあ、時間を味方につけよう。",
      subtext: "逆転（REVERSE）、再誕（REBIRTH）、そして宇宙（UNIVERSE）。",
    },
    philosophy: {
      heading: "あなたの身体という宇宙を、美しく書き換える。",
      p1: "現代社会を生きる私たちの身体は、絶え間ないストレスや環境の変化という「重力」に縛られ、細胞の輝きを失いかけています。",
      p2: "RE-VERSEとは、単に過去に戻ることではありません。それは蓄積されたダメージをリセットし、眠っていた本来の生命力を呼び覚ますプロセス。",
      p3: "私たちはテクノロジーという光を用いて、あなたの内なる宇宙を、最も美しい状態へと再構築します。",
    },
    products: {
      lumina: {
        tagline: "今、この瞬間のあなたに、完璧な一滴を。",
        description:
          "AIが24時間体制でバイタルと肌環境を解析。その場で「飲む美容液」と「塗る美容液」を3D分子プリンティング調合。常にベストコンディションで発光するような素肌へ。",
        features: ["AIバイタル解析", "3D分子プリンティング", "パーソナライズ処方"],
      },
      chronos: {
        tagline: "眠るたびに、生命は宇宙で再生される。",
        description:
          "無重力姿勢、赤近赤外線療法、高気圧酸素。睡眠を「細胞の修復工場」へと変える。朝、目が覚めた瞬間に感じる身体の圧倒的な軽さと、みなぎる活力。",
        features: ["無重力姿勢制御", "赤近赤外線療法", "高気圧酸素カプセル"],
      },
    },
    mission: {
      statement: "老化という概念を過去のものにする。",
      vision: "「世界でもっとも『時間』を味方につけるウェルネス・カンパニーへ」",
      values: {
        bioLogic: "生物学的根拠に基づいた絶え間ない革新が、私たちのDNAです。",
        personalization: "37兆個の細胞ひとつひとつに寄り添う、究極の個別最適化を実現します。",
        aesthetics: "時代に左右されない、普遍的かつ洗練された美しさを追求します。",
      },
    },
    company: {
      name: "RE-VERSE Technologies 株式会社",
      established: "2025年11月1日",
      ceo: "零瀬 海斗",
      location: "〒107-0062 東京都港区南青山 5-1-1 RE-VERSEビル",
      business: [
        "AI搭載型次世代スキンケアデバイスの開発・製造",
        "再生医学に基づいた高機能スリープポッドの展開",
        "生体データ解析によるパーソナライズ・ウェルネス",
        "バイオテクノロジーを用いたサプリメントの研究・開発",
      ],
    },
    footer: {
      tagline: "あなたの身体という宇宙を、美しく書き換える。",
      newsletter: "最新のバイオテクノロジーとRE-VERSEの革新を、あなたの受信箱へ。",
      chatDisclaimer:
        "このチャットはAIによる案内です。医療・購入の確約はできません。詳細はお問い合わせください。",
      portfolioNote: "本サイトはポートフォリオ用の架空ブランド／デモサイトです。",
      privacy: {
        title: "Privacy Policy（プライバシーポリシー）",
        subtitle: "個人情報保護方針",
        sections: [
          {
            heading: "基本方針",
            body: "RE-VERSE Technologies 株式会社（以下「当社」）は、お客様の美と健康を最適化するサービスを提供するにあたり、個人情報の保護を最重要課題と位置づけ、以下の通りプライバシーポリシーを定めます。",
          },
          {
            heading: "収集する情報",
            body: "当社は、本サイトの利用および当社製品（LuminaSense, Chronos Pod）の使用にあたり、氏名・連絡先・住所、生体データ（肌の状態、心拍数、睡眠サイクル、栄養状態等）、デバイスの利用履歴を収集する場合があります。",
          },
          {
            heading: "利用目的",
            body: "収集した情報は、お客様に合わせたパーソナライズ調合、製品性能向上と研究開発、メンテナンスおよびカスタマーサポートのために利用します。",
          },
          {
            heading: "情報の保護と管理",
            body: "当社は、お客様の生体データを暗号化し、最高水準のセキュリティ環境下で厳重に管理します。法令に基づく場合を除き、お客様の同意なく第三者に個人情報を提供することはありません。",
          },
          {
            heading: "データの権利",
            body: "お客様は、ご自身の個人情報の開示、訂正、または削除をいつでも求めることができます。",
          },
          {
            heading: "お問い合わせ先",
            body: "プライバシーに関するお問い合わせは、本サイトのお問い合わせフォームよりご連絡ください。",
          },
        ],
      },
      terms: {
        title: "Terms of Service（利用規約）",
        subtitle: "サービス利用規約",
        sections: [
          {
            heading: "本規約について",
            body: "この利用規約（以下「本規約」）は、RE-VERSE Technologies 株式会社（以下「当社」）が提供するウェブサイトおよび製品（以下「本サービス」）の利用条件を定めるものです。",
          },
          {
            heading: "本規約への同意",
            body: "ユーザーは、本サービスを利用することにより、本規約のすべての条項に同意したものとみなされます。",
          },
          {
            heading: "製品の使用",
            body: "LuminaSense および Chronos Pod は、当社の指定する方法に従って適切に使用してください。生体解析に基づくアドバイスは健康維持を目的としており、医療行為に代わるものではありません。",
          },
          {
            heading: "知的財産権",
            body: "本サービスに関連するすべてのテキスト、デザイン（ロゴ等）、独自のアルゴリズム、テクノロジーに関する知的財産権は、すべて当社に帰属します。無断転載・複製・解析行為を禁じます。",
          },
          {
            heading: "禁止事項",
            body: "ユーザーは、虚偽の情報登録、システムの不正アクセスまたは改ざん、他のユーザーの利用を妨げる行為を行ってはなりません。",
          },
          {
            heading: "免責事項",
            body: "当社は、本サービスの利用によって生じた損害について、当社の過失による場合を除き、一切の責任を負わないものとします。また、個人の体質や環境により、期待される効果には個人差があることをご了承ください。",
          },
          {
            heading: "規約の変更",
            body: "当社は、必要に応じて本規約を変更できるものとします。変更後の規約は、本サイトに掲示した時点で効力が発生します。",
          },
          {
            heading: "準拠法・裁判管轄",
            body: "本規約の解釈にあたっては日本法を準拠法とし、東京地方裁判所を第一審の専属的合意管轄裁判所とします。",
          },
        ],
      },
    },
  },

  en: {
    meta: {
      title: "RE-VERSE | Rewrite the universe that is your body, beautifully.",
    },
    hero: {
      headline: "Make time your ally.",
      subtext: "Reversal（REVERSE）, Rebirth（REBIRTH）, and the Universe（UNIVERSE）.",
    },
    philosophy: {
      heading: "Rewrite the universe that is your body, beautifully.",
      p1: "Living in the modern world, our bodies are bound by the gravity of relentless stress and environmental change, and the radiance of our cells begins to fade.",
      p2: "RE-VERSE is not simply about returning to the past. It is a process that resets accumulated damage and awakens the vitality that has long slept within you.",
      p3: "With the light of technology, we reconstruct your inner universe into its most beautiful state.",
    },
    products: {
      lumina: {
        tagline: "The perfect drop, for you, in this very moment.",
        description:
          "AI analyzes your vitals and skin environment around the clock. On the spot, it 3D molecular-prints both ingestible and topical serums—toward skin that glows in its best condition, always.",
        features: ["AI Vital Analysis", "3D Molecular Printing", "Personalized Formulation"],
      },
      chronos: {
        tagline: "Each night you sleep, life is reborn in the cosmos.",
        description:
          "Zero-gravity posture, near-infrared therapy, and hyperbaric oxygen transform sleep into a cellular repair factory. Wake to overwhelming lightness and surging vitality.",
        features: ["Zero-Gravity Posture Control", "Near-Infrared Therapy", "Hyperbaric Oxygen Capsule"],
      },
    },
    mission: {
      statement: "Make the concept of aging a thing of the past.",
      vision: '"To become the wellness company that makes time its greatest ally."',
      values: {
        bioLogic: "Relentless innovation grounded in biological evidence is our DNA.",
        personalization: "We deliver ultimate personalization, attuned to each of your 37 trillion cells.",
        aesthetics: "We pursue beauty that is universal and refined, untouched by the whims of era.",
      },
    },
    company: {
      name: "RE-VERSE Technologies Inc.",
      established: "November 1, 2025",
      ceo: "零瀬 海斗",
      location: "5-1-1 Minami-Aoyama, Minato-ku, Tokyo 107-0062, RE-VERSE Building",
      business: [
        "Development and manufacture of AI-powered next-generation skincare devices",
        "Deployment of high-performance sleep pods based on regenerative medicine",
        "Personalized wellness solutions through biometric data analysis",
        "Research and development of biotechnology-based supplements",
      ],
    },
    footer: {
      tagline: "Rewrite the universe that is your body, beautifully.",
      newsletter: "The latest in biotechnology and RE-VERSE innovation, delivered to your inbox.",
      chatDisclaimer:
        "This chat is AI-powered guidance only. We cannot guarantee medical outcomes or purchases. Please contact us for details.",
      portfolioNote: "This site is a fictional brand created for portfolio demonstration.",
      privacy: {
        title: "Privacy Policy（プライバシーポリシー）",
        subtitle: "Personal Information Protection Policy",
        sections: [
          {
            heading: "Basic Policy",
            body: "RE-VERSE Technologies Inc. (\"the Company\") positions the protection of personal information as a top priority in providing services that optimize your beauty and health, and establishes this Privacy Policy as follows.",
          },
          {
            heading: "Information We Collect",
            body: "We may collect your name, contact details, address, biometric data (skin condition, heart rate, sleep cycles, nutritional status, etc.), and device usage history when you use this site and our products (LuminaSense, Chronos Pod).",
          },
          {
            heading: "Purpose of Use",
            body: "Collected information is used for personalized formulation tailored to you, product performance improvement and R&D, and maintenance and customer support.",
          },
          {
            heading: "Protection and Management",
            body: "We encrypt your biometric data and manage it under the highest security standards. We do not provide personal information to third parties without your consent except as required by law.",
          },
          {
            heading: "Your Rights",
            body: "You may request disclosure, correction, or deletion of your personal information at any time.",
          },
          {
            heading: "Contact",
            body: "For privacy-related inquiries, please contact us through the inquiry form on this site.",
          },
        ],
      },
      terms: {
        title: "Terms of Service（利用規約）",
        subtitle: "Terms of Service",
        sections: [
          {
            heading: "About These Terms",
            body: "These Terms of Service (\"these Terms\") set forth the conditions for use of the website and products (\"the Service\") provided by RE-VERSE Technologies Inc. (\"the Company\").",
          },
          {
            heading: "Agreement",
            body: "By using the Service, you are deemed to have agreed to all provisions of these Terms.",
          },
          {
            heading: "Product Use",
            body: "Please use LuminaSense and Chronos Pod appropriately as directed by the Company. Advice based on biometric analysis is for health maintenance purposes and does not replace medical treatment.",
          },
          {
            heading: "Intellectual Property",
            body: "All intellectual property rights related to the Service—including text, design (logos, etc.), proprietary algorithms, and technology—belong to the Company. Unauthorized reproduction, copying, or reverse engineering is prohibited.",
          },
          {
            heading: "Prohibited Conduct",
            body: "Users must not register false information, gain unauthorized access to or tamper with systems, or interfere with other users' use of the Service.",
          },
          {
            heading: "Disclaimer",
            body: "The Company shall not be liable for damages arising from use of the Service except in cases of the Company's negligence. Results may vary depending on individual constitution and environment.",
          },
          {
            heading: "Changes to Terms",
            body: "The Company may change these Terms as necessary. Revised Terms take effect when posted on this site.",
          },
          {
            heading: "Governing Law and Jurisdiction",
            body: "These Terms shall be governed by the laws of Japan. The Tokyo District Court shall have exclusive jurisdiction as the court of first instance.",
          },
        ],
      },
    },
  },

  zh: {
    meta: {
      title: "RE-VERSE | 美丽地改写，名为你身体的宇宙。",
    },
    hero: {
      headline: "来吧，让时间成为盟友。",
      subtext: "逆转（REVERSE）、再生（REBIRTH），以及宇宙（UNIVERSE）。",
    },
    philosophy: {
      heading: "美丽地改写，名为你身体的宇宙。",
      p1: "生活在现代社会，我们的身体被无尽的压力与环境变化这一「重力」所束缚，细胞的辉光正逐渐消逝。",
      p2: "RE-VERSE并非简单地回到过去，而是重置累积的损伤、唤醒沉睡生命力的过程。",
      p3: "我们以科技之光，将您内在的宇宙重建至最美的状态。",
    },
    products: {
      lumina: {
        tagline: "为此刻的您，献上完美的一滴。",
        description:
          "AI全天候解析生命体征与肌肤环境，现场3D分子打印调配「内服美容液」与「外用美容液」，引领肌肤始终处于最佳发光状态。",
        features: ["AI生命体征解析", "3D分子打印", "个性化配方"],
      },
      chronos: {
        tagline: "每夜入眠，生命于宇宙中再生。",
        description:
          "零重力姿态、近红外线疗法、高压氧，将睡眠转化为「细胞修复工厂」。醒来瞬间感受身体的极致轻盈与澎湃活力。",
        features: ["零重力姿态控制", "近红外线疗法", "高压氧舱"],
      },
    },
    mission: {
      statement: "让「衰老」这一概念成为过去。",
      vision: "「成为世界上最善于将『时间』化为盟友的健康科技公司」",
      values: {
        bioLogic: "以生物学依据为基础的不懈创新，是我们的DNA。",
        personalization: "贴近37万亿个细胞中的每一个，实现极致个性化。",
        aesthetics: "追求不受时代左右的、普遍而精致的美。",
      },
    },
    company: {
      name: "RE-VERSE Technologies 株式会社",
      established: "2025年11月1日",
      ceo: "零瀬 海斗",
      location: "〒107-0062 东京都港区南青山5-1-1 RE-VERSE大厦",
      business: [
        "AI搭载型下一代护肤设备的研发与制造",
        "基于再生医学的高性能睡眠舱推广",
        "基于生物数据解析的个性化健康方案",
        "生物技术保健品的研发",
      ],
    },
    footer: {
      tagline: "美丽地改写，名为你身体的宇宙。",
      newsletter: "将最新的生物科技与RE-VERSE创新，送达您的收件箱。",
      chatDisclaimer: "本聊天为AI指引，不构成医疗或购买承诺。详情请通过联系我们确认。",
      portfolioNote: "本网站为作品集用的虚构品牌／演示站点。",
      privacy: {
        title: "Privacy Policy（プライバシーポリシー）",
        subtitle: "个人信息保护方针",
        sections: [
          {
            heading: "基本方针",
            body: "RE-VERSE Technologies 株式会社（以下简称「本公司」）在提供优化客户美丽与健康的服务时，将个人信息保护置于最重要位置，并制定本隐私政策。",
          },
          {
            heading: "收集的信息",
            body: "在使用本网站及本公司产品（LuminaSense、Chronos Pod）时，我们可能收集姓名、联系方式、地址、生物数据（肌肤状态、心率、睡眠周期、营养状态等）及设备使用记录。",
          },
          {
            heading: "使用目的",
            body: "收集的信息用于个性化调配、产品性能提升与研发、维护及客户支持。",
          },
          {
            heading: "保护与管理",
            body: "本公司对生物数据进行加密，并在最高水准的安全环境下严格管理。除法律规定外，未经同意不向第三方提供个人信息。",
          },
          {
            heading: "数据权利",
            body: "客户可随时要求披露、更正或删除其个人信息。",
          },
          {
            heading: "联系方式",
            body: "有关隐私的咨询，请通过本网站的联系表单与我们联系。",
          },
        ],
      },
      terms: {
        title: "Terms of Service（利用規約）",
        subtitle: "服务使用条款",
        sections: [
          {
            heading: "关于本条款",
            body: "本使用条款（以下简称「本条款」）规定本公司提供的网站及产品（以下简称「本服务」）的使用条件。",
          },
          {
            heading: "同意本条款",
            body: "用户使用本服务即视为同意本条款的全部内容。",
          },
          {
            heading: "产品使用",
            body: "请按本公司指定方式正确使用 LuminaSense 及 Chronos Pod。基于生物解析的建议旨在维护健康，不能替代医疗行为。",
          },
          {
            heading: "知识产权",
            body: "与本服务相关的所有文本、设计（标志等）、专有算法及技术的知识产权均归本公司所有。禁止未经授权的转载、复制或解析。",
          },
          {
            heading: "禁止事项",
            body: "用户不得进行虚假信息注册、非法访问或篡改系统、妨碍其他用户使用本服务等行为。",
          },
          {
            heading: "免责事项",
            body: "除本公司过失外，对因使用本服务造成的损害本公司不承担责任。效果因个人体质与环境而异，敬请谅解。",
          },
          {
            heading: "条款变更",
            body: "本公司可根据需要变更本条款。变更后的条款自在本网站公布之日起生效。",
          },
          {
            heading: "准据法与管辖",
            body: "本条款的解释适用日本法，东京地方法院为第一审专属合意管辖法院。",
          },
        ],
      },
    },
  },

  th: {
    meta: {
      title: "RE-VERSE | เขียนจักรวาลที่ชื่อว่าร่างกายของคุณใหม่ อย่างงดงาม",
    },
    hero: {
      headline: "มาร่วมทำให้เวลาเป็นมิตรกับคุณ",
      subtext: "การพลิกกลับ（REVERSE）、การเกิดใหม่（REBIRTH）、และจักรวาล（UNIVERSE）",
    },
    philosophy: {
      heading: "เขียนจักรวาลที่ชื่อว่าร่างกายของคุณใหม่ อย่างงดงาม",
      p1: "ร่างกายของเราในโลกสมัยใหม่ถูกพันธนาการด้วยแรงโน้มถ่วงของความเครียดและการเปลี่ยนแปลงของสิ่งแวดล้อม จนแสงของเซลล์เริ่มจางหาย",
      p2: "RE-VERSE ไม่ใช่การกลับไปสู่อดีต แต่คือกระบวนการรีเซ็ตความเสียหายที่สะสม และปลุกพลังชีวิตที่หลับใหล",
      p3: "เราใช้แสงแห่งเทคโนโลยี เพื่อสร้างจักรวาลภายในของคุณให้กลับสู่สภาพที่งดงามที่สุด",
    },
    products: {
      lumina: {
        tagline: "หยดที่สมบูรณ์แบบ สำหรับคุณ ในขณะนี้",
        description:
          "AI วิเคราะห์ไบทัลและสภาพผิวตลอด 24 ชั่วโมง ผสมเซรั่มทาผิวและดื่มด้วยการพิมพ์โมเลกุล 3 มิติในทันที สู่ผิวที่เปล่งประกายในสภาพที่ดีที่สุดเสมอ",
        features: ["การวิเคราะห์ไบทัลด้วย AI", "การพิมพ์โมเลกุล 3 มิติ", "สูตรเฉพาะบุคคล"],
      },
      chronos: {
        tagline: "ทุกครั้งที่หลับ ชีวิตก็เกิดใหม่ในจักรวาล",
        description:
          "ท่าศูนย์แรง การบำบัดด้วยแสงอินฟราเรดใกล้ และออกซิเจนแรงดันสูง เปลี่ยนการนอนหลับให้เป็นโรงงานซ่อมเซลล์ ตื่นขึ้นพร้อมความเบาสบายและพลังที่พลุ่งพล่าน",
        features: ["ควบคุมท่าศูนย์แรง", "การบำบัดด้วยแสงอินฟราเรดใกล้", "แคปซูลออกซิเจนแรงดันสูง"],
      },
    },
    mission: {
      statement: "ทำให้แนวคิดเรื่องความแก่กลายเป็นอดีต",
      vision: '"สู่การเป็นบริษัทเวลเนสที่ทำให้ "เวลา" เป็นมิตรที่สุดในโลก"',
      values: {
        bioLogic: "นวัตกรรมไม่หยุดยั้งบนพื้นฐานหลักฐานทางชีววิทยา คือ DNA ของเรา",
        personalization: "เราส่งมอบการปรับให้เหมาะสมขั้นสูงสุด ให้กับทุกเซลล์ใน 37 ล้านล้านเซลล์ของคุณ",
        aesthetics: "เราแสวงหาความงามที่เป็นเอกภาพและประณีต ไม่ถูกจำกัดด้วยยุคสมัย",
      },
    },
    company: {
      name: "RE-VERSE Technologies 株式会社",
      established: "1 พฤศจิกายน 2025",
      ceo: "零瀬 海斗",
      location: "5-1-1 Minami-Aoyama, Minato-ku, Tokyo 107-0062 อาคาร RE-VERSE",
      business: [
        "พัฒนาและผลิตอุปกรณ์ดูแลผิวรุ่นใหม่ที่ขับเคลื่อนด้วย AI",
        "ขยายการใช้งาน Sleep Pod ประสิทธิภาพสูงบนพื้นฐานเวชศาสตร์ฟื้นฟู",
        "โซลูชันเวลเนสเฉพาะบุคคลจากการวิเคราะห์ข้อมูลชีวภาพ",
        "วิจัยและพัฒนาอาหารเสริมด้วยเทคโนโลยีชีวภาพ",
      ],
    },
    footer: {
      tagline: "เขียนจักรวาลที่ชื่อว่าร่างกายของคุณใหม่ อย่างงดงาม",
      newsletter: "นวัตกรรมไบโอเทคโนโลยีและ RE-VERSE ล่าสุด ส่งตรงถึงกล่องจดหมายของคุณ",
      chatDisclaimer:
        "แชทนี้เป็นการให้ข้อมูลโดย AI เท่านั้น ไม่รับประกันผลทางการแพทย์หรือการซื้อ โปรดติดต่อเราสำหรับรายละเอียด",
      portfolioNote: "เว็บไซต์นี้เป็นแบรนด์สมมติสำหรับผลงานพอร์ตโฟลิโอ／เดโม",
      privacy: {
        title: "Privacy Policy（プライバシーポリシー）",
        subtitle: "นโยบายการคุ้มครองข้อมูลส่วนบุคคล",
        sections: [
          {
            heading: "นโยบายพื้นฐาน",
            body: "RE-VERSE Technologies 株式会社 (\"บริษัท\") ให้ความสำคัญสูงสุดกับการคุ้มครองข้อมูลส่วนบุคคลในการให้บริการที่ปรับความงามและสุขภาพของลูกค้าให้เหมาะสม และกำหนดนโยบายความเป็นส่วนตัวนี้",
          },
          {
            heading: "ข้อมูลที่เก็บรวบรวม",
            body: "เราอาจเก็บชื่อ ข้อมูลติดต่อ ที่อยู่ ข้อมูลชีวภาพ (สภาพผิว อัตราการเต้นหัวใจ วงจรการนอน สภาพโภชนาการ ฯลฯ) และประวัติการใช้งานอุปกรณ์เมื่อใช้เว็บไซต์และผลิตภัณฑ์ (LuminaSense, Chronos Pod)",
          },
          {
            heading: "วัตถุประสงค์การใช้",
            body: "ข้อมูลที่เก็บรวบรวมใช้เพื่อการผสมสูตรเฉพาะบุคคล การพัฒนาประสิทธิภาพผลิตภัณฑ์และการวิจัย รวมถึงการบำรุงรักษาและการสนับสนุนลูกค้า",
          },
          {
            heading: "การปกป้องและการจัดการ",
            body: "เราเข้ารหัสข้อมูลชีวภาพและจัดการภายใต้มาตรฐานความปลอดภัยสูงสุด เราจะไม่เปิดเผยข้อมูลส่วนบุคคลแก่บุคคลที่สามโดยไม่ได้รับความยินยอม เว้นแต่กฎหมายกำหนด",
          },
          {
            heading: "สิทธิของข้อมูล",
            body: "คุณสามารถขอเปิดเผย แก้ไข หรือลบข้อมูลส่วนบุคคลของคุณได้ตลอดเวลา",
          },
          {
            heading: "ติดต่อ",
            body: "สำหรับคำถามเกี่ยวกับความเป็นส่วนตัว กรุณาติดต่อผ่านแบบฟอร์มสอบถามบนเว็บไซต์นี้",
          },
        ],
      },
      terms: {
        title: "Terms of Service（利用規約）",
        subtitle: "ข้อกำหนดการใช้บริการ",
        sections: [
          {
            heading: "เกี่ยวกับข้อกำหนด",
            body: "ข้อกำหนดการใช้บริการนี้ (\"ข้อกำหนด\") กำหนดเงื่อนไขการใช้เว็บไซต์และผลิตภัณฑ์ (\"บริการ\") ที่ RE-VERSE Technologies 株式会社 (\"บริษัท\") จัดให้",
          },
          {
            heading: "การยอมรับข้อกำหนด",
            body: "การใช้บริการถือว่าผู้ใช้ยอมรับข้อกำหนดทั้งหมด",
          },
          {
            heading: "การใช้ผลิตภัณฑ์",
            body: "กรุณาใช้ LuminaSense และ Chronos Pod ตามที่บริษัทกำหนด คำแนะนำจากการวิเคราะห์ชีวภาพมีวัตถุประสงค์เพื่อสุขภาพ ไม่ใช่ทดแทนการรักษาทางการแพทย์",
          },
          {
            heading: "ทรัพย์สินทางปัญญา",
            body: "สิทธิในทรัพย์สินทางปัญญาที่เกี่ยวข้องกับบริการทั้งหมด รวมถึงข้อความ การออกแบบ (โลโก้ ฯลฯ) อัลกอริทึม และเทคโนโลยี เป็นของบริษัท ห้ามคัดลอกหรือวิเคราะห์โดยไม่ได้รับอนุญาต",
          },
          {
            heading: "ข้อห้าม",
            body: "ผู้ใช้ต้องไม่ลงทะเบียนข้อมูลเท็จ เข้าถึงหรือแก้ไขระบบโดยมิชอบ หรือรบกวนการใช้งานของผู้อื่น",
          },
          {
            heading: "ข้อจำกัดความรับผิด",
            body: "บริษัทไม่รับผิดชอบต่อความเสียหายจากการใช้บริการ เว้นแต่เกิดจากความผิดของบริษัท ผลลัพธ์อาจแตกต่างกันตามสภาพร่างกายและสิ่งแวดล้อมของแต่ละบุคคล",
          },
          {
            heading: "การเปลี่ยนแปลงข้อกำหนด",
            body: "บริษัทอาจเปลี่ยนแปลงข้อกำหนดตามความจำเป็น ข้อกำหนดที่แก้ไขมีผลเมื่อประกาศบนเว็บไซต์นี้",
          },
          {
            heading: "กฎหมายและเขตอำนาจศาล",
            body: "ข้อกำหนดนี้อยู่ภายใต้กฎหมายญี่ปุ่น ศาลแขวงโตเกียวมีเขตอำนาจศาลเฉพาะในชั้นต้น",
          },
        ],
      },
    },
  },
};
