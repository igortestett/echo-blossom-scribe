import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { CONTACT_EMAIL, SITE_NAME, getSiteUrl } from "@/lib/site";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: `Termos de Uso — ${SITE_NAME}` },
      {
        name: "description",
        content: "Termos de uso do Contos & Crônicas: regras de navegação, conteúdo e publicidade.",
      },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: TermosPage,
});

function TermosPage() {
  const siteUrl = getSiteUrl();

  return (
    <LegalPageLayout eyebrow="Legal" title="Termos de Uso">
      <p>
        <strong>Última atualização:</strong> 9 de junho de 2026
      </p>
      <p>
        Ao acessar o site <strong>{SITE_NAME}</strong> ({siteUrl}), você concorda com estes Termos de
        Uso. Se não concordar, por favor não utilize o site.
      </p>

      <h2>1. Objeto do site</h2>
      <p>
        O {SITE_NAME} publica contos, crônicas, memórias e ensaios em português, com fins
        culturais, informativos e de entretenimento. O conteúdo é de autoria própria ou licenciada
        para publicação neste site.
      </p>

      <h2>2. Uso permitido</h2>
      <p>Você pode:</p>
      <ul>
        <li>Ler e compartilhar links para as histórias publicadas;</li>
        <li>Citar trechos curtos com atribuição ao {SITE_NAME} e link para a fonte;</li>
        <li>Entrar em contato para colaborações ou sugestões editoriais.</li>
      </ul>

      <h2>3. Uso proibido</h2>
      <p>É vedado:</p>
      <ul>
        <li>Copiar, reproduzir ou redistribuir textos integrais sem autorização;</li>
        <li>Utilizar robôs ou scrapers para extrair conteúdo em massa;</li>
        <li>Tentar comprometer a segurança, disponibilidade ou integridade do site;</li>
        <li>Clicar repetidamente em anúncios ou incentivar cliques artificiais (fraude de anúncios);</li>
        <li>Publicar conteúdo ilegal, difamatório, discriminatório ou que viole direitos de terceiros.</li>
      </ul>

      <h2>4. Propriedade intelectual</h2>
      <p>
        Textos, imagens, logotipos e identidade visual do {SITE_NAME} são protegidos por direitos
        autorais. O uso não autorizado pode resultar em medidas legais.
      </p>

      <h2>5. Publicidade</h2>
      <p>
        O site exibe anúncios de terceiros, incluindo Google AdSense. Não endossamos produtos ou
        serviços anunciados e não nos responsabilizamos pelo conteúdo de sites externos acessados
        por meio de anúncios ou links.
      </p>

      <h2>6. Isenção de garantias</h2>
      <p>
        O site é oferecido &quot;como está&quot;. Empregamos esforços razoáveis para manter o
        conteúdo preciso e o site disponível, mas não garantimos ausência de erros, interrupções ou
        vírus.
      </p>

      <h2>7. Limitação de responsabilidade</h2>
      <p>
        O {SITE_NAME} não será responsável por danos indiretos decorrentes do uso ou da
        impossibilidade de uso do site, na extensão permitida pela legislação aplicável.
      </p>

      <h2>8. Links externos</h2>
      <p>
        Podemos incluir links para sites de terceiros. Não controlamos nem somos responsáveis pelo
        conteúdo ou práticas de privacidade desses sites.
      </p>

      <h2>9. Alterações</h2>
      <p>
        Podemos modificar estes termos a qualquer momento. O uso continuado do site após alterações
        constitui aceitação dos novos termos.
      </p>

      <h2>10. Contato</h2>
      <p>
        Dúvidas sobre estes termos:{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Veja também a{" "}
        <Link to="/privacidade" className="text-accent underline">
          Política de Privacidade
        </Link>
        .
      </p>
    </LegalPageLayout>
  );
}
