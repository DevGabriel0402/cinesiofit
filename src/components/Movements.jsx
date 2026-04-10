import React from 'react';
import styled from 'styled-components';
import { MOVEMENTS } from '../data';

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.xl};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  overflow: hidden;
`;

const Header = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.background};

  h2 {
    font-size: 1.25rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.secondary};
  }

  p {
    color: ${({ theme }) => theme.colors.textMuted};
    margin-top: 0.25rem;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.div`
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.surface};
  transition: background-color ${({ theme }) => theme.transitions.fast};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
  }

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const Content = styled.div`
  h3 {
    font-size: 1.125rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 0.9rem;
    margin-top: 0.25rem;
  }
`;

const PlaneBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.75rem;
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: 0.75rem;
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.successBg};
  color: ${({ theme }) => theme.colors.success};
  align-self: flex-start;

  @media (min-width: 640px) {
    align-self: center;
  }
`;

export const Movements = () => {
  return (
    <Container>
      <Header>
        <h2>Glossário de Movimentos Articulares</h2>
        <p>Conceitos fundamentais de cinesiologia para o dia a dia no ginásio.</p>
      </Header>
      <List>
        {MOVEMENTS.map((mov, idx) => (
          <ListItem key={idx}>
            <Content>
              <h3>{mov.name}</h3>
              <p>{mov.desc}</p>
            </Content>
            <PlaneBadge>Plano {mov.plane}</PlaneBadge>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};
