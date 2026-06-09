export type StoryRecord = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  category_slug: string;
  body: string[];
  featured: boolean;
  sort_order: number;
};

export const STATIC_STORIES: StoryRecord[] = [
  {
    slug: "onde-o-mar-encontra-o-silencio",
    title: "Onde o Mar Encontra o Silêncio",
    excerpt:
      "Numa enseada esquecida pelo mapa, um faroleiro aprende que o silêncio também tem marés — e que algumas histórias só chegam quando paramos de procurá-las.",
    category: "Ficção",
    category_slug: "ficcao",
    featured: true,
    sort_order: 1,
    body: [
      "O farol não piscava há três noites, mas ninguém na vila parecia notar. Para Mateus, porém, cada ausência de luz era um sinal — como se o horizonte estivesse pedindo descanso.",
      "Ele subiu a escada de pedra ao amanhecer, com o sal grudado na pele e o café frio na mão. O vento trazia um cheiro de algas e de memórias antigas, daquelas que não pertencem a uma pessoa só.",
      "No topo, encontrou a lâmpada intacta. O problema estava no silêncio: um silêncio tão denso que abafava até o ruído das ondas. Mateus ficou parado, escutando o que normalmente se deixa passar.",
      "Foi então que viu a carta, presa entre duas pedras, amarelada pelo tempo. Não tinha remetente. Dizia apenas: «Volte quando o mar parar de falar.»",
      "Mateus sorriu. O mar nunca para. Mas, naquele dia, por um instante, pareceu escutar.",
    ],
  },
  {
    slug: "a-ultima-carta-de-lisboa",
    title: "A Última Carta de Lisboa",
    excerpt:
      "Entre cafés e elétricos, uma correspondência inacabada atravessa décadas e encontra, enfim, quem estava pronto para lê-la.",
    category: "Memórias",
    category_slug: "memorias",
    featured: false,
    sort_order: 2,
    body: [
      "A máquina de escrever estava coberta por um lenço bordado. Clara herdou-a da avó junto com uma caixa de cartas nunca enviadas.",
      "Lisboa cheirava a torrada e a chuva recente. Clara caminhou até o miradouro onde a avó dizia ter aprendido a esperar.",
      "Na terceira carta, encontrou um endereço riscado e reescrito três vezes. Não era um erro — era hesitação, o tipo de hesitação que muda uma vida.",
      "Seguiu o caminho até uma livraria pequena, de portas estreitas. O dono reconheceu o sobrenome dela antes que ela dissesse o próprio nome.",
      "«Ela voltaria todo outono», disse ele. «Disse que escreveria quando tivesse coragem de ficar.» Clara percebeu, então, que a última carta não era para outra pessoa. Era para si.",
    ],
  },
  {
    slug: "a-geometria-do-caos-urbano",
    title: "A Geometria do Caos Urbano",
    excerpt:
      "Sob a chuva, uma cidade inteira se reorganiza em linhas invisíveis — e uma fotógrafa decide registrar o que ninguém mais vê.",
    category: "Ficção",
    category_slug: "ficcao",
    featured: false,
    sort_order: 3,
    body: [
      "Helena fotografava reflexos. Não por estética, mas por necessidade: era a única forma de enxergar a cidade sem ser engolida por ela.",
      "Na esquina da Rua das Flores, um guarda-chuva vermelho virou ponto de fuga em meio ao cinza da tarde. Clique. Depois outro. Depois mais dez.",
      "Entre um semáforo e outro, percebeu um padrão: pessoas desviavam do mesmo lugar, como se houvesse um obstáculo invisível no meio da calçada.",
      "No dia seguinte, voltou com uma câmera analógica e paciência de arquiteta. Mediu passos, sombras, pausas. O caos tinha geometria — só faltava alguém disposto a olhar de lado.",
      "Quando revelou os negativos, o obstáculo apareceu: uma placa antiga, enterrada sob camadas de propaganda. A cidade lembrava, mesmo quando fingia esquecer.",
    ],
  },
  {
    slug: "caminhos-de-lavanda",
    title: "Caminhos de Lavanda",
    excerpt:
      "De bicicleta por estradas secundárias, dois irmãos percorrem a rota que a mãe deixou desenhada em um caderno de viagens.",
    category: "Ficção",
    category_slug: "ficcao",
    featured: false,
    sort_order: 4,
    body: [
      "O caderno tinha manchas de chá e coordenadas imprecisas. «Não é um mapa», avisou a mãe antes de partir. «É um convite.»",
      "Pedro e Luísa alugaram bicicletas velozes demais para suas pernas cansadas. A primeira subida os fez rir da própria prepotência.",
      "No quilômetro doze, o asfalto acabou. Em seu lugar, um caminho roxo de lavanda e poeira dourada. O cheiro era tão forte que parecia memória sólida.",
      "Pararam numa casa de pedra onde uma senhora ofereceu água e silêncio. «Sua mãe passou aqui num outono», disse ela, sem perguntar quem eram.",
      "À noite, sob estrelas sem nome, entenderam o convite: não era chegar a algum lugar. Era aprender a atravessar juntos.",
    ],
  },
  {
    slug: "o-relojoeiro-do-tempo",
    title: "O Relojoeiro do Tempo",
    excerpt:
      "Numa oficina sem vitrine, um relojoeiro conserta mais do que mecanismos: devolve aos visitantes os minutos que achavam perdidos.",
    category: "Ficção",
    category_slug: "ficcao",
    featured: false,
    sort_order: 5,
    body: [
      "A porta tinha um sino tão discreto que só tocava para quem realmente precisava entrar. Dentro, centenas de relógios marcavam horas diferentes.",
      "«Não conserto tempo», disse o relojoeiro. «Conserto atenção.» Ele falava sem levantar os olhos de uma engrenagem minúscula.",
      "Ana entregou um pocket watch que pertencera ao pai. Havia parado no minuto em que ele disse «volto já» e nunca voltou.",
      "Durante três dias, Ana voltou à oficina só para escutar o tique-taque. No terceiro, o relógio voltou a andar — e com ele voltou a lembrança de uma conversa inteira, não apenas da despedida.",
      "Ao sair, percebeu que nunca estivera quebrado. Só estivera pausado, esperando ser escutado.",
    ],
  },
  {
    slug: "bibliotecas-de-almas",
    title: "Bibliotecas de Almas",
    excerpt:
      "Entre estantes empoeiradas, uma bibliotecária aposentada cataloga não livros, mas as histórias que os leitores deixam nas margens.",
    category: "Memórias",
    category_slug: "memorias",
    featured: false,
    sort_order: 6,
    body: [
      "Cada margem anotada era um fio de voz. Dona Elisa passou quarenta anos reunindo esses fios num arquivo que ninguém pedia, mas todos precisavam.",
      "Havia risos em romances tristes, receitas em poesia, telefones riscados em capítulos finais. Era uma biblioteca paralela, feita de gestos íntimos.",
      "Quando a prefeitura anunciou o fechamento do prédio, os leitores apareceram com caixas e histórias. Não salvaram apenas o lugar — salvaram o que o lugar significava.",
      "Dona Elisa organizou uma noite de leitura. Cada pessoa leu uma anotação alheia, com permissão e cuidado. O silêncio entre uma leitura e outra pesava como abraço.",
      "No fim, a biblioteca permaneceu aberta. Não por decreto, mas por acordo tácito: enquanto houver margens em branco, haverá espaço para continuar.",
    ],
  },
];
