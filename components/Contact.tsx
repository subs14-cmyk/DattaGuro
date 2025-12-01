import React, { useState } from 'react';
import { Send, Calendar, Mail, MapPin, AlertCircle, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Strategy',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch("https://formspree.io/f/mzznzndy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', service: 'Strategy', message: '' });
        // Reset status after 5 seconds so user can send another message if needed
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Let's build something extraordinary.</h2>
            <p className="text-slate-400 mb-10 text-lg">
              Ready to automate your workflow or scale your social reach? Fill out the form or book a direct consultation call.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email Us</h4>
                  <p className="text-slate-400">hello@dattaguro.agency</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">HQ</h4>
                  <p className="text-slate-400">San Francisco, CA & Remote Worldwide</p>
                </div>
              </div>

              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-indigo-900/40 to-slate-900 border border-indigo-500/20">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <Calendar className="w-5 h-5" /> Direct Booking
                </h4>
                <p className="text-slate-400 text-sm mb-4">
                  Skip the email tag. Schedule a free 15-minute discovery call with our lead strategist.
                </p>
                <button className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors">
                  Book a Call
                </button>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="glass-panel p-8 rounded-3xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-slate-300">Interested In</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                >
                  <option value="Strategy">Social Strategy</option>
                  <option value="SEO">SEO Optimization</option>
                  <option value="Copywriting">Copywriting</option>
                  <option value="Automation">Workflow Automation</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="Tell us about your goals..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
                className={`w-full py-4 rounded-lg font-bold text-white transition-all flex items-center justify-center gap-2
                  ${status === 'success' ? 'bg-green-600 hover:bg-green-700' : ''}
                  ${status === 'error' ? 'bg-red-600 hover:bg-red-700' : ''}
                  ${status === 'idle' ? 'bg-white text-slate-950 hover:bg-slate-200' : ''}
                  ${status === 'submitting' ? 'bg-slate-700 opacity-70 cursor-wait' : ''}
                `}
              >
                {status === 'submitting' && 'Sending...'}
                {status === 'success' && <>Message Sent <CheckCircle className="w-5 h-5" /></>}
                {status === 'error' && <>Failed to Send <AlertCircle className="w-5 h-5" /></>}
                {status === 'idle' && <>Send Message <Send className="w-4 h-4" /></>}
              </button>
              
              {status === 'error' && (
                <p className="text-red-400 text-sm text-center">Something went wrong. Please try again later.</p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};