import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { 
  Award, 
  Layers, 
  Move, 
  BookOpen, 
  Dumbbell, 
  Play, 
  Sparkles, 
  Search, 
  CheckCircle2, 
  ChevronRight, 
  Zap, 
  HeartHandshake, 
  Target, 
  RotateCcw,
  Activity,
  ArrowRight
} from 'lucide-react';
import { 
  PULSEIRA_VERDE_INFO, 
  EXERCICIOS_PULSEIRA_VERDE, 
  TEORIA_PULSEIRA_VERDE 
} from '../dataPulseiraVerde';
import { PLANES, MOVEMENTS } from '../data';

const Container = styled.div`
  max-width: 1050px;
  margin: 0 auto;
  animation: fadeIn 0.4s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const HeroCard = styled.div`
  background: linear-gradient(135deg, #064e3b 0%, #059669 50%, #10b981 100%);
  border-radius: 28px;
  padding: 3rem 2rem;
  color: white;
  margin-bottom: 2rem;
  box-shadow: 0 20px 35px -10px rgba(16, 185, 129, 0.35);
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.2);

  &::before {
    content: "";
    position: absolute;
    top: -60px;
    right: -60px;
    width: 240px;
    height: 240px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.18) 0%, transparent 70%);
    border-radius: 50%;
  }

  .badge-wrapper {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(255, 255, 255, 0.18);
    backdrop-filter: blur(8px);
    padding: 0.4rem 1rem;
    border-radius: 9999px;
    font-size: 0.8rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    margin-bottom: 1.25rem;
    border: 1px solid rgba(255, 255, 255, 0.25);
  }

  h2 {
    font-size: 2.75rem;
    font-weight: 900;
    line-height: 1.15;
    margin-bottom: 0.75rem;
    letter-spacing: -0.02em;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  p.subtitle {
    font-size: 1.15rem;
    color: #d1fae5;
    max-width: 780px;
    line-height: 1.6;
    margin-bottom: 2rem;
    font-weight: 500;
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.25rem;
    h2 { font-size: 2rem; }
    p.subtitle { font-size: 1rem; }
  }
`;

const PlayQuizButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background-color: white;
  color: #065f46;
  font-weight: 800;
  font-size: 1rem;
  padding: 0.85rem 1.75rem;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 24px rgba(0, 0, 0, 0.22);
    background-color: #ecfdf5;
    color: #047857;
  }
`;

const StatPills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.75rem;

  .stat-pill {
    background: rgba(0, 0, 0, 0.18);
    border: 1px solid rgba(255, 255, 255, 0.15);
    padding: 0.45rem 0.9rem;
    border-radius: 999px;
    font-size: 0.825rem;
    font-weight: 600;
    color: #d1fae5;
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
`;

const TabsNav = styled.div`
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

const TabButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.25rem;
  border-radius: 100px;
  font-size: 0.85rem;
  font-weight: 700;
  white-space: nowrap;
  color: ${({ $active, theme }) => ($active ? 'white' : theme.colors.textMuted)};
  background-color: ${({ $active }) => ($active ? '#10b981' : 'transparent')};
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ $active, theme }) => ($active ? '#059669' : theme.colors.background)};
    color: ${({ $active }) => ($active ? 'white' : '#059669')};
  }
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 24px;
  padding: 2.25rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem 1.25rem;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.75rem;
  padding-bottom: 1.25rem;
  border-bottom: 2px solid #ecfdf5;

  .icon-wrapper {
    width: 52px;
    height: 52px;
    border-radius: 16px;
    background: #d1fae5;
    color: #059669;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  h3 {
    font-size: 1.6rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.secondary};
    margin: 0;
  }

  p {
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.textMuted};
    margin: 0.25rem 0 0 0;
  }
`;

const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 9999px;
  padding: 0.75rem 1.25rem;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows.sm};

  svg {
    color: #059669;
  }

  input {
    border: none;
    background: transparent;
    width: 100%;
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.text};
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.textMuted};
    }
  }
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.4px;

  &.green {
    background-color: #ecfdf5;
    color: #047857;
    border: 1px solid #a7f3d0;
  }

  &.blue {
    background-color: #eff6ff;
    color: #1d4ed8;
    border: 1px solid #bfdbfe;
  }

  &.purple {
    background-color: #faf5ff;
    color: #7e22ce;
    border: 1px solid #e9d5ff;
  }

  &.amber {
    background-color: #fffbeb;
    color: #b45309;
    border: 1px solid #fde68a;
  }
`;

const ExerciseCard = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  padding: 1.5rem;
  margin-bottom: 1.25rem;
  transition: all 0.25s ease;

  &:hover {
    border-color: #6ee7b7;
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  .top-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-bottom: 1rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};

    h4 {
      font-size: 1.25rem;
      font-weight: 800;
      color: ${({ theme }) => theme.colors.secondary};
      margin: 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      span.number {
        background: #10b981;
        color: white;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 0.85rem;
        flex-shrink: 0;
      }
    }
  }

  .meta-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1rem;
    margin-bottom: 1rem;

    .meta-item {
      font-size: 0.9rem;
      color: ${({ theme }) => theme.colors.textSecondary};
      line-height: 1.5;

      strong {
        color: ${({ theme }) => theme.colors.secondary};
        display: block;
        margin-bottom: 0.2rem;
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 0.4px;
      }
    }
  }

  .substitution-box {
    background: #ecfdf5;
    border: 1px dashed #059669;
    border-radius: 12px;
    padding: 0.85rem 1rem;
    margin-bottom: 0.75rem;
    font-size: 0.9rem;
    color: #065f46;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    strong {
      color: #047857;
    }
  }

  .pac-tip {
    font-size: 0.875rem;
    color: #475569;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 0.75rem 1rem;
    line-height: 1.5;

    strong {
      color: #0f172a;
    }
  }
`;

const PlanesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
`;

const PlaneCard = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  padding: 1.75rem;
  transition: all 0.2s ease;

  &:hover {
    border-color: #6ee7b7;
    box-shadow: ${({ theme }) => theme.shadows.sm};
  }

  .plane-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    flex-wrap: wrap;
    gap: 0.5rem;

    h4 {
      font-size: 1.35rem;
      font-weight: 800;
      color: #065f46;
      margin: 0;
    }
  }

  .plane-details {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.25rem;
    margin-bottom: 1.25rem;

    .info-block {
      font-size: 0.925rem;
      color: ${({ theme }) => theme.colors.textSecondary};
      line-height: 1.55;

      strong {
        color: ${({ theme }) => theme.colors.secondary};
        display: block;
        font-size: 0.8rem;
        text-transform: uppercase;
        margin-bottom: 0.25rem;
      }
    }
  }

  .movements-tag-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.5rem;

    span {
      background: white;
      border: 1px solid #d1fae5;
      color: #065f46;
      padding: 0.35rem 0.75rem;
      border-radius: 999px;
      font-size: 0.85rem;
      font-weight: 700;
    }
  }
`;

const MovementListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 14px;
  margin-bottom: 0.75rem;
  transition: all 0.2s;

  &:hover {
    border-color: #10b981;
    background: white;
    transform: translateX(4px);
  }

  .movement-info {
    h5 {
      font-size: 1.05rem;
      font-weight: 800;
      color: ${({ theme }) => theme.colors.secondary};
      margin: 0 0 0.25rem 0;
    }

    p {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors.textSecondary};
      margin: 0;
    }
  }

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

export const PulseiraVerdeTab = ({ onStartQuiz }) => {
  const [activeSubTab, setActiveSubTab] = useState('exercicios');
  const [movementSearch, setMovementSearch] = useState('');
  const [exerciseSearch, setExerciseSearch] = useState('');

  const filteredMovements = useMemo(() => {
    return MOVEMENTS.filter(m => 
      m.name.toLowerCase().includes(movementSearch.toLowerCase()) ||
      m.desc.toLowerCase().includes(movementSearch.toLowerCase()) ||
      m.plane.toLowerCase().includes(movementSearch.toLowerCase())
    );
  }, [movementSearch]);

  const filteredExercises = useMemo(() => {
    return EXERCICIOS_PULSEIRA_VERDE.filter(ex =>
      ex.nome.toLowerCase().includes(exerciseSearch.toLowerCase()) ||
      ex.plano.toLowerCase().includes(exerciseSearch.toLowerCase()) ||
      ex.movimento.toLowerCase().includes(exerciseSearch.toLowerCase()) ||
      ex.grupoMuscular.toLowerCase().includes(exerciseSearch.toLowerCase()) ||
      ex.substituicao.toLowerCase().includes(exerciseSearch.toLowerCase())
    );
  }, [exerciseSearch]);

  const handleStartSimulado = () => {
    if (onStartQuiz) {
      onStartQuiz('Pulseira Verde');
    }
  };

  return (
    <Container>
      <HeroCard>
        <div className="badge-wrapper">
          <Award size={16} />
          {PULSEIRA_VERDE_INFO.badge}
        </div>
        <h2>
          <Sparkles size={38} color="#a7f3d0" />
          {PULSEIRA_VERDE_INFO.title}
        </h2>
        <p className="subtitle">
          {PULSEIRA_VERDE_INFO.description}
        </p>

        <div className="hero-actions">
          <PlayQuizButton onClick={handleStartSimulado}>
            <Play size={18} fill="#065f46" />
            Simulado Pulseira Verde (Validação Oficial)
          </PlayQuizButton>
        </div>

        <StatPills>
          <div className="stat-pill">
            <Dumbbell size={14} /> 10 Exercícios Oficiais
          </div>
          <div className="stat-pill">
            <Layers size={14} /> 3 Planos & Eixos
          </div>
          <div className="stat-pill">
            <Move size={14} /> Movimentos Articulares
          </div>
          <div className="stat-pill">
            <Zap size={14} /> Bioenergética
          </div>
          <div className="stat-pill">
            <HeartHandshake size={14} /> Padrões CORE, PAC & ERE
          </div>
        </StatPills>
      </HeroCard>

      <TabsNav>
        <TabButton 
          $active={activeSubTab === 'exercicios'} 
          onClick={() => setActiveSubTab('exercicios')}
        >
          <Dumbbell size={16} /> 10 Exercícios da Validação
        </TabButton>
        <TabButton 
          $active={activeSubTab === 'planos'} 
          onClick={() => setActiveSubTab('planos')}
        >
          <Layers size={16} /> Planos Anatômicos
        </TabButton>
        <TabButton 
          $active={activeSubTab === 'movimentos'} 
          onClick={() => setActiveSubTab('movimentos')}
        >
          <Move size={16} /> Movimentos Articulares
        </TabButton>
        <TabButton 
          $active={activeSubTab === 'teoria'} 
          onClick={() => setActiveSubTab('teoria')}
        >
          <BookOpen size={16} /> Estudo Teórico
        </TabButton>
      </TabsNav>

      {/* SUBTAB 1: 10 EXERCÍCIOS DA VALIDAÇÃO */}
      {activeSubTab === 'exercicios' && (
        <Card>
          <CardHeader>
            <div className="icon-wrapper"><Dumbbell size={28} /></div>
            <div>
              <h3>Os 10 Exercícios Oficiais da Pulseira Verde</h3>
              <p>Mapeamento de plano, movimento, musculatura e regras de substituição para a banca prática.</p>
            </div>
          </CardHeader>

          <SearchInputWrapper>
            <Search size={20} />
            <input 
              type="text" 
              placeholder="Buscar por exercício, plano, músculo ou substituição..." 
              value={exerciseSearch}
              onChange={(e) => setExerciseSearch(e.target.value)}
            />
          </SearchInputWrapper>

          {filteredExercises.map((ex) => (
            <ExerciseCard key={ex.id}>
              <div className="top-row">
                <h4>
                  <span className="number">{ex.id}</span>
                  {ex.nome}
                </h4>
                <Badge className={
                  ex.plano.includes('Transversal') ? 'purple' :
                  ex.plano.includes('Frontal') ? 'blue' : 'green'
                }>
                  Plano {ex.plano}
                </Badge>
              </div>

              <div className="meta-grid">
                <div className="meta-item">
                  <strong>Movimento Articular:</strong>
                  {ex.movimento}
                </div>
                <div className="meta-item">
                  <strong>Grupamento Muscular:</strong>
                  {ex.grupoMuscular}
                </div>
              </div>

              <div className="substitution-box">
                <RotateCcw size={18} />
                <span>
                  <strong>Substituição Oficial:</strong> {ex.substituicao}
                </span>
              </div>

              <div className="pac-tip">
                <strong>💡 Dica de Execução (Padrão PAC):</strong> {ex.dicaPAC}
              </div>
            </ExerciseCard>
          ))}

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <PlayQuizButton onClick={handleStartSimulado}>
              <Play size={18} fill="#065f46" />
              Treinar com o Simulado Oficial da Pulseira Verde
            </PlayQuizButton>
          </div>
        </Card>
      )}

      {/* SUBTAB 2: PLANOS ANATÔMICOS */}
      {activeSubTab === 'planos' && (
        <Card>
          <CardHeader>
            <div className="icon-wrapper"><Layers size={28} /></div>
            <div>
              <h3>Planos Anatômicos e Eixos de Rotação</h3>
              <p>As 3 referências espaciais fundamentais da anatomia e cinesiologia humana.</p>
            </div>
          </CardHeader>

          <PlanesGrid>
            {PLANES.map((plane) => (
              <PlaneCard key={plane.id}>
                <div className="plane-title">
                  <h4>{plane.name}</h4>
                  <Badge className="green">Eixo: {plane.axis}</Badge>
                </div>

                <div className="plane-details">
                  <div className="info-block">
                    <strong>Divisão Anatômica:</strong>
                    {plane.division}
                  </div>
                  <div className="info-block">
                    <strong>Descrição Mecânica:</strong>
                    {plane.description}
                  </div>
                </div>

                <div style={{ marginTop: '0.75rem' }}>
                  <strong style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#0f172a' }}>
                    Movimentos Principais:
                  </strong>
                  <div className="movements-tag-list">
                    {plane.movements.map((m, i) => (
                      <span key={i}>{m}</span>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: '1rem', background: '#ecfdf5', padding: '0.75rem 1rem', borderRadius: '12px', fontSize: '0.9rem', color: '#065f46' }}>
                  <strong>Exemplos de Exercícios:</strong> {plane.examples.join(', ')}
                </div>
              </PlaneCard>
            ))}
          </PlanesGrid>
        </Card>
      )}

      {/* SUBTAB 3: MOVIMENTOS ARTICULARES */}
      {activeSubTab === 'movimentos' && (
        <Card>
          <CardHeader>
            <div className="icon-wrapper"><Move size={28} /></div>
            <div>
              <h3>Glossário de Movimentos Articulares</h3>
              <p>Terminologia técnica essencial para a prescrição e correção no salão de treino.</p>
            </div>
          </CardHeader>

          <SearchInputWrapper>
            <Search size={20} />
            <input 
              type="text" 
              placeholder="Filtrar por nome de movimento (flexão, abdução, rotação, etc.)..." 
              value={movementSearch}
              onChange={(e) => setMovementSearch(e.target.value)}
            />
          </SearchInputWrapper>

          <div>
            {filteredMovements.map((mov, idx) => (
              <MovementListItem key={idx}>
                <div className="movement-info">
                  <h5>{mov.name}</h5>
                  <p>{mov.desc}</p>
                </div>
                <Badge className={
                  mov.plane === 'Sagital' ? 'green' :
                  mov.plane === 'Frontal' ? 'blue' : 'purple'
                }>
                  Plano {mov.plane}
                </Badge>
              </MovementListItem>
            ))}
          </div>
        </Card>
      )}

      {/* SUBTAB 4: ESTUDO TEÓRICO */}
      {activeSubTab === 'teoria' && (
        <>
          <Card>
            <CardHeader>
              <div className="icon-wrapper"><Zap size={28} /></div>
              <div>
                <h3>Bioenergética: Os 3 Sistemas Energéticos</h3>
                <p>Como o corpo humano resssintetiza ATP durante os diferentes esforços físicos.</p>
              </div>
            </CardHeader>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {TEORIA_PULSEIRA_VERDE.bioenergetica.map((bio) => (
                <div 
                  key={bio.sistema}
                  style={{ 
                    background: '#f8fafc', 
                    border: '1px solid #e2e8f0', 
                    borderRadius: '18px', 
                    padding: '1.5rem',
                    borderLeft: '4px solid #10b981'
                  }}
                >
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#065f46', marginBottom: '0.5rem' }}>
                    {bio.sistema}
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: '#334155', lineHeight: '1.5', marginBottom: '1rem' }}>
                    {bio.descricao}
                  </p>
                  <ul style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: '1.6', margin: 0, paddingLeft: '1.2rem' }}>
                    <li><strong>Duração:</strong> {bio.duracao}</li>
                    <li><strong>Intensidade:</strong> {bio.intensidade}</li>
                    <li><strong>Substrato:</strong> {bio.substrato}</li>
                    <li><strong>Exemplo:</strong> {bio.exemplo}</li>
                  </ul>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <CardHeader>
              <div className="icon-wrapper"><HeartHandshake size={28} /></div>
              <div>
                <h3>Metodologias Pratique de Atendimento e Execução</h3>
                <p>Os pilares da cultura de encantamento e correção no salão de musculação.</p>
              </div>
            </CardHeader>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {TEORIA_PULSEIRA_VERDE.metodologiaPratique.map((met) => (
                <div 
                  key={met.sigla}
                  style={{ 
                    background: '#f8fafc', 
                    border: '1px solid #e2e8f0', 
                    borderRadius: '18px', 
                    padding: '1.5rem' 
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <Badge className="green" style={{ fontSize: '0.9rem', padding: '0.3rem 0.8rem' }}>
                      {met.sigla}
                    </Badge>
                    <h4 style={{ margin: 0, fontSize: '1.05rem', fontWeight: '800', color: '#0f172a' }}>
                      {met.titulo}
                    </h4>
                  </div>
                  <ul style={{ margin: '0.5rem 0 0 1.2rem', padding: 0, color: '#475569', fontSize: '0.9rem', lineHeight: '1.6' }}>
                    {met.itens.map((it, i) => (
                      <li key={i}>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>
        </>
      )}
    </Container>
  );
};
