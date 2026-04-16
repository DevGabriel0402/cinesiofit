import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { X, Activity, Book, Move, Layers, Dumbbell, PlayCircle } from 'lucide-react';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(20px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
  animation: ${fadeIn} 0.2s ease-out;

  @media (min-width: 640px) {
    padding: 1.5rem;
  }
`;

const ModalContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii['2xl']};
  width: 100%;
  max-width: 56rem;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.shadows.xl};
  position: relative;
  overflow: hidden;
  animation: ${slideUp} 0.3s cubic-bezier(0.16, 1, 0.3, 1);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 20;
  padding: 0.5rem;
  background-color: rgba(255, 255, 255, 0.9);
  color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.full};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  backdrop-filter: blur(8px);
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryBg};
    transform: scale(1.05);
  }
`;

const HeaderArea = styled.div`
  height: 12rem;
  background-color: ${({ theme }) => theme.colors.primaryBg};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  flex-shrink: 0;

  @media (min-width: 640px) {
    height: 18rem;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    mix-blend-mode: multiply;
  }
`;

const HeaderOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(159, 18, 57, 0.95), rgba(159, 18, 57, 0.3) 50%, transparent);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;

  @media (min-width: 640px) {
    padding: 2rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: 900;
    color: white;
    margin-bottom: 0.25rem;
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);

    @media (min-width: 640px) {
      font-size: 2.5rem;
    }
  }

  p {
    color: ${({ theme }) => theme.colors.primaryLight};
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const ModalImageLabel = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  background-color: rgba(15, 23, 42, 0.8);
  color: white;
  padding: 0.5rem 1.25rem;
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  z-index: 5;
`;

const ScrollableContent = styled.div`
  padding: 1.5rem;
  overflow-y: auto;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};

  @media (min-width: 640px) {
    padding: 2rem;
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const InfoCard = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: 1.25rem;
  border-radius: ${({ theme }) => theme.radii.xl};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const SectionTitle = styled.h4`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ borderBottom }) => (borderBottom ? '0.75rem' : '0.25rem')};
  padding-bottom: ${({ borderBottom }) => (borderBottom ? '0.5rem' : '0')};
  border-bottom: ${({ borderBottom, theme }) => (borderBottom ? `1px solid ${theme.colors.border}` : 'none')};

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const InfoText = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
  font-size: 0.95rem;
`;

const PlaneBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: 0.75rem;
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.primaryBg};
  color: ${({ theme }) => theme.colors.primaryDark};
  margin-top: 0.25rem;
`;

const ExercisesSectionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ExercisesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ExerciseCard = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xl};
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.md};
    border-color: ${({ theme }) => theme.colors.primaryLight};

    .gif-img {
      transform: scale(1.05);
    }
    .overlay-icon {
      background-color: rgba(0,0,0,0.1);
    }
  }
`;

const GifArea = styled.div`
  height: 12rem;
  background-color: ${({ theme }) => theme.colors.surface};
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  img {
    width: 100%;
    height: 100%;
    transition: transform 0.5s ease;
  }

  .real-gif {
    object-fit: contain;
    padding: 0.5rem;
  }

  .placeholder-gif {
    object-fit: cover;
  }
`;

const PlaceholderOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  svg {
    color: rgba(0, 0, 0, 0.2);
    width: 2rem;
    height: 2rem;
  }
`;

const ExerciseTitle = styled.div`
  padding: 0.75rem;
  text-align: center;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.9rem;
`;

export const MuscleDetailsModal = ({ muscle, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; }
  }, []);

  if (!muscle) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <X size={24} />
        </CloseButton>

        <HeaderArea>
          <img src={muscle.image} alt={muscle.name} />
          <ModalImageLabel>{muscle.name}</ModalImageLabel>
          <HeaderOverlay>
            <h2>{muscle.name}</h2>
            <p><Activity size={16} /> {muscle.region}</p>
          </HeaderOverlay>
        </HeaderArea>

        <ScrollableContent>
          <InfoGrid>
            <InfoCard>
              <SectionTitle borderBottom><Book size={20} /> Detalhes da Anatomia</SectionTitle>
              <InfoText>{muscle.composition}</InfoText>
            </InfoCard>

            <InfoCard style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <SectionTitle><Move size={20} /> Ação Articular</SectionTitle>
                <InfoText style={{ fontSize: '0.875rem' }}>{muscle.action}</InfoText>
              </div>
              <div>
                <SectionTitle><Layers size={20} /> Planos</SectionTitle>
                <PlaneBadge>{muscle.plane}</PlaneBadge>
              </div>
            </InfoCard>
          </InfoGrid>

          <div>
            <ExercisesSectionTitle><Dumbbell size={24} /> Exercícios Recomendados</ExercisesSectionTitle>
            <ExercisesGrid>
              {muscle.exercises.map((ex, idx) => (
                <ExerciseCard key={idx}>
                  <GifArea>
                    <img
                      src={ex.gif}
                      alt={`Execução de ${ex.name}`}
                      className={`gif-img ${ex.isRealGif ? 'real-gif' : 'placeholder-gif'}`}
                    />
                    {!ex.isRealGif && (
                      <PlaceholderOverlay className="overlay-icon">
                        <PlayCircle />
                      </PlaceholderOverlay>
                    )}
                  </GifArea>
                  <ExerciseTitle>{ex.name}</ExerciseTitle>
                </ExerciseCard>
              ))}
            </ExercisesGrid>
            <p style={{ textAlign: 'center', fontSize: '0.75rem', color: '#94a3b8', marginTop: '1rem' }}>
              * Gifs meramente ilustrativos podendo ser substituídos no código.
            </p>
          </div>
        </ScrollableContent>

      </ModalContainer>
    </Overlay>
  );
};
