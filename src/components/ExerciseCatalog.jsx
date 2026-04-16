import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { Filter, Search, Ban } from 'lucide-react';
import { MUSCLES } from '../data';

// Extract all unique exercises from MUSCLES
const allExercises = MUSCLES.flatMap(muscle => 
  muscle.exercises.map(ex => ({
    ...ex,
    muscleId: muscle.id,
    muscleName: muscle.name
  }))
);

const Container = styled.div`
  max-width: 1000px;
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

const FilterBar = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii['2xl']};
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1.5rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-end;
  }
`;

const SelectGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-size: 0.85rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.secondary};
    text-transform: uppercase;
    letter-spacing: 0.5px;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  select {
    width: 100%;
    padding: 0.85rem 1.2rem;
    border-radius: ${({ theme }) => theme.radii.lg};
    border: 1px solid ${({ theme }) => theme.colors.border};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23475569' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 1.2em;
    transition: all 0.2s ease;

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
    }
  }
`;

const ResetButton = styled.button`
  padding: 0.85rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.primary}15;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary}30;
  border-radius: ${({ theme }) => theme.radii.lg};
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s;
  height: 48px; /* Match select box height */
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary}25;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
`;

const ExerciseCard = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.xl};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

const GifContainer = styled.div`
  width: 100%;
  aspect-ratio: 4/3;
  background-color: #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    mix-blend-mode: multiply;
  }
`;

const CardContent = styled.div`
  padding: 1.25rem;

  h4 {
    font-size: 1.1rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.secondary};
    margin: 0 0 0.25rem 0;
  }

  .muscle {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 1rem;
    display: block;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }

  .tag {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textMuted};
    padding: 0.2rem 0.6rem;
    border-radius: 4px;
    font-size: 0.7rem;
    font-weight: 600;
    border: 1px solid ${({ theme }) => theme.colors.border};
    line-height: 1.4;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: ${({ theme }) => theme.colors.textMuted};

  svg {
    margin-bottom: 1rem;
    color: #cbd5e1;
  }

  h3 {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 0.5rem;
  }
`;

export const ExerciseCatalog = () => {
  const [selectedMuscle, setSelectedMuscle] = useState('Todos');
  const [selectedPlane, setSelectedPlane] = useState('Todos');
  const [selectedMovement, setSelectedMovement] = useState('Todos');

  // Generate dynamic lists based on data
  const musclesList = ['Todos', ...Array.from(new Set(allExercises.map(e => e.muscleName)))];
  const planes = ['Todos', 'Sagital', 'Frontal', 'Transversal'];
  const movements = ['Todos', 'Flexão', 'Extensão', 'Abdução', 'Adução', 'Rotação', 'Depressão', 'Elevação', 'Retração'];

  const filteredExercises = useMemo(() => {
    return allExercises.filter(ex => {
      const muscleMatch = selectedMuscle === 'Todos' || ex.muscleName === selectedMuscle;
      const planeMatch = selectedPlane === 'Todos' || (ex.plane && ex.plane.includes(selectedPlane));
      const movementMatch = selectedMovement === 'Todos' || 
        (ex.movements && ex.movements.some(m => m.includes(selectedMovement)));
        
      return muscleMatch && planeMatch && movementMatch;
    });
  }, [selectedMuscle, selectedPlane, selectedMovement]);

  const handleReset = () => {
    setSelectedMuscle('Todos');
    setSelectedPlane('Todos');
    setSelectedMovement('Todos');
  };

  return (
    <Container>
      <Header>
        <h2><Search size={28} color="#e11d48" /> Catálogo de Filtros</h2>
        <p>Busque exercícios cruzando variáveis biomecânicas</p>
      </Header>

      <FilterBar>
        <SelectGroup>
          <label><Filter size={14} /> Grupo Muscular</label>
          <select 
            value={selectedMuscle} 
            onChange={(e) => setSelectedMuscle(e.target.value)}
          >
            {musclesList.map(m => <option key={m} value={m}>{m}</option>)}
          </select>
        </SelectGroup>

        <SelectGroup>
          <label><Filter size={14} /> Plano Anatômico</label>
          <select 
            value={selectedPlane} 
            onChange={(e) => setSelectedPlane(e.target.value)}
          >
            {planes.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
        </SelectGroup>

        <SelectGroup>
          <label><Filter size={14} /> Movimento</label>
          <select 
            value={selectedMovement} 
            onChange={(e) => setSelectedMovement(e.target.value)}
          >
            {movements.map(m => <option key={m} value={m}>{m}</option>)}
          </select>
        </SelectGroup>

        {(selectedMuscle !== 'Todos' || selectedPlane !== 'Todos' || selectedMovement !== 'Todos') && (
          <ResetButton onClick={handleReset}>
            Limpar Filtros
          </ResetButton>
        )}
      </FilterBar>

      {filteredExercises.length > 0 ? (
        <Grid>
          {filteredExercises.map((ex, idx) => (
            <ExerciseCard key={idx}>
              <GifContainer>
                <img src={ex.gif} alt={ex.name} loading="lazy" />
              </GifContainer>
              <CardContent>
                <h4>{ex.name}</h4>
                <span className="muscle">{ex.muscleName}</span>
                <div className="tags">
                  {ex.movements && ex.movements.map((m, i) => (
                    <span key={i} className="tag">⚙️ {m} no Plano {ex.plane}</span>
                  ))}
                </div>
              </CardContent>
            </ExerciseCard>
          ))}
        </Grid>
      ) : (
        <EmptyState>
          <Ban size={48} />
          <h3>Nenhum exercício encontrado</h3>
          <p>Tente remover ou alterar seus filtros para encontrar resultados válidos.</p>
        </EmptyState>
      )}
    </Container>
  );
};
