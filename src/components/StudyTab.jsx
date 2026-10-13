import React from 'react';
import styled from 'styled-components';
import { BookOpen, Zap, Activity, HeartPulse, UserCheck, ShieldCheck, ClipboardList, Info, Award, ArrowRight, Flame } from 'lucide-react';

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  animation: fadeIn 0.4s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const SectionHeader = styled.div`
  margin-bottom: 2.5rem;
  text-align: center;

  h2 {
    font-size: 2.25rem;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.secondary};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 1.1rem;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
`;

const TopicCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 24px;
  padding: 2.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.md};

  .topic-title {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid ${({ theme }) => theme.colors.primaryBg};

    .icon-wrapper {
      width: 56px;
      height: 56px;
      border-radius: 16px;
      background: ${({ theme }) => theme.colors.primary};
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    h3 {
      font-size: 1.75rem;
      font-weight: 800;
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const StudyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const StudyItem = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding: 1.5rem;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};

  h4 {
    font-size: 1.1rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.6;
    margin-bottom: 0;
  }

  ul {
    margin: 0.75rem 0 0 1.25rem;
    padding: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 0.9rem;

    li {
      margin-bottom: 0.4rem;
    }
  }
`;

const AlertBox = styled.div`
  background: ${({ theme }) => theme.colors.primaryBg};
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  padding: 1.25rem;
  border-radius: 0 12px 12px 0;
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;
  align-items: flex-start;

  svg {
    color: ${({ theme }) => theme.colors.primary};
    flex-shrink: 0;
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.primaryDark};
    font-weight: 600;
    line-height: 1.5;
  }
`;

const RedBandBanner = styled.div`
  background: linear-gradient(135deg, #881337 0%, #be123c 60%, #e11d48 100%);
  border-radius: 22px;
  padding: 1.6rem 2rem;
  color: white;
  margin-bottom: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  box-shadow: 0 12px 28px -6px rgba(225, 29, 72, 0.35);
  cursor: pointer;
  transition: all 0.25s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 32px -6px rgba(225, 29, 72, 0.45);
    background: linear-gradient(135deg, #9f1239 0%, #e11d48 100%);
  }

  .banner-content {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    .icon-badge {
      width: 54px;
      height: 54px;
      border-radius: 16px;
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(8px);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      flex-shrink: 0;
    }

    h3 {
      font-size: 1.4rem;
      font-weight: 800;
      margin: 0 0 0.25rem 0;
      color: white;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    p {
      margin: 0;
      font-size: 0.95rem;
      color: #ffe4e6;
    }
  }

  .action-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: white;
    color: #9f1239;
    font-weight: 800;
    font-size: 0.9rem;
    padding: 0.8rem 1.4rem;
    border-radius: 9999px;
    white-space: nowrap;
    box-shadow: 0 4px 12px rgba(0,0,0,0.12);
    flex-shrink: 0;
    transition: transform 0.2s ease;
  }

  &:hover .action-btn {
    transform: scale(1.03);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1.25rem;

    .action-btn {
      width: 100%;
      justify-content: center;
    }
  }
`;

export const StudyTab = ({ onOpenPulseiraVermelha }) => {
  return (
    <Container>
      <SectionHeader>
        <h2><BookOpen size={36} /> Central de Estudos</h2>
        <p>Domine a teoria fundamental para uma prescrição de excelência.</p>
      </SectionHeader>

      {onOpenPulseiraVermelha && (
        <RedBandBanner onClick={onOpenPulseiraVermelha}>
          <div className="banner-content">
            <div className="icon-badge">
              <Award size={30} />
            </div>
            <div>
              <h3><Flame size={20} color="#fda4af" /> Módulo Pulseira Vermelha (UniPower)</h3>
              <p>Princípios do Treinamento, Biomecânica de Alavancas, Diabetes e Hipertensão Arterial.</p>
            </div>
          </div>
          <div className="action-btn">
            Acessar Módulo Oficial <ArrowRight size={16} />
          </div>
        </RedBandBanner>
      )}

      <ContentGrid>
        {/* Bioenergética */}
        <TopicCard>
          <div className="topic-title">
            <div className="icon-wrapper"><Zap size={28} /></div>
            <h3>Bioenergética</h3>
          </div>
          <StudyGrid>
            <StudyItem>
              <h4>Sistema ATP-CP (Fosfagênio)</h4>
              <p>O sistema de energia imediata do corpo.</p>
              <ul>
                <li><strong>Duração:</strong> 0 a 10 segundos.</li>
                <li><strong>Intensidade:</strong> Altíssima (100%).</li>
                <li><strong>Exemplo:</strong> Sprint de 50m, 1 repetição máxima.</li>
                <li><strong>Substrato:</strong> Creatina Fosfato estocada.</li>
              </ul>
            </StudyItem>
            <StudyItem>
              <h4>Sistema Glicolítico (Glicogênio)</h4>
              <p>O motor principal da musculação tradicional.</p>
              <ul>
                <li><strong>Duração:</strong> 30s a 2 minutos.</li>
                <li><strong>Intensidade:</strong> Alta.</li>
                <li><strong>Exemplo:</strong> Série de 10 a 15 repetições.</li>
                <li><strong>Substrato:</strong> Glicogênio muscular e glicose.</li>
              </ul>
            </StudyItem>
            <StudyItem>
              <h4>Sistema Oxidativo (Oxigênio)</h4>
              <p>Energia para esforços de longa duração.</p>
              <ul>
                <li><strong>Duração:</strong> Acima de 2 minutos.</li>
                <li><strong>Intensidade:</strong> Baixa a moderada.</li>
                <li><strong>Exemplo:</strong> Corrida, ciclismo, caminhada.</li>
                <li><strong>Substrato:</strong> Carboidratos e Gorduras (na presença de O2).</li>
              </ul>
            </StudyItem>
          </StudyGrid>
        </TopicCard>

        {/* Biomecânica */}
        <TopicCard>
          <div className="topic-title">
            <div className="icon-wrapper"><Activity size={28} /></div>
            <h3>Biomecânica Aplicada</h3>
          </div>
          <StudyGrid>
            <StudyItem>
              <h4>Planos e Eixos</h4>
              <p>A base da análise de movimento.</p>
              <ul>
                <li><strong>Sagital:</strong> Flexão/Extensão (Eixo Látero-lateral).</li>
                <li><strong>Frontal:</strong> Abdução/Adução (Eixo Antero-posterior).</li>
                <li><strong>Transversal:</strong> Rotações (Eixo Longitudinal).</li>
              </ul>
            </StudyItem>
            <StudyItem>
              <h4>Tipos de Alavancas</h4>
              <p>Como o corpo humano gera força.</p>
              <ul>
                <li><strong>1ª Classe (Interfixa):</strong> Equilíbrio (Ex: Pescoço).</li>
                <li><strong>2ª Classe (Inter-resistente):</strong> Força (Ex: Panturrilha).</li>
                <li><strong>3ª Classe (Interpotente):</strong> Velocidade/Amplitude (Ex: Bíceps) - A mais comum no corpo.</li>
              </ul>
            </StudyItem>
            <StudyItem>
              <h4>Cadeias Cinéticas</h4>
              <ul>
                <li><strong>Cadeia Aberta:</strong> Segmento distal livre (Ex: Cadeira Extensora).</li>
                <li><strong>Cadeia Fechada:</strong> Segmento distal fixo (Ex: Agachamento).</li>
              </ul>
            </StudyItem>
          </StudyGrid>
        </TopicCard>

        {/* Atendimento e Anamnese */}
        <TopicCard>
          <div className="topic-title">
            <div className="icon-wrapper"><UserCheck size={28} /></div>
            <h3>Atendimento e Avaliação</h3>
          </div>
          <StudyGrid>
            <StudyItem>
              <h4>Anamnese e PAR-Q</h4>
              <p>Segurança em primeiro lugar.</p>
              <ul>
                <li><strong>PAR-Q:</strong> Filtro de prontidão para atividade física.</li>
                <li><strong>Anamnese:</strong> Histórico de patologias, cirurgias e remédios.</li>
                <li><strong>Objetivos:</strong> Alinhamento de expectativas com o aluno.</li>
              </ul>
            </StudyItem>
            <StudyItem>
              <h4>Pilares do Atendimento Pratique</h4>
              <ul>
                <li><strong>Acolher:</strong> Receber com energia e simpatia.</li>
                <li><strong>Conhecer:</strong> Chamar pelo nome e saber o objetivo.</li>
                <li><strong>Ensinar:</strong> Prescrever com técnica e segurança.</li>
              </ul>
            </StudyItem>
            <StudyItem>
              <h4>Metodologia CORE</h4>
              <p>O ciclo do atendimento excelente:</p>
              <ul>
                <li><strong>C:</strong> Circular para criar</li>
                <li><strong>O:</strong> Oportunidade</li>
                <li><strong>R:</strong> de Restaurar</li>
                <li><strong>E:</strong> e Elogiar</li>
              </ul>
            </StudyItem>
            <StudyItem>
              <h4>Padrão de Execução PAC</h4>
              <p>Fundamentos do exercício:</p>
              <ul>
                <li><strong>P:</strong> Postura</li>
                <li><strong>A:</strong> Amplitude</li>
                <li><strong>C:</strong> Cadência</li>
              </ul>
            </StudyItem>
            <StudyItem>
              <h4>Técnica de Feedback ERE</h4>
              <p>Como corrigir o aluno:</p>
              <ul>
                <li><strong>E:</strong> Elogiar (algo bom)</li>
                <li><strong>R:</strong> Restaurar (corrigir o erro)</li>
                <li><strong>E:</strong> Elogiar (motivar)</li>
              </ul>
            </StudyItem>
            <StudyItem>
              <h4>Retenção e Encantamento</h4>
              <p>O sucesso da unidade depende da conexão emocional gerada entre o professor e o aluno durante a aula.</p>
            </StudyItem>
          </StudyGrid>
          <AlertBox>
            <ShieldCheck size={24} />
            <p>
              Lembre-se: O conhecimento teórico é a ferramenta que transforma um instrutor em um especialista de alto valor. Estude sempre!
            </p>
          </AlertBox>
        </TopicCard>
      </ContentGrid>
    </Container>
  );
};
