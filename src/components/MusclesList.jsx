import React from 'react';
import styled from 'styled-components';
import { Search, Info } from 'lucide-react';
import { MuscleCard } from './MuscleCard';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SearchContainer = styled.div`
  position: relative;
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  inset-y: 0;
  left: 0;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  pointer-events: none;
  
  svg {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

const SearchInput = styled.input`
  display: block;
  width: 100%;
  padding: 0.875rem 1rem 0.875rem 2.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xl};
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primaryBg};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (min-width: 640px) {
    gap: 1.5rem;
  }
`;

const EmptyState = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
  color: ${({ theme }) => theme.colors.textMuted};

  svg {
    color: ${({ theme }) => theme.colors.border};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.125rem;
    font-weight: 500;
  }
`;

export const MusclesList = ({ muscles, searchTerm, setSearchTerm, onSelectMuscle }) => {
  return (
    <Container>
      <SearchContainer>
        <SearchIconWrapper>
          <Search size={20} />
        </SearchIconWrapper>
        <SearchInput
          type="text"
          placeholder="Pesquisar músculo, região ou exercício..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchContainer>

      <Grid>
        {muscles.length > 0 ? (
          muscles.map(muscle => (
            <MuscleCard 
              key={muscle.id} 
              muscle={muscle} 
              onClick={() => onSelectMuscle(muscle)} 
            />
          ))
        ) : (
          <EmptyState>
            <Info size={48} />
            <p>Nenhum músculo encontrado para "{searchTerm}".</p>
          </EmptyState>
        )}
      </Grid>
    </Container>
  );
};
