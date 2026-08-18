export const LOCALES = ["en", "ru", "pt"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export type CategoryKey =
  | "blockchain-infrastructure"
  | "crypto-basics"
  | "investing-finance"
  | "prop-trading"
  | "risk-psychology"
  | "technical-analysis"
  | "trading-strategies"
  | "success-stories";

type Dictionary = {
  blogTitle: string;
  blogSubtitle: string;
  backLinkLabel: string;
  tocTitle: string;
  allCategory: string;
  readingTimeSuffix: string;
  startChallenge: string;
  watchLabel: string;
  categories: Record<CategoryKey, string>;
  finalPromo: {
    title: string;
    description: string;
    buttonText: string;
    buttonUrl: string;
  };
};

export const dictionary: Record<Locale, Dictionary> = {
  en: {
    blogTitle: "Blog",
    blogSubtitle:
      "If you have any questions, we will do our best to find answers for you.",
    backLinkLabel: "Hash Hedge Blog",
    tocTitle: "Contents",
    allCategory: "All",
    readingTimeSuffix: "min read",
    startChallenge: "Start Your Challenge",
    watchLabel: "WATCH",
    categories: {
      "blockchain-infrastructure": "Blockchain & Infrastructure",
      "crypto-basics": "Crypto Basics",
      "investing-finance": "Investing & Finance",
      "prop-trading": "Prop Trading",
      "risk-psychology": "Risk & Psychology",
      "technical-analysis": "Technical Analysis",
      "trading-strategies": "Trading Strategies",
      "success-stories": "Success stories",
    },
    finalPromo: {
      title: "Ready to trade with a prop firm's capital?",
      description:
        "Hash Hedge is a prop trading platform that gives traders access to up to **$150,000** in funding and allows them to keep up to **90% of their profits**, paid directly in USDT.",
      buttonText: "Start Your Challenge",
      buttonUrl:
        "https://www.hashhedge.com?utm_source=blog&utm_medium=blog&utm_campaign=article",
    },
  },
  ru: {
    blogTitle: "Блог",
    blogSubtitle:
      "Если у вас есть вопросы, мы сделаем всё возможное, чтобы найти для вас ответы.",
    backLinkLabel: "Hash Hedge Blog",
    tocTitle: "Содержание",
    allCategory: "Все",
    readingTimeSuffix: "мин чтения",
    startChallenge: "Начать челлендж",
    watchLabel: "СМОТРЕТЬ",
    categories: {
      "blockchain-infrastructure": "Блокчейн и инфраструктура",
      "crypto-basics": "Основы криптовалют",
      "investing-finance": "Инвестиции и финансы",
      "prop-trading": "Проп-трейдинг",
      "risk-psychology": "Риск и психология",
      "technical-analysis": "Технический анализ",
      "trading-strategies": "Торговые стратегии",
      "success-stories": "Истории успеха",
    },
    finalPromo: {
      title: "Готовы торговать на капитале проп-фирмы?",
      description:
        "Hash Hedge — проп-трейдинговая платформа. Получите фондирование до **$150 000** и выводите до **90% прибыли** в USDT прямо на свой кошелёк.",
      buttonText: "Начать челлендж",
      buttonUrl:
        "http://app.hashhedge.live/?utm_source=blog&utm_medium=blog&utm_campaign=article",
    },
  },
  pt: {
    blogTitle: "Blog",
    blogSubtitle:
      "Se você tiver alguma dúvida, faremos o possível para encontrar respostas para você.",
    backLinkLabel: "Hash Hedge Blog",
    tocTitle: "Conteúdo",
    allCategory: "Todos",
    readingTimeSuffix: "min de leitura",
    startChallenge: "Comece seu Challenge",
    watchLabel: "ASSISTIR",
    categories: {
      "blockchain-infrastructure": "Blockchain e Infraestrutura",
      "crypto-basics": "Fundamentos de Cripto",
      "investing-finance": "Investimentos e Finanças",
      "prop-trading": "Prop Trading",
      "risk-psychology": "Risco e Psicologia",
      "technical-analysis": "Análise Técnica",
      "trading-strategies": "Estratégias de Trading",
      "success-stories": "Histórias de Sucesso",
    },
    finalPromo: {
      title: "Pronto para operar com o capital de uma prop firm?",
      description:
        "A Hash Hedge é uma plataforma de prop trading que oferece aos traders acesso a até **US$150.000** em funding e permite ficar com até **90% dos lucros**, pagos diretamente em USDT.",
      buttonText: "Comece seu Challenge",
      buttonUrl:
        "https://www.hashhedge.com/pt?utm_source=blog&utm_medium=blog&utm_campaign=article",
    },
  },
};

const MONTHS: Record<Locale, string[]> = {
  en: [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ],
  ru: [
    "января", "февраля", "марта", "апреля", "мая", "июня",
    "июля", "августа", "сентября", "октября", "ноября", "декабря",
  ],
  pt: [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro",
  ],
};

export function formatDate(date: Date, locale: Locale): string {
  const day = date.getUTCDate();
  const month = MONTHS[locale][date.getUTCMonth()];
  const year = date.getUTCFullYear();

  if (locale === "ru") return `${day} ${month} ${year}`;
  if (locale === "pt") return `${day} de ${month} de ${year}`;
  return `${month} ${day}, ${year}`;
}

export function formatReadingTime(minutes: number, locale: Locale): string {
  return `${minutes} ${dictionary[locale].readingTimeSuffix}`;
}

export function blogIndexPath(locale: Locale): string {
  return `/blog/${locale}`;
}

export function articlePath(slug: string, locale: Locale): string {
  return `/blog/${slug}/${locale}`;
}
