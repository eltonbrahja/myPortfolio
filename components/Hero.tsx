import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { Section } from '../types';

const Hero: React.FC = () => {
  const scrollToPortfolio = () => {
    document.getElementById(Section.PORTFOLIO)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id={Section.HOME} className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-left space-y-6 animate-slide-up">
          <div className="inline-block px-4 py-2 bg-slate-800 rounded-full border border-slate-700">
            <span className="text-accent font-medium text-sm tracking-wide">WEB DEVELOPER & GRAPHIC DESIGNER</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
            Ciao, sono <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">Elton</span>.
            <br />
            Creo esperienze digitali.
          </h1>
          
          <p className="text-lg text-muted max-w-lg leading-relaxed">
            Unisco design creativo e codice pulito per costruire siti web che lasciano il segno. Trasformiamo la tua visione in una realtà interattiva.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={scrollToPortfolio}
              className="px-8 py-3 bg-accent text-slate-900 font-bold rounded-lg hover:bg-sky-300 transition-all flex items-center justify-center gap-2 group"
            >
              Vedi i miei lavori
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="#contact"
              className="px-8 py-3 border border-slate-700 text-white font-medium rounded-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
            >
              Contattami
            </a>
          </div>
        </div>

        <div className="relative hidden md:block animate-fade-in delay-200">
          <div className="relative z-10 w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800/50 backdrop-blur-sm group">
            {/* Abstract representation of code/design */}
             <img 
              src="https://picsum.photos/800/800?grayscale" 
              alt="Elton Brahja"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
          </div>
          
          {/* Decorative floating cards */}
          <div className="absolute -bottom-6 -left-6 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500/20 text-green-400 rounded-lg flex items-center justify-center">
                <Code size={20} />
              </div>
              <div>
                <p className="text-xs text-muted">Esperienza</p>
                <p className="font-bold text-white">5+ Anni</p>
              </div>
            </div>
          </div>

          <div className="absolute top-10 -right-6 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
             <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-500/20 text-purple-400 rounded-lg flex items-center justify-center">
                <Download size={20} />
              </div>
              <div>
                <p className="text-xs text-muted">Progetti</p>
                <p className="font-bold text-white">100+ Completati</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Simple Icon component used above that was missed in imports
import { Code } from 'lucide-react';

export default Hero;