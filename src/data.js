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
      { name: 'Supino Reto', gif: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Bench-Press.gif', isRealGif: true, plane: 'Transversal', movements: ['Adução Horizontal de Ombro', 'Extensão de Cotovelo'] },
      { name: 'Supino Inclinado', gif: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Barbell-Bench-Press.gif', isRealGif: true, plane: 'Transversal', movements: ['Adução Horizontal de Ombro', 'Extensão de Cotovelo'] },
      { name: 'Crucifixo', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2019/11/03081301-crucifixo-com-halteres.gif', isRealGif: true, plane: 'Transversal', movements: ['Adução Horizontal de Ombro'] },
      { name: 'Crossover', gif: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/High-Cable-Crossover.gif', isRealGif: true, plane: 'Transversal', movements: ['Adução Horizontal de Ombro'] },
      { name: 'Flexão de Braço', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/flexao-de-bracos.gif', isRealGif: true, plane: 'Transversal', movements: ['Adução Horizontal de Ombro', 'Extensão de Cotovelo'] },
      { name: 'Voador (Peck Deck)', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/voador-no-aparelho.gif', isRealGif: true, plane: 'Transversal', movements: ['Adução Horizontal de Ombro'] },
      { name: 'Supino Inclinado (Halteres)', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/supino-inclinado-com-halteres.gif', isRealGif: true, plane: 'Transversal', movements: ['Adução Horizontal de Ombro', 'Extensão de Cotovelo'] },
      { name: 'Peck Deck (Voador)', gif: 'https://i.pinimg.com/originals/6d/99/ed/6d99ed8341629f7fc40eb361725d65dd.gif', isRealGif: true, plane: 'Transversal', movements: ['Adução Horizontal de Ombro'] },
      { name: 'Crucifixo Inclinado', gif: 'https://www.hipertrofia.org/blog/wp-content/uploads/2020/06/dumbbell-incline-fly.gif', isRealGif: true, plane: 'Transversal', movements: ['Adução Horizontal de Ombro'] },
      { name: 'Supino Declinado', gif: 'https://www.hipertrofia.org/blog/wp-content/uploads/2018/09/barbell-decline-bench-press.gif', isRealGif: true, plane: 'Transversal', movements: ['Adução Horizontal de Ombro', 'Extensão de Cotovelo'] }
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
      { name: 'Puxada na Polia', gif: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Lat-Pulldown.gif', isRealGif: true, plane: 'Frontal', movements: ['Adução de Ombro', 'Flexão de Cotovelo', 'Depressão Escapular'] },
      { name: 'Remada Curvada', gif: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Bent-Over-Row.gif', isRealGif: true, plane: 'Sagital', movements: ['Extensão de Ombro', 'Flexão de Cotovelo', 'Retração Escapular'] },
      { name: 'Barra Fixa', gif: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Pull-up.gif', isRealGif: true, plane: 'Frontal', movements: ['Adução de Ombro', 'Flexão de Cotovelo'] },
      { name: 'Remada Baixa', gif: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Cable-Row.gif', isRealGif: true, plane: 'Sagital', movements: ['Extensão de Ombro', 'Flexão de Cotovelo', 'Retração Escapular'] },
      { name: 'Pull-down', gif: 'https://www.hipertrofia.org/blog/wp-content/uploads/2024/09/pulldown-corda.gif', isRealGif: true, plane: 'Sagital', movements: ['Extensão de Ombro'] },
      { name: 'Remada Unilateral', gif: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Row.gif', isRealGif: true, plane: 'Sagital', movements: ['Extensão de Ombro', 'Flexão de Cotovelo'] },
      { name: 'Remada Baixa (Mundo)', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/09/remada-sentado-com-cabos-e-triangulo-para-costas.gif', isRealGif: true, plane: 'Sagital', movements: ['Extensão de Ombro', 'Flexão de Cotovelo'] },
      { name: 'Remada Cavalinho', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/costas-remada-em-pe-com-barra-T.gif', isRealGif: true, plane: 'Sagital', movements: ['Extensão de Ombro', 'Flexão de Cotovelo'] },
      { name: 'Remada Unilateral (Serrote)', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/costas-remada-unilateral-com-halter-serrote-no-banco.gif', isRealGif: true, plane: 'Sagital', movements: ['Extensão de Ombro', 'Flexão de Cotovelo'] },
      { name: 'Pullover com Halter', gif: 'https://www.hipertrofia.org/blog/wp-content/uploads/2018/10/pullover-com-halteres-no-banco-horizontal.gif', isRealGif: true, plane: 'Sagital', movements: ['Extensão de Ombro'] },
      { name: 'Barra Fixa Supinada', gif: 'https://www.hipertrofia.org/blog/wp-content/uploads/2023/10/band-assisted-pullup.gif', isRealGif: true, plane: 'Sagital', movements: ['Flexão de Cotovelo', 'Extensão de Ombro'] },

      { name: 'Puxada Braços Estendidos', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/puxada-com-bracos-estendidos.gif', isRealGif: true, plane: 'Sagital', movements: ['Extensão de Ombro'] },
      { name: 'Puxada Triângulo', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/puxada-pulley-triangulo.gif', isRealGif: true, plane: 'Sagital', movements: ['Extensão de Ombro', 'Flexão de Cotovelo'] }
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
      { name: 'Encolhimento', gif: 'https://fitnessprogramer.com/wp-content/uploads/2021/04/Dumbbell-Shrug.gif', isRealGif: true, plane: 'Frontal', movements: ['Elevação de Escápula'] },
      { name: 'Remada Alta', gif: 'https://www.hipertrofia.org/blog/wp-content/uploads/2022/11/barbell-uprightrow.gif', isRealGif: true, plane: 'Frontal', movements: ['Abdução de Ombro', 'Flexão de Cotovelo', 'Elevação de Escápula'] },
      { name: 'Encolhimento com Barra', gif: 'https://www.hipertrofia.org/blog/wp-content/uploads/2018/03/encolhimento-com-barra.gif', isRealGif: true, plane: 'Frontal', movements: ['Elevação de Escápula'] },
      { name: 'Encolhimento na Polia', gif: 'https://treinoemalta.com.br/wp-content/uploads/2023/07/Encolhimento-de-Ombros-na-Polia-Baixa.gif', isRealGif: true, plane: 'Frontal', movements: ['Elevação de Escápula'] },
      { name: 'Face Pull', gif: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Face-Pull.gif', isRealGif: true, plane: 'Transversal', movements: ['Abdução Horizontal de Ombro', 'Rotação Externa de Ombro'] },
      { name: 'Crucifixo Inverso (Halter)', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/ombros-crucifixo-invertido-com-halteres.gif', isRealGif: true, plane: 'Transversal', movements: ['Abdução Horizontal de Ombro'] },
      { name: 'Encolhimento (Halter)', gif: 'https://www.hipertrofia.org/blog/wp-content/uploads/2024/01/dumbbell-shrug.gif', isRealGif: true, plane: 'Frontal', movements: ['Elevação de Escápula'] },
      { name: 'Crucifixo Inverso', gif: 'https://i0.wp.com/omelhortreino.com.br/wp-content/uploads/2025/06/Voador-invertido.gif?resize=550%2C550&ssl=1', isRealGif: true, plane: 'Transversal', movements: ['Abdução Horizontal de Ombro'] },
      { name: 'Remada Alta (Cabo)', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/ombros-remada-alta-no-cabo.gif', isRealGif: true, plane: 'Frontal', movements: ['Elevação de Escápula', 'Abdução de Ombro'] },
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
      { name: 'Banco Romano', gif: 'https://i0.wp.com/omelhortreino.com.br/wp-content/uploads/2025/07/Extensao-Lombar-com-Peso.gif?resize=550%2C550&ssl=1', isRealGif: true, plane: 'Sagital', movements: ['Extensão de Tronco', 'Extensão de Quadril'] },
      { name: 'Levantamento Terra', gif: 'https://www.hipertrofia.org/blog/wp-content/uploads/2024/09/smith-deadlift.gif', isRealGif: true, plane: 'Sagital', movements: ['Extensão de Quadril', 'Extensão de Joelho', 'Estabilização de Tronco (Isometria)'] },
      { name: 'Extensão Lombar Solo', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/extensao-lombar-de-brucos.gif', isRealGif: true, plane: 'Sagital', movements: ['Extensão de Tronco'] }
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
      { name: 'Abdominal Supra', gif: 'https://www.hipertrofia.org/blog/wp-content/uploads/2017/09/abdominal-reto.gif', isRealGif: true, plane: 'Sagital', movements: ['Flexão de Tronco'] },
      { name: 'Prancha Isométrica', gif: 'https://i.pinimg.com/736x/b5/14/49/b51449a70b867a88c43146f85f34a224.jpg', isRealGif: true, plane: 'Sagital', movements: ['Anti-extensão (Isometria)'] },
      { name: 'Abdominal Bicicleta', gif: 'https://www.hipertrofia.org/blog/wp-content/uploads/2024/08/abdominal-bicicleta.gif', isRealGif: true, plane: 'Transversal', movements: ['Flexão e Rotação'] },
      { name: 'Abdominal Infra', gif: 'https://www.hipertrofia.org/blog/wp-content/uploads/2024/12/abdominal-infra-solo2.gif', isRealGif: true, plane: 'Sagital', movements: ['Flexão de Quadril'] },
      { name: 'Rolo Abdominal', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/03/abdominal-com-rolo-no-chao.gif', isRealGif: true, plane: 'Sagital', movements: ['Anti-extensão'] },
      { name: 'Prancha Lateral', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/prancha-lateral.gif', isRealGif: true, plane: 'Frontal', movements: ['Isometria Lateral'] },

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
      { name: 'Desenvolvimento Halter', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/desenvolvimento-para-ombros-com-halteres.gif', isRealGif: true, plane: 'Frontal', movements: ['Abdução de Ombro'] },
      { name: 'Elevação Lateral', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/ombros-elevacao-lateral-de-ombros-com-halteres.gif', isRealGif: true, plane: 'Frontal', movements: ['Abdução de Ombro'] },
      { name: 'Elevação Frontal', gif: 'https://image.tuasaude.com/media/article/sz/nf/elevacao-frontal_75624.gif?width=686&height=487', isRealGif: true, plane: 'Sagital', movements: ['Flexão de Ombro'] },
    ]
  },
  // Bíceps
  {
    id: 'biceps_braquial',
    name: 'Bíceps',
    region: 'Braços',
    image: bicepsBraquialImg,
    composition: 'Bíceps braquial e braquial.',
    action: 'Flexão do cotovelo.',
    plane: 'Sagital',
    exercises: [
      { name: 'Rosca Direta', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2022/09/rosca-biceps-direta-com-halteres.gif', isRealGif: true, plane: 'Sagital', movements: ['Flexão de Cotovelo'] },
      { name: 'Rosca Martelo', gif: 'https://www.hipertrofia.org/blog/wp-content/uploads/2023/04/dumbbell-hammer-curl-v-2.gif', isRealGif: true, plane: 'Sagital', movements: ['Flexão de Cotovelo'] },
      { name: 'Rosca Scott', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/11/Rosca-Scott-com-halteres-unilateral.gif', isRealGif: true, plane: 'Sagital', movements: ['Flexão de Cotovelo'] },
    ]
  },
  // Tríceps
  {
    id: 'triceps_braquial',
    name: 'Tríceps',
    region: 'Braços',
    image: tricepsBraquialImg,
    composition: 'Tríceps braquial (3 cabeças).',
    action: 'Extensão do cotovelo.',
    plane: 'Sagital',
    exercises: [
      { name: 'Tríceps Francês', gif: 'https://www.hipertrofia.org/blog/wp-content/uploads/2025/01/triceps-frances-com-um-halter-sentado.gif', isRealGif: true, plane: 'Sagital', movements: ['Extensão de Cotovelo'] },
      { name: 'Tríceps Coice', gif: 'https://karoldeliberato.com.br/wp-content/uploads/2023/05/image68.gif', isRealGif: true, plane: 'Sagital', movements: ['Extensão de Cotovelo'] },
      { name: 'Tríceps Supinado', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2022/01/00301301-supino-com-pegada-fechada.gif', isRealGif: true, plane: 'Sagital', movements: ['Extensão de Cotovelo'] }
    ]
  },
  // Quadriceps e Adutores
  {
    id: 'quadriceps',
    name: 'Quadríceps e Adutores',
    region: 'Pernas',
    image: quadricepsImg,
    composition: 'Quadríceps (reto femoral, vastos) e Adutores (curto, longo, magno).',
    action: 'Extensão de joelho e Adução de quadril.',
    plane: 'Sagital e Frontal',
    exercises: [
      { name: 'Agachamento Sumô', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/09/agachamento-sumo-com-halter.gif', isRealGif: true, plane: 'Sagital', movements: ['Adução e Extensão'] },
      { name: 'Cadeira Adutora', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/pernas-aducao-de-pernas-na-maquina.gif', isRealGif: true, plane: 'Frontal', movements: ['Adução de Quadril'] },
      { name: 'Agachamento Búlgaro', gif: 'https://www.hipertrofia.org/blog/wp-content/uploads/2024/06/agachamento-bulgaro.gif', isRealGif: true, plane: 'Sagital', movements: ['Extensão de Joelho'] },
      { name: 'Hack Machine', gif: 'https://i.pinimg.com/originals/a5/10/b7/a510b75341f3c63e528111c112f19817.gif', isRealGif: true, plane: 'Sagital', movements: ['Extensão de Joelho'] },
      { name: 'Agachamento Smith', gif: 'https://www.hipertrofia.org/blog/wp-content/uploads/2017/11/smith-full-squat.gif', isRealGif: true, plane: 'Sagital', movements: ['Extensão de Joelho'] },
      { name: 'Avanço Halteres', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/11/avanco-com-halteras.gif', isRealGif: true, plane: 'Sagital', movements: ['Extensão de Joelho'] },
      { name: 'Leg Press 45°', gif: 'https://fitnessprogramer.com/wp-content/uploads/2015/11/Leg-Press.gif', isRealGif: true, plane: 'Sagital', movements: ['Extensão de Joelho'] },
    ]
  },
  // Isquiotibiais
  {
    id: 'isquiotibiais',
    name: 'Isquiotibiais',
    region: 'Pernas',
    image: isquiotibiaisImg,
    composition: 'Bíceps femoral, semitendinoso e semimembranoso.',
    action: 'Flexão de joelho e extensão de quadril.',
    plane: 'Sagital',
    exercises: [
      { name: 'Stiff', gif: 'https://i.pinimg.com/originals/82/4d/fd/824dfd405284597cd20e8a55233e2d77.gif', isRealGif: true, plane: 'Sagital', movements: ['Extensão de Quadril'] },
      { name: 'Cadeira Flexora', gif: 'https://www.hipertrofia.org/blog/wp-content/uploads/2024/12/cadeira-flexora.gif', isRealGif: true, plane: 'Sagital', movements: ['Flexão de Joelho'] },
      { name: 'Mesa Flexora', gif: 'https://media.tenor.com/fj_cZPprAyMAAAAM/gym.gif', isRealGif: true, plane: 'Sagital', movements: ['Flexão de Joelho'] }
    ]
  },
  // Glúteos
  {
    id: 'gluteos',
    name: 'Glúteos',
    region: 'Pelve',
    image: gluteosImg,
    composition: 'Glúteo máximo, médio e mínimo.',
    action: 'Extensão e Abdução de quadril.',
    plane: 'Múltiplos',
    exercises: [
      { name: 'Elevação Pélvica', gif: 'https://treinoemalta.com.br/wp-content/uploads/2023/07/Elevacao-Pelvica.gif', isRealGif: true, plane: 'Sagital', movements: ['Extensão de Quadril'] },
      { name: 'Glúteo 4 Apoios', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/09/quatro-apoios-com-elevacao-da-perna.gif', isRealGif: true, plane: 'Sagital', movements: ['Extensão de Quadril'] },
      { name: 'Coice no Cabo', gif: 'https://karoldeliberato.com.br/wp-content/uploads/2023/04/image32-1.gif', isRealGif: true, plane: 'Sagital', movements: ['Extensão de Quadril'] },
    ]
  },
  // Panturrilhas
  {
    id: 'panturrilhas',
    name: 'Panturrilhas',
    region: 'Pernas',
    image: panturrilhasImg,
    composition: 'Gastrocnêmio e sóleo.',
    action: 'Flexão plantar.',
    plane: 'Sagital',
    exercises: [
      { name: 'Panturrilha em Pé', gif: 'https://www.hipertrofia.org/blog/wp-content/uploads/2023/03/elevacao-de-panturrilhas-com-o-peso-do-corpo.gif', isRealGif: true, plane: 'Sagital', movements: ['Flexão Plantar'] },
      { name: 'Panturrilha Sentado', gif: 'https://www.hipertrofia.org/blog/wp-content/uploads/2018/10/lever-seated-calf-raise-.gif', isRealGif: true, plane: 'Sagital', movements: ['Flexão Plantar'] },
      { name: 'Panturrilha Leg Press', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/03/Panturrilha-no-leg-press.gif', isRealGif: true, plane: 'Sagital', movements: ['Flexão Plantar'] },
    ]
  },
  // Alongamentos
  {
    id: 'alongamentos',
    name: 'Alongamentos',
    region: 'Mobilidade',
    image: null,
    composition: 'Fibras musculares e tecido conjuntivo em estiramento.',
    action: 'Aumento da flexibilidade.',
    plane: 'Múltiplos',
    exercises: [
      { name: 'Alongamento Isquiotibiais', gif: 'https://api.smartworkout.app/asset/image/19a0f2b7-f61f-488d-ac28-89bc9b94d192', isRealGif: true, plane: 'Sagital', movements: ['Estiramento Posterior'] },
      { name: 'Postura da Criança', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/postura-da-crianca.gif', isRealGif: true, plane: 'Sagital', movements: ['Estiramento Lombar'] },
      { name: 'Alongamento Peitoral', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/alongamento-peitoral-parede.gif', isRealGif: true, plane: 'Frontal', movements: ['Estiramento Peitoral'] }
    ]
  },
  // Cardio e HIIT
  {
    id: 'cardio',
    name: 'Cardio e HIIT',
    region: 'Corpo Inteiro',
    image: null,
    composition: 'Sistema cardiovascular e musculoesquelético.',
    action: 'Alta intensidade e queima calórica.',
    plane: 'Múltiplos',
    exercises: [
      { name: 'Polichinelo', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/polichinelo.gif', isRealGif: true, plane: 'Frontal', movements: ['Salto'] },
      { name: 'Burpee', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/burpee.gif', isRealGif: true, plane: 'Sagital', movements: ['Composto'] },
      { name: 'Mountain Climber', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/escalador-mountain-climber.gif', isRealGif: true, plane: 'Sagital', movements: ['Flexão de Quadril'] },
      { name: 'Corrida no Lugar', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/corrida-estacionaria-joelhos-altos.gif', isRealGif: true, plane: 'Sagital', movements: ['Corrida'] },
      { name: 'Pular Corda', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/pular-corda.gif', isRealGif: true, plane: 'Sagital', movements: ['Salto'] },
      { name: 'Salto em Caixa', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/salto-na-caixa.gif', isRealGif: true, plane: 'Sagital', movements: ['Salto'] },
      { name: 'Sprint', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/corrida-sprint.gif', isRealGif: true, plane: 'Sagital', movements: ['Corrida'] },
      { name: 'Jump Squat', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/agachamento-com-salto.gif', isRealGif: true, plane: 'Sagital', movements: ['Salto'] },
      { name: 'Skater Jumps', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/salto-lateral-skater-jump.gif', isRealGif: true, plane: 'Frontal', movements: ['Salto Lateral'] },
      { name: 'Polichinelo Cruzado', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/polichinelo-cruzado.gif', isRealGif: true, plane: 'Frontal', movements: ['Salto'] },
      { name: 'Step Up', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/subida-no-banco-step-up.gif', isRealGif: true, plane: 'Sagital', movements: ['Subida'] },
      { name: 'Prancha Jack', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/prancha-jack.gif', isRealGif: true, plane: 'Frontal', movements: ['Salto'] },
      { name: 'Calcanhar no Glúteo', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/corrida-estacionaria-calcanhar-no-gluteo.gif', isRealGif: true, plane: 'Sagital', movements: ['Corrida'] },
      { name: 'Polisapato', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/polisapato.gif', isRealGif: true, plane: 'Sagital', movements: ['Salto'] },
      { name: 'Agachamento Lateral Salto', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/agachamento-com-salto-lateral.gif', isRealGif: true, plane: 'Frontal', movements: ['Salto'] },
      { name: 'Shadow Boxing', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/shadow-boxing.gif', isRealGif: true, plane: 'Múltiplos', movements: ['Soco'] },
      { name: 'Pulo Corda Cruzado', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/pular-corda-cruzado.gif', isRealGif: true, plane: 'Sagital', movements: ['Salto'] },
      { name: 'Avanço com Salto', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/avanco-com-salto.gif', isRealGif: true, plane: 'Sagital', movements: ['Salto'] }
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
