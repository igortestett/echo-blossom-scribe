import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { CONTACT_EMAIL, getSiteUrl } from "@/lib/site";
import { useLanguage, translations, getLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/privacidade")({
  head: () => {
    const lang = getLanguage();
    const t = translations[lang];
    return {
      meta: [
        { title: `${t.privacyPolicy} — ${t.siteName}` },
        {
          name: "description",
          content: lang === "pt"
            ? "Política de privacidade: coleta de dados, cookies, Google AdSense e seus direitos."
            : lang === "es"
            ? "Política de privacidad: recopilación de datos, cookies, Google AdSense y sus derechos."
            : "Privacy policy: data collection, cookies, Google AdSense, and your rights.",
        },
        { name: "robots", content: "index, follow" },
      ],
    };
  },
  component: PrivacidadePage,
});

function PrivacidadePage() {
  const siteUrl = getSiteUrl();
  const lang = useLanguage();
  const t = translations[lang];

  return (
    <LegalPageLayout
      eyebrow={lang === "pt" ? "Legal" : lang === "es" ? "Legal" : "Legal"}
      title={t.privacyPolicy}
    >
      <p>
        <strong>{t.lastUpdated}</strong> {lang === "pt" ? "9 de junho de 2026" : lang === "es" ? "9 de junio de 2026" : "June 9, 2026"}
      </p>

      {lang === "pt" && (
        <>
          <p>
            O <strong>{t.siteName}</strong> ({siteUrl}) respeita sua privacidade. Esta política explica
            quais dados coletamos, como os utilizamos e quais são seus direitos, em conformidade com a
            Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018) e com os requisitos do programa
            Google AdSense.
          </p>

          <h2>1. Quem somos</h2>
          <p>
            O {t.siteName} é um site editorial de ficção, crônicas e memórias. Para dúvidas
            sobre privacidade, entre em contato pelo e-mail{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>

          <h2>2. Dados que coletamos</h2>
          <p>Podemos coletar e processar os seguintes tipos de informação:</p>
          <ul>
            <li>
              <strong>Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas,
              tempo de permanência e origem do acesso (coletados automaticamente por serviços de
              análise e publicidade).
            </li>
            <li>
              <strong>Cookies e tecnologias similares:</strong> identificadores armazenados no seu
              dispositivo para lembrar preferências, medir audiência e exibir anúncios.
            </li>
            <li>
              <strong>Dados de contato:</strong> nome e e-mail, quando você nos envia uma mensagem
              voluntariamente.
            </li>
          </ul>
          <p>
            Não solicitamos dados sensíveis (saúde, religião, orientação sexual, dados biométricos etc.)
            nem vendemos dados pessoais a terceiros.
          </p>

          <h2 id="cookies">3. Cookies e publicidade (Google AdSense)</h2>
          <p>
            Utilizamos o <strong>Google AdSense</strong> para exibir anúncios. O Google e seus
            parceiros podem usar cookies para:
          </p>
          <ul>
            <li>Exibir anúncios com base nas suas visitas anteriores a este site ou a outros sites;</li>
            <li>Medir a eficácia dos anúncios e combater fraudes;</li>
            <li>Limitar a frequência com que um anúncio é exibido.</li>
          </ul>
          <p>Conforme exigido pelo Google AdSense, informamos que:</p>
          <ul>
            <li>
              Terceiros, incluindo o Google, usam cookies para veicular anúncios com base em visitas
              anteriores do usuário ao nosso site ou a outros sites na Internet;
            </li>
            <li>
              O uso de cookies de publicidade do Google permite que o Google e seus parceiros veiculem
              anúncios com base nas visitas do usuário ao nosso site e/ou a outros sites na Internet;
            </li>
            <li>
              O usuário pode desativar a publicidade personalizada acessando{" "}
              <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
                Configurações de anúncios do Google
              </a>
              ;
            </li>
            <li>
              Alternativamente, é possível desativar o uso de cookies de terceiros para publicidade
              personalizada em{" "}
              <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener noreferrer">
                www.aboutads.info
              </a>
              .
            </li>
          </ul>
          <p>
            Só carregamos scripts de publicidade após você consentir com o uso de cookies, por meio do
            banner exibido na primeira visita. Você pode recusar cookies não essenciais a qualquer
            momento limpando os dados do navegador ou recusando no banner.
          </p>

          <h2>4. Finalidades do tratamento</h2>
          <ul>
            <li>Publicar e distribuir conteúdo editorial;</li>
            <li>Exibir anúncios e manter o site financeiramente sustentável;</li>
            <li>Medir audiência e melhorar a experiência de leitura;</li>
            <li>Responder mensagens enviadas pelo formulário de contato;</li>
            <li>Cumprir obrigações legais e prevenir fraudes.</li>
          </ul>

          <h2>5. Base legal (LGPD)</h2>
          <p>Tratamos dados com base em:</p>
          <ul>
            <li>
              <strong>Consentimento:</strong> para cookies de publicidade e marketing;
            </li>
            <li>
              <strong>Legítimo interesse:</strong> para segurança, métricas agregadas e melhoria do site;
            </li>
            <li>
              <strong>Execução de solicitação:</strong> quando você nos contata.
            </li>
          </ul>

          <h2>6. Compartilhamento com terceiros</h2>
          <p>Podemos compartilhar dados com:</p>
          <ul>
            <li>
              <strong>Google LLC</strong> (AdSense, hospedagem de anúncios) —{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                Política de Privacidade do Google
              </a>
              ;
            </li>
            <li>
              <strong>GitHub Pages / Vercel</strong> (hospedagem do site), que processa logs de acesso
              automaticamente.
            </li>
          </ul>

          <h2>7. Retenção e segurança</h2>
          <p>
            Mantemos dados apenas pelo tempo necessário para as finalidades descritas. Aplicamos medidas
            técnicas razoáveis para proteger as informações, embora nenhum sistema seja 100% seguro.
          </p>

          <h2>8. Seus direitos</h2>
          <p>Nos termos da LGPD, você pode solicitar:</p>
          <ul>
            <li>Confirmação e acesso aos seus dados;</li>
            <li>Correção de dados incompletos ou desatualizados;</li>
            <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
            <li>Revogação do consentimento;</li>
            <li>Informação sobre compartilhamentos realizados.</li>
          </ul>
          <p>
            Para exercer esses direitos, envie e-mail para{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>

          <h2>9. Menores de idade</h2>
          <p>
            O site não é direcionado a menores de 13 anos. Se você acredita que coletamos dados de uma
            criança inadvertidamente, entre em contato para remoção.
          </p>

          <h2>10. Alterações</h2>
          <p>
            Podemos atualizar esta política periodicamente. A data da última revisão será sempre
            indicada no topo da página. Alterações relevantes serão comunicadas no site.
          </p>

          <p>
            Consulte também os{" "}
            <Link to="/termos" className="text-accent underline">
              Termos de Uso
            </Link>{" "}
            e a página de{" "}
            <Link to="/contato" className="text-accent underline">
              Contato
            </Link>
            .
          </p>
        </>
      )}

      {lang === "en" && (
        <>
          <p>
            <strong>{t.siteName}</strong> ({siteUrl}) respects your privacy. This privacy policy explains
            what data we collect, how we use it, and what your rights are, in compliance with GDPR and
            other data protection regulations and the requirements of the Google AdSense program.
          </p>

          <h2>1. Who we are</h2>
          <p>
            {t.siteName} is an editorial website of fiction, chronicles, and memories. For questions
            about privacy, please contact us by email at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>

          <h2>2. Data we collect</h2>
          <p>We may collect and process the following types of information:</p>
          <ul>
            <li>
              <strong>Navigation data:</strong> IP address, browser type, pages visited,
              time spent, and access source (automatically collected by analytics and advertising services).
            </li>
            <li>
              <strong>Cookies and similar technologies:</strong> identifiers stored on your
              device to remember preferences, measure audience, and display ads.
            </li>
            <li>
              <strong>Contact data:</strong> name and email, when you voluntarily send us a message.
            </li>
          </ul>
          <p>
            We do not request sensitive data (health, religion, sexual orientation, biometric data, etc.)
            nor do we sell personal data to third parties.
          </p>

          <h2 id="cookies">3. Cookies and advertising (Google AdSense)</h2>
          <p>
            We use <strong>Google AdSense</strong> to display advertisements. Google and its
            partners may use cookies to:
          </p>
          <ul>
            <li>Display ads based on your previous visits to this site or other sites;</li>
            <li>Measure the effectiveness of ads and fight fraud;</li>
            <li>Limit the frequency with which an ad is displayed.</li>
          </ul>
          <p>As required by Google AdSense, we inform you that:</p>
          <ul>
            <li>
              Third parties, including Google, use cookies to serve ads based on a user's prior
              visits to our website or other websites on the Internet;
            </li>
            <li>
              Google's use of advertising cookies enables it and its partners to serve ads based
              on user visits to our site and/or other sites on the Internet;
            </li>
            <li>
              Users may opt out of personalized advertising by visiting{" "}
              <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
                Google Ad Settings
              </a>
              ;
            </li>
            <li>
              Alternatively, users can opt out of a third-party vendor's use of cookies for
              personalized advertising by visiting{" "}
              <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener noreferrer">
                www.aboutads.info
              </a>
              .
            </li>
          </ul>
          <p>
            We only load advertising scripts after you consent to the use of cookies, via the banner
            displayed on your first visit. You can decline non-essential cookies at any time.
          </p>

          <h2>4. Purposes of processing</h2>
          <ul>
            <li>Publish and distribute editorial content;</li>
            <li>Display advertisements to keep the site financially sustainable;</li>
            <li>Measure audience and improve the reading experience;</li>
            <li>Respond to messages sent through the contact form;</li>
            <li>Comply with legal obligations and prevent fraud.</li>
          </ul>

          <h2>5. Sharing with third parties</h2>
          <p>We may share data with:</p>
          <ul>
            <li>
              <strong>Google LLC</strong> (AdSense, ad serving) —{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                Google Privacy Policy
              </a>
              ;
            </li>
            <li>
              <strong>GitHub Pages / Vercel</strong> (site hosting), which automatically processes
              access logs.
            </li>
          </ul>

          <h2>6. Your rights</h2>
          <p>Under privacy laws, you may request:</p>
          <ul>
            <li>Confirmation and access to your data;</li>
            <li>Correction of incomplete or outdated data;</li>
            <li>Anonymization, blocking, or deletion of unnecessary data;</li>
            <li>Withdrawal of consent;</li>
            <li>Information about data sharing.</li>
          </ul>
          <p>
            To exercise these rights, please email{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>

          <h2>7. Changes</h2>
          <p>
            We may update this policy periodically. The date of the last revision will always be
            indicated at the top of the page.
          </p>

          <p>
            Please also consult our{" "}
            <Link to="/termos" className="text-accent underline">
              Terms of Use
            </Link>{" "}
            and{" "}
            <Link to="/contato" className="text-accent underline">
              Contact
            </Link>{" "}
            pages.
          </p>
        </>
      )}

      {lang === "es" && (
        <>
          <p>
            <strong>{t.siteName}</strong> ({siteUrl}) respeta su privacidad. Esta política de privacidad
            explica qué datos recopilamos, cómo los usamos y cuáles son sus derechos, de conformidad con el RGPD,
            otras regulaciones de protección de datos y los requisitos del programa Google AdSense.
          </p>

          <h2>1. Quiénes somos</h2>
          <p>
            {t.siteName} es un sitio web editorial de ficción, crónicas y memorias. Para preguntas
            sobre privacidad, póngase en contacto por correo electrónico en{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>

          <h2>2. Datos que recopilamos</h2>
          <p>Podemos recopilar y procesar los siguientes tipos de información:</p>
          <ul>
            <li>
              <strong>Datos de navegación:</strong> dirección IP, tipo de navegador, páginas visitadas,
              tiempo de permanencia y origen del acceso (recopilados automáticamente por servicios de
              análisis y publicidad).
            </li>
            <li>
              <strong>Cookies y tecnologías similares:</strong> identificadores almacenados en su
              dispositivo para recordar preferencias, medir la audiencia y mostrar anuncios.
            </li>
            <li>
              <strong>Datos de contacto:</strong> nombre y correo electrónico, cuando nos envía un mensaje
              voluntariamente.
            </li>
          </ul>
          <p>
            No solicitamos datos sensibles (salud, religión, orientación sexual, datos biométricos, etc.)
            ni vendemos datos personales a terceros.
          </p>

          <h2 id="cookies">3. Cookies y publicidad (Google AdSense)</h2>
          <p>
            Utilizamos <strong>Google AdSense</strong> para mostrar anuncios. Google y sus
            socios pueden usar cookies para:
          </p>
          <ul>
            <li>Mostrar anuncios basados en sus visitas anteriores a este sitio web u otros sitios;</li>
            <li>Medir la efectividad de los anuncios y combatir el fraude;</li>
            <li>Limitar la frecuencia con la que se muestra un anuncio.</li>
          </ul>
          <p>Como lo exige Google AdSense, le informamos que:</p>
          <ul>
            <li>
              Terceros, incluido Google, utilizan cookies para mostrar anuncios basados en las visitas
              anteriores del usuario a nuestro sitio web u otros sitios en Internet;
            </li>
            <li>
              El uso de cookies de publicidad de Google permite a Google y sus socios mostrar anuncios
              basados en las visitas del usuario a nuestro sitio y/o otros sitios en Internet;
            </li>
            <li>
              El usuario puede desactivar la publicidad personalizada accediendo a{" "}
              <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
                Configuración de anuncios de Google
              </a>
              ;
            </li>
            <li>
              Alternativamente, puede desactivar el uso de cookies de terceros para publicidad
              personalizada en{" "}
              <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener noreferrer">
                www.aboutads.info
              </a>
              .
            </li>
          </ul>
          <p>
            Solo cargamos scripts publicitarios después de que consienta el uso de cookies, a través de la barra
            mostrada en su primera visita. Puede rechazar las cookies no esenciales en cualquier momento.
          </p>

          <h2>4. Finalidades del tratamiento</h2>
          <ul>
            <li>Publicar y distribuir contenido editorial;</li>
            <li>Mostrar anuncios para mantener el sitio financieramente sostenible;</li>
            <li>Medir la audiencia y mejorar la experiencia de lectura;</li>
            <li>Responder a los mensajes enviados a través del formulario de contacto;</li>
            <li>Cumplir con las obligaciones legales y prevenir el fraude.</li>
          </ul>

          <h2>5. Sus derechos</h2>
          <p>Según las leyes de privacidad, puede solicitar:</p>
          <ul>
            <li>Confirmación y acceso a sus datos;</li>
            <li>Corrección de datos incompletos o desactualizados;</li>
            <li>Anonimización, bloqueo o eliminación de datos innecesarios;</li>
            <li>Retirada del consentimiento;</li>
            <li>Información sobre el intercambio de datos.</li>
          </ul>
          <p>
            Para ejercer estos derechos, envíe un correo electrónico a{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>

          <h2>6. Cambios</h2>
          <p>
            Podemos actualizar esta política periódicamente. La fecha de la última revisión se indicará
            siempre en la parte superior de la página.
          </p>

          <p>
            Consulte también nuestros{" "}
            <Link to="/termos" className="text-accent underline">
              Términos de Uso
            </Link>{" "}
            y la página de{" "}
            <Link to="/contato" className="text-accent underline">
              Contacto
            </Link>
            .
          </p>
        </>
      )}
    </LegalPageLayout>
  );
}
