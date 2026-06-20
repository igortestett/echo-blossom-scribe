#!/usr/bin/env node
/**
 * Builds generate-stories-content-data-original-1-9.mjs from story parts.
 * Run: node scripts/_build-original-1-9.mjs
 */
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { stories2to5 } from "./_original-stories-2-5.mjs";
import { stories6to9 } from "./_original-stories-6-9.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "generate-stories-content-data-original-1-9.mjs");

function p(text) {
  return text.replace(/\s+/g, " ").trim();
}

function story(meta, bodyPt, bodyEn, bodyEs, supplementPt, supplementEn, supplementEs) {
  return { meta, bodyPt, bodyEn, bodyEs, supplementPt, supplementEn, supplementEs };
}

const story1 = story(
  {
    slug: "onde-o-mar-encontra-o-silencio",
    sort_order: 1,
    category_slug: "ficcao",
    featured: true,
    titlePt: "Onde o Mar Encontra o Silêncio",
    titleEn: "Where the Sea Meets the Silence",
    titleEs: "Donde el Mar Encuentra el Silencio",
    excerptPt:
      "Numa enseada esquecida pelo mapa, um faroleiro aprende que o silêncio também tem marés — e que algumas histórias só chegam quando paramos de procurá-las.",
    excerptEn:
      "In a cove forgotten by the map, a lighthouse keeper learns that silence also has tides — and that some stories only arrive when we stop looking for them.",
    excerptEs:
      "En una ensenada olvidada por el mapa, un farero aprende que el silencio también tiene mareas — y que algunas historias solo llegan cuando dejamos de buscarlas.",
    categoryPt: "Ficção",
    categoryEn: "Fiction",
    categoryEs: "Ficción",
  },
  [
    p(`O farol não piscava há três noites, mas ninguém na vila parecia notar. Para Mateus, porém, cada ausência de luz era um sinal — como se o horizonte estivesse pedindo descanso.`),
    p(`Ele subiu a escada de pedra ao amanhecer, com o sal grudado na pele e o café frio na mão. O vento trazia um cheiro de algas e de memórias antigas, daquelas que não pertencem a uma pessoa só.`),
    p(`No topo, encontrou a lâmpada intacta. O problema estava no silêncio: um silêncio tão denso que abafava até o ruído das ondas. Mateus ficou parado, escutando o que normalmente se deixa passar.`),
    p(`Foi então que viu a carta, presa entre duas pedras, amarelada pelo tempo. Não tinha remetente. Dizia apenas: «Volte quando o mar parar de falar.»`),
    p(`Mateus sorriu. O mar nunca para. Mas, naquele dia, por um instante, pareceu escutar.`),
    p(`Guardou a carta no bolso interno do casaco de lã e desceu devagar, como quem não quer acordar o que ainda dormia na enseada. Na vila, as janelas permaneciam fechadas. Os pescadores já estavam no cais, mas ninguém comentou o farol apagado — ou fingiam que apagado era o normal quando o céu estava limpo demais.`),
    p(`Na casa anexa à torre, Mateus encontrou o diário do faroleiro anterior, Inácio, morto há doze anos sem explicação clara. As páginas finais não falavam de lamparina nem de óleo. Falavam de marés de silêncio: períodos em que o horizonte recuava e o mundo parecia prender a respiração. «Não conserte a luz», escrevera Inácio. «Conserte a escuta.»`),
    p(`Mateus releu a frase três vezes. Havia passado a vida inteira acreditando que farol era promessa de orientação — um sim para quem navegava no escuro. Inácio sugeria outra função: criar um intervalo em que o mar pudesse dizer o que costumava ser abafado pelo próprio ruído das ondas.`),
    p(`Naquela tarde, em vez de acender a lâmpada, Mateus abriu todas as janelas da torre e sentou-se no patamar mais alto. Escutou. Primeiro veio o habitual: vento, gaivotas, estalo de cordas no cais distante. Depois, mais fundo, um pulso irregular — como batida de coração grande demais para caber no peito de alguém.`),
    p(`Era o mar, sim, mas não como barulho. Era o mar como conversa antiga entre parentes que brigaram e nunca souberam pedir perdão. Mateus não entendeu palavras. Entendeu peso. Sentiu na nuca a mesma pressão de quem está numa sala pequena quando alguém finalmente diz a verdade.`),
    p(`Ao anoitecer, uma menina da vila subiu a colina com um caderno de desenho. Chamava-se Beatriz e tinha oito anos. «Minha avó disse que o farol apaga quando precisa ouvir por nós», disse, sem cerimônia. Mateus não perguntou qual avó. Na enseada, as avós sabiam mais do que os mapas.`),
    p(`Beatriz mostrou um desenho: o mar em espiral, e no centro um ponto branco sem legenda. «É onde o silêncio mora», explicou. Mateus guardou o desenho junto ao diário de Inácio. À noite, pela primeira vez desde que assumira o posto, não se sentiu solitário na torre.`),
    p(`Os dias seguintes trouxeram visitas discretas. Um velho deixou um maço de cartas não enviadas; uma mulher trouxe um relógio parado às quatro e vinte; um rapaz apareceu com um nome na língua que não quis repetir. Todos subiam sem pedir luz. Todos desciam com os ombros menos rígidos, como se algo tivesse sido devolvido sem que soubessem nomear.`),
    p(`Mateus entendeu que a enseada inteira usava o farol como ouvido coletivo. Não era milagre nem superstição — era necessidade geográfica. Lugares esquecidos pelo mapa precisam de um ponto onde o inominável possa ser escutado sem virar notícia.`),
    p(`Na quarta noite de luz apagada, a carta do bolso amoleceu com umidade salgada. As letras se rearranjaram sob seus olhos — não magia de conto, mas efeito de água e tinta antiga revelando segunda camada. Agora dizia: «Volte quando o mar parar de falar — e fique quando ele pedir testemunha.»`),
    p(`Mateus ficou. O mar não parou de falar, mas mudou o tom: menos lamentação, mais entrega. Ele registrou no diário, com caligrafia que tentava imitar a de Inácio, cada mudança de silêncio como quem anota marés. Havia silêncio de tempestade anunciada, silêncio de baleia passando longe, silêncio de luto que finalmente encontra palavra.`),
    p(`Quando acendeu o farol no sétimo dia, foi sem pressa. A lâmpada respondeu com um clarão suave, quase tímido. No mesmo instante, na vila, três pessoas interromperam conversas no meio de frases importantes — não por acaso, mas porque algo no horizonte lembrava que honestidade também precisa de horário.`),
    p(`Beatriz voltou com a avó, Dona Odete, que conhecera Inácio. «Ele apagava a luz quando o mar acumulava segredos demais», disse a velha. «Você fez o mesmo. Isso significa que a enseada ainda confia em você.» Mateus não se sentiu honrado. Sentiu-se responsável — palavra mais pesada e mais verdadeira.`),
    p(`No inverno, uma tempestade quebrou o vidro da lanterna. Mateus consertou durante dois dias, mas manteve o farol apagado uma noite extra depois do conserto. Os pescadores reclamaram. Ele respondeu com chá e silêncio compartilhado na sala da torre. Na manhã seguinte, o mar devolveu dois barcos que todos julgavam perdidos. Ninguém atribuiu ao farol. Atribuíram ao tempo certo de escutar.`),
    p(`Anos depois, quando Mateus ensinou Beatriz — já adulta — a ler as marés de silêncio, ela perguntou se o mar algum dia pararia de falar. Ele olhou para o horizonte e respondeu: «Para de falar quando encontra quem não foge do que ouve.» Na enseada esquecida pelo mapa, o farol voltou a piscar todas as noites. Mas às vezes, de propósito, ainda apaga — e o mar, por um instante, parece escutar de volta.`),
  ],
  [
    p(`The lighthouse hadn't flashed for three nights, but no one in the village seemed to notice. For Mateus, however, each absence of light was a sign — as if the horizon were asking for rest.`),
    p(`He climbed the stone stairs at dawn, salt clinging to his skin and cold coffee in hand. The wind brought a smell of algae and old memories, the kind that do not belong to just one person.`),
    p(`At the top, he found the lamp intact. The problem was in the silence: a silence so dense that it drowned out even the noise of the waves. Mateus stood still, listening to what is normally let pass.`),
    p(`It was then that he saw the letter, trapped between two stones, yellowed by time. It had no sender. It said only: 'Come back when the sea stops talking.'`),
    p(`Mateus smiled. The sea never stops. But, on that day, for an instant, it seemed to listen.`),
    p(`He kept the letter in the inner pocket of his wool coat and went down slowly, as if not wanting to wake what still slept in the cove. In the village, windows remained closed. The fishermen were already at the dock, but no one commented on the extinguished lighthouse — or they pretended that extinguished was normal when the sky was too clear.`),
    p(`In the house attached to the tower, Mateus found the previous keeper's diary, Inácio, dead twelve years earlier without a clear explanation. The final pages did not speak of lamps or oil. They spoke of tides of silence: periods when the horizon receded and the world seemed to hold its breath. 'Do not fix the light,' Inácio had written. 'Fix the listening.'`),
    p(`Mateus reread the sentence three times. He had spent his whole life believing a lighthouse was a promise of guidance — a yes for those sailing in the dark. Inácio suggested another function: to create an interval in which the sea could say what was usually drowned out by the very noise of the waves.`),
    p(`That afternoon, instead of lighting the lamp, Mateus opened all the tower windows and sat on the highest landing. He listened. First came the usual: wind, gulls, the crack of ropes on the distant dock. Then, deeper, an irregular pulse — like a heartbeat too large to fit in anyone's chest.`),
    p(`It was the sea, yes, but not as noise. It was the sea as an old conversation between relatives who fought and never knew how to ask forgiveness. Mateus did not understand words. He understood weight. He felt at the nape of his neck the same pressure of being in a small room when someone finally tells the truth.`),
    p(`At nightfall, a girl from the village climbed the hill with a drawing notebook. Her name was Beatriz and she was eight. 'My grandmother said the lighthouse goes out when it needs to listen for us,' she said, without ceremony. Mateus did not ask which grandmother. In the cove, grandmothers knew more than maps.`),
    p(`Beatriz showed a drawing: the sea in a spiral, and in the center a white dot without a caption. 'It's where silence lives,' she explained. Mateus kept the drawing with Inácio's diary. That night, for the first time since taking the post, he did not feel lonely in the tower.`),
    p(`The following days brought discreet visits. An old man left a bundle of unsent letters; a woman brought a watch stopped at four twenty; a young man appeared with a name on his tongue he did not want to repeat. All climbed without asking for light. All descended with less rigid shoulders, as if something had been returned without their knowing how to name it.`),
    p(`Mateus understood that the entire cove used the lighthouse as a collective ear. It was not miracle or superstition — it was geographic necessity. Places forgotten by the map need a point where the unnameable can be heard without becoming news.`),
    p(`On the fourth night of extinguished light, the letter in his pocket softened with salty moisture. The letters rearranged before his eyes — not fairy-tale magic, but the effect of water and old ink revealing a second layer. Now it said: 'Come back when the sea stops talking — and stay when it asks for witness.'`),
    p(`Mateus stayed. The sea did not stop speaking, but changed tone: less lament, more surrender. He recorded in the diary, in handwriting trying to imitate Inácio's, each change of silence as one notes tides. There was silence of announced storm, silence of a whale passing far away, silence of grief that finally finds a word.`),
    p(`When he lit the lighthouse on the seventh day, it was without haste. The lamp responded with a soft, almost shy glow. At the same instant, in the village, three people interrupted conversations in the middle of important sentences — not by chance, but because something on the horizon reminded them that honesty also needs a schedule.`),
    p(`Beatriz returned with her grandmother, Dona Odete, who had known Inácio. 'He turned off the light when the sea accumulated too many secrets,' said the old woman. 'You did the same. That means the cove still trusts you.' Mateus did not feel honored. He felt responsible — a heavier and truer word.`),
    p(`In winter, a storm broke the lantern glass. Mateus repaired it for two days, but kept the lighthouse off an extra night after the repair. The fishermen complained. He answered with tea and shared silence in the tower room. The next morning, the sea returned two boats everyone thought lost. No one attributed it to the lighthouse. They attributed it to the right time to listen.`),
    p(`Years later, when Mateus taught Beatriz — now an adult — to read the tides of silence, she asked if the sea would ever stop speaking. He looked at the horizon and answered: 'It stops speaking when it finds someone who does not flee from what they hear.' In the cove forgotten by the map, the lighthouse blinked again every night. But sometimes, on purpose, it still went out — and the sea, for an instant, seemed to listen back.`),
  ],
  [
    p(`El faro no parpadeaba desde hacía tres noches, pero nadie en el pueblo parecía notarlo. Para Mateus, sin embargo, cada ausencia de luz era una señal — como si el horizonte estuviera pidiendo descanso.`),
    p(`Subió la escalera de piedra al amanecer, con la sal pegada a la piel y el café frío en la mano. El viento traía un olor a algas y a memorias antiguas, de esas que no pertenecen a una sola persona.`),
    p(`En la cima, encontró la lámpara intacta. El problema estaba en el silencio: un silencio tan denso que apagaba hasta el ruido de las olas. Mateus se quedó parado, escuchando lo que normalmente se deja pasar.`),
    p(`Fue entonces cuando vio la carta, atrapada entre dos piedras, amarilleada por el tiempo. No tenía remitente. Decía solo: 'Vuelve cuando el mar deje de hablar.'`),
    p(`Mateus sonrió. El mar nunca se detiene. Pero, aquel día, por un instante, pareció escuchar.`),
    p(`Guardó la carta en el bolsillo interior del abrigo de lana y bajó despacio, como quien no quiere despertar lo que aún duerme en la ensenada. En el pueblo, las ventanas permanecían cerradas. Los pescadores ya estaban en el muelle, pero nadie comentó el faro apagado — o fingían que apagado era lo normal cuando el cielo estaba demasiado despejado.`),
    p(`En la casa anexa a la torre, Mateus encontró el diario del farero anterior, Inácio, muerto doce años antes sin explicación clara. Las páginas finales no hablaban de lámpara ni de aceite. Hablaban de mareas de silencio: períodos en que el horizonte retrocedía y el mundo parecía contener la respiración. 'No arregles la luz', había escrito Inácio. 'Arregla la escucha.'`),
    p(`Mateus releyó la frase tres veces. Había pasado toda la vida creyendo que un faro era promesa de orientación — un sí para quien navegaba en la oscuridad. Inácio sugería otra función: crear un intervalo en que el mar pudiera decir lo que solía ser ahogado por el propio ruido de las olas.`),
    p(`Aquella tarde, en lugar de encender la lámpara, Mateus abrió todas las ventanas de la torre y se sentó en el descanso más alto. Escuchó. Primero vino lo habitual: viento, gaviotas, crujido de cuerdas en el muelle lejano. Después, más adentro, un pulso irregular — como latido de corazón demasiado grande para caber en el pecho de alguien.`),
    p(`Era el mar, sí, pero no como ruido. Era el mar como conversación antigua entre parientes que pelearon y nunca supieron pedir perdón. Mateus no entendió palabras. Entendió peso. Sintió en la nuca la misma presión de estar en una habitación pequeña cuando alguien por fin dice la verdad.`),
    p(`Al anochecer, una niña del pueblo subió la colina con un cuaderno de dibujo. Se llamaba Beatriz y tenía ocho años. 'Mi abuela dijo que el faro se apaga cuando necesita escuchar por nosotros', dijo, sin ceremonia. Mateus no preguntó qué abuela. En la ensenada, las abuelas sabían más que los mapas.`),
    p(`Beatriz mostró un dibujo: el mar en espiral, y en el centro un punto blanco sin leyenda. 'Es donde vive el silencio', explicó. Mateus guardó el dibujo junto al diario de Inácio. Esa noche, por primera vez desde que asumió el puesto, no se sintió solo en la torre.`),
    p(`Los días siguientes trajeron visitas discretas. Un viejo dejó un fajo de cartas no enviadas; una mujer trajo un reloj detenido a las cuatro y veinte; un joven apareció con un nombre en la lengua que no quiso repetir. Todos subían sin pedir luz. Todos bajaban con los hombros menos rígidos, como si algo hubiera sido devuelto sin saber nombrarlo.`),
    p(`Mateus entendió que toda la ensenada usaba el faro como oído colectivo. No era milagro ni superstición — era necesidad geográfica. Los lugares olvidados por el mapa necesitan un punto donde lo innombrable pueda ser escuchado sin convertirse en noticia.`),
    p(`En la cuarta noche de luz apagada, la carta del bolsillo se ablandó con humedad salada. Las letras se reacomodaron ante sus ojos — no magia de cuento, sino efecto de agua y tinta antigua revelando segunda capa. Ahora decía: 'Vuelve cuando el mar deje de hablar — y quédate cuando pida testigo.'`),
    p(`Mateus se quedó. El mar no dejó de hablar, pero cambió el tono: menos lamentación, más entrega. Registró en el diario, con caligrafía que intentaba imitar la de Inácio, cada cambio de silencio como quien anota mareas. Había silencio de tormenta anunciada, silencio de ballena pasando lejos, silencio de duelo que por fin encuentra palabra.`),
    p(`Cuando encendió el faro al séptimo día, fue sin prisa. La lámpara respondió con un brillo suave, casi tímido. Al mismo instante, en el pueblo, tres personas interrumpieron conversaciones en medio de frases importantes — no por casualidad, sino porque algo en el horizonte recordaba que la honestidad también necesita horario.`),
    p(`Beatriz volvió con su abuela, Doña Odete, que había conocido a Inácio. 'Él apagaba la luz cuando el mar acumulaba demasiados secretos', dijo la anciana. 'Tú hiciste lo mismo. Eso significa que la ensenada aún confía en ti.' Mateus no se sintió honrado. Se sintió responsable — palabra más pesada y más verdadera.`),
    p(`En invierno, una tormenta rompió el vidrio de la linterna. Mateus lo reparó durante dos días, pero mantuvo el faro apagado una noche extra después del arreglo. Los pescadores se quejaron. Él respondió con té y silencio compartido en la sala de la torre. A la mañana siguiente, el mar devolvió dos barcos que todos creían perdidos. Nadie lo atribuyó al faro. Lo atribuyeron al momento correcto de escuchar.`),
    p(`Años después, cuando Mateus enseñó a Beatriz — ya adulta — a leer las mareas de silencio, ella preguntó si el mar algún día dejaría de hablar. Él miró el horizonte y respondió: 'Deja de hablar cuando encuentra a quien no huye de lo que oye.' En la ensenada olvidada por el mapa, el faro volvió a parpadear todas las noches. Pero a veces, a propósito, aún se apaga — y el mar, por un instante, parece escuchar de vuelta.`),
  ],
  [
    p(`Inácio deixara, na última página do diário, um mapa da enseada desenhado com tinta de bolacha de náutica. Não marcava profundidades nem recifes — apenas pontos onde o silêncio costumava ser mais espesso. Mateus passou a caminhar esses trechos ao amanhecer, antes de subir à torre, como quem visita parentes que não falam, mas acenam.`),
    p(`Havia um ponto, perto das pedras onde encontrara a carta, em que até os pássaros evitavam cantar. Mateus ficou ali uma hora inteira num domingo de vento fraco. Não ouviu revelação dramática. Ouviu, porém, o próprio nome dito sem voz — não como chamado, mas como lembrança de que alguém, em algum tempo, precisara dele sem saber pedir.`),
    p(`Dona Odete contou, mais tarde, que Inácio morrera não de doença, mas de exaustão de escuta. «O mar pediu demais numa noite de luar», disse. «Ele atendeu até o fim e não sobrou corpo.» Mateus entendeu que faroleiro, naquela enseada, era ofício de testemunha — e testemunha não interrompe.`),
    p(`Quando turistas ocasionais subiam a colina exigindo foto com luz acesa, Mateus acendia sem discutir. Mas à noite, sozinho, apagava por uma hora e anotava no diário o que o escuro devolvia: cheiros, medos, promessas adiadas. O arquivo de silêncios cresceu até virar segundo coração da torre.`),
    p(`Beatriz, adolescente, perguntou se podia publicar os desenhos das marés de silêncio numa feira da escola. Mateus hesitou, depois aceitou com uma condição: nenhum desenho poderia ter legenda. «Quem precisar, reconhece», disse. Na feira, três adultos choraram diante de espirais sem título. Ninguém soube explicar por quê.`),
    p(`Na última tempestade de sua vida, Mateus apagou o farol antes do vento chegar — não por falha, mas por obediência a um silêncio que antecedia o ruído. A vila inteira dormiu enquanto o céu rachava. Ao amanhecer, encontraram a torre intacta e o mar calmo como vidro. «Ele escutou por nós», disse Dona Odete. Mateus não negou.`),
    p(`Quando entregou as chaves a Beatriz, já com o corpo cansado, deixou apenas uma instrução: «Acenda quando orientar. Apague quando escutar.» Ela assumiu o posto com a mesma gravidade leve do avô de Mateus. O farol continuou piscando — mas a enseada sabia que luz era só metade do ofício.`),
  ],
  [
    p(`Inácio had left, on the diary's last page, a map of the cove drawn with nautical chart ink. It did not mark depths or reefs — only points where silence was usually thicker. Mateus began walking those stretches at dawn, before climbing the tower, as one visits relatives who do not speak but wave.`),
    p(`There was one spot, near the stones where he had found the letter, where even birds avoided singing. Mateus stayed there a full hour on a Sunday of weak wind. He heard no dramatic revelation. He did, however, hear his own name spoken without voice — not as a call, but as a reminder that someone, at some time, had needed him without knowing how to ask.`),
    p(`Dona Odete said later that Inácio had not died of illness, but of exhaustion from listening. 'The sea asked too much on a moonlit night,' she said. 'He answered until the end and no body was left.' Mateus understood that keeper, in that cove, was an office of witness — and witness does not interrupt.`),
    p(`When occasional tourists climbed the hill demanding photos with the light on, Mateus lit it without arguing. But at night, alone, he turned it off for an hour and noted in the diary what the dark returned: smells, fears, postponed promises. The archive of silences grew until it became the tower's second heart.`),
    p(`Beatriz, a teenager, asked if she could publish her drawings of silence tides at a school fair. Mateus hesitated, then agreed on one condition: no drawing could have a caption. 'Whoever needs to will recognize it,' he said. At the fair, three adults cried before untitled spirals. No one could explain why.`),
    p(`In the last storm of his life, Mateus turned off the lighthouse before the wind arrived — not from failure, but obedience to a silence that preceded the noise. The whole village slept while the sky cracked. At dawn, they found the tower intact and the sea calm as glass. 'He listened for us,' said Dona Odete. Mateus did not deny it.`),
    p(`When he handed the keys to Beatriz, already weary in body, he left only one instruction: 'Light when guiding. Turn off when listening.' She took the post with the same light gravity as Mateus's grandfather. The lighthouse kept blinking — but the cove knew light was only half the office.`),
  ],
  [
    p(`Inácio había dejado, en la última página del diario, un mapa de la ensenada dibujado con tinta de carta náutica. No marcaba profundidades ni arrecifes — solo puntos donde el silencio solía ser más espeso. Mateus empezó a caminar esos tramos al amanecer, antes de subir a la torre, como quien visita parientes que no hablan, pero saludan.`),
    p(`Había un punto, cerca de las piedras donde encontró la carta, en el que hasta los pájaros evitaban cantar. Mateus permaneció allí una hora entera un domingo de viento débil. No oyó revelación dramática. Oyó, sin embargo, su propio nombre dicho sin voz — no como llamado, sino como recuerdo de que alguien, en algún tiempo, lo había necesitado sin saber pedir.`),
    p(`Doña Odete contó, más tarde, que Inácio no murió de enfermedad, sino de agotamiento de escucha. 'El mar pidió demasiado en una noche de luna', dijo. 'Él respondió hasta el final y no quedó cuerpo.' Mateus comprendió que farero, en aquella ensenada, era oficio de testigo — y el testigo no interrumpe.`),
    p(`Cuando turistas ocasionales subían la colina exigiendo foto con luz encendida, Mateus la encendía sin discutir. Pero de noche, solo, la apagaba una hora y anotaba en el diario lo que la oscuridad devolvía: olores, miedos, promesas aplazadas. El archivo de silencios creció hasta volverse segundo corazón de la torre.`),
    p(`Beatriz, adolescente, preguntó si podía publicar sus dibujos de mareas de silencio en una feria escolar. Mateus dudó, luego aceptó con una condición: ningún dibujo podía tener leyenda. 'Quien lo necesite, lo reconocerá', dijo. En la feria, tres adultos lloraron ante espirales sin título. Nadie supo explicar por qué.`),
    p(`En la última tormenta de su vida, Mateus apagó el faro antes de que llegara el viento — no por falla, sino por obediencia a un silencio que precedía al ruido. Todo el pueblo durmió mientras el cielo se resquebrajaba. Al amanecer, encontraron la torre intacta y el mar calmo como vidrio. 'Él escuchó por nosotros', dijo Doña Odete. Mateus no lo negó.`),
    p(`Cuando entregó las llaves a Beatriz, ya con el cuerpo cansado, dejó solo una instrucción: 'Enciende cuando orientes. Apaga cuando escuches.' Ella asumió el puesto con la misma gravedad leve del abuelo de Mateus. El faro siguió parpadeando — pero la ensenada sabía que la luz era solo la mitad del oficio.`),
  ],
);

const storiesOriginal1to9 = [story1, ...stories2to5, ...stories6to9];

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

const content = `export const storiesOriginal1to9 = [\n${storiesOriginal1to9.map((s) => formatStory(s)).join("\n")}];\n`;

writeFileSync(OUT, content, "utf8");
console.log(`Wrote ${storiesOriginal1to9.length} stories to ${OUT}`);

// Dynamic import after write (static import would hoist before writeFileSync)
await import("./_expand-original-1-9.mjs");

// Validate char counts
const MIN = 9500;
for (const s of storiesOriginal1to9) {
  for (const [key, lang] of [
    ["bodyPt", "pt"],
    ["bodyEn", "en"],
    ["bodyEs", "es"],
  ]) {
    const bodyChars = s[key].join("").length;
    const suppChars = s[`supplement${lang === "pt" ? "Pt" : lang === "en" ? "En" : "Es"}`].join("").length;
    const total = bodyChars + suppChars;
    const flag = bodyChars < 7000 ? " (body < 7000)" : "";
    console.log(`  ${s.meta.slug} [${lang}]: body=${bodyChars}, supp=${suppChars}, total=${total}${flag}`);
    if (total < MIN - 500) console.warn(`    WARNING: may need more content for MIN_CHARS=${MIN}`);
  }
}
