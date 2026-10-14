/**
 * Dados Oficiais da Validação da Pulseira Vermelha
 * Trilha de Aprendizagem — Metodologia Power (Uni Power)
 * Docente / Coordenação Técnica: Prof. Cleverson Costa
 */

export const PULSEIRA_VERMELHA_INFO = {
  title: 'Pulseira Vermelha',
  subtitle: 'Metodologia Power & Prescrição Científica Avançada',
  badge: 'Nível Avançado UniPower',
  description: 'Domínio científico dos princípios do treinamento físico, sistemas biomecânicos de alavancas e protocolos clínicos de prescrição segura para Diabetes e Hipertensão Arterial.',
  color: '#e11d48',
  darkColor: '#9f1239'
};

export const PRINCIPIOS_TREINAMENTO = {
  introducao: {
    title: 'Carga x Peso: Parece mas NÃO é',
    conceito: 'Carga de treinamento é equivalente a um estímulo de treinamento: qualquer intervenção capaz de quebrar a homeostase (estado de equilíbrio do organismo) e provocar uma nova resposta adaptativa.',
    diferenca: 'A confusão comum no Brasil decorre da tradução da palavra "load" da literatura estrangeira como "peso". Em ciências do esporte, "load" significa capacidade ou estímulo. O peso é apenas UMA das cinco componentes da carga!',
    componentesCarga: [
      { nome: 'Volume', desc: 'Quantidade de trabalho (distância percorrida, séries, repetições, número de exercícios no plano).' },
      { nome: 'Intensidade', desc: 'Percentual do esforço máximo necessário (% da FC máxima, % da carga de 1RM, velocidade).' },
      { nome: 'Duração', desc: 'O tempo durante o qual o estímulo de treinamento é mantido (segundos, minutos ou horas).' },
      { nome: 'Frequência', desc: 'A quantidade de vezes que o estímulo é repetido por unidade de tempo (ex.: 3x/semana, 2x/dia).' },
      { nome: 'Densidade', desc: 'A relação temporal entre tempo de esforço e tempo de pausa (ex.: 1 min esforço / 1 min pausa = 1:1).' }
    ]
  },
  principios: [
    {
      id: 'individualidade',
      nome: '1. Princípio da Individualidade Biológica',
      erroComum: 'Achar que exige elaborar um plano de treino exclusivo ou atuar estritamente como personal trainer (inviável em esportes coletivos como futebol ou voleibol).',
      conceitoReal: 'Cada organismo reage e responde de forma única a um determinado estímulo ou carga de treinamento. Dois alunos com a mesma estrutura corporal submetidos à mesma rotina podem ter respostas adaptativas completamente divergentes.',
      fatores: [
        'Características Genéticas e Morfofuncionais: Composição tecidual, tipos de fibras musculares, eficiência metabólica.',
        'Aptidão Psíquica e Mental: Limiar de dor, capacidade de tolerância ao desconforto físico e resistência ao estresse.',
        'Aspectos Motivacionais: Nível de engajamento diário, predisposição emocional e estado psíquico no treino.'
      ],
      regraDeOuro: 'Ajuste a expectativa e o ritmo de progressão a cada aluno respeitando sua singularidade biológica.'
    },
    {
      id: 'adaptacao',
      nome: '2. Princípio da Adaptação (SAG)',
      erroComum: 'Acreditar que qualquer esforço gera ganho estético ou funcional.',
      conceitoReal: 'O organismo responde aos estresses do exercício (Síndrome de Adaptação Geral). Toda carga atua como agente estressor que retira o corpo da homeostase para desencadear reparação e aprimoramento morfológico e funcional.',
      tabelaEstimulos: [
        { nivel: 'Fraco', reacao: 'Não atinge o limiar mínimo para quebrar a homeostase.', resultado: 'Ineficaz: Não gera nenhuma adaptação funcional ou morfológica.', status: 'ineficaz' },
        { nivel: 'Médio / Leve', reacao: 'Provoca leve estresse orgânico, mantendo o equilíbrio.', resultado: 'Saúde e Bem-estar: Suficiente para saúde geral e controle glicêmico, mas ineficaz para alta performance.', status: 'saude' },
        { nivel: 'Forte', reacao: 'Quebra a homeostase e causa microlesões teciduais controladas.', resultado: 'Adaptação Efetiva: Induz ganho de massa muscular, melhora do VO2 máx e capacidade funcional.', status: 'efetivo' },
        { nivel: 'Muito Forte', reacao: 'Excede a capacidade imediata de recuperação e adaptação.', resultado: 'Risco Elevado: Expõe o aluno a lesões musculares/articulares e estado de overtraining.', status: 'perigo' }
      ],
      efeitoAcumulado: 'Um estímulo forte e adequado na segunda-feira pode se tornar "muito forte" ou prejudicial na sexta-feira devido ao acúmulo de fadiga ao longo da semana.'
    },
    {
      id: 'sobrecarga',
      nome: '3. Princípio da Sobrecarga',
      erroComum: 'Achar que o ganho de massa e performance ocorre durante a sessão de treino.',
      conceitoReal: 'O tempo de recuperação entre as sessões deve ser proporcional à carga aplicada. No treino ocorre apenas PERDA (substratos energéticos e microlesões). É no DESCANSO que ocorrem os ganhos.',
      pilares: [
        'Assimilação Compensatória: O corpo restaura as reservas gastas e prepara-se para suportar um estímulo adicional mais forte.',
        'Supercompensação: Quando o descanso é adequado, o organismo atinge um nível superior de rendimento em relação ao ponto inicial.',
        'Manutenção do Rendimento: Ao atingir o objetivo desejado, mantém-se estímulos de manutenção ajustando os intervalos.'
      ],
      regraDeOuro: 'Respeite o descanso proporcional à magnitude da carga para permitir a assimilação compensatória e atingir a supercompensação.'
    },
    {
      id: 'especificidade',
      nome: '4. Princípio da Especificidade',
      erroComum: 'Prescrever treinos de corrida longa (endurance) para esportes que exigem potência anaeróbia explosiva (ex.: velocistas dos 100m, vôlei ou tênis).',
      conceitoReal: 'As adaptações geradas pelo treinamento são estritamente vinculadas ao tipo de estímulo imposto.',
      pilares: [
        'Sistema Energético Predominante: Alinhar com a via metabólica alvo (ATP-CP, Glicolítico ou Oxidativo).',
        'Tipo de Recrutamento de Fibras Musculares: Fibras Rápidas/Explosivas (salto, soco, sprint) vs Fibras Lentas/Oxidativas (corrida contínua, ciclismo).',
        'Cinesiologia e Ângulos de Movimento: Análise dos ângulos articulares e vetores mobilizados no gesto esportivo.'
      ],
      diferencaSaudeDesporto: 'Para Saúde, basta selecionar o sistema energético predominante; para Desporto, é obrigatório integrar os três pilares.'
    },
    {
      id: 'continuidade',
      nome: '5. Princípio da Continuidade',
      erroComum: 'Treinar de forma espaçada ou aplicar o treino fora do momento fisiológico correto.',
      conceitoReal: 'Exige aplicação regular e ininterrupta dos estímulos para consolidação de adaptações.',
      pontoOtimo: 'Aplicar a nova carga exatamente no ÁPICE (pico) da curva de supercompensação gera uma curva ascendente contínua de rendimento. Se aplicar antes, acumula dano e fadiga; se demorar demais, o corpo regride ao nível basal.',
      leiReversibilidade: 'Processo de aquisição longo gera perda lenta e sustentada. Aquisição rápida gera perda igualmente rápida após a interrupção.',
      estrategiaIniciantes: 'Iniciantes devem treinar com frequência alta (4 a 5x/semana) porque usam estímulos médios (que supercompensam em poucas horas), acelerando o desenvolvimento do hábito.'
    },
    {
      id: 'interdependencia',
      nome: 'Princípio Bônus: Interdependência Volume x Intensidade',
      erroComum: 'Aumentar peso e quantidade de séries ao mesmo tempo na mesma semana.',
      conceitoReal: 'Volume e Intensidade são grandezas inversamente proporcionais ao aplicar nova sobrecarga. Ao subir um, deve-se manter ou diminuir o outro.',
      regraProgressaoInicial: [
        '1º Passo: Aumente o número de repetições.',
        '2º Passo: Aumente a quantidade de séries.',
        '3º Passo: Adicione novos exercícios ou aumente a duração.',
        '4º Passo: Por último, aumente a intensidade (peso, carga externa ou velocidade).'
      ]
    }
  ],
  tabelaRecuperacao: [
    { estimulo: 'Forte / Alta Intensidade', objetivo: 'Hipertrofia, Força Máxima, Rendimento', nivel: 'Intermediário a Avançado', tempo: '24 a 72 horas (média recomendada: 48h)' },
    { estimulo: 'Médio / Fraco', objetivo: 'Saúde geral, perfil glicêmico e bem-estar', nivel: 'Iniciantes / Foco em Saúde', tempo: 'Poucas horas (pode treinar diariamente)' }
  ]
};

export const BIOMECANICA_ALAVANCAS = {
  titulo: 'Biomecânica: Sistema de Alavancas e Vantagem Mecânica',
  subtitulo: 'Aplicação Clínica e Manipulação do Braço de Resistência',
  componentes: [
    { sigla: 'A', nome: 'Ponto de Apoio / Eixo', anatomia: 'Articulações do corpo humano', desc: 'Ponto fixo ao redor do qual o segmento rígido gira.' },
    { sigla: 'F', nome: 'Força Potente / Potência', anatomia: 'Contração muscular (ponto de inserção no osso)', desc: 'Força motora interna que realiza o trabalho.' },
    { sigla: 'R', nome: 'Força Resistente / Resistência', anatomia: 'Carga externa (halteres, anilhas, peso corporal)', desc: 'Força externa a ser vencida durante a ação motora.' }
  ],
  bracos: {
    bf: 'Braço de Força (BF): Distância entre o Eixo (A) e o Ponto de Aplicação da Força Potente (Músculo). É fixo anatomicamente no corpo humano!',
    br: 'Braço de Resistência (BR): Distância entre o Eixo (A) e o Ponto de Aplicação da Resistência (Carga). É a variável que o treinador pode manipular!'
  },
  classes: [
    {
      tipo: '1ª Classe (Interfixa)',
      meio: 'Eixo / Ponto de Apoio no MEIO',
      cotidiano: 'Gangorra, Tesoura',
      anatomia: 'Extensão de Cotovelo (Tríceps)',
      detalhes: 'O cotovelo (eixo) fica entre a inserção no olécrano (força potente) e a carga na mão (resistência).'
    },
    {
      tipo: '2ª Classe (Inter-resistente)',
      meio: 'Resistência no MEIO',
      cotidiano: 'Carrinho de Pedreiro / Mão, Quebra-nozes',
      anatomia: 'Flexão Plantar (Panturrilha / Tríceps Sural)',
      detalhes: 'O peso do corpo transmitido pela tíbia (resistência) fica entre as articulações dos dedos (eixo) e o tendão calcâneo (força). Sempre possui vantagem mecânica favorável.'
    },
    {
      tipo: '3ª Classe (Interpotente)',
      meio: 'Força Potente no MEIO',
      cotidiano: 'Pá de Lixo, Pinça',
      anatomia: 'Flexão de Cotovelo (Bíceps) / Abdução de Ombro (Deltoide)',
      detalhes: 'É a mais comum no corpo humano! A força é aplicada entre o eixo articular e a carga na extremidade. Desvantajosa para força, mas confere alta velocidade e amplitude de movimento.'
    }
  ],
  regraVantagemMecanica: {
    regra: 'Como o ponto de inserção muscular (BF) é anatomicamente fixo, a única forma de modular o exercício sem mexer no peso é manipular o Braço de Resistência (BR):',
    aumentarBR: 'Aumentar o BR ➔ Alonga a alavanca ➔ Cria desvantagem mecânica ➔ Exige MAIS força muscular (Dificulta o exercício).',
    diminuirBR: 'Diminuir o BR ➔ Encurta a alavanca ➔ Aumenta a vantagem mecânica ➔ Exige MENOS força muscular (Facilita o exercício).'
  },
  exemplosPraticos: [
    {
      exercicio: 'Elevação Lateral de Ombro (Deltoide)',
      variacaoLonga: 'Cotovelo Estendido: Haltere distante do ombro (BR longo). Máxima sobrecarga biomecânica.',
      variacaoCurta: 'Cotovelo a 90°: Dobrar o cotovelo reduz o BR pela metade. O aluno mantém a mesma carga com menos esforço, útil na fadiga ou dor articular.'
    },
    {
      exercicio: 'Crucifixo (Peitoral Maior)',
      variacaoLonga: 'Cotovelos quase estendidos: BR longo no pico da contração excêntrica.',
      variacaoCurta: 'Ligeira flexão dos cotovelos na fadiga: Encurta o BR, garantindo a conclusão das repetições em segurança sem falhar bruscamente.'
    },
    {
      exercicio: 'Abdominal Supra (Reto Abdominal)',
      variacaoLonga: 'Níveis progressivos de BR:',
      variacaoCurta: '1. Braços no peito (Fácil) ➔ 2. Mãos na cabeça (Médio) ➔ 3. Braços estendidos acima da cabeça (Avançado) ➔ 4. Carga externa acima da cabeça (Máximo).'
    },
    {
      exercicio: 'Abdução de Quadril (Glúteo Médio)',
      variacaoLonga: 'Joelho Estendido: Tornozeleira distante do quadril (BR longo, grande torque).',
      variacaoCurta: 'Joelho Dobrado a 90°: Encurta o BR, facilitando a execução e evitando compensações como rotação externa do quadril.'
    }
  ]
};

export const DIABETES_PRESCRICAO = {
  titulo: 'Prescrição de Exercícios no Diabetes Mellitus',
  subtitulo: 'Fisiopatologia, Analogia da Insulina e Protocolos de Segurança',
  analogia: {
    titulo: 'A Analogia do "Chaveiro"',
    texto: 'A glicose entra no sangue para gerar energia celular. A insulina, produzida pelo pâncreas, atua como um "chaveiro" que abre os receptores celulares ("fechaduras") para permitir que a glicose entre na célula.'
  },
  tipos: [
    { tipo: 'Diabetes Tipo 1', desc: 'O pâncreas perde a capacidade autoimune de produzir insulina. Representa minoria dos casos.' },
    { tipo: 'Diabetes Tipo 2', desc: 'O pâncreas produz insulina, mas a célula apresenta resistência periférica ("fechadura enferrujada"). Mais de 90% dos casos, ligado diretamente ao sedentarismo e estilo de vida.' }
  ],
  tabelaGlicemia: [
    { classificacao: 'Normal', jejum: '70 a 100 mg/dL', posPrandial: 'Até 140 mg/dL', conduta: 'Manter hábitos saudáveis de vida.' },
    { classificacao: 'Pré-Diabetes', jejum: '100 a 125 mg/dL', posPrandial: '140 a 199 mg/dL', conduta: 'Alerta urgente: Mudança de hábitos com exercícios pode reverter em até 100% a evolução.' },
    { classificacao: 'Diabetes Estabelecido', jejum: 'A partir de 125 mg/dL', posPrandial: 'Acima de 200 mg/dL', conduta: 'Diagnóstico confirmado: Controle médico contínuo e exercício como remédio.' }
  ],
  mecanismosExercicio: [
    { titulo: 'Efeito "Desengripante"', desc: 'O exercício regular restaura a sensibilidade aos receptores de insulina ("desengripa a fechadura").' },
    { titulo: 'Captação Direta de Glicose', desc: 'A simples contração mecânica muscular faz o músculo absorver glicose do sangue sem necessitar de insulina.' },
    { titulo: 'Prevenção e Remissão', desc: 'No pré-diabetes reduz até 100% a evolução para a doença e pode promover a remissão do diabetes tipo 2.' }
  ],
  diretrizesTreino: {
    volumeSemanal: 'No mínimo 150 minutos por semana (ADA / OMS).',
    regraDescanso: 'Nunca ficar mais de 2 dias consecutivos sem se exercitar.',
    principioPSF: 'Método PSF (Pouco, Simples e Fácil): Manter o aluno na zona de conforto, PSE ≤ 5 (moderada), evitando exaustão ou dores tardias intensas.',
    musculacao: '8 a 10 exercícios no máximo por ficha; priorizar grandes grupos musculares e multiarticulares (supino, puxadas, agachamento). Iniciar com 1 série de 10 repetições, evoluindo até 3 séries de 10 a 15.'
  },
  protocoloSeguranca: [
    { regra: 'Teste Glicêmico Pré-Treino', desc: 'O aluno deve chegar sabendo o valor exato da sua glicemia.' },
    { regra: 'Glicemia Baixa (< 100 mg/dL)', desc: 'Ingerir de 15 a 30 g de carboidratos simples (banana, sachê de mel, isotônico, fruta) antes de iniciar.' },
    { regra: 'Glicemia Alta (> 200 mg/dL) com Insulina Rápida', desc: 'Se aplicar insulina rápida para correção, aguardar 90 minutos (1h30) antes de treinar.' },
    { regra: 'Hidratação e Emergência', desc: 'Hidratar a cada 30 minutos e ter sempre à disposição carboidratos simples no salão para casos de hipoglicemia súbita.' }
  ],
  fichaTreinoModelo: [
    { bloco: 'Ativação Articular', exercicio: 'Soltura e circundução de ombros, quadril e joelhos', series: '5 minutos', objetivo: 'Líquido sinovial sem desgaste cárdio' },
    { bloco: 'Membros Superiores (Empurrar)', exercicio: 'Supino em Máquina Guiada', series: '1 série x 10 repetições', objetivo: 'Segurança biomecânica e grandes grupos' },
    { bloco: 'Membros Superiores (Puxar)', exercicio: 'Puxador / Pulley Guiado', series: '1 série x 10 repetições', objetivo: 'Grande volume dorsal' },
    { bloco: 'Membros Inferiores', exercicio: 'Agachamento Livre (Peso corporal)', series: '1 série x 10 repetições', objetivo: 'Padrão motor funcional' },
    { bloco: 'Posterior de Coxa', exercicio: 'Banco Flexor', series: '1 série x 10 repetições', objetivo: 'Conforto articular' },
    { bloco: 'M.A.E.', exercicio: 'Equilíbrio Unipodal ("Avião")', series: '1 a 2 séries de 10 a 15 seg', objetivo: 'Propriocepção' },
    { bloco: 'Cardiovascular', exercicio: 'Bicicleta ou Esteira', series: '5 a 10 minutos', objetivo: 'Zona de conforto leve' }
  ]
};

export const HIPERTENSAO_PRESCRICAO = {
  titulo: 'Prescrição de Exercícios na Hipertensão Arterial (HAS)',
  subtitulo: 'Diretrizes Clínicas, Parâmetros Pressóricos e Protocolos de Segurança',
  epidemiologia: 'No Brasil, ocorrem cerca de 390 mortes diárias por complicações cardiovasculares ligadas à hipertensão. Responsável por 80% dos AVCs e 60% dos infartos agudos do miocárdio.',
  fisiologiaPA: {
    pas: 'Pressão Arterial Sistólica (PAS): Ponto máximo nas artérias durante a contração do ventrículo esquerdo (sístole).',
    pad: 'Pressão Arterial Diastólica (PAD): Pressão mínima de repouso durante o enchimento ventricular (diástole).'
  },
  tabelaClassificacao: [
    { diretriz: 'SBC (Brasil)', normal: '≤ 120 / 80 mmHg', pre: '121 a 139 / 81 a 89 mmHg', hipertenso: '≥ 140 / 90 mmHg (14x9)' },
    { diretriz: 'AHA / ACC', normal: '< 120 / 80 mmHg', pre: '120 a 129 / < 80 mmHg', hipertenso: '≥ 130 / 80 mmHg (13x8)' }
  ],
  beneficiosCardiovasculares: [
    'Remodelamento Cardíaco Positivo: Aumento da inotropia e volume sistólico (coração mais eficiente e econômico).',
    'Adaptação Vascular: Vasodilatação periférica, aumento do calibre arterial e neovascularização, reduzindo a resistência vascular periférica.',
    'Redução Pressórica Crônica: Diminuição de 3 a 4 mmHg na PAS e 2 a 3 mmHg na PAD, suficiente para reverter quadros leves para a faixa normal.',
    'EQUIVALÊNCIA TERAPÊUTICA: Revisões sistemáticas do ACSM comprovam que exercícios aeróbicos e resistidos (musculação) têm eficácia equivalente na redução da pressão arterial!'
  ],
  dosagemSemanal: {
    aerobico: '150 a 300 minutos/semana moderado (3 a 6 METs) ou 75 min vigoroso (> 6 METs).',
    resistido: 'Mínimo de 2 vezes por semana, priorizando aparelhos guiados e grandes grupamentos musculares.'
  },
  protocolosSegurancaCriticos: [
    {
      titulo: 'PONTO DE CORTE CRÍTICO (CONTRAINDICAÇÃO FORMAL)',
      texto: 'Se a PA for ≥ 200 mmHg Sistólica ou ≥ 115 mmHg Diastólica (20x11,5), o exercício é ESTRITAMENTE CONTRAINDICADO na sessão. Orientar repouso e encaminhar ao médico.',
      critico: true
    },
    {
      titulo: 'Medicamentos Beta-Bloqueadores',
      texto: 'Beta-bloqueadores atenuam e limitam a frequência cardíaca (FC). A FC torna-se um parâmetro NÃO CONFIÁVEL. Deve-se guiar a intensidade estritamente pela Escala de PSE (Borg ≤ 4 - "Pouco Difícil").',
      critico: false
    },
    {
      titulo: 'Abolição TOTAL da Manobra de Valsalva',
      texto: 'O aluno NUNCA deve prender a respiração durante a força. Bloquear a glote causa elevação súbita da pressão intratorácica e picos perigosos de PA com risco de desmaio (síncope) e AVC.',
      critico: true
    },
    {
      titulo: 'Desaceleração Gradual (Cool-down Obrigatório)',
      texto: 'Exercícios aeróbicos não podem ser parados bruscamente. Reduzir a velocidade por 2 a 3 minutos antes da parada para evitar hipotensão ortostática e tontura por represamento venoso periférico.',
      critico: false
    }
  ],
  modeloTreinoPSF: {
    estrutura: '10 min Aeróbico Leve (PSE ≤ 4) ➔ 4 Exercícios Resistidos Guiados (1 série x 8-10 rep.) ➔ Desaceleração Gradual de 2-3 min.',
    exerciciosSugeridos: [
      'Supino Máquina Guiado',
      'Puxador Alto Guiado',
      'Cadeira Extensora',
      'Cadeira Flexora (ou Adutora)',
      'Exercício à escolha do aluno (Bíceps ou Tríceps)'
    ]
  }
};

export const ALAVANCAS_BIOMECANICAS = {
  ...BIOMECANICA_ALAVANCAS,
  classes: [
    {
      classe: '1ª',
      nome: 'Alavanca Interfixa (1ª Classe)',
      funcao: 'Equilíbrio',
      mecanica: 'Ponto de Apoio (Eixo) entre a Potência e a Resistência',
      exemploCorpo: 'Articulação do cotovelo na extensão pelo tríceps',
      exemploAcademia: 'Tríceps na Polia Alta / Tríceps Testa'
    },
    {
      classe: '2ª',
      nome: 'Alavanca Inter-resistente (2ª Classe)',
      funcao: 'Força / Vantagem Mecânica',
      mecanica: 'Resistência entre o Ponto de Apoio e a Potência',
      exemploCorpo: 'Articulação do tornozelo na flexão plantar',
      exemploAcademia: 'Panturrilha em Pé (Gastrocnêmio)'
    },
    {
      classe: '3ª',
      nome: 'Alavanca Interpotente (3ª Classe)',
      funcao: 'Velocidade e Amplitude (Mais comum no corpo)',
      mecanica: 'Potência muscular entre o Ponto de Apoio e a Resistência',
      exemploCorpo: 'Bíceps braquial na flexão de cotovelo',
      exemploAcademia: 'Rosca Direta / Cadeira Extensora / Elevação Lateral'
    }
  ]
};

export const POPULACOES_ESPECIAIS = {
  diabetes: DIABETES_PRESCRICAO,
  hipertensao: HIPERTENSAO_PRESCRICAO
};

export const QUESTIONARIO_EXERCICIO_SAUDE = [
  {
    numero: 1,
    pergunta: 'No jogo de peteca profissional, os pontos são disputados em intervalos de 30 segundos. Se não houver ponto, a equipe sacadora perde a vantagem para o adversário, que então pode sacar. Qual forma de treinamento seria mais apropriada para essa modalidade, considerando os princípios do treinamento?',
    opcoes: [
      'Sessões de 30 minutos de corrida contínua e musculação com séries curtas (menos de 10 repetições).',
      'Musculação com séries longas (mais de 15 repetições), seguida de 30 minutos de corrida contínua.',
      'Treino intervalado com tiros de velocidade de 15 segundos, seguidos de 3 minutos de recuperação ativa a 60% do VO₂ máximo.',
      'Treino intervalado com estímulos de 30 segundos e densidade de 1:1.'
    ],
    respostaCorreta: 3,
    gabarito: 'D',
    explicacao: 'Pelo Princípio da Especificidade e densidade de esforço: estímulos com duração de 30 segundos associados a intervalos de recuperação proporcional (densidade 1:1) reproduzem com exatidão a bioenergética intermitente da modalidade.'
  },
  {
    numero: 2,
    pergunta: 'Uma pessoa matriculou-se numa academia para mudar a composição corporal. Após alguns meses sem perceber resultados, manteve a mesma prescrição de exercícios e saiu da academia. O profissional havia prescrito exercícios neuromusculares e cardiovasculares e informado que o programa mudaria em três meses. Como avaliar a conduta?',
    opcoes: [
      'Foi correta, pois mudar os componentes do treinamento com frequência aumenta o risco de lesão ou overtraining.',
      'Foi correta, pois o corpo precisa de tempo para se adaptar ao estímulo do treinamento.',
      'Foi incorreta, pois é recomendada uma avaliação física antes de mudar frequentemente os estímulos de treinamento.',
      'Foi incorreta, pois a manipulação frequente do treinamento é necessária para evitar a estagnação e quebrar a homeostase.'
    ],
    respostaCorreta: 1,
    gabarito: 'B',
    explicacao: 'Princípio da Adaptação: o organismo necessita de um período basal sustentado (geralmente entre 8 e 12 semanas) para consolidar adaptações neuromusculares, hormonais e morfológicas antes de sofrer nova alteração estrutural no programa.'
  },
  {
    numero: 3,
    pergunta: 'Após 50 minutos de corrida contínua e perto do fim de uma prova, uma triatleta amadora aumenta drasticamente a velocidade para alcançar as adversárias, mas desiste poucos minutos depois. Do ponto de vista fisiológico, o que pode explicar o ocorrido?',
    opcoes: [
      'Ao aumentar a velocidade, esgotou as reservas remanescentes de gordura e ficou sem substrato energético para continuar.',
      'Ultrapassou a intensidade sustentável por tempo prolongado, com maior contribuição anaeróbia e acúmulo de metabólitos associados à fadiga.',
      'Não estava psicologicamente preparada e desistiu ao perceber que não alcançaria as adversárias.',
      'O ATP não pôde ser ressintetizado porque não havia grupos fosfato suficientes.'
    ],
    respostaCorreta: 1,
    gabarito: 'B',
    explicacao: 'Ao disparar a intensidade no final da prova, o limiar anaeróbio foi ultrapassado bruscamente. A demanda energética passou para a via glicolítica rápida, acumulando íons H+ e metabólitos que causam acidose e fadiga neuromuscular imediata.'
  },
  {
    numero: 4,
    pergunta: 'O dispêndio energético pode ser expresso em METs, que comparam a taxa metabólica de uma atividade com a de repouso. Uma atividade de 10 METs é considerada de intensidade:',
    opcoes: [
      'Leve (< 3 METs).',
      'Moderada (3 a 5.9 METs).',
      'Vigorosa (≥ 6 METs).',
      'Amena.'
    ],
    respostaCorreta: 2,
    gabarito: 'C',
    explicacao: 'Classificação oficial de METs: Atividades Leves (< 3 METs), Moderadas (3,0 a 5,9 METs) e Vigorosas (≥ 6 METs). 10 METs representa um esforço dez vezes maior que o repouso basal, classificado firmemente como intensidade vigorosa.'
  },
  {
    numero: 5,
    pergunta: 'Um cliente iniciante pede para aumentar os pesos nos exercícios. O profissional decide manter a carga e aumentar as repetições em cada série. Do ponto de vista dos princípios do treinamento, que sobrecarga foi aplicada?',
    opcoes: [
      'Na intensidade do treinamento.',
      'No volume do treinamento.',
      'Na duração do treinamento.',
      'Nenhuma: aumentar as repetições não representa uma sobrecarga.'
    ],
    respostaCorreta: 1,
    gabarito: 'B',
    explicacao: 'Princípio da Sobrecarga e Progressão: O aumento no número de repetições ou séries incide diretamente no Volume de treino. A intensidade só é alterada quando se modifica o peso (kg), percentual de 1RM ou velocidade de execução.'
  },
  {
    numero: 6,
    pergunta: 'Na biomecânica, um profissional pode aumentar ou diminuir o trabalho muscular manipulando o braço de resistência. Qual alternativa define melhor esse conceito?',
    opcoes: [
      'Distância do ponto fixo até o ponto de aplicação da força potente.',
      'Distância linear do eixo até o ponto de inserção do músculo motor primário.',
      'Distância perpendicular do ponto fixo (eixo) até a linha de aplicação da resistência.',
      'Comprimento total do braço de alavanca óssea.'
    ],
    respostaCorreta: 2,
    gabarito: 'C',
    explicacao: 'Definição física e biomecânica do Braço de Resistência (BR): é a menor distância perpendicular medida entre o eixo de rotação articular (ponto fixo) e a linha de ação do vetor de força da resistência externa.'
  },
  {
    numero: 7,
    pergunta: 'Na elevação lateral com halteres, a abdução dos ombros no plano frontal fica mais fácil com os cotovelos flexionados do que com eles estendidos, usando o mesmo peso. Por quê?',
    opcoes: [
      'Porque o praticante consegue compensar com um movimento "roubado".',
      'Por causa da diminuição do braço de resistência.',
      'Por causa do aumento do braço de força.',
      'Por mudança no eixo do movimento.'
    ],
    respostaCorreta: 1,
    gabarito: 'B',
    explicacao: 'Ao flexionar os cotovelos a 90°, o haltere (carga) aproxima-se horizontalmente do eixo glenoumeral (ombro), encurtando o Braço de Resistência (BR) e reduzindo o torque resistente imposto ao deltoide lateral.'
  },
  {
    numero: 8,
    pergunta: 'Para um praticante iniciante, o abdominal supra é feito com os braços cruzados sobre o peito. Como se justifica essa posição?',
    opcoes: [
      'Maior facilidade por deslocar o centro de gravidade.',
      'Maior facilidade por reduzir a amplitude do movimento.',
      'Menor braço de resistência.',
      'Maior braço de força.'
    ],
    respostaCorreta: 2,
    gabarito: 'C',
    explicacao: 'Braços cruzados sobre o peito aproximam a massa dos membros superiores do eixo de rotação da coluna lombar/torácica, reduzindo o Braço de Resistência (BR) e facilitando a flexão de tronco pelo reto abdominal.'
  },
  {
    numero: 9,
    pergunta: 'Para um praticante bem condicionado, o abdominal supra é feito com os braços estendidos acima da cabeça. Como se justifica essa posição?',
    opcoes: [
      'Maior facilidade por deslocar o centro de gravidade.',
      'Maior facilidade por reduzir a amplitude do movimento.',
      'Maior braço de resistência.',
      'Menor braço de força.'
    ],
    respostaCorreta: 2,
    gabarito: 'C',
    explicacao: 'Alongar os braços acima da cabeça afasta o centro de massa dos membros superiores para longe do eixo lombar, maximizando o Braço de Resistência (BR) e exigindo muito maior tensão das fibras do reto abdominal.'
  },
  {
    numero: 10,
    pergunta: 'O diabetes é uma doença cuja característica principal é o excesso de glicose no sangue (hiperglicemia). Isso pode ocorrer porque:',
    opcoes: [
      'O indivíduo não consegue metabolizar os carboidratos ingeridos.',
      'O indivíduo tem compulsão por alimentos açucarados.',
      'O corpo não produz insulina ou não consegue usar adequadamente a insulina que produz.',
      'Todo carboidrato ingerido se transforma em açúcar.'
    ],
    respostaCorreta: 2,
    gabarito: 'C',
    explicacao: 'Fisiopatologia do Diabetes: decorre da deficiência absoluta na produção de insulina pelas células beta pancreáticas (Tipo 1) ou da resistência periférica à sua ação nos receptores teciduais (Tipo 2).'
  },
  {
    numero: 11,
    pergunta: 'O que é a insulina?',
    opcoes: [
      'Substância capaz de quebrar o açúcar dentro da célula.',
      'Enzima que acelera o metabolismo dos carboidratos.',
      'Hormônio produzido pelo pâncreas que ajuda a regular a glicose no sangue.',
      'Catalisador bioquímico que oxida carboidratos e açúcares.'
    ],
    respostaCorreta: 2,
    gabarito: 'C',
    explicacao: 'A insulina é um hormônio anabólico de natureza proteica sintetizado nas células beta das ilhotas de Langerhans no pâncreas, essencial para a translocação dos transportadores GLUT-4 e captação celular de glicose.'
  },
  {
    numero: 12,
    pergunta: 'Quais são os dois tipos mais comuns de diabetes e a explicação correta de cada tipo?',
    opcoes: [
      'Tipo A (dependente de insulina) e Tipo B (não insulinodependente).',
      'Tipo 1 (o corpo não produz insulina) e Tipo 2 (o corpo produz insulina, mas não consegue usá-la adequadamente).',
      'Tipo Ia (catabólico) e Tipo Ib (anabólico).',
      'Tipo IIa (não associado à tireoide) e Tipo IIb (associado à tireoide).'
    ],
    respostaCorreta: 1,
    gabarito: 'B',
    explicacao: 'Tipo 1 é uma doença autoimune com destruição das células produtoras de insulina. Tipo 2 (>90% dos casos) associa-se à obesidade e sedentarismo, cursando com resistência insulínica celular ("fechadura enferrujada").'
  },
  {
    numero: 13,
    pergunta: 'Como a prática de atividade física pode ajudar uma pessoa com diabetes?',
    opcoes: [
      'Ajudando na beta-oxidação das gorduras e evitando o excesso de peso.',
      'Através da melhora do metabolismo e da eficiência energética.',
      'Por meio da queda da pressão arterial e da frequência cardíaca de repouso.',
      'A contração muscular aumenta a captação e o uso de glicose pelos músculos independentemente de insulina, auxiliando no controle glicêmico.'
    ],
    respostaCorreta: 3,
    gabarito: 'D',
    explicacao: 'Durante a contração muscular, a via mecânica e o aumento de cálcio e AMPK ativam o GLUT-4 diretamente, fazendo o músculo captar glicose da circulação mesmo na ausência ou falha da insulina.'
  },
  {
    numero: 14,
    pergunta: 'Segundo os protocolos de controle glicêmico no exercício, qual a conduta para um aluno diabético com glicemia pré-treino superior a 200 mg/dL?',
    opcoes: [
      'Não se exercitar em hipótese alguma nesse dia.',
      'Esperar apenas 10 minutos antes de começar a sessão.',
      'Caso faça aplicação de insulina de ação rápida para correção, aguardar cerca de 90 minutos para evitar choque hipoglicêmico.',
      'Aplicar insulina ultrarrápida por conta própria sem prescrição médica.'
    ],
    respostaCorreta: 2,
    gabarito: 'C',
    explicacao: 'Aguardar 90 minutos após a aplicação de insulina rápida permite que o pico farmacológico inicial se dissipe, impedindo que a ação exógena coincida sinergicamente com a captação mecânica do exercício, evitando hipoglicemia severa.'
  },
  {
    numero: 15,
    pergunta: 'O que caracteriza a hipertensão arterial sistêmica (pressão alta)?',
    opcoes: [
      'Aumento da força dos batimentos cardíacos em repouso.',
      'Aumento anormal e prolongado da pressão que o sangue exerce nas paredes das artérias ao circular pelo corpo.',
      'Elevação da pressão alveolar dentro dos pulmões.',
      'Elevação da força de retorno do sangue venoso ao coração.'
    ],
    respostaCorreta: 1,
    gabarito: 'B',
    explicacao: 'A hipertensão é uma doença cardiovascular crônica caracterizada por níveis sustentados de pressão sistólica ≥ 140 mmHg e/ou diastólica ≥ 90 mmHg (pela SBC), elevando a pós-carga e a resistência vascular.'
  },
  {
    numero: 16,
    pergunta: 'Sobre atividade física, hipertensão arterial e diretrizes do ACSM / AHA, assinale a afirmação correta:',
    opcoes: [
      'Exercícios resistidos (musculação) são perigosos e totalmente proibidos para pessoas hipertensas.',
      'Tanto exercícios cardiovasculares quanto resistidos promovem reduções pressóricas clinicamente equivalentes e são recomendados de forma combinada.',
      'Apenas caminhadas em ritmo lento conseguem diminuir a pressão arterial.',
      'Exercícios de musculação não possuem nenhum impacto no controle pressórico crônico.'
    ],
    respostaCorreta: 1,
    gabarito: 'B',
    explicacao: 'Revisões do ACSM e diretrizes da Sociedade Brasileira de Cardiologia confirmam que tanto o treinamento aeróbico quanto a musculação reduzem a PA de 3 a 5 mmHg de forma clinicamente equivalente e complementar.'
  },
  {
    numero: 17,
    pergunta: 'Qual alternativa representa o princípio básico sugerido pela metodologia UniPower para orientar a prescrição inicial de exercícios para a saúde em geral?',
    opcoes: [
      'Mais rápido, mais alto, mais forte (Citius, Altius, Fortius).',
      'No pain, no gain (sem dor, sem ganho).',
      'Go hard or go home (treine pesado ou vá para casa).',
      'PSF: Pouco, Simples e Fácil.'
    ],
    respostaCorreta: 3,
    gabarito: 'D',
    explicacao: 'Método PSF (Pouco, Simples e Fácil): prescreve estímulos na zona de conforto e segurança (PSE ≤ 4 a 5), priorizando a adesão, a segurança articular e o hábito diário antes de impor intensidade.'
  },
  {
    numero: 18,
    pergunta: 'Na avaliação por bioimpedância corporal, o indicador SMI (Skeletal Muscle Index) refere-se a:',
    opcoes: [
      'A massa corporal magra total com água intracelular.',
      'A saúde ou quantidade proporcional de massa muscular esquelética apendicular.',
      'A perda severa e irreversível de gordura corporal.',
      'A massa gorda visceral segmentar.'
    ],
    respostaCorreta: 1,
    gabarito: 'B',
    explicacao: 'O SMI (Índice de Músculo Esquelético) quantifica a massa muscular apendicular dividida pela altura ao quadrado (kg/m²), sendo padrão-ouro na identificação e monitoramento de sarcopenia.'
  },
  {
    numero: 19,
    pergunta: 'A relação cintura-quadril (RCQ) e a gordura visceral guardam relação direta com o risco cardiovascular. O que isso significa?',
    opcoes: [
      'A probabilidade de infarto ou AVC tende a aumentar quando a RCQ e a gordura visceral aumentam.',
      'Quanto maiores os valores de gordura abdominal profunda, maior a resistência vascular e marcadores inflamatórios.',
      'Valores elevados correlacionam-se com maior incidência de eventos coronarianos e síndrome metabólica.',
      'Todas as alternativas anteriores estão corretas.'
    ],
    respostaCorreta: 3,
    gabarito: 'D',
    explicacao: 'O tecido adiposo visceral é metabolicamente ativo, secretando citocinas pró-inflamatórias que aumentam a aterogênese, a pressão arterial e a incidência de infartos e AVC.'
  },
  {
    numero: 21,
    pergunta: 'Para que foi criado o sistema CORE-PAC na metodologia de atendimento e supervisão da Rede Pratique Fitness?',
    opcoes: [
      'Diminuir a área de varredura do profissional para identificar apenas alunos lesionados.',
      'Garantir profissionais circulando ativamente e prontos para intervir em todas as áreas, para que nenhum aluno se sinta desamparado.',
      'Propiciar o rodízio obrigatório de professores a cada 15 minutos para atender outros setores.',
      'Registrar o tempo de treino dos alunos em catracas eletrônicas.'
    ],
    respostaCorreta: 1,
    gabarito: 'B',
    explicacao: 'O CORE (Circular, Oportunidade, Restaurar, Elogiar) e PAC (Postura, Amplitude, Cadência) estruturam a presença constante do professor no salão, acolhendo iniciantes e prevenindo falhas de execução.'
  },
  {
    numero: 22,
    pergunta: 'Quando um aluno pede orientação sobre um exercício localizado fora do setor em que o professor está escalado, qual é o procedimento correto?',
    opcoes: [
      'Sair do próprio setor imediatamente e deixar os outros alunos sem supervisão.',
      'Chamar o colega no rádio e dizer apenas o primeiro nome do aluno.',
      'Encaminhar o aluno ao setor adequado e avisar o colega pelo rádio, explicando a demanda técnica e identificando o aluno.',
      'Dizer que não pode sair do setor e pedir ao aluno que procure outro professor sozinho.'
    ],
    respostaCorreta: 2,
    gabarito: 'C',
    explicacao: 'Padrão de excelência no atendimento Pratique: comunicação via rádio com clareza, direcionando o aluno ao colega responsável com presteza e garantindo que o atendimento não seja interrompido.'
  },
  {
    numero: 23,
    pergunta: 'No exercício de Puxada Alta (Lat Pulldown), qual análise cinesiológica descreve corretamente o movimento articular e muscular?',
    opcoes: [
      'Adução do ombro no plano transverso e peitoral como motor primário.',
      'Abdução do ombro no plano transverso com tríceps como motor primário.',
      'Adução de ombro e flexão de cotovelos no plano frontal; latíssimo do dorso como motor primário e bíceps braquial como sinergista.',
      'Extensão de ombro e extensão de cotovelos no plano frontal com deltoide anterior.'
    ],
    respostaCorreta: 2,
    gabarito: 'C',
    explicacao: 'Na puxada frontal pegada aberta, os braços aproximam-se do tronco no Plano Frontal (Adução de Ombro mobilizada pelo Latíssimo do Dorso) acompanhada de Flexão de Cotovelo assistida pelo Bíceps Braquial.'
  },
  {
    numero: 24,
    pergunta: 'Para substituir a Puxada Alta tradicional em um treino, qual exercício apresenta maior equivalência cinesiológica e de plano?',
    opcoes: [
      'Remada baixa no crossover (Plano Sagital).',
      'Remada curvada com halteres (Plano Sagital).',
      'Puxada na barra com pegada supinada fechada.',
      'Puxada no Graviton com pegada pronada aberta (ou Barra Fixa Pronada Aberta).'
    ],
    respostaCorreta: 3,
    gabarito: 'D',
    explicacao: 'A Barra Fixa Pronada Aberta ou no Graviton mantém rigorosamente o mesmo vetor vertical de tração, plano frontal de adução glenoumeral e ativação primária do latíssimo do dorso.'
  }
];

