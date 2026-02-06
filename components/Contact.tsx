import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Section } from '../types';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate sending email (In a real app, use EmailJS, Formspree, or a backend API)
    console.log('Sending email to Elton...', formState);
    
    // You could also open the user's email client
    // window.location.href = `mailto:info@eltonbrahja.com?subject=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent(formState.message)}`;

    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id={Section.CONTACT} className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Lavoriamo Insieme</h2>
              <div className="w-20 h-1 bg-accent rounded-full mb-6"></div>
              <p className="text-muted text-lg">
                Hai un progetto in mente? Cerchi una consulenza grafica o tecnica? 
                Compila il modulo per richiedere un preventivo o semplicemente per salutarmi.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-accent shrink-0 border border-slate-700">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <a href="mailto:info@eltonbrahja.com" className="text-muted hover:text-accent transition-colors">info@eltonbrahja.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-accent shrink-0 border border-slate-700">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Telefono</h4>
                  <a href="tel:+393331234567" className="text-muted hover:text-accent transition-colors">+39 333 123 4567</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-accent shrink-0 border border-slate-700">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Sede</h4>
                  <p className="text-muted">Milano, Italia (Disponibile da remoto)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Nome</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-white outline-none transition-all placeholder:text-slate-600"
                    placeholder="Il tuo nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={e => setFormState({...formState, email: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-white outline-none transition-all placeholder:text-slate-600"
                    placeholder="email@esempio.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">Oggetto</label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formState.subject}
                  onChange={e => setFormState({...formState, subject: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-white outline-none transition-all placeholder:text-slate-600"
                  placeholder="Richiesta Preventivo / Informazioni"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Messaggio</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-white outline-none transition-all placeholder:text-slate-600 resize-none"
                  placeholder="Descrivi brevemente il tuo progetto..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                className={`w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${
                  status === 'success' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-accent text-slate-900 hover:bg-sky-300'
                }`}
              >
                {status === 'sending' ? (
                  'Invio in corso...'
                ) : status === 'success' ? (
                  'Messaggio Inviato!'
                ) : (
                  <>Invia Messaggio <Send size={18} /></>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;