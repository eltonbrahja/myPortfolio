import React from 'react';
import { Section } from '../types';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id={Section.ABOUT} className="py-24 bg-primary text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1 animate-slide-up">
            <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-slate-700 shadow-2xl aspect-[4/5] md:aspect-square max-w-md mx-auto">
               <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80"
                alt="Elton Brahja"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-accent rounded-2xl -z-0 hidden md:block"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl -z-0"></div>
          </div>

          <div className="space-y-6 order-1 md:order-2">
             <div className="animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Chi Sono</h2>
                <div className="w-20 h-1 bg-accent rounded-full"></div>
             </div>
             
             <div className="space-y-4 text-muted text-lg leading-relaxed">
               <p>
                 Ciao! Sono <strong>Elton Brahja</strong>, un Web Developer e Graphic Designer appassionato con sede in Italia. 
                 Con anni di esperienza nel settore digitale, aiuto aziende e professionisti a costruire una presenza online solida e visivamente accattivante.
               </p>
               
               <p>
                 Il mio approccio combina la precisione tecnica dello sviluppo web con la creatività del design grafico. 
                 Non creo solo siti web; costruisco esperienze digitali che comunicano il valore del tuo brand e convertono i visitatori in clienti.
               </p>
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
               {[
                 "Sviluppo Web Full Stack",
                 "UI/UX Design Intuitivo",
                 "Brand Identity Forte",
                 "Ottimizzazione SEO",
                 "Responsive Design",
                 "Supporto Continuo"
               ].map((item, index) => (
                 <div key={index} className="flex items-center gap-3">
                   <CheckCircle2 className="text-accent shrink-0" size={20} />
                   <span className="text-slate-300">{item}</span>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;