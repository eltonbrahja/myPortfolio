# Sistema di Prenotazione Appuntamenti 📅

## 🚀 Cosa fa questo progetto?

Ho sviluppato questa applicazione per semplificare la vita a chiunque offra servizi su appuntamento. Ecco le funzionalità principali:

- **Prenotazione Intuitiva**: Un'interfaccia pulita dove gli utenti selezionano il giorno dal calendario e vedono solo gli slot orari effettivamente disponibili.
- **Dashboard Amministratore**: Un'area riservata per gestire le prenotazioni ricevute e impostare i propri orari di lavoro.
- **Sincronizzazione Google Calendar**: Le prenotazioni non restano solo sul sito, ma vengono sincronizzate con Google Calendar per non perdere mai un impegno.
- **Gestione Disponibilità**: Possibilità di definire giorni lavorativi, pause e durata degli appuntamenti.

## 🛠️ Tech Stack

Per rendere l'app veloce, sicura e moderna, ho scelto queste tecnologie:

- **Framework**: [Next.js 14+](https://nextjs.org/) (App Router) per il massimo delle performance.
- **Database & Auth**: [Supabase](https://supabase.com/) per la gestione dei dati in tempo reale e l'autenticazione sicura.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) per un design responsive e premium.
- **Integrazioni**: [Google Calendar API](https://developers.google.com/calendar) per la sincronizzazione degli eventi.
- **Linguaggio**: [TypeScript](https://www.typescriptlang.org/) per un codice robusto e facile da mantenere.

## 🏁 Come iniziare

Se vuoi provare il progetto localmente:

1. **Clona la repository**:
   ```bash
   git clone https://github.com/eltonbrahja/sistema-prenotazione.git
   ```

2. **Installa le dipendenze**:
   ```bash
   npm install
   ```

3. **Configura le variabili d'ambiente**:
   Crea un file `.env.local` e aggiungi le chiavi di Supabase e le credenziali di Google Cloud.

4. **Avvia il server di sviluppo**:
   ```bash
   npm run dev
   ```
   L'app sarà disponibile su [http://localhost:3000](http://localhost:3000).

---


Creato da [Elton](https://github.com/eltonbrahja)
