import { progettareUserJourneyPost } from './articles/progettare-user-journey-conversione';
import { progettareUserJourneyPostEn } from './articles/progettare-user-journey-conversione-en';
import { smettilaIncolpareAiPost } from './articles/smettila-incolpare-ai';
import { smettilaIncolpareAiPostEn } from './articles/smettila-incolpare-ai-en';
import { hostingGratuitoPost } from './articles/hosting-gratuito';
import { hostingGratuitoPostEn } from './articles/hosting-gratuito-en';
import { githubCopilotOptOutPost } from './articles/github-copilot-opt-out';
import { githubCopilotOptOutPostEn } from './articles/github-copilot-opt-out-en';
import { vercelCoseComeFunzionaPost } from './articles/vercel-cose-come-funziona';
import { vercelCoseComeFunzionaPostEn } from './articles/vercel-cose-come-funziona-en';
import { vantaggiUxDesignPost } from './articles/vantaggi-ux-design';
import { vantaggiUxDesignPostEn } from './articles/vantaggi-ux-design-en';
import { ilSegretoUiDesignPost } from './articles/il-segreto-ui-design';
import { ilSegretoUiDesignPostEn } from './articles/il-segreto-ui-design-en';
import { mobileOptimizationPost } from './articles/mobile-optimization';
import { mobileOptimizationPostEn } from './articles/mobile-optimization-en';

export const blogPosts = [
  {
    id: "progettare-user-journey-conversione",
    it: progettareUserJourneyPost,
    en: progettareUserJourneyPostEn
  },
  {
    id: "mobile-optimization",
    it: mobileOptimizationPost,
    en: mobileOptimizationPostEn
  },
  {
    id: "il-segreto-ui-design",
    it: ilSegretoUiDesignPost,
    en: ilSegretoUiDesignPostEn
  },
  {
    id: "vantaggi-ux-design",
    it: vantaggiUxDesignPost,
    en: vantaggiUxDesignPostEn
  },
  {
    id: "vercel-cose-come-funziona",
    it: vercelCoseComeFunzionaPost,
    en: vercelCoseComeFunzionaPostEn
  },
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
