import React from 'react';
import styled from 'styled-components';
import { Target, Eye, Heart, Award, CheckCircle2 } from 'lucide-react';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  animation: fadeIn 0.4s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const HeroCard = styled.div`
  background: linear-gradient(135deg, #18181b 0%, #27272a 100%);
  border-radius: 20px;
  padding: 3rem 2rem;
  text-align: center;
  color: white;
  margin-bottom: 2rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border-bottom: 5px solid ${({ theme }) => theme.colors.primary};

  h2 {
    font-size: 2.5rem;
    font-weight: 900;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.primary};
    letter-spacing: -0.025em;
  }

  p {
    font-size: 1.125rem;
    max-width: 700px;
    margin: 0 auto;
    color: #a1a1aa;
    line-height: 1.6;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const InfoCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.md};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  .icon-wrapper {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: ${({ theme }) => theme.colors.primaryBg};
    color: ${({ theme }) => theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.6;
  }
`;

const BenefitsSection = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 16px;
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};

  h3 {
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: ${({ theme }) => theme.colors.text};
    
    svg {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;

  li {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.5;

    svg {
      flex-shrink: 0;
      color: ${({ theme }) => theme.colors.primary}; /* Soft red check */
      margin-top: 0.125rem;
    }
  }
`;

export const PratiqueTab = () => {
  return (
    <Container>
      <HeroCard>
        <h2>A Pratique Fitness</h2>
        <p>
          Com mais de 23 anos de trajetória, a Pratique Fitness cresceu exponencialmente para se tornar uma das maiores redes de academias do Brasil. 
          Hoje atua em diversos estados (MG, SC, ES, PR) e no exterior, sempre focada na experiência inesquecível e transformação contínua de vidas.
        </p>
      </HeroCard>

      <Grid>
        <InfoCard>
          <div className="icon-wrapper">
            <Target size={24} strokeWidth={2.5} />
          </div>
          <h3>Nossa Missão</h3>
          <p>
            Nosso propósito de vida é tornar o mundo um lugar mais feliz e saudável através do movimento.
          </p>
        </InfoCard>

        <InfoCard>
          <div className="icon-wrapper">
            <Eye size={24} strokeWidth={2.5} />
          </div>
          <h3>Visão</h3>
          <p>
            Queremos ser reconhecidos como um ecossistema completo de saúde física, mental e emocional, com a meta clara de chegar a 200 unidades espalhadas pelo Brasil para impactar cada vez mais pessoas.
          </p>
        </InfoCard>

        <InfoCard>
          <div className="icon-wrapper">
            <Heart size={24} strokeWidth={2.5} />
          </div>
          <h3>Valores</h3>
          <p>
            Trabalhamos com base em 5 pilares fundamentais: Cultura Forte, Meritocracia, Gestão de Indicadores, Inovação constante e Cuidado com o Cliente. Também valorizamos o autodesenvolvimento, a honestidade, a lealdade e a disciplina.
          </p>
        </InfoCard>
      </Grid>

      <BenefitsSection>
        <h3><Award size={28} /> Por que a Pratique? (Diferenciais)</h3>
        <BenefitsList>
          <li>
            <CheckCircle2 size={20} />
            <span><strong>Academia Grátis e Família no Treino:</strong> Através do Instituto “Eu Te Quero Bem”, acesso livre às nossas unidades e você ainda pode trazer familiares.</span>
          </li>
          <li>
            <CheckCircle2 size={20} />
            <span><strong>Bolsa de Estudo 100% (Projeto SAVER):</strong> A Pratique pode bancar 100% da sua faculdade de Educação Física.</span>
          </li>
          <li>
            <CheckCircle2 size={20} />
            <span><strong>UniPower e Formação Continuada:</strong> Acesso à faculdade interna (UniPower) com milhares de horas de conteúdo para evoluir tecnicamente e crescer.</span>
          </li>
          <li>
            <CheckCircle2 size={20} />
            <span><strong>Oportunidade de Virar Sócio:</strong> Lema "Dividir para Conquistar". Mais de 250 colaboradores já saíram de estagiários para sócios da operação.</span>
          </li>
          <li>
            <CheckCircle2 size={20} />
            <span><strong>SAVER Club:</strong> Descontos em mais de 30 mil estabelecimentos em todo o Brasil (incluindo energia e passagens).</span>
          </li>
          <li>
            <CheckCircle2 size={20} />
            <span><strong>Frequência Premiada:</strong> Programa que dá cashback e prêmios apenas por manter sua rotina de treinos ativa.</span>
          </li>
          <li>
            <CheckCircle2 size={20} />
            <span><strong>Assistência à Saúde:</strong> Suporte para cuidar do seu bem-estar físico e mental.</span>
          </li>
        </BenefitsList>
      </BenefitsSection>
    </Container>
  );
};
