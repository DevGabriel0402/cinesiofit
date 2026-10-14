import React from 'react';
import styled, { keyframes, css } from 'styled-components';
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
  ChevronRight
} from 'lucide-react';

const pulseGlow = keyframes`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.5);
  }
  50% {
    opacity: 0.85;
    transform: scale(1.05);
    box-shadow: 0 0 0 6px rgba(16, 185, 129, 0);
  }
`;

const pulseGlowRed = keyframes`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(225, 29, 72, 0.5);
  }
  50% {
    opacity: 0.85;
    transform: scale(1.05);
    box-shadow: 0 0 0 6px rgba(225, 29, 72, 0);
  }
`;

const SidebarContainer = styled.aside`
  width: 290px;
  min-width: 290px;
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
  background: ${({ $themeMode }) => {
    if ($themeMode === 'green') {
      return 'radial-gradient(ellipse 120% 80% at 0% 0%, rgba(16, 185, 129, 0.12) 0%, rgba(9, 13, 22, 0.98) 60%), #070a12';
    }
    if ($themeMode === 'red') {
      return 'radial-gradient(ellipse 120% 80% at 0% 0%, rgba(225, 29, 72, 0.12) 0%, rgba(9, 13, 22, 0.98) 60%), #070a12';
    }
    return 'radial-gradient(ellipse 120% 80% at 0% 0%, rgba(56, 189, 248, 0.06) 0%, rgba(9, 13, 22, 0.98) 60%), #070a12';
  }};
  border-right: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem 1.15rem;
  z-index: 1000;
  overflow-y: auto;
  box-shadow: 8px 0 32px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(16px);
  transition: background 0.4s ease;

  /* Custom sleek scrollbar */
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.12);
    border-radius: 999px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.22);
  }

  @media (max-width: 1024px) {
    display: none;
  }

  @media print {
    display: none !important;
  }
`;

const SidebarTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const BrandHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.5rem 0.65rem 1.1rem 0.65rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  cursor: pointer;
  border-radius: 14px;
  transition: all 0.25s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.03);

    .logo-box {
      transform: translateY(-2px) scale(1.03);
    }
  }

  .logo-box {
    width: 2.85rem;
    height: 2.85rem;
    border-radius: 14px;
    background: ${({ $themeMode }) => 
      $themeMode === 'green' ? 'linear-gradient(135deg, #059669 0%, #10b981 100%)' :
      $themeMode === 'red' ? 'linear-gradient(135deg, #be123c 0%, #e11d48 100%)' :
      'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)'
    };
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    box-shadow: ${({ $themeMode }) => 
      $themeMode === 'green' ? '0 6px 20px rgba(16, 185, 129, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.4)' :
      $themeMode === 'red' ? '0 6px 20px rgba(225, 29, 72, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.4)' :
      '0 6px 20px rgba(37, 99, 235, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.4)'
    };
    border: 1px solid rgba(255, 255, 255, 0.22);
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    flex-shrink: 0;
  }

  .brand-text {
    display: flex;
    flex-direction: column;
    min-width: 0;

    .brand-title-row {
      display: flex;
      align-items: center;
      gap: 0.45rem;

      h2 {
        font-size: 1.3rem;
        font-weight: 900;
        letter-spacing: -0.03em;
        margin: 0;
        color: #ffffff;
        text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
      }

      .pro-badge {
        font-size: 0.6rem;
        font-weight: 800;
        padding: 0.15rem 0.45rem;
        border-radius: 6px;
        background: ${({ $themeMode }) => 
          $themeMode === 'green' ? 'rgba(16, 185, 129, 0.2)' :
          $themeMode === 'red' ? 'rgba(225, 29, 72, 0.2)' :
          'rgba(59, 130, 246, 0.2)'
        };
        border: 1px solid ${({ $themeMode }) => 
          $themeMode === 'green' ? 'rgba(16, 185, 129, 0.4)' :
          $themeMode === 'red' ? 'rgba(225, 29, 72, 0.4)' :
          'rgba(59, 130, 246, 0.4)'
        };
        color: ${({ $themeMode }) => 
          $themeMode === 'green' ? '#6ee7b7' :
          $themeMode === 'red' ? '#fda4af' :
          '#93c5fd'
        };
        letter-spacing: 0.6px;
        text-transform: uppercase;
      }
    }

    p {
      margin: 0.2rem 0 0 0;
      font-size: 0.735rem;
      color: #94a3b8;
      font-weight: 500;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

const ModeIndicator = styled.div`
  background: ${({ $themeMode }) => 
    $themeMode === 'green' ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(5, 150, 105, 0.05) 100%)' :
    $themeMode === 'red' ? 'linear-gradient(135deg, rgba(225, 29, 72, 0.12) 0%, rgba(190, 18, 60, 0.05) 100%)' :
    'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%)'
  };
  border: 1px solid ${({ $themeMode }) => 
    $themeMode === 'green' ? 'rgba(16, 185, 129, 0.35)' :
    $themeMode === 'red' ? 'rgba(225, 29, 72, 0.35)' :
    'rgba(255, 255, 255, 0.1)'
  };
  padding: 0.6rem 0.85rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.74rem;
  font-weight: 700;
  color: ${({ $themeMode }) => 
    $themeMode === 'green' ? '#6ee7b7' :
    $themeMode === 'red' ? '#fda4af' :
    '#cbd5e1'
  };
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);

  .mode-left {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      opacity: 0.9;
    }
  }

  .status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ $themeMode }) => 
      $themeMode === 'green' ? '#10b981' :
      $themeMode === 'red' ? '#e11d48' :
      '#94a3b8'
    };
    animation: ${({ $themeMode }) => 
      $themeMode === 'green' ? css`${pulseGlow} 2s infinite` :
      $themeMode === 'red' ? css`${pulseGlowRed} 2s infinite` :
      'none'
    };
  }
`;

const NavGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  .group-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.675rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1.1px;
    color: #64748b;
    padding: 0.4rem 0.65rem 0.25rem 0.65rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.35rem;
    }
  }
`;

const NavItemButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.65rem 0.75rem;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  color: ${({ $active }) => ($active ? '#ffffff' : '#94a3b8')};
  background: ${({ $active, $themeMode, $variant }) => {
    if (!$active) return 'transparent';
    if ($variant === 'green' || ($active && $themeMode === 'green' && !$variant)) {
      return 'linear-gradient(135deg, rgba(16, 185, 129, 0.22) 0%, rgba(5, 150, 105, 0.1) 100%)';
    }
    if ($variant === 'red' || ($active && $themeMode === 'red' && !$variant)) {
      return 'linear-gradient(135deg, rgba(225, 29, 72, 0.22) 0%, rgba(190, 18, 60, 0.1) 100%)';
    }
    return 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(30, 41, 59, 0.5) 100%)';
  }};
  border: 1px solid ${({ $active, $themeMode, $variant }) => {
    if (!$active) return 'transparent';
    if ($variant === 'green' || ($themeMode === 'green' && !$variant)) return 'rgba(16, 185, 129, 0.35)';
    if ($variant === 'red' || ($themeMode === 'red' && !$variant)) return 'rgba(225, 29, 72, 0.35)';
    return 'rgba(255, 255, 255, 0.15)';
  }};
  box-shadow: ${({ $active, $variant, $themeMode }) => {
    if (!$active) return 'none';
    if ($variant === 'green' || ($themeMode === 'green' && !$variant)) {
      return '0 4px 16px rgba(16, 185, 129, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
    }
    if ($variant === 'red' || ($themeMode === 'red' && !$variant)) {
      return '0 4px 16px rgba(225, 29, 72, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
    }
    return '0 4px 16px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.08)';
  }};
  transition: all 0.22s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: left;
  outline: none;

  /* Indicator bar on the left */
  &::before {
    content: '';
    position: absolute;
    left: -2px;
    top: 50%;
    transform: translateY(-50%) ${({ $active }) => ($active ? 'scaleY(1)' : 'scaleY(0)')};
    width: 4px;
    height: 18px;
    border-radius: 999px;
    background: ${({ $variant, $themeMode }) => {
      if ($variant === 'green' || $themeMode === 'green') return '#10b981';
      if ($variant === 'red' || $themeMode === 'red') return '#e11d48';
      return '#38bdf8';
    }};
    box-shadow: ${({ $variant, $themeMode }) => {
      if ($variant === 'green' || $themeMode === 'green') return '0 0 10px #10b981';
      if ($variant === 'red' || $themeMode === 'red') return '0 0 10px #e11d48';
      return '0 0 10px #38bdf8';
    }};
    transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  &:hover {
    color: #ffffff;
    background: ${({ $active, $themeMode, $variant }) => {
      if ($active) return;
      return 'rgba(255, 255, 255, 0.05)';
    }};
    border-color: ${({ $active }) => ($active ? undefined : 'rgba(255, 255, 255, 0.08)')};
    transform: translateX(3px);

    .icon-box {
      background: rgba(255, 255, 255, 0.1);
      color: #ffffff;
      transform: scale(1.05);
    }

    .hover-arrow {
      opacity: 0.65;
      transform: translateX(0);
    }
  }

  .left-content {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    min-width: 0;

    .icon-box {
      width: 32px;
      height: 32px;
      border-radius: 9px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${({ $active, $variant, $themeMode }) => {
        if (!$active) return 'rgba(255, 255, 255, 0.04)';
        if ($variant === 'green' || ($themeMode === 'green' && !$variant)) return 'rgba(16, 185, 129, 0.25)';
        if ($variant === 'red' || ($themeMode === 'red' && !$variant)) return 'rgba(225, 29, 72, 0.25)';
        return 'rgba(255, 255, 255, 0.12)';
      }};
      color: ${({ $active, $variant, $themeMode }) => {
        if ($active) {
          if ($variant === 'green' || ($themeMode === 'green' && !$variant)) return '#6ee7b7';
          if ($variant === 'red' || ($themeMode === 'red' && !$variant)) return '#fda4af';
          return '#ffffff';
        }
        return '#94a3b8';
      }};
      border: 1px solid ${({ $active }) => ($active ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.04)')};
      transition: all 0.2s ease;
      flex-shrink: 0;
    }

    span.item-title {
      font-weight: ${({ $active }) => ($active ? '700' : '600')};
      letter-spacing: -0.01em;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .right-addons {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    flex-shrink: 0;
  }

  .hover-arrow {
    opacity: 0;
    transform: translateX(-4px);
    transition: all 0.2s ease;
    color: #64748b;
  }

  .chip {
    font-size: 0.625rem;
    font-weight: 800;
    padding: 0.18rem 0.45rem;
    border-radius: 6px;
    letter-spacing: 0.3px;
    text-transform: uppercase;

    &.green {
      background: rgba(16, 185, 129, 0.18);
      color: #6ee7b7;
      border: 1px solid rgba(16, 185, 129, 0.35);
      box-shadow: 0 0 10px rgba(16, 185, 129, 0.1);
    }

    &.red {
      background: rgba(225, 29, 72, 0.18);
      color: #fda4af;
      border: 1px solid rgba(225, 29, 72, 0.35);
      box-shadow: 0 0 10px rgba(225, 29, 72, 0.1);
    }

    &.neutral {
      background: rgba(255, 255, 255, 0.08);
      color: #cbd5e1;
      border: 1px solid rgba(255, 255, 255, 0.12);
    }

    &.gold {
      background: rgba(245, 158, 11, 0.18);
      color: #fcd34d;
      border: 1px solid rgba(245, 158, 11, 0.35);
    }
  }
`;

const SidebarFooter = styled.div`
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  .user-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.7rem 0.8rem;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.07);
    border-radius: 14px;
    transition: all 0.2s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.06);
      border-color: rgba(255, 255, 255, 0.12);
    }

    .user-left {
      display: flex;
      align-items: center;
      gap: 0.7rem;
      min-width: 0;

      .avatar-wrapper {
        position: relative;
        flex-shrink: 0;

        .avatar {
          width: 36px;
          height: 36px;
          border-radius: 11px;
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
          border: 1px solid rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #f1f5f9;
          font-weight: 800;
          font-size: 0.8rem;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }

        .online-dot {
          position: absolute;
          bottom: -1px;
          right: -1px;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #10b981;
          border: 2px solid #090d16;
        }
      }

      .user-info {
        min-width: 0;

        h5 {
          margin: 0;
          font-size: 0.825rem;
          font-weight: 700;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;

          svg {
            color: #38bdf8;
            flex-shrink: 0;
          }
        }

        p {
          margin: 0.15rem 0 0 0;
          font-size: 0.715rem;
          color: #94a3b8;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }

  .system-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.35rem;
    font-size: 0.675rem;
    color: #64748b;
    font-weight: 500;

    .version-tag {
      font-family: monospace;
      color: #94a3b8;
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
    <SidebarContainer $themeMode={themeMode}>
      <SidebarTop>
        {/* BRAND HEADER */}
        <BrandHeader $themeMode={themeMode} onClick={() => navigateTo('atlas', 'muscles')}>
          <div className="logo-box">
            <Dumbbell size={22} />
          </div>
          <div className="brand-text">
            <div className="brand-title-row">
              <h2>CinesioFit</h2>
              <span className="pro-badge">SISTEMA</span>
            </div>
            <p>UniPower • Pratique Fitness</p>
          </div>
        </BrandHeader>

        {/* ACTIVE THEME / BELT MODE INDICATOR */}
        <ModeIndicator $themeMode={themeMode}>
          <div className="mode-left">
            <Sparkles size={14} />
            <span>
              {themeMode === 'green' ? 'Pulseira Verde Ativa' :
               themeMode === 'red' ? 'Pulseira Vermelha Ativa' :
               'Atlas Anatômico Geral'}
            </span>
          </div>
          <div className="status-dot" />
        </ModeIndicator>

        {/* GRUPO 1: ATLAS & ANATOMIA */}
        <NavGroup>
          <div className="group-label">
            <span>Atlas & Anatomia</span>
          </div>
          
          <NavItemButton 
            $active={isAtlasMuscles} 
            $themeMode={themeMode}
            onClick={() => navigateTo('atlas', 'muscles')}
          >
            <div className="left-content">
              <div className="icon-box">
                <Activity size={17} />
              </div>
              <span className="item-title">Músculos & Ações</span>
            </div>
            <ChevronRight size={14} className="hover-arrow" />
          </NavItemButton>

          <NavItemButton 
            $active={isAtlasPratique} 
            $themeMode={themeMode}
            onClick={() => navigateTo('atlas', 'pratique')}
          >
            <div className="left-content">
              <div className="icon-box">
                <Building size={17} />
              </div>
              <span className="item-title">Pratique Fitness</span>
            </div>
            <ChevronRight size={14} className="hover-arrow" />
          </NavItemButton>
        </NavGroup>

        {/* GRUPO 2: CERTIFICAÇÕES UNIPOWER */}
        <NavGroup>
          <div className="group-label">
            <span>Certificações de Faixa</span>
          </div>

          <NavItemButton 
            $active={isPulseiraVerde} 
            $variant="green"
            onClick={() => navigateTo('atlas', 'pulseira-verde')}
          >
            <div className="left-content">
              <div className="icon-box">
                <Award size={17} />
              </div>
              <span className="item-title">Pulseira Verde</span>
            </div>
            <div className="right-addons">
              <span className="chip green">Nível 1</span>
              <ChevronRight size={14} className="hover-arrow" />
            </div>
          </NavItemButton>

          <NavItemButton 
            $active={isPulseiraVermelha} 
            $variant="red"
            onClick={() => navigateTo('atlas', 'pulseira-vermelha')}
          >
            <div className="left-content">
              <div className="icon-box">
                <Award size={17} />
              </div>
              <span className="item-title">Pulseira Vermelha</span>
            </div>
            <div className="right-addons">
              <span className="chip red">Nível 2</span>
              <ChevronRight size={14} className="hover-arrow" />
            </div>
          </NavItemButton>
        </NavGroup>

        {/* GRUPO 3: FERRAMENTAS & ESTUDO */}
        <NavGroup>
          <div className="group-label">
            <span>Ferramentas & Estudo</span>
          </div>

          <NavItemButton 
            $active={isCatalog} 
            $themeMode={themeMode}
            onClick={() => navigateTo('catalog')}
          >
            <div className="left-content">
              <div className="icon-box">
                <Search size={17} />
              </div>
              <span className="item-title">Catálogo Geral</span>
            </div>
            <ChevronRight size={14} className="hover-arrow" />
          </NavItemButton>

          <NavItemButton 
            $active={isQuiz} 
            $themeMode={themeMode}
            onClick={() => navigateTo('quiz')}
          >
            <div className="left-content">
              <div className="icon-box">
                <ClipboardList size={17} />
              </div>
              <span className="item-title">Simulados & Quiz</span>
            </div>
            <div className="right-addons">
              <span className="chip gold">140+ Qs</span>
              <ChevronRight size={14} className="hover-arrow" />
            </div>
          </NavItemButton>

          <NavItemButton 
            $active={isEbook} 
            $themeMode={themeMode}
            onClick={() => navigateTo('ebook')}
          >
            <div className="left-content">
              <div className="icon-box">
                <Printer size={17} />
              </div>
              <span className="item-title">Central de Impressão</span>
            </div>
            <div className="right-addons">
              <span className="chip neutral">A4/PDF</span>
              <ChevronRight size={14} className="hover-arrow" />
            </div>
          </NavItemButton>
        </NavGroup>
      </SidebarTop>

      {/* FOOTER DO INSTRUTOR */}
      <SidebarFooter>
        <div className="user-card">
          <div className="user-left">
            <div className="avatar-wrapper">
              <div className="avatar">CF</div>
              <div className="online-dot" />
            </div>
            <div className="user-info">
              <h5>
                Instrutor Pratique
                <ShieldCheck size={14} />
              </h5>
              <p>UniPower • Metodologia Pro</p>
            </div>
          </div>
        </div>

        <div className="system-meta">
          <span>CinesioFit Platform</span>
          <span className="version-tag">v2.5 PRO</span>
        </div>
      </SidebarFooter>
    </SidebarContainer>
  );
};
