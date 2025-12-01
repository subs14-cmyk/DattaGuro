import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950 z-0" />
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-600/30 rounded-full blur-[100px] opacity-50" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600/30 rounded-full blur-[100px] opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold mb-6">
            Next Generation Digital Agency
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Scale Your Brand with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Intelligent Marketing
            </span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 mb-10">
            We fuse creative storytelling with data-driven strategy to build automated workflows, optimize SEO, and dominate social channels.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-slate-950 font-bold rounded-lg hover:bg-slate-200 transition-all flex items-center gap-2"
            >
              Start Your Project <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-transparent border border-slate-700 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all"
            >
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-slate-500" />
      </div>
    </section>
  );
};