import React from 'react';
import { PenTool, Share2, Search, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 'copy',
    title: 'Copywriting',
    description: 'Persuasive narratives that turn visitors into loyal customers. From landing pages to email sequences, we craft words that sell.',
    icon: <PenTool className="w-8 h-8 text-pink-400" />,
    color: 'group-hover:bg-pink-500/10 group-hover:border-pink-500/50'
  },
  {
    id: 'social',
    title: 'Social Strategy',
    description: 'Data-backed content calendars and community management to grow your presence on LinkedIn, Instagram, and X.',
    icon: <Share2 className="w-8 h-8 text-blue-400" />,
    color: 'group-hover:bg-blue-500/10 group-hover:border-blue-500/50'
  },
  {
    id: 'seo',
    title: 'SEO Optimization',
    description: 'Climb the rankings with technical audits, keyword research, and high-quality backlink strategies.',
    icon: <Search className="w-8 h-8 text-emerald-400" />,
    color: 'group-hover:bg-emerald-500/10 group-hover:border-emerald-500/50'
  },
  {
    id: 'automation',
    title: 'Workflow Automation',
    description: 'Save hundreds of hours by integrating your CRM, email, and project management tools with custom AI agents.',
    icon: <Cpu className="w-8 h-8 text-purple-400" />,
    color: 'group-hover:bg-purple-500/10 group-hover:border-purple-500/50'
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-950 relative">
       {/* Decorative subtle grid */}
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Expertise</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Comprehensive digital solutions designed to accelerate growth and maximize ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`group p-8 rounded-2xl border border-slate-800 bg-slate-900/50 transition-all duration-300 hover:-translate-y-2 ${service.color}`}
            >
              <div className="mb-6 p-4 rounded-xl bg-slate-950 inline-block border border-slate-800 group-hover:border-white/10">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};