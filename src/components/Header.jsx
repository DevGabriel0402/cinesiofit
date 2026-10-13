import React from 'react';
import styled from 'styled-components';
import { Dumbbell, BookOpen, Award, Sparkles } from 'lucide-react';

const HeaderContainer = styled.header`
  background: linear-gradient(135deg, #090d16 0%, #0f172a 60%, #1e293b 100%);
  color: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);

  @media (min-width: 1025px) {
    display: none !important; /* Oculta a topbar no desktop; a navegação fica exclusiva na Sidebar */
  }

  @media print {
    display: none !important;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.9rem 1.25rem;
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const LogoArea = styled.div`
  display: flex;
  align-items: center;
  gap: 0.85rem;
  cursor: pointer;

  .logo-icon-box {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 12px;
    background: ${({ theme }) => 
      theme.mode === 'green' ? 'linear-gradient(135deg, #059669 0%, #10b981 100%)' :
      theme.mode === 'red' ? 'linear-gradient(135deg, #be123c 0%, #e11d48 100%)' :
      'linear-gradient(135deg, #334155 0%, #0f172a 100%)'
    };
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    box-shadow: ${({ theme }) => 
      theme.mode === 'green' ? '0 4px 14px rgba(16, 185, 129, 0.4)' :
      theme.mode === 'red' ? '0 4px 14px rgba(225, 29, 72, 0.4)' :
      '0 4px 14px rgba(255, 255, 255, 0.1)'
    };
    border: 1px solid rgba(255, 255, 255, 0.15);
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.05) rotate(-3deg);
    }
  }

  .text-group {
    display: flex;
    flex-direction: column;

    .brand-title-row {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      h1 {
        font-size: 1.35rem;
        font-weight: 900;
        letter-spacing: -0.03em;
        margin: 0;
        line-height: 1.2;
        color: #ffffff;
      }

      .pro-badge {
        background: ${({ theme }) => 
          theme.mode === 'green' ? '#10b981' :
          theme.mode === 'red' ? '#e11d48' :
          'rgba(255, 255, 255, 0.18)'
        };
        color: white;
        font-size: 0.65rem;
        font-weight: 800;
        padding: 0.12rem 0.45rem;
        border-radius: 999px;
        text-transform: uppercase;
        letter-spacing: 0.6px;
      }
    }

    p {
      font-size: 0.775rem;
      color: #94a3b8;
      margin: 0.1rem 0 0 0;
      font-weight: 500;
    }
  }

  @media (min-width: 1025px) {
    /* No desktop, o logo principal já está na sidebar lateral */
    .text-group p {
      display: none;
    }
  }
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
`;

const QuickPill = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.45rem 0.85rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
  transition: all 0.2s ease;
  cursor: pointer;
  border: 1px solid;

  &.green {
    background: rgba(16, 185, 129, 0.12);
    border-color: rgba(16, 185, 129, 0.35);
    color: #6ee7b7;

    &:hover {
      background: rgba(16, 185, 129, 0.25);
      transform: translateY(-1px);
    }
  }

  &.red {
    background: rgba(225, 29, 72, 0.12);
    border-color: rgba(225, 29, 72, 0.35);
    color: #fda4af;

    &:hover {
      background: rgba(225, 29, 72, 0.25);
      transform: translateY(-1px);
    }
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

const EbookButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  background: rgba(255, 255, 255, 0.08);
  color: #f1f5f9;
  padding: 0.5rem 0.95rem;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.8rem;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.16);
    transform: translateY(-1px);
    border-color: rgba(255, 255, 255, 0.3);
    color: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const Header = ({ setActiveTab, onNavigateSubTab }) => {
  return (
    <HeaderContainer>
      <ContentWrapper>
        <TopBar>
          <LogoArea onClick={() => { if (setActiveTab) setActiveTab('atlas'); }}>
            <div className="logo-icon-box">
              <Dumbbell size={20} />
            </div>
            <div className="text-group">
              <div className="brand-title-row">
                <h1>CinesioFit</h1>
                <span className="pro-badge">PRO</span>
              </div>
              <p>Metodologia Power & Pratique Fitness</p>
            </div>
          </LogoArea>

          <HeaderActions>
            {onNavigateSubTab && (
              <>
                <QuickPill 
                  className="green" 
                  onClick={() => {
                    setActiveTab('atlas');
                    onNavigateSubTab('pulseira-verde');
                  }}
                  title="Acessar Módulo Pulseira Verde"
                >
                  <Award size={13} /> Pulseira Verde
                </QuickPill>

                <QuickPill 
                  className="red" 
                  onClick={() => {
                    setActiveTab('atlas');
                    onNavigateSubTab('pulseira-vermelha');
                  }}
                  title="Acessar Módulo Pulseira Vermelha"
                >
                  <Award size={13} /> Pulseira Vermelha
                </QuickPill>
              </>
            )}

            <EbookButton onClick={() => setActiveTab('ebook')}>
              <BookOpen size={15} />
              <span>Imprimir</span>
            </EbookButton>
          </HeaderActions>
        </TopBar>
      </ContentWrapper>
    </HeaderContainer>
  );
};
