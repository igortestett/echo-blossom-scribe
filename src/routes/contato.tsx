import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: `Contato — ${SITE_NAME}` },
      {
        name: "description",
        content:
          "Entre em contato com o Contos & Crônicas para colaborações, dúvidas ou questões sobre privacidade.",
      },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <LegalPageLayout eyebrow="Fale conosco" title="Contato">
      <p>
        O <strong>{SITE_NAME}</strong> é um projeto editorial independente. Adoramos ouvir leitores,
        escritores e parceiros. Utilize os canais abaixo conforme o assunto.
      </p>

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
          <strong>Nome do site:</strong> {SITE_NAME}
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
    </LegalPageLayout>
  );
}
