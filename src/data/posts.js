import { quantoCostaSitoWebPost } from './articles/quanto-costa-sito-web';
import { quantoCostaSitoWebPostEn } from './articles/quanto-costa-sito-web-en';
import { cinqueSegnaliSitoPerdereClientiPost } from './articles/5-segnali-sito-perdere-clienti';
import { cinqueSegnaliSitoPerdereClientiPostEn } from './articles/5-segnali-sito-perdere-clienti-en';
import { sitoClientiLocaliPost } from './articles/sito-clienti-locali';
import { sitoClientiLocaliPostEn } from './articles/sito-clienti-locali-en';
import { sitoFaiDaTeVsProfessionalePost } from './articles/sito-fai-da-te-vs-professionale';
import { sitoFaiDaTeVsProfessionalePostEn } from './articles/sito-fai-da-te-vs-professionale-en';
import { guidaTipoSitoGiustoPost } from './articles/guida-tipo-sito-giusto';
import { guidaTipoSitoGiustoPostEn } from './articles/guida-tipo-sito-giusto-en';

export const blogPosts = [
  {
    id: "guida-tipo-sito-giusto",
    it: guidaTipoSitoGiustoPost,
    en: guidaTipoSitoGiustoPostEn
  },
  {
    id: "sito-fai-da-te-vs-professionale",
    it: sitoFaiDaTeVsProfessionalePost,
    en: sitoFaiDaTeVsProfessionalePostEn
  },
  {
    id: "sito-clienti-locali",
    it: sitoClientiLocaliPost,
    en: sitoClientiLocaliPostEn
  },
  {
    id: "5-segnali-sito-perdere-clienti",
    it: cinqueSegnaliSitoPerdereClientiPost,
    en: cinqueSegnaliSitoPerdereClientiPostEn
  },
  {
    id: "quanto-costa-sito-web",
    it: quantoCostaSitoWebPost,
    en: quantoCostaSitoWebPostEn
  }
];
