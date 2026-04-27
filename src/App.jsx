import React, { useState, useMemo } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Toaster } from 'react-hot-toast';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import { MUSCLES } from './data';
import { Header } from './components/Header';
import { MusclesList } from './components/MusclesList';
import { MuscleDetailsModal } from './components/MuscleDetailsModal';
import { Planes } from './components/Planes';
import { Movements } from './components/Movements';
import { EbookGenerator } from './components/pdf/EbookGenerator';
import { SplashScreen } from './components/SplashScreen';
import { PratiqueTab } from './components/PratiqueTab';
import { StudyTab } from './components/StudyTab';
import { Quiz } from './components/Quiz';
import { ExerciseCatalog } from './components/ExerciseCatalog';
import { IslandMenu } from './components/IslandMenu';
import { Activity, Layers, Move, Building, Brain } from 'lucide-react';

const Main = styled.main`
  max-width: 1152px;
  margin: 0 auto;
  padding: 1.5rem 1rem;

  @media (max-width: 768px) {
    padding-bottom: 6rem; /* Garante que o conteúdo não fique escondido sob a tabbar mobile */
  }
`;

const SubNavList = styled.nav`
  display: flex;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors.surface};
  padding: 0.5rem;
  border-radius: 100px;
  overflow-x: auto;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: 2rem;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SubNavItem = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  border-radius: 100px;
  font-size: 0.85rem;
  font-weight: 700;
  white-space: nowrap;
  color: ${({ $active, theme }) => ($active ? 'white' : theme.colors.textMuted)};
  background-color: ${({ $active, theme }) => ($active ? theme.colors.primary : 'transparent')};
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ $active, theme }) => ($active ? theme.colors.primary : theme.colors.background)};
    color: ${({ $active, theme }) => ($active ? 'white' : theme.colors.primary)};
  }
`;

const Watermark = styled.a`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors?.textTertiary || '#888'};
  text-decoration: none;
  opacity: 0.5;
  transition: all 0.3s ease;
  z-index: 9999;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: ${({ theme }) => theme.colors?.surface || 'rgba(30, 30, 30, 0.6)'};
  backdrop-filter: blur(8px);
  padding: 0.5rem 0.875rem;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors?.border || 'rgba(255,255,255,0.05)'};
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  letter-spacing: 0.5px;
  text-transform: uppercase;

  &:hover {
    opacity: 1;
    transform: translateY(-2px);
    color: ${({ theme }) => theme.colors?.primary || '#fff'};
    border-color: ${({ theme }) => theme.colors?.primary || '#fff'};
    box-shadow: 0 6px 16px rgba(0,0,0,0.2);
  }

  @media (max-width: 768px) {
    bottom: 5.5rem; /* Subir acima da tab bar */
    right: 50%;
    transform: translateX(50%);
    padding: 0.4rem 0.75rem;
    font-size: 0.7rem;

    &:hover {
      transform: translateX(50%) translateY(-2px);
    }
  }
`;

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState('atlas');
  const [atlasSubTab, setAtlasSubTab] = useState('muscles');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMuscle, setSelectedMuscle] = useState(null);

  const filteredMuscles = useMemo(() => {
    return MUSCLES.filter(m =>
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.exercises.some(ex => ex.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <Toaster position="top-right" toastOptions={{ style: { borderRadius: '12px', background: '#333', color: '#fff' } }} />

      {selectedMuscle && (
        <MuscleDetailsModal
          muscle={selectedMuscle}
          onClose={() => setSelectedMuscle(null)}
        />
      )}

      <Header setActiveTab={setActiveTab} />

      <Main>
        {activeTab === 'atlas' && (
          <SubNavList>
            <SubNavItem $active={atlasSubTab === 'muscles'} onClick={() => setAtlasSubTab('muscles')}>
              <Activity size={16} /> Músculos
            </SubNavItem>
            <SubNavItem $active={atlasSubTab === 'planes'} onClick={() => setAtlasSubTab('planes')}>
              <Layers size={16} /> Planos
            </SubNavItem>
            <SubNavItem $active={atlasSubTab === 'movements'} onClick={() => setAtlasSubTab('movements')}>
              <Move size={16} /> Movimentos
            </SubNavItem>
            <SubNavItem $active={atlasSubTab === 'pratique'} onClick={() => setAtlasSubTab('pratique')}>
              <Building size={16} /> Pratique Fit
            </SubNavItem>
            <SubNavItem $active={atlasSubTab === 'teoria'} onClick={() => setAtlasSubTab('teoria')}>
              <Brain size={16} /> Estudo Teórico
            </SubNavItem>
          </SubNavList>
        )}

        {activeTab === 'atlas' && atlasSubTab === 'muscles' && (
          <MusclesList
            muscles={filteredMuscles}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onSelectMuscle={setSelectedMuscle}
          />
        )}
        
        {activeTab === 'atlas' && atlasSubTab === 'planes' && <Planes />}
        
        {activeTab === 'atlas' && atlasSubTab === 'movements' && <Movements />}

        {activeTab === 'atlas' && atlasSubTab === 'pratique' && <PratiqueTab />}

        {activeTab === 'atlas' && atlasSubTab === 'teoria' && <StudyTab />}

        {activeTab === 'catalog' && <ExerciseCatalog />}

        {activeTab === 'quiz' && <Quiz />}

        {activeTab === 'ebook' && <EbookGenerator />}
      </Main>

      <IslandMenu activeTab={activeTab} setActiveTab={setActiveTab} />

      <Watermark
        href="https://wa.me/5531991660594?text=Ol%C3%A1%20Gabriel!%20Vim%20atrav%C3%A9s%20do%20aplicativo%20CinesioFit%20e%20gostaria%20de%20falar%20com%20voc%C3%AA."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com Gabriel no WhatsApp"
      >
        <span style={{ fontSize: '1.2em' }}>⚡</span> Criado por Gabriel
      </Watermark>
    </ThemeProvider>
  );
}
