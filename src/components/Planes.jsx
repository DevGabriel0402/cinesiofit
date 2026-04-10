import React from 'react';
import styled from 'styled-components';
import { Info, ChevronRight } from 'lucide-react';
import { PLANES } from '../data';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const AlertBox = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryBg};
  border: 1px solid rgba(225, 29, 72, 0.2);
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: 1.25rem 1.5rem;
  
  h2 {
    font-size: 1.125rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.primaryDark};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
`;

const PlaneCard = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.xl};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const LeftSide = styled.div`
  flex: 1;

  h3 {
    font-size: 1.5rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.secondary};
    padding-bottom: 0.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    margin-bottom: 1rem;
  }

  > p {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.125rem;
    margin-bottom: 1rem;
  }
`;

const DataList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  li {
    display: flex;
    flex-direction: column;
    font-size: 0.875rem;
    
    @media (min-width: 640px) {
      flex-direction: row;
      align-items: flex-start;
      gap: 0.5rem;
    }
  }

  strong {
    color: ${({ theme }) => theme.colors.secondary};
    width: 6rem;
    flex-shrink: 0;
  }

  span {
    color: ${({ theme }) => theme.colors.textMuted};
  }

  .badges {
    display: flex;
    flex-wrap: wrap;
    gap: 0.375rem;
    margin-top: 0.25rem;
    @media (min-width: 640px) { margin-top: 0; }
  }
`;

const Badge = styled.span`
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textMuted} !important;
  padding: 0.25rem 0.5rem;
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: 0.75rem;
  font-weight: 600;
`;

const RightSide = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 1.25rem;
  border: 1px solid ${({ theme }) => theme.colors.border};

  @media (min-width: 1024px) {
    width: 30%;
  }

  strong {
    display: block;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.textMuted};
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 1rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;
    font-size: 0.95rem;

    svg {
      color: ${({ theme }) => theme.colors.primary};
      flex-shrink: 0;
    }
  }
`;

export const Planes = () => {
  return (
    <Container>
      <AlertBox>
        <h2><Info size={20} /> Porquê aprender os planos?</h2>
        <p>Os planos anatômicos são linhas imaginárias que cortam o corpo humano. Na musculação, identificar o plano ajuda a analisar o movimento articular, corrigir a postura e entender qual músculo está sendo recrutado.</p>
      </AlertBox>

      <Grid>
        {PLANES.map(plane => (
          <PlaneCard key={plane.id}>
            <LeftSide>
              <h3>{plane.name}</h3>
              <p>{plane.description}</p>
              
              <DataList>
                <li><strong>Divisão:</strong> <span>{plane.division}</span></li>
                <li><strong>Eixo:</strong> <span>{plane.axis}</span></li>
                <li>
                  <strong style={{ alignSelf: 'center' }}>Movimentos:</strong>
                  <div className="badges">
                    {plane.movements.map((m, i) => <Badge key={i}>{m}</Badge>)}
                  </div>
                </li>
              </DataList>
            </LeftSide>
            
            <RightSide>
              <strong>Exemplos na Musculação</strong>
              <ul>
                {plane.examples.map((ex, idx) => (
                  <li key={idx}>
                    <ChevronRight size={16} /> {ex}
                  </li>
                ))}
              </ul>
            </RightSide>
          </PlaneCard>
        ))}
      </Grid>
    </Container>
  );
};
