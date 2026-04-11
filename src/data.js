import dorsaisImg from './assets/dorsais.png';
import peitoralImg from './assets/peitoral.png';
import trapezioImg from './assets/trapezio.png';
import eretoEspinhaImg from './assets/ereto_espinha.png';
import abdomenImg from './assets/abdomen.png';
import deltoideImg from './assets/deltoide.png';
import bicepsBraquialImg from './assets/biceps_braquial.png';
import tricepsBraquialImg from './assets/triceps_braquial.png';
import quadricepsImg from './assets/quadriceps.png';
import isquiotibiaisImg from './assets/isquiotibiais.png';
import gluteosImg from './assets/gluteos.png';
import panturrilhasImg from './assets/panturrilhas.png';

export const MUSCLES = [
  // Peitoral
  {
    id: 'peitoral',
    name: 'Peitoral',
    region: 'Tronco (Peito)',
    image: peitoralImg,
    composition: 'Peitoral maior (cobre a maior parte do peito) e peitoral menor (fica sob o maior).',
    action: 'Flexão horizontal, adução e rotação medial do braço.',
    plane: 'Transversal e Frontal',
    exercises: [
      { name: 'Supino Reto', gif: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Bench-Press.gif', isRealGif: true },
      { name: 'Supino Inclinado', gif: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Barbell-Bench-Press.gif', isRealGif: true },
      { name: 'Crucifixo', gif: 'https://www.hipertrofia.org/blog/wp-content/uploads/2020/06/dumbbell-incline-fly.gif', isRealGif: true },
      { name: 'Crossover', gif: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/High-Cable-Crossover.gif', isRealGif: true },
      { name: 'Flexão de Braço', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/flexao-de-bracos.gif', isRealGif: true },
      { name: 'Voador (Peck Deck)', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/voador-no-aparelho.gif', isRealGif: true }
    ]
  },
  // Dorsais
  {
    id: 'dorsais',
    name: 'Dorsais (Costas)',
    region: 'Tronco (Costas)',
    image: dorsaisImg,
    composition: 'Latíssimo do dorso (a popular "asa"), trapézio e romboides (maior e menor).',
    action: 'Extensão, adução e rotação medial do braço. Retração e depressão das escápulas.',
    plane: 'Sagital e Frontal',
    exercises: [
      { name: 'Puxada na Polia', gif: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Lat-Pulldown.gif', isRealGif: true },
      { name: 'Remada Curvada', gif: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Bent-Over-Row.gif', isRealGif: true },
      { name: 'Barra Fixa', gif: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Pull-up.gif', isRealGif: true },
      { name: 'Remada Baixa', gif: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Cable-Row.gif', isRealGif: true },
      { name: 'Pull-down', gif: 'https://i0.wp.com/omelhortreino.com.br/wp-content/uploads/2025/06/Pulldown-inclinado-com-corda.gif?resize=550%2C550&ssl=1', isRealGif: true },
      { name: 'Remada Unilateral', gif: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Row.gif', isRealGif: true }
    ]
  },
  // Trapézios
  {
    id: 'trapezio',
    name: 'Trapézio',
    region: 'Tronco (Costas / Cervical)',
    image: trapezioImg,
    composition: 'Dividido em porção superior, média e inferior.',
    action: 'Elevação, retração (adução) e depressão das escápulas.',
    plane: 'Frontal',
    exercises: [
      { name: 'Encolhimento', gif: 'https://fitnessprogramer.com/wp-content/uploads/2021/04/Dumbbell-Shrug.gif', isRealGif: true },
      { name: 'Remada Alta', gif: 'https://www.hipertrofia.org/blog/wp-content/uploads/2022/11/barbell-uprightrow.gif', isRealGif: true },
      { name: 'Encolhimento com Barra', gif: 'https://www.hipertrofia.org/blog/wp-content/uploads/2018/03/encolhimento-com-barra.gif', isRealGif: true },
      { name: 'Encolhimento na Polia', gif: 'https://treinoemalta.com.br/wp-content/uploads/2023/07/Encolhimento-de-Ombros-na-Polia-Baixa.gif', isRealGif: true },
      { name: 'Face Pull', gif: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Face-Pull.gif', isRealGif: true },
      { name: 'Crucifixo Inverso', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/ombros-crucifixo-invertido-com-halteres.gif', isRealGif: true }
    ]
  },
  // Ereto Espinhal
  {
    id: 'ereto_espinha',
    name: 'Eretores da Espinha',
    region: 'Tronco (Lombar e coluna)',
    image: eretoEspinhaImg,
    composition: 'Conjunto de músculos profundos ao longo da coluna, incluindo o iliocostal, longuíssimo e espinal.',
    action: 'Extensão e estabilização da coluna vertebral.',
    plane: 'Sagital',
    exercises: [
      { name: 'Banco Romano', gif: 'https://i0.wp.com/omelhortreino.com.br/wp-content/uploads/2025/07/Extensao-Lombar-com-Peso.gif?resize=550%2C550&ssl=1', isRealGif: true },
      { name: 'Levantamento Terra', gif: 'https://www.hipertrofia.org/blog/wp-content/uploads/2024/09/smith-deadlift.gif', isRealGif: true },
      { name: 'Bom Dia (Good Morning)', gif: 'https://fitnessprogramer.com/wp-content/uploads/2023/10/Dumbbell-Good-Morning.gif', isRealGif: true },
      { name: 'Super-homem (Superman)', gif: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Superman.gif', isRealGif: true },
      { name: 'Extensão Lombar no Solo', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/extensao-lombar-de-brucos.gif', isRealGif: true },
      { name: 'Perdigueiro (Bird Dog)', gif: 'https://i0.wp.com/omelhortreino.com.br/wp-content/uploads/2025/07/Quadrupede-com-elevacao-de-braco-e-perna-contralateral.gif?resize=550%2C550&ssl=1', isRealGif: true }
    ]
  },
  // Abdômen
  {
    id: 'abdomen',
    name: 'Abdômen',
    region: 'Tronco (Core)',
    image: abdomenImg,
    composition: 'Reto abdominal ("gominhos"), oblíquos externos, oblíquos internos e o transverso do abdômen (camada profunda/cinta natural).',
    action: 'Flexão, rotação e estabilização do tronco e pelve.',
    plane: 'Múltiplos Planos',
    exercises: [
      { name: 'Abdominal Supra', gif: 'https://www.hipertrofia.org/blog/wp-content/uploads/2017/09/abdominal-reto.gif', isRealGif: true },
      { name: 'Prancha Isométrica', gif: 'https://www.hipertrofia.org/blog/wp-content/uploads/2019/02/prancha-musculos-envolvidos.jpg', isRealGif: true },
      { name: 'Rotação Russa', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2023/07/46461301-abdominal-obliquo-rotacao-russa-de-quadri.gif', isRealGif: true },
      { name: 'Abdominal em V', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/abdominal-em-V-no-chao.gif', isRealGif: true },
      { name: 'Abdominal Bicicleta', gif: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Bicycle-Crunch.gif', isRealGif: true },
      { name: 'Abdominal Infra', gif: 'https://www.hipertrofia.org/blog/wp-content/uploads/2019/04/abdominal-invertido-com-pernas-na-vertical.gif', isRealGif: true }
    ]
  },
  // Deltoides
  {
    id: 'deltoide',
    name: 'Deltoides',
    region: 'Braços e Ombros',
    image: deltoideImg,
    composition: 'Dividem-se em porção anterior, porção lateral (ou média) e porção posterior.',
    action: 'Anterior: Flexão. Médio: Abdução. Posterior: Extensão horizontal.',
    plane: 'Múltiplos Planos',
    exercises: [
      { name: 'Desenvolvimento', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/desenvolvimento-para-ombros-com-halteres.gif', isRealGif: true },
      { name: 'Elevação Lateral', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/ombros-elevacao-lateral-de-ombros-com-halteres.gif', isRealGif: true },
      { name: 'Elevação Frontal', gif: 'https://www.hipertrofia.org/blog/wp-content/uploads/2018/09/elevacao-frontal-com-anilha-v2.gif', isRealGif: true },
      { name: 'Desenvolvimento Arnold', gif: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Arnold-Press.gif', isRealGif: true },
      { name: 'Elevação Lateral na Polia', gif: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Lateral-Raise.gif', isRealGif: true },
      { name: 'Desenvolvimento com Barra', gif: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Shoulder-Press.gif', isRealGif: true }
    ]
  },
  // Bíceps
  {
    id: 'biceps_braquial',
    name: 'Bíceps e Flexores',
    region: 'Braços e Ombros',
    image: bicepsBraquialImg,
    composition: 'Bíceps braquial (cabeça longa e curta). Auxiliado pelo músculo braquial e braquiorradial.',
    action: 'Flexão do cotovelo e supinação do antebraço.',
    plane: 'Sagital e Transversal',
    exercises: [
      { name: 'Rosca Direta', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2022/09/rosca-biceps-direta-com-halteres.gif', isRealGif: true },
      { name: 'Rosca Scott', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/biceps-rosca-biceps-no-banco-scott-com-barra-W.gif', isRealGif: true },
      { name: 'Rosca Martelo', gif: 'https://media.tenor.com/8T_oLOn1XJwAAAAM/rosca-alternada-com-halteres.gif', isRealGif: true },
      { name: 'Rosca Concentrada', gif: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Concentration-Curl.gif', isRealGif: true },
      { name: 'Rosca Inversa', gif: 'https://i0.wp.com/omelhortreino.com.br/wp-content/uploads/2025/04/Rosca-Inversa.gif?resize=550%2C550&ssl=1', isRealGif: true },
      { name: 'Rosca na Polia', gif: 'https://www.hipertrofia.org/blog/wp-content/uploads/2019/04/rosca-direta-polia.gif', isRealGif: true }
    ]
  },
  // Tríceps
  {
    id: 'triceps_braquial',
    name: 'Tríceps',
    region: 'Braços e Ombros',
    image: tricepsBraquialImg,
    composition: 'Tríceps braquial (dividido em cabeça longa, cabeça lateral e cabeça medial).',
    action: 'Extensão do cotovelo. (Porção longa auxilia na extensão do ombro).',
    plane: 'Sagital',
    exercises: [
      { name: 'Tríceps Corda', gif: 'https://media.tenor.com/mbebKudZjxYAAAAM/tr%C3%ADceps-pulley.gif', isRealGif: true },
      { name: 'Tríceps Testa', gif: 'https://treinoemalta.com.br/wp-content/uploads/2023/07/Triceps-testa-na-Polia.gif', isRealGif: true },
      { name: 'Tríceps Francês', gif: 'https://www.hipertrofia.org/blog/wp-content/uploads/2025/01/triceps-frances-com-um-halter-sentado.gif', isRealGif: true },
      { name: 'Tríceps Pulley', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/07/triceps-puxada-no-pulley.gif', isRealGif: true },
      { name: 'Tríceps Coice', gif: 'https://karoldeliberato.com.br/wp-content/uploads/2023/05/image45.gif', isRealGif: true },
      { name: 'Mergulho no Banco', gif: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Bench-Dips.gif', isRealGif: true }
    ]
  },
  // Quadriceps
  {
    id: 'quadriceps',
    name: 'Quadríceps',
    region: 'Membros Inferiores (Anterior)',
    image: quadricepsImg,
    composition: 'Formado por quatro músculos: reto femoral, vasto lateral, vasto medial e vasto intermédio.',
    action: 'Extensão do joelho. (O reto femoral também faz flexão do quadril).',
    plane: 'Sagital',
    exercises: [
      { name: 'Agachamento Livre', gif: 'https://www.hipertrofia.org/blog/wp-content/uploads/2023/07/bodyweight-squat.gif', isRealGif: true },
      { name: 'Cadeira Extensora', gif: 'https://media.tenor.com/bqKtsSuqilQAAAAM/gym.gif', isRealGif: true },
      { name: 'Leg Press 45º', gif: 'https://image.tuasaude.com/media/article/nb/le/leg-press_75589.gif?width=686&height=487', isRealGif: true },
      { name: 'Agachamento Hack', gif: 'https://i.pinimg.com/originals/a5/10/b7/a510b75341f3c63e528111c112f19817.gif', isRealGif: true },
      { name: 'Passada (Avanço)', gif: 'https://www.hipertrofia.org/blog/wp-content/uploads/2023/07/walking-lunge.gif', isRealGif: true },
      { name: 'Agachamento Búlgaro', gif: 'https://www.hipertrofia.org/blog/wp-content/uploads/2024/06/agachamento-bulgaro.gif', isRealGif: true }
    ]
  },
  // Isquiotibiais
  {
    id: 'isquiotibiais',
    name: 'Isquiotibiais (Posterior)',
    region: 'Membros Inferiores',
    image: isquiotibiaisImg,
    composition: 'Compostos pelo bíceps femoral, semitendinoso e semimembranoso.',
    action: 'Flexão do joelho e extensão do quadril.',
    plane: 'Sagital',
    exercises: [
      { name: 'Mesa Flexora', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/pernas-flexao-de-pernas-na-maquina.gif', isRealGif: true },
      { name: 'Stiff', gif: 'https://i.pinimg.com/originals/82/4d/fd/824dfd405284597cd20e8a55233e2d77.gif', isRealGif: true },
      { name: 'Cadeira Flexora', gif: 'https://www.hipertrofia.org/blog/wp-content/uploads/2024/12/cadeira-flexora.gif', isRealGif: true },
      { name: 'Flexor em Pé', gif: 'https://i.pinimg.com/originals/d9/ea/db/d9eadb96317b4a64eafb32ab0980d560.gif', isRealGif: true },
      { name: 'Stiff Unilateral', gif: 'https://www.hipertrofia.org/blog/wp-content/uploads/2023/04/barbell-single-leg-deadlift.gif', isRealGif: true },
      { name: 'Bom Dia (Isquiotibiais)', gif: 'https://fitcron.com/wp-content/uploads/2021/04/00441301-Barbell-Good-Morning_Thighs_720.gif', isRealGif: true }
    ]
  },
  // Gluteos
  {
    id: 'gluteos',
    name: 'Glúteos',
    region: 'Membros Inferiores e Pelve',
    image: gluteosImg,
    composition: 'Divididos em glúteo máximo (maior e superficial), glúteo médio e glúteo mínimo.',
    action: 'Extensão, abdução e rotação do quadril.',
    plane: 'Sagital, Frontal e Transversal',
    exercises: [
      { name: 'Elevação Pélvica', gif: 'https://treinoemalta.com.br/wp-content/uploads/2023/07/Elevacao-Pelvica.gif', isRealGif: true },
      { name: 'Glúteo na Polia', gif: 'https://i0.wp.com/meutreinador.com/wp-content/uploads/2023/12/60_Gluteos-no-Cabo-Posicao-Curvada.gif?fit=1080%2C1080&ssl=1', isRealGif: true },
      { name: 'Agachamento Sumô', gif: 'https://i.pinimg.com/originals/2b/7d/97/2b7d9756a13784a67c2ece7d9980b6a9.gif', isRealGif: true },
      { name: 'Cadeira Abdutora', gif: 'https://i.pinimg.com/originals/4e/17/b8/4e17b88b6b11c54155939c0a5b3c3381.gif', isRealGif: true },
      { name: 'Glúteo 4 Apoios', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/09/quatro-apoios-com-elevacao-da-perna.gif', isRealGif: true },
      { name: 'Afundo', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/pernas-afundo-tradicional-sem-pesos-1.gif', isRealGif: true }
    ]
  },
  // Panturrilhas
  {
    id: 'panturrilhas',
    name: 'Tríceps Sural (Panturrilha)',
    region: 'Membros Inferiores (Perna)',
    image: panturrilhasImg,
    composition: 'Composto pelo gastrocnêmio (cabeça medial e lateral) e o sóleo (músculo mais profundo).',
    action: 'Flexão plantar do tornozelo. (Gastrocnêmio auxilia na flexão do joelho).',
    plane: 'Sagital',
    exercises: [
      { name: 'Gêmeos em Pé (Maquina)', gif: 'https://www.hipertrofia.org/blog/wp-content/uploads/2023/03/lever-standing-calf-raise.gif', isRealGif: true },
      { name: 'Gêmeos Sentado', gif: 'https://www.hipertrofia.org/blog/wp-content/uploads/2018/10/lever-seated-calf-raise-.gif', isRealGif: true },
      { name: 'Flexão Plantar no Leg Press', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/03/Panturrilha-no-leg-press.gif', isRealGif: true },
      { name: 'Flexão Plantar Unilateral', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/03/Elevacao-de-panturrilha-com-carga-em-uma-perna.gif', isRealGif: true },
      { name: 'Flexão Plantar em Pé', gif: 'https://www.hipertrofia.org/blog/wp-content/uploads/2023/03/elevacao-de-panturrilhas-com-o-peso-do-corpo.gif', isRealGif: true },
      { name: 'Flexão Plantar no Degrau', gif: 'https://www.hipertrofia.org/blog/wp-content/uploads/2023/07/standing-calf-raise-on-a-staircase.gif', isRealGif: true }
    ]
  }
];

export const PLANES = [
  {
    id: 'sagital',
    name: 'Plano Sagital',
    axis: 'Eixo Látero-lateral (Transversal)',
    division: 'Divide o corpo em metades Direita e Esquerda.',
    movements: ['Flexão', 'Extensão'],
    description: 'Movimentos que vão para frente ou para trás.',
    examples: ['Agachamento', 'Rosca Direta', 'Corrida']
  },
  {
    id: 'frontal',
    name: 'Plano Frontal (Coronal)',
    axis: 'Eixo Ântero-posterior',
    division: 'Divide o corpo em metades Anterior (frente) e Posterior (costas).',
    movements: ['Abdução', 'Adução', 'Flexão Lateral'],
    description: 'Movimentos que se afastam ou se aproximam da linha média do corpo (movimentos laterais).',
    examples: ['Elevação Lateral', 'Cadeira Abdutora', 'Polichinelo']
  },
  {
    id: 'transversal',
    name: 'Plano Transversal',
    axis: 'Eixo Longitudinal (Vertical)',
    division: 'Divide o corpo em partes Superior e Inferior.',
    movements: ['Rotação Interna/Medial', 'Rotação Externa/Lateral', 'Pronação', 'Supinação'],
    description: 'Movimentos de rotação em torno do próprio eixo.',
    examples: ['Crucifixo (Adução Horizontal)', 'Rotação de tronco', 'Manguito rotador externo']
  }
];

export const MOVEMENTS = [
  { name: 'Flexão', desc: 'Diminuição do ângulo entre dois ossos.', plane: 'Sagital' },
  { name: 'Extensão', desc: 'Aumento do ângulo entre dois ossos.', plane: 'Sagital' },
  { name: 'Abdução', desc: 'Afastamento de um membro da linha média do corpo.', plane: 'Frontal' },
  { name: 'Adução', desc: 'Aproximação de um membro em direção à linha média do corpo.', plane: 'Frontal' },
  { name: 'Rotação Interna', desc: 'Giro do osso em direção à linha média do corpo.', plane: 'Transversal' },
  { name: 'Rotação Externa', desc: 'Giro do osso para longe da linha média do corpo.', plane: 'Transversal' },
  { name: 'Dorsiflexão', desc: 'Movimento do tornozelo apontando os dedos do pé para cima.', plane: 'Sagital' },
  { name: 'Flexão Plantar', desc: 'Movimento do tornozelo apontando os dedos do pé para baixo.', plane: 'Sagital' }
];
