/**
 * Dados Oficiais da Validação da Pulseira Verde
 * Trilha de Aprendizagem e Validação Prática — Metodologia Power (Uni Power / Pratique Fitness)
 */

export const PULSEIRA_VERDE_INFO = {
  title: 'Pulseira Verde',
  subtitle: 'Validação Prática & Fundamentos Cinesiológicos',
  badge: 'Nível Básico UniPower',
  description: 'Domínio dos planos anatômicos, movimentos articulares fundamentais, bioenergética, métodos de atendimento Pratique e os 10 exercícios essenciais de validação.',
  color: '#10b981',
  darkColor: '#047857'
};

export const EXERCICIOS_PULSEIRA_VERDE = [
  {
    id: 1,
    nome: 'Supino Reto Vertical (Máquina)',
    plano: 'Transversal (Horizontal)',
    movimento: 'Adução Horizontal de Ombros e Extensão de Cotovelos',
    grupoMuscular: 'Peitoral Maior, Deltoide Anterior e Tríceps Braquial',
    substituicao: 'Flexão de Braço (Solo) ou Supino com Halteres',
    dicaPAC: 'Manter escápulas aduzidas e deprimidas contra o encosto durante todo o movimento. Não hiperestender os cotovelos no final da concêntrica.',
    faseConcentrica: 'Empurrar as manoplas à frente expirando o ar.',
    faseExcentrica: 'Retornar controlando a carga inspirando até o alinhamento do peitoral.'
  },
  {
    id: 2,
    nome: 'Desenvolvimento com Halteres',
    plano: 'Frontal',
    movimento: 'Abdução de Ombros e Extensão de Cotovelos',
    grupoMuscular: 'Deltoide (porções Anterior e Medial) e Tríceps Braquial',
    substituicao: 'Remada Alta com Halteres ou Desenvolvimento na Máquina Guiada',
    dicaPAC: 'Coluna alinhada ao encosto, sem compensar hiperlordose lombar. Manter cotovelos ligeiramente à frente da linha coronal para poupar o manguito.',
    faseConcentrica: 'Empurrar os halteres verticalmente acima da cabeça.',
    faseExcentrica: 'Descer os halteres até aproximadamente a linha das orelhas (~90°).'
  },
  {
    id: 3,
    nome: 'Pulley Frontal Pronada Aberta (Puxada Alta)',
    plano: 'Frontal',
    movimento: 'Adução de Ombros e Flexão de Cotovelos (com Depressão Escapular)',
    grupoMuscular: 'Latíssimo do Dorso ("Asas") e Bíceps Braquial',
    substituicao: 'Barra Fixa Pronada Aberta ou Puxada com Triângulo',
    dicaPAC: 'Puxar a barra em direção à fúrcula esternal (topo do peito), projetando o tórax levemente para cima. Evitar inclinar o tronco excessivamente para trás.',
    faseConcentrica: 'Puxar a barra verticalmente até a linha do queixo/peito alto.',
    faseExcentrica: 'Controlar a subida até quase estender os braços, mantendo as escápulas ativas.'
  },
  {
    id: 4,
    nome: 'Rosca Direta com Halteres',
    plano: 'Sagital',
    movimento: 'Flexão de Cotovelos',
    grupoMuscular: 'Bíceps Braquial (cabeças longa e curta) e Braquial',
    substituicao: 'Rosca Direta no Cross Over (Cabo) ou Rosca Scott',
    dicaPAC: 'Fixar os cotovelos junto ao tronco, sem projetá-los para frente ou para trás. Evitar o balanço da coluna lombar (roubo).',
    faseConcentrica: 'Flexionar os antebraços em direção aos ombros com supinação.',
    faseExcentrica: 'Descer os halteres de forma controlada sem relaxar no final.'
  },
  {
    id: 5,
    nome: 'Remada Alta com Halteres',
    plano: 'Frontal',
    movimento: 'Abdução de Ombros e Flexão de Cotovelos (com Elevação Escapular)',
    grupoMuscular: 'Deltoide (porção medial), Trapézio Superior e Bíceps Braquial',
    substituicao: 'Encolhimento de Ombros com Halteres ou Elevação Lateral',
    dicaPAC: 'Puxar os halteres próximos ao corpo mantendo os cotovelos sempre acima da linha dos punhos.',
    faseConcentrica: 'Subir os cotovelos lateralmente até a linha média do peitoral.',
    faseExcentrica: 'Descer controlando até a extensão dos braços junto às coxas.'
  },
  {
    id: 6,
    nome: 'Banco Extensor (Cadeira Extensora)',
    plano: 'Sagital',
    movimento: 'Extensão de Joelho',
    grupoMuscular: 'Quadríceps (Vasto Medial, Vasto Lateral, Vasto Intermédio e Reto Femoral)',
    substituicao: 'Flexão de Quadril em pé com Caneleira ou Agachamento Parcial',
    dicaPAC: 'Alinhar o eixo da máquina exatamente com a linha articular do joelho. Manter o quadril colado no banco com as mãos segurando os apoios.',
    faseConcentrica: 'Estender as pernas controlando o movimento sem travar abruptamente.',
    faseExcentrica: 'Descer suavemente freando a descida do rolo.'
  },
  {
    id: 7,
    nome: 'Leg Press 45°',
    plano: 'Sagital',
    movimento: 'Extensão de Joelhos e Extensão de Quadril',
    grupoMuscular: 'Quadríceps e Glúteo Máximo',
    substituicao: 'Agachamento na Barra Guiada (Smith) ou Agachamento Livre',
    dicaPAC: 'Pés na largura do quadril, joelhos apontando na direção dos dedos. Jamais permitir a retroversão da pelve (arredondar a lombar) no ponto mais baixo.',
    faseConcentrica: 'Empurrar a plataforma estendendo joelhos sem hiperestensão total.',
    faseExcentrica: 'Descer flexionando até ~90° respeitando a curvatura neutra da coluna.'
  },
  {
    id: 8,
    nome: 'Mesa Flexora',
    plano: 'Sagital',
    movimento: 'Flexão de Joelhos',
    grupoMuscular: 'Isquiotibiais (Semitendinoso, Semimembranoso e Bíceps Femoral)',
    substituicao: 'Banco Flexor (Cadeira Flexora) ou Stiff com Halteres',
    dicaPAC: 'Posicionar o rolo logo acima dos calcanhares. Manter o quadril pressionado contra o banco para não compensar hiperestendendo a lombar.',
    faseConcentrica: 'Flexionar as pernas trazendo o rolo em direção aos glúteos.',
    faseExcentrica: 'Retornar lentamente mantendo tensão muscular contínua.'
  },
  {
    id: 9,
    nome: 'Banco Adutor (Cadeira Adutora)',
    plano: 'Frontal',
    movimento: 'Adução do Quadril',
    grupoMuscular: 'Adutores da Coxa (Longo, Curto, Magno, Grácil e Pectíneo)',
    substituicao: 'Adução de Quadril solo com Caneleira ou no Cross Over',
    dicaPAC: 'Manter as costas firmes no encosto. Ajustar a amplitude confortável sem forçar as articulações coxofemorais na abertura.',
    faseConcentrica: 'Fechar as pernas aproximando as almofadas na linha central.',
    faseExcentrica: 'Abrir de forma controlada sem deixar os pesos colidirem.'
  },
  {
    id: 10,
    nome: 'Banco Abdutor (Cadeira Abdutora)',
    plano: 'Frontal',
    movimento: 'Abdução do Quadril',
    grupoMuscular: 'Glúteo Médio e Glúteo Mínimo',
    substituicao: 'Abdução de Quadril solo com Caneleira ou no Cross Over',
    dicaPAC: 'Manter a pelve estável. Variações de tronco ereto focam fibras superiores; leve inclinação anterior aumenta o braço de alavanca para o glúteo.',
    faseConcentrica: 'Afastar as pernas contra a resistência externa.',
    faseExcentrica: 'Retornar controlando até a aproximação suave das almofadas.'
  }
];

export const TEORIA_PULSEIRA_VERDE = {
  bioenergetica: [
    {
      sistema: 'ATP-CP (Fosfagênio)',
      duracao: '0 a 10 segundos',
      intensidade: 'Máxima (100%)',
      substrato: 'Creatina Fosfato estocada',
      exemplo: 'Sprint de 100m, 1RM de levantamento terra, salto explosivo.',
      descricao: 'Sistema imediato do corpo. Não produz ácido lático e não requer oxigênio. Recupera em 3 a 5 minutos.'
    },
    {
      sistema: 'Glicolítico (Glicogênio Muscular)',
      duracao: '30s a 2 minutos',
      intensidade: 'Alta a submáxima',
      substrato: 'Glicose e Glicogênio muscular',
      exemplo: 'Séries clássicas de musculação (8 a 15 repetições), corrida de 400m.',
      descricao: 'Motor principal da musculação tradicional. Quebra a glicose gerando piruvato/lactato sob alta demanda.'
    },
    {
      sistema: 'Oxidativo (Aeróbio)',
      duracao: 'Acima de 2 minutos',
      intensidade: 'Baixa a moderada',
      substrato: 'Carboidratos e Ácidos Graxos (com O2)',
      exemplo: 'Corrida contínua de 5 km, ciclismo de longa distância, caminhada.',
      descricao: 'Sistema com capacidade quase ilimitada de produção de ATP na presença de oxigênio nas mitocôndrias.'
    }
  ],
  metodologiaPratique: [
    {
      sigla: 'CORE',
      titulo: 'Metodologia de Atendimento',
      itens: [
        'C: Circular pelo salão de musculação',
        'O: Oportunidade de relacionamento',
        'R: Restaurar a execução técnica com segurança',
        'E: Elogiar o esforço e dedicação do aluno'
      ]
    },
    {
      sigla: 'PAC',
      titulo: 'Padrão de Execução do Exercício',
      itens: [
        'P: Postura (alinhamento neutro da coluna e estabilidade articular)',
        'A: Amplitude (arco seguro e funcional sem perda de tensão)',
        'C: Cadência (ritmo controlado, ex.: 2s concêntrica x 3s excêntrica)'
      ]
    },
    {
      sigla: 'ERE',
      titulo: 'Técnica de Feedback e Correção',
      itens: [
        'E: Elogiar (reconhecer algo positivo no movimento do aluno)',
        'R: Restaurar (corrigir o detalhe técnico com clareza e empatia)',
        'E: Elogiar (motivar para a próxima repetição ou série)'
      ]
    }
  ]
};
