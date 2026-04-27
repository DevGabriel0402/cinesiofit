import React, { useState } from 'react';
import styled from 'styled-components';
import { HelpCircle, CheckCircle, XCircle, Trophy, Settings, Play, Brain, Shield } from 'lucide-react';
import { QUIZ_QUESTIONS } from '../quizData';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  animation: fadeIn 0.4s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  
  h2 {
    font-size: 1.75rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.secondary};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 0.95rem;
  }
`;

const SetupCard = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii['2xl']};
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 2rem;
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SetupGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2rem;
`;

const SetupOption = styled.button`
  padding: 0.6rem 1.25rem;
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: 0.9rem;
  font-weight: 600;
  border: 2px solid ${({ $active, theme }) => $active ? theme.colors.primary : theme.colors.border};
  background-color: ${({ $active, theme }) => $active ? 'rgba(225, 29, 72, 0.1)' : theme.colors.background};
  color: ${({ $active, theme }) => $active ? theme.colors.primary : theme.colors.textMuted};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

const Progress = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 0.875rem;
  background-color: ${({ theme }) => theme.colors.surface};
  padding: 0.75rem 1.25rem;
  border-radius: ${({ theme }) => theme.radii.full};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const ProgressBarContainer = styled.div`
  flex-grow: 1;
  height: 8px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 4px;
  margin: 0 1rem;
  overflow: hidden;
`;

const ProgressBarFill = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  width: ${({ $percentage }) => $percentage}%;
  transition: width 0.3s ease;
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii['2xl']};
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 2rem;
  margin-bottom: 1.5rem;
`;

const CategoryBadge = styled.span`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.primaryBg};
  color: ${({ theme }) => theme.colors.primaryDark};
  padding: 0.25rem 0.75rem;
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
`;

const GifContainer = styled.div`
  width: 100%;
  max-width: 320px;
  margin: 0 auto 1.5rem auto;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  
  img {
    width: 100%;
    height: auto;
    display: block;
    mix-blend-mode: multiply;
  }
`;

const QuestionText = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 2rem;
  line-height: 1.4;
`;

const OptionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const OptionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  text-align: left;
  padding: 1rem 1.25rem;
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 2px solid ${({ $state, theme }) => {
    if ($state === 'correct') return '#22c55e';
    if ($state === 'incorrect') return '#ef4444';
    if ($state === 'selectedProva') return theme.colors.primary;
    return theme.colors.border;
  }};
  background-color: ${({ $state, theme }) => {
    if ($state === 'correct') return 'rgba(34, 197, 94, 0.1)';
    if ($state === 'incorrect') return 'rgba(239, 68, 68, 0.1)';
    if ($state === 'selectedProva') return 'rgba(225, 29, 72, 0.1)';
    return theme.colors.background;
  }};
  color: ${({ $state, theme }) => {
    if ($state === 'correct') return '#166534';
    if ($state === 'incorrect') return '#991b1b';
    if ($state === 'selectedProva') return theme.colors.primary;
    return theme.colors.secondary;
  }};
  font-weight: ${({ $state }) => ($state !== 'default' ? '700' : '500')};
  transition: all 0.2s ease;
  cursor: ${({ $disabled }) => ($disabled ? 'default' : 'pointer')};

  &:hover {
    border-color: ${({ $disabled, $state, theme }) => 
      !$disabled && $state === 'default' ? theme.colors.primaryLight : ''};
    background-color: ${({ $disabled, $state, theme }) => 
      !$disabled && $state === 'default' ? theme.colors.primaryBg : ''};
  }

  @media print {
    border: 1px solid #ccc;
    background-color: transparent;
    color: black;
    break-inside: avoid;
  }
`;

const FeedbackArea = styled.div`
  margin-top: 2rem;
  padding: 1.25rem;
  border-radius: ${({ theme }) => theme.radii.lg};
  background-color: ${({ $isCorrect }) => $isCorrect ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)'};
  border: 1px solid ${({ $isCorrect }) => $isCorrect ? 'rgba(34, 197, 94, 0.3)' : 'rgba(239, 68, 68, 0.3)'};
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  p {
    margin: 0;
    color: ${({ $isCorrect }) => $isCorrect ? '#166534' : '#991b1b'};
    line-height: 1.5;
    font-size: 0.95rem;
  }

  .feedback-media {
    width: 100%;
    max-width: 300px;
    margin: 1rem auto 0 auto;
    display: block;
    border-radius: ${({ theme }) => theme.radii.md};
    box-shadow: ${({ theme }) => theme.shadows.sm};
    mix-blend-mode: multiply;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primaryDark} 0%, ${({ theme }) => theme.colors.primary} 100%);
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  border-radius: ${({ theme }) => theme.radii.xl};
  border: none;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: all 0.2s ease;
  margin-top: 1.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }

  &:active {
    transform: translateY(0);
  }
`;

const ResultCard = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii['2xl']};
  padding: 3rem 2rem;
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.xl};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const ScoreCircle = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: conic-gradient(
    ${({ theme }) => theme.colors.primary} ${({ $percentage }) => $percentage}%,
    ${({ theme }) => theme.colors.border} 0
  );
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem auto;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 10px;
    background-color: ${({ theme }) => theme.colors.surface};
    border-radius: 50%;
  }

  div {
    position: relative;
    z-index: 1;
    font-size: 2.5rem;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;

  @media print {
    display: none;
  }
`;

const PrintButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex: 1;
  padding: 1rem;
  background: white;
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  border-radius: ${({ theme }) => theme.radii.xl};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryBg};
  }

  @media print {
    display: none;
  }
`;

const ReviewSection = styled.div`
  margin-top: 3rem;
  text-align: left;

  @media screen {
    display: none; /* Hide on screen, show only when printing unless we want to show it on screen too. */
  }

  @media print {
    display: block !important;
    background: white;
    color: black;
    
    .print-header {
      text-align: center;
      padding-bottom: 1.5rem;
      margin-bottom: 2rem;
      border-bottom: 3px solid #1e293b;
      
      h3 {
        font-size: 2rem;
        font-weight: 900;
        margin: 0;
        color: #0f172a;
        text-transform: uppercase;
        letter-spacing: -0.5px;
      }
      
      p {
        font-size: 1.1rem;
        font-weight: 600;
        color: #475569;
        margin-top: 0.5rem;
      }
      
      .print-score {
        display: inline-block;
        margin-top: 1rem;
        padding: 0.5rem 1.5rem;
        border: 2px solid #e2e8f0;
        border-radius: 9999px;
        font-size: 1.25rem;
        font-weight: 800;
        color: #0f172a;
      }
    }
  }
`;

const ReviewItem = styled.div`
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: #f8fafc;
  border-left: 5px solid #cbd5e1;
  border-radius: 0 8px 8px 0;
  break-inside: avoid;
  border-top: 1px solid #f1f5f9;
  border-bottom: 1px solid #f1f5f9;
  border-right: 1px solid #f1f5f9;

  h4 {
    font-size: 1.15rem;
    color: #1e293b;
    margin-top: 0;
    margin-bottom: 1.25rem;
    font-weight: 800;
    line-height: 1.4;
  }

  .answer-box {
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  p {
    font-size: 0.95rem;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #334155;
    font-weight: 600;
  }

  .badge {
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.7rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    width: 100px;
    text-align: center;
  }

  .correct-badge {
    background-color: #dcfce7;
    color: #166534;
    border: 1px solid #bbf7d0;
  }

  .wrong-badge {
    background-color: #fee2e2;
    color: #991b1b;
    border: 1px solid #fecaca;
  }

  .explanation {
    margin-top: 1.25rem;
    padding-top: 1rem;
    border-top: 1px solid #e2e8f0;
    font-size: 0.95rem;
    color: #475569;
    line-height: 1.5;
  }
`;

export const Quiz = () => {
  const [quizStage, setQuizStage] = useState('setup'); // 'setup', 'playing', 'finished'
  
  // Config States
  const [configCategory, setConfigCategory] = useState('Todas');
  const [configCount, setConfigCount] = useState(10);
  const [configMode, setConfigMode] = useState('estudo');

  // Playing States
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const startQuiz = () => {
    let pool = [...QUIZ_QUESTIONS];
    
    // Filter by category
    if (configCategory !== 'Todas') {
      pool = pool.filter(q => q.category.includes(configCategory) || configCategory.includes(q.category));
    }
    
    // Shuffle
    pool.sort(() => Math.random() - 0.5);
    
    // Slice by count 
    const finalQuestions = configCount === 'Todas' ? pool : pool.slice(0, configCount);
    
    if (finalQuestions.length === 0) {
      alert("Oops! Nenhuma pergunta encontrada para esta combinação específica.");
      return;
    }

    setQuestions(finalQuestions);
    setQuizStage('playing');
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setUserAnswers([]);
  };

  const handleOptionClick = (index) => {
    if (isAnswered) return;

    setSelectedOption(index);
    setIsAnswered(true);

    setUserAnswers(prev => {
      const arr = [...prev];
      arr[currentQuestionIndex] = index;
      return arr;
    });

    const question = questions[currentQuestionIndex];
    if (index === question.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setQuizStage('finished');
    }
  };

  const backToSetup = () => {
    setQuizStage('setup');
  };

  const categories = ['Todas', 'Pratique', 'Anatomia Muscular', 'Cinesiologia', 'Planos Anatômicos', 'Análise Biomecânica', 'Exercícios', 'Anamnese', 'Bioenergética', 'Pulseira Verde'];
  const counts = [5, 10, 15, 20, 30, 'Todas'];

  if (quizStage === 'setup') {
    return (
      <Container>
        <Header>
          <h2><Settings size={28} color="#e11d48" /> Configurar Sessão</h2>
          <p>Personalize as regras antes de iniciar o simulado competitivo.</p>
        </Header>
        <SetupCard>
          <SectionTitle>Tema Principal</SectionTitle>
          <SetupGrid>
            {categories.map(cat => (
              <SetupOption 
                key={cat} 
                $active={configCategory === cat}
                onClick={() => setConfigCategory(cat)}
              >
                {cat}
              </SetupOption>
            ))}
          </SetupGrid>

          <SectionTitle>Quantidade de Questões</SectionTitle>
          <SetupGrid>
            {counts.map(cnt => (
              <SetupOption 
                key={cnt} 
                $active={configCount === cnt}
                onClick={() => setConfigCount(cnt)}
              >
                {cnt}
              </SetupOption>
            ))}
          </SetupGrid>

          <SectionTitle>Estilo de Jogo</SectionTitle>
          <SetupGrid>
            <SetupOption 
              $active={configMode === 'estudo'}
              onClick={() => setConfigMode('estudo')}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Brain size={18} /> Modo Estudo (Mostra a correção na hora)
            </SetupOption>
            <SetupOption 
              $active={configMode === 'prova'}
              onClick={() => setConfigMode('prova')}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Shield size={18} /> Modo Prova (Modo rápido ocultando correção)
            </SetupOption>
          </SetupGrid>

          <Button onClick={startQuiz}>
            <Play size={20} />
            Iniciar Questionário
          </Button>
        </SetupCard>
      </Container>
    );
  }

  if (quizStage === 'finished') {
    const percentageScore = Math.round((score / questions.length) * 100);
    return (
      <Container>
        <Header>
          <h2><Trophy size={28} color="#e11d48" /> Resultado Final</h2>
          <p>Veja como você se saiu no teste de conhecimentos</p>
        </Header>
        <ResultCard>
          <ScoreCircle $percentage={percentageScore}>
            <div>{percentageScore}%</div>
          </ScoreCircle>
          
          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#1e293b' }}>
            {percentageScore >= 70 ? 'Excelente trabalho!' : 'Continue estudando!'}
          </h3>
          <p style={{ color: '#64748b', marginBottom: '2rem' }}>
            Você acertou <strong>{score}</strong> de <strong>{questions.length}</strong> perguntas.
          </p>

          <ActionButtons>
            <PrintButton onClick={() => window.print()}>
              🖨️ Imprimir Correção
            </PrintButton>
            <Button onClick={backToSetup} style={{ marginTop: 0, flex: 1 }}>
              <Settings size={20} />
              Configurar Novo
            </Button>
          </ActionButtons>
        </ResultCard>

        {/* This review section is hidden on screen and shown on print */}
        <ReviewSection>
          <div className="print-header">
            <h3>Relatório CinesioFit</h3>
            <p>Simulado de Avaliação Teórica</p>
            <div className="print-score">Nota Final: {percentageScore}% ({score} de {questions.length})</div>
          </div>
          
          {questions.map((q, idx) => {
            const userAnswerIdx = userAnswers[idx];
            const isCorrect = userAnswerIdx === q.correctAnswer;

            return (
              <ReviewItem key={idx} style={{ borderLeftColor: isCorrect ? '#22c55e' : '#ef4444' }}>
                <h4>{idx + 1}. {q.question}</h4>
                
                <div className="answer-box">
                  <span className={`badge ${isCorrect ? 'correct-badge' : 'wrong-badge'}`}>Sua Resposta</span>
                  <p>{q.options[userAnswerIdx]}</p>
                </div>
                
                {!isCorrect && (
                  <div className="answer-box">
                    <span className="badge correct-badge">Correta</span>
                    <p>{q.options[q.correctAnswer]}</p>
                  </div>
                )}
                
                <div className="explanation">
                  <strong>💡 Justificativa: </strong> {q.explanation}
                </div>
              </ReviewItem>
            );
          })}
        </ReviewSection>
      </Container>
    );
  }

  const question = questions[currentQuestionIndex];

  return (
    <Container>
      <Header>
        <h2><HelpCircle size={28} color="#e11d48" /> Simulador CinesioFit</h2>
        <p>Boa sorte no seu teste!</p>
      </Header>

      <Progress>
        <span>P {currentQuestionIndex + 1} de {questions.length}</span>
        <ProgressBarContainer>
          <ProgressBarFill $percentage={((currentQuestionIndex) / questions.length) * 100} />
        </ProgressBarContainer>
        <span>{Math.round((currentQuestionIndex / questions.length) * 100)}%</span>
      </Progress>

      <Card>
        <CategoryBadge>
          {question.category}
        </CategoryBadge>

        {question.gif && (
          <GifContainer>
            <img src={question.gif} alt="Animação da Pergunta" loading="lazy" />
          </GifContainer>
        )}

        <QuestionText>{question.question}</QuestionText>

        <OptionsList>
          {question.options.map((option, idx) => {
            let state = 'default';
            if (isAnswered) {
              if (configMode === 'prova') {
                if (idx === selectedOption) state = 'selectedProva';
              } else {
                if (idx === question.correctAnswer) state = 'correct';
                else if (idx === selectedOption) state = 'incorrect';
              }
            }

            return (
              <OptionButton
                key={idx}
                onClick={() => handleOptionClick(idx)}
                $state={state}
                $disabled={isAnswered}
              >
                <span>{option}</span>
                {state === 'correct' && <CheckCircle size={20} />}
                {state === 'incorrect' && <XCircle size={20} />}
              </OptionButton>
            );
          })}
        </OptionsList>

        {isAnswered && configMode === 'estudo' && (
          <FeedbackArea $isCorrect={selectedOption === question.correctAnswer}>
            <p>
              <strong>{selectedOption === question.correctAnswer ? 'Acertou! ' : 'Errou. '}</strong>
              {question.explanation}
            </p>
            {question.explanationImage && (
              <img src={question.explanationImage} alt="Anatomia Explicada" className="feedback-media" loading="lazy" />
            )}
            {question.explanationGif && (
              <img src={question.explanationGif} alt="Exercício Explicado" className="feedback-media" loading="lazy" />
            )}
          </FeedbackArea>
        )}
      </Card>

      {isAnswered && (
        <Button onClick={handleNext}>
          {currentQuestionIndex === questions.length - 1 ? 'Finalizar e Ver Resultado' : 'Próxima Pergunta'}
        </Button>
      )}
    </Container>
  );
};
