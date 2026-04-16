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
  padding: 0.75rem ${({ $active }) => ($active ? '1.25rem' : '0.75rem')};
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.95rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  color: ${({ $active, theme }) => $active ? 'white' : theme.colors.textMuted};
  background: ${({ $active, theme }) => $active ? theme.colors.primary : 'transparent'};
  border: none;
  cursor: pointer;

  &:hover {
    background: ${({ $active, theme }) => $active ? theme.colors.primary : theme.colors.background};
    color: ${({ $active, theme }) => $active ? 'white' : theme.colors.primary};
  }
  
  svg {
    flex-shrink: 0;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    transform: ${({ $active }) => $active ? 'scale(1.1)' : 'scale(1)'};
  }

  .label {
    max-width: ${({ $active }) => ($active ? '200px' : '0')};
    opacity: ${({ $active }) => ($active ? '1' : '0')};
    margin-left: ${({ $active }) => ($active ? '0.5rem' : '0')};
    overflow: hidden;
    white-space: nowrap;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    display: block;
  }

  @media (max-width: 768px) {
    padding: 0.75rem ${({ $active }) => ($active ? '1rem' : '0.75rem')};
    
    .label {
      font-size: 0.8rem;
    }

    svg {
      width: 22px;
      height: 22px;
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
