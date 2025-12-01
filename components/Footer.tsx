import React from 'react';
import { Twitter, Linkedin, Instagram, Rocket } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
              <Rocket className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-xl text-white">
              Datta<span className="text-indigo-500">Guro</span>
            </span>
          </div>

          {/* Socials */}
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
          </div>

          {/* Copyright */}
          <div className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Datta Guro Agency. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};