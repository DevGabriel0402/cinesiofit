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
      { name: 'Crucifixo', gif: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Pec-Deck-Fly.gif', isRealGif: true },
      { name: 'Crossover', gif: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/High-Cable-Crossover.gif', isRealGif: true }
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
      { name: 'Barra Fixa', gif: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Pull-up.gif', isRealGif: true }
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
      { name: 'Remada Alta', gif: 'https://www.hipertrofia.org/blog/wp-content/uploads/2022/11/barbell-uprightrow.gif', isRealGif: true }
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
      { name: 'Levantamento Terra', gif: 'https://www.hipertrofia.org/blog/wp-content/uploads/2024/09/smith-deadlift.gif', isRealGif: true }
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
      { name: 'Rotação Russa', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2023/07/46461301-abdominal-obliquo-rotacao-russa-de-quadri.gif', isRealGif: true }
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
      { name: 'Elevação Frontal', gif: 'https://www.hipertrofia.org/blog/wp-content/uploads/2018/09/elevacao-frontal-com-anilha-v2.gif', isRealGif: true }
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
      { name: 'Rosca Martelo', gif: 'https://media.tenor.com/8T_oLOn1XJwAAAAM/rosca-alternada-com-halteres.gif', isRealGif: true }
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
      { name: 'Tríceps Pulley', gif: 'https://media.tenor.com/mbebKudZjxYAAAAM/tr%C3%ADceps-pulley.gif', isRealGif: true },
      { name: 'Tríceps Testa', gif: 'https://treinoemalta.com.br/wp-content/uploads/2023/07/Triceps-testa-na-Polia.gif', isRealGif: true },
      { name: 'Tríceps Francês', gif: 'https://www.hipertrofia.org/blog/wp-content/uploads/2025/01/triceps-frances-com-um-halter-sentado.gif', isRealGif: true }
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
      { name: 'Leg Press 45º', gif: 'https://image.tuasaude.com/media/article/nb/le/leg-press_75589.gif?width=686&height=487', isRealGif: true }
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
      { name: 'Cadeira Flexora', gif: 'https://www.hipertrofia.org/blog/wp-content/uploads/2024/12/cadeira-flexora.gif', isRealGif: true }
    ]
  },
  {
    id: 'gluteos',
    name: 'Glúteos',
    region: 'Membros Inferiores e Pelve',
    image: gluteosImg,
    composition: 'Divididos em glúteo máximo (maior e superficial), glúteo médio e glúteo mínimo.',
    action: 'Extensão, abdução e rotação do quadril.',
    plane: 'Sagital, Frontal e Transversal',
    exercises: [
      { name: 'Elevação Pélvica', gif: 'https://placehold.co/400x300/fef2f2/dc2626?text=Elevação+Pélvica' },
      { name: 'Glúteo na Polia', gif: 'https://placehold.co/400x300/fef2f2/dc2626?text=Glúteo+na+Polia' }
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
      { name: 'Flexão Plantar em Pé', gif: 'https://www.hipertrofia.org/blog/wp-content/uploads/2023/03/lever-standing-calf-raise.gif', isRealGif: true },
      { name: 'Gêmeos Sentado', gif: 'https://www.hipertrofia.org/blog/wp-content/uploads/2018/10/lever-seated-calf-raise-.gif', isRealGif: true }
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
