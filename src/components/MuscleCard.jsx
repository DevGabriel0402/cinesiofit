import React from 'react';
import styled from 'styled-components';
import { ChevronRight } from 'lucide-react';

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.xl};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme }) => theme.colors.primaryLight};

    .muscle-title {
      color: ${({ theme }) => theme.colors.primary};
    }
      

    .muscle-img {
      transform: scale(1.05);
    }
    
    .view-details {
      color: ${({ theme }) => theme.colors.primaryDark};
      padding-right: 0.25rem;
    }
  }
`;

const ImageArea = styled.div`
  height: 12rem;
  background-color: ${({ theme }) => theme.colors.primaryBg};
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    mix-blend-mode: multiply;
    transition: transform 0.5s ease;
  }
`;

const RegionBadge = styled.span`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background-color: rgba(255, 255, 255, 0.9);
  color: ${({ theme }) => theme.colors.primaryDark};
  padding: 0.25rem 0.5rem;
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: 0.65rem;
  font-weight: 700;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  backdrop-filter: blur(4px);
  text-align: right;
  max-width: 80%;
  line-height: 1.1;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const MuscleLabelOverlay = styled.div`
  position: absolute;
  bottom: 0.75rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(15, 23, 42, 0.75);
  color: #f8fafc;
  padding: 0.35rem 1rem;
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 4px 6px rgba(0,0,0,0.3);
  z-index: 2;
  white-space: nowrap;
  pointer-events: none;
`;

const ContentArea = styled.div`
  padding: 1.25rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;

  h3 {
    font-size: 1.25rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.secondary};
    transition: color ${({ theme }) => theme.transitions.normal};
    margin: 0;
  }
`;

const Description = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0;
  flex-grow: 1;
`;

const Footer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0.75rem 1.25rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ExCount = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: 600;
`;

const ViewDetailsBtn = styled.span`
  font-size: 0.75rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all ${({ theme }) => theme.transitions.fast};
  display: flex;
  align-items: center;
`;


export const MuscleCard = ({ muscle, onClick }) => {
  return (
    <Card onClick={onClick}>
      <ImageArea>
        <img className="muscle-img" src={muscle.image} alt={`Anatomia do músculo ${muscle.name}`} />
        <RegionBadge>{muscle.region}</RegionBadge>
        <MuscleLabelOverlay>{muscle.name}</MuscleLabelOverlay>
      </ImageArea>

      <ContentArea>
        <CardHeader>
          <h3 className="muscle-title">{muscle.name}</h3>
          <ChevronRight size={20} color="#cbd5e1" />
        </CardHeader>
        <Description>{muscle.composition}</Description>
      </ContentArea>

      <Footer>
        <ExCount>{muscle.exercises.length} Exercícios</ExCount>
        <ViewDetailsBtn className="view-details">Ver Detalhes</ViewDetailsBtn>
      </Footer>
    </Card>
  );
};
