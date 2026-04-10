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

const Main = styled.main`
  max-width: 1152px;
  margin: 0 auto;
  padding: 1.5rem 1rem;

  @media (max-width: 768px) {
    padding-bottom: 6rem; /* Garante que o conteúdo não fique escondido sob a tabbar mobile */
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
  const [activeTab, setActiveTab] = useState('muscles');
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

      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      <Main>
        {activeTab === 'muscles' && (
          <MusclesList
            muscles={filteredMuscles}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onSelectMuscle={setSelectedMuscle}
          />
        )}

        {activeTab === 'planes' && <Planes />}

        {activeTab === 'movements' && <Movements />}

        {activeTab === 'ebook' && <EbookGenerator />}
      </Main>

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
