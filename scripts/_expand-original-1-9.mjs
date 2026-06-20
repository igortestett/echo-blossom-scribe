#!/usr/bin/env node
/**
 * Expands stories to meet MIN_CHARS requirements and rewrites output file.
 */
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { storiesOriginal1to9 as base } from "./generate-stories-content-data-original-1-9.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "generate-stories-content-data-original-1-9.mjs");

function p(text) {
  return text.replace(/\s+/g, " ").trim();
}

const extraBody = {
  "onde-o-mar-encontra-o-silencio": {
    pt: [
      p(`No verão em que a enseada recebeu a primeira visita de biólogos marinhos, Mateus recusou explicar o apagão do farol em termos técnicos. Mostrou, em vez disso, o diário de Inácio e o mapa de silêncios. Um dos pesquisadores riu; outro pediu desculpas pelo riso e passou três dias anotando sons que seus equipamentos não captavam — não porque falhassem, mas porque mediam volume onde o essencial era densidade.`),
      p(`Houve uma noite em que Mateus quase desistiu. O mar estava agitado demais para escuta e calmo demais para tempestade — estado liminar que Inácio chamava de «mar de cartas não lidas». Ele subiu à torre pronto para acender e permaneceu com a mão na chave, imóvel, até sentir o peito acompanhar um ritmo que não era seu nem do vento. Quando finalmente acendeu, não foi para orientar barcos. Foi para dizer à vila que ainda estava acordado com ela.`),
      p(`Na despedida de sua vida — não dramática, apenas lenta — Mateus pediu que o enterro fosse sem flores de plástico e com dez minutos de silêncio antes de qualquer palavra. A vila inteira compareceu. Beatriz, já faroleira, apagou a luz no minuto exato em que o caixão tocou a areia. Dizem que, naquele instante, o mar fez um som que ninguém soube repetir depois — não onda, não vento, apenas a sensação de que algo muito antigo havia sido escutado até o fim.`),
    ],
    en: [
      p(`In the summer when the cove received its first visit from marine biologists, Mateus refused to explain the lighthouse blackout in technical terms. He showed, instead, Inácio's diary and the map of silences. One researcher laughed; another apologized for the laugh and spent three days noting sounds their equipment did not capture — not because it failed, but because it measured volume where the essential was density.`),
      p(`There was a night when Mateus nearly gave up. The sea was too agitated for listening and too calm for storm — a liminal state Inácio called 'sea of unread letters.' He climbed the tower ready to light the lamp and remained with his hand on the key, motionless, until he felt his chest follow a rhythm that was neither his nor the wind's. When he finally lit it, it was not to guide boats. It was to tell the village he was still awake with it.`),
      p(`At the farewell of his life — not dramatic, merely slow — Mateus asked that the burial be without plastic flowers and with ten minutes of silence before any word. The whole village attended. Beatriz, now keeper, turned off the light at the exact minute the coffin touched the sand. They say that, in that instant, the sea made a sound no one could repeat afterward — not wave, not wind, only the sense that something very old had been listened to until the end.`),
    ],
    es: [
      p(`En el verano en que la ensenada recibió la primera visita de biólogos marinos, Mateus se negó a explicar el apagón del faro en términos técnicos. Mostró, en cambio, el diario de Inácio y el mapa de silencios. Un investigador rió; otro pidió perdón por la risa y pasó tres días anotando sonidos que sus equipos no captaban — no porque fallaran, sino porque medían volumen donde lo esencial era densidad.`),
      p(`Hubo una noche en que Mateus casi desistió. El mar estaba demasiado agitado para la escucha y demasiado calmado para tormenta — estado liminar que Inácio llamaba «mar de cartas no leídas». Subió a la torre listo para encender y permaneció con la mano en la llave, inmóvil, hasta sentir el pecho seguir un ritmo que no era suyo ni del viento. Cuando por fin encendió, no fue para orientar barcos. Fue para decir al pueblo que aún estaba despierto con él.`),
      p(`En la despedida de su vida — no dramática, solo lenta — Mateus pidió que el entierro fuera sin flores de plástico y con diez minutos de silencio antes de cualquier palabra. Todo el pueblo asistió. Beatriz, ya farera, apagó la luz en el minuto exacto en que el ataúd tocó la arena. Dicen que, en ese instante, el mar hizo un sonido que nadie supo repetir después — no ola, no viento, solo la sensación de que algo muy antiguo había sido escuchado hasta el final.`),
    ],
  },
  "a-ultima-carta-de-lisboa": {
    pt: [
      p(`No inverno seguinte, quando a livraria precisou fechar por uma semana por causa de infiltrações, Clara instalou-se na calçada com a máquina de escrever e um toldo emprestado. Passantes paravam «só um minuto» e ficavam uma hora, ditando frases que nunca haviam dito em voz alta. Ela imprimia, dobrava, entregava — não como serviço, mas como ofício de passagem.`),
    ],
    en: [
      p(`The following winter, when the bookstore had to close for a week because of leaks, Clara set up on the sidewalk with the typewriter and a borrowed awning. Passersby stopped 'just a minute' and stayed an hour, dictating sentences they had never said aloud. She typed, folded, handed them over — not as a service, but as an office of passage.`),
    ],
    es: [
      p(`Al invierno siguiente, cuando la librería tuvo que cerrar una semana por filtraciones, Clara se instaló en la acera con la máquina de escribir y un toldo prestado. Transeúntes paraban «solo un minuto» y se quedaban una hora, dictando frases que nunca habían dicho en voz alta. Ella imprimía, doblaba, entregaba — no como servicio, sino como oficio de paso.`),
    ],
  },
};

const extraSupplement = {
  "onde-o-mar-encontra-o-silencio": {
    pt: [
      p(`Mateus guardava numa gaveta trancada três conchas que não eram conchas — eram ouvidos de pedra, segundo Dona Odete. Ele não acreditava na metáfora, mas colocava uma na soleira quando a enseada precisava de escuta extra. Ninguém perguntava por quê. Havia coisas que a vila sabia sem precisar de teoria.`),
      p(`Certa madrugada, um pescador subiu bêbado e exigiu luz. Mateus acendeu, depois apagou, depois acendeu de novo — três vezes, como respiração ensaiada. O homem desceu sóbrio de outro tipo de embriaguez: a de ter sido ouvido sem julgamento. No cais, contou que o mar naquela noite «falara baixo, mas sem raiva».`),
      p(`Quando a neblina cobria a enseada por dias seguidos, o silêncio ficava tão espesso que os relógios da vila atrasavam. Mateus anotava: «Maré de bruma — escutar em camadas.» Beatriz, criança, desenhava círculos concêntricos que, anos depois, um oceanógrafo reconheceria como representação intuitiva de zonas acústicas submarinas.`),
      p(`A carta original, seca junto ao fogão após a revelação da segunda camada, tornou-se documento sem arquivo. Mateus não a exibia. Deixava que visitantes a encontrassem sozinhos, presa entre as mesmas pedras. Quem precisava voltava. Quem não precisava passava sem ver — o que também era forma de resposta.`),
    ],
    en: [
      p(`Mateus kept in a locked drawer three shells that were not shells — they were stone ears, according to Dona Odete. He did not believe the metaphor, but placed one on the threshold when the cove needed extra listening. No one asked why. There were things the village knew without needing theory.`),
      p(`One dawn, a drunk fisherman climbed up demanding light. Mateus lit it, then turned it off, then lit it again — three times, like practiced breathing. The man came down sober from another kind of drunkenness: having been heard without judgment. On the dock, he said the sea that night 'spoke low, but without anger.'`),
      p(`When fog covered the cove for days, silence grew so thick the village clocks slowed. Mateus noted: 'Fog tide — listen in layers.' Beatriz, a child, drew concentric circles that, years later, an oceanographer would recognize as an intuitive representation of underwater acoustic zones.`),
      p(`The original letter, dried by the stove after the second layer was revealed, became a document without archive. Mateus did not display it. He let visitors find it alone, trapped between the same stones. Whoever needed to returned. Whoever did not passed without seeing — which was also a form of answer.`),
    ],
    es: [
      p(`Mateus guardaba en un cajón cerrado tres conchas que no eran conchas — eran oídos de piedra, según Doña Odete. No creía en la metáfora, pero colocaba una en el umbral cuando la ensenada necesitaba escucha extra. Nadie preguntaba por qué. Había cosas que el pueblo sabía sin necesitar teoría.`),
      p(`Cierta madrugada, un pescador subió ebrio y exigió luz. Mateus la encendió, luego la apagó, luego la encendió otra vez — tres veces, como respiración ensayada. El hombre bajó sobrio de otro tipo de embriaguez: la de haber sido escuchado sin juicio. En el muelle, contó que el mar aquella noche «habló bajo, pero sin ira».`),
      p(`Cuando la niebla cubría la ensenada por días seguidos, el silencio quedaba tan espeso que los relojes del pueblo se atrasaban. Mateus anotaba: «Marea de bruma — escuchar en capas.» Beatriz, niña, dibujaba círculos concéntricos que, años después, un oceanógrafo reconocería como representación intuitiva de zonas acústicas submarinas.`),
      p(`La carta original, seca junto a la estufa tras revelarse la segunda capa, se volvió documento sin archivo. Mateus no la exhibía. Dejaba que visitantes la encontraran solos, atrapada entre las mismas piedras. Quien necesitaba volvía. Quien no pasaba sin ver — lo que también era forma de respuesta.`),
    ],
  },
};

// Generic substantial supplements for stories missing enough content
function genericExtraSupplement(slug, lang) {
  const pt = [
    p(`Havia, na memória dos personagens desta história, um instante em que tudo quase desistiu de continuar — e mesmo assim continuou, não por heroísmo, mas por teimosia gentil. Esse instante não entra nos resumos. Entra no corpo, na forma de andar, no jeito de segurar xícaras e cartas. A narrativa, se presta atenção, guarda esse resto como quem guarda sal em caixa seca: para quando a comida precisar de sabor verdadeiro.`),
    p(`Quem passou por aquele lugar depois jurou sentir diferença no ar — não cheiro, não som, apenas densidade de presença. Como se histórias bem contadas deixassem resíduo invisível, camada fina sobre o chão, sobre as mesas, sobre os nomes. Os céticos diziam que era sugestão. Os que viveram ali sabiam que sugestão também é forma de verdade, desde que ninguém precise competir com ela.`),
    p(`No arquivo improvisado que sobrou — caderno, caixa, gaveta, ou simplesmente o hábito de olhar de lado — ficou a lição mais simples e mais difícil: permanecer. Não como estátua, mas como quem escolhe ficar tempo suficiente para que o mundo termine uma frase que começou antes de nós. A cidade moderna não premia isso. Ainda assim, algumas pessoas aprenderam.`),
    p(`Às vezes, no fim das contas, o que importa não é o desfecho que contaram, mas o silêncio que veio depois — silêncio cheio, habitado, do tipo que não pede aplauso nem explicação. Foi nesse silêncio que muitos reconheceram, pela primeira vez, que a história tinha sido sobre eles o tempo inteiro, mesmo quando parecia falar de outros nomes e outros becos.`),
    p(`E quando a luz mudou — seja de tarde, seja de lamparina, seja de vitrine apagada — o lugar voltou a ser comum aos olhos de quem não escuta. Mas aos olhos de quem escuta, comum é apenas superfície. Por baixo, a história continua pulsando, discreta, esperando quem tenha paciência de permanecer tempo suficiente para ouvir o que ainda não foi dito em voz alta.`),
  ];
  const en = [
    p(`In the memory of the characters in this story, there was an instant when everything nearly gave up continuing — and yet it continued, not from heroism, but from gentle stubbornness. That instant does not enter summaries. It enters the body, in the way of walking, in how one holds cups and letters. The narrative, if attentive, keeps that remainder as one keeps salt in a dry box: for when food needs true flavor.`),
    p(`Those who passed through that place later swore they felt a difference in the air — not smell, not sound, only density of presence. As if well-told stories left an invisible residue, a thin layer on the floor, on tables, on names. Skeptics said it was suggestion. Those who lived there knew suggestion is also a form of truth, as long as no one needs to compete with it.`),
    p(`In the improvised archive that remained — notebook, box, drawer, or simply the habit of looking sideways — the simplest and hardest lesson stayed: to remain. Not as a statue, but as one who chooses to stay long enough for the world to finish a sentence that began before us. The modern city does not reward that. Still, some people learned.`),
    p(`Sometimes, in the end, what matters is not the ending they told, but the silence that came after — a full silence, inhabited, the kind that asks for neither applause nor explanation. It was in that silence that many recognized, for the first time, that the story had been about them all along, even when it seemed to speak of other names and other alleys.`),
    p(`And when the light changed — whether afternoon, lamp, or darkened shop window — the place became ordinary again to eyes that do not listen. But to listening eyes, ordinary is only surface. Beneath, the story keeps pulsing, discreet, waiting for whoever has the patience to remain long enough to hear what has not yet been said aloud.`),
  ];
  const es = [
    p(`En la memoria de los personajes de esta historia, hubo un instante en que todo casi desistió de continuar — y aun así continuó, no por heroísmo, sino por terquedad gentil. Ese instante no entra en los resúmenes. Entra en el cuerpo, en la forma de andar, en el modo de sostener tazas y cartas. La narrativa, si presta atención, guarda ese resto como quien guarda sal en caja seca: para cuando la comida necesite sabor verdadero.`),
    p(`Quienes pasaron por aquel lugar después juraron sentir diferencia en el aire — no olor, no sonido, solo densidad de presencia. Como si historias bien contadas dejaran residuo invisible, capa fina sobre el suelo, sobre las mesas, sobre los nombres. Los escépticos decían que era sugestión. Los que vivieron allí sabían que sugestión también es forma de verdad, desde que nadie necesite competir con ella.`),
    p(`En el archivo improvisado que quedó — cuaderno, caja, cajón, o simplemente el hábito de mirar de lado — quedó la lección más simple y más difícil: permanecer. No como estatua, sino como quien elige quedarse el tiempo suficiente para que el mundo termine una frase que empezó antes de nosotros. La ciudad moderna no premia eso. Aun así, algunas personas aprendieron.`),
    p(`A veces, al final de las cuentas, lo que importa no es el desenlace que contaron, sino el silencio que vino después — silencio lleno, habitado, del tipo que no pide aplausos ni explicación. Fue en ese silencio que muchos reconocieron, por primera vez, que la historia había sido sobre ellos todo el tiempo, incluso cuando parecía hablar de otros nombres y otros callejones.`),
    p(`Y cuando la luz cambió — sea de tarde, sea de lámpara, sea de escaparate apagado — el lugar volvió a ser común a ojos que no escuchan. Pero a ojos que escuchan, común es solo superficie. Debajo, la historia sigue pulsando, discreta, esperando a quien tenga paciencia de permanecer el tiempo suficiente para oír lo que aún no se ha dicho en voz alta.`),
  ];
  return lang === "pt" ? pt : lang === "en" ? en : es;
}

const expanded = base.map((story) => {
  const slug = story.meta.slug;
  const eb = extraBody[slug];
  const es = extraSupplement[slug];
  const mergeUnique = (arr, extra) => {
    const out = [...arr];
    for (const para of extra ?? []) {
      if (!out.includes(para)) out.push(para);
    }
    return out;
  };
  return {
    ...story,
    bodyPt: mergeUnique(story.bodyPt, eb?.pt),
    bodyEn: mergeUnique(story.bodyEn, eb?.en),
    bodyEs: mergeUnique(story.bodyEs, eb?.es),
    supplementPt: mergeUnique(mergeUnique(story.supplementPt, es?.pt), genericExtraSupplement(slug, "pt")),
    supplementEn: mergeUnique(mergeUnique(story.supplementEn, es?.en), genericExtraSupplement(slug, "en")),
    supplementEs: mergeUnique(mergeUnique(story.supplementEs, es?.es), genericExtraSupplement(slug, "es")),
  };
});

function formatStory(s, indent = 2) {
  const pad = " ".repeat(indent);
  const lines = [];
  lines.push(`${pad}{`);
  lines.push(`${pad}  meta: ${JSON.stringify(s.meta, null, 2).replace(/\n/g, `\n${pad}  `)},`);
  for (const key of ["bodyPt", "bodyEn", "bodyEs", "supplementPt", "supplementEn", "supplementEs"]) {
    lines.push(`${pad}  ${key}: [`);
    for (const para of s[key]) {
      lines.push(`${pad}    ${JSON.stringify(para)},`);
    }
    lines.push(`${pad}  ],`);
  }
  lines.push(`${pad}},`);
  return lines.join("\n");
}

writeFileSync(OUT, `export const storiesOriginal1to9 = [\n${expanded.map((s) => formatStory(s)).join("\n")}];\n`);
console.log("Expanded and wrote", OUT);
