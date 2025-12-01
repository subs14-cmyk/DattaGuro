import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'CMO',
    company: 'TechFlow',
    content: "Datta Guro transformed our online presence. Our lead generation increased by 200% in just 3 months. The team's attention to detail is unmatched.",
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Founder',
    company: 'Nexus Startups',
    content: "The workflow automation they implemented saved us 20+ hours a week. It's like having an extra employee without the overhead. Incredible ROI.",
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: '3',
    name: 'Jessica Williams',
    role: 'Director of Sales',
    company: 'Global Ventures',
    content: "Their SEO strategy is unmatched. We are finally ranking on page 1 for our key competitive terms. Highly recommend their services.",
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150'
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Client Success Stories</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what industry leaders are saying about Datta Guro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-900/40 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl hover:border-indigo-500/30 transition-colors group"
            >
              <div className="mb-6">
                <Quote className="w-10 h-10 text-indigo-500/20 group-hover:text-indigo-500/40 transition-colors" />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-slate-300 mb-8 leading-relaxed">"{item.content}"</p>

              <div className="flex items-center gap-4">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-slate-700"
                />
                <div>
                  <h4 className="text-white font-semibold text-sm">{item.name}</h4>
                  <p className="text-slate-500 text-xs">{item.role}, {item.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};