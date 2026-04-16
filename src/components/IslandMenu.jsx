import React from 'react';
import styled from 'styled-components';
import { Book, Search, ClipboardList } from 'lucide-react';

const IslandWrapper = styled.nav`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.colors.surface};
  padding: 0.5rem;
  border-radius: 999px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15), 0 0 0 1px ${({ theme }) => theme.colors.border};
  display: flex;
  gap: 0.5rem;
  z-index: 9000;
  backdrop-filter: blur(12px);
  background-color: rgba(255, 255, 255, 0.95);

  @media (max-width: 768px) {
    width: auto;
    justify-content: center;
    padding: 0.5rem 1rem;
    bottom: 1.5rem;
    gap: 1rem;
  }
  
  @media print {
    display: none !important;
  }
`;

const NavItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.95rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: ${({ $active, theme }) => $active ? 'white' : theme.colors.textMuted};
  background: ${({ $active, theme }) => $active ? theme.colors.primary : 'transparent'};
  border: none;
  cursor: pointer;

  &:hover {
    background: ${({ $active, theme }) => $active ? theme.colors.primary : theme.colors.background};
    color: ${({ $active, theme }) => $active ? 'white' : theme.colors.primary};
  }
  
  svg {
    transition: transform 0.2s;
    transform: ${({ $active }) => $active ? 'scale(1.1)' : 'scale(1)'};
  }

  @media (max-width: 768px) {
    padding: 0.75rem;
    border-radius: 50%;
    aspect-ratio: 1;
    flex: unset;
    
    .label {
      display: none;
    }

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const IslandMenu = ({ activeTab, setActiveTab }) => {
  return (
    <IslandWrapper>
      <NavItem $active={activeTab === 'atlas'} onClick={() => setActiveTab('atlas')}>
        <Book size={20} /> <span className="label">Atlas Anatômico</span>
      </NavItem>
      <NavItem $active={activeTab === 'catalog'} onClick={() => setActiveTab('catalog')}>
        <Search size={20} /> <span className="label">Catálogo</span>
      </NavItem>
      <NavItem $active={activeTab === 'quiz'} onClick={() => setActiveTab('quiz')}>
        <ClipboardList size={20} /> <span className="label">Exercícios</span>
      </NavItem>
    </IslandWrapper>
  );
};
