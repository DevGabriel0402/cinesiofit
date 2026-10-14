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
  Layers,
  GraduationCap,
  Heart,
  Zap,
  Shield,
  Info,
  AlertTriangle,
  Check,
  HelpCircle,
  Sparkles
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
import { QUIZ_QUESTIONS } from '../../quizData';
import { PrintCover, PrintVerdeSection, PrintVermelhaSection, PrintMusclesSection } from './PrintSections';
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
    background: #ffffff;
    color: #0f172a;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    font-size: 8.5pt;
    line-height: 1.4;
    padding: 0;
    margin: 0;

    @page {
      size: A4;
      margin: 1.2cm 1.3cm 1.3cm 1.3cm;
    }

    .page-break {
      page-break-before: always !important;
      break-before: page !important;
    }

    .force-page-break {
      display: block !important;
      clear: both !important;
      page-break-after: always !important;
      break-after: page !important;
      page-break-before: always !important;
      break-before: page !important;
      height: 0 !important;
      min-height: 0 !important;
      margin: 0 !important;
      padding: 0 !important;
      border: none !important;
      visibility: hidden;
    }

    .avoid-break {
      page-break-inside: avoid;
      break-inside: avoid;
    }

    /* ── CAPA DE IMPRESSÃO ── */
    .print-cover-page {
      display: block !important;
      page-break-after: always !important;
      break-after: page !important;
      min-height: 96vh;
      box-sizing: border-box;
      margin-bottom: 2rem;
    }

    .print-cover {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      min-height: 92vh;
      text-align: center;
      border: 2px solid #e2e8f0;
      border-radius: 12px;
      padding: 3.5rem 2.5rem;
      position: relative;
      background: #fafafa;
      box-sizing: border-box;
      page-break-after: always !important;
      break-after: page !important;
    }

    .cover-stripe {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 8px;
      border-radius: 10px 10px 0 0;
    }

    .cover-header-brand {
      display: flex;
      flex-direction: column;
      gap: 4px;
      .brand-logo {
        font-size: 11pt;
        font-weight: 900;
        letter-spacing: 2px;
        color: #0f172a;
      }
      .brand-sub {
        font-size: 8.5pt;
        color: #64748b;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
    }

    .cover-body {
      margin: 2.5rem 0;
      display: flex;
      flex-direction: column;
      align-items: center;

      .cover-badge {
        display: inline-block;
        padding: 5px 16px;
        border-radius: 20px;
        border: 1.5px solid;
        font-size: 9pt;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 1rem;
      }

      .cover-title {
        font-size: 26pt;
        font-weight: 900;
        margin: 0 0 10px 0;
        letter-spacing: -0.5px;
        line-height: 1.15;
      }

      .cover-subtitle {
        font-size: 11pt;
        color: #475569;
        max-width: 460px;
        margin: 0 auto 2rem auto;
        line-height: 1.4;
      }

      .cover-topics-box {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 10px;
        padding: 14px 20px;
        max-width: 480px;
        width: 100%;
        text-align: left;

        .topics-title {
          display: block;
          font-size: 8.5pt;
          font-weight: 800;
          color: #0f172a;
          text-transform: uppercase;
          margin-bottom: 8px;
          border-bottom: 1px solid #f1f5f9;
          padding-bottom: 4px;
        }

        .topics-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px;
        }

        .topic-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 8pt;
          color: #334155;
          font-weight: 600;

          .pill-dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            flex-shrink: 0;
          }
        }
      }
    }

    .cover-footer-meta {
      border-top: 1px solid #cbd5e1;
      padding-top: 14px;
      font-size: 8pt;
      color: #64748b;
      line-height: 1.5;
      width: 100%;
      .cover-date {
        margin-top: 4px;
        font-weight: 600;
        color: #94a3b8;
      }
    }

    /* ── CABEÇALHOS DE SEÇÃO COM BANNER ── */
    .section-title-banner {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 7px 12px;
      border-radius: 6px;
      font-size: 11pt;
      font-weight: 800;
      margin: 18px 0 10px 0;
      page-break-after: avoid;

      &.verde-theme {
        background: #ecfdf5;
        color: #047857;
        border-left: 4px solid #10b981;
      }

      &.vermelha-theme {
        background: #fff1f2;
        color: #be123c;
        border-left: 4px solid #e11d48;
      }

      &.dark-theme {
        background: #f1f5f9;
        color: #0f172a;
        border-left: 4px solid #0f172a;
      }
    }

    .section-intro-text {
      font-size: 8.5pt;
      color: #475569;
      margin: 4px 0 10px 0;
      line-height: 1.35;
    }

    /* ── TABELAS DE IMPRESSÃO ── */
    .print-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 12px;
      font-size: 8pt;

      th {
        background: #0f172a;
        color: #ffffff;
        font-weight: 700;
        text-align: left;
        padding: 5px 8px;
        border: 1px solid #0f172a;
        font-size: 7.5pt;
        text-transform: uppercase;
      }

      td {
        padding: 5px 8px;
        border: 1px solid #e2e8f0;
        color: #334155;
        line-height: 1.3;
      }

      tbody tr:nth-child(even) {
        background: #f8fafc;
      }

      .table-plane-tag {
        display: inline-block;
        padding: 2px 6px;
        border-radius: 4px;
        font-size: 7.5pt;
        font-weight: 700;
        background: #e0f2fe;
        color: #0369a1;
      }
    }

    /* ── CARDS E BOXES ── */
    .print-box-card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      padding: 8px 10px;
      margin-bottom: 8px;

      &.verde-border {
        border-left: 3.5px solid #10b981;
      }
      &.vermelha-border {
        border-left: 3.5px solid #e11d48;
      }

      .card-box-title {
        font-size: 9pt;
        font-weight: 800;
        margin: 0 0 4px 0;
      }

      .card-bullets-list {
        margin: 0;
        padding-left: 14px;
        font-size: 8pt;
        color: #334155;
        li {
          margin-bottom: 2px;
        }
      }
    }

    .print-cards-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      margin-bottom: 8px;
    }

    /* ── 10 EXERCÍCIOS OFICIAIS ── */
    .exercises-detailed-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .exercise-print-card {
      border: 1px solid #cbd5e1;
      border-left: 4px solid #10b981;
      border-radius: 6px;
      padding: 8px 10px;
      background: #ffffff;

      .ex-head {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 6px;
        border-bottom: 1px solid #f1f5f9;
        padding-bottom: 4px;

        .ex-number-badge {
          background: #10b981;
          color: white;
          font-size: 8pt;
          font-weight: 800;
          padding: 2px 7px;
          border-radius: 4px;
        }

        .ex-name {
          font-size: 9.5pt;
          font-weight: 800;
          color: #0f172a;
          flex: 1;
        }

        .ex-plane-tag {
          font-size: 7.5pt;
          font-weight: 700;
          color: #065f46;
          background: #d1fae5;
          padding: 2px 6px;
          border-radius: 4px;
        }
      }

      .ex-grid-info {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4px 10px;
        font-size: 8pt;

        .ex-field {
          .field-lbl {
            font-weight: 700;
            color: #475569;
            margin-right: 4px;
          }
          .field-val {
            color: #1e293b;
          }
          .highlight-sub {
            color: #b45309;
            font-weight: 600;
          }
          .pac-text {
            color: #047857;
            font-weight: 500;
          }
        }
      }

      .ex-phases-box {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
        margin-top: 6px;
        padding-top: 5px;
        border-top: 1px dashed #e2e8f0;
        font-size: 7.5pt;

        .phase-col {
          .phase-lbl {
            display: block;
            font-weight: 700;
            margin-bottom: 1px;
          }
          &.conc-col .phase-lbl { color: #047857; }
          &.exc-col .phase-lbl { color: #be123c; }
          .phase-desc { color: #475569; }
        }
      }
    }

    /* ── PRINCÍPIOS CARD ── */
    .principle-print-card {
      border: 1px solid #e2e8f0;
      border-left: 3.5px solid #be123c;
      border-radius: 6px;
      padding: 8px 10px;
      margin-bottom: 8px;
      background: #ffffff;

      .prin-title {
        font-size: 9pt;
        font-weight: 800;
        color: #be123c;
        margin: 0 0 3px 0;
      }
      .prin-concept {
        font-size: 8pt;
        color: #1e293b;
        margin: 2px 0;
      }
      .prin-mistake {
        font-size: 8pt;
        color: #991b1b;
        margin: 2px 0;
      }
      .prin-gold {
        font-size: 8pt;
        color: #9f1239;
        font-weight: 700;
        margin: 3px 0;
      }
      .prin-alert {
        font-size: 8pt;
        color: #b91c1c;
        font-weight: 600;
        margin: 2px 0;
      }
    }

    .carga-components-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 6px;
      .carga-comp-pill {
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        padding: 4px 6px;
        border-radius: 4px;
        font-size: 7.5pt;
        color: #334155;
      }
    }

    /* ── ALAVANCAS BIOMECÂNICAS ── */
    .alavanca-components-row {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 8px;
      margin-bottom: 8px;

      .alavanca-comp-box {
        background: #fff1f2;
        border: 1px solid #fecdd3;
        border-radius: 6px;
        padding: 6px 8px;
        display: flex;
        flex-direction: column;

        .alavanca-sigla {
          font-size: 12pt;
          font-weight: 900;
          color: #be123c;
        }
        .alavanca-nome {
          font-size: 8pt;
          font-weight: 700;
          color: #0f172a;
        }
        .alavanca-anat {
          font-size: 7.5pt;
          color: #64748b;
        }
      }
    }

    /* ── GUIA RÁPIDO BOXES ── */
    .quick-rules-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      margin-bottom: 12px;
    }

    .quick-rule-box {
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      padding: 8px 10px;
      background: #fafafa;
      position: relative;

      .q-badge {
        font-size: 7pt;
        font-weight: 800;
        color: #be123c;
        background: #ffe4e6;
        padding: 1px 6px;
        border-radius: 3px;
        display: inline-block;
        margin-bottom: 3px;
      }
      h4 {
        margin: 0 0 2px 0;
        font-size: 8.5pt;
        font-weight: 800;
        color: #0f172a;
      }
      p {
        margin: 0;
        font-size: 7.5pt;
        color: #475569;
        line-height: 1.3;
      }
    }

    /* ── BANCO DE QUESTÕES DO QUIZ COM GABARITO & EXPLICAÇÃO ── */
    .quiz-print-container {
      display: flex;
      flex-direction: column;
      gap: 9px;
    }

    .print-quiz-card {
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      padding: 8px 10px;
      background: #ffffff;
      box-shadow: none;

      .quiz-card-head {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-bottom: 4px;

        .quiz-badge {
          color: white;
          font-size: 7.5pt;
          font-weight: 800;
          padding: 1px 6px;
          border-radius: 3px;
        }

        .quiz-category {
          font-size: 7.5pt;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
        }
      }

      .quiz-question-text {
        font-size: 8.5pt;
        color: #0f172a;
        margin-bottom: 6px;
        line-height: 1.35;
      }

      .quiz-options-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4px 8px;
        margin-bottom: 6px;

        .quiz-option-item {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 3px 6px;
          border-radius: 4px;
          border: 1px solid #f1f5f9;
          font-size: 7.5pt;
          color: #475569;

          .option-letter {
            width: 14px;
            height: 14px;
            border-radius: 50%;
            background: #e2e8f0;
            color: #475569;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 6.5pt;
            flex-shrink: 0;
          }

          .option-text {
            flex: 1;
            line-height: 1.25;
          }

          &.correct-option {
            background: #f0fdf4;
            border-color: #86efac;
            color: #14532d;
            font-weight: 700;

            .letter-correct {
              background: #10b981;
              color: white;
            }

            .correct-tag {
              font-size: 6.5pt;
              background: #dcfce7;
              color: #15803d;
              padding: 1px 4px;
              border-radius: 3px;
              font-weight: 800;
              margin-left: 4px;
              white-space: nowrap;
            }
          }
        }
      }

      .quiz-explanation-box {
        background: #f8fafc;
        border-left: 3px solid #0284c7;
        padding: 4px 8px;
        border-radius: 0 4px 4px 0;
        font-size: 7.5pt;

        .explanation-title {
          font-weight: 700;
          color: #0369a1;
          margin-bottom: 1px;
        }
        .explanation-desc {
          margin: 0;
          color: #334155;
          line-height: 1.3;
        }
      }
    }

    .print-footer {
      margin-top: 24px;
      border-top: 1px solid #cbd5e1;
      padding-top: 8px;
      font-size: 7.5pt;
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
      topics: ['Princípios do Treino', 'SAG (Selye)', 'Alavancas (Torque/BR)', 'Diabetes & HAS', 'Questionário Saúde (22 Qs)'],
      count: 'Princípios + Alavancas + Clínica + Questionário Oficial'
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
                    <Zap size={18} color="#10b981" />
                    <span>Estudo Teórico & Bioenergética</span>
                  </div>
                  <span className="row-detail">ATP-CP, Glicolítico, Oxidativo, Métodos CORE, PAC, ERE e PAR-Q</span>
                </div>
                <div className="content-row">
                  <div className="row-title">
                    <Layers size={18} color="#10b981" />
                    <span>Planos Anatômicos & Movimentos</span>
                  </div>
                  <span className="row-detail">Sagital, Frontal, Transversal + 10 movimentos e eixos</span>
                </div>
                <div className="content-row">
                  <div className="row-title">
                    <Award size={18} color="#10b981" />
                    <span>Os 10 Exercícios da Validação Prática</span>
                  </div>
                  <span className="row-detail">Supino, Desenvolvimento, Pulley, Extensora, Leg 45°, etc.</span>
                </div>
                <div className="content-row">
                  <div className="row-title">
                    <CheckCircle2 size={18} color="#10b981" />
                    <span>Banco de Questões com Respostas e Explicações</span>
                  </div>
                  <span className="row-detail">49 questões oficiais com respostas corretas e justificativas</span>
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
                  <span className="row-detail">Carga x Peso (5 variáveis), SAG, Sobrecarga, Especificidade e Continuidade</span>
                </div>
                <div className="content-row">
                  <div className="row-title">
                    <Layers size={18} color="#e11d48" />
                    <span>Biomecânica Avançada & Alavancas</span>
                  </div>
                  <span className="row-detail">1ª, 2ª e 3ª classes, manipulação do Braço de Resistência (BR) e torque</span>
                </div>
                <div className="content-row">
                  <div className="row-title">
                    <Heart size={18} color="#e11d48" />
                    <span>Segurança Clínica: Diabetes & Insulina</span>
                  </div>
                  <span className="row-detail">Analogia do chaveiro, glicemia pré-treino, condutas de segurança e PSF</span>
                </div>
                <div className="content-row">
                  <div className="row-title">
                    <Shield size={18} color="#e11d48" />
                    <span>Segurança Clínica: Hipertensão Arterial (HAS)</span>
                  </div>
                  <span className="row-detail">Abolição de Valsalva, ponto de corte 200/115 mmHg, PSE e beta-bloqueadores</span>
                </div>
                <div className="content-row">
                  <div className="row-title">
                    <Sparkles size={18} color="#e11d48" />
                    <span>Guia Rápido & Regras de Ouro na Sala</span>
                  </div>
                  <span className="row-detail">Checklist executivo de bolso para consulta imediata do treinador</span>
                </div>
                <div className="content-row">
                  <div className="row-title">
                    <CheckCircle2 size={18} color="#e11d48" />
                    <span>Banco de Questões com Respostas e Explicações</span>
                  </div>
                  <span className="row-detail">31 questões oficiais com respostas corretas e justificativas científicas</span>
                </div>
                <div className="content-row">
                  <div className="row-title">
                    <BookOpen size={18} color="#e11d48" />
                    <span>Questionário: Exercício Físico e Saúde</span>
                  </div>
                  <span className="row-detail">22 questões oficiais com gabarito assinalado e justificativa científica</span>
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
                    <span>Módulo Pulseira Verde Integral</span>
                  </div>
                  <span className="row-detail">Teoria, Planos, Movimentos, 10 Exercícios e Questões com Respostas</span>
                </div>
                <div className="content-row">
                  <div className="row-title">
                    <Award size={18} color="#e11d48" />
                    <span>Módulo Pulseira Vermelha Integral</span>
                  </div>
                  <span className="row-detail">Princípios, Biomecânica, Diabetes, HAS, Guia Rápido e Questões com Respostas</span>
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
        {/* CAPA ELEGANTE PERSONALIZADA PELO ESCOPO */}
        <PrintCover 
          title={currentScopeObj.title}
          subtitle={currentScopeObj.subtitle}
          badge={currentScopeObj.badge}
          color={currentScopeObj.color}
          topics={currentScopeObj.topics}
        />

        {/* FORÇA QUEBRA DE PÁGINA APÓS A CAPA */}
        <div className="force-page-break" />

        {/* IMPRESSÃO DA PULSEIRA VERDE */}
        {(selectedScope === 'verde' || selectedScope === 'all') && (
          <PrintVerdeSection />
        )}

        {/* IMPRESSÃO DA PULSEIRA VERMELHA */}
        {(selectedScope === 'vermelha' || selectedScope === 'all') && (
          <div className={selectedScope === 'all' ? 'page-break' : ''}>
            <PrintVermelhaSection />
          </div>
        )}

        {/* IMPRESSÃO DO ATLAS DE MÚSCULOS */}
        {(selectedScope === 'muscles' || selectedScope === 'all') && (
          <div className={selectedScope === 'all' ? 'page-break' : ''}>
            <PrintMusclesSection />
          </div>
        )}

        <div className="print-footer">
          CinesioFit Pro • Material Oficial de Estudos e Prescrição • Pratique Fitness & UniPower
        </div>
      </PrintableDocument>
    </>
  );
};
