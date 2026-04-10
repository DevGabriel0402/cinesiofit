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

const Main = styled.main`
  max-width: 1152px;
  margin: 0 auto;
  padding: 1.5rem 1rem;

  @media (max-width: 768px) {
    padding-bottom: 6rem; /* Garante que o conteúdo não fique escondido sob a tabbar mobile */
  }
`;

export default function App() {
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
    </ThemeProvider>
  );
}
