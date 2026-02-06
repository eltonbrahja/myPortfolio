# Elton Brahja | Personal Portfolio

![Project Status](https://img.shields.io/badge/status-live-success?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)

> **"Il tuo sito non deve solo esistere, deve performare."**

Questo repository contiene il codice sorgente del mio portfolio personale. Il progetto è stato sviluppato con un approccio **"Scientifico & No-Bloat"**: l'obiettivo era creare una piattaforma estremamente performante, accessibile e priva di dipendenze superflue.

🔗 **Live Demo:** [https://eltonbrahja.eu/](https://eltonbrahja.eu/)

---

## ⚡ Caratteristiche Principali

Il sito è progettato per garantire il massimo punteggio sui Core Web Vitals e un'esperienza utente fluida.

* **Architettura Zero-Framework:** Nessun utilizzo di librerie pesanti come React o Vue. Solo HTML5 semantico e JavaScript Vanilla.
* **Styling Utility-First:** Utilizzo di **Tailwind CSS** per un design system coerente e dark-mode nativo.
* **Performance Optimization:**
    * Caricamento asincrono delle risorse.
    * Configurazione `.htaccess` avanzata per GZIP compression e Browser Caching.
    * Immagini ottimizzate e lazy-loading.
* **Privacy Compliant:** Sistema di gestione cookie leggero e proprietario (no plugin di terze parti).
* **Interfaccia Interattiva:** Animazioni CSS custom, scroll-snap per la sezione portfolio e micro-interazioni SVG.

---

## 🛠️ Tech Stack

| Categoria | Tecnologia | Note |
| :--- | :--- | :--- |
| **Core** | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) | Semantica e SEO oriented |
| **Styling** | ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) | Design System |
| **Scripting** | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | Logica UI e validazione form |
| **Backend** | ![Formspree](https://img.shields.io/badge/Formspree-Red?style=flat) | Gestione serverless delle email |
| **Icons** | ![Lucide](https://img.shields.io/badge/Lucide_Icons-blue?style=flat) | Iconografia vettoriale leggera |

---

## 📂 Struttura del Progetto

```text
/
├── index.html          # Entry point principale (Single Page Application like)
├── privacy.html        # Pagina legale compliant GDPR
├── .htaccess           # Configurazione Server (Security, Headers, Caching)
├── portfolio-*.jpg     # Asset ottimizzati per la sezione progetti
├── video-hero.mp4      # Background video ottimizzato
└── README.md           # Documentazione
