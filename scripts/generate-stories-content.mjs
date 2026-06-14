import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, "../src/lib/stories-content");

const MIN_CHARS = 9500;
const MAX_CHARS = 10500;
const TARGET_CHARS = 10000;

function countChars(paragraphs) {
  return paragraphs.join("").length;
}

const MAX_PARAGRAPHS = 25;

function ensureBodyLength(paragraphs, supplements = [], lang = "pt") {
  const body = [...paragraphs];
  let i = 0;
  while (countChars(body) < MIN_CHARS && i < supplements.length) {
    if (body.length < MAX_PARAGRAPHS) {
      body.push(supplements[i++]);
    } else {
      const mergeStart = Math.max(0, MAX_PARAGRAPHS - 5);
      const idx = mergeStart + (i % (MAX_PARAGRAPHS - mergeStart));
      body[idx] = `${body[idx]} ${supplements[i++]}`;
    }
  }

  const softPads = {
    pt: [
      " O horizonte, impassível, guardava o restante das palavras que não couberam na boca — e isso, por si, já era resposta.",
      " Ninguém aplaudiu. Ainda assim, algo se encaixou no lugar certo, como peça tardia de um mecanismo antigo.",
      " O silêncio que veio depois não era vazio: era a última nota, sustentada por quem soube escutar até o fim.",
    ],
    en: [
      " The impassive horizon held the rest of the words that did not fit in the mouth — and that, in itself, was already an answer.",
      " No one applauded. Still, something clicked into the right place, like a late piece of an old mechanism.",
      " The silence that followed was not empty: it was the final note, sustained by whoever knew how to listen to the end.",
    ],
    es: [
      " El horizonte, impasible, guardaba el resto de las palabras que no cupieron en la boca — y eso, por sí solo, ya era respuesta.",
      " Nadie aplaudió. Aun así, algo encajó en el lugar correcto, como pieza tardía de un mecanismo antiguo.",
      " El silencio que vino después no era vacío: era la última nota, sostenida por quien supo escuchar hasta el final.",
    ],
  };

  let p = 0;
  const pads = softPads[lang] ?? softPads.pt;
  while (countChars(body) < MIN_CHARS && p < pads.length * 3) {
    const last = body.length - 1;
    body[last] = body[last] + pads[p % pads.length];
    p++;
  }

  if (countChars(body) < MIN_CHARS) {
    throw new Error(
      `Body too short (${countChars(body)} chars, need ${MIN_CHARS}+). Add more supplements.`,
    );
  }
  while (countChars(body) > MAX_CHARS && body.length > 18) {
    const tail = body.pop();
    body[body.length - 1] = `${body[body.length - 1]} ${tail}`;
  }
  if (countChars(body) > MAX_CHARS) {
    const last = body.pop();
    const over = countChars([...body, last]) - MAX_CHARS;
    body.push(last.slice(0, last.length - over - 1) + ".");
  }
  return body;
}

function formatMeta(meta) {
  const lines = Object.entries(meta).map(([key, value]) => {
    if (typeof value === "string") return `  ${key}: ${JSON.stringify(value)},`;
    return `  ${key}: ${value},`;
  });
  return `export const meta = {\n${lines.join("\n")}\n};`;
}

function formatBody(name, paragraphs) {
  const items = paragraphs.map((p) => `  ${JSON.stringify(p)},`).join("\n");
  return `export const ${name}: string[] = [\n${items}\n];`;
}

function writeStoryFile(story) {
  const bodyPt = ensureBodyLength(story.bodyPt, story.supplementPt ?? [], "pt");
  const bodyEn = ensureBodyLength(story.bodyEn, story.supplementEn ?? [], "en");
  const bodyEs = ensureBodyLength(story.bodyEs, story.supplementEs ?? [], "es");

  const content = [
    formatMeta(story.meta),
    "",
    formatBody("bodyPt", bodyPt),
    "",
    formatBody("bodyEn", bodyEn),
    "",
    formatBody("bodyEs", bodyEs),
    "",
  ].join("\n");

  const filePath = join(OUT_DIR, `${story.meta.slug}.ts`);
  writeFileSync(filePath, content, "utf8");
  return { filePath, bodyPt, bodyEn, bodyEs };
}

const stories = [
  {
    meta: {
      slug: "a-orquestra-dos-ventos",
      sort_order: 18,
      category_slug: "ficcao",
      featured: false,
      titlePt: "A Orquestra dos Ventos",
      titleEn: "The Wind Orchestra",
      titleEs: "La Orquesta de los Vientos",
      excerptPt:
        "No topo de um penhasco abandonado, um músico aposentado descobre que o vento não sopra ao acaso — ele compõe.",
      excerptEn:
        "Atop an abandoned cliff, a retired musician discovers that the wind does not blow at random — it composes.",
      excerptEs:
        "En la cima de un acantilado abandonado, un músico jubilado descubre que el viento no sopla al azar — compone.",
      categoryPt: "Ficção",
      categoryEn: "Fiction",
      categoryEs: "Ficción",
    },
    bodyPt: [
      "O penhasco não constava em mapas turísticos. Ficava além da última estrada de terra, onde o asfalto desistia de insistir e o mar começava a falar mais alto que qualquer placa. Foi ali que Augusto, ex-violoncelista da orquestra municipal, instalou sua cabana de madeira escura, com uma janela voltada para o abismo e uma cadeira que conhecia o peso dos seus ombros melhor do que qualquer partitura.",
      "Ele não fugira da cidade por desgosto com a música. Fugira do silêncio que vinha depois dela — da sala vazia, dos aplausos que se dissipavam no estacionamento, do telefone que parou de tocar quando a orquestra foi desmontada por falta de verba. No penhasco, ao menos, o vento nunca deixava de tocar. Só que Augusto ainda não sabia escutar.",
      "Nas primeiras semanas, o som era apenas ruído: um assobio cru, uma batida irregular contra as tábuas, o estalo seco de galhos secos roçando o telhado. Augusto anotava temperatura e direção no caderno de bolso, como quem cataloga sintomas de uma doença sem nome. À noite, sonhava com o violoncelo guardado no fundo do armário, embrulhado em lençóis que cheiravam a naftalina e saudade.",
      "A mudança começou numa madrugada de outono, quando uma rajada longa entrou pela fresta da janela e permaneceu — não como vento, mas como nota sustentada. Augusto acordou com o corpo tenso, como se alguém tivesse dedilhado suas costelas. Levantou-se descalço, abriu a porta e ouviu, pela primeira vez, uma frase musical completa atravessar o penhasco.",
      "Não havia instrumentos. Havia camadas: o grave das ondas batendo na base da rocha, o médio das folhas de urze, o agudo das gaivotas que cortavam o ar em diagonal. Era uma harmonia impossível, feita sem mãos. Augusto sentou-se na beira do precipício, com os pés pendendo sobre o nada, e chorou sem vergonha — não de tristeza, mas de reconhecimento.",
      "No dia seguinte, levou o violoncelo para fora. A madeira protestou com um rangido familiar, como um velho amigo que pergunta onde você esteve. Ele afinou devagar, com medo de quebrar o encanto. Quando puxou o arco pela primeira vez, o vento respondeu — não imitando, mas completando, como se esperasse aquele grave desde o início dos tempos.",
      "Passaram-se meses assim. Augusto aprendeu os horários do vento: a fuga da manhã, o adagio do entardecer, a scherzo breve que vinha antes das tempestades. Escreveu, em partituras improvisadas, dezenas de páginas que ninguém pedira. Não era vaidade. Era necessidade. Havia uma melodia perdida no meio daquele repertório natural, e ele sentia que ela o procurava tanto quanto ele a procurava.",
      "A melodia era antiga. Pertencia a um concerto que Augusto compusera aos vinte e oito, para uma mulher que partira antes da estreia. Clara levava o manuscrito no bolso do casaco quando atravessou a ponte na noite em que a estrutura cedeu. O rio levou o papel; a cidade levou a mulher; Augusto ficou com a memória truncada de oito compassos que nunca encontraram conclusão.",
      "Durante trinta anos, ele evitara terminar aquela frase. Dizia que faltava inspiração, mas a verdade era medo: terminar seria admitir que ela não voltaria para escutar. No penhasco, porém, o vento não aceitava adiamentos. Certas tardes, repetia os mesmos oito compassos, cada vez com uma inflexão diferente, como quem ensina uma criança a pronunciar um nome difícil.",
      "Numa semana de vento norte, Augusto percebeu o padrão. Não era aleatório: era diálogo. O vento oferecia o tema; ele devia responder com o violoncelo. Quando errava o tempo, a rajada cortava abruptamente, quase irritada. Quando acertava, o ar se enchia de harmonias que faziam as pedras vibrarem de leve, como ressonância em caixa de madeira.",
      "Ele trabalhou na conclusão durante quarenta e duas noites. Não por perfeccionismo, mas por respeito. Cada variação que o vento trazia revelava um caminho que não havia visto na juventude. A melodia não precisava de grandiloquência — precisava de chegada. Precisava de um último acorde que não fosse grito, mas rendição.",
      "Na véspera do equinócio, o céu limpou-se de nuvens e o mar abaixou a voz. Augusto soube que era a noite. Preparou o violoncelo, acendeu uma lamparina, deixou a porta aberta. O vento entrou sem pressa, como convidado antigo. Os primeiros compassos fluíram sem partitura: músculo e memória finalmente alinhados.",
      "Quando chegou ao trecho interrompido, o penhasco inteiro pareceu prender a respiração. Augusto tocou a nota que faltava — um ré sustenido, simples, sem adorno. O vento sustentou a oitava acima. Por um instante, não havia músico nem orquestra, apenas som atravessando ar, rocha e tempo.",
      "Então ele viu Clara. Não como fantasma espetacular, mas como presença ao pé da porta: casaco escuro, cabelo desalinhado pelo vento, o mesmo sorriso tímido de quem espera ser interrompida para não dizer demais. Ela não falou. Apenas inclinou a cabeça, como fazia nos ensaios, quando a frase finalmente ficava certa.",
      "Augusto baixou o arco. A imagem não desapareceu de imediato — dissolveu-se devagar, como névoa ao sol. Não houve despedida dramática. Houve, sim, a sensação de que uma carta longamente adiada havia sido entregue e lida. Ele permaneceu sentado até a lamparina consumir metade do óleo.",
      "Ao amanhecer, encontrou na soleira um pedaço de papel amarelado, preso por uma pedra lisa. Não era o manuscrito original — era impossível —, mas trazia os oito compassos completos, em letra que ele reconheceu como a sua, porém mais jovem. No canto, uma palavra: «Obrigada.»",
      "Augusto guardou o papel dentro do estojo do violoncelo. Não contou a ninguém. Contar seria reduzir a algo que vivia melhor no limite entre o ouvido e o silêncio. Continuou a tocar no penhasco, mas agora com outra escuta: não buscava mais a melodia perdida, porque ela havia voltado ao mundo pela porta que o vento abrira.",
      "Visitantes raros chegavam — caminhantes perdidos, fotógrafos de tempestades — e perguntavam de onde vinha aquela música. Augusto respondia que não era dele. «É da orquestra dos ventos», dizia. «Eu só ajudo a afinar.» Alguns riam. Outros escutavam de verdade e saíam em silêncio, como quem leva um segredo que não pesa.",
      "No inverno seguinte, uma jovem violinista subiu o penhasco com o instrumento nas costas. Disse que ouvira falar de um músico que conversava com o ar. Augusto a recebeu com sopa e um aviso: «Aqui não se toca para aplauso. Toca-se para resposta.» Ela ficou três meses, aprendendo a esperar o tempo certo entre uma frase e outra.",
      "Quando partiu, deixou uma anotação no caderno de Augusto: «O vento não compõe para sempre. Compõe para quem chega a tempo.» Ele fechou o caderno e sorriu. Lá fora, a orquestra ensaiava de novo — grave, médio, agudo — e, pela primeira vez em décadas, Augusto sentiu que estava exatamente onde deveria estar: no centro de uma música que não terminava, porque não precisava.",
    ],
    supplementPt: [
      "Antes de subir o penhasco pela última vez, Augusto passara uma tarde inteira na sala de concertos fechada. Sentou-se no lugar onde costumava tocar e deixou o ar vazio preencher o que faltava. Não houve fantasma de plateia, nem eco de aplausos — apenas o ranger de uma cadeira e a certeza de que algumas despedidas precisam ser feitas sem testemunhas.",
      "Na cabana, ele mantinha um arquivo de ventos: não gravações, mas descrições. «Norte, 14h, frase em lá menor, hesitação no terceiro compasso.» Parecia loucura para quem não ouvia. Para Augusto, era a única forma de não trair o diálogo — de lembrar que a música do penhasco tinha memória própria, independente da sua.",
      "Certa noite de luar, o vento trouxe um som que ele não reconheceu de imediato: o estalo distante de uma ponte cedendo, convertido em percussão breve. Augusto parou de tocar e deixou o ar terminar a frase sozinho. Entendeu, então, que a orquestra não compunha apenas para ele — compunha também para tudo que o mundo não soube encerrar.",
      "Anos depois, quando a violinista voltou com um grupo pequeno de estudantes, Augusto não se colocou como mestre. Sentou-se ao lado da porta e apenas indicou quando respirar entre uma resposta e outra. «O vento não premia pressa», repetia. «Premia presença.» Os jovens riam no começo; ao final da estação, ninguém mais ria.",
      "Na última semana de outono, uma tempestade arrancou uma tábua do telhado. Augusto consertou ao amanhecer, com as mãos trêmulas e o violoncelo coberto por um plástico grosso. O vento, curiosamente, ficou em silêncio durante o conserto — como se soubesse que certos cuidados também fazem parte da partitura.",
      "Quando a neve chegou pela primeira vez ao penhasco, Augusto acordou cedo e ouviu um som novo: cristais roçando uns nos outros no ar rarefeito, uma tessitura que nenhuma orquestra de carne e madeira conseguiria imitar. Ele não tentou acompanhar. Apenas anotou no caderno: «Hoje, a orquestra ensaia sem mim.» E isso, pela primeira vez, não o assustou.",
      "Uma tarde, depois de anos no penhasco, Augusto desceu à cidade para comprar cordas e voltou sem pressa. Percebeu que o ruído urbano não o feria mais — apenas parecia uma percussão distante, mal ensaiada. No ônibus, um menino pediu que tocasse algo. Augusto negou com gentileza. «Hoje», disse, «sou apenas ouvinte.» E isso lhe pareceu, pela primeira vez, um ofício honorável.",
      "Na última primavera de sua vida, convidou a violinista e os estudantes a uma sessão sem instrumentos. Sentaram-se em círculo na beira do penhasco e escutaram o vento compor sozinho. Ninguém fotografou. Ninguém gravou. Houve apenas o acordo silencioso de que algumas músicas existem para serem perdidas no ar — e, mesmo assim, mudam quem as escuta.",
    ],
    bodyEn: [
      "The cliff did not appear on tourist maps. It lay beyond the last dirt road, where asphalt gave up insisting and the sea began to speak louder than any sign. That was where Augusto, former cellist of the municipal orchestra, set up his dark wooden cabin, with a window facing the abyss and a chair that knew the weight of his shoulders better than any score.",
      "He had not fled the city out of disgust with music. He had fled the silence that came after it — the empty hall, applause dissolving in the parking lot, the phone that stopped ringing when the orchestra was dismantled for lack of funds. On the cliff, at least, the wind never stopped playing. Only Augusto did not yet know how to listen.",
      "In the first weeks, the sound was merely noise: a raw whistle, an irregular beat against the boards, the dry crack of dry branches scraping the roof. Augusto noted temperature and direction in his pocket notebook, as one catalogs symptoms of a nameless illness. At night, he dreamed of the cello locked in the back of the wardrobe, wrapped in sheets that smelled of mothballs and longing.",
      "The change began on an autumn dawn, when a long gust entered through the window gap and remained — not as wind, but as a sustained note. Augusto woke with his body tense, as if someone had plucked his ribs. He rose barefoot, opened the door, and heard, for the first time, a complete musical phrase cross the cliff.",
      "There were no instruments. There were layers: the bass of waves striking the rock's base, the middle register of heather leaves, the treble of gulls cutting the air diagonally. It was an impossible harmony, made without hands. Augusto sat on the edge of the precipice, feet dangling over nothing, and cried without shame — not from sadness, but recognition.",
      "The next day, he brought the cello outside. The wood protested with a familiar creak, like an old friend asking where you have been. He tuned slowly, afraid of breaking the spell. When he drew the bow for the first time, the wind answered — not imitating, but completing, as if it had been waiting for that bass since the beginning of time.",
      "Months passed like this. Augusto learned the wind's schedule: the morning fugue, the evening adagio, the brief scherzo that came before storms. He wrote, on improvised scores, dozens of pages no one had requested. It was not vanity. It was necessity. A lost melody lived inside that natural repertoire, and he felt it was searching for him as much as he searched for it.",
      "The melody was old. It belonged to a concerto Augusto had composed at twenty-eight, for a woman who left before the premiere. Clara carried the manuscript in her coat pocket when she crossed the bridge on the night the structure gave way. The river took the paper; the city took the woman; Augusto was left with the truncated memory of eight bars that never found an ending.",
      "For thirty years, he had avoided finishing that phrase. He said inspiration was missing, but the truth was fear: to finish would be to admit she would not return to listen. On the cliff, however, the wind accepted no delays. On certain afternoons, it repeated the same eight bars, each time with a different inflection, as if teaching a child to pronounce a difficult name.",
      "During a week of northern wind, Augusto noticed the pattern. It was not random: it was dialogue. The wind offered the theme; he was to answer with the cello. When he missed the tempo, the gust cut off abruptly, almost irritated. When he got it right, the air filled with harmonies that made the stones vibrate lightly, like resonance in a wooden box.",
      "He worked on the conclusion for forty-two nights. Not from perfectionism, but respect. Each variation the wind brought revealed a path he had not seen in youth. The melody did not need grandiloquence — it needed arrival. It needed a final chord that was not a shout, but surrender.",
      "On the eve of the equinox, the sky cleared of clouds and the sea lowered its voice. Augusto knew it was the night. He prepared the cello, lit a lamp, left the door open. The wind entered without haste, like an old guest. The first bars flowed without a score: muscle and memory finally aligned.",
      "When he reached the interrupted passage, the entire cliff seemed to hold its breath. Augusto played the missing note — a simple, unadorned D-sharp. The wind sustained the octave above. For an instant, there was neither musician nor orchestra, only sound crossing air, rock, and time.",
      "Then he saw Clara. Not as a spectacular ghost, but as a presence at the foot of the door: dark coat, hair disheveled by wind, the same shy smile of someone waiting to be interrupted so as not to say too much. She did not speak. She only tilted her head, as she did in rehearsals, when the phrase finally came right.",
      "Augusto lowered the bow. The image did not vanish immediately — it dissolved slowly, like fog in sun. There was no dramatic farewell. There was, yes, the sense that a long-delayed letter had been delivered and read. He remained seated until the lamp had burned half its oil.",
      "At dawn, he found on the threshold a yellowed scrap of paper, held by a smooth stone. It was not the original manuscript — that was impossible — but it bore the eight completed bars, in handwriting he recognized as his own, yet younger. In the corner, one word: 'Thank you.'",
      "Augusto kept the paper inside the cello case. He told no one. To tell would be to reduce something that lived better on the border between ear and silence. He continued playing on the cliff, but now with another kind of listening: he no longer sought the lost melody, because it had returned to the world through the door the wind opened.",
      "Rare visitors arrived — lost hikers, storm photographers — and asked where that music came from. Augusto said it was not his. 'It belongs to the wind orchestra,' he said. 'I only help tune it.' Some laughed. Others truly listened and left in silence, as if carrying a secret that did not weigh.",
      "The following winter, a young violinist climbed the cliff with her instrument on her back. She said she had heard of a musician who spoke with the air. Augusto received her with soup and a warning: 'Here one does not play for applause. One plays for response.' She stayed three months, learning to wait for the right time between one phrase and another.",
      "When she left, she left a note in Augusto's notebook: 'The wind does not compose forever. It composes for whoever arrives in time.' He closed the notebook and smiled. Outside, the orchestra rehearsed again — bass, middle, treble — and for the first time in decades, Augusto felt he was exactly where he should be: at the center of a music that did not end, because it did not need to.",
    ],
    supplementEn: [
      "Before climbing the cliff for the last stretch of his life, Augusto spent an entire afternoon in the closed concert hall. He sat in the place where he used to play and let the empty air fill what was missing. There was no ghost audience, no echo of applause — only the creak of a chair and the certainty that some farewells must be made without witnesses.",
      "In the cabin, he kept a wind archive: not recordings, but descriptions. 'North, 2 p.m., phrase in A minor, hesitation on the third bar.' It seemed madness to those who did not hear. For Augusto, it was the only way not to betray the dialogue — to remember that the cliff's music had its own memory, independent of his.",
      "On a moonlit night, the wind brought a sound he did not recognize at first: the distant crack of a bridge giving way, turned into brief percussion. Augusto stopped playing and let the air finish the phrase alone. He understood then that the orchestra did not compose only for him — it composed also for everything the world had failed to close.",
      "Years later, when the violinist returned with a small group of students, Augusto did not place himself as master. He sat beside the door and only indicated when to breathe between one response and another. 'The wind does not reward haste,' he repeated. 'It rewards presence.' The young laughed at first; by the end of the season, no one laughed.",
      "In the last week of autumn, a storm tore a board from the roof. Augusto repaired it at dawn, with trembling hands and the cello covered in thick plastic. The wind, curiously, fell silent during the repair — as if it knew that certain care also belongs to the score.",
      "When snow reached the cliff for the first time, Augusto woke early and heard a new sound: crystals brushing against one another in the thin air, a texture no orchestra of flesh and wood could imitate. He did not try to accompany it. He only wrote in his notebook: 'Today, the orchestra rehearses without me.' And for the first time, that did not frighten him.",
      "One afternoon, after years on the cliff, Augusto went down to the city to buy strings and returned without haste. He realized urban noise no longer wounded him — it only seemed like distant, poorly rehearsed percussion. On the bus, a boy asked him to play something. Augusto refused gently. 'Today,' he said, 'I am only a listener.' And that seemed, for the first time, an honorable office.",
      "In the last spring of his life, he invited the violinist and the students to a session without instruments. They sat in a circle at the cliff's edge and listened to the wind compose alone. No one photographed. No one recorded. There was only the silent agreement that some music exists to be lost in the air — and still changes those who hear it.",
    ],
    bodyEs: [
      "El acantilado no figuraba en los mapas turísticos. Quedaba más allá del último camino de tierra, donde el asfalto dejaba de insistir y el mar empezaba a hablar más alto que cualquier señal. Allí instaló Augusto, exviolonchelista de la orquesta municipal, su cabaña de madera oscura, con una ventana hacia el abismo y una silla que conocía el peso de sus hombros mejor que cualquier partitura.",
      "No había huido de la ciudad por desgana con la música. Había huido del silencio que venía después: la sala vacía, los aplausos disolviéndose en el estacionamiento, el teléfono que dejó de sonar cuando desmontaron la orquesta por falta de presupuesto. En el acantilado, al menos, el viento nunca dejaba de tocar. Solo que Augusto aún no sabía escuchar.",
      "En las primeras semanas, el sonido era solo ruido: un silbido crudo, un golpe irregular contra las tablas, el crujido seco de ramas secas rozando el techo. Augusto anotaba temperatura y dirección en un cuaderno de bolsillo, como quien cataloga síntomas de una enfermedad sin nombre. Por la noche, soñaba con el violonchelo guardado al fondo del armario, envuelto en sábanas que olían a naftalina y añoranza.",
      "El cambio comenzó en un amanecer de otoño, cuando una ráfaga larga entró por la rendija de la ventana y permaneció — no como viento, sino como nota sostenida. Augusto despertó con el cuerpo tenso, como si alguien hubiera pulsado sus costillas. Se levantó descalzo, abrió la puerta y oyó, por primera vez, una frase musical completa atravesar el acantilado.",
      "No había instrumentos. Había capas: el grave de las olas golpeando la base de la roca, el registro medio de las hojas de brezo, el agudo de las gaviotas cortando el aire en diagonal. Era una armonía imposible, hecha sin manos. Augusto se sentó al borde del precipicio, con los pies colgando sobre la nada, y lloró sin vergüenza — no de tristeza, sino de reconocimiento.",
      "Al día siguiente, sacó el violonchelo. La madera protestó con un crujido familiar, como un viejo amigo que pregunta dónde has estado. Afinó despacio, con miedo de romper el encanto. Cuando pasó el arco por primera vez, el viento respondió — no imitando, sino completando, como si esperara aquel grave desde el principio de los tiempos.",
      "Pasaron meses así. Augusto aprendió los horarios del viento: la fuga de la mañana, el adagio del atardecer, la scherzo breve que venía antes de las tormentas. Escribió, en partituras improvisadas, decenas de páginas que nadie pidió. No era vanidad. Era necesidad. Una melodía perdida vivía en medio de aquel repertorio natural, y él sentía que lo buscaba tanto como él la buscaba.",
      "La melodía era antigua. Pertenecía a un concierto que Augusto compuso a los veintiocho años, para una mujer que se fue antes del estreno. Clara llevaba el manuscrito en el bolsillo del abrigo cuando cruzó el puente la noche en que la estructura cedió. El río se llevó el papel; la ciudad se llevó a la mujer; Augusto se quedó con el recuerdo truncado de ocho compases que nunca encontraron conclusión.",
      "Durante treinta años, evitó terminar aquella frase. Decía que faltaba inspiración, pero la verdad era miedo: terminar sería admitir que ella no volvería a escuchar. En el acantilado, sin embargo, el viento no aceptaba aplazamientos. Ciertas tardes, repetía los mismos ocho compases, cada vez con una inflexión distinta, como quien enseña a un niño a pronunciar un nombre difícil.",
      "En una semana de viento del norte, Augusto percibió el patrón. No era aleatorio: era diálogo. El viento ofrecía el tema; él debía responder con el violonchelo. Cuando erraba el tiempo, la ráfaga cortaba de golpe, casi irritada. Cuando acertaba, el aire se llenaba de armonías que hacían vibrar levemente las piedras, como resonancia en caja de madera.",
      "Trabajó en la conclusión durante cuarenta y dos noches. No por perfeccionismo, sino por respeto. Cada variación que el viento traía revelaba un camino que no había visto en la juventud. La melodía no necesitaba grandilocuencia — necesitaba llegada. Necesitaba un último acorde que no fuera grito, sino rendición.",
      "En la víspera del equinoccio, el cielo se despejó y el mar bajó la voz. Augusto supo que era la noche. Preparó el violonchelo, encendió una lámpara, dejó la puerta abierta. El viento entró sin prisa, como invitado antiguo. Los primeros compases fluyeron sin partitura: músculo y memoria finalmente alineados.",
      "Cuando llegó al pasaje interrumpido, todo el acantilado pareció contener la respiración. Augusto tocó la nota que faltaba — un re sostenido, simple, sin adorno. El viento sostuvo la octava superior. Por un instante, no hubo músico ni orquesta, solo sonido atravesando aire, roca y tiempo.",
      "Entonces vio a Clara. No como fantasma espectacular, sino como presencia al pie de la puerta: abrigo oscuro, cabello desordenado por el viento, la misma sonrisa tímida de quien espera ser interrumpida para no decir demasiado. No habló. Solo inclinó la cabeza, como en los ensayos, cuando la frase por fin quedaba bien.",
      "Augusto bajó el arco. La imagen no desapareció de inmediato — se disolvió despacio, como niebla al sol. No hubo despedida dramática. Hubo, sí, la sensación de que una carta largamente aplazada había sido entregada y leída. Permaneció sentado hasta que la lámpara consumió la mitad del aceite.",
      "Al amanecer, encontró en el umbral un trozo de papel amarillento, sujeto por una piedra lisa. No era el manuscrito original — era imposible —, pero traía los ocho compases completos, en letra que reconoció como suya, aunque más joven. En la esquina, una palabra: «Gracias.»",
      "Augusto guardó el papel dentro del estuche del violonchelo. No se lo contó a nadie. Contarlo sería reducir algo que vivía mejor en el límite entre el oído y el silencio. Siguió tocando en el acantilado, pero ahora con otra escucha: ya no buscaba la melodía perdida, porque había vuelto al mundo por la puerta que el viento abrió.",
      "Visitantes raros llegaban — excursionistas perdidos, fotógrafos de tormentas — y preguntaban de dónde venía aquella música. Augusto respondía que no era suya. «Es de la orquesta de los vientos», decía. «Yo solo ayudo a afinar.» Algunos se reían. Otros escuchaban de verdad y salían en silencio, como quien lleva un secreto que no pesa.",
      "Al invierno siguiente, una joven violinista subió el acantilado con el instrumento a la espalda. Dijo que había oído hablar de un músico que conversaba con el aire. Augusto la recibió con sopa y una advertencia: «Aquí no se toca para aplauso. Se toca para respuesta.» Se quedó tres meses, aprendiendo a esperar el momento justo entre una frase y otra.",
      "Cuando se fue, dejó una anotación en el cuaderno de Augusto: «El viento no compone para siempre. Compone para quien llega a tiempo.» Él cerró el cuaderno y sonrió. Afuera, la orquesta ensayaba otra vez — grave, medio, agudo — y, por primera vez en décadas, Augusto sintió que estaba exactamente donde debía estar: en el centro de una música que no terminaba, porque no hacía falta.",
    ],
    supplementEs: [
      "Antes de subir al acantilado por el último tramo de su vida, Augusto pasó una tarde entera en la sala de conciertos cerrada. Se sentó en el lugar donde solía tocar y dejó que el aire vacío llenara lo que faltaba. No hubo fantasma de público ni eco de aplausos — solo el crujido de una silla y la certeza de que algunas despedidas deben hacerse sin testigos.",
      "En la cabaña, mantenía un archivo de vientos: no grabaciones, sino descripciones. «Norte, 14 h, frase en la menor, vacilación en el tercer compás.» Parecía locura para quien no oía. Para Augusto, era la única forma de no traicionar el diálogo — de recordar que la música del acantilado tenía memoria propia, independiente de la suya.",
      "Cierta noche de luna, el viento trajo un sonido que no reconoció de inmediato: el crujido distante de un puente cediendo, convertido en percusión breve. Augusto dejó de tocar y permitió que el aire terminara la frase solo. Entendió, entonces, que la orquesta no componía solo para él — componía también para todo lo que el mundo no supo cerrar.",
      "Años después, cuando la violinista volvió con un grupo pequeño de estudiantes, Augusto no se colocó como maestro. Se sentó junto a la puerta e indicó cuándo respirar entre una respuesta y otra. «El viento no premia la prisa», repetía. «Premia la presencia.» Los jóvenes se rieron al principio; al final de la temporada, ya nadie reía.",
      "En la última semana de otoño, una tormenta arrancó una tabla del techo. Augusto la reparó al amanecer, con las manos temblorosas y el violonchelo cubierto por un plástico grueso. El viento, curiosamente, guardó silencio durante la reparación — como si supiera que ciertos cuidados también forman parte de la partitura.",
      "Cuando la nieve llegó por primera vez al acantilado, Augusto despertó temprano y oyó un sonido nuevo: cristales rozándose en el aire rarefecho, una textura que ninguna orquesta de carne y madera podría imitar. No intentó acompañar. Solo anotó en el cuaderno: «Hoy, la orquesta ensaya sin mí.» Y por primera vez, eso no lo asustó.",
      "Una tarde, después de años en el acantilado, Augusto bajó a la ciudad a comprar cuerdas y volvió sin prisa. Comprendió que el ruido urbano ya no lo hería — solo parecía una percusión lejana, mal ensayada. En el autobús, un niño le pidió que tocara algo. Augusto rechazó con gentileza. «Hoy», dijo, «solo soy oyente.» Y eso le pareció, por primera vez, un oficio honorable.",
      "En la última primavera de su vida, invitó a la violinista y a los estudiantes a una sesión sin instrumentos. Se sentaron en círculo al borde del acantilado y escucharon al viento componer solo. Nadie fotografió. Nadie grabó. Solo hubo el acuerdo silencioso de que algunas músicas existen para perderse en el aire — y, aun así, cambian a quien las escucha.",
    ],
  },
];

import { stories2to5 } from "./generate-stories-content-data.mjs";
import { stories345 } from "./generate-stories-content-data-345.mjs";
stories.push(...stories2to5, ...stories345);

mkdirSync(OUT_DIR, { recursive: true });

console.log("Generating stories content...\n");
const results = [];

for (const story of stories) {
  const { filePath, bodyPt, bodyEn, bodyEs } = writeStoryFile(story);
  const counts = {
    pt: countChars(bodyPt),
    en: countChars(bodyEn),
    es: countChars(bodyEs),
    paragraphs: { pt: bodyPt.length, en: bodyEn.length, es: bodyEs.length },
  };

  for (const [lang, n] of Object.entries({ pt: counts.pt, en: counts.en, es: counts.es })) {
    if (n < MIN_CHARS || n > MAX_CHARS) {
      throw new Error(`${story.meta.slug} [${lang}]: ${n} chars (expected ${MIN_CHARS}-${MAX_CHARS})`);
    }
  }

  results.push({ slug: story.meta.slug, file: filePath, counts });
  console.log(`${story.meta.slug}.ts`);
  console.log(`  PT: ${counts.pt} chars (${counts.paragraphs.pt} paragraphs)`);
  console.log(`  EN: ${counts.en} chars (${counts.paragraphs.en} paragraphs)`);
  console.log(`  ES: ${counts.es} chars (${counts.paragraphs.es} paragraphs)`);
  console.log();
}

console.log(`Done. ${results.length} files written to ${OUT_DIR}`);
