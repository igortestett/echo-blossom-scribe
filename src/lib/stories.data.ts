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

export const STATIC_STORIES_PT: StoryRecord[] = [
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
];

export const STATIC_STORIES_EN: StoryRecord[] = [
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
];

export const STATIC_STORIES_ES: StoryRecord[] = [
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
];

export const STATIC_STORIES = STATIC_STORIES_PT;

export function getStaticStoriesForLanguage(lang: "en" | "es" | "pt"): StoryRecord[] {
  if (lang === "en") return STATIC_STORIES_EN;
  if (lang === "es") return STATIC_STORIES_ES;
  return STATIC_STORIES_PT;
}
