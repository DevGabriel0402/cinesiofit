import React from 'react';
import styled from 'styled-components';
import { Target, Eye, Heart, Award, CheckCircle2, Users, MapPin, Building2, Globe, TrendingUp } from 'lucide-react';

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  animation: fadeIn 0.4s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const HeroCard = styled.div`
  background: linear-gradient(135deg, #18181b 0%, #27272a 100%);
  border-radius: 24px;
  padding: 3.5rem 2rem;
  text-align: center;
  color: white;
  margin-bottom: 2.5rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border-bottom: 6px solid ${({ theme }) => theme.colors.primary};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(225, 29, 72, 0.1) 0%, transparent 70%);
    border-radius: 50%;
    transform: translate(100px, -100px);
  }

  h2 {
    font-size: 3rem;
    font-weight: 900;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.primary};
    letter-spacing: -0.025em;
    text-transform: uppercase;
  }

  p {
    font-size: 1.25rem;
    max-width: 800px;
    margin: 0 auto;
    color: #d1d5db;
    line-height: 1.6;
    font-weight: 500;
  }

  .founder {
    margin-top: 1.5rem;
    font-size: 0.9rem;
    color: #9ca3af;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    
    strong {
      color: white;
    }
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

const StatCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 20px;
  padding: 1.5rem;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  .icon-box {
    width: 44px;
    height: 44px;
    background: ${({ theme }) => theme.colors.primaryBg};
    color: ${({ theme }) => theme.colors.primary};
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem auto;
  }

  .value {
    font-size: 1.75rem;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 0.25rem;
  }

  .label {
    font-size: 0.875rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.textMuted};
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 20px;
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  height: 100%;

  .header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.25rem;

    .icon-circle {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.primary};
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    h3 {
      font-size: 1.5rem;
      font-weight: 800;
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.6;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1.5rem;
  }

  .tag {
    background: ${({ theme }) => theme.colors.primaryBg};
    color: ${({ theme }) => theme.colors.primary};
    padding: 0.4rem 1rem;
    border-radius: 100px;
    font-size: 0.8rem;
    font-weight: 800;
    text-transform: uppercase;
  }
`;

const BenefitsSection = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 24px;
  padding: 2.5rem;
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: 2rem;

  .title-area {
    margin-bottom: 2rem;
    
    h3 {
      font-size: 1.75rem;
      font-weight: 900;
      color: ${({ theme }) => theme.colors.secondary};
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    
    p {
      color: ${({ theme }) => theme.colors.textMuted};
      margin-top: 0.5rem;
      font-size: 1rem;
    }
  }
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;

  li {
    background: ${({ theme }) => theme.colors.background};
    padding: 1.25rem;
    border-radius: 16px;
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    border: 1px solid ${({ theme }) => theme.colors.border};

    svg {
      flex-shrink: 0;
      color: ${({ theme }) => theme.colors.primary};
      margin-top: 0.125rem;
    }

    .text {
      h4 {
        font-size: 1rem;
        font-weight: 800;
        color: ${({ theme }) => theme.colors.secondary};
        margin-bottom: 0.25rem;
      }
      p {
        font-size: 0.875rem;
        color: ${({ theme }) => theme.colors.textSecondary};
        line-height: 1.5;
        margin: 0;
      }
    }
  }
`;

export const PratiqueTab = () => {
  return (
    <Container>
      <HeroCard>
        <h2>Pratique Fitness</h2>
        <p>
          "Fazer o mundo um lugar mais feliz e saudável"
        </p>
        <div className="founder">
          <MapPin size={16} /> Fundada em <strong>20/09/2002</strong> no Bairro Guarani, BH • CEO: <strong>Harley Tadeu</strong>
        </div>
      </HeroCard>

      <StatsGrid>
        <StatCard>
          <div className="icon-box"><Building2 size={24} /></div>
          <div className="value">+150</div>
          <div className="label">Unidades</div>
        </StatCard>
        <StatCard>
          <div className="icon-box"><Users size={24} /></div>
          <div className="value">+230k</div>
          <div className="label">Alunos</div>
        </StatCard>
        <StatCard>
          <div className="icon-box"><Globe size={24} /></div>
          <div className="value">4</div>
          <div className="label">Países</div>
        </StatCard>
        <StatCard>
          <div className="icon-box"><TrendingUp size={24} /></div>
          <div className="value">Top 5</div>
          <div className="label">Brasil</div>
        </StatCard>
      </StatsGrid>

      <InfoGrid>
        <Card>
          <div className="header">
            <div className="icon-circle"><Target size={24} /></div>
            <h3>Propósito</h3>
          </div>
          <p>
            Nossa razão de existir é impactar vidas através do movimento, proporcionando uma experiência inesquecível e transformadora para cada pessoa que entra em nossas unidades.
          </p>
          <div className="tags">
            <span className="tag">Saúde</span>
            <span className="tag">Felicidade</span>
            <span className="tag">Movimento</span>
          </div>
        </Card>

        <Card>
          <div className="header">
            <div className="icon-circle"><Eye size={24} /></div>
            <h3>Visão 1M</h3>
          </div>
          <p>
            Temos a meta audaciosa de alcançar <strong>1 Milhão de Clientes</strong>, consolidando-nos como o ecossistema líder em bem-estar físico e mental no Brasil e no exterior.
          </p>
          <div className="tags">
            <span className="tag">Expansão</span>
            <span className="tag">Liderança</span>
            <span className="tag">Impacto</span>
          </div>
        </Card>

        <Card>
          <div className="header">
            <div className="icon-circle"><Heart size={24} /></div>
            <h3>Valores</h3>
          </div>
          <p>
            Nossa cultura é pautada pelo cuidado genuíno com as pessoas e pelo foco em resultados sustentáveis e inovadores.
          </p>
          <div className="tags">
            <span className="tag">Proatividade</span>
            <span className="tag">Simpatia</span>
            <span className="tag">Trabalho em Equipe</span>
            <span className="tag">Paixão</span>
          </div>
        </Card>
      </InfoGrid>

      <BenefitsSection>
        <div className="title-area">
          <h3><Award size={28} /> Diferenciais Pratique Fit</h3>
          <p>O que nos torna únicos no mercado de fitness mundial.</p>
        </div>
        <BenefitsList>
          <li>
            <CheckCircle2 size={24} />
            <div className="text">
              <h4>Metodologia PowerGym</h4>
              <p>Sistemas exclusivos de treinamento aplicados em todas as modalidades para resultados reais.</p>
            </div>
          </li>
          <li>
            <CheckCircle2 size={24} />
            <div className="text">
              <h4>Projeto SAVER</h4>
              <p>Impacto social e acessibilidade, com bolsas de estudo e incentivo à formação de novos profissionais.</p>
            </div>
          </li>
          <li>
            <CheckCircle2 size={24} />
            <div className="text">
              <h4>UniPower</h4>
              <p>Nossa própria universidade corporativa para treinamento contínuo de todos os colaboradores.</p>
            </div>
          </li>
          <li>
            <CheckCircle2 size={24} />
            <div className="text">
              <h4>SAVER Club</h4>
              <p>Clube de benefícios com descontos em mais de 30 mil estabelecimentos parceiros.</p>
            </div>
          </li>
          <li>
            <CheckCircle2 size={24} />
            <div className="text">
              <h4>Frequência Premiada</h4>
              <p>Programa de fidelidade que recompensa a constância dos alunos com cashback e prêmios.</p>
            </div>
          </li>
          <li>
            <CheckCircle2 size={24} />
            <div className="text">
              <h4>Expansão Internacional</h4>
              <p>Presente nos EUA, Argentina e Paraguai, levando a alegria brasileira para o mundo.</p>
            </div>
          </li>
        </BenefitsList>
      </BenefitsSection>
    </Container>
  );
};
