import React from "react";
import { motion } from "motion/react";
import Logo from "./Logo";

export default function Header() {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-40 bg-universe-midnight/80 backdrop-blur-md border-b border-white/5"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Logo />
        
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="#philosophy">PHILOSOPHY</NavLink>
          <NavLink href="#products">PRODUCTS</NavLink>
          <NavLink href="#mission">MISSION</NavLink>
          <NavLink href="#company">COMPANY</NavLink>
        </nav>

        <motion.button 
          className="px-6 py-2 border border-universe-teal/50 text-universe-teal text-xs tracking-widest hover:bg-universe-teal hover:text-universe-midnight transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          CONTACT
        </motion.button>
      </div>
    </motion.header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      className="text-[10px] tracking-[0.3em] text-universe-silver hover:text-universe-teal transition-colors font-medium"
    >
      {children}
    </a>
  );
}
