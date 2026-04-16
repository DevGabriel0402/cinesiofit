import React from 'react';
import styled from 'styled-components';
import { Dumbbell, Activity, Layers, Move, BookOpen, Building } from 'lucide-react';

const HeaderContainer = styled.header`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primaryDark} 0%, ${({ theme }) => theme.colors.primary} 100%);
  color: white;
  box-shadow: ${({ theme }) => theme.shadows.md};
  position: sticky;
  top: 0;
  z-index: 10;

  @media print {
    display: none !important;
  }
`;

const ContentWrapper = styled.div`
  max-w-6xl: 1152px;
  max-width: 1152px;
  margin: 0 auto;
  padding: 1.5rem 1rem;
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const LogoArea = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  .logo-icon {
    width: 2rem;
    height: 2rem;
    color: ${({ theme }) => theme.colors.primaryLight};
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 800;
    letter-spacing: -0.025em;
    margin: 0;
    line-height: 1.2;
  }

  p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.primaryBg};
    opacity: 0.9;
    margin: 0;
  }
`;

const EbookButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: rgba(255, 255, 255, 0.15);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.radii.full};
  font-weight: 600;
  font-size: 0.875rem;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: ${({ theme }) => theme.transitions.normal};

  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadows.sm};
  }

  &:active {
    transform: translateY(0);
  }
`;

const NavList = styled.nav`
  display: flex;
  gap: 0.5rem;
  background-color: rgba(0, 0, 0, 0.15);
  padding: 0.375rem;
  border-radius: 100px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  /* Hides scrollbar on all browsers */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.surface};
    border-radius: 0;
    padding: 0.5rem 0.5rem calc(env(safe-area-inset-bottom, 0px) + 0.5rem) 0.5rem;
    justify-content: space-around;
    gap: 0;
    z-index: 100;
    box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.05);
    border-top: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

const NavItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  border-radius: 100px;
  font-size: 0.875rem;
  font-weight: 600;
  white-space: nowrap;
  flex-shrink: 0;
  scroll-snap-align: start;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: ${({ $active }) => ($active ? '#e11d48' : 'white')};
  background-color: ${({ $active }) => ($active ? 'white' : 'transparent')};
  box-shadow: ${({ $active, theme }) => ($active ? theme.shadows.md : 'none')};

  &:hover {
    background-color: ${({ $active }) => ($active ? 'white' : 'rgba(255, 255, 255, 0.1)')};
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.3rem;
    padding: 0.5rem;
    background-color: transparent !important;
    box-shadow: none !important;
    color: ${({ $active, theme }) => ($active ? theme.colors.primary : 'white')};
    font-size: 0.70rem;
    flex: 1;

    svg {
      width: 22px;
      height: 22px;
      transition: transform 0.2s;
      transform: ${({ $active }) => $active ? 'scale(1.1)' : 'scale(1)'};
    }
  }
`;

export const Header = ({ activeTab, atlasSubTab, setAtlasSubTab, setActiveTab }) => {
  return (
    <HeaderContainer>
      <ContentWrapper>
        <TopBar>
          <LogoArea>
            <Dumbbell className="logo-icon" />
            <div>
              <h1>CinesioFit App</h1>
              <p>Guia Prático para Estagiários</p>
            </div>
          </LogoArea>
          <EbookButton onClick={() => setActiveTab('ebook')}>
            <BookOpen size={16} />
            <span>Imprimir</span>
          </EbookButton>
        </TopBar>

      </ContentWrapper>
    </HeaderContainer>
  );
};
