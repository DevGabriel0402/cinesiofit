import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { 
  Printer, 
  FileText, 
  Loader2, 
  Award, 
  Activity, 
  BookOpen, 
  CheckCircle2, 
  Download, 
  Sparkles,
  Info,
  Layers,
  ChevronRight
} from 'lucide-react';
import { pdf } from '@react-pdf/renderer';
import { EbookDocument } from './EbookDocument';
import { EXERCICIOS_PULSEIRA_VERDE, TEORIA_PULSEIRA_VERDE } from '../../dataPulseiraVerde';
import { 
  PRINCIPIOS_TREINAMENTO, 
  BIOMECANICA_ALAVANCAS,
  ALAVANCAS_BIOMECANICAS,
  DIABETES_PRESCRICAO, 
  HIPERTENSAO_PRESCRICAO 
} from '../../dataPulseiraVermelha';
import { MUSCLES, PLANES, MOVEMENTS } from '../../data';
import toast from 'react-hot-toast';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  animation: fadeIn 0.3s ease;

  @media print {
    display: none !important;
  }
`;

const HeroBanner = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 24px;
  padding: 2.25rem 2rem;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.06);
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: ${({ $activeColor }) => $activeColor || '#0f172a'};
    transition: background 0.3s ease;
  }

  .icon-circle {
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 20px;
    background: ${({ $activeBg }) => $activeBg || '#f1f5f9'};
    color: ${({ $activeColor }) => $activeColor || '#0f172a'};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.25rem;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
    transition: all 0.3s ease;
  }

  h2 {
    font-size: 2rem;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.text};
    letter-spacing: -0.03em;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.colors.textMuted};
    max-width: 38rem;
    font-size: 0.95rem;
    line-height: 1.6;
  }
`;

const ScopeSelectorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const ScopeCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 2px solid ${({ $isSelected, $color, theme }) => 
    $isSelected ? $color : theme.colors.border};
  border-radius: 20px;
  padding: 1.5rem 1.25rem;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  box-shadow: ${({ $isSelected, $color }) => 
    $isSelected ? `0 12px 28px -6px ${$color}35` : '0 4px 12px rgba(0,0,0,0.03)'};
  transform: ${({ $isSelected }) => ($isSelected ? 'translateY(-3px)' : 'none')};

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ $color }) => $color};
    box-shadow: 0 12px 24px -6px rgba(0,0,0,0.08);
  }

  .card-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 1rem;

    .icon-badge {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background: ${({ $bgColor }) => $bgColor};
      color: ${({ $color }) => $color};
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .select-indicator {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      border: 2px solid ${({ $isSelected, $color }) => $isSelected ? $color : '#cbd5e1'};
      background: ${({ $isSelected, $color }) => $isSelected ? $color : 'transparent'};
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }
  }

  h3 {
    font-size: 1.15rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.35rem;
  }

  .subtitle {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.textMuted};
    margin-bottom: 1rem;
    line-height: 1.4;
    min-height: 2.4rem;
  }

  .highlights {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-top: auto;
    padding-top: 0.75rem;
    border-top: 1px solid ${({ theme }) => theme.colors.borderLight};

    .tag {
      font-size: 0.725rem;
      font-weight: 700;
      padding: 0.2rem 0.55rem;
      border-radius: 6px;
      background: ${({ $bgColor }) => $bgColor};
      color: ${({ $color }) => $color};
    }
  }
`;

const ActionsPanel = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 20px;
  padding: 1.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.25rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);

  .info-side {
    display: flex;
    align-items: center;
    gap: 1rem;

    .scope-bullet {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: ${({ $activeColor }) => $activeColor};
      box-shadow: 0 0 12px ${({ $activeColor }) => $activeColor};
    }

    h4 {
      font-size: 1.1rem;
      font-weight: 800;
      color: ${({ theme }) => theme.colors.text};
      margin: 0;
    }

    p {
      font-size: 0.825rem;
      color: ${({ theme }) => theme.colors.textMuted};
      margin: 0.15rem 0 0 0;
    }
  }

  .button-group {
    display: flex;
    align-items: center;
    gap: 0.85rem;
    flex-wrap: wrap;
  }
`;

const PrintBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;
  background: ${({ $color }) => $color || '#0f172a'};
  color: white;
  padding: 0.875rem 1.6rem;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 800;
  box-shadow: 0 4px 16px ${({ $color }) => `${$color}40`};
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.1);
    box-shadow: 0 8px 20px ${({ $color }) => `${$color}55`};
  }

  &:active {
    transform: translateY(0);
  }
`;

const PdfDownloadBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;
  background: #ffffff;
  color: ${({ theme }) => theme.colors.text};
  padding: 0.875rem 1.6rem;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 800;
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    background: #f8fafc;
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: wait;
  }
`;

const SpinIcon = styled(Loader2)`
  animation: spin 1s linear infinite;
  @keyframes spin {
    100% { transform: rotate(360deg); }
  }
`;

const PreviewCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 4px 20px rgba(0,0,0,0.03);

  .preview-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};

    h4 {
      font-size: 1.25rem;
      font-weight: 800;
      color: ${({ theme }) => theme.colors.text};
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    span.badge {
      font-size: 0.75rem;
      font-weight: 800;
      padding: 0.25rem 0.65rem;
      border-radius: 999px;
      background: ${({ $bgColor }) => $bgColor};
      color: ${({ $color }) => $color};
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
  }

  .content-list {
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
  }

  .content-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.85rem 1rem;
    border-radius: 12px;
    background: #f8fafc;
    border: 1px solid #e2e8f0;

    .row-title {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      font-size: 0.9rem;
      font-weight: 700;
      color: #1e293b;
    }

    .row-detail {
      font-size: 0.8rem;
      color: #64748b;
      font-weight: 600;
    }
  }
`;

/* DOCUMENTO VISÍVEL EXCLUSIVAMENTE NA IMPRESSÃO (window.print()) */
const PrintableDocument = styled.div`
  display: none;

  @media print {
    display: block !important;
    background: white;
    color: black;
    font-family: 'Inter', -apple-system, sans-serif;
    padding: 0;
    margin: 0;

    @page {
      size: A4;
      margin: 1.5cm;
    }

    .print-header {
      border-bottom: 3px solid #0f172a;
      padding-bottom: 12px;
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      h1 {
        font-size: 24pt;
        font-weight: 900;
        margin: 0;
        color: #0f172a;
      }
      p {
        margin: 4px 0 0 0;
        font-size: 10pt;
        color: #475569;
      }
      .print-tag {
        font-size: 9pt;
        font-weight: 800;
        text-transform: uppercase;
        color: #0f172a;
      }
    }

    .print-section-title {
      font-size: 14pt;
      font-weight: 800;
      margin: 20px 0 10px 0;
      border-bottom: 1.5px solid #cbd5e1;
      padding-bottom: 4px;
      color: #0f172a;
      page-break-after: avoid;
    }

    .print-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 16px;
      font-size: 9pt;

      th {
        background: #f1f5f9;
        color: #0f172a;
        font-weight: 800;
        text-align: left;
        padding: 6px 8px;
        border: 1px solid #cbd5e1;
      }

      td {
        padding: 6px 8px;
        border: 1px solid #e2e8f0;
        color: #334155;
      }
    }

    .print-card {
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      padding: 10px;
      margin-bottom: 12px;
      page-break-inside: avoid;

      h3 {
        font-size: 11pt;
        font-weight: 800;
        margin: 0 0 4px 0;
        color: #0f172a;
      }
      p {
        font-size: 9pt;
        margin: 2px 0;
        color: #334155;
      }
    }

    .page-break {
      page-break-before: always;
    }

    .print-footer {
      margin-top: 30px;
      border-top: 1px solid #cbd5e1;
      padding-top: 8px;
      font-size: 8pt;
      color: #64748b;
      text-align: center;
    }
  }
`;

export const EbookGenerator = ({ onSelectScope }) => {
  const [selectedScope, setSelectedScope] = useState('verde');
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(null);

  const scopes = [
    {
      id: 'verde',
      title: 'Pulseira Verde',
      subtitle: 'Validação Prática & Fundamentos de Cinesiologia',
      color: '#10b981',
      bgColor: '#ecfdf5',
      icon: Award,
      badge: 'Nível 1 UniPower',
      topics: ['10 Exercícios Oficiais', 'Planos & Movimentos', 'Bioenergética', 'CORE & PAC'],
      count: '10 Exercícios + 4 Módulos'
    },
    {
      id: 'vermelha',
      title: 'Pulseira Vermelha',
      subtitle: 'Metodologia Power & Prescrição Científica Avançada',
      color: '#e11d48',
      bgColor: '#fff1f2',
      icon: Award,
      badge: 'Nível 2 UniPower',
      topics: ['Princípios do Treino', 'SAG (Selye)', 'Alavancas (Torque/BR)', 'Diabetes & HAS'],
      count: 'Princípios + Alavancas + Clínica'
    },
    {
      id: 'muscles',
      title: 'Atlas Muscular',
      subtitle: 'Guia Completo dos 12 Grupamentos Musculares',
      color: '#0f172a',
      bgColor: '#f1f5f9',
      icon: Activity,
      badge: 'Cinesiologia Pura',
      topics: ['Origem e Composição', 'Ações Articulares', 'Planos de Ação', 'Exercícios na Sala'],
      count: '12 Grupamentos'
    },
    {
      id: 'all',
      title: 'Apostila Completa',
      subtitle: 'Todas as Informações e Módulos Unificados do Sistema',
      color: '#2563eb',
      bgColor: '#eff6ff',
      icon: BookOpen,
      badge: 'Sistema Integrado',
      topics: ['Pulseira Verde', 'Pulseira Vermelha', 'Atlas de Músculos', 'Pratique Fit'],
      count: 'Apostila Integral (A4)'
    }
  ];

  const currentScopeObj = scopes.find(s => s.id === selectedScope) || scopes[0];

  const handleSelectScope = (scopeId) => {
    setSelectedScope(scopeId);
    if (onSelectScope) {
      onSelectScope(scopeId);
    }
  };

  const handleBrowserPrint = () => {
    window.print();
  };

  const handleGeneratePdf = async () => {
    try {
      setIsGeneratingPdf(true);
      const doc = <EbookDocument scope={selectedScope} />;
      const blob = await pdf(doc).toBlob();
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);

      // Abre o documento em nova aba
      window.open(url, '_blank');
      toast.success(`PDF da ${currentScopeObj.title} gerado com sucesso!`);
    } catch (err) {
      console.error('Erro ao gerar PDF:', err);
      toast.error('Erro ao preparar PDF. Tente usar "Imprimir Agora".');
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  useEffect(() => {
    return () => {
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }
    };
  }, [pdfUrl]);

  return (
    <>
      <Container>
        {/* BANNER PRINCIPAL */}
        <HeroBanner 
          $activeColor={currentScopeObj.color} 
          $activeBg={currentScopeObj.bgColor}
        >
          <div className="icon-circle">
            <Printer size={34} />
          </div>
          <h2>Central de Impressão e Exportação</h2>
          <p>
            Escolha abaixo o módulo que deseja imprimir ou exportar. Você pode imprimir direto no seu navegador com layout verticalizado para prancheta ou gerar o arquivo PDF oficial.
          </p>
        </HeroBanner>

        {/* SELETORES DE ESCOPO (AS 4 OPÇÕES SOLICITADAS) */}
        <ScopeSelectorGrid>
          {scopes.map((s) => {
            const Icon = s.icon;
            const isSelected = selectedScope === s.id;
            return (
              <ScopeCard
                key={s.id}
                $isSelected={isSelected}
                $color={s.color}
                $bgColor={s.bgColor}
                onClick={() => handleSelectScope(s.id)}
              >
                <div>
                  <div className="card-top">
                    <div className="icon-badge">
                      <Icon size={24} />
                    </div>
                    <div className="select-indicator">
                      {isSelected && <CheckCircle2 size={16} />}
                    </div>
                  </div>

                  <h3>{s.title}</h3>
                  <p className="subtitle">{s.subtitle}</p>
                </div>

                <div className="highlights">
                  {s.topics.map((t, idx) => (
                    <span key={idx} className="tag">{t}</span>
                  ))}
                </div>
              </ScopeCard>
            );
          })}
        </ScopeSelectorGrid>

        {/* PAINEL DE AÇÃO E BOTÕES DE IMPRESSÃO */}
        <ActionsPanel $activeColor={currentScopeObj.color}>
          <div className="info-side">
            <div className="scope-bullet" />
            <div>
              <h4>{currentScopeObj.title} Selecionada</h4>
              <p>Escopo ativo: {currentScopeObj.count} • Pronto para prancheta A4</p>
            </div>
          </div>

          <div className="button-group">
            <PrintBtn 
              $color={currentScopeObj.color} 
              onClick={handleBrowserPrint}
              title="Abre a caixa de diálogo de impressão do navegador ou permite salvar como PDF imediatamente"
            >
              <Printer size={20} />
              <span>Imprimir Agora (Navegador)</span>
            </PrintBtn>

            <PdfDownloadBtn 
              onClick={handleGeneratePdf}
              disabled={isGeneratingPdf}
              title="Gera e compila o documento vetorial oficial via PDF Renderer"
            >
              {isGeneratingPdf ? (
                <>
                  <SpinIcon size={20} />
                  <span>Gerando PDF Oficial...</span>
                </>
              ) : (
                <>
                  <Download size={20} />
                  <span>Baixar PDF Oficial</span>
                </>
              )}
            </PdfDownloadBtn>
          </div>
        </ActionsPanel>

        {/* VISUALIZAÇÃO PRÉVIA DO CONTEÚDO SELECIONADO */}
        <PreviewCard 
          $color={currentScopeObj.color} 
          $bgColor={currentScopeObj.bgColor}
        >
          <div className="preview-header">
            <h4>
              <FileText size={20} color={currentScopeObj.color} />
              Sumário do Conteúdo a Ser Impresso
            </h4>
            <span className="badge">{currentScopeObj.badge}</span>
          </div>

          <div className="content-list">
            {selectedScope === 'verde' && (
              <>
                <div className="content-row">
                  <div className="row-title">
                    <Award size={18} color="#10b981" />
                    <span>Os 10 Exercícios da Validação Prática</span>
                  </div>
                  <span className="row-detail">Supino, Desenvolvimento, Pulley, Agachamento, etc.</span>
                </div>
                <div className="content-row">
                  <div className="row-title">
                    <Layers size={18} color="#10b981" />
                    <span>Planos Anatômicos & Movimentos</span>
                  </div>
                  <span className="row-detail">Sagital, Frontal, Transversal + 10 movimentos</span>
                </div>
                <div className="content-row">
                  <div className="row-title">
                    <Info size={18} color="#10b981" />
                    <span>Metodologia Pratique & Bioenergética</span>
                  </div>
                  <span className="row-detail">Método CORE, Checklist PAC, Feedback ERE, PAR-Q</span>
                </div>
              </>
            )}

            {selectedScope === 'vermelha' && (
              <>
                <div className="content-row">
                  <div className="row-title">
                    <Award size={18} color="#e11d48" />
                    <span>Princípios do Treinamento Físico</span>
                  </div>
                  <span className="row-detail">Carga x Peso, Individualidade, Sobrecarga, Reversibilidade</span>
                </div>
                <div className="content-row">
                  <div className="row-title">
                    <Activity size={18} color="#e11d48" />
                    <span>Síndrome de Adaptação Geral (SAG)</span>
                  </div>
                  <span className="row-detail">Alarme, Resistência, Exaustão e Supercompensação</span>
                </div>
                <div className="content-row">
                  <div className="row-title">
                    <Layers size={18} color="#e11d48" />
                    <span>Alavancas Biomecânicas & Braço de Resistência</span>
                  </div>
                  <span className="row-detail">1ª, 2ª e 3ª classes, Torque e estresse articular</span>
                </div>
                <div className="content-row">
                  <div className="row-title">
                    <CheckCircle2 size={18} color="#e11d48" />
                    <span>Segurança Clínica: Diabetes & Hipertensão</span>
                  </div>
                  <span className="row-detail">Manobra de Valsalva, isometria e hipoglicemia</span>
                </div>
              </>
            )}

            {selectedScope === 'muscles' && (
              <>
                <div className="content-row">
                  <div className="row-title">
                    <Activity size={18} color="#0f172a" />
                    <span>12 Grupamentos Musculares Detalhados</span>
                  </div>
                  <span className="row-detail">Peitoral, Dorsais, Deltoides, Quadríceps, Glúteos, etc.</span>
                </div>
                <div className="content-row">
                  <div className="row-title">
                    <Layers size={18} color="#0f172a" />
                    <span>Análise Cinesiológica e Composição</span>
                  </div>
                  <span className="row-detail">Ações primárias, planos de execução e exercícios de ativação</span>
                </div>
              </>
            )}

            {selectedScope === 'all' && (
              <>
                <div className="content-row">
                  <div className="row-title">
                    <BookOpen size={18} color="#2563eb" />
                    <span>Apostila Completa CinesioFit Integrada</span>
                  </div>
                  <span className="row-detail">Todos os módulos combinados para encadernação e estudo</span>
                </div>
                <div className="content-row">
                  <div className="row-title">
                    <Award size={18} color="#10b981" />
                    <span>Módulo Pulseira Verde</span>
                  </div>
                  <span className="row-detail">Planos, Movimentos e 10 Exercícios Oficiais</span>
                </div>
                <div className="content-row">
                  <div className="row-title">
                    <Award size={18} color="#e11d48" />
                    <span>Módulo Pulseira Vermelha</span>
                  </div>
                  <span className="row-detail">Princípios, Alavancas e Casos Clínicos</span>
                </div>
                <div className="content-row">
                  <div className="row-title">
                    <Activity size={18} color="#0f172a" />
                    <span>Atlas Muscular Completo</span>
                  </div>
                  <span className="row-detail">12 Grupamentos Musculares</span>
                </div>
              </>
            )}
          </div>
        </PreviewCard>
      </Container>

      {/* DOCUMENTO RENDERIZADO EXCLUSIVAMENTE QUANDO O USUÁRIO APERTA "IMPRIMIR AGORA" (window.print()) */}
      <PrintableDocument>
        {/* CABEÇALHO DO DOCUMENTO DE IMPRESSÃO */}
        <div className="print-header">
          <div>
            <h1>CinesioFit • {currentScopeObj.title}</h1>
            <p>{currentScopeObj.subtitle}</p>
          </div>
          <div className="print-tag">UniPower & Pratique Fitness</div>
        </div>

        {/* IMPRESSÃO DA PULSEIRA VERDE */}
        {(selectedScope === 'verde' || selectedScope === 'all') && (
          <div>
            <div className="print-section-title">1. Os 10 Exercícios Oficiais de Validação da Pulseira Verde</div>
            <table className="print-table">
              <thead>
                <tr>
                  <th style={{ width: '4%' }}>#</th>
                  <th style={{ width: '22%' }}>Exercício</th>
                  <th style={{ width: '14%' }}>Plano</th>
                  <th style={{ width: '25%' }}>Movimento Articular</th>
                  <th style={{ width: '20%' }}>Músculos Ativados</th>
                  <th style={{ width: '15%' }}>Substituição</th>
                </tr>
              </thead>
              <tbody>
                {EXERCICIOS_PULSEIRA_VERDE.map((ex) => (
                  <tr key={ex.id}>
                    <td><strong>{ex.id}</strong></td>
                    <td><strong>{ex.nome}</strong></td>
                    <td>{ex.plano}</td>
                    <td>{ex.movimento}</td>
                    <td>{ex.grupoMuscular}</td>
                    <td>{ex.substituicao}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="print-section-title">2. Planos Anatômicos & Movimentos Fundamentais</div>
            <table className="print-table">
              <thead>
                <tr>
                  <th>Plano</th>
                  <th>Eixo</th>
                  <th>Divisão Corporal</th>
                  <th>Movimentos Associados</th>
                </tr>
              </thead>
              <tbody>
                {PLANES.map((p) => (
                  <tr key={p.id}>
                    <td><strong>{p.name}</strong></td>
                    <td>{p.axis}</td>
                    <td>{p.division}</td>
                    <td>{p.movements.join(', ')}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="print-section-title">3. Metodologia Pratique Fitness & Atendimento</div>
            <div className="print-card">
              <h3>Método CORE no Salão de Musculação</h3>
              <p>• <strong>C</strong>ircular: Monitorar ativamente todo o salão da academia.</p>
              <p>• <strong>O</strong>portunidade: Identificar necessidades e erros de execução prontamente.</p>
              <p>• <strong>R</strong>estaurar: Corrigir a postura e técnica do aluno com segurança e empatia.</p>
              <p>• <strong>E</strong>logiar: Parabenizar a dedicação e o empenho do aluno.</p>
            </div>
            <div className="print-card">
              <h3>Critérios de Execução PAC & Feedback ERE</h3>
              <p>• <strong>PAC</strong>: Postura (alinhamento articular), Amplitude (arco completo), Cadência (controle excêntrico/concêntrico).</p>
              <p>• <strong>ERE</strong>: Elogiar o esforço inicial, Restaurar o erro técnico e Elogiar a nova execução corrigida.</p>
            </div>
          </div>
        )}

        {/* IMPRESSÃO DA PULSEIRA VERMELHA */}
        {(selectedScope === 'vermelha' || selectedScope === 'all') && (
          <div className={selectedScope === 'all' ? 'page-break' : ''}>
            <div className="print-section-title">Módulo Pulseira Vermelha: Princípios do Treinamento & Biomecânica</div>

            <div className="print-card">
              <h3>Carga de Treinamento vs Peso</h3>
              <p>Carga é o estímulo total capaz de quebrar a homeostase. O peso (quilagem) é apenas uma das 5 componentes da carga (Volume, Intensidade, Duração, Frequência e Densidade).</p>
            </div>

            {PRINCIPIOS_TREINAMENTO.principios.map((prin) => (
              <div key={prin.id} className="print-card">
                <h3>{prin.nome}</h3>
                <p><strong>Conceito:</strong> {prin.conceitoReal}</p>
                {prin.regraDeOuro && <p><strong>Regra de Ouro:</strong> {prin.regraDeOuro}</p>}
                {prin.alerta && <p><strong>Alerta:</strong> {prin.alerta}</p>}
              </div>
            ))}

            <div className="print-section-title">Biomecânica das Alavancas Articulares</div>
            <table className="print-table">
              <thead>
                <tr>
                  <th>Classe</th>
                  <th>Função</th>
                  <th>Configuração Mecânica</th>
                  <th>Exemplo no Corpo</th>
                  <th>Exercício na Academia</th>
                </tr>
              </thead>
              <tbody>
                {ALAVANCAS_BIOMECANICAS.classes.map((alav) => (
                  <tr key={alav.classe}>
                    <td><strong>{alav.nome}</strong></td>
                    <td>{alav.funcao}</td>
                    <td>{alav.mecanica}</td>
                    <td>{alav.exemploCorpo}</td>
                    <td><strong>{alav.exemploAcademia}</strong></td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="print-section-title">Populações Especiais & Segurança Clínica</div>
            <div className="print-card">
              <h3>1. Diabetes Mellitus (Tipo 1 e 2)</h3>
              <p>• Não aplicar insulina no músculo que será exercitado (aumento de taxa de absorção).</p>
              <p>• Ter sempre carboidrato de rápida absorção disponível no salão.</p>
              <p>• Sintomas de hipoglicemia: sudorese fria, tremores, tontura e desorientação. Interromper o treino imediatamente.</p>
            </div>
            <div className="print-card">
              <h3>2. Hipertensão Arterial Sistêmica (HAS)</h3>
              <p>• PROIBIDA a Manobra de Valsalva (apneia durante a fase concêntrica) para evitar picos pressóricos perigosos.</p>
              <p>• Evitar isometrias prolongadas e exercícios com pesos elevados acima da linha da cabeça em hipertensos sem controle.</p>
              <p>• Hipotensão pós-esforço é o principal efeito cardioprotetor crônico da musculação controlada.</p>
            </div>
          </div>
        )}

        {/* IMPRESSÃO DO ATLAS DE MÚSCULOS */}
        {(selectedScope === 'muscles' || selectedScope === 'all') && (
          <div className={selectedScope === 'all' ? 'page-break' : ''}>
            <div className="print-section-title">Atlas Anatômico: 12 Grupamentos Musculares</div>
            <table className="print-table">
              <thead>
                <tr>
                  <th>Músculo</th>
                  <th>Região</th>
                  <th>Composição / Fibras</th>
                  <th>Ação Cinesiológica</th>
                  <th>Plano</th>
                  <th>Exercícios de Ativação</th>
                </tr>
              </thead>
              <tbody>
                {MUSCLES.map((m) => (
                  <tr key={m.id}>
                    <td><strong>{m.name}</strong></td>
                    <td>{m.region}</td>
                    <td>{m.composition}</td>
                    <td>{m.action}</td>
                    <td>{m.plane}</td>
                    <td>{m.exercises.slice(0, 3).map(e => e.name).join(', ')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="print-footer">
          CinesioFit App • Material Oficial de Estudos e Prescrição • Pratique Fitness & UniPower
        </div>
      </PrintableDocument>
    </>
  );
};
