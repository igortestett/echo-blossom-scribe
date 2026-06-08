import featuredLighthouse from "@/assets/featured-lighthouse.jpg";
import storyTypewriter from "@/assets/story-typewriter.jpg";
import storyRain from "@/assets/story-rain.jpg";
import storyBicycle from "@/assets/story-bicycle.jpg";
import storyClock from "@/assets/story-clock.jpg";
import storyLibrary from "@/assets/story-library.jpg";

export type Story = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  cover: string;
  body: string[];
  featured?: boolean;
};

export const stories: Story[] = [
  {
    slug: "onde-o-mar-encontra-o-silencio",
    title: "Onde o Mar Encontra o Silêncio",
    excerpt:
      "Uma jornada pelas vilas esquecidas da costa atlântica, onde as marés contam segredos que o tempo preferiu não registrar.",
    category: "Crônica",
    categorySlug: "cronica",
    cover: featuredLighthouse,
    featured: true,
    body: [
      "Havia um farol no fim da estrada que ninguém visitava há trinta anos. As pessoas da vila diziam que o velho Joaquim ainda subia a escada de caracol todas as madrugadas, mesmo depois da lâmpada apagar para sempre.",
      "Cheguei lá num fim de outono, com um caderno meio vazio e a vaga promessa de escrever sobre o esquecimento. O que encontrei foi outra coisa: um silêncio tão denso que parecia ter cheiro de sal, de ferrugem e de cartas guardadas.",
      "A primeira vez que ouvi o mar bater contra as rochas, entendi por que as vilas litorâneas envelhecem em câmera lenta. Não é preguiça — é uma forma de respeito pelo tempo. Aqui, o tempo não se mede em horas; mede-se em marés.",
      "Aos poucos, fui sendo apresentado aos que ficaram. Dona Aurora, que ainda faz pão de milho às quartas. Seu Domingos, que conserta redes desde os doze anos. Cada um deles guardava uma história sobre o farol, e nenhuma delas era igual à outra.",
      "Voltei para casa três semanas depois com o caderno cheio e uma certeza inesperada: algumas histórias só se contam quando aprendemos a ouvir o que o silêncio tem a dizer.",
    ],
  },
  {
    slug: "a-ultima-carta-de-lisboa",
    title: "A Última Carta de Lisboa",
    excerpt:
      "Um envelope selado por trinta anos revela uma verdade que mudaria o destino de uma família inteira em um verão quente de agosto.",
    category: "Ficção Curta",
    categorySlug: "ficcao",
    cover: storyTypewriter,
    body: [
      "O envelope estava no fundo da gaveta, debaixo de uma pilha de bilhetes de bonde já amarelados. Tinha o selo de Lisboa, o carimbo borrado, e o nome da minha avó escrito numa caligrafia que eu nunca tinha visto.",
      "Levei três dias para abri-lo. Não por respeito ao destinatário, que já não estava entre nós, mas porque algumas coisas precisam de coragem para serem lidas em voz baixa.",
      "Quando finalmente desdobrei o papel, encontrei uma única frase: 'Se você está lendo isto, é porque eu não tive coragem de te contar pessoalmente.' O resto da página estava em branco, e talvez fosse esse o ponto.",
    ],
  },
  {
    slug: "a-geometria-do-caos-urbano",
    title: "A Geometria do Caos Urbano",
    excerpt:
      "Observações sobre a pressa dos transeuntes na Avenida Paulista e a beleza escondida no concreto cinza.",
    category: "Crônica",
    categorySlug: "cronica",
    cover: storyRain,
    body: [
      "Há uma coreografia secreta nos cruzamentos da Avenida Paulista. Quem nunca parou para observá-la, jura que não existe. Quem já parou, sabe que ela é a única coisa que mantém a cidade de pé.",
      "Os passos se alinham, se desalinham, se reencontram. Há quem corra, há quem arraste, há quem hesite no meio da faixa como se tivesse esquecido o motivo de estar ali. E o sinal apaga, e tudo recomeça.",
    ],
  },
  {
    slug: "caminhos-de-lavanda",
    title: "Caminhos de Lavanda",
    excerpt:
      "Perder-se no sul da França é encontrar um ritmo de vida que a modernidade tentou, sem sucesso, apagar.",
    category: "Viagem",
    categorySlug: "viagem",
    cover: storyBicycle,
    body: [
      "Em Sault, o tempo tem cheiro. De lavanda recém-cortada, de pão saindo do forno, de tinta secando num cavalete no quintal de uma casa que ainda guarda as janelas azuis dos avós.",
      "Aluguei uma bicicleta enferrujada e segui por uma estrada de terra batida sem mapa. O que encontrei foi melhor: campos que se desdobravam em ondas roxas até o horizonte e a certeza de que algumas viagens não pedem destino.",
    ],
  },
  {
    slug: "o-relojoeiro-do-tempo",
    title: "O Relojoeiro do Tempo",
    excerpt:
      "Uma metáfora sobre as peças que compõem nossa existência e como o tempo nunca é realmente linear.",
    category: "Reflexão",
    categorySlug: "reflexao",
    cover: storyClock,
    body: [
      "O relojoeiro me disse, com a lupa ainda presa ao olho: 'O tempo não passa. Ele se enrosca, se sobrepõe, volta atrás quando ninguém está olhando.' Sorri, achando graça da imagem. Ele continuou sério.",
      "Saí da oficina com o relógio do meu pai consertado e a estranha sensação de que tinha entendido alguma coisa muito antiga, mesmo sem conseguir nomeá-la.",
    ],
  },
  {
    slug: "bibliotecas-de-almas",
    title: "Bibliotecas de Almas",
    excerpt:
      "Conversamos com colecionadores de livros raros sobre o que torna uma história eterna.",
    category: "Entrevista",
    categorySlug: "entrevista",
    cover: storyLibrary,
    body: [
      "A primeira coisa que se nota ao entrar na casa de Otávio Brandão é o cheiro. Uma mistura de papel envelhecido, café requentado e cedro — o aroma das estantes que ele mesmo construiu há quarenta anos.",
      "'Um livro só envelhece quando ninguém o lê', diz, enquanto folheia uma primeira edição de Machado com a delicadeza de quem manuseia uma relíquia viva.",
    ],
  },
];

export function getStoryBySlug(slug: string): Story | undefined {
  return stories.find((s) => s.slug === slug);
}

export function getRelatedStories(slug: string, count = 3): Story[] {
  return stories.filter((s) => s.slug !== slug).slice(0, count);
}
