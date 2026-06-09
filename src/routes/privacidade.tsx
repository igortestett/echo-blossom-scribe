import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { CONTACT_EMAIL, SITE_NAME, getSiteUrl } from "@/lib/site";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: `Política de Privacidade — ${SITE_NAME}` },
      {
        name: "description",
        content:
          "Política de privacidade do Contos & Crônicas: coleta de dados, cookies, Google AdSense e seus direitos.",
      },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: PrivacidadePage,
});

function PrivacidadePage() {
  const siteUrl = getSiteUrl();

  return (
    <LegalPageLayout eyebrow="Legal" title="Política de Privacidade">
      <p>
        <strong>Última atualização:</strong> 9 de junho de 2026
      </p>
      <p>
        O <strong>{SITE_NAME}</strong> ({siteUrl}) respeita sua privacidade. Esta política explica
        quais dados coletamos, como os utilizamos e quais são seus direitos, em conformidade com a
        Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018) e com os requisitos do programa
        Google AdSense.
      </p>

      <h2>1. Quem somos</h2>
      <p>
        O {SITE_NAME} é um site editorial de ficção, crônicas e memórias em português. Para dúvidas
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
        Outras redes de anúncios parceiras do Google também podem usar cookies. Você pode visitar os
        sites desses fornecedores para saber mais sobre suas práticas e opções de exclusão (opt-out),
        quando disponíveis.
      </p>
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
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Política de Privacidade do Google
          </a>
          ;
        </li>
        <li>
          <strong>GitHub Pages</strong> (hospedagem do site), que processa logs de acesso
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
    </LegalPageLayout>
  );
}
