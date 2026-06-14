import { NEW_STORIES_EN, NEW_STORIES_ES, NEW_STORIES_PT } from "./stories-content";

export type StoryLang = "pt" | "en" | "es";

export type StoryRecord = {
  /** Idioma editorial da história (conteúdo independente por idioma). */
  lang: StoryLang;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  category_slug: string;
  body: string[];
  featured: boolean;
  sort_order: number;
};

type StoryRecordInput = Omit<StoryRecord, "lang">;

export const STATIC_STORIES_PT: StoryRecordInput[] = [
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
      "O caderno tinha manchas de chá e coordenadas imprecisas. «Não é um mapa», avisou a mãe antes de partir. «Es um convite.»",
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
  {
    slug: "o-ultimo-onibus-da-noite",
    title: "O Último Ônibus da Noite",
    excerpt:
      "Na última linha que ainda circula depois da meia-noite, passageiros solitários descobrem que alguns destinos só aparecem quando a cidade adormece.",
    category: "Ficção",
    category_slug: "ficcao",
    featured: false,
    sort_order: 7,
    body: [
      "O motorista conhecia cada buraco do asfalto e cada silêncio dos bancos vazios. Havia vinte anos naquela rota, e ainda assim, certas noites pareciam estranhas — como se o ônibus atravessasse uma versão mais honesta da cidade.",
      "Rafaela subiu na parada da ponte com um casaco grande demais e um bilhete amassado. Não era a primeira vez. Sempre escolhia o último horário, quando ninguém perguntava para onde ia.",
      "No meio do trajeto, uma senhora de cabelos brancos pediu para descer num ponto que não constava no mapa. O motorista assentiu sem estranhar. Rafaela quis perguntar, mas o silêncio parecia mais educado que a curiosidade.",
      "Quando chegou sua vez, desceu diante de uma rua que ela jurava não existir na luz do dia. Havia uma padaria acesa, cheiro de pão quente e uma placa com o nome da mãe, falecida havia dez anos.",
      "Rafaela entrou. Não encontrou a mãe — encontrou, porém, a conversa que nunca tiveram. Ao voltar para a calçada, o ônibus já tinha ido. Mas a rua, pela primeira vez, permanecia.",
    ],
  },
  {
    slug: "heranca-de-papel",
    title: "Herança de Papel",
    excerpt:
      "Ao abrir o baú do avô, Marina descobre um baralho de cartas em branco que, uma a uma, passam a responder perguntas que ela ainda não fez.",
    category: "Memórias",
    category_slug: "memorias",
    featured: false,
    sort_order: 8,
    body: [
      "O baú cheirava a madeira antiga e a tabaco de cachimbo. Dentro, além de chaves sem fechadura e fotografias desbotadas, havia um baralho inteiro de cartas lisas, sem nenhum desenho.",
      "Marina achou estranho, mas levou tudo para casa. Na primeira noite, escreveu uma pergunta no verso de uma carta e deixou-a sobre a mesa antes de dormir.",
      "De manhã, ao acordar, encontrou palavras na frente — letra miúda, firme, igual à do avô. Não era resposta direta; era mais como um lembrete de algo que ela sempre soubera e preferiu adiar.",
      "Testou de novo. E de novo. As cartas nunca mentiam, mas também nunca simplificavam. Diziam verdades do tamanho certo para caber numa noite de insônia.",
      "Quando a última carta se preencheu, Marina percebeu que o baralho não adivinhava o futuro. Apenas devolvia, em pequenas doses, o que a família inteira tinha deixado sem dizer.",
    ],
  },
  {
    slug: "a-varanda-das-cinco",
    title: "A Varanda das Cinco",
    excerpt:
      "Todas as tardes, às cinco, vizinhos de prédios diferentes se encontram em varandas alinhadas — sem se conhecer, até o dia em que uma cortina se abre.",
    category: "Ficção",
    category_slug: "ficcao",
    featured: false,
    sort_order: 9,
    body: [
      "Havia um minuto exato em que a cidade parecia respirar junto: cinco da tarde. Nesse instante, Sérgio levava o café para a varanda, Lúcia regava as plantas, e um homem de camisa listrada lia em voz baixa um livro que ninguém ouvia por completo.",
      "Moravam em prédios distintos, separados por um beco estreito, mas alinhados de tal forma que podiam se ver sem se olhar diretamente. Era um ritual discreto, quase urbano.",
      "Numa quarta-feira chuvosa, a luz de Lúcia apagou. Sérgio hesitou, depois acendeu a sua mais forte, como quem deixa uma vela na janela. O homem da camisa listrada fez o mesmo.",
      "Na noite seguinte, Lúcia apareceu na varanda com um bilhete preso à grade: «Obrigada.» Sérgio respondeu com outro: «Amanhã trago bolo.» O homem listrado riu pela primeira vez em meses.",
      "Não viraram amigos de imediato. Mas, a partir daquele dia, as cinco horas deixaram de ser apenas um horário. Viraram promessa.",
    ],
  },
  {
    slug: "trilha-alem-do-por-do-sol",
    title: "Trilha Além do Pôr do Sol",
    excerpt:
      "Um guia de montanha leva um grupo pequeno por um sendero que só existe na luz dourada dos últimos vinte minutos do dia.",
    category: "Ficção",
    category_slug: "ficcao",
    featured: false,
    sort_order: 10,
    body: [
      "João não vendia aventura; vendia atenção. Por isso limitava as caminhadas a seis pessoas e recusava quem chegava com pressa.",
      "A trilha começava comum o bastante: pedras, pinheiros, o vento cortando o rosto. Mas João só avançava quando o sol tocava o horizonte, como se o caminho dependesse da cor do céu.",
      "Com o crepúsculo, o mato mudava. Flores que não estavam ali de manhã abriam pétalas largas. O ar ficava doce, quase comestível. Uma participante chorou sem saber explicar.",
      "No alto, não havia mirante nem placa. Havia apenas um banco de madeira e uma vista que parecia recém-desenhada. João disse: «Agora vocês podem falar.»",
      "Na descida, já na escuridão, alguém perguntou se a trilha seria real no dia seguinte. João sorriu. «Ela sempre existiu. Só pede o horário certo para ser vista.»",
    ],
  },
  {
    slug: "o-jardim-das-vozes-antigas",
    title: "O Jardim das Vozes Antigas",
    excerpt:
      "Num terreno esquecido no meio da cidade, uma professora aposentada cultiva plantas raras e histórias que os vizinhos juram ouvir ao passar.",
    category: "Memórias",
    category_slug: "memorias",
    featured: false,
    sort_order: 11,
    body: [
      "O terreno estava abandonado há anos quando Dona Célia pediu autorização para cuidar dele. Não queria construir nada — queria plantar memória.",
      "Começou com mudas simples: manjericão, alecrim, boldo. Depois vieram espécies que os netos não reconheciam, trazidas de viagens antigas e de conversas em mercados de bairro.",
      "Os vizinhos notaram primeiro os cheiros, depois os sons. Não eram pássaros. Pareciam frases curtas, presas nas folhas, como se o vento lesse em voz alta trechos de cartas antigas.",
      "Uma menina gravou um áudio e viralizou na vizinhança. Dona Célia não se importou. Disse apenas que o jardim sempre falara; a cidade é que andava rápido demais para escutar.",
      "Quando faleceu, deixou o terreno aberto. Hoje, quem passa ainda encontra o portão destrancado e um caderno à entrada: «Regue se quiser continuar a conversa.»",
    ],
  },
  {
    slug: "neblina-no-porto",
    title: "Neblina no Porto",
    excerpt:
      "Um marinheiro aposentado volta ao cais onde trabalhou a vida inteira e encontra, na neblina da manhã, o navio que achava ter sido apenas lenda.",
    category: "Ficção",
    category_slug: "ficcao",
    featured: false,
    sort_order: 12,
    body: [
      "Antônio conhecia o porto pelo cheiro. Mesmo aposentado, acordava cedo e caminhava até o cais, como quem verifica se o mar ainda está no lugar.",
      "Naquela manhã, a neblina era tão densa que apagou o horizonte. Os guindastes viraram sombras. O café da barraquinha parecia suspender o vapor no ar.",
      "Foi então que viu o navio: casco alto, cordas grossas, nome pintado em letras que ele só lembrava de ter lido em sonhos de infância. O mesmo navio do pai, perdido décadas antes numa viagem sem retorno.",
      "Correu até a borda. A escada estava baixada. No convés, ninguém — apenas uma bússola antiga e um bilhete: «Leve quem precisa voltar.»",
      "Antônio não embarcou. Colocou a bússola no bolso e, quando a neblina se dissipou, o navio já não estava. Mas o cais cheirava, pela primeira vez em anos, a casa.",
    ],
  },
  {
    slug: "a-estacao-dos-ecos",
    title: "A Estação dos Ecos",
    excerpt:
      "Numa estação de trem quase deserta, passageiros ouvem conversas que não são de agora — e um bilheteiro aprende a distinguir o que é memória do que é destino.",
    category: "Ficção",
    category_slug: "ficcao",
    featured: false,
    sort_order: 13,
    body: [
      "A estação tinha um relógio parado e um bilheteiro que nunca parecia surpreso. Ricardo trabalhava ali há vinte anos e dizia que o lugar guardava vozes como paredes guardam umidade.",
      "Na primeira noite de inverno, uma mulher desceu do trem chorando e pediu passagem para uma cidade que não constava no painel. Ricardo não hesitou. Imprimiu um bilhete em branco e disse: «Escute antes de embarcar.»",
      "Ela escutou. Entre dois anúncios distorcidos, ouviu a própria voz de criança pedindo desculpa a alguém que já não estava vivo. O eco não repetia o passado — devolvia o que faltava dizer.",
      "Outros vieram depois. Cada um ouvia algo diferente: um pedido de socorro, uma receita ditada pela avó, um «eu te amo» que nunca saiu do peito. Ricardo anotava os horários num caderno sem explicar por quê.",
      "Quando a estação foi fechada para reforma, encontraram o caderno. Não havia nomes, só horários e uma frase repetida: «Alguns trens não levam para longe. Levam para dentro.»",
    ],
  },
  {
    slug: "o-atelier-das-luas",
    title: "O Ateliê das Luas",
    excerpt:
      "Uma pintora só trabalha à noite, reproduzindo fases da lua que ninguém mais lembra — até um visitante reconhecer, num quadro, o céu do dia em que perdeu alguém.",
    category: "Ficção",
    category_slug: "ficcao",
    featured: false,
    sort_order: 14,
    body: [
      "O ateliê ficava no último andar de um prédio antigo, sem placa na porta. Beatriz pintava exclusivamente luas: crescentes raras, luas cheias que nunca existiram, quartos minguantes de datas esquecidas.",
      "Não vendia para galerias. Vendia para quem chegava com uma data na mão e uma história mal contada. «Não pinto o céu», dizia. «Pinto o que ficou pendurado nele.»",
      "Tomás entrou numa terça-feira molhada com a data do funeral da mãe. Beatriz preparou a tela em silêncio, misturou azuis que pareciam respirar e, ao entardecer, revelou uma lua baixa sobre um campo que ele jurava conhecer.",
      "Tomás chorou sem vergonha. Não era o campo da infância — era o campo da despedida que ele não teve coragem de atravessar. A pintura não trazia a mãe de volta; trazia o instante em que ele ainda podia dizer adeus.",
      "Quando saiu, a rua estava iluminada por uma lua comum. Beatriz fechou o ateliê e guardou os pincéis. Havia noites em que pintar era apenas escutar quem bate à porta sem saber o que pedir.",
    ],
  },
  {
    slug: "cartografia-do-cheiro",
    title: "Cartografia do Cheiro",
    excerpt:
      "Uma perfumista aposentada mapeia a infância em frascos rotulados — e descobre que certos aromas só se abrem quando alguém está pronto para lembrar.",
    category: "Memórias",
    category_slug: "memorias",
    featured: false,
    sort_order: 15,
    body: [
      "Dona Fernanda não guardava joias. Guardava cheiros em frascos de vidro âmbar, cada um com uma etiqueta de caligrafia firme: «domingo de chuva», «primeiro dia de aula», «cozinha da vó, 1974».",
      "A neta Júlia achava exagero até herdar a coleção. Abriu um frasco ao acaso — terra molhada e ferro quente — e foi tomada por uma memória que não era dela: o quintal onde a avó plantara tomates antes de mudar de cidade.",
      "Fernanda, ainda viva, explicou sem mistério: «Cheiro não mente. Só espera a pessoa certa.» Júlia passou semanas reorganizando os frascos num mapa desenhado à mão, ligando aromas a ruas, estações e silêncios.",
      "No centro do mapa, um frasco sem rótulo. Fernanda disse que só seria nomeado quando Júlia encontrasse o cheiro que faltava na própria vida. Levou meses. Veio numa tarde de café derramado no sofá novo: medo e alívio misturados.",
      "Rotularam juntas: «o dia em que parei de fugir». O mapa ficou na parede da sala. Visitantes perguntavam se era arte. Júlia respondia que era endereço — o tipo de endereço que não aparece em aplicativos.",
    ],
  },
  {
    slug: "o-telescopio-de-vidro",
    title: "O Telescópio de Vidro",
    excerpt:
      "No terraço de um prédio esquecido, um astrônomo amador enxerga nas estrelas mensagens em código — e percebe que o remetente pode estar mais perto do que o céu.",
    category: "Ficção",
    category_slug: "ficcao",
    featured: false,
    sort_order: 16,
    body: [
      "Eduardo montava o telescópio de vidro toda vez que o céu limpava. Era peça única, herdada de um tio que jurava falar com constelações. Os vizinhos achavam bonito. Eduardo achava necessário.",
      "Na terceira semana de observação, notou um padrão: estrelas piscando em sequência, como morse celestial. Anotou, decifrou, traduziu. As mensagens eram curtas: «ainda aqui», «olhe para baixo», «não está sozinho».",
      "Chamou uma amiga física. Ela riu, depois calou. O padrão não era aleatório — mas também não vinha de satélites conhecidos. Vinha de reflexos: luz urbana batendo em janelas de um prédio em frente, sincronizada por alguém.",
      "No outro terraço, uma menina de doze anos segurava um espelho e um caderno. Não buscava fama. Buscava companhia para noites em que a mãe trabalhava até tarde. «Pensei que ninguém olhava para cima», disse ela.",
      "Eduardo desceu com chocolate quente. Passaram a conversar por luz e papel. O telescópio de vidro continuou apontado para o céu — mas Eduardo, enfim, entendeu o tio: às vezes, o universo responde na janela ao lado.",
    ],
  },
  {
    slug: "correspondencia-de-chuva",
    title: "Correspondência de Chuva",
    excerpt:
      "Sempre que chove, cartas aparecem na caixa de correio de uma casa de esquina — endereçadas a quem mora ali, mesmo quando a casa está vazia.",
    category: "Memórias",
    category_slug: "memorias",
    featured: false,
    sort_order: 17,
    body: [
      "A casa de esquina estava fechada há dois anos quando Laura alugou o apartamento dos fundos. Na primeira chuva forte, ouviu a tampa da caixa de correio bater três vezes.",
      "Dentro, uma carta sem selo e sem remetente: «Se você leu isto, é porque voltou a escutar.» A letra era da mãe, morta antes de Laura terminar a faculdade. O papel cheirava a lavanda e tinta azul.",
      "Ela quase chamou a polícia. Quase. Guardou a carta num livro e esperou a próxima chuva. Veio uma semana depois, com outra mensagem: «Não precisa acreditar. Só precisa responder.»",
      "Laura respondeu na janela, com giz, numa noite de garoa. Não sabia para quem. Na manhã seguinte, encontrou na caixa um desenho de bicicleta vermelha — a mesma que aprendera a andar sem rodinhas.",
      "Parou de procurar explicação racional. Passou a escrever quando chovia: medos, gratidões, receitas, pedidos de desculpa. As respostas não chegavam sempre. Mas, quando chegavam, a casa de esquina parecia, pela primeira vez, habitada por duas pessoas.",
    ],
  },
  ...NEW_STORIES_PT,
];

export const STATIC_STORIES_EN: StoryRecordInput[] = [
  {
    slug: "onde-o-mar-encontra-o-silencio",
    title: "Where the Sea Meets the Silence",
    excerpt:
      "In a cove forgotten by the map, a lighthouse keeper learns that silence also has tides — and that some stories only arrive when we stop looking for them.",
    category: "Fiction",
    category_slug: "ficcao",
    featured: true,
    sort_order: 1,
    body: [
      "The lighthouse hadn't flashed for three nights, but no one in the village seemed to notice. For Mateus, however, each absence of light was a sign — as if the horizon were asking for rest.",
      "He climbed the stone stairs at dawn, salt clinging to his skin and cold coffee in hand. The wind brought a smell of algae and old memories, the kind that do not belong to just one person.",
      "At the top, he found the lamp intact. The problem was in the silence: a silence so dense that it drowned out even the noise of the waves. Mateus stood still, listening to what is normally let pass.",
      "It was then that he saw the letter, trapped between two stones, yellowed by time. It had no sender. It said only: 'Come back when the sea stops talking.'",
      "Mateus smiled. The sea never stops. But, on that day, for an instant, it seemed to listen.",
    ],
  },
  {
    slug: "a-ultima-carta-de-lisboa",
    title: "The Last Letter from Lisbon",
    excerpt:
      "Between cafes and trams, an unfinished correspondence crosses decades and finally finds someone who was ready to read it.",
    category: "Memories",
    category_slug: "memorias",
    featured: false,
    sort_order: 2,
    body: [
      "The typewriter was covered by an embroidered handkerchief. Clara inherited it from her grandmother along with a box of letters never sent.",
      "Lisbon smelled of toast and recent rain. Clara walked to the viewpoint where her grandmother said she had learned to wait.",
      "In the third letter, she found an address crossed out and rewritten three times. It wasn't a mistake — it was hesitation, the kind of hesitation that changes a life.",
      "She followed the path to a small bookstore with narrow doors. The owner recognized her last name before she even said her own name.",
      "'She would return every autumn,' he said. 'Said she would write when she had the courage to stay.' Clara realized, then, that the last letter was not for another person. It was for herself.",
    ],
  },
  {
    slug: "a-geometria-do-caos-urbano",
    title: "The Geometry of Urban Chaos",
    excerpt:
      "Under the rain, an entire city reorganizes itself into invisible lines — and a photographer decides to record what nobody else sees.",
    category: "Fiction",
    category_slug: "ficcao",
    featured: false,
    sort_order: 3,
    body: [
      "Helena photographed reflections. Not for aesthetics, but out of necessity: it was the only way to see the city without being swallowed by it.",
      "On the corner of Rua das Flores, a red umbrella became a vanishing point in the middle of the gray afternoon. Click. Then another. Then ten more.",
      "Between one traffic light and another, she noticed a pattern: people detoured around the same spot, as if there were an invisible obstacle in the middle of the sidewalk.",
      "The next day, she returned with an analog camera and an architect's patience. She measured steps, shadows, pauses. Chaos had geometry — it just lacked someone willing to look sideways.",
      "When she developed the negatives, the obstacle appeared: an old sign, buried under layers of advertising. The city remembered, even when pretending to forget.",
    ],
  },
  {
    slug: "caminhos-de-lavanda",
    title: "Lavender Pathways",
    excerpt:
      "Biking through secondary roads, two siblings travel the route their mother left drawn in a travel journal.",
    category: "Fiction",
    category_slug: "ficcao",
    featured: false,
    sort_order: 4,
    body: [
      "The notebook had tea stains and imprecise coordinates. 'It's not a map,' the mother warned before leaving. 'It's an invitation.'",
      "Pedro and Luísa rented bicycles that were too fast for their tired legs. The first climb made them laugh at their own arrogance.",
      "At kilometer twelve, the asphalt ended. In its place, a purple path of lavender and golden dust. The smell was so strong that it felt like solid memory.",
      "They stopped at a stone house where an old lady offered water and silence. 'Your mother passed by here one autumn,' she said, without asking who they were.",
      "At night, under stars without names, they understood the invitation: it was not to arrive somewhere. It was to learn to cross together.",
    ],
  },
  {
    slug: "o-relojoeiro-do-tempo",
    title: "The Watchmaker of Time",
    excerpt:
      "In a workshop without a display window, a watchmaker repairs more than mechanisms: he returns to visitors the minutes they thought were lost.",
    category: "Fiction",
    category_slug: "ficcao",
    featured: false,
    sort_order: 5,
    body: [
      "The door had a bell so discrete that it only rang for those who really needed to enter. Inside, hundreds of clocks marked different hours.",
      "'I don't repair time,' said the watchmaker. 'I repair attention.' He spoke without raising his eyes from a tiny gear.",
      "Ana handed him a pocket watch that had belonged to her father. It had stopped at the minute he said 'I'll be right back' and never returned.",
      "For three days, Ana returned to the workshop just to listen to the tick-tock. On the third day, the watch started ticking again — and with it returned the memory of an entire conversation, not just the farewell.",
      "As she left, she realized it had never been broken. It had only been paused, waiting to be listened to.",
    ],
  },
  {
    slug: "bibliotecas-de-almas",
    title: "Library of Souls",
    excerpt:
      "Between dusty shelves, a retired librarian catalogs not books, but the stories that readers leave in the margins.",
    category: "Memories",
    category_slug: "memorias",
    featured: false,
    sort_order: 6,
    body: [
      "Each margin note was a thread of voice. Dona Elisa spent forty years gathering these threads in an archive that no one asked for, but everyone needed.",
      "There were laughs in sad novels, recipes in poetry, crossed-out phone numbers in final chapters. It was a parallel library, made of intimate gestures.",
      "When the city council announced the closure of the building, the readers showed up with boxes and stories. They didn't just save the place — they saved what the place meant.",
      "Dona Elisa organized a reading night. Each person read someone else's note, with permission and care. The silence between one reading and another weighed like a hug.",
      "In the end, the library remained open. Not by decree, but by tacit agreement: as long as there are blank margins, there will be room to continue.",
    ],
  },
  {
    slug: "o-ultimo-onibus-da-noite",
    title: "The Last Night Bus",
    excerpt:
      "On the last route still running after midnight, solitary passengers discover that some destinations only appear when the city falls asleep.",
    category: "Fiction",
    category_slug: "ficcao",
    featured: false,
    sort_order: 7,
    body: [
      "The driver knew every pothole and every silence of the empty seats. He had been on that route for twenty years, and yet some nights still felt strange — as if the bus crossed a more honest version of the city.",
      "Rafaela boarded at the bridge stop with an oversized coat and a crumpled ticket. It wasn't her first time. She always chose the last schedule, when no one asked where she was going.",
      "Midway through the trip, a white-haired woman asked to get off at a stop that wasn't on the map. The driver nodded without surprise. Rafaela wanted to ask, but silence seemed more polite than curiosity.",
      "When her turn came, she stepped off in front of a street she swore didn't exist in daylight. There was an open bakery, the smell of warm bread, and a sign with her mother's name, who had died ten years earlier.",
      "Rafaela went in. She didn't find her mother — but she found the conversation they never had. When she returned to the sidewalk, the bus was already gone. But the street, for the first time, remained.",
    ],
  },
  {
    slug: "heranca-de-papel",
    title: "Paper Inheritance",
    excerpt:
      "Opening her grandfather's trunk, Marina discovers a deck of blank cards that, one by one, begin answering questions she has not yet asked.",
    category: "Memories",
    category_slug: "memorias",
    featured: false,
    sort_order: 8,
    body: [
      "The trunk smelled of old wood and pipe tobacco. Inside, besides keys without locks and faded photographs, there was a full deck of smooth cards with no drawing on them.",
      "Marina found it odd, but took everything home. On the first night, she wrote a question on the back of one card and left it on the table before sleeping.",
      "In the morning, she found words on the front — small, firm handwriting, just like her grandfather's. It wasn't a direct answer; it was more like a reminder of something she had always known and preferred to postpone.",
      "She tried again. And again. The cards never lied, but they never simplified either. They offered truths sized to fit a night of insomnia.",
      "When the last card filled up, Marina realized the deck didn't predict the future. It only returned, in small doses, what the whole family had left unsaid.",
    ],
  },
  {
    slug: "a-varanda-das-cinco",
    title: "The Five O'Clock Balcony",
    excerpt:
      "Every afternoon at five, neighbors in different buildings meet on aligned balconies — without knowing each other, until the day a curtain opens.",
    category: "Fiction",
    category_slug: "ficcao",
    featured: false,
    sort_order: 9,
    body: [
      "There was an exact minute when the city seemed to breathe together: five in the afternoon. At that moment, Sérgio took coffee to the balcony, Lúcia watered the plants, and a man in a striped shirt read aloud from a book no one fully heard.",
      "They lived in different buildings, separated by a narrow alley, but aligned in such a way that they could see each other without looking directly. It was a discreet, almost urban ritual.",
      "On a rainy Wednesday, Lúcia's light went out. Sérgio hesitated, then turned his on brighter, like someone leaving a candle in the window. The man in the striped shirt did the same.",
      "The following night, Lúcia appeared on the balcony with a note tied to the railing: 'Thank you.' Sérgio replied with another: 'Tomorrow I'll bring cake.' The striped man laughed for the first time in months.",
      "They didn't become friends immediately. But from that day on, five o'clock stopped being just a time. It became a promise.",
    ],
  },
  {
    slug: "trilha-alem-do-por-do-sol",
    title: "Trail Beyond the Sunset",
    excerpt:
      "A mountain guide leads a small group along a path that only exists in the golden light of the last twenty minutes of the day.",
    category: "Fiction",
    category_slug: "ficcao",
    featured: false,
    sort_order: 10,
    body: [
      "João didn't sell adventure; he sold attention. That's why he limited hikes to six people and refused anyone who arrived in a hurry.",
      "The trail began ordinarily enough: stones, pines, wind cutting the face. But João only moved forward when the sun touched the horizon, as if the path depended on the color of the sky.",
      "At twilight, the brush changed. Flowers that weren't there in the morning opened wide petals. The air grew sweet, almost edible. One participant cried without knowing why.",
      "At the top, there was no lookout or sign. Only a wooden bench and a view that seemed freshly drawn. João said: 'Now you may speak.'",
      "On the way down, already in darkness, someone asked if the trail would be real the next day. João smiled. 'It always existed. It just asks for the right hour to be seen.'",
    ],
  },
  {
    slug: "o-jardim-das-vozes-antigas",
    title: "The Garden of Old Voices",
    excerpt:
      "On a forgotten plot in the middle of the city, a retired teacher cultivates rare plants and stories that neighbors swear they hear when passing by.",
    category: "Memories",
    category_slug: "memorias",
    featured: false,
    sort_order: 11,
    body: [
      "The plot had been abandoned for years when Dona Célia asked for permission to care for it. She didn't want to build anything — she wanted to plant memory.",
      "She started with simple seedlings: basil, rosemary, boldo. Then came species her grandchildren didn't recognize, brought from old trips and conversations in neighborhood markets.",
      "Neighbors noticed the smells first, then the sounds. They weren't birds. They seemed like short phrases caught in the leaves, as if the wind read old letter fragments aloud.",
      "A girl recorded audio and it went viral in the neighborhood. Dona Célia didn't mind. She only said the garden had always spoken; the city was just too fast to listen.",
      "When she passed away, she left the plot open. Today, those who pass still find the gate unlocked and a notebook at the entrance: 'Water if you want to continue the conversation.'",
    ],
  },
  {
    slug: "neblina-no-porto",
    title: "Fog at the Harbor",
    excerpt:
      "A retired sailor returns to the dock where he worked his whole life and finds, in the morning fog, the ship he thought was only a legend.",
    category: "Fiction",
    category_slug: "ficcao",
    featured: false,
    sort_order: 12,
    body: [
      "Antônio knew the harbor by smell. Even retired, he woke early and walked to the dock, as if checking whether the sea was still in place.",
      "That morning, the fog was so dense it erased the horizon. Cranes turned into shadows. The coffee from the little stand seemed to suspend steam in the air.",
      "That was when he saw the ship: high hull, thick ropes, name painted in letters he only remembered reading in childhood dreams. The same ship as his father's, lost decades earlier on a voyage with no return.",
      "He ran to the edge. The ladder was lowered. On deck, no one — only an old compass and a note: 'Carry whoever needs to return.'",
      "Antônio didn't board. He put the compass in his pocket and, when the fog lifted, the ship was gone. But the dock smelled, for the first time in years, like home.",
    ],
  },
  {
    slug: "a-estacao-dos-ecos",
    title: "The Station of Echoes",
    excerpt:
      "In a nearly deserted train station, passengers hear conversations that are not from now — and a ticket clerk learns to tell memory apart from destination.",
    category: "Fiction",
    category_slug: "ficcao",
    featured: false,
    sort_order: 13,
    body: [
      "The station had a stopped clock and a ticket clerk who never seemed surprised. Ricardo had worked there for twenty years and said the place kept voices the way walls keep dampness.",
      "On the first winter night, a woman stepped off the train crying and asked for a ticket to a city not listed on the board. Ricardo didn't hesitate. He printed a blank ticket and said: 'Listen before you board.'",
      "She listened. Between two distorted announcements, she heard her own childhood voice apologizing to someone no longer alive. The echo didn't repeat the past — it returned what was left unsaid.",
      "Others came afterward. Each heard something different: a cry for help, a recipe dictated by a grandmother, an 'I love you' that never left the chest. Ricardo noted the times in a notebook without explaining why.",
      "When the station closed for renovation, they found the notebook. There were no names, only times and one repeated sentence: 'Some trains don't take you far. They take you inward.'",
    ],
  },
  {
    slug: "o-atelier-das-luas",
    title: "The Moon Studio",
    excerpt:
      "A painter works only at night, reproducing moon phases nobody else remembers — until a visitor recognizes, in one canvas, the sky from the day they lost someone.",
    category: "Fiction",
    category_slug: "ficcao",
    featured: false,
    sort_order: 14,
    body: [
      "The studio was on the top floor of an old building, with no sign on the door. Beatriz painted only moons: rare crescents, full moons that never existed, waning quarters from forgotten dates.",
      "She didn't sell to galleries. She sold to those who arrived with a date in hand and a poorly told story. 'I don't paint the sky,' she said. 'I paint what got caught in it.'",
      "Tomás came in on a rainy Tuesday with the date of his mother's funeral. Beatriz prepared the canvas in silence, mixed blues that seemed to breathe and, at dusk, revealed a low moon over a field he swore he knew.",
      "Tomás cried without shame. It wasn't his childhood field — it was the field of the farewell he hadn't had the courage to cross. The painting didn't bring his mother back; it brought back the instant when he could still say goodbye.",
      "When he left, the street was lit by an ordinary moon. Beatriz closed the studio and put away her brushes. Some nights, painting was simply listening to whoever knocked without knowing what to ask for.",
    ],
  },
  {
    slug: "cartografia-do-cheiro",
    title: "Scent Cartography",
    excerpt:
      "A retired perfumer maps childhood in labeled vials — and discovers that certain aromas only open when someone is ready to remember.",
    category: "Memories",
    category_slug: "memorias",
    featured: false,
    sort_order: 15,
    body: [
      "Dona Fernanda didn't keep jewelry. She kept scents in amber glass vials, each with a firm handwritten label: 'rainy Sunday', 'first day of school', 'grandma's kitchen, 1974'.",
      "Her granddaughter Júlia thought it excessive until she inherited the collection. She opened a vial at random — wet earth and hot iron — and was seized by a memory that wasn't hers: the backyard where her grandmother had planted tomatoes before moving away.",
      "Fernanda, still alive, explained without mystery: 'Scent doesn't lie. It just waits for the right person.' Júlia spent weeks reorganizing the vials on a hand-drawn map, linking aromas to streets, seasons, and silences.",
      "At the center of the map, an unlabeled vial. Fernanda said it would only be named when Júlia found the scent missing from her own life. It took months. It came on an afternoon of coffee spilled on a new sofa: fear and relief mixed together.",
      "They labeled it together: 'the day I stopped running away.' The map hung on the living room wall. Visitors asked if it was art. Júlia answered that it was an address — the kind that doesn't show up in apps.",
    ],
  },
  {
    slug: "o-telescopio-de-vidro",
    title: "The Glass Telescope",
    excerpt:
      "On the terrace of a forgotten building, an amateur astronomer sees coded messages in the stars — and realizes the sender may be closer than the sky.",
    category: "Fiction",
    category_slug: "ficcao",
    featured: false,
    sort_order: 16,
    body: [
      "Eduardo set up the glass telescope whenever the sky cleared. It was a one-of-a-kind piece, inherited from an uncle who swore he spoke with constellations. Neighbors found it charming. Eduardo found it necessary.",
      "In the third week of observation, he noticed a pattern: stars blinking in sequence, like celestial Morse code. He wrote it down, deciphered it, translated it. The messages were short: 'still here', 'look down', 'you're not alone'.",
      "He called a physicist friend. She laughed, then went quiet. The pattern wasn't random — but it didn't come from known satellites either. It came from reflections: urban light bouncing off windows in the building across the way, synchronized by someone.",
      "On the other terrace, a twelve-year-old girl held a mirror and a notebook. She wasn't seeking fame. She was seeking company on nights when her mother worked late. 'I thought nobody looked up,' she said.",
      "Eduardo went down with hot chocolate. They began to talk by light and paper. The glass telescope kept pointing at the sky — but Eduardo finally understood his uncle: sometimes the universe answers in the window next door.",
    ],
  },
  {
    slug: "correspondencia-de-chuva",
    title: "Rain Correspondence",
    excerpt:
      "Whenever it rains, letters appear in the mailbox of a corner house — addressed to whoever lives there, even when the house is empty.",
    category: "Memories",
    category_slug: "memorias",
    featured: false,
    sort_order: 17,
    body: [
      "The corner house had been closed for two years when Laura rented the back apartment. On the first heavy rain, she heard the mailbox lid bang three times.",
      "Inside, a letter with no stamp and no sender: 'If you're reading this, it's because you started listening again.' The handwriting was her mother's, dead before Laura finished college. The paper smelled of lavender and blue ink.",
      "She almost called the police. Almost. She kept the letter in a book and waited for the next rain. It came a week later, with another message: 'You don't have to believe. You just have to answer.'",
      "Laura answered at the window, with chalk, on a drizzly night. She didn't know to whom. The next morning, she found a drawing of a red bicycle in the mailbox — the same one she had learned to ride without training wheels.",
      "She stopped looking for a rational explanation. She began to write when it rained: fears, thanks, recipes, apologies. The replies didn't always come. But when they did, the corner house seemed, for the first time, inhabited by two people.",
    ],
  },
  ...NEW_STORIES_EN,
];

export const STATIC_STORIES_ES: StoryRecordInput[] = [
  {
    slug: "onde-o-mar-encontra-o-silencio",
    title: "Donde el Mar Encuentra el Silencio",
    excerpt:
      "En una ensenada olvidada por el mapa, un farero aprende que el silencio también tiene mareas — y que algunas historias solo llegan cuando dejamos de buscarlas.",
    category: "Ficción",
    category_slug: "ficcao",
    featured: true,
    sort_order: 1,
    body: [
      "El faro no parpadeaba desde hacía tres noches, pero nadie en el pueblo parecía notarlo. Para Mateus, sin embargo, cada ausencia de luz era una señal — como si el horizonte estuviera pidiendo descanso.",
      "Subió la escalera de piedra al amanecer, con la sal pegada a la piel y el café frío en la mano. El viento traía un olor a algas y a memorias antiguas, de esas que no pertenecen a una sola persona.",
      "En la cima, encontró la lámpara intacta. El problema estaba en el silencio: un silencio tan denso que apagaba hasta el ruido de las olas. Mateus se quedó parado, escuchando lo que normalmente se deja pasar.",
      "Fue entonces cuando vio la carta, atrapada entre dos piedras, amarilleada por el tiempo. No tenía remitente. Decía solo: 'Vuelve cuando el mar deje de hablar.'",
      "Mateus sonrió. El mar nunca se detiene. Pero, aquel día, por un instante, pareció escuchar.",
    ],
  },
  {
    slug: "a-ultima-carta-de-lisboa",
    title: "La Última Carta de Lisboa",
    excerpt:
      "Entre cafés y tranvías, una correspondencia inacabada atraviesa décadas y encuentra, finalmente, a quien estaba listo para leerla.",
    category: "Memorias",
    category_slug: "memorias",
    featured: false,
    sort_order: 2,
    body: [
      "La máquina de escribir estaba cubierta por un pañuelo bordado. Clara la heredó de su abuela junto con una caja de cartas nunca enviadas.",
      "Lisboa olía a tostada y a lluvia reciente. Clara caminó hasta el mirador donde su abuela decía haber aprendido a esperar.",
      "En la tercera carta, encontró una dirección tachada y reescrita tres veces. No era un error — era vacilación, el tipo de vacilación que cambia una vida.",
      "Siguió el camino hasta una librería pequeña, de puertas estreitas. El dueño reconoció su apellido antes de que ella dijera su propio nombre.",
      "'Ella volvía cada otoño', dijo él. 'Dijo que escribiría cuando tuviera el coraje de quedarse.' Clara se dio cuenta, entonces, de que la última carta no era para otra persona. Era para sí misma.",
    ],
  },
  {
    slug: "a-geometria-do-caos-urbano",
    title: "La Geometría del Caos Urbano",
    excerpt:
      "Bajo la lluvia, una ciudad entera se reorganiza en líneas invisibles — y una fotógrafa decide registrar lo que nadie más ve.",
    category: "Ficción",
    category_slug: "ficcao",
    featured: false,
    sort_order: 3,
    body: [
      "Helena fotografiaba reflejos. No por estética, sino por necesidad: era la única forma de mirar la ciudad sin ser tragada por ella.",
      "En la esquina de la Calle de las Flores, un paraguas rojo se convirtió en punto de fuga en medio del gris de la tarde. Clic. Luego otro. Luego diez más.",
      "Entre un semáforo y otro, notó un patrón: la gente se desviaba del mismo lugar, como si hubiera un obstáculo invisible en medio de la acera.",
      "Al día siguiente, regresó con una cámara analógica y paciencia de arquitecta. Medió pasos, sombras, pausas. El caos tenía geometría — solo faltaba alguien dispuesto a mirar de lado.",
      "Cuando reveló los negativos, apareció el obstáculo: un cartel antiguo, enterrado bajo capas de propaganda. La ciudad recordaba, incluso cuando fingía olvidar.",
    ],
  },
  {
    slug: "caminhos-de-lavanda",
    title: "Caminos de Lavanda",
    excerpt:
      "En bicicleta por carreteras secundarias, dos hermanos recorren la ruta que su madre dejó dibujada en un cuaderno de viajes.",
    category: "Ficción",
    category_slug: "ficcao",
    featured: false,
    sort_order: 4,
    body: [
      "El cuaderno tenía manchas de té y coordenadas imprecisas. 'No es un mapa', advirtió la madre antes de partir. 'Es una invitación.'",
      "Pedro y Luísa alquilaron bicicletas demasiado veloces para sus piernas cansadas. La primera subida los hizo reír de su propia prepotencia.",
      "En el kilómetro doce, el asfalto terminó. En su lugar, un camino morado de lavanda y polvo dorado. El olor era tan fuerte que pareceía memoria sólida.",
      "Se detuvieron en una casa de piedra donde una señora ofreció agua y silencio. 'Tu madre pasó por aquí en un otoño', dijo ella, sin preguntar quiénes eran.",
      "Por la noche, bajo estrellas sin nombre, entendieron la invitación: no era llegar a algún lugar. Era aprender a cruzar juntos.",
    ],
  },
  {
    slug: "o-relojoeiro-do-tempo",
    title: "El Relojero del Tiempo",
    excerpt:
      "En un taller sin vitrina, un relojero repara más que mecanismos: devuelve a los visitantes los minutos que creían perdidos.",
    category: "Ficción",
    category_slug: "ficcao",
    featured: false,
    sort_order: 5,
    body: [
      "La puerta tenía un timbre tan discreto que solo sonaba para quien realmente necesitaba entrar. Dentro, cientos de relojes marcavam horas diferentes.",
      "'No reparo el tiempo', dijo el relojero. 'Reparo la atención.' Hablaba sin levantar los ojos de un engranaje minúsculo.",
      "Ana le entregó un reloj de bolsillo que había pertenecido a su padre. Se había detenido en el minuto en que él dijo 'vuelvo enseguida' y nunca regresó.",
      "Durante tres días, Ana regresó al taller solo para escuchar el tictac. Al tercer día, el reloj volvió a andar — y con él regresó el recuerdo de una conversación entera, no solo de la despedida.",
      "Al salir, se dio cuenta de que nunca había estado roto. Solo había estado en pausa, esperando ser escuchado.",
    ],
  },
  {
    slug: "bibliotecas-de-almas",
    title: "Biblioteca de Almas",
    excerpt:
      "Entre estanterías polvorientas, una bibliotecaria jubilada cataloga no libros, sino las historias que los lectores dejan en los márgenes.",
    category: "Memorias",
    category_slug: "memorias",
    featured: false,
    sort_order: 6,
    body: [
      "Cada margen anotado era un hilo de voz. Doña Elisa pasó cuarenta años reuniendo esos hilos en un archivo que nadie pedía, pero que todos necesitaban.",
      "Había risas en novelas tristes, recetas en poesía, números de teléfono tachados en capítulos finales. Era una biblioteca paralela, hecha de gestos íntimos.",
      "Cuando el ayuntamiento anunció el cierre del edificio, los lectores aparecieron con cajas e historias. No salvaron solo el lugar — salvaron lo que el lugar significaba.",
      "Doña Elisa organizó una noche de lectura. Cada persona leyó una anotación ajena, con permiso y cuidado. El silencio entre una lectura e otra pesaba como un abrazo.",
      "Al final, la biblioteca permaneció abierta. No por decreto, sino por acuerdo tácito: mientras haya márgenes en blanco, habrá espacio para continuar.",
    ],
  },
  {
    slug: "o-ultimo-onibus-da-noite",
    title: "El Último Autobús de la Noche",
    excerpt:
      "En la última línea que aún circula después de la medianoche, pasajeros solitarios descubren que algunos destinos solo aparecen cuando la ciudad se duerme.",
    category: "Ficción",
    category_slug: "ficcao",
    featured: false,
    sort_order: 7,
    body: [
      "El conductor conocía cada bache del asfalto y cada silencio de los asientos vacíos. Llevaba veinte años en esa ruta, y aun así, ciertas noches parecían extrañas — como si el autobús atravesara una versión más honesta de la ciudad.",
      "Rafaela subió en la parada del puente con un abrigo demasiado grande y un billete arrugado. No era la primera vez. Siempre elegía el último horario, cuando nadie preguntaba adónde iba.",
      "A mitad del trayecto, una señora de cabello blanco pidió bajar en un punto que no figuraba en el mapa. El conductor asintió sin extrañarse. Rafaela quiso preguntar, pero el silencio parecía más educado que la curiosidad.",
      "Cuando le tocó a ella, descendió frente a una calle que juraba no existir a plena luz del día. Había una panadería abierta, olor a pan caliente y un letrero con el nombre de su madre, fallecida diez años antes.",
      "Rafaela entró. No encontró a su madre — pero sí la conversación que nunca tuvieron. Al volver a la acera, el autobús ya se había ido. Pero la calle, por primera vez, permanecía.",
    ],
  },
  {
    slug: "heranca-de-papel",
    title: "Herencia de Papel",
    excerpt:
      "Al abrir el baúl del abuelo, Marina descubre una baraja de cartas en blanco que, una a una, empiezan a responder preguntas que aún no ha hecho.",
    category: "Memorias",
    category_slug: "memorias",
    featured: false,
    sort_order: 8,
    body: [
      "El baúl olía a madera antigua y a tabaco de pipa. Dentro, además de llaves sin cerradura y fotografías descoloridas, había una baraja entera de cartas lisas, sin ningún dibujo.",
      "Marina lo encontró raro, pero se llevó todo a casa. En la primera noche, escribió una pregunta al dorso de una carta y la dejó sobre la mesa antes de dormir.",
      "Por la mañana, encontró palabras en el frente — letra pequeña, firme, igual a la del abuelo. No era una respuesta directa; era más como un recordatorio de algo que siempre supo y prefirió postergar.",
      "Lo intentó de nuevo. Y otra vez. Las cartas nunca mentían, pero tampoco simplificaban. Decían verdades del tamaño justo para caber en una noche de insomnio.",
      "Cuando la última carta se llenó, Marina comprendió que la baraja no adivinaba el futuro. Solo devolvía, en pequeñas dosis, lo que toda la familia había dejado sin decir.",
    ],
  },
  {
    slug: "a-varanda-das-cinco",
    title: "La Terraza de las Cinco",
    excerpt:
      "Todas las tardes, a las cinco, vecinos de edificios distintos se encuentran en terrazas alineadas — sin conocerse, hasta el día en que se abre una cortina.",
    category: "Ficción",
    category_slug: "ficcao",
    featured: false,
    sort_order: 9,
    body: [
      "Había un minuto exacto en que la ciudad parecía respirar junta: las cinco de la tarde. En ese instante, Sérgio llevaba el café a la terraza, Lúcia regaba las plantas y un hombre de camisa a rayas leía en voz baja un libro que nadie escuchaba por completo.",
      "Vivían en edificios distintos, separados por un callejón estrecho, pero alineados de tal forma que podían verse sin mirarse directamente. Era un ritual discreto, casi urbano.",
      "Un miércoles lluvioso, la luz de Lúcia se apagó. Sérgio dudó, luego encendió la suya más fuerte, como quien deja una vela en la ventana. El hombre de la camisa a rayas hizo lo mismo.",
      "A la noche siguiente, Lúcia apareció en la terraza con un billete atado a la barandilla: «Gracias.» Sérgio respondió con otro: «Mañana traigo pastel.» El hombre de rayas rió por primera vez en meses.",
      "No se hicieron amigos de inmediato. Pero, a partir de aquel día, las cinco dejaron de ser solo una hora. Se convirtieron en promesa.",
    ],
  },
  {
    slug: "trilha-alem-do-por-do-sol",
    title: "Sendero Más Allá del Atardecer",
    excerpt:
      "Un guía de montaña conduce a un grupo pequeño por un camino que solo existe en la luz dorada de los últimos veinte minutos del día.",
    category: "Ficción",
    category_slug: "ficcao",
    featured: false,
    sort_order: 10,
    body: [
      "João no vendía aventura; vendía atención. Por eso limitaba las caminatas a seis personas y rechazaba a quien llegaba con prisa.",
      "El sendero empezaba de forma común: piedras, pinos, viento cortando el rostro. Pero João solo avanzaba cuando el sol tocaba el horizonte, como si el camino dependiera del color del cielo.",
      "Con el crepúsculo, el monte cambiaba. Flores que no estaban allí por la mañana abrían pétalos anchos. El aire se volvía dulce, casi comestible. Una participante lloró sin saber explicar por qué.",
      "En la cima, no había mirador ni placa. Solo un banco de madera y una vista que parecía recién dibujada. João dijo: «Ahora pueden hablar.»",
      "En el descenso, ya en la oscuridad, alguien preguntó si el sendero sería real al día siguiente. João sonrió. «Siempre existió. Solo pide la hora correcta para ser visto.»",
    ],
  },
  {
    slug: "o-jardim-das-vozes-antigas",
    title: "El Jardín de las Voces Antiguas",
    excerpt:
      "En un terreno olvidado en medio de la ciudad, una profesora jubilada cultiva plantas raras e historias que los vecinos juran oír al pasar.",
    category: "Memorias",
    category_slug: "memorias",
    featured: false,
    sort_order: 11,
    body: [
      "El terreno llevaba años abandonado cuando Doña Célia pidió permiso para cuidarlo. No quería construir nada — quería plantar memoria.",
      "Empezó con plantones simples: albahaca, romero, boldo. Luego vinieron especies que los nietos no reconocían, traídas de viajes antiguos y de conversaciones en mercados de barrio.",
      "Los vecinos notaron primero los olores, luego los sonidos. No eran pájaros. Parecían frases cortas atrapadas en las hojas, como si el viento leyera en voz alta fragmentos de cartas antiguas.",
      "Una niña grabó un audio y se viralizó en el barrio. Doña Célia no se importó. Dijo solo que el jardín siempre había hablado; la ciudad iba demasiado rápido para escuchar.",
      "Cuando falleció, dejó el terreno abierto. Hoy, quien pasa aún encuentra el portón sin candado y un cuaderno a la entrada: «Riegue si quiere continuar la conversación.»",
    ],
  },
  {
    slug: "neblina-no-porto",
    title: "Niebla en el Puerto",
    excerpt:
      "Un marinero jubilado vuelve al muelle donde trabajó toda la vida y encuentra, en la niebla de la mañana, el barco que creía ser solo leyenda.",
    category: "Ficción",
    category_slug: "ficcao",
    featured: false,
    sort_order: 12,
    body: [
      "Antônio conocía el puerto por el olor. Aunque jubilado, despertaba temprano y caminaba hasta el muelle, como quien verifica si el mar sigue en su lugar.",
      "Aquella mañana, la niebla era tan densa que borró el horizonte. Las grúas se volvieron sombras. El café del puestito parecía suspender el vapor en el aire.",
      "Fue entonces cuando vio el barco: casco alto, cuerdas gruesas, nombre pintado en letras que solo recordaba haber leído en sueños de infancia. El mismo barco de su padre, perdido décadas antes en un viaje sin retorno.",
      "Corrió hasta el borde. La escalera estaba bajada. En cubierta, nadie — solo una brújula antigua y un billete: «Lleve a quien necesite volver.»",
      "Antônio no embarcó. Guardó la brújula en el bolsillo y, cuando la niebla se disipó, el barco ya no estaba. Pero el muelle olía, por primera vez en años, a hogar.",
    ],
  },
  {
    slug: "a-estacao-dos-ecos",
    title: "La Estación de los Ecos",
    excerpt:
      "En una estación de tren casi desierta, los pasajeros escuchan conversaciones que no son de ahora — y un taquillero aprende a distinguir la memoria del destino.",
    category: "Ficción",
    category_slug: "ficcao",
    featured: false,
    sort_order: 13,
    body: [
      "La estación tenía un reloj detenido y un taquillero que nunca parecía sorprendido. Ricardo trabajaba allí desde hacía veinte años y decía que el lugar guardaba voces como las paredes guardan la humedad.",
      "En la primera noche de invierno, una mujer bajó del tren llorando y pidió pasaje a una ciudad que no figuraba en el panel. Ricardo no dudó. Imprimió un billete en blanco y dijo: «Escuche antes de embarcar.»",
      "Ella escuchó. Entre dos anuncios distorsionados, oyó su propia voz de niña pidiendo perdón a alguien que ya no estaba vivo. El eco no repetía el pasado — devolvía lo que faltaba decir.",
      "Otros vinieron después. Cada uno oía algo distinto: un pedido de ayuda, una receta dictada por la abuela, un «te quiero» que nunca salió del pecho. Ricardo anotaba los horarios en un cuaderno sin explicar por qué.",
      "Cuando cerraron la estación para reformarla, encontraron el cuaderno. No había nombres, solo horarios y una frase repetida: «Algunos trenes no llevan lejos. Llevan hacia adentro.»",
    ],
  },
  {
    slug: "o-atelier-das-luas",
    title: "El Taller de las Lunas",
    excerpt:
      "Una pintora solo trabaja de noche, reproduciendo fases lunares que nadie más recuerda — hasta que un visitante reconoce, en un cuadro, el cielo del día en que perdió a alguien.",
    category: "Ficción",
    category_slug: "ficcao",
    featured: false,
    sort_order: 14,
    body: [
      "El taller estaba en el último piso de un edificio antiguo, sin placa en la puerta. Beatriz pintaba exclusivamente lunas: crecientes raras, lunas llenas que nunca existieron, cuartos menguantes de fechas olvidadas.",
      "No vendía a galerías. Vendía a quien llegaba con una fecha en la mano y una historia mal contada. «No pinto el cielo», decía. «Pinto lo que quedó colgado en él.»",
      "Tomás entró un martes lluvioso con la fecha del funeral de su madre. Beatriz preparó el lienzo en silencio, mezcló azules que parecían respirar y, al atardecer, reveló una luna baja sobre un campo que juraba conocer.",
      "Tomás lloró sin vergüenza. No era el campo de la infancia — era el campo de la despedida que no tuvo valor de atravesar. La pintura no devolvió a su madre; devolvió el instante en que aún podía decir adiós.",
      "Cuando salió, la calle estaba iluminada por una luna común. Beatriz cerró el taller y guardó los pinceles. Había noches en que pintar era solo escuchar a quien llama sin saber qué pedir.",
    ],
  },
  {
    slug: "cartografia-do-cheiro",
    title: "Cartografía del Olor",
    excerpt:
      "Una perfumista jubilada mapea la infancia en frascos etiquetados — y descubre que ciertos aromas solo se abren cuando alguien está listo para recordar.",
    category: "Memorias",
    category_slug: "memorias",
    featured: false,
    sort_order: 15,
    body: [
      "Dona Fernanda no guardaba joyas. Guardaba olores en frascos de vidrio ámbar, cada uno con una etiqueta de caligrafía firme: «domingo de lluvia», «primer día de clase», «cocina de la abuela, 1974».",
      "La nieta Júlia lo encontró exagerado hasta heredar la colección. Abrió un frasco al azar — tierra mojada y hierro caliente — y fue tomada por un recuerdo que no era suyo: el patio donde la abuela plantó tomates antes de mudarse.",
      "Fernanda, aún viva, explicó sin misterio: «El olor no miente. Solo espera a la persona correcta.» Júlia pasó semanas reorganizando los frascos en un mapa dibujado a mano, uniendo aromas con calles, estaciones y silencios.",
      "En el centro del mapa, un frasco sin etiqueta. Fernanda dijo que solo sería nombrado cuando Júlia encontrara el olor que faltaba en su propia vida. Tardó meses. Llegó una tarde de café derramado en el sofá nuevo: miedo y alivio mezclados.",
      "La etiquetaron juntas: «el día en que dejé de huir». El mapa quedó en la pared de la sala. Los visitantes preguntaban si era arte. Júlia respondía que era una dirección — del tipo que no aparece en aplicaciones.",
    ],
  },
  {
    slug: "o-telescopio-de-vidro",
    title: "El Telescopio de Vidrio",
    excerpt:
      "En la terraza de un edificio olvidado, un astrónomo aficionado ve mensajes en código en las estrellas — y comprende que el remitente puede estar más cerca que el cielo.",
    category: "Ficción",
    category_slug: "ficcao",
    featured: false,
    sort_order: 16,
    body: [
      "Eduardo montaba el telescopio de vidrio cada vez que el cielo se despejaba. Era una pieza única, heredada de un tío que juraba hablar con constelaciones. Los vecinos lo encontraban bonito. Eduardo lo encontraba necesario.",
      "En la tercera semana de observación, notó un patrón: estrellas parpadeando en secuencia, como morse celestial. Anotó, descifró, tradujo. Los mensajes eran breves: «aún aquí», «mira abajo», «no estás solo».",
      "Llamó a una amiga física. Se rió, luego calló. El patrón no era aleatorio — pero tampoco venía de satélites conocidos. Venía de reflejos: luz urbana rebotando en ventanas del edificio de enfrente, sincronizada por alguien.",
      "En la otra terraza, una niña de doce años sostenía un espejo y un cuaderno. No buscaba fama. Buscaba compañía en noches en que su madre trabajaba hasta tarde. «Pensé que nadie miraba hacia arriba», dijo.",
      "Eduardo bajó con chocolate caliente. Empezaron a conversar por luz y papel. El telescopio de vidrio siguió apuntando al cielo — pero Eduardo, por fin, entendió a su tío: a veces el universo responde en la ventana de al lado.",
    ],
  },
  {
    slug: "correspondencia-de-chuva",
    title: "Correspondencia de Lluvia",
    excerpt:
      "Siempre que llueve, cartas aparecen en el buzón de una casa de esquina — dirigidas a quien vive allí, incluso cuando la casa está vacía.",
    category: "Memorias",
    category_slug: "memorias",
    featured: false,
    sort_order: 17,
    body: [
      "La casa de esquina llevaba dos años cerrada cuando Laura alquiló el apartamento del fondo. En la primera lluvia fuerte, oyó golpear tres veces la tapa del buzón.",
      "Dentro, una carta sin sello ni remitente: «Si lees esto, es porque volviste a escuchar.» La letra era de su madre, muerta antes de que Laura terminara la universidad. El papel olía a lavanda y tinta azul.",
      "Casi llamó a la policía. Casi. Guardó la carta en un libro y esperó la próxima lluvia. Llegó una semana después, con otro mensaje: «No necesitas creer. Solo necesitas responder.»",
      "Laura respondió en la ventana, con tiza, en una noche de llovizna. No sabía a quién. A la mañana siguiente, encontró en el buzón un dibujo de bicicleta roja — la misma con la que aprendió a andar sin rueditas.",
      "Dejó de buscar una explicación racional. Empezó a escribir cuando llovía: miedos, gratitudes, recetas, disculpas. Las respuestas no siempre llegaban. Pero cuando llegaban, la casa de esquina parecía, por primera vez, habitada por dos personas.",
    ],
  },
  ...NEW_STORIES_ES,
];

export const STATIC_STORIES = STATIC_STORIES_PT;

function withLang(stories: Omit<StoryRecord, "lang">[], lang: StoryLang): StoryRecord[] {
  return stories.map((story) => ({ ...story, lang }));
}

const STATIC_STORIES_PT_WITH_LANG = withLang(STATIC_STORIES_PT, "pt");
const STATIC_STORIES_EN_WITH_LANG = withLang(STATIC_STORIES_EN, "en");
const STATIC_STORIES_ES_WITH_LANG = withLang(STATIC_STORIES_ES, "es");

export function getStaticStoriesForLanguage(lang: StoryLang): StoryRecord[] {
  if (lang === "en") return STATIC_STORIES_EN_WITH_LANG;
  if (lang === "es") return STATIC_STORIES_ES_WITH_LANG;
  return STATIC_STORIES_PT_WITH_LANG;
}
