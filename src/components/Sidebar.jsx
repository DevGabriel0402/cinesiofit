import React from 'react';
import styled from 'styled-components';
import { 
  Dumbbell, 
  Activity, 
  Building, 
  Award, 
  Search, 
  ClipboardList, 
  Printer, 
  ShieldCheck, 
  Sparkles,
  ChevronRight,
  BookOpen
} from 'lucide-react';

const SidebarContainer = styled.aside`
  width: 280px;
  min-width: 280px;
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
  background: #090d16;
  border-right: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem 1.25rem;
  z-index: 1000;
  overflow-y: auto;
  box-shadow: 4px 0 24px rgba(0, 0, 0, 0.25);

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }

  @media (max-width: 1024px) {
    display: none; /* No mobile e tablets menores, a navegação é feita pelo app dock e top bar */
  }

  @media print {
    display: none !important;
  }
`;

const SidebarTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const BrandHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  cursor: pointer;

  .logo-box {
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 14px;
    background: ${({ $themeMode }) => 
      $themeMode === 'green' ? 'linear-gradient(135deg, #059669 0%, #10b981 100%)' :
      $themeMode === 'red' ? 'linear-gradient(135deg, #be123c 0%, #e11d48 100%)' :
      'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)'
    };
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    box-shadow: ${({ $themeMode }) => 
      $themeMode === 'green' ? '0 4px 16px rgba(16, 185, 129, 0.4)' :
      $themeMode === 'red' ? '0 4px 16px rgba(225, 29, 72, 0.4)' :
      '0 4px 16px rgba(255, 255, 255, 0.1)'
    };
    border: 1px solid rgba(255, 255, 255, 0.15);
    transition: all 0.3s ease;
  }

  .brand-text {
    display: flex;
    flex-direction: column;

    .brand-title-row {
      display: flex;
      align-items: center;
      gap: 0.4rem;

      h2 {
        font-size: 1.35rem;
        font-weight: 900;
        letter-spacing: -0.03em;
        margin: 0;
        color: white;
      }

      .pro-badge {
        font-size: 0.65rem;
        font-weight: 800;
        padding: 0.15rem 0.45rem;
        border-radius: 999px;
        background: ${({ $themeMode }) => 
          $themeMode === 'green' ? '#10b981' :
          $themeMode === 'red' ? '#e11d48' :
          'rgba(255, 255, 255, 0.2)'
        };
        color: white;
        letter-spacing: 0.5px;
      }
    }

    p {
      margin: 0.15rem 0 0 0;
      font-size: 0.775rem;
      color: #94a3b8;
      font-weight: 500;
    }
  }
`;

const ModeIndicator = styled.div`
  background: ${({ $themeMode }) => 
    $themeMode === 'green' ? 'rgba(16, 185, 129, 0.12)' :
    $themeMode === 'red' ? 'rgba(225, 29, 72, 0.12)' :
    'rgba(255, 255, 255, 0.05)'
  };
  border: 1px solid ${({ $themeMode }) => 
    $themeMode === 'green' ? 'rgba(16, 185, 129, 0.3)' :
    $themeMode === 'red' ? 'rgba(225, 29, 72, 0.3)' :
    'rgba(255, 255, 255, 0.1)'
  };
  padding: 0.55rem 0.85rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.75rem;
  font-weight: 700;
  color: ${({ $themeMode }) => 
    $themeMode === 'green' ? '#6ee7b7' :
    $themeMode === 'red' ? '#fda4af' :
    '#cbd5e1'
  };

  .status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ $themeMode }) => 
      $themeMode === 'green' ? '#10b981' :
      $themeMode === 'red' ? '#e11d48' :
      '#ffffff'
    };
    box-shadow: 0 0 8px currentColor;
  }
`;

const NavGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;

  .group-label {
    font-size: 0.7rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: #64748b;
    padding: 0.5rem 0.75rem 0.25rem 0.75rem;
  }
`;

const NavItemButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.75rem 0.85rem;
  border-radius: 12px;
  font-size: 0.875rem;
  font-weight: 700;
  color: ${({ $active }) => ($active ? '#ffffff' : '#94a3b8')};
  background: ${({ $active, $themeMode, $variant }) => {
    if (!$active) return 'transparent';
    if ($variant === 'green' || $themeMode === 'green') return 'linear-gradient(135deg, #059669 0%, #10b981 100%)';
    if ($variant === 'red' || $themeMode === 'red') return 'linear-gradient(135deg, #be123c 0%, #e11d48 100%)';
    return '#1e293b';
  }};
  box-shadow: ${({ $active }) => ($active ? '0 4px 14px rgba(0, 0, 0, 0.3)' : 'none')};
  border: 1px solid ${({ $active }) => ($active ? 'rgba(255, 255, 255, 0.15)' : 'transparent')};
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: left;

  &:hover {
    color: #ffffff;
    background: ${({ $active, $themeMode, $variant }) => {
      if ($active) return;
      return 'rgba(255, 255, 255, 0.08)';
    }};
    transform: translateX(3px);
  }

  .left-content {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    svg {
      color: ${({ $active }) => ($active ? 'white' : '#64748b')};
      transition: color 0.2s ease;
    }
  }

  &:hover .left-content svg {
    color: white;
  }

  .chip {
    font-size: 0.65rem;
    font-weight: 800;
    padding: 0.15rem 0.45rem;
    border-radius: 6px;
    letter-spacing: 0.4px;
    text-transform: uppercase;

    &.green {
      background: rgba(16, 185, 129, 0.2);
      color: #6ee7b7;
      border: 1px solid rgba(16, 185, 129, 0.3);
    }

    &.red {
      background: rgba(225, 29, 72, 0.2);
      color: #fda4af;
      border: 1px solid rgba(225, 29, 72, 0.3);
    }

    &.neutral {
      background: rgba(255, 255, 255, 0.1);
      color: #cbd5e1;
    }
  }
`;

const SidebarFooter = styled.div`
  padding-top: 1.25rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);

  .user-card {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 14px;
    margin-bottom: 0.75rem;

    .avatar {
      width: 36px;
      height: 36px;
      border-radius: 10px;
      background: #1e293b;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #94a3b8;
      font-weight: 800;
      font-size: 0.85rem;
    }

    .user-info {
      h5 {
        margin: 0;
        font-size: 0.825rem;
        font-weight: 700;
        color: white;
      }
      p {
        margin: 0.15rem 0 0 0;
        font-size: 0.725rem;
        color: #64748b;
      }
    }
  }
`;

export const Sidebar = ({ 
  activeTab, 
  setActiveTab, 
  atlasSubTab, 
  setAtlasSubTab, 
  themeMode 
}) => {
  const isAtlasMuscles = activeTab === 'atlas' && atlasSubTab === 'muscles';
  const isAtlasPratique = activeTab === 'atlas' && atlasSubTab === 'pratique';
  const isPulseiraVerde = activeTab === 'atlas' && atlasSubTab === 'pulseira-verde';
  const isPulseiraVermelha = activeTab === 'atlas' && atlasSubTab === 'pulseira-vermelha';
  const isCatalog = activeTab === 'catalog';
  const isQuiz = activeTab === 'quiz';
  const isEbook = activeTab === 'ebook';

  const navigateTo = (tab, subTab = null) => {
    setActiveTab(tab);
    if (subTab) {
      setAtlasSubTab(subTab);
    }
  };

  return (
    <SidebarContainer>
      <SidebarTop>
        <BrandHeader $themeMode={themeMode} onClick={() => navigateTo('atlas', 'muscles')}>
          <div className="logo-box">
            <Dumbbell size={22} />
          </div>
          <div className="brand-text">
            <div className="brand-title-row">
              <h2>CinesioFit</h2>
              <span className="pro-badge">SISTEMA</span>
            </div>
            <p>UniPower & Pratique Fitness</p>
          </div>
        </BrandHeader>

        <ModeIndicator $themeMode={themeMode}>
          <span>
            {themeMode === 'green' ? 'Pulseira Verde Ativa' :
             themeMode === 'red' ? 'Pulseira Vermelha Ativa' :
             'Modo Preto & Branco'}
          </span>
          <div className="status-dot" />
        </ModeIndicator>

        {/* GRUPO 1: ATLAS & ANATOMIA */}
        <NavGroup>
          <div className="group-label">Atlas & Fundamentos</div>
          
          <NavItemButton 
            $active={isAtlasMuscles} 
            $themeMode={themeMode}
            onClick={() => navigateTo('atlas', 'muscles')}
          >
            <div className="left-content">
              <Activity size={18} />
              <span>Músculos & Ações</span>
            </div>
          </NavItemButton>

          <NavItemButton 
            $active={isAtlasPratique} 
            $themeMode={themeMode}
            onClick={() => navigateTo('atlas', 'pratique')}
          >
            <div className="left-content">
              <Building size={18} />
              <span>Pratique Fitness</span>
            </div>
          </NavItemButton>
        </NavGroup>

        {/* GRUPO 2: CERTIFICAÇÕES UNIPOWER */}
        <NavGroup>
          <div className="group-label">Certificações de Faixa</div>

          <NavItemButton 
            $active={isPulseiraVerde} 
            $variant="green"
            onClick={() => navigateTo('atlas', 'pulseira-verde')}
          >
            <div className="left-content">
              <Award size={18} color="#10b981" />
              <span>Pulseira Verde</span>
            </div>
            <span className="chip green">Nível 1</span>
          </NavItemButton>

          <NavItemButton 
            $active={isPulseiraVermelha} 
            $variant="red"
            onClick={() => navigateTo('atlas', 'pulseira-vermelha')}
          >
            <div className="left-content">
              <Award size={18} color="#e11d48" />
              <span>Pulseira Vermelha</span>
            </div>
            <span className="chip red">Nível 2</span>
          </NavItemButton>
        </NavGroup>

        {/* GRUPO 3: PRÁTICA & SISTEMA */}
        <NavGroup>
          <div className="group-label">Ferramentas & Estudo</div>

          <NavItemButton 
            $active={isCatalog} 
            $themeMode={themeMode}
            onClick={() => navigateTo('catalog')}
          >
            <div className="left-content">
              <Search size={18} />
              <span>Catálogo Geral</span>
            </div>
          </NavItemButton>

          <NavItemButton 
            $active={isQuiz} 
            $themeMode={themeMode}
            onClick={() => navigateTo('quiz')}
          >
            <div className="left-content">
              <ClipboardList size={18} />
              <span>Simulados & Quiz</span>
            </div>
            <span className="chip neutral">140 Qs</span>
          </NavItemButton>

          <NavItemButton 
            $active={isEbook} 
            $themeMode={themeMode}
            onClick={() => navigateTo('ebook')}
          >
            <div className="left-content">
              <Printer size={18} />
              <span>Central de Impressão</span>
            </div>
            <span className="chip neutral">A4/PDF</span>
          </NavItemButton>
        </NavGroup>
      </SidebarTop>

      <SidebarFooter>
        <div className="user-card">
          <div className="avatar">CF</div>
          <div className="user-info">
            <h5>Instrutor Pratique</h5>
            <p>Metodologia Power • Pro</p>
          </div>
        </div>
      </SidebarFooter>
    </SidebarContainer>
  );
};
