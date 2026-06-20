import { useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { CONTACT_EMAIL } from "@/lib/site";
import { useLanguage, translations, getLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/contato")({
  head: () => {
    const lang = getLanguage();
    const t = translations[lang];
    return {
      meta: [
        { title: `${t.navContact} — ${t.siteName}` },
        {
          name: "description",
          content: lang === "pt"
            ? "Entre em contato com o Contos & Crônicas para colaborações, dúvidas ou questões sobre privacidade."
            : lang === "es"
            ? "Póngase en contacto con Cuentos y Crónicas para colaboraciones, dudas o cuestiones de privacidad."
            : "Contact Tales & Chronicles for collaborations, questions, or privacy concerns.",
        },
        { name: "robots", content: "index, follow" },
      ],
    };
  },
  component: ContatoPage,
});

function ContactForm() {
  const lang = useLanguage();
  const t = translations[lang];
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const subject = String(data.get("subject") ?? t.navContact);
    const message = String(data.get("message") ?? "");
    const body = [
      lang === "pt" ? `Nome: ${name}` : lang === "es" ? `Nombre: ${name}` : `Name: ${name}`,
      lang === "pt" ? `E-mail: ${email}` : lang === "es" ? `Correo: ${email}` : `Email: ${email}`,
      "",
      message,
    ].join("\n");
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
    form.reset();
  }

  if (sent) {
    return (
      <p className="rounded-sm border border-accent/20 bg-accent/5 px-4 py-3 text-sm text-ink/80" role="status">
        {t.contactSuccess}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 not-prose">
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium mb-1.5">
          {t.contactName}
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full rounded-sm border border-ink/15 bg-paper px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium mb-1.5">
          {t.contactEmail}
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-sm border border-ink/15 bg-paper px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
        />
      </div>
      <div>
        <label htmlFor="contact-subject" className="block text-sm font-medium mb-1.5">
          {t.contactSubject}
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          required
          className="w-full rounded-sm border border-ink/15 bg-paper px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium mb-1.5">
          {t.contactMessage}
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          className="w-full rounded-sm border border-ink/15 bg-paper px-3 py-2 text-sm resize-y focus:outline-none focus:ring-2 focus:ring-accent/30"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-sm bg-accent px-5 py-2.5 text-sm font-semibold text-paper hover:bg-accent/90 transition-colors"
      >
        {t.contactSend}
      </button>
    </form>
  );
}

function ContatoPage() {
  const lang = useLanguage();
  const t = translations[lang];

  return (
    <LegalPageLayout
      eyebrow={lang === "pt" ? "Fale conosco" : lang === "es" ? "Hable con nosotros" : "Get in touch"}
      title={t.navContact}
    >
      {lang === "pt" && (
        <>
          <p>
            O <strong>{t.siteName}</strong> é um projeto editorial independente. Adoramos ouvir leitores,
            escritores e parceiros. Utilize o formulário abaixo ou os canais por e-mail conforme o assunto.
          </p>

          <h2>Envie uma mensagem</h2>
          <ContactForm />

          <h2>Redação e colaborações</h2>
          <p>
            Para enviar textos, sugerir pautas ou propor parcerias editoriais, escreva para{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> com o assunto{" "}
            <strong>Colaboração</strong>. Responderemos em até 5 dias úteis.
          </p>

          <h2>Privacidade e dados pessoais</h2>
          <p>
            Para solicitações relacionadas à LGPD, cookies ou publicidade, use o assunto{" "}
            <strong>Privacidade</strong> no mesmo endereço:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>

          <h2>Questões sobre anúncios</h2>
          <p>
            O site utiliza Google AdSense. Problemas com anúncios exibidos, denúncias ou dúvidas sobre
            publicidade podem ser reportados pelo e-mail acima com o assunto <strong>Publicidade</strong>.
          </p>

          <h2>Informações do editor</h2>
          <ul>
            <li>
              <strong>Nome do site:</strong> {t.siteName}
            </li>
            <li>
              <strong>E-mail:</strong>{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </li>
            <li>
              <strong>Idioma:</strong> Português (Brasil)
            </li>
            <li>
              <strong>País de operação:</strong> Brasil
            </li>
          </ul>

          <p>
            Antes de escrever, consulte a página{" "}
            <Link to="/sobre" className="text-accent underline">
              Sobre
            </Link>{" "}
            para entender a proposta editorial do site.
          </p>
        </>
      )}

      {lang === "en" && (
        <>
          <p>
            <strong>{t.siteName}</strong> is an independent editorial project. We love hearing from readers,
            writers, and partners. Use the form below or the email channels according to your topic.
          </p>

          <h2>Send a message</h2>
          <ContactForm />

          <h2>Editorial and collaborations</h2>
          <p>
            To submit texts, suggest topics, or propose editorial partnerships, write to{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> with the subject line{" "}
            <strong>Collaboration</strong>. We will respond within 5 business days.
          </p>

          <h2>Privacy and personal data</h2>
          <p>
            For inquiries related to privacy, cookies, or advertising, use the subject line{" "}
            <strong>Privacy</strong> at the same address:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>

          <h2>Advertising inquiries</h2>
          <p>
            The site uses Google AdSense. Issues with displayed ads, reports, or advertising concerns
            can be reported by email at the address above with the subject line <strong>Advertising</strong>.
          </p>

          <h2>Publisher information</h2>
          <ul>
            <li>
              <strong>Site name:</strong> {t.siteName}
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </li>
            <li>
              <strong>Language:</strong> English
            </li>
            <li>
              <strong>Operating country:</strong> Brazil
            </li>
          </ul>

          <p>
            Before writing, check our{" "}
            <Link to="/sobre" className="text-accent underline">
              About
            </Link>{" "}
            page to understand the site's editorial proposal.
          </p>
        </>
      )}

      {lang === "es" && (
        <>
          <p>
            <strong>{t.siteName}</strong> es un proyecto editorial independiente. Nos encanta escuchar a lectores,
            escritores y socios. Utilice el formulario a continuación o los canales de correo según el tema.
          </p>

          <h2>Enviar un mensaje</h2>
          <ContactForm />

          <h2>Redacción y colaboraciones</h2>
          <p>
            Para enviar textos, sugerir temas o proponer colaboraciones editoriales, escriba a{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> con el asunto{" "}
            <strong>Colaboración</strong>. Responderemos en un plazo de 5 días hábiles.
          </p>

          <h2>Privacidad y datos personales</h2>
          <p>
            Para consultas relacionadas con privacidad, cookies o publicidad, use el asunto{" "}
            <strong>Privacidad</strong> en la misma dirección:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>

          <h2>Consultas sobre publicidad</h2>
          <p>
            El sitio utiliza Google AdSense. Problemas con los anuncios mostrados, denuncias o dudas sobre
            publicidad pueden ser reportados por correo electrónico a la dirección anterior con el asunto <strong>Publicidad</strong>.
          </p>

          <h2>Información del editor</h2>
          <ul>
            <li>
              <strong>Nombre del sitio:</strong> {t.siteName}
            </li>
            <li>
              <strong>Correo electrónico:</strong>{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </li>
            <li>
              <strong>Idioma:</strong> Español
            </li>
            <li>
              <strong>País de operación:</strong> Brasil
            </li>
          </ul>

          <p>
            Antes de escribir, consulte nuestra página{" "}
            <Link to="/sobre" className="text-accent underline">
              Sobre Nosotros
            </Link>{" "}
            para comprender la propuesta editorial del sitio.
          </p>
        </>
      )}
    </LegalPageLayout>
  );
}
