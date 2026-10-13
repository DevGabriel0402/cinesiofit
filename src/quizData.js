import dorsaisImg from './assets/dorsais.png';
import peitoralImg from './assets/peitoral.png';
import trapezioImg from './assets/trapezio.png';
import eretoEspinhaImg from './assets/ereto_espinha.png';
import abdomenImg from './assets/abdomen.png';
import deltoideImg from './assets/deltoide.png';
import bicepsBraquialImg from './assets/biceps_braquial.png';

import quadricepsImg from './assets/quadriceps.png';
import isquiotibiaisImg from './assets/isquiotibiais.png';
import gluteosImg from './assets/gluteos.png';
import panturrilhasImg from './assets/panturrilhas.png';

export const QUIZ_QUESTIONS = [
  // História e Valores da Pratique
  { id: 1, category: 'Pratique', question: 'Qual é o Propósito da Pratique Fitness?', options: ['Ter a mensalidade mais barata do Brasil.', 'Fazer um mundo mais feliz e saudável.', 'Criar os melhores atletas de fisiculturismo.', 'Gastar menos e lucrar mais.'], correctAnswer: 1, explanation: 'O propósito é "Fazer um mundo mais feliz e saudável".' },
  { id: 2, category: 'Pratique', question: 'Qual é a Visão da Pratique Fitness?', options: ['Gastar o mínimo com manutenção.', 'Vender mais planos apenas pela internet.', 'Chegar a 1 milhão de clientes.', 'Crescer apenas no estado de minas gerais.'], correctAnswer: 2, explanation: 'A visão da Pratique é "Chegar a 1 milhão de clientes".' },
  { id: 3, category: 'Pratique', question: 'Qual dos abaixo é um dos principais papéis dos colaboradores da Pratique?', options: ['Conhecer o cliente pelo nome, conhecer o seu objetivo e ensiná-lo corretamente.', 'Focar apenas nos alunos que estão machucados e ignorar os iniciantes.', 'Vender suplementos durante as aulas de musculação.', 'Aguardar os clientes chamarem.'], correctAnswer: 0, explanation: 'Acolher e conhecer o cliente é um dos pilares do atendimento Pratique.' },
  { id: 4, category: 'Pratique', question: 'O que o botão "Abonar" simboliza no sistema de ponto dos colaboradores?', options: ['Abonar atrasos dos alunos.', 'Justificar ausências ou falta de batida no sistema de ponto.', 'Liberar catracas para visitantes.', 'Desconto nas mensalidades.'], correctAnswer: 1, explanation: 'É a funcionalidade de justificar ponto para colaboradores.' },
  { id: 5, category: 'Pratique', question: 'Segundo os valores Pratique, o ambiente das academias deve ser:', options: ['Sério e silencioso sempre.', 'Competitivo e voltado para atletas de elite.', 'Alegre, divertido e acolhedor.', 'Isolado por áreas restritas.'], correctAnswer: 2, explanation: 'A alegria e um ambiente acolhedor fazem parte do propósito "Fazer um mundo mais feliz e saudável".' },

  // Planos Anatômicos
  { id: 6, category: 'Planos Anatômicos', question: 'Qual plano anatômico divide o corpo em lados direito e esquerdo?', options: ['Sagital', 'Frontal', 'Transversal', 'Coronal'], correctAnswer: 0, explanation: 'O Plano Sagital cruza o corpo da frente para trás (movimentos de flexão/extensão).' },
  { id: 7, category: 'Planos Anatômicos', question: 'O exercício "Elevação Lateral" para deltoides ocorre primariamente em qual plano?', options: ['Eixo Longitudinal', 'Frontal', 'Sagital', 'Transversal'], correctAnswer: 1, explanation: 'A Elevação Lateral é abdução, que ocorre no Plano Frontal.' },
  { id: 8, category: 'Planos Anatômicos', question: 'O movimento de Rotação Interna e Externa ocorre em qual plano?', options: ['Frontal', 'Mediano', 'Transversal', 'Sagital'], correctAnswer: 2, explanation: 'Rotações ocorrem no Plano Transversal (Horizontal).' },
  { id: 9, category: 'Planos Anatômicos', question: 'O exercício "Crucifixo Reto" ocorre primariamente em qual plano mecânico do corpo?', options: ['Frontal', 'Sagital', 'Transversal', 'Transversal com eixo antero-posterior'], correctAnswer: 2, explanation: 'O Crucifixo é uma Adução Horizontal, realizada no Plano Transversal.' },
  { id: 10, category: 'Planos Anatômicos', question: 'Exercícios de Agachamento e Leg Press acontecem predominantemente em qual plano?', options: ['Frontal', 'Transversal', 'Sagital', 'Rotacional'], correctAnswer: 2, explanation: 'O Agachamento possui flexão e extensão (plano Sagital).' },
  { id: 11, category: 'Planos Anatômicos', question: 'Plano Coronal é um sinônimo de:', options: ['Plano Sagital', 'Plano Frontal', 'Plano Transversal', 'Plano Axial'], correctAnswer: 1, explanation: 'Coronal refere-se à sutura coronal do crânio, que divide o corpo em frente/costas (Plano Frontal).' },
  { id: 12, category: 'Planos Anatômicos', question: 'O eixo anteroposterior está relacionado diretamente a qual Plano Anatômico?', options: ['Plano Sagital', 'Plano Frontal', 'Plano Transversal', 'Plano Obliquo'], correctAnswer: 1, explanation: 'O eixo anteroposterior atravessa em ângulo reto o plano frontal (ex: movimentos de abdução rotacionam ao redor deste eixo).' },
  { id: 13, category: 'Planos Anatômicos', question: 'Que plano divide o corpo em parte superior (cranial) e parte inferior (caudal)?', options: ['Sagital', 'Frontal', 'Transversal', 'Obliquo'], correctAnswer: 2, explanation: 'O plano transversal divide corpo horizontalmente.' },
  { id: 14, category: 'Planos Anatômicos', question: 'O movimento "Polichinelo" é uma mistura da ação de pernas e braços em qual plano?', options: ['Frontal', 'Sagital', 'Transversal', 'Rotacional'], correctAnswer: 0, explanation: 'Mover braços e pernas para os lados ocorre no plano Frontal.' },
  { id: 15, category: 'Planos Anatômicos', question: 'Rosca direta para bíceps é um movimento em qual plano?', options: ['Transversal', 'Sagital', 'Frontal', 'Diagonal'], correctAnswer: 1, explanation: 'Flexão de cotovelo ocorre estritamente no Plano Sagital.' },

  // Cinesiologia e Biomecânica
  { id: 16, category: 'Cinesiologia', question: 'Durante a execução da Cadeira Extensora, qual movimento a articulação do joelho realiza na fase concêntrica?', options: ['Supinação', 'Dorsiflexão', 'Extensão', 'Flexão'], correctAnswer: 2, explanation: 'Fase concêntrica é quando o músculo vence a carga, na cadeira extensora o joelho estende.' },
  { id: 17, category: 'Cinesiologia', question: 'O músculo que realiza o principal movimento em um exercício é classificado como:', options: ['Agonista', 'Estabilizador', 'Fixador', 'Antagonista'], correctAnswer: 0, explanation: 'Agonista é o principal.' },
  { id: 18, category: 'Cinesiologia', question: 'Qual é o movimento da articulação do cotovelo na Puxada Alta (Lat Pulldown)?', options: ['Abdução', 'Adução', 'Flexão', 'Extensão'], correctAnswer: 2, explanation: 'Ele flete à medida que a barra desce em direção ao peitoral.' },
  { id: 19, category: 'Cinesiologia', question: 'A fase excêntrica de um movimento de Musculação é aquela em que o músculo:', options: ['Acurta (contração concêntrica)', 'Permanece do mesmo tamanho', 'Alonga ou cede contra a resistência', 'Relaxa totalmente'], correctAnswer: 2, explanation: 'Na fase excêntrica o músculo alonga sob tensão freando a carga.' },
  { id: 20, category: 'Cinesiologia', question: 'No supino reto, qual é o papel do Tríceps Braquial?', options: ['Agonista Primário', 'Sinergista (Auxiliar)', 'Antagonista', 'Estabilizador de quadril'], correctAnswer: 1, explanation: 'O Tríceps auxilia na extensão de cotovelo, enquanto o Peitoral Maior é o Agonista do ombro.' },
  { id: 21, category: 'Cinesiologia', question: 'O movimento que afasta a perna da linha mediana do corpo é chamado de:', options: ['Adução', 'Flexão', 'Abdução', 'Rotação'], correctAnswer: 2, explanation: 'Abdução é afastar do eixo central.' },
  { id: 22, category: 'Cinesiologia', question: 'Na cadeira flexora (posterior de coxa), qual é o movimento da articulação do tornozelo se for usar a panturrilha em isometria?', options: ['Flexão Plantar', 'Dorsiflexão', 'Eversão', 'Inversão'], correctAnswer: 0, explanation: 'Flexão plantar aumenta o estímulo se executada em exercícios de panturrilha, porém na flexora mantê-la pode ativar o gastrocnêmio.' },
  { id: 23, category: 'Cinesiologia', question: 'Qual é considerado o músculo antagonista do grupo Quadríceps durante a extensão de joelho?', options: ['Tibial anterior', 'Sartório', 'Gastrocnêmio', 'Isquiotibiais'], correctAnswer: 3, explanation: 'Os isquiotibiais se opõem à ação do quadríceps na articulação do joelho.' },
  { id: 24, category: 'Cinesiologia', question: 'Uma contração muscular isométrica é...', options: ['Quando há variação de comprimento do músculo sem carga', 'Quando o músculo gera força máxima gerando movimento veloz', 'Quando o comprimento não muda enquanto gera tensão', 'Quando a fáscia relaxa'], correctAnswer: 2, explanation: 'Isometria refere-se à tensão sem alteração do arco de movimento.' },
  { id: 25, category: 'Cinesiologia', question: 'Durante um agachamento na subida (extensão do joelho e quadril), a contração dos glúteos e quadríceps é:', options: ['Excêntrica', 'Concêntrica', 'Isométrica', 'Isocinética'], correctAnswer: 1, explanation: 'Subir (vencer a carga) = Contração concêntrica.' },
  { id: 26, category: 'Cinesiologia', question: 'O que o movimento de Dorsiflexão faz?', options: ['Aponta a ponta do pé para o alto.', 'Aponta a ponta do pé para baixo como uma bailarina.', 'Traz o ombro até a orelha.', 'Roda a perna para fora.'], correctAnswer: 0, explanation: 'Dorsiflexão é a ação de levantar os dedos do pé para cima em direção à canela.' },
  { id: 27, category: 'Cinesiologia', question: 'O oposto da Dorsiflexão (apontar dedos para o chão) se chama:', options: ['Eversão', 'Inversão', 'Flexão Plantar', 'Rotação Axial'], correctAnswer: 2, explanation: 'Flexão plantar (como ficar na ponta do pé).' },
  { id: 28, category: 'Cinesiologia', question: 'Eversão no tornozelo é o movimento que:', options: ['Vira a sola do pé para fora (distante do plano mediano).', 'Vira a sola do pé para dentro.', 'Dobra os dedos.', 'Estende os dedos.'], correctAnswer: 0, explanation: 'Eversão gira a planta do pé lateralmente.' },
  { id: 29, category: 'Cinesiologia', question: 'Na rosca concentrada para bíceps, qual articulação deve ser o principal eixo fixo?', options: ['Ombro', 'Cotovelo', 'Punho', 'Radioulnar'], correctAnswer: 1, explanation: 'O cotovelo apoia-se na perna agindo como o pivô, gerando flexão de cotovelo puramente.' },
  { id: 30, category: 'Cinesiologia', question: 'Uma alavanca de Terceira Classe no corpo humano é mais associada à:', options: ['Mecânica onde a Força está entre a Resistência e o Apoio (Eixo).', 'Mecânica onde a Resistência está entre o Apoio e a Força.', 'Mecânica como mover a cabeça no pescoço.', 'Alavanca do Tríceps no cotovelo.'], correctAnswer: 0, explanation: 'Terceira classe (interpotente) = como o bíceps puxando o antebraço. A força puxa o osso entre a carga da mão e a junta do cotovelo.' },
  
  // Músculos
  { id: 31, category: 'Anatomia Muscular', question: 'Qual conjunto é formado por Reto Femoral, Vasto Lateral, Vasto Medial e Vasto Intermédio?', options: ['O Bíceps sural', 'O Quadríceps', 'Os Isquiotibiais', 'Os Glúteos'], correctAnswer: 1, explanation: 'Esses 4 músculos formam a coxa anterior (Quadríceps).', explanationImage: quadricepsImg },
  { id: 32, category: 'Anatomia Muscular', question: 'O Bíceps Braquial possui quantas cabeças/porções?', options: ['Duas (Longa e Curta)', 'Apenas uma', 'Três (Longa, Lateral e Medial)', 'Quatro'], correctAnswer: 0, explanation: 'Bíceps = Bi (Duas) + Ceps (Cabeças).', explanationImage: bicepsBraquialImg },
  { id: 33, category: 'Anatomia Muscular', question: 'Os Isquiotibiais são responsáveis primariamente por qual função no joelho e quadril?', options: ['Levantar os ombros.', 'Extensão do joelho e rotação de tornozelo.', 'Flexão de quadril isoladamente.', 'Flexão do joelho e extensão do quadril.'], correctAnswer: 3, explanation: 'Músculos posteriores da coxa fletem o joelho e ajudam o glúteo estender o quadril.', explanationImage: isquiotibiaisImg },
  { id: 34, category: 'Anatomia Muscular', question: 'O Tríceps Sural é composto basicamente por:', options: ['Fibular longo e Tibial.', 'Sartório.', 'Gastrocnêmio e Sóleo.', 'Oblíquos.'], correctAnswer: 2, explanation: 'O tríceps sural é a panturrilha (Gastrocnêmios + Sóleo).', explanationImage: panturrilhasImg },
  { id: 35, category: 'Anatomia Muscular', question: 'Na execução do Levantamento Terra, o Ereto Espinhal atua principalmente como:', options: ['Relaxado totalmente.', 'Flexor de cotovelo.', 'Estabilizador e extensor da coluna vertebral.', 'Adutor da escápula.'], correctAnswer: 2, explanation: 'Contrai fortemente em isometria para manter a coluna ereta.', explanationImage: eretoEspinhaImg },
  { id: 36, category: 'Anatomia Muscular', question: 'Qual é o maior músculo do corpo (em volume) e principal extensor do quadril?', options: ['Latíssimo do dorso', 'Glúteo Máximo', 'Quadríceps', 'Peitoral Maior'], correctAnswer: 1, explanation: 'O Glúteo Máximo tem força e tamanho consideráveis para extensão e abdução.', explanationImage: gluteosImg },
  { id: 37, category: 'Anatomia Muscular', question: 'O músculo Latíssimo do Dorso é popularmente conhecido como:', options: ['Trapézio', 'Bíceps', 'Asa das costas / Grande dorsal', 'Deltóide Posterior'], correctAnswer: 2, explanation: 'Devido ao seu leque lateral grande.', explanationImage: dorsaisImg },
  { id: 38, category: 'Anatomia Muscular', question: 'O grupamento do Peitoral é subdividido anatomicamente em:', options: ['Porção Ulnar e Radial.', 'Peitoral Maior e Peitoral Menor.', 'Anterior, Posterior e Transverso.', 'Vasto e Reto.'], correctAnswer: 1, explanation: 'Temos o Peitoral Maior (superficial e grande) e o Menor (profundo).', explanationImage: peitoralImg },
  { id: 39, category: 'Anatomia Muscular', question: 'Músculos abdominais profundos responsáveis por funcionar como um cinto (cinta modeladora natural) do tronco:', options: ['Reto do Abdômen', 'Transverso do Abdômen', 'Eretores da espinha', 'Serrátil anterior'], correctAnswer: 1, explanation: 'O Transverso do Abdômen envolve como uma cinta e quando fortalecido segura a linha da cintura estabilizando o core.', explanationImage: abdomenImg },
  { id: 40, category: 'Anatomia Muscular', question: 'O Trapézio é comumente dividido em:', options: ['Anterior e Posterior', 'Superior, Médio e Inferior', 'Cabeça longa e curta', 'Lateral e Medial'], correctAnswer: 1, explanation: 'As fibras trapézio descendem, vão horizontais e ascendem (superior/médio/inferior).', explanationImage: trapezioImg },
  
  // Mistos Extra (Exercícios e Aparelhos)
  { id: 41, category: 'Exercícios', question: 'No Aparelho Peck Deck (Voador), o músculo motor principal é:', options: ['Trapézio Superior', 'Peitoral Maior', 'Latíssimo do Dorso', 'Tríceps Braquial'], correctAnswer: 1, explanation: 'O movimento cruzado da frente ativa os peitorais (Adução horizontal de ombros).', explanationImage: peitoralImg },
  { id: 42, category: 'Exercícios', question: 'Exercício "Stiff" enfatiza principalmente trabalhar qual cadeia muscular?', options: ['Cadeia Anterior da Coxa', 'Cadeia Posterior (Isquiotibiais e Glúteo)', 'Banda iliotibial', 'Deltoides'], correctAnswer: 1, explanation: 'Por focar bastante em extensão de quadril o Stiff alonga fortemente cadeia posterior.', explanationImage: isquiotibiaisImg },
  { id: 43, category: 'Cinesiologia', question: 'Qual ação o Bíceps Braquial faz além de fletir o cotovelo?', options: ['Pronar o antebraço', 'Supinar o antebraço (virar a palma para cima)', 'Extensão do ombro', 'Rotação lateral no úmero'], correctAnswer: 1, explanation: 'O Bíceps Braquial é um poderoso supinador do rádio (ante-braço).', explanationImage: bicepsBraquialImg },
  { id: 44, category: 'Anatomia Muscular', question: 'O músculo Serrátil Anterior é conhecido assim porque:', options: ['Puxa como serrote o tendão patelar', 'Apresenta formato de borda de faca (serras) perto das costelas laterais', 'Prende a espinha', 'Sobra após a remoção da clavícula'], correctAnswer: 1, explanation: 'Localizado sob as axilas parecendo dentes de serra, muito visto em boxeadores.' },
  { id: 45, category: 'Anatomia Muscular', question: 'Se estou fazendo remada com pegada bem fechada neutra (Triângulo), atinjo perfeitamente qual porção grande das costas?', options: ['Latíssimo do dorso', 'Infraespinhoso', 'Bíceps longo', 'Trapézio Superior isolado'], correctAnswer: 0, explanation: 'A tração em linha anteroposterior junto ao corpo enfatiza latíssimo dorso e romboides.', explanationImage: dorsaisImg },
  { id: 46, category: 'Cinesiologia', question: 'Qual é um risco biomecânico em um Agachamento Profundo com a coluna retrovertida (hip print pelvico, "butt wink")?', options: ['Aumento excessivo do quadríceps', 'Esmagamento ou protusão/herniação dos discos intervertebrais lombares', 'Ruptura no ligamento colateral lateral do joelho', 'Cãibra imediata na panturrilha'], correctAnswer: 1, explanation: 'O arredondamento da lombar transfere a carga direto para o disco causando risco discal.', explanationGif: 'https://fitcron.com/wp-content/uploads/2021/04/00441301-Barbell-Good-Morning_Thighs_720.gif' },
  { id: 47, category: 'Exercícios', question: 'Cadeira Abdutora serve para:', options: ['Ativação isolada de Quadríceps', 'Ativação direcionada aos Glúteos Médio/Mínimo (Lateral do glúteo)', 'Tonificar Adutores da perna interna', 'Descansar o tibial posterior'], correctAnswer: 1, explanation: 'Abdução do quadril = trabalho intenso em glúteo médio.', explanationImage: gluteosImg },
  { id: 48, category: 'Anatomia Muscular', question: 'Deltoides são os músculos protetores envoltórios de qual articulação principal?', options: ['Quadril', 'Ombro (Glenoumeral)', 'Cotovelo', 'Arco Costal'], correctAnswer: 1, explanation: 'Ombro. O deltoide é como uma "ombreira".', explanationImage: deltoideImg },
  { id: 49, category: 'Cinesiologia', question: 'O movimento de empurrar verticalmente acima da cabeça (Desenvolvimento), usa predominantemente:', options: ['Deltoides parte anterior/média e Tríceps Braquial', 'Peitoral e Bíceps', 'Glúteo Médio e Trapézio inferior', 'Tibial anterior.'], correctAnswer: 0, explanation: 'Elevação frontal/lateral vertical utiliza fortemente Deltoides e o movimento de cotovelo usa os tríceps.' },
  { id: 50, category: 'Pratique', question: 'Na Pratique, um pilar fundamental da retenção é?', options: ['Desestimular clientes idosos', 'Acompanhamento constante, empatia e montagem correta de séries (Atendimento)', 'Ter todas as esteiras equipadas com Netflix, apenas.', 'Não permitir o uso do sanitário.'], correctAnswer: 1, explanation: 'Relacionamento com o cliente garante a manutenção dele!' },
  
  // Extra para chegar em um banco confortável de dados para sorteio.  
  { id: 51, category: 'Anatomia Muscular', question: 'Quais músculos compõem o manguito rotador do ombro?', options: ['Supraspinhal, Infraespinhal, Redondo Menor e Subescapular', 'Bíceps, Tríceps, Deltoide, Coracobraquial', 'Peitoral maior, menor, Serrátil e Trapézio', 'Gastrocnêmio e Flexores plantares'], correctAnswer: 0, explanation: 'Estes quatro são essenciais para estabilizar e rodar o ombro.' },
  { id: 52, category: 'Anatomia Muscular', question: 'O que é o músculo Rombóide e onde se localiza?', options: ['Nas extremidades dos dedos (unhas)', 'No peito', 'Nas costas, deitado abaixo e entre o Trapézio fixando a Escápula', 'Na parte anterior da perna'], correctAnswer: 2, explanation: 'Os romboides (maior, menor) retraem e unem as escápulas contra a coluna.' },
  { id: 53, category: 'Exercícios', question: 'Qual é considerado o rei dos exercícios por mobilizar quase todo o corpo num só gesto?', options: ['Elevação plantar', 'Cadeira Abdutora', 'Levantamento Terra (Deadlift)', 'Encolhimento de Ombros'], correctAnswer: 2, explanation: 'Usa a cadeia posterior inteira, antebraço (pegada), abdominais, ombros para estabilizar.' },
  { id: 54, category: 'Planos Anatômicos', question: 'Os abdominais laterais e oblíquos atuam muito fortemente para impedir, ou realizar, o movimento no plano:', options: ['Rotacional / Transversal (torções de tronco)', 'Frontal apenas', 'Eixo radial puro', 'Cranial puro'], correctAnswer: 0, explanation: 'Enquanto o reto encolhe de frente (sagital), oblíquos giram a caixa torácica no bloco transversal.' },
  { id: 55, category: 'Exercícios', question: 'O agachamento Búlgaro é famoso por ser um movimento do tipo:', options: ['Isolado para Glúteo máximo unicamente', 'Unilateral / Assimetricamente dominante para focar mais profundamente na estrutura inferior (Coxas/Glúteos)', 'Exclusivo focado para panturrilha', 'Pliométrico'], correctAnswer: 1, explanation: 'Por estabilizar numa perna só, recruta intensamente glúteos de estabilização e quadríceps da perna de apoio.' },
  { id: 56, category: 'Anatomia Muscular', question: 'Qual é a função primordial do Músculo Sartório?', options: ['Estender o ombro', 'Flexionar os dedos do pé', 'O mais longo do corpo cruza coxa - Flete Coxa e Flete/gira Joelho int.', 'Mastigação'], correctAnswer: 2, explanation: 'Sartório é o grandão superficial em S na perna usado pra "bater o tornozelo na bola de chapa" - flexiona e gira lateral o quadril.' },
  
  // Perguntas Analíticas com Imagem
  { id: 57, category: 'Análise Biomecânica', question: 'Analisando o movimento na imagem, qual é o grupamento muscular predominante exercitado (Agonista)?', gif: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Bench-Press.gif', options: ['Dorsais e lombar', 'Peitoral Maior e Tríceps Braquial', 'Isquiotibiais e Glúteos', 'Bíceps e Antebraço'], correctAnswer: 1, explanation: 'A ilustração é do Supino Reto, movimento basista de "empurrar" que trabalha inteiramente o grupamento do Peitoral, com apoio forte dos Deltoides anteriores e Tríceps.' },
  { id: 58, category: 'Análise Biomecânica', question: 'Observe a execução. Qual plano anatômico e movimento principal estão sendo realizados pelo quadril e pelos joelhos mecânicos?', gif: 'https://www.hipertrofia.org/blog/wp-content/uploads/2023/07/bodyweight-squat.gif', options: ['Plano Transversal / Rotação Externa', 'Plano Frontal / Abdução de pernas', 'Plano Sagital / Flexão e Extensão', 'Eixo Longitudinal (Puro)'], correctAnswer: 2, explanation: 'O gif mostra o Agachamento (Squat), exercício clássico inteiramente no Plano Sagital que flexiona (desce) e estende (sobe) ativando quadríceps e glúteos.' },
  { id: 59, category: 'Cinesiologia e Movimento', question: 'No aparelho mostrado, qual o principal responsável por puxar (fletir) e tracionar o peso da alavanca?', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/pernas-flexao-de-pernas-na-maquina.gif', options: ['Glúteos e adutores', 'Tríceps Surais (Panturrilhas)', 'Quadríceps femoral', 'Isquiotibiais (Posterior de Coxa)'], correctAnswer: 3, explanation: 'O gif exibe a famosa Mesa Flexora, e a flexão de perna atinge em cheio os três músculos que formam os isquiotibiais.' },
  { id: 60, category: 'Análise Biomecânica', question: 'Qual é a ação do tríceps braquial observada neste tradicional exercício feito em polia?', gif: 'https://media.tenor.com/mbebKudZjxYAAAAM/tr%C3%ADceps-pulley.gif', options: ['Elevação rotacional de ombro', 'Dorsiflexão manual', 'Extensão de cotovelo concêntrica na descida', 'Isometria de trapézio'], correctAnswer: 2, explanation: 'O Tríceps Corda/Pulley utiliza justamente a expansão de cotovelo, empurrando a carga até alinhar o braço no plano focal.' },
  { id: 61, category: 'Cinesiologia e Movimento', question: 'O movimento do puxador (Pulldown) aciona qual plano e o seu motor predominante é qual músculo?', gif: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Lat-Pulldown.gif', options: ['Plano Frontal - Latíssimo do Dorso ("Asas")', 'Plano Sagital - Peitoral Maior', 'Plano Transversal - Sustentação Paravertebral', 'Plano Obliquo - Glúteos'], correctAnswer: 0, explanation: 'A Puxada Alta frontal (pegada aberta) puxa os cotovelos num plano frontal descendo lateralmente aos flancos do corpo contraindo dorsais.' },
  { id: 62, category: 'Análise Biomecânica', question: 'A elevação dos pesos usando os ombros acontece dentro de qual plano funcional (divisão do corpo) e trabalha qual região?', gif: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/ombros-elevacao-lateral-de-ombros-com-halteres.gif', options: ['Plano Sagital focando Deltoide Anterior', 'Plano Frontal provocando Abdução para Deltoide Medial', 'Plano Transversal - Deltóide Posterior e Costas largas', 'Isometria do Peitoral'], correctAnswer: 1, explanation: 'A temida Elevação Lateral movimenta os braços afastando da linha média. Como correm lateralmente ao corpo, a secção cortada visual desse movimento é a do Plano Frontal.' },
  { id: 63, category: 'Pratique', question: 'Em que ano a Pratique Fitness foi fundada, em qual local e por quem?', options: ['2002, Bairro Guarani (BH), por Tadeu Madureira', '2010, Savassi (BH), por Lucas Madureira', '1998, Rio de Janeiro, por Jorge Paulo Lemann', '2005, São Paulo, por Abilio Diniz'], correctAnswer: 0, explanation: 'A Pratique foi fundada em 2002 no Bairro Guarani em Belo Horizonte por Tadeu Madureira.' },
  { id: 110, category: 'Pratique', question: 'Quem é o atual CEO da rede Pratique Fitness?', options: ['Tadeu Madureira', 'Harley Tadeu (Tadeu Pratique)', 'Abilio Diniz', 'Jorge Paulo Lemann'], correctAnswer: 1, explanation: 'Harley Tadeu, conhecido como Tadeu Pratique, é o atual CEO da rede.' },
  { id: 111, category: 'Pratique', question: 'Atualmente (2025/2026), a Pratique possui aproximadamente quantas unidades em funcionamento?', options: ['Mais de 50', 'Mais de 100', 'Mais de 150', 'Cerca de 20'], correctAnswer: 2, explanation: 'A rede já ultrapassou a marca de 150 unidades em funcionamento.' },
  { id: 112, category: 'Pratique', question: 'Além do Brasil, em quais outros países a Pratique Fitness possui presença ou expansão?', options: ['Apenas no Brasil', 'USA, Argentina e Paraguai', 'USA e Portugal', 'Argentina e Chile'], correctAnswer: 1, explanation: 'A Pratique expandiu internacionalmente para os Estados Unidos, Argentina e Paraguai.' },
  { id: 113, category: 'Pratique', question: 'Qual o nome da metodologia exclusiva aplicada em todas as modalidades da Pratique?', options: ['SmartGym', 'PowerGym', 'FitMethod', 'PratiqueWay'], correctAnswer: 1, explanation: 'A metodologia oficial da rede é chamada de PowerGym.' },
  { id: 114, category: 'Pratique', question: 'Qual o número aproximado de alunos ativos em toda a rede Pratique atualmente?', options: ['100.000', '150.000', 'Mais de 230.000', '500.000'], correctAnswer: 2, explanation: 'A rede conta com mais de 230.000 alunos ativos.' },
  { id: 115, category: 'Pratique', question: 'Quantos colaboradores (profissionais) fazem parte do time Pratique hoje?', options: ['Cerca de 1.000', 'Mais de 4.755', 'Cerca de 2.500', 'Menos de 500'], correctAnswer: 1, explanation: 'O time Pratique é composto por mais de 4.755 colaboradores.' },
  { id: 116, category: 'Pratique', question: 'Qual o nome do projeto social/ESG da Pratique que visa acessibilidade ao fitness?', options: ['Pratique Solidária', 'Social Saver', 'Academia para Todos', 'Saúde na Rua'], correctAnswer: 1, explanation: 'O projeto focado em impacto social e acessibilidade é o Social Saver.' },
  { id: 117, category: 'Pratique', question: 'Qual destes NÃO é um dos valores oficiais da Pratique Fitness?', options: ['Proatividade', 'Simpatia', 'Competitividade Agressiva', 'Paixão por Saúde'], correctAnswer: 2, explanation: 'Os valores são: Proatividade, Simpatia, Trabalho em Equipe e Paixão por Saúde. Competitividade agressiva não faz parte da cultura acolhedora.' },
  { id: 118, category: 'Pratique', question: 'O que significa a sigla CORE na metodologia de atendimento da Pratique?', options: ['Circular para criar Oportunidade de Restaurar e Elogiar', 'Correr, Orientar, Reabilitar e Estudar', 'Centro de Operações e Resultados Estratégicos', 'Controle, Ordem, Respeito e Ética'], correctAnswer: 0, explanation: 'CORE significa: Circular para criar Oportunidade de Restaurar e Elogiar.' },
  { id: 119, category: 'Pratique', question: 'Dentro do padrão de execução de exercícios, o que significa a sigla PAC?', options: ['Peso, Alinhamento e Carga', 'Postura, Amplitude e Cadência', 'Preparo, Ação e Conclusão', 'Potência, Agilidade e Coordenação'], correctAnswer: 1, explanation: 'PAC refere-se a: Postura, Amplitude e Cadência.' },
  { id: 120, category: 'Pratique', question: 'Qual a técnica de feedback (correção) utilizada pelos professores da Pratique, representada pela sigla ERE?', options: ['Ensinar, Relembrar e Exercitar', 'Explicar, Revisar e Entregar', 'Elogiar, Restaurar e Elogiar', 'Escutar, Responder e Evoluir'], correctAnswer: 2, explanation: 'ERE significa: Elogiar (o que está bom), Restaurar (corrigir o erro) e Elogiar (motivar).' },

  // Anamnese
  { id: 64, category: 'Anamnese', question: 'Qual o principal objetivo da Anamnese na avaliação física?', options: ['Vender suplementos para o aluno', 'Identificar restrições médicas, histórico de lesões e objetivos do aluno', 'Apenas saber o nome e a idade', 'Definir o valor da mensalidade'], correctAnswer: 1, explanation: 'A anamnese serve para entender o perfil de saúde e histórico do aluno para prescrever exercícios com segurança.' },
  { id: 65, category: 'Anamnese', question: 'O questionário PAR-Q é utilizado para:', options: ['Avaliar a força máxima', 'Identificar a necessidade de consulta médica antes de iniciar atividades físicas', 'Medir o percentual de gordura', 'Contar as calorias ingeridas'], correctAnswer: 1, explanation: 'O PAR-Q (Physical Activity Readiness Questionnaire) é um filtro para identificar prontidão para atividade física.' },

  // Bioenergética
  { id: 66, category: 'Bioenergética', question: 'Qual o sistema energético predominante em um "sprint" (tiro de velocidade máxima) de 10 segundos?', options: ['Oxigênio (Sistema Oxidativo)', 'Glicogênio (Glicolítico)', 'ATP-CP (Fosfagênio)', 'Gorduras'], correctAnswer: 2, explanation: 'Para esforços de curtíssima duração e altíssima intensidade, o corpo utiliza a reserva imediata de ATP e Creatina Fosfato.' },
  { id: 67, category: 'Bioenergética', question: 'Durante um treino de musculação com séries de 8 a 12 repetições, qual a principal fonte de energia utilizada?', options: ['Oxigênio', 'Glicogênio Muscular', 'Proteínas', 'Apenas ATP'], correctAnswer: 1, explanation: 'O sistema glicolítico (que usa glicogênio) é o predominante em esforços de média duração e alta intensidade.' },
  { id: 68, category: 'Bioenergética', question: 'Em uma caminhada de 40 minutos em ritmo leve, qual o sistema energético predominante?', options: ['ATP-CP', 'Glicogênio', 'Oxigênio (Sistema Oxidativo)', 'Nenhuma das anteriores'], correctAnswer: 2, explanation: 'Atividades de longa duração e baixa intensidade utilizam o sistema aeróbio (oxidativo), que depende da presença de oxigênio.' },

  // Validação Pulseira Verde (Baseado no Google Form)
  { id: 69, category: 'Pulseira Verde', question: 'SUPINO RETO VERTICAL - PLANO:', options: ['SAGITAL', 'TRANSVERSO', 'FRONTAL'], correctAnswer: 1, explanation: 'O Supino Reto Vertical ocorre no plano Transversal (Horizontal).' },
  { id: 70, category: 'Pulseira Verde', question: 'SUPINO RETO VERTICAL - MOVIMENTO:', options: ['ABDUÇÃO DOS OMBROS E EXTENSÃO DE COTOVELOS', 'ADUÇÃO DOS OMBROS E FLEXÃO DE COTOVELOS', 'ADUÇÃO DOS OMBROS E EXTENSÃO DE COTOVELOS', 'ABDUÇÃO DOS OMBROS E FLEXÃO DE COTOVELOS'], correctAnswer: 2, explanation: 'O movimento é Adução Horizontal de Ombros e Extensão de Cotovelos.' },
  { id: 71, category: 'Pulseira Verde', question: 'SUPINO RETO VERTICAL - GRUPO MUSCULAR:', options: ['PEITORAL MAIOR, ANTERIOR DE DELTOIDE E TRICEPS BRAQUIAL', 'PEITORAL MAIOR POSTERIOR DE DELTOIDE E BICEPS BRAQUIAL', 'GRANDE DORSAL ANTERIOR DE DELTOIDE E TRICEPS BRAQUIAL', 'SUPERIOR CRAVICULAR, ANTERIOR DE DELTOIDE E BICEPS BRAQUIAL'], correctAnswer: 0, explanation: 'Os músculos envolvidos são Peitoral Maior, Deltoide Anterior e Tríceps Braquial.' },
  { id: 72, category: 'Pulseira Verde', question: 'SUPINO RETO VERTICAL - SUBSTITUIÇÃO:', options: ['PULLEY MAQUINA', 'DESENVOLVIMENTO DE OMBROS', 'FLEXÃO DE BRAÇO', 'TRICEPS NO BANCO'], correctAnswer: 2, explanation: 'A Flexão de Braço é um exercício equivalente que trabalha o mesmo grupo muscular.' },
  { id: 73, category: 'Pulseira Verde', question: 'DESENVOLVIMENTO COM HALTERES - PLANO:', options: ['TRANSVERSO', 'FRONTAL', 'SAGITAL'], correctAnswer: 1, explanation: 'O Desenvolvimento (abdução) ocorre no plano Frontal.' },
  { id: 74, category: 'Pulseira Verde', question: 'DESENVOLVIMENTO COM HALTERES - MOVIMENTO:', options: ['ABDUÇÃO DE OMBROS E FLEXÃO DE COTOVELOS', 'ADUÇÃO DE OMBROS E EXTENSÃO DE COTOVELOS', 'ADUÇÃO DE OMBROS E FLEXÃO DE COTOVELOS', 'ABDUÇÃO DE OMBROS E EXTENSÃO DE COTOVELOS'], correctAnswer: 3, explanation: 'O movimento é Abdução de Ombros e Extensão de Cotovelos.' },
  { id: 75, category: 'Pulseira Verde', question: 'DESENVOLVIMENTO COM HALTERES - GRUPO MUSCULAR:', options: ['PEITORAL MAIOR', 'DELTOIDE', 'GRANDE DORSAL', 'TRICEPS BRAQUIAL'], correctAnswer: 1, explanation: 'O grupo muscular principal é o Deltoide.' },
  { id: 76, category: 'Pulseira Verde', question: 'DESENVOLVIMENTO COM HALTERES - SUBSTITUIÇÃO:', options: ['ELEVAÇÃO LATERAL', 'TRICEPS BANCO', 'REMADA ALTA COM HALTERES', 'ROSCA DIRETA COM BARRA'], correctAnswer: 2, explanation: 'A Remada Alta também trabalha Deltoides e Trapézio, sendo uma opção de substituição.' },
  { id: 77, category: 'Pulseira Verde', question: 'PULLEY FRONTAL PRONADA ABERTA - PLANO:', options: ['SAGITAL', 'TRANSVERSO', 'FRONTAL'], correctAnswer: 2, explanation: 'A Puxada Aberta (adução) ocorre no plano Frontal.' },
  { id: 78, category: 'Pulseira Verde', question: 'PULLEY FRONTAL PRONADA ABERTA - MOVIMENTO:', options: ['ABDUÇÃO DOS OMBROS E FLEXÃO DE COTOVELOS', 'ADUÇÃO DOS OMBROS E EXTENSÃO DE COTOVELOS', 'ABDUÇÃO DOS OMBROS E EXTENSÃO DE COTOVELOS', 'ADUÇÃO DOS OMBROS E FLEXÃO DE COTOVELOS'], correctAnswer: 3, explanation: 'O movimento é Adução de Ombros e Flexão de Cotovelos.' },
  { id: 79, category: 'Pulseira Verde', question: 'PULLEY FRONTAL PRONADA ABERTA - GRUPO MUSCULAR:', options: ['GRANDE DORSAL E BICEPS FEMORAL', 'TRAPEZIO E BICEPS BRAQUIAL', 'DELTOIDE E TRICEPS SURAL', 'GRANDE DORSAL E BICEPS BRAQUIAL'], correctAnswer: 3, explanation: 'Os principais músculos são Grande Dorsal (Latíssimo) e Bíceps Braquial.' },
  { id: 80, category: 'Pulseira Verde', question: 'PULLEY FRONTAL PRONADA ABERTA - SUBSTITUIÇÃO:', options: ['SUPINO RETO VERTICAL', 'DESENVOLVIMENTO MAQUINA', 'BARRA FIXA PRONADA ABERTA', 'REMADA ALTA COM HALTERES'], correctAnswer: 2, explanation: 'A Barra Fixa é o exercício de peso corporal equivalente à Puxada.' },
  { id: 81, category: 'Pulseira Verde', question: 'ROSCA DIRETA COM HALTERES - PLANO:', options: ['TRANSVERSO', 'SAGITAL', 'FRONTAL'], correctAnswer: 1, explanation: 'A flexão de cotovelo ocorre no plano Sagital.' },
  { id: 82, category: 'Pulseira Verde', question: 'ROSCA DIRETA COM HALTERES - MOVIMENTO:', options: ['EXTENSÃO DE COTOVELOS', 'FLEXÃO DE COTOVELOS E FLEXÃO DE DELTOIDE', 'FLEXÃO DE COTOVELOS', 'EXTENSÃO DE COTOVELO E EXTENSÃO DE DELTOIDE'], correctAnswer: 2, explanation: 'O movimento principal é a Flexão de Cotovelos.' },
  { id: 83, category: 'Pulseira Verde', question: 'ROSCA DIRETA COM HALTERES - GRUPO MUSCULAR:', options: ['TRICEPS BRAQUIAL E DELTOIDE', 'BICEPS BRAQUIAL', 'BICEPS BRAQUIAL E DELTOIDE', 'TRICEPS BRAQUIAL'], correctAnswer: 1, explanation: 'O grupo muscular principal é o Bíceps Braquial.' },
  { id: 84, category: 'Pulseira Verde', question: 'ROSCA DIRETA COM HALTERES - SUBSTITUIÇÃO:', options: ['ROSCA DIRETA NO CROSS OVER', 'TRICEPS BANCO', 'TRICEPS FRANCES', 'ELEVAÇÃO FRONTAL'], correctAnswer: 0, explanation: 'A Rosca no Cross é uma variação direta para o mesmo grupo.' },
  { id: 85, category: 'Pulseira Verde', question: 'REMADA ALTA COM HALTERES - PLANO:', options: ['SAGITAL', 'TRANSVERSO', 'FRONTAL'], correctAnswer: 2, explanation: 'A Remada Alta (abdução) ocorre no plano Frontal.' },
  { id: 86, category: 'Pulseira Verde', question: 'REMADA ALTA COM HALTERES - MOVIMENTO:', options: ['ABDUÇÃO DOS OMBROS E EXTENSÃO DOS COTOVELOS', 'ADUÇÃO DOS OMBROS E FLEXÃO DE COTOVELOS', 'ABDUÇÃO DOS OMBROS E FLEXÃO DE COTOVELOS', 'ADUÇÃO DOS OMBROS E EXTENSÃO DE COTOVELOS'], correctAnswer: 2, explanation: 'O movimento é Abdução de Ombros e Flexão de Cotovelos.' },
  { id: 87, category: 'Pulseira Verde', question: 'REMADA ALTA COM HALTERES - GRUPO MUSCULAR:', options: ['TRAPEZIO E TRICEPS BRAQUIAL', 'DELTOIDE E PEITORAL MAIOR', 'DELTOIDE, TRAPEZIO E BICEPS BRAQUIAL', 'DELTOIDE E TRICEPS SURAL'], correctAnswer: 2, explanation: 'Envolve Deltoide, Trapézio e Bíceps Braquial.' },
  { id: 88, category: 'Pulseira Verde', question: 'REMADA ALTA COM HALTERES - SUBSTITUIÇÃO:', options: ['ELEVAÇÃO FRONTAL COM HALTERES', 'ROSCA SCOTT', 'PULLEY ARTICULADO', 'ENCOLHIMENTO DE OMBROS COM HALTERES'], correctAnswer: 3, explanation: 'O Encolhimento é uma opção para trabalhar a porção superior do Trapézio.' },
  { id: 89, category: 'Pulseira Verde', question: 'BANCO EXTENSOR - PLANO:', options: ['FRONTAL', 'SAGITAL', 'TRANSVERSO'], correctAnswer: 1, explanation: 'A extensão de joelho ocorre no plano Sagital.' },
  { id: 90, category: 'Pulseira Verde', question: 'BANCO EXTENSOR - MOVIMENTO:', options: ['FLEXÃO DE JOELHOS', 'ABDUÇÃO DO QUADRIL', 'EXTENSÃO DO JOELHO', 'ADUÇÃO DO QUADRIL'], correctAnswer: 2, explanation: 'O movimento é a Extensão do Joelho.' },
  { id: 91, category: 'Pulseira Verde', question: 'BANCO EXTENSOR - GRUPO MUSCULAR:', options: ['VASTO MEDIAL, VASTO LATERAL, VASTO INTERMEDIO E BICEPS FEMORAL', 'ISQUIOS TIBIAIS', 'ADUTORES', 'VASTO MEDIAL, VASTO LATERAL, VASTO INTERMEDIO E RETO FEMORAL'], correctAnswer: 3, explanation: 'O grupo é o Quadríceps (Vastos e Reto Femoral).' },
  { id: 92, category: 'Pulseira Verde', question: 'BANCO EXTENSOR - SUBSTITUIÇÃO:', options: ['MESA FLEXORA', 'BANCO ABDUTOR', 'ELEVAÇÃO DE QUADRIL', 'FLEXÃO DE QUADRIL EM PE COM CANELEIRA'], correctAnswer: 3, explanation: 'Embora não seja idêntico, a Flexão de Quadril ativa o Reto Femoral, um dos componentes do quadríceps.' },
  { id: 93, category: 'Pulseira Verde', question: 'LEG 45° - PLANO:', options: ['FRONTAL', 'TRANSVERSO', 'SAGITAL'], correctAnswer: 2, explanation: 'Os movimentos de quadril e joelho ocorrem no plano Sagital.' },
  { id: 94, category: 'Pulseira Verde', question: 'LEG 45° - MOVIMENTO:', options: ['FLEXÃO DE JOELHOS E FLEXÃO DE QUADRIL', 'FLEXÃO DE QUADRIL E EXTENSÃO DE JOELHOS', 'EXTENSÃO DE JOELHOS E EXTENSÃO DE QUADRIL', 'EXTENSÃO DE QUADRIL E FLEXÃO DE JOELHOS'], correctAnswer: 2, explanation: 'Na fase concêntrica, ocorre Extensão de Joelhos e Extensão de Quadril.' },
  { id: 95, category: 'Pulseira Verde', question: 'LEG 45° - GRUPO MUSCULAR:', options: ['QUADRICEPS E GASTROCNÊMIOS', 'QUADRICEPS E GLUTEO MAXIMO', 'GLUTEO MEDIO E GLUTEO MINIMO', 'QUADRICEPS E ISQUIOS SURAIS'], correctAnswer: 1, explanation: 'O Leg 45° foca em Quadríceps e Glúteo Máximo.' },
  { id: 96, category: 'Pulseira Verde', question: 'LEG 45° - SUBSTITUIÇÃO:', options: ['BANCO FLEXOR', 'BANCO ABDUTOR', 'AGACHAMENTO NA BARRA GUIADA', 'FLEXÃO DE JOELHO EM PE COM CANELEIRA'], correctAnswer: 2, explanation: 'O Agachamento é o exercício multiarticular equivalente.' },
  { id: 97, category: 'Pulseira Verde', question: 'MESA FLEXORA - PLANO:', options: ['TRANSVERSO', 'FRONTAL', 'SAGITAL'], correctAnswer: 2, explanation: 'A flexão de joelho ocorre no plano Sagital.' },
  { id: 98, category: 'Pulseira Verde', question: 'MESA FLEXORA - MOVIMENTO:', options: ['EXTENSAO DE JOELHOS', 'EXTENSÃO DO QUADRIL E FLEXÃO DE JOELHOS', 'FLEXÃO DO QUADRIL E EXTENSÃO DE JOELHOS', 'FLEXÃO DE JOELHOS'], correctAnswer: 3, explanation: 'O movimento principal é a Flexão de Joelhos.' },
  { id: 99, category: 'Pulseira Verde', question: 'MESA FLEXORA - GRUPO MUSCULAR:', options: ['SEMITENDINOSO, SEMIMEMBRANOSO E BICEPS BRAQUIAL', 'VASTO LATERAL, VASTO MEDIAL, VASTO INTERMEDIO E RETO FEMORAL', 'SEMITENDINOSO, SEMIMEMBRANOSO E BICEPS FEMORAL', 'ADUTOR CURTO, ADUTOR LONGO, ADUTOR MAGNO'], correctAnswer: 2, explanation: 'O grupo é o dos Isquiotibiais (Posteriores de coxa).' },
  { id: 100, category: 'Pulseira Verde', question: 'MESA FLEXORA - SUBSTITUIÇÃO:', options: ['BANCO FLEXOR', 'AGACHAMENTO SUMO', 'ABDUÇÃO DE QUADRIL SOLO COM CANELEIRA', 'FLEXÃO DE QUADRIL EM PE COM CANELEIRA'], correctAnswer: 0, explanation: 'O Banco Flexor (Cadeira Flexora) é a variação sentada.' },
  { id: 101, category: 'Pulseira Verde', question: 'BANCO ADUTOR - PLANO:', options: ['SAGITAL', 'TRANSVERSO', 'FRONTAL'], correctAnswer: 2, explanation: 'A adução de quadril ocorre no plano Frontal.' },
  { id: 102, category: 'Pulseira Verde', question: 'BANCO ADUTOR - MOVIMENTO:', options: ['FLEXÃO DE JOELHOS', 'ABDUÇÃO DO QUADRIL', 'ADUÇÃO DO QUADRIL', 'EXTENSÃO DE JOELHOS'], correctAnswer: 2, explanation: 'O movimento é a Adução do Quadril.' },
  { id: 103, category: 'Pulseira Verde', question: 'BANCO ADUTOR - GRUPO MUSCULAR:', options: ['GLUTEO MEDIO E GLUTEO MINIMO', 'ADUTORES (LONGO, CURTO, MAGNO, GRACIL E PECTINEO)', 'ISQUIOS TIBIAIS', 'GLUTEO MAXIMO'], correctAnswer: 1, explanation: 'O grupo são os Adutores da coxa.' },
  { id: 104, category: 'Pulseira Verde', question: 'BANCO ADUTOR - SUBSTITUIÇÃO:', options: ['ABDUÇÃO DE QUADRIL (SOLO) COM CANELEIRA', 'ADUÇÃO DE QUADRIL (SOLO) COM CANELEIRA', 'ABDUÇÃO DE QUADRIL NO CROSS OVER', 'GLUTEO 3 APOIOS COM CANELEIRA'], correctAnswer: 1, explanation: 'A Adução de Quadril solo é a versão sem máquina.' },
  { id: 105, category: 'Pulseira Verde', question: 'BANCO ABDUTOR - PLANO:', options: ['TRANSVERSO', 'SAGITAL', 'FRONTAL'], correctAnswer: 2, explanation: 'A abdução de quadril ocorre no plano Frontal.' },
  { id: 106, category: 'Pulseira Verde', question: 'BANCO ABDUTOR - MOVIMENTO:', options: ['ADUÇÃO DE QUADRIL', 'FLEXÃO DE QUADRIL', 'ELEVAÇÃO DE QUADRIL', 'ABDUÇÃO DE QUADRIL'], correctAnswer: 3, explanation: 'O movimento é a Abdução de Quadril.' },
  { id: 107, category: 'Pulseira Verde', question: 'BANCO ABDUTOR - GRUPO MUSCULAR:', options: ['GLUTEO MAXIMO E GLUTEO MINIMO', 'VASTO LATERAL', 'VASTO MEDIAL', 'GLUTEO MEDIO E GLUTEO MINIMO'], correctAnswer: 3, explanation: 'Os principais músculos são Glúteo Médio e Mínimo.' },
  { id: 108, category: 'Pulseira Verde', question: 'BANCO ABDUTOR - SUBSTITUIÇÃO:', options: ['ABDUÇÃO DE QUADRIL (SOLO) COM CANELEIRA', 'GLUTEO MAQUINA 3 APOIOS', 'ADUÇÃO DE QUADRIL (SOLO) COM CANELEIRA', 'ADUÇÃO DE QUADRIL NO CROSS OVER'], correctAnswer: 0, explanation: 'A Abdução solo é a versão equivalente sem equipamento.' },

  { id: 109, category: 'Bioenergética', question: 'Qual sistema energético predominante de um maratonista durante a maior parte da prova?', options: ['FOSFAGÊNIO (ATP-CP)', 'OXIGÊNIO (SISTEMA OXIDATIVO)', 'GLICOGÊNIO (GLICOLÍTICO)', 'NÃO ESTUDEI O SUFICIENTE'], correctAnswer: 1, explanation: 'Maratonistas realizam atividades de longa duração onde o sistema aeróbio (Oxigênio) é o principal.' },

  // ==========================================
  // VALIDAÇÃO PULSEIRA VERMELHA (UniPower / Metodologia Power)
  // ==========================================
  {
    id: 201,
    category: 'Pulseira Vermelha',
    question: 'Na ciência do treinamento esportivo, qual a principal diferença conceitual entre "Carga" e "Peso"?',
    options: [
      'São termos rigorosamente sinônimos na musculação e nos exercícios resistidos.',
      'Peso é apenas um dos componentes da carga; carga refere-se ao estímulo total capaz de quebrar a homeostase.',
      'Carga é exclusiva de exercícios aeróbicos, enquanto peso é exclusivo do treinamento resistido.',
      'Peso mede a capacidade de recuperação e carga mede a massa do haltere.'
    ],
    correctAnswer: 1,
    explanation: 'A carga de treinamento é o estímulo total (que quebra a homeostase e gera nova adaptação). O peso utilizado é apenas uma das componentes que compõem a carga.'
  },
  {
    id: 202,
    category: 'Pulseira Vermelha',
    question: 'Quais são as cinco variáveis fundamentais que compõem a Carga de Treinamento?',
    options: [
      'Peso, Repetições, Séries, Descanso e Frequência Cardíaca.',
      'Volume, Intensidade, Duração, Frequência e Densidade.',
      'Carga, Potência, Força, Resistência e Velocidade.',
      'Postura, Amplitude, Cadência, Respiração e Equilíbrio.'
    ],
    correctAnswer: 1,
    explanation: 'As 5 variáveis da carga são: Volume (quantidade), Intensidade (% esforço), Duração (tempo), Frequência (vezes por período) e Densidade (relação esforço/pausa).'
  },
  {
    id: 203,
    category: 'Pulseira Vermelha',
    question: 'Qual é o erro conceitual comum na interpretação do Princípio da Individualidade Biológica?',
    options: [
      'Considerar que fatores genéticos determinam as respostas ao exercício.',
      'Achar que o princípio exige obrigatoriamente prescrever uma rotina isolada/exclusiva para cada pessoa (como personal trainer).',
      'Reconhecer que indivíduos diferentes têm limiares de dor e tolerância ao estresse divergentes.',
      'Acreditar que a motivação afeta o rendimento físico durante o treino.'
    ],
    correctAnswer: 1,
    explanation: 'O erro é associar o princípio à obrigação de prescrever treinos individuais exclusivos (inviável em esportes coletivos). O conceito real é que cada organismo responde de forma única à mesma carga.'
  },
  {
    id: 204,
    category: 'Pulseira Vermelha',
    question: 'Segundo a Síndrome de Adaptação Geral (SAG), qual magnitude de estímulo é necessária para gerar adaptação efetiva de performance e ganho de massa?',
    options: [
      'Estímulo Fraco (mantém a homeostase sem estresse).',
      'Estímulo Médio / Leve (ótimo para saúde geral, mas ineficaz para alta performance).',
      'Estímulo Forte (quebra a homeostase e gera microlesões teciduais controladas).',
      'Estímulo Muito Forte (ultrapassa a capacidade de regeneração imediata).'
    ],
    correctAnswer: 2,
    explanation: 'Apenas estímulos Fortes quebram a homeostase e causam microlesões controladas capazes de disparar o ganho de massa, VO2 máx e capacidade funcional.'
  },
  {
    id: 205,
    category: 'Pulseira Vermelha',
    question: 'No manejo inteligente da carga, por que um estímulo forte na segunda-feira pode se tornar prejudicial se repetido na sexta-feira com a mesma intensidade?',
    options: [
      'Porque a musculatura perde a memória motora durante a semana.',
      'Devido ao efeito acumulado de fadiga neuromuscular, sono e estresse ao longo da semana.',
      'Porque o metabolismo basal zera após 72 horas de treino.',
      'Porque os receptores musculares ficam imunes ao exercício.'
    ],
    correctAnswer: 1,
    explanation: 'O efeito acumulado da fadiga semanal transforma uma carga antes adequada em um estresse "muito forte", elevando o risco de sobretreinamento e lesão se não for dosada com prudência.'
  },
  {
    id: 206,
    category: 'Pulseira Vermelha',
    question: 'No Princípio da Sobrecarga, onde e quando ocorrem os reais ganhos fisiológicos de performance e massa muscular?',
    options: [
      'Durante a sessão de treino, quando as fibras musculares estão contraindo sob carga.',
      'Exclusivamente nos primeiros 5 minutos após o término do exercício.',
      'No período de recuperação e descanso, através da assimilação compensatória e supercompensação.',
      'Durante a ingestão imediata de pré-treino com cafeína.'
    ],
    correctAnswer: 2,
    explanation: 'Durante o treino só ocorrem depleção de substratos energéticos e danos teciduais. É na recuperação que o organismo reconstrói e atinge o nível superior (supercompensação).'
  },
  {
    id: 207,
    category: 'Pulseira Vermelha',
    question: 'Qual é o segredo técnico do Princípio da Continuidade para garantir uma curva ascendente e contínua de rendimento?',
    options: [
      'Aplicar uma nova sobrecarga antes que o corpo comece a se recuperar da sessão anterior.',
      'Aplicar o novo estímulo exatamente no ápice (pico) da curva de supercompensação.',
      'Aguardar pelo menos duas semanas entre treinos para ter certeza da recuperação total.',
      'Manter o mesmo peso e repetições durante todo o ano sem alterações.'
    ],
    correctAnswer: 1,
    explanation: 'O ponto ótimo é aplicar a nova carga no topo da curva de supercompensação. Intervalos muito longos causam perda da adaptação, e muito curtos causam queda no rendimento por fadiga.'
  },
  {
    id: 208,
    category: 'Pulseira Vermelha',
    question: 'Por que se recomenda alta frequência de treinos (4 a 5 vezes por semana) para alunos iniciantes na academia?',
    options: [
      'Porque iniciantes suportam estímulos muito fortes sem risco de lesão.',
      'Porque treinam com estímulos médios/leves, cuja supercompensação ocorre em poucas horas, além de consolidar o hábito.',
      'Porque seus estoques de glicogênio não se esgotam em treinos resistidos.',
      'Para levá-los rapidamente à falha muscular concêntrica.'
    ],
    correctAnswer: 1,
    explanation: 'Iniciantes realizam estímulos leves a médios (recuperação rápida em poucas horas), e a repetição frequente é essencial para fixar o hábito e a mudança de rotina.'
  },
  {
    id: 209,
    category: 'Pulseira Vermelha',
    question: 'Quais são os três pilares que determinam a prescrição correta no Princípio da Especificidade?',
    options: [
      'Gasto calórico, perda de água e percentual de gordura corporal.',
      'Sistema energético predominante, tipo de recrutamento das fibras musculares e cinesiologia/ângulos de movimento.',
      'Horário do treino, tipo de suplementação e tempo total da esteira.',
      'Número de repetições máximas, flexibilidade estática e peso na balança.'
    ],
    correctAnswer: 1,
    explanation: 'A especificidade exige alinhar: 1) Sistema energético predominante, 2) Tipo de fibra (rápida vs lenta) e 3) Cinesiologia e ângulos articulares do gesto motor.'
  },
  {
    id: 210,
    category: 'Pulseira Vermelha',
    question: 'Segundo o Princípio da Interdependência entre Volume e Intensidade, qual é a regra ao se aplicar uma nova sobrecarga?',
    options: [
      'Subir simultaneamente o peso máximo e dobrar o número de séries na mesma sessão.',
      'Volume e intensidade são grandezas inversamente proporcionais: ao aumentar um, deve-se manter ou diminuir o outro.',
      'A intensidade deve ser sempre o triplo do volume.',
      'O volume só pode ser manipulado após 6 meses ininterruptos de treino de força.'
    ],
    correctAnswer: 1,
    explanation: 'Volume e intensidade são inversamente proporcionais. Elevar ambos juntos sobrecarrega excessivamente o organismo, gerando alto risco de lesão.'
  },
  {
    id: 211,
    category: 'Pulseira Vermelha',
    question: 'Qual a ordem correta para aplicação da primeira sobrecarga na fase inicial de progressão de um aluno?',
    options: [
      '1º Aumento de peso ➔ 2º Diminuição do descanso ➔ 3º Repetições.',
      '1º Repetições ➔ 2º Quantidade de séries ➔ 3º Novos exercícios/duração ➔ 4º Intensidade (peso/velocidade).',
      '1º Intensidade máxima (1RM) ➔ 2º Séries ➔ 3º Repetições.',
      '1º Velocidade na esteira ➔ 2º Carga ➔ 3º Séries.'
    ],
    correctAnswer: 1,
    explanation: 'A regra de ouro é progredir as variáveis de volume primeiro (repetições ➔ séries ➔ exercícios) antes de subir a intensidade (peso/velocidade).'
  },
  {
    id: 212,
    category: 'Pulseira Vermelha',
    question: 'Qual é o tempo de recuperação ideal recomendado para estímulos fortes de alta intensidade (hipertrofia e força máxima) de um mesmo grupamento muscular?',
    options: [
      'Poucas horas (pode treinar o mesmo músculo no turno da noite).',
      '24 a 72 horas (média recomendada de 48 horas).',
      'Mais de 10 dias de repouso absoluto.',
      'Não há necessidade de intervalo se o aluno tiver menos de 30 anos.'
    ],
    correctAnswer: 1,
    explanation: 'Estímulos fortes exigem entre 24 a 72 horas de intervalo (média 48h) para regeneração tecidual, supercompensação e prevenção de lesões.'
  },
  {
    id: 213,
    category: 'Pulseira Vermelha',
    question: 'No sistema de alavancas do corpo humano, o que representam o Ponto de Apoio (Eixo), a Força Potente e a Força Resistente, respectivamente?',
    options: [
      'Tendões, Gordura corporal e Articulações.',
      'Articulações, Contração muscular (inserção no osso) e Carga externa / Peso corporal.',
      'Ossos longos, Sistema nervoso central e Aparelhos de musculação.',
      'Fibras rápidas, Fibras lentas e Gravidade.'
    ],
    correctAnswer: 1,
    explanation: 'O Eixo/Apoio é sempre a articulação; a Força Potente é gerada pela contração muscular no ponto de inserção; a Força Resistente é a carga ou peso corporal a ser superado.'
  },
  {
    id: 214,
    category: 'Pulseira Vermelha',
    question: 'Como se define a regra de ouro para classificar os tipos de alavancas (1ª, 2ª e 3ª classes)?',
    options: [
      'Pelo tamanho do osso envolvido no movimento.',
      'Pela identificação de qual componente (Eixo, Resistência ou Força) está localizado no MEIO.',
      'Pela quantidade de repetições realizadas na série.',
      'Pela velocidade da fase excêntrica do movimento.'
    ],
    correctAnswer: 1,
    explanation: 'A classificação depende estritamente do componente central: Interfixa (Eixo no meio), Inter-resistente (Resistência no meio) e Interpotente (Força no meio).'
  },
  {
    id: 215,
    category: 'Pulseira Vermelha',
    question: 'A extensão de cotovelo realizada pelo tríceps braquial é um exemplo clássico de qual tipo de alavanca?',
    options: [
      'Interpotente (3ª Classe).',
      'Inter-resistente (2ª Classe).',
      'Interfixa (1ª Classe).',
      'Alavanca helicoidal pura.'
    ],
    correctAnswer: 2,
    explanation: 'Na extensão de cotovelo, o eixo articular do cotovelo fica entre a força potente gerada no olécrano e a resistência da mão, caracterizando uma alavanca Interfixa (1ª Classe).'
  },
  {
    id: 216,
    category: 'Pulseira Vermelha',
    question: 'A flexão plantar (elevação de panturrilha) é um exemplo corporal de qual classe de alavanca?',
    options: [
      'Inter-resistente (2ª Classe), onde a resistência fica entre o eixo e a força potente.',
      'Interfixa (1ª Classe), onde o eixo fica no meio.',
      'Interpotente (3ª Classe), onde a força fica no meio.',
      'Alavanca nula sem vantagem mecânica.'
    ],
    correctAnswer: 0,
    explanation: 'A panturrilha opera como alavanca Inter-resistente (2ª classe): o peso corporal (resistência) atua entre o apoio dos dedos (eixo) e o tendão calcâneo (força), conferindo alta vantagem mecânica.'
  },
  {
    id: 217,
    category: 'Pulseira Vermelha',
    question: 'Qual é a classe de alavanca mais abundante e comum no corpo humano (ex: flexão de cotovelo pelo bíceps e abdução de ombro pelo deltoide)?',
    options: [
      'Alavanca de 1ª Classe (Interfixa).',
      'Alavanca de 2ª Classe (Inter-resistente).',
      'Alavanca de 3ª Classe (Interpotente).',
      'Alavanca de 4ª Classe (Composta).'
    ],
    correctAnswer: 2,
    explanation: 'A alavanca Interpotente (3ª classe, com Força no meio) é a mais comum no corpo humano. Sacrifica força para fornecer ampla velocidade e arco de movimento.'
  },
  {
    id: 218,
    category: 'Pulseira Vermelha',
    question: 'Como o ponto de inserção anatômico (Braço de Força - BF) é fixo no corpo humano, qual é a única estratégia biomecânica para facilitar ou dificultar um exercício mantendo a mesma carga?',
    options: [
      'Aumentar o tempo de sono do aluno.',
      'Manipular o comprimento do Braço de Resistência (BR).',
      'Mudar a ingestão de creatina pós-treino.',
      'Substituir barras retas por barras w sem alterar o ângulo.'
    ],
    correctAnswer: 1,
    explanation: 'A única forma biomecânica de modular o torque resistente sem mexer no peso é alterar o Braço de Resistência (BR): encurtar o BR facilita; aumentar o BR dificulta o exercício.'
  },
  {
    id: 219,
    category: 'Pulseira Vermelha',
    question: 'Na Elevação Lateral para deltoides, flexionar os cotovelos a 90° em vez de mantê-los estendidos causa qual impacto prático?',
    options: [
      'Aumenta o torque articular no ombro tornando o peso 2x mais difícil.',
      'Encurta o Braço de Resistência pela metade, permitindo realizar o movimento com a mesma carga com muito menos esforço.',
      'Transfere o trabalho para o peitoral menor.',
      'Elimina o recrutamento das fibras do deltoide lateral.'
    ],
    correctAnswer: 1,
    explanation: 'Ao dobrar o cotovelo a 90°, o haltere aproxima-se do eixo do ombro, cortando o BR pela metade. O aluno mantém a carga de 8kg, por exemplo, mas com esforço reduzido na fadiga.'
  },
  {
    id: 220,
    category: 'Pulseira Vermelha',
    question: 'Organize as seguintes variações do Abdominal Supra da MAIS FÁCIL para a MAIS DIFÍCIL quanto ao comprimento do Braço de Resistência (BR):',
    options: [
      'Carga acima da cabeça ➔ Braços estendidos ➔ Mãos na cabeça ➔ Braços no peito.',
      'Braços no peito ➔ Mãos na cabeça ➔ Braços estendidos ➔ Carga acima da cabeça.',
      'Braços estendidos ➔ Braços no peito ➔ Carga acima da cabeça ➔ Mãos na cabeça.',
      'Mãos na cabeça ➔ Braços no peito ➔ Carga acima da cabeça ➔ Braços estendidos.'
    ],
    correctAnswer: 1,
    explanation: 'Braços cruzados no peito (BR mínimo, fácil) ➔ Mãos na cabeça (BR intermediário) ➔ Braços estendidos acima da cabeça (BR longo) ➔ Com carga adicional acima da cabeça (máxima exigência).'
  },
  {
    id: 221,
    category: 'Pulseira Vermelha',
    question: 'Na fisiopatologia do Diabetes, qual a função da insulina de acordo com a clássica analogia do "chaveiro"?',
    options: [
      'A insulina quebra as moléculas de gordura nos adipócitos.',
      'A insulina atua como o chaveiro que abre os receptores da membrana celular ("fechaduras") para permitir a entrada da glicose.',
      'A insulina impede a absorção gástrica de carboidratos.',
      'A insulina converte lactato em glicose hepática.'
    ],
    correctAnswer: 1,
    explanation: 'A insulina funciona como chaveiro: conecta-se aos receptores celulares abrindo as comportas para a glicose sair do sangue e entrar nas células para produzir energia.'
  },
  {
    id: 222,
    category: 'Pulseira Vermelha',
    question: 'Qual é a diferença fundamental entre Diabetes Tipo 1 e Diabetes Tipo 2?',
    options: [
      'O Tipo 1 ocorre apenas em idosos sedentários e o Tipo 2 em recém-nascidos.',
      'No Tipo 1 o pâncreas perde a capacidade de produzir insulina; no Tipo 2 o pâncreas produz insulina, mas a célula apresenta resistência periférica ("fechadura enferrujada").',
      'No Tipo 1 a glicose é muito baixa e no Tipo 2 é sempre normal.',
      'No Tipo 2 o exercício físico é proibido e no Tipo 1 é obrigatório.'
    ],
    correctAnswer: 1,
    explanation: 'No Tipo 1 há incapacidade de produzir insulina (autoimune). No Tipo 2 (>90% dos casos), o pâncreas produz, mas os tecidos têm resistência à ação da insulina ("fechadura enferrujada").'
  },
  {
    id: 223,
    category: 'Pulseira Vermelha',
    question: 'Quais os valores de referência para classificação de Pré-Diabetes e Diabetes estabelecido na glicemia em jejum?',
    options: [
      'Normal: 30 a 50 mg/dL | Pré-Diabetes: 50 a 70 mg/dL | Diabetes: > 70 mg/dL.',
      'Normal: 70 a 100 mg/dL | Pré-Diabetes: 100 a 125 mg/dL | Diabetes: a partir de 125 mg/dL.',
      'Normal: 120 a 140 mg/dL | Pré-Diabetes: 140 a 180 mg/dL | Diabetes: > 200 mg/dL.',
      'Normal: 60 a 90 mg/dL | Pré-Diabetes: 90 a 110 mg/dL | Diabetes: > 150 mg/dL.'
    ],
    correctAnswer: 1,
    explanation: 'Em jejum: 70 a 100 mg/dL é Normal; 100 a 125 mg/dL é Pré-Diabetes (alerta); a partir de 125 mg/dL diagnostica-se Diabetes.'
  },
  {
    id: 224,
    category: 'Pulseira Vermelha',
    question: 'Por que o exercício físico é considerado a intervenção terapêutica mais poderosa no controle e remissão do Diabetes Tipo 2?',
    options: [
      'Porque elimina toda a gordura visceral em apenas 3 sessões de treino.',
      'Porque melhora a sensibilidade à insulina ("efeito desengripante") e a contração muscular estimula captação direta de glicose mesmo sem insulina.',
      'Porque substitui permanentemente a necessidade de beber água.',
      'Porque faz a glicose se transformar em ácido lático não absorvível.'
    ],
    correctAnswer: 1,
    explanation: 'O exercício gera captação direta de glicose pelos músculos durante a contração (independente de insulina) e cronicamente restaura a sensibilidade aos receptores ("efeito desengripante").'
  },
  {
    id: 225,
    category: 'Pulseira Vermelha',
    question: 'De acordo com a ADA e o método PSF da UniPower, qual a conduta para um aluno diabético com glicemia pré-treino inferior a 100 mg/dL?',
    options: [
      'Iniciar corrida intensa para elevar os níveis de adrenalina.',
      'Ingerir de 15 a 30 g de carboidratos de rápida absorção antes de iniciar o exercício para evitar hipoglicemia.',
      'Suspender o treino por uma semana.',
      'Aplicar 10 unidades de insulina rápida antes do aquecimento.'
    ],
    correctAnswer: 1,
    explanation: 'Se a glicemia pré-treino for < 100 mg/dL, deve-se fornecer 15 a 30 g de carboidrato (fruta, sachê de mel, isotônico) antes de treinar para prevenir hipoglicemia severa.'
  },
  {
    id: 226,
    category: 'Pulseira Vermelha',
    question: 'Se um aluno diabético apresentar glicemia pré-treino superior a 200 mg/dL e fizer aplicação de insulina de ação rápida, qual orientação de tempo deve ser seguida antes de iniciar os exercícios?',
    options: [
      'Iniciar o treino imediatamente sem esperar.',
      'Aguardar cerca de 1h30 (90 minutos) antes de começar a sessão de treino.',
      'Aguardar exatamente 10 minutos.',
      'Treinar apenas no dia seguinte em jejum.'
    ],
    correctAnswer: 1,
    explanation: 'Caso haja correção com insulina rápida pré-treino para glicemia > 200 mg/dL, orienta-se aguardar cerca de 90 minutos para evitar a sobreposição de pico da insulina com o efeito hipoglicemiante do exercício.'
  },
  {
    id: 227,
    category: 'Pulseira Vermelha',
    question: 'Pelas diretrizes da Sociedade Brasileira de Cardiologia (SBC), qual o ponto de corte para classificação de Hipertensão Arterial estabelecida?',
    options: [
      'PA ≥ 120 / 80 mmHg.',
      'PA ≥ 130 / 80 mmHg.',
      'PA ≥ 140 / 90 mmHg (14 por 9).',
      'PA ≥ 160 / 100 mmHg.'
    ],
    correctAnswer: 2,
    explanation: 'Pela SBC: Normotensão ≤ 120/80 mmHg; Pré-hipertensão 121-139 / 81-89 mmHg; Hipertensão estabelecida a partir de ≥ 140/90 mmHg.'
  },
  {
    id: 228,
    category: 'Pulseira Vermelha',
    question: 'Qual a conclusão das evidências científicas oficiais (ACSM) quanto à resposta hipotensiva entre exercícios aeróbicos e exercícios resistidos na Hipertensão?',
    options: [
      'Apenas exercícios aeróbicos promovem redução da pressão arterial.',
      'Exercícios resistidos (musculação) são perigosos e proibidos para hipertensos.',
      'Exercícios aeróbicos e resistidos são igualmente eficazes, proporcionando reduções pressóricas estatisticamente equivalentes.',
      'Nenhum tipo de exercício reduz a pressão arterial sem remédios.'
    ],
    correctAnswer: 2,
    explanation: 'Posicionamentos e revisões sistemáticas do ACSM atestam que tanto o treino aeróbico quanto a musculação reduzem a PA de forma clinicamente equivalente e complementar.'
  },
  {
    id: 229,
    category: 'Pulseira Vermelha',
    question: 'Qual é o ponto de corte crítico de pressão arterial na aferição pré-treino em que o exercício é ESTRITAMENTE CONTRAINDICADO na sessão?',
    options: [
      'PA ≥ 135 / 85 mmHg.',
      'PA ≥ 160 / 100 mmHg.',
      'PA ≥ 200 mmHg Sistólica ou ≥ 115 mmHg Diastólica (20 por 11,5).',
      'PA ≥ 140 / 90 mmHg.'
    ],
    correctAnswer: 2,
    explanation: 'Valores iguais ou superiores a 200 mmHg de PAS ou 115 mmHg de PAD contraindicam categoricamente o treino na sessão. O aluno deve repousar e procurar avaliação médica.'
  },
  {
    id: 230,
    category: 'Pulseira Vermelha',
    question: 'Por que em alunos hipertensos medicados com beta-bloqueadores deve-se utilizar a Escala de PSE (Borg ≤ 4) em vez da Frequência Cardíaca?',
    options: [
      'Porque beta-bloqueadores atenuam e limitam o aumento natural da frequência cardíaca, tornando a FC um parâmetro não confiável.',
      'Porque beta-bloqueadores provocam taquicardia descontrolada durante o repouso.',
      'Porque a escala PSE é mais fácil de calcular no aplicativo do que a pulsação.',
      'Porque beta-bloqueadores impedem a contração do miocárdio.'
    ],
    correctAnswer: 0,
    explanation: 'Medicamentos beta-bloqueadores travam a elevação da frequência cardíaca em esforço. Portanto, a FC não reflete a real intensidade do treino, devendo-se guiar pela percepção de esforço (PSE ≤ 4, pouco difícil).'
  },
  {
    id: 231,
    category: 'Pulseira Vermelha',
    question: 'Por que a Manobra de Valsalva (bloqueio respiratório na fase de esforço) deve ser estritamente abolida em alunos hipertensos?',
    options: [
      'Porque queima mais calorias do que a respiração contínua.',
      'Porque gera picos severos de pressão arterial intratorácica e sistêmica, elevando o risco de síncope vasovagal, arritmias e AVC.',
      'Porque prejudica o tônus muscular do peitoral.',
      'Porque impede o alongamento da fáscia muscular dos membros inferiores.'
    ],
    correctAnswer: 1,
    explanation: 'Prender a respiração durante o esforço gera elevação perigosa e súbita da pressão arterial e intratorácica, expondo o hipertenso a eventos cardiovasculares graves e desmaios.'
  }
];

