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
