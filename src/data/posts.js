import { quantoCostaSitoWebPost } from './articles/quanto-costa-sito-web';
import { quantoCostaSitoWebPostEn } from './articles/quanto-costa-sito-web-en';
import { cinqueSegnaliSitoPerdereClientiPost } from './articles/5-segnali-sito-perdere-clienti';
import { cinqueSegnaliSitoPerdereClientiPostEn } from './articles/5-segnali-sito-perdere-clienti-en';
import { sitoClientiLocaliPost } from './articles/sito-clienti-locali';
import { sitoClientiLocaliPostEn } from './articles/sito-clienti-locali-en';

export const blogPosts = [
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

