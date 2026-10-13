import React from 'react';
import styled from 'styled-components';
import { Book, Search, ClipboardList, Printer } from 'lucide-react';

const IslandWrapper = styled.nav`
  position: fixed;
  bottom: 1.75rem;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(15, 23, 42, 0.92);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 0.4rem;
  border-radius: 999px;
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.12);
  display: flex;
  gap: 0.35rem;
  z-index: 9000;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 1025px) {
    display: none !important; /* No desktop a navegação é feita pela sidebar do sistema */
  }

  @media (max-width: 768px) {
    bottom: 1.25rem;
    padding: 0.35rem 0.5rem;
    gap: 0.25rem;
    max-width: 95vw;
  }
  
  @media print {
    display: none !important;
  }
`;

const NavItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem ${({ $active }) => ($active ? '1.25rem' : '0.85rem')};
  border-radius: 999px;
  font-weight: 800;
  font-size: 0.875rem;
  letter-spacing: -0.01em;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  color: ${({ $active }) => ($active ? '#ffffff' : '#94a3b8')};
  background: ${({ $active, theme }) => 
    $active 
      ? (theme.mode === 'green' 
          ? 'linear-gradient(135deg, #059669 0%, #10b981 100%)' 
          : theme.mode === 'red' 
            ? 'linear-gradient(135deg, #be123c 0%, #e11d48 100%)'
            : 'linear-gradient(135deg, #334155 0%, #0f172a 100%)')
      : 'transparent'};
  border: none;
  cursor: pointer;
  box-shadow: ${({ $active, theme }) => 
    $active 
      ? (theme.mode === 'green' 
          ? '0 4px 16px rgba(16, 185, 129, 0.45)' 
          : theme.mode === 'red' 
            ? '0 4px 16px rgba(225, 29, 72, 0.45)'
            : '0 4px 16px rgba(255, 255, 255, 0.15)')
      : 'none'};

  &:hover {
    color: white;
    background: ${({ $active, theme }) => 
      $active 
        ? (theme.mode === 'green' ? '#10b981' : theme.mode === 'red' ? '#e11d48' : '#1e293b')
        : 'rgba(255, 255, 255, 0.08)'};
  }
  
  svg {
    flex-shrink: 0;
    transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    transform: ${({ $active }) => ($active ? 'scale(1.12)' : 'scale(1)')};
  }

  .label {
    max-width: ${({ $active }) => ($active ? '150px' : '0')};
    opacity: ${({ $active }) => ($active ? '1' : '0')};
    margin-left: ${({ $active }) => ($active ? '0.5rem' : '0')};
    overflow: hidden;
    white-space: nowrap;
    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    display: block;
  }

  @media (max-width: 768px) {
    padding: 0.65rem ${({ $active }) => ($active ? '1rem' : '0.65rem')};
    
    .label {
      font-size: 0.75rem;
    }

    svg {
      width: 19px;
      height: 19px;
    }
  }
`;

export const IslandMenu = ({ activeTab, setActiveTab }) => {
  return (
    <IslandWrapper>
      <NavItem $active={activeTab === 'atlas'} onClick={() => setActiveTab('atlas')}>
        <Book size={19} /> <span className="label">Atlas</span>
      </NavItem>
      <NavItem $active={activeTab === 'catalog'} onClick={() => setActiveTab('catalog')}>
        <Search size={19} /> <span className="label">Catálogo</span>
      </NavItem>
      <NavItem $active={activeTab === 'quiz'} onClick={() => setActiveTab('quiz')}>
        <ClipboardList size={19} /> <span className="label">Simulados</span>
      </NavItem>
      <NavItem $active={activeTab === 'ebook'} onClick={() => setActiveTab('ebook')}>
        <Printer size={19} /> <span className="label">Imprimir</span>
      </NavItem>
    </IslandWrapper>
  );
};
