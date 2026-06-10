import { useState, useEffect } from "react";

export type Language = "en" | "es" | "pt";

// Helper para obter o idioma baseado no subdomínio ou parâmetros de busca
export function getLanguage(): Language {
  if (typeof window === "undefined") {
    return "pt"; // Padrão no lado do servidor (SSR/Build)
  }

  // 1. Permitir forçar via parâmetro de busca ?lang= (ótimo para testes em localhost)
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get("lang");
  if (langParam === "en" || langParam === "es" || langParam === "pt") {
    localStorage.setItem("site-language", langParam);
    return langParam;
  }

  // 2. Verificar se há idioma salvo no localStorage
  const savedLang = localStorage.getItem("site-language");
  if (savedLang === "en" || savedLang === "es" || savedLang === "pt") {
    return savedLang;
  }

  // 3. Detectar com base no subdomínio (hostname)
  const hostname = window.location.hostname.toLowerCase();
  if (hostname.startsWith("en.")) return "en";
  if (hostname.startsWith("es.")) return "es";
  if (hostname.startsWith("pt.")) return "pt";

  // 4. Idioma padrão do navegador (se aplicável e compatível)
  const browserLang = navigator.language.slice(0, 2);
  if (browserLang === "en") return "en";
  if (browserLang === "es") return "es";

  return "pt";
}

// Hook reativo para usar nos componentes React e evitar Hydration Mismatches
export function useLanguage() {
  const [lang, setLang] = useState<Language>("pt");

  useEffect(() => {
    setLang(getLanguage());
  }, []);

  return lang;
}

// Utilitário para formatar URLs mantendo o subdomínio correspondente se necessário,
// ou simplesmente auxiliando no redirecionamento entre subdomínios.
export function getLanguageDomain(targetLang: Language): string {
  if (typeof window === "undefined") return "";

  const currentHost = window.location.host; // ex: localhost:3000 ou en.dramatica.blog ou dramatica.blog
  const hostnameParts = window.location.hostname.split(".");
  const isLocalhost = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

  if (isLocalhost) {
    // Para localhost, mantemos o host atual e usamos o parâmetro ?lang=
    const url = new URL(window.location.href);
    url.searchParams.set("lang", targetLang);
    return url.pathname + url.search;
  }

  // Se o hostname já tiver um subdomínio conhecido (en, es, pt) no início
  const firstPart = hostnameParts[0];
  const hasSubdomain = ["en", "es", "pt"].includes(firstPart);

  let newHost = currentHost;
  if (hasSubdomain) {
    // Substitui o subdomínio existente
    hostnameParts[0] = targetLang;
    newHost = hostnameParts.join(".") + (window.location.port ? `:${window.location.port}` : "");
  } else {
    // Adiciona o novo subdomínio na frente (caso de dramatica.blog -> en.dramatica.blog)
    // Se o idioma for PT, podemos optar por não colocar subdomínio (ficar dramatica.blog)
    if (targetLang === "pt") {
      newHost = currentHost;
    } else {
      newHost = `${targetLang}.${currentHost}`;
    }
  }

  const protocol = window.location.protocol;
  return `${protocol}//${newHost}${window.location.pathname}${window.location.search}`;
}

// Dicionário completo de traduções para toda a interface do site
export const translations = {
  pt: {
    siteName: "Contos & Crônicas",
    siteTagline: "Histórias para ler com calma",
    siteDescription: "Um refúgio digital para amantes da palavra escrita. Contos, crônicas, memórias e ensaios.",
    
    // Navegação
    navFiction: "Ficção",
    navMemories: "Memórias",
    navAbout: "Sobre",
    navContact: "Contato",
    navHome: "Início",

    // Home
    featuredTitle: "Destaque da Semana",
    soonTitle: "Em breve",
    soonDesc: "Ainda não há histórias publicadas.",
    loadError: "Não foi possível carregar as histórias",
    tryAgain: "Tentar novamente",
    nothingHere: "Nada por aqui ainda.",

    // Rodapé
    footerNav: "Navegação",
    footerContact: "Contato",
    cookiePolicy: "Política de Cookies",
    termsOfUse: "Termos de Uso",
    privacyPolicy: "Política de Privacidade",
    footerDesc: "Dúvidas, colaborações ou questões sobre privacidade:",
    footerCopyright: "Conteúdo editorial original em português",

    // Cookie Consent
    cookieTitle: "Este site utiliza cookies",
    cookieDesc: "Usamos cookies para exibir anúncios relevantes (Google AdSense), medir o desempenho do site e melhorar sua experiência. Leia nossa Política de Privacidade e Política de Cookies.",
    cookieDecline: "Recusar",
    cookieAccept: "Aceitar cookies",

    // Página Sobre
    aboutTitle: "Sobre Nós",
    aboutSubtitle: "A arte de contar histórias sem pressa.",

    // Página Contato
    contactTitle: "Contato",
    contactSubtitle: "Queremos ouvir você. Envie sua mensagem, sugestão ou feedback.",
    contactName: "Nome",
    contactEmail: "E-mail",
    contactSubject: "Assunto",
    contactMessage: "Mensagem",
    contactSend: "Enviar Mensagem",
    contactSending: "Enviando...",
    contactSuccess: "Sua mensagem foi enviada com sucesso! Responderemos o mais breve possível.",
    contactError: "Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.",

    // Páginas Legais
    termsTitle: "Termos de Uso",
    privacyTitle: "Política de Privacidade",
    lastUpdated: "Última atualização:",

    // Detalhes da História
    relatedStories: "Leia também",
    backToHome: "Voltar para o início",
    byCategory: "Histórias em",

    // Seletor de Idioma
    changeLanguage: "Selecionar Idioma"
  },
  en: {
    siteName: "Tales & Chronicles",
    siteTagline: "Stories to read calmly",
    siteDescription: "A digital refuge for lovers of the written word. Short stories, chronicles, memories, and essays.",
    
    // Navigation
    navFiction: "Fiction",
    navMemories: "Memories",
    navAbout: "About",
    navContact: "Contact",
    navHome: "Home",

    // Home
    featuredTitle: "Weekly Feature",
    soonTitle: "Coming Soon",
    soonDesc: "No stories have been published yet.",
    loadError: "Could not load stories",
    tryAgain: "Try again",
    nothingHere: "Nothing here yet.",

    // Footer
    footerNav: "Navigation",
    footerContact: "Contact",
    cookiePolicy: "Cookie Policy",
    termsOfUse: "Terms of Use",
    privacyPolicy: "Privacy Policy",
    footerDesc: "Questions, collaborations, or privacy concerns:",
    footerCopyright: "Original editorial content",

    // Cookie Consent
    cookieTitle: "This website uses cookies",
    cookieDesc: "We use cookies to display relevant ads (Google AdSense), measure site performance, and improve your experience. Read our Privacy Policy and Cookie Policy.",
    cookieDecline: "Decline",
    cookieAccept: "Accept cookies",

    // About Page
    aboutTitle: "About Us",
    aboutSubtitle: "The art of telling stories without rush.",

    // Contact Page
    contactTitle: "Contact Us",
    contactSubtitle: "We want to hear from you. Send your message, suggestion, or feedback.",
    contactName: "Name",
    contactEmail: "Email",
    contactSubject: "Subject",
    contactMessage: "Message",
    contactSend: "Send Message",
    contactSending: "Sending...",
    contactSuccess: "Your message has been successfully sent! We will reply as soon as possible.",
    contactError: "An error occurred while sending the message. Please try again.",

    // Legal Pages
    termsTitle: "Terms of Use",
    privacyTitle: "Privacy Policy",
    lastUpdated: "Last updated:",

    // Story Details
    relatedStories: "Recommended reading",
    backToHome: "Back to home",
    byCategory: "Stories in",

    // Language Selector
    changeLanguage: "Select Language"
  },
  es: {
    siteName: "Cuentos y Crónicas",
    siteTagline: "Historias para leer con calma",
    siteDescription: "Un refugio digital para los amantes de la palabra escrita. Cuentos, crónicas, memorias y ensayos.",
    
    // Navigation
    navFiction: "Ficción",
    navMemories: "Memorias",
    navAbout: "Sobre Nosotros",
    navContact: "Contacto",
    navHome: "Inicio",

    // Home
    featuredTitle: "Destacado de la Semana",
    soonTitle: "Próximamente",
    soonDesc: "Aún no se han publicado historias.",
    loadError: "No se pudieron cargar las historias",
    tryAgain: "Intentar de nuevo",
    nothingHere: "Nada por aquí todavía.",

    // Footer
    footerNav: "Navegación",
    footerContact: "Contacto",
    cookiePolicy: "Política de Cookies",
    termsOfUse: "Términos de Uso",
    privacyPolicy: "Política de Privacidad",
    footerDesc: "Dudas, colaboraciones o cuestiones de privacidad:",
    footerCopyright: "Contenido editorial original",

    // Cookie Consent
    cookieTitle: "Este sitio utiliza cookies",
    cookieDesc: "Utilizamos cookies para mostrar anuncios relevantes (Google AdSense), medir el rendimiento del sitio y mejorar su experiencia. Lea nuestra Política de Privacidad y Política de Cookies.",
    cookieDecline: "Rechazar",
    cookieAccept: "Aceptar cookies",

    // About Page
    aboutTitle: "Sobre Nosotros",
    aboutSubtitle: "El arte de contar historias sin prisa.",

    // Contact Page
    contactTitle: "Contacto",
    contactSubtitle: "Queremos escucharte. Envía tu mensaje, sugerencia o comentarios.",
    contactName: "Nombre",
    contactEmail: "Correo electrónico",
    contactSubject: "Asunto",
    contactMessage: "Mensaje",
    contactSend: "Enviar Mensaje",
    contactSending: "Enviando...",
    contactSuccess: "¡Tu mensaje ha sido enviado con éxito! Responderemos lo antes posible.",
    contactError: "Ocurrió un error al enviar el mensaje. Por favor, inténtalo de nuevo.",

    // Legal Pages
    termsTitle: "Términos de Uso",
    privacyTitle: "Política de Privacidad",
    lastUpdated: "Última actualización:",

    // Story Details
    relatedStories: "Lecturas recomendadas",
    backToHome: "Volver al inicio",
    byCategory: "Historias en",

    // Language Selector
    changeLanguage: "Seleccionar Idioma"
  }
};
