import { smettilaIncolpareAiPost } from './articles/smettila-incolpare-ai';
import { smettilaIncolpareAiPostEn } from './articles/smettila-incolpare-ai-en';
import { hostingGratuitoPost } from './articles/hosting-gratuito';
import { hostingGratuitoPostEn } from './articles/hosting-gratuito-en';
import { githubCopilotOptOutPost } from './articles/github-copilot-opt-out';
import { githubCopilotOptOutPostEn } from './articles/github-copilot-opt-out-en';

export const blogPosts = [
  {
    id: "smettila-incolpare-ai-sito-web-mediocre",
    it: smettilaIncolpareAiPost,
    en: smettilaIncolpareAiPostEn
  },
  {
    id: "github-copilot-opt-out",
    it: githubCopilotOptOutPost,
    en: githubCopilotOptOutPostEn
  },
  {
    id: "hosting-gratuito-github-vercel",
    it: hostingGratuitoPost,
    en: hostingGratuitoPostEn
  }
];
