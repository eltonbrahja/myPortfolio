import React from 'react';
import { SERVICES } from '../constants';
import { Layout, Palette, PenTool } from 'lucide-react';
import { Section } from '../types';

const IconMap: Record<string, React.FC<any>> = {
  layout: Layout,
  palette: Palette,
  'pen-tool': PenTool,
};

const Services: React.FC = () => {
  return (
    <section id={Section.SERVICES} className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">I Miei Servizi</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-muted mt-4 max-w-2xl mx-auto">
            Offro soluzioni digitali complete, dalla progettazione grafica allo sviluppo web avanzato, per far crescere il tuo business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = IconMap[service.icon];
            return (
              <div 
                key={service.id} 
                className="group p-8 bg-slate-900 rounded-2xl border border-slate-700 hover:border-accent transition-colors duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-[100px] -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500"></div>
                
                <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-slate-900 transition-colors duration-300">
                  <Icon size={32} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-muted leading-relaxed group-hover:text-slate-300 transition-colors">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;