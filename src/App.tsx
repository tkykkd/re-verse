/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from "motion/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import Products from "./components/Products";
import MissionValues from "./components/MissionValues";
import Company from "./components/Company";
import Footer from "./components/Footer";
import DifyChatEmbed from "./components/DifyChatEmbed";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div id="home" className="relative min-h-screen selection:bg-universe-teal selection:text-universe-midnight">
      {/* Custom Cursor/Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-universe-teal origin-left z-50"
        style={{ scaleX }}
      />
      
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-universe-teal/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/10 blur-[120px]" />
      </div>

      <Header />
      
      <main className="relative z-10">
        <Hero />
        <Philosophy />
        <Products />
        <MissionValues />
        <Company />
      </main>

      <Footer />
      <DifyChatEmbed />
    </div>
  );
}

