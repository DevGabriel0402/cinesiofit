import React, { useState } from 'react';
import styled from 'styled-components';
import { 
  Award, 
  Flame, 
  Activity, 
  ShieldAlert, 
  Scale, 
  HeartPulse, 
  AlertTriangle, 
  CheckCircle2, 
  Play, 
  ChevronRight, 
  Sparkles, 
  Clock, 
  Dumbbell, 
  Stethoscope,
  Info,
  Layers,
  ArrowUpRight,
  TrendingUp,
  BrainCircuit
} from 'lucide-react';
import { 
  PULSEIRA_VERMELHA_INFO, 
  PRINCIPIOS_TREINAMENTO, 
  BIOMECANICA_ALAVANCAS, 
  DIABETES_PRESCRICAO, 
  HIPERTENSAO_PRESCRICAO 
} from '../dataPulseiraVermelha';

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
  background: linear-gradient(135deg, #881337 0%, #be123c 50%, #e11d48 100%);
  border-radius: 28px;
  padding: 3rem 2rem;
  color: white;
  margin-bottom: 2rem;
  box-shadow: 0 20px 35px -10px rgba(225, 29, 72, 0.35);
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
    color: #ffe4e6;
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
  color: #9f1239;
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
    background-color: #fff1f2;
    color: #e11d48;
  }
`;

const StatPills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.75rem;

  .stat-pill {
    background: rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.15);
    padding: 0.45rem 0.9rem;
    border-radius: 999px;
    font-size: 0.825rem;
    font-weight: 600;
    color: #ffe4e6;
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
  background-color: ${({ $active }) => ($active ? '#e11d48' : 'transparent')};
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ $active, theme }) => ($active ? '#be123c' : theme.colors.background)};
    color: ${({ $active, theme }) => ($active ? 'white' : theme.colors.primary)};
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
    padding: 1.5rem 1rem;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.75rem;
  padding-bottom: 1.25rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primaryBg};

  .icon-wrapper {
    width: 52px;
    height: 52px;
    border-radius: 16px;
    background: #ffe4e6;
    color: #e11d48;
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

const HighlightBox = styled.div`
  background: #fff1f2;
  border-left: 5px solid #e11d48;
  padding: 1.25rem 1.5rem;
  border-radius: 0 16px 16px 0;
  margin-bottom: 1.5rem;

  h4 {
    margin: 0 0 0.5rem 0;
    color: #9f1239;
    font-weight: 800;
    font-size: 1.05rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    margin: 0;
    font-size: 0.95rem;
    color: #4c0519;
    line-height: 1.6;
  }
`;

const DangerBox = styled.div`
  background: #fef2f2;
  border: 2px solid #ef4444;
  padding: 1.25rem 1.5rem;
  border-radius: 16px;
  margin-bottom: 1.5rem;
  display: flex;
  gap: 1rem;
  align-items: flex-start;

  .danger-icon {
    color: #dc2626;
    flex-shrink: 0;
    margin-top: 0.2rem;
  }

  h4 {
    margin: 0 0 0.4rem 0;
    color: #991b1b;
    font-weight: 900;
    font-size: 1.05rem;
    letter-spacing: -0.01em;
  }

  p {
    margin: 0;
    font-size: 0.925rem;
    color: #7f1d1d;
    line-height: 1.55;
    font-weight: 600;
  }
`;

const Grid2 = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
  margin-bottom: 1.5rem;
`;

const Grid3 = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.25rem;
  margin-bottom: 1.5rem;
`;

const MiniCard = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 18px;
  padding: 1.4rem;
  transition: all 0.2s ease;

  &:hover {
    border-color: #fda4af;
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.sm};
  }

  h4 {
    font-size: 1.05rem;
    font-weight: 800;
    color: #be123c;
    margin: 0 0 0.5rem 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.55;
    margin: 0;
  }

  ul {
    margin: 0.5rem 0 0 1.2rem;
    padding: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 0.875rem;

    li {
      margin-bottom: 0.35rem;
      line-height: 1.5;
    }
  }
`;

const TableWrapper = styled.div`
  overflow-x: auto;
  margin: 1.5rem 0;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.sm};

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.9rem;
    text-align: left;
    background: white;

    th {
      background-color: #fff1f2;
      color: #9f1239;
      font-weight: 800;
      padding: 0.9rem 1.1rem;
      border-bottom: 2px solid #fecdd3;
      white-space: nowrap;
    }

    td {
      padding: 0.85rem 1.1rem;
      border-bottom: 1px solid #f1f5f9;
      color: ${({ theme }) => theme.colors.textSecondary};
      vertical-align: top;
      line-height: 1.5;

      strong {
        color: ${({ theme }) => theme.colors.secondary};
      }
    }

    tr:last-child td {
      border-bottom: none;
    }

    tr:hover td {
      background-color: #fafafa;
    }
  }
`;

const Badge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.65rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.4px;

  &.danger {
    background-color: #fee2e2;
    color: #991b1b;
    border: 1px solid #fecaca;
  }

  &.warning {
    background-color: #fef3c7;
    color: #92400e;
    border: 1px solid #fde68a;
  }

  &.success {
    background-color: #dcfce7;
    color: #166534;
    border: 1px solid #bbf7d0;
  }

  &.primary {
    background-color: #ffe4e6;
    color: #be123c;
    border: 1px solid #fecdd3;
  }
`;

const InteractiveLeverSimulator = styled.div`
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: white;
  border-radius: 20px;
  padding: 1.75rem;
  margin: 1.5rem 0;

  .simulator-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.25rem;
    flex-wrap: wrap;
    gap: 0.5rem;

    h4 {
      margin: 0;
      font-size: 1.1rem;
      font-weight: 800;
      color: #fda4af;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    span {
      font-size: 0.8rem;
      color: #94a3b8;
    }
  }

  .lever-controls {
    display: flex;
    gap: 0.75rem;
    margin-bottom: 1.25rem;
    flex-wrap: wrap;
  }

  .lever-btn {
    padding: 0.6rem 1.25rem;
    border-radius: 999px;
    font-weight: 700;
    font-size: 0.85rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.08);
    color: white;
    cursor: pointer;
    transition: all 0.2s;

    &.active {
      background: #e11d48;
      border-color: #e11d48;
      color: white;
      box-shadow: 0 0 16px rgba(225, 29, 72, 0.5);
    }

    &:hover:not(.active) {
      background: rgba(255, 255, 255, 0.15);
    }
  }

  .lever-visual {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 14px;
    padding: 1.25rem;
    border: 1px solid rgba(255, 255, 255, 0.1);

    .stat-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
      color: #cbd5e1;

      strong {
        color: white;
      }
    }

    .conclusion {
      margin-top: 0.75rem;
      padding-top: 0.75rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      font-size: 0.95rem;
      color: #fb7185;
      font-weight: 700;
    }
  }
`;

export const PulseiraVermelhaTab = ({ onStartQuiz }) => {
  const [activeSubTab, setActiveSubTab] = useState('principios');
  const [leverState, setLeverState] = useState('longo'); // 'longo' or 'curto'

  const handleStartSimulado = () => {
    if (onStartQuiz) {
      onStartQuiz('Pulseira Vermelha');
    }
  };

  return (
    <Container>
      <HeroCard>
        <div className="badge-wrapper">
          <Award size={16} />
          {PULSEIRA_VERMELHA_INFO.badge}
        </div>
        <h2>
          <Flame size={40} color="#fb7185" />
          {PULSEIRA_VERMELHA_INFO.title}
        </h2>
        <p className="subtitle">
          {PULSEIRA_VERMELHA_INFO.description}
        </p>
        
        <div className="hero-actions">
          <PlayQuizButton onClick={handleStartSimulado}>
            <Play size={18} fill="#9f1239" />
            Simulado Pulseira Vermelha (31 Questões)
          </PlayQuizButton>
        </div>

        <StatPills>
          <div className="stat-pill">
            <Activity size={14} /> 5 Princípios do Treino
          </div>
          <div className="stat-pill">
            <Scale size={14} /> Biomecânica de Alavancas
          </div>
          <div className="stat-pill">
            <Stethoscope size={14} /> Prescrição no Diabetes
          </div>
          <div className="stat-pill">
            <HeartPulse size={14} /> Prescrição na Hipertensão
          </div>
          <div className="stat-pill">
            <Sparkles size={14} /> Método PSF (UniPower)
          </div>
        </StatPills>
      </HeroCard>

      <TabsNav>
        <TabButton 
          $active={activeSubTab === 'principios'} 
          onClick={() => setActiveSubTab('principios')}
        >
          <Activity size={16} /> Princípios do Treinamento
        </TabButton>
        <TabButton 
          $active={activeSubTab === 'alavancas'} 
          onClick={() => setActiveSubTab('alavancas')}
        >
          <Scale size={16} /> Biomecânica & Alavancas
        </TabButton>
        <TabButton 
          $active={activeSubTab === 'diabetes'} 
          onClick={() => setActiveSubTab('diabetes')}
        >
          <Stethoscope size={16} /> Diabetes & Insulina
        </TabButton>
        <TabButton 
          $active={activeSubTab === 'has'} 
          onClick={() => setActiveSubTab('has')}
        >
          <HeartPulse size={16} /> Hipertensão Arterial
        </TabButton>
        <TabButton 
          $active={activeSubTab === 'resumo'} 
          onClick={() => setActiveSubTab('resumo')}
        >
          <BrainCircuit size={16} /> Guia Rápido & Regras
        </TabButton>
      </TabsNav>

      {/* SUBTAB 1: PRINCÍPIOS DO TREINAMENTO */}
      {activeSubTab === 'principios' && (
        <>
          <Card>
            <CardHeader>
              <div className="icon-wrapper"><Activity size={28} /></div>
              <div>
                <h3>{PRINCIPIOS_TREINAMENTO.introducao.title}</h3>
                <p>Compreenda a verdadeira ciência da manipulação de estímulos.</p>
              </div>
            </CardHeader>

            <HighlightBox>
              <h4><Info size={20} /> Origem do Erro Conceitual</h4>
              <p>{PRINCIPIOS_TREINAMENTO.introducao.diferenca}</p>
            </HighlightBox>

            <p style={{ fontSize: '1.05rem', lineHeight: '1.6', color: '#334155', marginBottom: '1.5rem' }}>
              <strong>Definição Científica:</strong> {PRINCIPIOS_TREINAMENTO.introducao.conceito}
            </p>

            <h4 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#0f172a', marginBottom: '1rem' }}>
              Os 5 Componentes da Carga de Treinamento
            </h4>
            <Grid3>
              {PRINCIPIOS_TREINAMENTO.introducao.componentesCarga.map((comp) => (
                <MiniCard key={comp.nome}>
                  <h4><CheckCircle2 size={18} /> {comp.nome}</h4>
                  <p>{comp.desc}</p>
                </MiniCard>
              ))}
            </Grid3>
          </Card>

          <Card>
            <CardHeader>
              <div className="icon-wrapper"><Layers size={28} /></div>
              <div>
                <h3>Os 5 Princípios Universais do Treinamento Físico</h3>
                <p>Bases científicas obrigatórias para qualquer prescrição de excelência.</p>
              </div>
            </CardHeader>

            {PRINCIPIOS_TREINAMENTO.principios.map((p) => (
              <div key={p.id} style={{ marginBottom: '2.5rem' }}>
                <h4 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#be123c', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <TrendingUp size={20} /> {p.nome}
                </h4>

                <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '16px', border: '1px solid #e2e8f0', marginBottom: '1rem' }}>
                  <div style={{ color: '#b91c1c', fontWeight: '700', fontSize: '0.9rem', marginBottom: '0.4rem' }}>
                    ⚠️ Erro Conceitual Comum:
                  </div>
                  <div style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
                    {p.erroComum}
                  </div>
                  <div style={{ color: '#0f172a', fontWeight: '700', fontSize: '0.95rem' }}>
                    ✅ Conceito Científico Real:
                  </div>
                  <div style={{ color: '#334155', fontSize: '0.925rem', lineHeight: '1.55', marginTop: '0.2rem' }}>
                    {p.conceitoReal}
                  </div>
                </div>

                {p.tabelaEstimulos && (
                  <TableWrapper>
                    <table>
                      <thead>
                        <tr>
                          <th>Intensidade</th>
                          <th>Reação do Organismo</th>
                          <th>Impacto e Resultado Prático</th>
                        </tr>
                      </thead>
                      <tbody>
                        {p.tabelaEstimulos.map((row) => (
                          <tr key={row.nivel}>
                            <td>
                              <Badge className={
                                row.status === 'ineficaz' ? 'warning' :
                                row.status === 'saude' ? 'primary' :
                                row.status === 'efetivo' ? 'success' : 'danger'
                              }>
                                {row.nivel}
                              </Badge>
                            </td>
                            <td>{row.reacao}</td>
                            <td><strong>{row.resultado}</strong></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </TableWrapper>
                )}

                {p.fatores && (
                  <MiniCard style={{ marginTop: '1rem' }}>
                    <h4 style={{ color: '#0f172a' }}>Fatores Determinantes da Variabilidade:</h4>
                    <ul>
                      {p.fatores.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                  </MiniCard>
                )}

                {p.pontoOtimo && (
                  <HighlightBox style={{ marginTop: '1rem' }}>
                    <h4><Sparkles size={18} /> Dica de Ouro: O Ponto Ótimo de Estímulo</h4>
                    <p>{p.pontoOtimo}</p>
                    <p style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>
                      <strong>Lei da Reversibilidade:</strong> {p.leiReversibilidade}
                    </p>
                  </HighlightBox>
                )}

                {p.regraProgressaoInicial && (
                  <div style={{ background: '#fdf2f8', border: '1px solid #fbcfe8', padding: '1.25rem', borderRadius: '16px', marginTop: '1rem' }}>
                    <h5 style={{ color: '#9d174d', fontWeight: '800', margin: '0 0 0.5rem 0', fontSize: '1rem' }}>
                      🎯 Regra de Ouro para Primeira Sobrecarga (Progressão Inicial):
                    </h5>
                    <ol style={{ margin: 0, paddingLeft: '1.25rem', color: '#831843', fontSize: '0.9rem', lineHeight: '1.6' }}>
                      {p.regraProgressaoInicial.map((step, idx) => <li key={idx}><strong>{step}</strong></li>)}
                    </ol>
                  </div>
                )}
              </div>
            ))}
          </Card>

          <Card>
            <CardHeader>
              <div className="icon-wrapper"><Clock size={28} /></div>
              <div>
                <h3>Tempo de Recuperação Entre Sessões</h3>
                <p>Calibragem do intervalo para assimilação compensatória eficiente.</p>
              </div>
            </CardHeader>

            <TableWrapper>
              <table>
                <thead>
                  <tr>
                    <th>Tipo de Estímulo</th>
                    <th>Objetivo Principal</th>
                    <th>Nível do Praticante</th>
                    <th>Tempo de Recuperação</th>
                  </tr>
                </thead>
                <tbody>
                  {PRINCIPIOS_TREINAMENTO.tabelaRecuperacao.map((row) => (
                    <tr key={row.estimulo}>
                      <td><Badge className={row.estimulo.includes('Forte') ? 'danger' : 'primary'}>{row.estimulo}</Badge></td>
                      <td>{row.objetivo}</td>
                      <td>{row.nivel}</td>
                      <td><strong>{row.tempo}</strong></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableWrapper>
          </Card>
        </>
      )}

      {/* SUBTAB 2: BIOMECÂNICA & ALAVANCAS */}
      {activeSubTab === 'alavancas' && (
        <>
          <Card>
            <CardHeader>
              <div className="icon-wrapper"><Scale size={28} /></div>
              <div>
                <h3>{BIOMECANICA_ALAVANCAS.titulo}</h3>
                <p>{BIOMECANICA_ALAVANCAS.subtitulo}</p>
              </div>
            </CardHeader>

            <h4 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#0f172a', marginBottom: '1rem' }}>
              Os 3 Componentes Estruturais da Alavanca Corporal
            </h4>
            <Grid3>
              {BIOMECANICA_ALAVANCAS.componentes.map((c) => (
                <MiniCard key={c.sigla}>
                  <h4>
                    <span style={{ background: '#be123c', color: 'white', width: '26px', height: '26px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem' }}>
                      {c.sigla}
                    </span>
                    {c.nome}
                  </h4>
                  <p><strong>No corpo humano:</strong> {c.anatomia}</p>
                  <p style={{ marginTop: '0.4rem', color: '#64748b' }}>{c.desc}</p>
                </MiniCard>
              ))}
            </Grid3>

            <HighlightBox>
              <h4><Info size={18} /> Braços de Alavanca: O Fixo vs O Manipulável</h4>
              <p>• {BIOMECANICA_ALAVANCAS.bracos.bf}</p>
              <p style={{ marginTop: '0.5rem' }}>• {BIOMECANICA_ALAVANCAS.bracos.br}</p>
            </HighlightBox>
          </Card>

          <Card>
            <CardHeader>
              <div className="icon-wrapper"><Layers size={28} /></div>
              <div>
                <h3>Classificação das 3 Classes de Alavancas</h3>
                <p>Regra de Ouro: Identifique qual componente está localizado no MEIO!</p>
              </div>
            </CardHeader>

            <TableWrapper>
              <table>
                <thead>
                  <tr>
                    <th>Classe</th>
                    <th>Componente no Meio</th>
                    <th>Exemplo Cotidiano</th>
                    <th>Exemplo no Corpo Humano</th>
                  </tr>
                </thead>
                <tbody>
                  {BIOMECANICA_ALAVANCAS.classes.map((cls) => (
                    <tr key={cls.tipo}>
                      <td><Badge className="primary">{cls.tipo}</Badge></td>
                      <td><strong>{cls.meio}</strong></td>
                      <td>{cls.cotidiano}</td>
                      <td>
                        <strong>{cls.anatomia}</strong>
                        <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.25rem' }}>
                          {cls.detalhes}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableWrapper>

            {/* Simulador Interativo */}
            <InteractiveLeverSimulator>
              <div className="simulator-header">
                <h4><Scale size={20} /> Simulador Visual: Manipulação do Braço de Resistência (BR)</h4>
                <span>Exercício: Elevação Lateral com Haltere (8 kg)</span>
              </div>

              <div className="lever-controls">
                <button 
                  className={`lever-btn ${leverState === 'longo' ? 'active' : ''}`}
                  onClick={() => setLeverState('longo')}
                >
                  Cotovelo Estendido (BR Longo)
                </button>
                <button 
                  className={`lever-btn ${leverState === 'curto' ? 'active' : ''}`}
                  onClick={() => setLeverState('curto')}
                >
                  Cotovelo a 90° (BR Encurtado)
                </button>
              </div>

              <div className="lever-visual">
                <div className="stat-row">
                  <span>Distância da Carga ao Eixo Articular:</span>
                  <strong>{leverState === 'longo' ? '65 cm (Máxima alavanca)' : '32 cm (~Metade da distância)'}</strong>
                </div>
                <div className="stat-row">
                  <span>Torque Resistente sobre o Deltoide:</span>
                  <strong>{leverState === 'longo' ? 'Alto Torque (~51 N.m)' : 'Baixo Torque (~25 N.m)'}</strong>
                </div>
                <div className="stat-row">
                  <span>Esforço Muscular Exigido:</span>
                  <strong style={{ color: leverState === 'longo' ? '#f87171' : '#4ade80' }}>
                    {leverState === 'longo' ? '100% (Desafio Máximo)' : '~50% (Facilitado biomecanicamente)'}
                  </strong>
                </div>
                <div className="conclusion">
                  {leverState === 'longo' 
                    ? '💡 Alavanca longa: Dificulta o exercício, ideal para progressão de carga e alunos avançados.'
                    : '💡 Alavanca encurtada: Facilita o exercício sem mudar os 8 kg. Ideal para concluir a série na fadiga ou poupar a articulação.'}
                </div>
              </div>
            </InteractiveLeverSimulator>

            <h4 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#0f172a', marginBottom: '1rem', marginTop: '2rem' }}>
              Aplicações Práticas na Musculação
            </h4>
            <Grid2>
              {BIOMECANICA_ALAVANCAS.exemplosPraticos.map((ex) => (
                <MiniCard key={ex.exercicio}>
                  <h4><Dumbbell size={18} /> {ex.exercicio}</h4>
                  <p style={{ color: '#991b1b', marginBottom: '0.4rem' }}>
                    <strong>Maior Sobrecarga:</strong> {ex.variacaoLonga}
                  </p>
                  <p style={{ color: '#166534' }}>
                    <strong>Alívio Biomecânico:</strong> {ex.variacaoCurta}
                  </p>
                </MiniCard>
              ))}
            </Grid2>
          </Card>
        </>
      )}

      {/* SUBTAB 3: DIABETES & INSULINA */}
      {activeSubTab === 'diabetes' && (
        <>
          <Card>
            <CardHeader>
              <div className="icon-wrapper"><Stethoscope size={28} /></div>
              <div>
                <h3>{DIABETES_PRESCRICAO.titulo}</h3>
                <p>{DIABETES_PRESCRICAO.subtitulo}</p>
              </div>
            </CardHeader>

            <HighlightBox>
              <h4><Sparkles size={20} /> {DIABETES_PRESCRICAO.analogia.titulo}</h4>
              <p>{DIABETES_PRESCRICAO.analogia.texto}</p>
            </HighlightBox>

            <Grid2>
              {DIABETES_PRESCRICAO.tipos.map((t) => (
                <MiniCard key={t.tipo}>
                  <h4>{t.tipo}</h4>
                  <p>{t.desc}</p>
                </MiniCard>
              ))}
            </Grid2>

            <h4 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#0f172a', marginBottom: '1rem' }}>
              Tabela de Diagnóstico e Valores Glicêmicos
            </h4>
            <TableWrapper>
              <table>
                <thead>
                  <tr>
                    <th>Classificação</th>
                    <th>Glicemia em Jejum</th>
                    <th>Pós-Prandial (até 2h)</th>
                    <th>Conduta Clínica</th>
                  </tr>
                </thead>
                <tbody>
                  {DIABETES_PRESCRICAO.tabelaGlicemia.map((row) => (
                    <tr key={row.classificacao}>
                      <td>
                        <Badge className={
                          row.classificacao.includes('Normal') ? 'success' :
                          row.classificacao.includes('Pré') ? 'warning' : 'danger'
                        }>
                          {row.classificacao}
                        </Badge>
                      </td>
                      <td><strong>{row.jejum}</strong></td>
                      <td>{row.posPrandial}</td>
                      <td>{row.conduta}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableWrapper>

            <h4 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#0f172a', marginBottom: '1rem', marginTop: '1.5rem' }}>
              Por que o Exercício Físico Funciona como Remédio?
            </h4>
            <Grid3>
              {DIABETES_PRESCRICAO.mecanismosExercicio.map((m) => (
                <MiniCard key={m.titulo}>
                  <h4><CheckCircle2 size={18} /> {m.titulo}</h4>
                  <p>{m.desc}</p>
                </MiniCard>
              ))}
            </Grid3>
          </Card>

          <Card>
            <CardHeader>
              <div className="icon-wrapper"><ShieldAlert size={28} /></div>
              <div>
                <h3>Protocolo Clínico de Segurança e Cuidados</h3>
                <p>Condutas obrigatórias antes e durante a sessão de treino.</p>
              </div>
            </CardHeader>

            <Grid2>
              {DIABETES_PRESCRICAO.protocoloSeguranca.map((prot) => (
                <MiniCard key={prot.regra} style={{ borderLeft: '4px solid #be123c' }}>
                  <h4>{prot.regra}</h4>
                  <p>{prot.desc}</p>
                </MiniCard>
              ))}
            </Grid2>

            <h4 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#0f172a', marginBottom: '1rem', marginTop: '1.5rem' }}>
              Diretrizes de Prescrição: O Princípio PSF (Pouco, Simples e Fácil)
            </h4>
            <HighlightBox>
              <p>• <strong>Volume Semanal:</strong> {DIABETES_PRESCRICAO.diretrizesTreino.volumeSemanal}</p>
              <p style={{ marginTop: '0.4rem' }}>• <strong>Regra de Ouro da Frequência:</strong> {DIABETES_PRESCRICAO.diretrizesTreino.regraDescanso}</p>
              <p style={{ marginTop: '0.4rem' }}>• <strong>Método PSF:</strong> {DIABETES_PRESCRICAO.diretrizesTreino.principioPSF}</p>
              <p style={{ marginTop: '0.4rem' }}>• <strong>Musculação:</strong> {DIABETES_PRESCRICAO.diretrizesTreino.musculacao}</p>
            </HighlightBox>

            <h4 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#0f172a', marginBottom: '1rem' }}>
              Modelo Prático de Ficha de Iniciação (1º Mês)
            </h4>
            <TableWrapper>
              <table>
                <thead>
                  <tr>
                    <th>Bloco</th>
                    <th>Exercício Sugerido</th>
                    <th>Parâmetros Iniciais</th>
                    <th>Objetivo Técnico</th>
                  </tr>
                </thead>
                <tbody>
                  {DIABETES_PRESCRICAO.fichaTreinoModelo.map((f) => (
                    <tr key={f.bloco}>
                      <td><Badge className="primary">{f.bloco}</Badge></td>
                      <td><strong>{f.exercicio}</strong></td>
                      <td>{f.series}</td>
                      <td>{f.objetivo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableWrapper>
          </Card>
        </>
      )}

      {/* SUBTAB 4: HIPERTENSÃO ARTERIAL (HAS) */}
      {activeSubTab === 'has' && (
        <>
          <Card>
            <CardHeader>
              <div className="icon-wrapper"><HeartPulse size={28} /></div>
              <div>
                <h3>{HIPERTENSAO_PRESCRICAO.titulo}</h3>
                <p>{HIPERTENSAO_PRESCRICAO.subtitulo}</p>
              </div>
            </CardHeader>

            <HighlightBox>
              <h4><Activity size={18} /> Contexto Epidemiológico</h4>
              <p>{HIPERTENSAO_PRESCRICAO.epidemiologia}</p>
            </HighlightBox>

            <Grid2>
              <MiniCard>
                <h4>Sístole (PAS)</h4>
                <p>{HIPERTENSAO_PRESCRICAO.fisiologiaPA.pas}</p>
              </MiniCard>
              <MiniCard>
                <h4>Diástole (PAD)</h4>
                <p>{HIPERTENSAO_PRESCRICAO.fisiologiaPA.pad}</p>
              </MiniCard>
            </Grid2>

            <h4 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#0f172a', marginBottom: '1rem' }}>
              Classificação da Pressão Arterial (SBC vs AHA)
            </h4>
            <TableWrapper>
              <table>
                <thead>
                  <tr>
                    <th>Diretriz</th>
                    <th>Normotensão (Desejável)</th>
                    <th>Pré-Hipertensão</th>
                    <th>Hipertensão Estabelecida</th>
                  </tr>
                </thead>
                <tbody>
                  {HIPERTENSAO_PRESCRICAO.tabelaClassificacao.map((row) => (
                    <tr key={row.diretriz}>
                      <td><strong>{row.diretriz}</strong></td>
                      <td><Badge className="success">{row.normal}</Badge></td>
                      <td><Badge className="warning">{row.pre}</Badge></td>
                      <td><Badge className="danger">{row.hipertenso}</Badge></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableWrapper>

            <h4 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#0f172a', marginBottom: '1rem', marginTop: '1.5rem' }}>
              Benefícios Fisiológicos e Equivalência Terapêutica
            </h4>
            <Grid2>
              {HIPERTENSAO_PRESCRICAO.beneficiosCardiovasculares.map((b, idx) => (
                <MiniCard key={idx}>
                  <p style={{ fontWeight: idx === 3 ? '800' : '500', color: idx === 3 ? '#be123c' : '#334155' }}>
                    {b}
                  </p>
                </MiniCard>
              ))}
            </Grid2>
          </Card>

          <Card>
            <CardHeader>
              <div className="icon-wrapper"><AlertTriangle size={28} /></div>
              <div>
                <h3>Protocolos Críticos de Segurança na HAS</h3>
                <p>Diretrizes vitais que previnem intercorrências cardiovasculares no salão.</p>
              </div>
            </CardHeader>

            {/* PONTO DE CORTE CRÍTICO */}
            <DangerBox>
              <AlertTriangle className="danger-icon" size={28} />
              <div>
                <h4>{HIPERTENSAO_PRESCRICAO.protocolosSegurancaCriticos[0].titulo}</h4>
                <p>{HIPERTENSAO_PRESCRICAO.protocolosSegurancaCriticos[0].texto}</p>
              </div>
            </DangerBox>

            <Grid3>
              <MiniCard style={{ borderLeft: '4px solid #f59e0b' }}>
                <h4>{HIPERTENSAO_PRESCRICAO.protocolosSegurancaCriticos[1].titulo}</h4>
                <p>{HIPERTENSAO_PRESCRICAO.protocolosSegurancaCriticos[1].texto}</p>
              </MiniCard>

              <MiniCard style={{ borderLeft: '4px solid #ef4444' }}>
                <h4>{HIPERTENSAO_PRESCRICAO.protocolosSegurancaCriticos[2].titulo}</h4>
                <p>{HIPERTENSAO_PRESCRICAO.protocolosSegurancaCriticos[2].texto}</p>
              </MiniCard>

              <MiniCard style={{ borderLeft: '4px solid #3b82f6' }}>
                <h4>{HIPERTENSAO_PRESCRICAO.protocolosSegurancaCriticos[3].titulo}</h4>
                <p>{HIPERTENSAO_PRESCRICAO.protocolosSegurancaCriticos[3].texto}</p>
              </MiniCard>
            </Grid3>

            <h4 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#0f172a', marginBottom: '1rem', marginTop: '1.5rem' }}>
              Estrutura de Sessão Inicial (Método PSF)
            </h4>
            <HighlightBox>
              <p><strong>Fluxo da Sessão:</strong> {HIPERTENSAO_PRESCRICAO.modeloTreinoPSF.estrutura}</p>
              <p style={{ marginTop: '0.6rem' }}><strong>Exercícios Guiados Recomendados:</strong></p>
              <ul style={{ margin: '0.4rem 0 0 1.2rem', padding: 0 }}>
                {HIPERTENSAO_PRESCRICAO.modeloTreinoPSF.exerciciosSugeridos.map((ex, i) => (
                  <li key={i}>{ex}</li>
                ))}
              </ul>
            </HighlightBox>
          </Card>
        </>
      )}

      {/* SUBTAB 5: RESUMO CONSOLIDADO */}
      {activeSubTab === 'resumo' && (
        <Card>
          <CardHeader>
            <div className="icon-wrapper"><BrainCircuit size={28} /></div>
            <div>
              <h3>Resumo Consolidado de Diretrizes da Pulseira Vermelha</h3>
              <p>O checklist mental do instrutor de alta performance na Pratique Fitness.</p>
            </div>
          </CardHeader>

          <Grid2>
            <MiniCard>
              <h4>1. Carga x Peso</h4>
              <p>Carga é estímulo total (quebra a homeostase). Peso é apenas 1 dos 5 componentes (Volume, Intensidade, Duração, Frequência e Densidade).</p>
            </MiniCard>

            <MiniCard>
              <h4>2. SAG & Estímulos</h4>
              <p>Estímulos Médios geram saúde; Estímulos Fortes geram performance e hipertrofia. Cuidado com o efeito acumulado da fadiga semanal!</p>
            </MiniCard>

            <MiniCard>
              <h4>3. Continuidade & Ápice</h4>
              <p>Aplique o novo estímulo exatamente no ápice da curva de supercompensação. Iniciantes treinam 4-5x com estímulos médios.</p>
            </MiniCard>

            <MiniCard>
              <h4>4. Progressão Segura</h4>
              <p>Volume e Intensidade são inversamente proporcionais. Progrida primeiro Repetições ➔ Séries ➔ Exercícios antes de subir o peso!</p>
            </MiniCard>

            <MiniCard>
              <h4>5. Alavancas & BR</h4>
              <p>O Braço de Força é anatomicamente fixo. Para facilitar na fadiga ou proteger articulações, encurte o Braço de Resistência (ex.: dobre os cotovelos).</p>
            </MiniCard>

            <MiniCard>
              <h4>6. Diabetes & Segurança</h4>
              <p>Glicemia pré-treino &lt; 100 mg/dL: dê 15 a 30g de carbo. Se &gt; 200 mg/dL com insulina rápida: aguarde 90 minutos.</p>
            </MiniCard>

            <MiniCard>
              <h4>7. Hipertensão & Ponto de Corte</h4>
              <p>PA &ge; 200/115 mmHg: EXERCÍCIO PROIBIDO. Beta-bloqueador exige uso de PSE &le; 4. Proibição absoluta da Manobra de Valsalva.</p>
            </MiniCard>

            <MiniCard>
              <h4>8. Equivalência Terapêutica</h4>
              <p>Tanto exercícios aeróbicos quanto a musculação reduzem a pressão arterial de forma clinicamente equivalente e complementar.</p>
            </MiniCard>
          </Grid2>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <PlayQuizButton onClick={handleStartSimulado}>
              <Play size={18} fill="#9f1239" />
              Treinar com o Simulado Oficial da Pulseira Vermelha
            </PlayQuizButton>
          </div>
        </Card>
      )}
    </Container>
  );
};
