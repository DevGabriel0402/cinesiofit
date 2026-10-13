import React, { useState, useMemo } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Toaster } from 'react-hot-toast';
import { getTheme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import { MUSCLES } from './data';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { MusclesList } from './components/MusclesList';
import { MuscleDetailsModal } from './components/MuscleDetailsModal';
import { EbookGenerator } from './components/pdf/EbookGenerator';
import { SplashScreen } from './components/SplashScreen';
import { PratiqueTab } from './components/PratiqueTab';
import { PulseiraVerdeTab } from './components/PulseiraVerdeTab';
import { PulseiraVermelhaTab } from './components/PulseiraVermelhaTab';
import { Quiz } from './components/Quiz';
import { ExerciseCatalog } from './components/ExerciseCatalog';
import { IslandMenu } from './components/IslandMenu';
import { Activity, Building, Award, Sparkles } from 'lucide-react';

const AppLayout = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  transition: background-color 0.3s ease;
`;

const ContentArea = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 2.25rem 1.75rem 7.5rem 1.75rem;
  flex: 1;

  @media (max-width: 768px) {
    padding: 1rem 0.85rem 6.5rem 0.85rem;
  }

  @media print {
    padding: 0;
    max-width: 100%;
    margin: 0;
  }
`;

const SubNavList = styled.nav`
  display: flex;
  gap: 0.5rem;
  background: #ffffff;
  padding: 0.4rem;
  border-radius: 999px;
  overflow-x: auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 0 0 1px ${({ theme }) => theme.colors.border};
  margin-bottom: 2rem;
  
  &::-webkit-scrollbar {
    display: none;
  }

  @media print {
    display: none !important;
  }
`;

const SubNavItem = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.3rem;
  border-radius: 999px;
  font-size: 0.875rem;
  font-weight: 700;
  white-space: nowrap;
  /* Inativo: texto escuro suficiente para contraste 4.5:1 */
  color: ${({ $active, theme }) => ($active ? 'white' : theme.colors.textSecondary)};
  background: ${({ $active, theme }) => (
    $active
      ? `linear-gradient(135deg, ${theme.colors.primaryDark} 0%, ${theme.colors.primary} 100%)`
      : 'transparent'
  )};
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1.5px solid ${({ $active, theme }) => ($active ? theme.colors.primary : 'transparent')};
  cursor: pointer;
  box-shadow: ${({ $active, theme }) => ($active ? theme.shadows.glowPrimary : 'none')};

  &:hover {
    color: ${({ $active }) => ($active ? 'white' : '#0d1117')};
    background: ${({ $active, theme }) => (
      $active
        ? `linear-gradient(135deg, ${theme.colors.primaryDark} 0%, ${theme.colors.primary} 100%)`
        : '#f1f5f9'
    )};
    transform: translateY(-1px);
  }

  &.green-tab {
    ${({ $active }) => $active ? `
      background: linear-gradient(135deg, #059669 0%, #10b981 100%) !important;
      color: white !important;
      border-color: #10b981 !important;
      box-shadow: 0 4px 14px rgba(16, 185, 129, 0.4);
    ` : `
      color: #047857;
      background: #ecfdf5;
      border-color: #a7f3d0;
      &:hover {
        background: #d1fae5;
      }
    `}
  }

  &.red-tab {
    ${({ $active }) => $active ? `
      background: linear-gradient(135deg, #be123c 0%, #e11d48 100%) !important;
      color: white !important;
      border-color: #e11d48 !important;
      box-shadow: 0 4px 14px rgba(225, 29, 72, 0.4);
    ` : `
      color: #9f1239;
      background: #fff1f2;
      border-color: #fecdd3;
      &:hover {
        background: #ffe4e6;
      }
    `}
  }
`;

const Watermark = styled.a`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textMuted};
  text-decoration: none;
  opacity: 0.7;
  transition: all 0.3s ease;
  z-index: 8000;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  padding: 0.45rem 0.85rem;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  letter-spacing: 0.3px;

  &:hover {
    opacity: 1;
    transform: translateY(-2px);
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 6px 16px rgba(0,0,0,0.12);
  }

  @media (max-width: 1024px) {
    bottom: 5.75rem; /* Posicionado acima do menu flutuante no mobile */
    right: 1rem;
    font-size: 0.7rem;
    padding: 0.35rem 0.7rem;
  }

  @media print {
    display: none !important;
  }
`;

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState('atlas');
  const [atlasSubTab, setAtlasSubTab] = useState('muscles');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMuscle, setSelectedMuscle] = useState(null);
  const [quizCategory, setQuizCategory] = useState('Todas');
  const [printScope, setPrintScope] = useState('verde');

  // MODO DE TEMA DINÂMICO
  // Padrão do sistema: Preto e Branco (Monochrome)
  // Quando selecionado Pulseira Verde: Tudo muda para o padrão de cor dela (Verde Esmeralda)
  // Quando selecionado Pulseira Vermelha: Tudo muda para o padrão de cor dela (Vermelho Rubi)
  const currentThemeMode = useMemo(() => {
    if (activeTab === 'atlas') {
      if (atlasSubTab === 'pulseira-verde') return 'green';
      if (atlasSubTab === 'pulseira-vermelha') return 'red';
    }
    if (activeTab === 'quiz') {
      if (quizCategory === 'Pulseira Verde') return 'green';
      if (quizCategory === 'Pulseira Vermelha') return 'red';
    }
    if (activeTab === 'ebook') {
      if (printScope === 'verde') return 'green';
      if (printScope === 'vermelha') return 'red';
    }
    return 'monochrome';
  }, [activeTab, atlasSubTab, quizCategory, printScope]);

  const activeTheme = useMemo(() => getTheme(currentThemeMode), [currentThemeMode]);

  const filteredMuscles = useMemo(() => {
    return MUSCLES.filter(m =>
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.exercises.some(ex => ex.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]);

  const handleStartQuizFromModule = (category = 'Pulseira Verde') => {
    setQuizCategory(category);
    setActiveTab('quiz');
  };

  const handleNavigateSubTab = (subTab) => {
    setActiveTab('atlas');
    setAtlasSubTab(subTab);
  };

  return (
    <ThemeProvider theme={activeTheme}>
      <GlobalStyles />
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <Toaster position="top-right" toastOptions={{ style: { borderRadius: '12px', background: '#0f172a', color: '#fff' } }} />

      {selectedMuscle && (
        <MuscleDetailsModal
          muscle={selectedMuscle}
          onClose={() => setSelectedMuscle(null)}
        />
      )}

      <AppLayout>
        {/* SIDEBAR PROFISSIONAL DO SISTEMA (VISÍVEL NO DESKTOP > 1024px) */}
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          atlasSubTab={atlasSubTab}
          setAtlasSubTab={setAtlasSubTab}
          themeMode={currentThemeMode}
        />

        {/* ÁREA DE CONTEÚDO PRINCIPAL */}
        <ContentArea>
          <Header 
            setActiveTab={setActiveTab} 
            onNavigateSubTab={handleNavigateSubTab}
          />

          <Main>
            {activeTab === 'atlas' && (
              <SubNavList>
                <SubNavItem 
                  $active={atlasSubTab === 'muscles'} 
                  onClick={() => setAtlasSubTab('muscles')}
                >
                  <Activity size={16} /> Músculos
                </SubNavItem>
                
                <SubNavItem 
                  $active={atlasSubTab === 'pratique'} 
                  onClick={() => setAtlasSubTab('pratique')}
                >
                  <Building size={16} /> Pratique Fit
                </SubNavItem>

                <SubNavItem 
                  className="green-tab"
                  $active={atlasSubTab === 'pulseira-verde'} 
                  onClick={() => setAtlasSubTab('pulseira-verde')}
                >
                  <Award size={16} /> Pulseira Verde 🟢
                </SubNavItem>

                <SubNavItem 
                  className="red-tab"
                  $active={atlasSubTab === 'pulseira-vermelha'} 
                  onClick={() => setAtlasSubTab('pulseira-vermelha')}
                >
                  <Award size={16} /> Pulseira Vermelha 🔴
                </SubNavItem>
              </SubNavList>
            )}

            {/* ATLAS: SUB-TABS */}
            {activeTab === 'atlas' && atlasSubTab === 'muscles' && (
              <MusclesList
                muscles={filteredMuscles}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                onSelectMuscle={setSelectedMuscle}
              />
            )}
            
            {activeTab === 'atlas' && atlasSubTab === 'pratique' && <PratiqueTab />}

            {activeTab === 'atlas' && atlasSubTab === 'pulseira-verde' && (
              <PulseiraVerdeTab onStartQuiz={handleStartQuizFromModule} />
            )}

            {activeTab === 'atlas' && atlasSubTab === 'pulseira-vermelha' && (
              <PulseiraVermelhaTab onStartQuiz={handleStartQuizFromModule} />
            )}

            {/* MAIN TABS */}
            {activeTab === 'catalog' && <ExerciseCatalog />}

            {activeTab === 'quiz' && <Quiz key={quizCategory} initialCategory={quizCategory} />}

            {activeTab === 'ebook' && (
              <EbookGenerator onSelectScope={(scope) => setPrintScope(scope)} />
            )}
          </Main>
        </ContentArea>
      </AppLayout>

      {/* MENU FLUTUANTE ESTILO APP NATIVO (VISÍVEL NO MOBILE <= 1024px) */}
      <IslandMenu activeTab={activeTab} setActiveTab={setActiveTab} />

      <Watermark
        href="https://wa.me/5531991660594?text=Ol%C3%A1%20Gabriel!%20Vim%20atrav%C3%A9s%20do%20aplicativo%20CinesioFit%20e%20gostaria%20de%20falar%20com%20voc%C3%AA."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com Gabriel no WhatsApp"
      >
        <span>⚡</span> Criado por Gabriel
      </Watermark>
    </ThemeProvider>
  );
}
