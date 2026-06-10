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
