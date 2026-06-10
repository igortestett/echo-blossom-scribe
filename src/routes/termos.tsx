import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { CONTACT_EMAIL, getSiteUrl } from "@/lib/site";
import { useLanguage, translations, getLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/termos")({
  head: () => {
    const lang = getLanguage();
    const t = translations[lang];
    return {
      meta: [
        { title: `${t.termsOfUse} — ${t.siteName}` },
        {
          name: "description",
          content: lang === "pt"
            ? "Termos de uso: regras de navegação, conteúdo e publicidade."
            : lang === "es"
            ? "Términos de uso: reglas de navegación, contenido y publicidad."
            : "Terms of use: navigation rules, content, and advertising.",
        },
        { name: "robots", content: "index, follow" },
      ],
    };
  },
  component: TermosPage,
});

function TermosPage() {
  const siteUrl = getSiteUrl();
  const lang = useLanguage();
  const t = translations[lang];

  return (
    <LegalPageLayout
      eyebrow={lang === "pt" ? "Legal" : lang === "es" ? "Legal" : "Legal"}
      title={t.termsOfUse}
    >
      <p>
        <strong>{t.lastUpdated}</strong> {lang === "pt" ? "9 de junho de 2026" : lang === "es" ? "9 de junio de 2026" : "June 9, 2026"}
      </p>

      {lang === "pt" && (
        <>
          <p>
            Ao acessar o site <strong>{t.siteName}</strong> ({siteUrl}), você concorda com estes Termos de
            Uso. Se não concordar, por favor não utilize o site.
          </p>

          <h2>1. Objeto do site</h2>
          <p>
            O {t.siteName} publica contos, crônicas, memórias e ensaios, com fins
            culturais, informativos e de entretenimento. O conteúdo é de autoria própria ou licenciada
            para publicação neste site.
          </p>

          <h2>2. Uso permitido</h2>
          <p>Você pode:</p>
          <ul>
            <li>Ler e compartilhar links para as histórias publicadas;</li>
            <li>Citar trechos curtos com atribuição ao {t.siteName} e link para a fonte;</li>
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
            Textos, imagens, logotipos e identidade visual do {t.siteName} são protegidos por direitos
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
            O {t.siteName} não será responsável por danos indiretos decorrentes do uso ou da
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
        </>
      )}

      {lang === "en" && (
        <>
          <p>
            By accessing the website <strong>{t.siteName}</strong> ({siteUrl}), you agree to these Terms of
            Use. If you do not agree, please do not use the website.
          </p>

          <h2>1. Purpose of the site</h2>
          <p>
            {t.siteName} publishes short stories, chronicles, memories, and essays for cultural,
            informative, and entertainment purposes. The content is of our own authorship or licensed
            for publication on this site.
          </p>

          <h2>2. Permitted use</h2>
          <p>You may:</p>
          <ul>
            <li>Read and share links to the published stories;</li>
            <li>Quote short excerpts with attribution to {t.siteName} and a link to the source;</li>
            <li>Contact us for collaborations or editorial suggestions.</li>
          </ul>

          <h2>3. Prohibited use</h2>
          <p>It is forbidden to:</p>
          <ul>
            <li>Copy, reproduce, or redistribute full texts without authorization;</li>
            <li>Use robots or scrapers to extract content in bulk;</li>
            <li>Attempt to compromise the security, availability, or integrity of the site;</li>
            <li>Click repeatedly on ads or encourage artificial clicks (ad fraud);</li>
            <li>Publish illegal, defamatory, discriminatory content or content that violates third-party rights.</li>
          </ul>

          <h2>4. Intellectual property</h2>
          <p>
            Texts, images, logos, and visual identity of {t.siteName} are protected by copyright.
            Unauthorized use may result in legal action.
          </p>

          <h2>5. Advertising</h2>
          <p>
            The site displays third-party advertisements, including Google AdSense. We do not endorse advertised
            products or services and are not responsible for the content of external sites accessed
            through advertisements or links.
          </p>

          <h2>6. Disclaimer of warranties</h2>
          <p>
            The site is provided &quot;as is&quot;. We make reasonable efforts to keep content accurate
            and the site available, but we do not guarantee the absence of errors, interruptions, or viruses.
          </p>

          <h2>7. Limitation of liability</h2>
          <p>
            {t.siteName} will not be liable for indirect damages arising from the use or inability
            to use the site, to the extent permitted by applicable law.
          </p>

          <h2>8. External links</h2>
          <p>
            We may include links to third-party websites. We do not control or assume responsibility for
            the content or privacy practices of these sites.
          </p>

          <h2>9. Changes</h2>
          <p>
            We may modify these terms at any time. Continued use of the site after changes constitutes
            acceptance of the new terms.
          </p>

          <h2>10. Contact</h2>
          <p>
            Questions about these terms:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. See also the{" "}
            <Link to="/privacidade" className="text-accent underline">
              Privacy Policy
            </Link>
            .
          </p>
        </>
      )}

      {lang === "es" && (
        <>
          <p>
            Al acceder al sitio web <strong>{t.siteName}</strong> ({siteUrl}), usted acepta estos Términos de
            Uso. Si no está de acuerdo, por favor no utilice el sitio.
          </p>

          <h2>1. Objeto del sitio</h2>
          <p>
            {t.siteName} publica cuentos, crónicas, memorias y ensayos con fines culturales,
            informativos y de entretenimiento. El contenido es de autoría propia o licenciado para
            su publicación en este sitio.
          </p>

          <h2>2. Uso permitido</h2>
          <p>Usted puede:</p>
          <ul>
            <li>Leer y compartir enlaces de las historias publicadas;</li>
            <li>Citar fragmentos cortos con atribución a {t.siteName} y un enlace a la fuente;</li>
            <li>Ponerse en contacto para colaboraciones o sugerencias editoriales.</li>
          </ul>

          <h2>3. Uso prohibido</h2>
          <p>Está prohibido:</p>
          <ul>
            <li>Copiar, reproducir o redistribuir textos completos sin autorización;</li>
            <li>Utilizar robots o scrapers para extraer contenido de forma masiva;</li>
            <li>Intentar comprometer la seguridad, disponibilidad o integridad del sitio;</li>
            <li>Hacer clic repetidamente en anuncios o fomentar clics artificiales (fraude publicitario);</li>
            <li>Publicar contenido ilegal, difamatorio, discriminatorio o que viole los derechos de terceros.</li>
          </ul>

          <h2>4. Propiedad intelectual</h2>
          <p>
            Los textos, imágenes, logotipos e identidad visual de {t.siteName} están protegidos por derechos de
            autor. El uso no autorizado puede dar lugar a medidas legales.
          </p>

          <h2>5. Publicidad</h2>
          <p>
            El sitio muestra anuncios de terceros, incluido Google AdSense. No respaldamos los productos o
            servicios anunciados y no somos responsables del contenido de sitios externos accedidos a través de
            anuncios o enlaces.
          </p>

          <h2>6. Exclusión de garantías</h2>
          <p>
            El sitio se ofrece &quot;tal cual&quot;. Hacemos esfuerzos razonables para mantener el contenido
            preciso y el sitio disponible, pero no garantizamos la ausencia de errores, interrupciones o virus.
          </p>

          <h2>7. Limitación de responsabilidad</h2>
          <p>
            {t.siteName} no será responsable de daños indirectos derivados del uso o de la imposibilidad de
            uso del sitio, en la medida permitida por la legislación aplicable.
          </p>

          <h2>8. Enlaces externos</h2>
          <p>
            Podemos incluir enlaces a sitios web de terceros. No controlamos ni somos responsables del contenido
            o las prácticas de privacidad de dichos sitios.
          </p>

          <h2>9. Cambios</h2>
          <p>
            Podemos modificar estos términos en cualquier momento. El uso continuado del sitio después de los cambios
            constituye la aceptación de los nuevos términos.
          </p>

          <h2>10. Contacto</h2>
          <p>
            Dudas sobre estos términos:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Ver también la{" "}
            <Link to="/privacidade" className="text-accent underline">
              Política de Privacidad
            </Link>
            .
          </p>
        </>
      )}
    </LegalPageLayout>
  );
}
