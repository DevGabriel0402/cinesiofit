import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { MUSCLES, PLANES, MOVEMENTS } from '../../data';
import { 
  EXERCICIOS_PULSEIRA_VERDE, 
  TEORIA_PULSEIRA_VERDE 
} from '../../dataPulseiraVerde';
import { 
  PRINCIPIOS_TREINAMENTO, 
  BIOMECANICA_ALAVANCAS,
  DIABETES_PRESCRICAO,
  HIPERTENSAO_PRESCRICAO
} from '../../dataPulseiraVermelha';
import { QUIZ_QUESTIONS } from '../../quizData';

// ─────────────────────────────────────────────
//  ESTILOS
// ─────────────────────────────────────────────
const s = StyleSheet.create({
  page: { padding: 28, fontFamily: 'Helvetica', backgroundColor: '#ffffff' },
  coverPage: {
    padding: 0, fontFamily: 'Helvetica',
    backgroundColor: '#090d16',
    flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
    color: 'white', position: 'relative'
  },

  // Cover
  coverBand: { position: 'absolute', top: 0, left: 0, right: 0, height: 10 },
  coverInner: { padding: 50, flexDirection: 'column', alignItems: 'center' },
  coverTag: { fontSize: 9, fontWeight: 'bold', letterSpacing: 2, color: '#94a3b8',
    textTransform: 'uppercase', marginBottom: 16, marginTop: 60 },
  coverTitle: { fontSize: 36, fontWeight: 'bold', textAlign: 'center', color: '#ffffff',
    marginBottom: 12, letterSpacing: -0.5 },
  coverSub: { fontSize: 13, color: '#cbd5e1', textAlign: 'center',
    marginBottom: 32, lineHeight: 1.5, maxWidth: 380 },
  coverBadge: { backgroundColor: 'rgba(255,255,255,0.1)', borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)', padding: '7 16', borderRadius: 20 },
  coverBadgeText: { fontSize: 10, fontWeight: 'bold', color: '#f8fafc' },
  coverFooter: { position: 'absolute', bottom: 28, fontSize: 9, color: '#475569' },

  // Section headers
  sectionHeader: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    borderBottomWidth: 2, paddingBottom: 7, marginBottom: 14
  },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#0d1117' },
  sectionBadge: {
    fontSize: 8, fontWeight: 'bold', padding: '3 9', borderRadius: 4, color: 'white'
  },

  // Cards
  card: {
    backgroundColor: '#f8fafc', borderRadius: 6, padding: '10 12',
    borderWidth: 1, borderColor: '#e2e8f0', marginBottom: 9, breakInside: 'avoid'
  },
  cardTitle: { fontSize: 11, fontWeight: 'bold', color: '#0d1117', marginBottom: 3 },
  cardSub: { fontSize: 8, color: '#475569', marginBottom: 5 },

  // Accent cards
  accentCard: {
    borderRadius: 6, padding: '10 12', borderLeftWidth: 4,
    marginBottom: 9, breakInside: 'avoid'
  },

  // Grid
  row: { flexDirection: 'row', gap: 10, flexWrap: 'wrap' },
  half: {
    width: '47.5%', backgroundColor: '#f8fafc', borderWidth: 1,
    borderColor: '#e2e8f0', borderRadius: 6, padding: '9 10', marginBottom: 8, breakInside: 'avoid'
  },

  // Text rows (label: value)
  textRow: { flexDirection: 'row', marginBottom: 4, alignItems: 'flex-start' },
  label: { fontWeight: 'bold', fontSize: 8.5, color: '#334155', width: 82, flexShrink: 0 },
  value: { fontSize: 8.5, color: '#475569', flex: 1, lineHeight: 1.35 },

  // Bullets
  bullet: { fontSize: 8.5, color: '#334155', marginBottom: 3, lineHeight: 1.3 },

  // Table
  table: { width: '100%', borderWidth: 1, borderColor: '#d1d5db', borderRadius: 4, marginBottom: 12 },
  tableHead: { flexDirection: 'row', backgroundColor: '#1e293b' },
  tableRow: { flexDirection: 'row', borderTopWidth: 1, borderColor: '#e5e7eb' },
  tableRowAlt: { flexDirection: 'row', borderTopWidth: 1, borderColor: '#e5e7eb', backgroundColor: '#f8fafc' },
  th: { padding: '5 7', fontSize: 7.5, fontWeight: 'bold', color: '#ffffff', flex: 1 },
  td: { padding: '5 7', fontSize: 7.5, color: '#334155', flex: 1, lineHeight: 1.3 },
  tdBold: { padding: '5 7', fontSize: 7.5, color: '#0d1117', fontWeight: 'bold', flex: 1 },

  // Muscle
  muscleCard: {
    marginBottom: 14, paddingBottom: 14,
    borderBottomWidth: 1, borderBottomColor: '#f1f5f9',
    flexDirection: 'row', gap: 12, breakInside: 'avoid'
  },
  muscleImg: {
    width: 100, height: 100, objectFit: 'contain', borderRadius: 6,
    backgroundColor: '#f8fafc', padding: 3, borderWidth: 1, borderColor: '#e2e8f0'
  },

  // Footer
  footer: {
    position: 'absolute', bottom: 20, left: 28, right: 28,
    textAlign: 'center', color: '#94a3b8', fontSize: 8,
    borderTopWidth: 1, borderTopColor: '#e2e8f0', paddingTop: 7
  }
});

// ─────────────────────────────────────────────
//  HELPERS
// ─────────────────────────────────────────────
const Footer = ({ scopeName }) => (
  <Text
    style={s.footer}
    render={({ pageNumber, totalPages }) =>
      `CinesioFit Pro  •  ${scopeName}  •  Página ${pageNumber} de ${totalPages}`
    }
    fixed
  />
);

const getSafeImg = (url) => {
  if (!url) return null;
  if (url.startsWith('data:') || url.startsWith('/')) return url;
  return `https://wsrv.nl/?url=${encodeURIComponent(url)}&output=jpg&bg=white&w=240`;
};

const OPT_LETTERS = ['A', 'B', 'C', 'D'];

const PdfQuizCard = ({ q, index, color = '#059669' }) => (
  <View style={[s.card, { marginBottom: 6, padding: '6 8' }]} wrap={false}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2 }}>
      <Text style={{ fontSize: 7, fontWeight: 'bold', color: color, backgroundColor: color === '#059669' ? '#d1fae5' : '#ffe4e6', padding: '1 5', borderRadius: 3 }}>
        Questão {index + 1}
      </Text>
      <Text style={{ fontSize: 6.5, color: '#64748b', fontWeight: 'bold' }}>{q.category}</Text>
    </View>
    <Text style={{ fontSize: 7.5, fontWeight: 'bold', color: '#0f172a', marginBottom: 3, lineHeight: 1.25 }}>
      {q.question}
    </Text>
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 4, marginBottom: 3 }}>
      {q.options.map((opt, oi) => {
        const isCorrect = oi === q.correctAnswer;
        return (
          <View key={oi} style={{ width: '48%', flexDirection: 'row', alignItems: 'center', backgroundColor: isCorrect ? '#f0fdf4' : '#ffffff', borderWidth: 0.5, borderColor: isCorrect ? '#86efac' : '#e2e8f0', borderRadius: 3, padding: '2 4' }}>
            <Text style={{ fontSize: 6.5, fontWeight: 'bold', color: isCorrect ? '#047857' : '#64748b', width: 12 }}>
              {OPT_LETTERS[oi]}
            </Text>
            <Text style={{ fontSize: 6, color: isCorrect ? '#047857' : '#334155', fontWeight: isCorrect ? 'bold' : 'normal', flex: 1, lineHeight: 1.2 }}>
              {opt} {isCorrect ? '✓' : ''}
            </Text>
          </View>
        );
      })}
    </View>
    {q.explanation && (
      <View style={{ backgroundColor: '#f8fafc', borderLeftWidth: 2, borderLeftColor: '#0284c7', padding: '2 5' }}>
        <Text style={{ fontSize: 6, color: '#0369a1', fontWeight: 'bold' }}>💡 Explicação Científica:</Text>
        <Text style={{ fontSize: 6, color: '#334155', lineHeight: 1.25 }}>{q.explanation}</Text>
      </View>
    )}
  </View>
);

// ─────────────────────────────────────────────
//  PULSEIRA VERDE
// ─────────────────────────────────────────────
const PulseiraVerdePages = () => (
  <>
    {/* ── Bioenergética e Teoria ── */}
    <Page size="A4" style={s.page}>
      <View style={[s.sectionHeader, { borderBottomColor: '#059669' }]}>
        <Text style={s.sectionTitle}>Pulseira Verde: Fundamentos Teóricos</Text>
        <Text style={[s.sectionBadge, { backgroundColor: '#059669' }]}>NÍVEL 1 · UNIPOWER</Text>
      </View>

      <View style={[s.accentCard, { borderLeftColor: '#059669', backgroundColor: '#f0fdf4' }]}>
        <Text style={[s.cardTitle, { color: '#065f46', fontSize: 12 }]}>🔬 Bioenergética: Os 3 Sistemas de Energia</Text>
        <Text style={[s.cardSub, { color: '#047857' }]}>Cada sistema domina um intervalo de tempo e intensidade diferentes</Text>
      </View>

      <View style={s.table}>
        <View style={s.tableHead}>
          <Text style={[s.th, { flex: 1.4 }]}>Sistema</Text>
          <Text style={s.th}>Duração</Text>
          <Text style={s.th}>Intensidade</Text>
          <Text style={[s.th, { flex: 1.5 }]}>Substrato</Text>
          <Text style={[s.th, { flex: 1.8 }]}>Exemplo</Text>
        </View>
        {TEORIA_PULSEIRA_VERDE.bioenergetica.map((sis, i) => (
          <View key={i} style={i % 2 === 0 ? s.tableRow : s.tableRowAlt}>
            <Text style={[s.tdBold, { flex: 1.4, color: '#047857' }]}>{sis.sistema}</Text>
            <Text style={s.td}>{sis.duracao}</Text>
            <Text style={s.td}>{sis.intensidade}</Text>
            <Text style={[s.td, { flex: 1.5 }]}>{sis.substrato}</Text>
            <Text style={[s.td, { flex: 1.8 }]}>{sis.exemplo}</Text>
          </View>
        ))}
      </View>

      <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#0d1117', marginTop: 10, marginBottom: 6 }}>
        Metodologia Pratique Fitness
      </Text>

      {TEORIA_PULSEIRA_VERDE.metodologiaPratique.map((met, i) => (
        <View key={i} style={[s.accentCard, { borderLeftColor: '#10b981', backgroundColor: '#f0fdf4', marginBottom: 7 }]}>
          <Text style={[s.cardTitle, { color: '#047857' }]}>{met.sigla} — {met.titulo}</Text>
          {met.itens.map((item, j) => (
            <Text key={j} style={[s.bullet, { color: '#065f46' }]}>• {item}</Text>
          ))}
        </View>
      ))}

      <Footer scopeName="Pulseira Verde" />
    </Page>

    {/* ── Planos Anatômicos e Movimentos ── */}
    <Page size="A4" style={s.page}>
      <View style={[s.sectionHeader, { borderBottomColor: '#059669' }]}>
        <Text style={s.sectionTitle}>Planos Anatômicos & Movimentos Articulares</Text>
        <Text style={[s.sectionBadge, { backgroundColor: '#059669' }]}>PULSEIRA VERDE</Text>
      </View>

      <Text style={{ fontSize: 9, fontWeight: 'bold', color: '#0d1117', marginBottom: 6, textTransform: 'uppercase' }}>
        Planos de Secção Corporal
      </Text>
      <View style={s.table}>
        <View style={s.tableHead}>
          <Text style={[s.th, { flex: 1.2 }]}>Plano</Text>
          <Text style={s.th}>Eixo de Rotação</Text>
          <Text style={[s.th, { flex: 1.3 }]}>Divisão Corporal</Text>
          <Text style={[s.th, { flex: 1.6 }]}>Movimentos</Text>
        </View>
        {PLANES.map((p, i) => (
          <View key={p.id} style={i % 2 === 0 ? s.tableRow : s.tableRowAlt}>
            <Text style={[s.tdBold, { flex: 1.2, color: '#047857' }]}>{p.name}</Text>
            <Text style={s.td}>{p.axis}</Text>
            <Text style={[s.td, { flex: 1.3 }]}>{p.division}</Text>
            <Text style={[s.td, { flex: 1.6 }]}>{p.movements.join(', ')}</Text>
          </View>
        ))}
      </View>

      <Text style={{ fontSize: 9, fontWeight: 'bold', color: '#0d1117', marginTop: 8, marginBottom: 6, textTransform: 'uppercase' }}>
        Movimentos Articulares Principais
      </Text>
      <View style={s.table}>
        <View style={s.tableHead}>
          <Text style={[s.th, { flex: 1.2 }]}>Movimento</Text>
          <Text style={s.th}>Plano</Text>
          <Text style={[s.th, { flex: 2 }]}>Descrição</Text>
        </View>
        {MOVEMENTS.map((mov, i) => (
          <View key={i} style={i % 2 === 0 ? s.tableRow : s.tableRowAlt}>
            <Text style={[s.tdBold, { flex: 1.2 }]}>{mov.name}</Text>
            <Text style={[s.td, { color: '#047857' }]}>{mov.plane}</Text>
            <Text style={[s.td, { flex: 2 }]}>{mov.desc}</Text>
          </View>
        ))}
      </View>

      <Footer scopeName="Pulseira Verde" />
    </Page>

    {/* ── 10 Exercícios de Validação ── */}
    <Page size="A4" style={s.page}>
      <View style={[s.sectionHeader, { borderBottomColor: '#059669' }]}>
        <Text style={s.sectionTitle}>Os 10 Exercícios Oficiais de Validação Prática</Text>
        <Text style={[s.sectionBadge, { backgroundColor: '#059669' }]}>CRITÉRIOS PAC</Text>
      </View>

      {EXERCICIOS_PULSEIRA_VERDE.map((ex) => (
        <View key={ex.id} style={s.card} wrap={false}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
            <Text style={[s.cardTitle, { color: '#047857', fontSize: 11 }]}>
              {ex.id}. {ex.nome}
            </Text>
            <Text style={{ fontSize: 7.5, fontWeight: 'bold', color: '#059669',
              backgroundColor: '#d1fae5', padding: '2 7', borderRadius: 4 }}>
              {ex.plano}
            </Text>
          </View>

          <View style={s.textRow}>
            <Text style={s.label}>Movimento:</Text>
            <Text style={s.value}>{ex.movimento}</Text>
          </View>
          <View style={s.textRow}>
            <Text style={s.label}>Músculos:</Text>
            <Text style={s.value}>{ex.grupoMuscular}</Text>
          </View>
          <View style={s.textRow}>
            <Text style={[s.label, { color: '#b45309' }]}>Substituição:</Text>
            <Text style={s.value}>{ex.substituicao}</Text>
          </View>
          <View style={s.textRow}>
            <Text style={[s.label, { color: '#047857' }]}>Check PAC:</Text>
            <Text style={s.value}>{ex.dicaPAC}</Text>
          </View>
          <View style={{ flexDirection: 'row', gap: 10, marginTop: 3 }}>
            <View style={{ flex: 1 }}>
              <Text style={[s.bullet, { color: '#065f46', fontWeight: 'bold' }]}>
                ▲ Concêntrica: <Text style={{ fontWeight: 'normal' }}>{ex.faseConcentrica}</Text>
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[s.bullet, { color: '#9f1239', fontWeight: 'bold' }]}>
                ▼ Excêntrica: <Text style={{ fontWeight: 'normal' }}>{ex.faseExcentrica}</Text>
              </Text>
            </View>
          </View>
        </View>
      ))}

      <Footer scopeName="Pulseira Verde" />
    </Page>

    {/* ── Banco de Questões de Validação com Gabarito ── */}
    <Page size="A4" style={s.page}>
      <View style={[s.sectionHeader, { borderBottomColor: '#059669' }]}>
        <Text style={s.sectionTitle}>Banco de Questões: Pulseira Verde</Text>
        <Text style={[s.sectionBadge, { backgroundColor: '#059669' }]}>GABARITO & EXPLICAÇÕES</Text>
      </View>
      <Text style={{ fontSize: 8, color: '#475569', marginBottom: 6 }}>
        Questões oficiais cobradas na validação da Pulseira Verde (Bioenergética, Atendimento Pratique e os 10 Exercícios) com gabarito comentado.
      </Text>
      {QUIZ_QUESTIONS.filter(q => 
        q.category === 'Pulseira Verde' || 
        q.category === 'Bioenergética' ||
        (q.category === 'Pratique' && [118, 119, 120].includes(q.id)) ||
        q.category === 'Anamnese'
      ).map((q, idx) => (
        <PdfQuizCard key={q.id} q={q} index={idx} color="#059669" />
      ))}
      <Footer scopeName="Pulseira Verde" />
    </Page>
  </>
);

// ─────────────────────────────────────────────
//  PULSEIRA VERMELHA
// ─────────────────────────────────────────────
const PulseiraVermelhaPages = () => (
  <>
    {/* ── Princípios do Treinamento ── */}
    <Page size="A4" style={s.page}>
      <View style={[s.sectionHeader, { borderBottomColor: '#be123c' }]}>
        <Text style={s.sectionTitle}>Pulseira Vermelha: Princípios do Treinamento</Text>
        <Text style={[s.sectionBadge, { backgroundColor: '#be123c' }]}>NÍVEL 2 · UNIPOWER</Text>
      </View>

      <View style={[s.accentCard, { borderLeftColor: '#be123c', backgroundColor: '#fff1f2' }]}>
        <Text style={[s.cardTitle, { color: '#9f1239', fontSize: 10.5 }]}>
          Carga de Treinamento ≠ Peso (Quilagem)
        </Text>
        <Text style={[s.bullet, { color: '#334155', marginTop: 2 }]}>
          Carga é qualquer estímulo capaz de quebrar a homeostase e gerar resposta adaptativa. O peso é apenas 1 das 5 componentes!
        </Text>
        <View style={{ flexDirection: 'row', gap: 6, flexWrap: 'wrap', marginTop: 6 }}>
          {PRINCIPIOS_TREINAMENTO.introducao.componentesCarga.map((c, i) => (
            <View key={i} style={{ backgroundColor: '#ffe4e6', borderRadius: 4, padding: '3 8' }}>
              <Text style={{ fontSize: 7.5, fontWeight: 'bold', color: '#9f1239' }}>{c.nome}</Text>
              <Text style={{ fontSize: 7, color: '#475569', maxWidth: 100 }}>{c.desc.substring(0, 50)}...</Text>
            </View>
          ))}
        </View>
      </View>

      {PRINCIPIOS_TREINAMENTO.principios.map((prin) => (
        <View key={prin.id} style={s.card} wrap={false}>
          <Text style={[s.cardTitle, { color: '#be123c', fontSize: 10.5 }]}>{prin.nome}</Text>
          <Text style={[s.bullet, { color: '#334155', marginBottom: 4 }]}>{prin.conceitoReal}</Text>
          {prin.regraDeOuro && (
            <Text style={[s.bullet, { color: '#9f1239', fontWeight: 'bold' }]}>
              ★ Regra de Ouro: {prin.regraDeOuro}
            </Text>
          )}
          {prin.alerta && (
            <Text style={[s.bullet, { color: '#b91c1c', fontWeight: 'bold' }]}>
              ⚠ Alerta: {prin.alerta}
            </Text>
          )}
          {prin.tabelaEstimulos && (
            <View style={[s.table, { marginTop: 6 }]}>
              <View style={s.tableHead}>
                <Text style={s.th}>Nível Estímulo</Text>
                <Text style={[s.th, { flex: 1.5 }]}>Reação</Text>
                <Text style={[s.th, { flex: 1.5 }]}>Resultado</Text>
              </View>
              {prin.tabelaEstimulos.map((est, i) => (
                <View key={i} style={i % 2 === 0 ? s.tableRow : s.tableRowAlt}>
                  <Text style={[s.tdBold, { color: '#be123c' }]}>{est.nivel}</Text>
                  <Text style={[s.td, { flex: 1.5 }]}>{est.reacao}</Text>
                  <Text style={[s.td, { flex: 1.5 }]}>{est.resultado}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
      ))}

      <Footer scopeName="Pulseira Vermelha" />
    </Page>

    {/* ── Alavancas Biomecânicas ── */}
    <Page size="A4" style={s.page}>
      <View style={[s.sectionHeader, { borderBottomColor: '#be123c' }]}>
        <Text style={s.sectionTitle}>Biomecânica: Alavancas Articulares e Torque</Text>
        <Text style={[s.sectionBadge, { backgroundColor: '#be123c' }]}>BIOMECÂNICA</Text>
      </View>

      {/* Componentes */}
      <View style={{ flexDirection: 'row', gap: 9, marginBottom: 10 }}>
        {BIOMECANICA_ALAVANCAS.componentes.map((comp, i) => (
          <View key={i} style={{ flex: 1, backgroundColor: '#fff1f2', borderRadius: 6,
            padding: '8 10', borderWidth: 1, borderColor: '#fecdd3' }}>
            <Text style={{ fontSize: 13, fontWeight: 'bold', color: '#be123c', marginBottom: 3 }}>
              {comp.sigla}
            </Text>
            <Text style={{ fontSize: 8, fontWeight: 'bold', color: '#0d1117' }}>{comp.nome}</Text>
            <Text style={{ fontSize: 7.5, color: '#475569', marginTop: 2 }}>{comp.anatomia}</Text>
          </View>
        ))}
      </View>

      {/* BF e BR */}
      <View style={[s.accentCard, { borderLeftColor: '#be123c', backgroundColor: '#fff1f2', marginBottom: 10 }]}>
        <Text style={[s.cardTitle, { color: '#9f1239', marginBottom: 5 }]}>Braços de Alavanca: A Chave do Treinador</Text>
        <Text style={[s.bullet, { fontWeight: 'bold', color: '#047857' }]}>
          BF (Braço de Força): {BIOMECANICA_ALAVANCAS.bracos.bf.split(':')[1]}
        </Text>
        <Text style={[s.bullet, { fontWeight: 'bold', color: '#be123c', marginTop: 3 }]}>
          BR (Braço de Resistência): {BIOMECANICA_ALAVANCAS.bracos.br.split(':')[1]}
        </Text>
      </View>

      {/* 3 Classes */}
      <Text style={{ fontSize: 9, fontWeight: 'bold', color: '#0d1117', marginBottom: 6, textTransform: 'uppercase' }}>
        Os 3 Tipos de Alavancas no Corpo Humano
      </Text>
      <View style={s.table}>
        <View style={s.tableHead}>
          <Text style={[s.th, { flex: 1.3 }]}>Tipo</Text>
          <Text style={s.th}>Organização</Text>
          <Text style={s.th}>Cotidiano</Text>
          <Text style={[s.th, { flex: 1.4 }]}>Anatomia</Text>
          <Text style={[s.th, { flex: 1.6 }]}>Detalhes</Text>
        </View>
        {BIOMECANICA_ALAVANCAS.classes.map((cls, i) => (
          <View key={i} style={i % 2 === 0 ? s.tableRow : s.tableRowAlt}>
            <Text style={[s.tdBold, { flex: 1.3, color: '#be123c' }]}>{cls.tipo}</Text>
            <Text style={s.td}>{cls.meio}</Text>
            <Text style={s.td}>{cls.cotidiano}</Text>
            <Text style={[s.td, { flex: 1.4 }]}>{cls.anatomia}</Text>
            <Text style={[s.td, { flex: 1.6 }]}>{cls.detalhes}</Text>
          </View>
        ))}
      </View>

      {/* Exemplos práticos */}
      <Text style={{ fontSize: 9, fontWeight: 'bold', color: '#0d1117', marginTop: 8, marginBottom: 6 }}>
        Manipulação Prática do BR na Sala de Musculação
      </Text>
      {BIOMECANICA_ALAVANCAS.exemplosPraticos.map((ex, i) => (
        <View key={i} style={s.card} wrap={false}>
          <Text style={[s.cardTitle, { color: '#be123c' }]}>{ex.exercicio}</Text>
          <Text style={[s.bullet, { color: '#047857' }]}>↑ BR Longo: {ex.variacaoLonga}</Text>
          <Text style={[s.bullet, { color: '#b45309' }]}>↓ BR Curto: {ex.variacaoCurta}</Text>
        </View>
      ))}

      <Footer scopeName="Pulseira Vermelha" />
    </Page>

    {/* ── Diabetes ── */}
    <Page size="A4" style={s.page}>
      <View style={[s.sectionHeader, { borderBottomColor: '#0284c7' }]}>
        <Text style={s.sectionTitle}>Diabetes Mellitus: Fisiopatologia e Prescrição Segura</Text>
        <Text style={[s.sectionBadge, { backgroundColor: '#0284c7' }]}>SEGURANÇA CLÍNICA</Text>
      </View>

      <View style={[s.accentCard, { borderLeftColor: '#0284c7', backgroundColor: '#eff6ff' }]}>
        <Text style={[s.cardTitle, { color: '#1d4ed8' }]}>{DIABETES_PRESCRICAO.analogia.titulo}</Text>
        <Text style={[s.bullet, { color: '#334155' }]}>{DIABETES_PRESCRICAO.analogia.texto}</Text>
      </View>

      <View style={{ flexDirection: 'row', gap: 9, marginBottom: 10 }}>
        {DIABETES_PRESCRICAO.tipos.map((t, i) => (
          <View key={i} style={[s.half, { flex: 1, width: undefined }]}>
            <Text style={[s.cardTitle, { color: '#1d4ed8' }]}>{t.tipo}</Text>
            <Text style={s.bullet}>{t.desc}</Text>
          </View>
        ))}
      </View>

      <Text style={{ fontSize: 9, fontWeight: 'bold', marginBottom: 5, color: '#0d1117' }}>
        Classificação de Glicemia e Conduta
      </Text>
      <View style={s.table}>
        <View style={s.tableHead}>
          <Text style={s.th}>Classificação</Text>
          <Text style={s.th}>Jejum</Text>
          <Text style={[s.th, { flex: 1.3 }]}>Pós-prandial</Text>
          <Text style={[s.th, { flex: 2 }]}>Conduta</Text>
        </View>
        {DIABETES_PRESCRICAO.tabelaGlicemia.map((item, i) => (
          <View key={i} style={i % 2 === 0 ? s.tableRow : s.tableRowAlt}>
            <Text style={[s.tdBold, { color: '#0284c7' }]}>{item.classificacao}</Text>
            <Text style={s.td}>{item.jejum}</Text>
            <Text style={[s.td, { flex: 1.3 }]}>{item.posPrandial}</Text>
            <Text style={[s.td, { flex: 2 }]}>{item.conduta}</Text>
          </View>
        ))}
      </View>

      <Text style={{ fontSize: 9, fontWeight: 'bold', marginTop: 8, marginBottom: 5, color: '#0d1117' }}>
        Protocolo de Segurança no Treino
      </Text>
      {DIABETES_PRESCRICAO.protocoloSeguranca.map((item, i) => (
        <View key={i} style={[s.accentCard, { borderLeftColor: '#0284c7', backgroundColor: '#eff6ff', marginBottom: 6 }]}>
          <Text style={[s.cardTitle, { color: '#1d4ed8' }]}>{item.regra}</Text>
          <Text style={s.bullet}>{item.desc}</Text>
        </View>
      ))}

      <Text style={{ fontSize: 9, fontWeight: 'bold', marginTop: 8, marginBottom: 5, color: '#0d1117' }}>
        Ficha de Treino Modelo para Aluno Diabético
      </Text>
      <View style={s.table}>
        <View style={s.tableHead}>
          <Text style={s.th}>Bloco</Text>
          <Text style={[s.th, { flex: 1.6 }]}>Exercício</Text>
          <Text style={s.th}>Séries/Reps</Text>
          <Text style={[s.th, { flex: 1.4 }]}>Objetivo</Text>
        </View>
        {DIABETES_PRESCRICAO.fichaTreinoModelo.map((f, i) => (
          <View key={i} style={i % 2 === 0 ? s.tableRow : s.tableRowAlt}>
            <Text style={[s.tdBold, { color: '#0284c7' }]}>{f.bloco}</Text>
            <Text style={[s.td, { flex: 1.6 }]}>{f.exercicio}</Text>
            <Text style={s.td}>{f.series}</Text>
            <Text style={[s.td, { flex: 1.4 }]}>{f.objetivo}</Text>
          </View>
        ))}
      </View>

      <Footer scopeName="Pulseira Vermelha" />
    </Page>

    {/* ── Hipertensão ── */}
    <Page size="A4" style={s.page}>
      <View style={[s.sectionHeader, { borderBottomColor: '#be123c' }]}>
        <Text style={s.sectionTitle}>Hipertensão Arterial (HAS): Prescrição Segura</Text>
        <Text style={[s.sectionBadge, { backgroundColor: '#be123c' }]}>SEGURANÇA CLÍNICA</Text>
      </View>

      <View style={[s.accentCard, { borderLeftColor: '#be123c', backgroundColor: '#fff1f2' }]}>
        <Text style={[s.cardTitle, { color: '#9f1239' }]}>Epidemiologia & Impacto Cardiovascular</Text>
        <Text style={s.bullet}>{HIPERTENSAO_PRESCRICAO.epidemiologia}</Text>
      </View>

      <View style={{ flexDirection: 'row', gap: 9, marginBottom: 10 }}>
        <View style={[s.half, { flex: 1, width: undefined, borderLeftWidth: 3, borderLeftColor: '#be123c' }]}>
          <Text style={[s.cardTitle, { color: '#be123c' }]}>PAS (Sistólica)</Text>
          <Text style={s.bullet}>{HIPERTENSAO_PRESCRICAO.fisiologiaPA.pas}</Text>
        </View>
        <View style={[s.half, { flex: 1, width: undefined, borderLeftWidth: 3, borderLeftColor: '#1d4ed8' }]}>
          <Text style={[s.cardTitle, { color: '#1d4ed8' }]}>PAD (Diastólica)</Text>
          <Text style={s.bullet}>{HIPERTENSAO_PRESCRICAO.fisiologiaPA.pad}</Text>
        </View>
      </View>

      <Text style={{ fontSize: 9, fontWeight: 'bold', marginBottom: 5, color: '#0d1117' }}>
        Classificação da Pressão Arterial (SBC e AHA)
      </Text>
      <View style={s.table}>
        <View style={s.tableHead}>
          <Text style={s.th}>Diretriz</Text>
          <Text style={s.th}>Normal</Text>
          <Text style={[s.th, { flex: 1.5 }]}>Pré-Hipertensão</Text>
          <Text style={[s.th, { flex: 1.5 }]}>Hipertenso</Text>
        </View>
        {HIPERTENSAO_PRESCRICAO.tabelaClassificacao.map((row, i) => (
          <View key={i} style={i % 2 === 0 ? s.tableRow : s.tableRowAlt}>
            <Text style={[s.tdBold, { color: '#be123c' }]}>{row.diretriz}</Text>
            <Text style={s.td}>{row.normal}</Text>
            <Text style={[s.td, { flex: 1.5 }]}>{row.pre}</Text>
            <Text style={[s.td, { flex: 1.5, color: '#be123c', fontWeight: 'bold' }]}>{row.hipertenso}</Text>
          </View>
        ))}
      </View>

      <Text style={{ fontSize: 9, fontWeight: 'bold', marginTop: 8, marginBottom: 5, color: '#0d1117' }}>
        Cuidados Críticos de Segurança
      </Text>
      {(HIPERTENSAO_PRESCRICAO.protocolosSegurancaCriticos || []).map((item, i) => (
        <View key={i} style={[s.accentCard, {
          borderLeftColor: item.critico ? '#be123c' : '#059669',
          backgroundColor: item.critico ? '#fff1f2' : '#f0fdf4',
          marginBottom: 5
        }]}>
          <Text style={[s.cardTitle, { color: item.critico ? '#be123c' : '#047857' }]}>
            {item.critico ? '🚫 ' : '✓ '}{item.titulo}
          </Text>
          <Text style={s.bullet}>{item.texto}</Text>
        </View>
      ))}

      <Footer scopeName="Pulseira Vermelha" />
    </Page>

    {/* ── Guia Rápido e Regras de Ouro ── */}
    <Page size="A4" style={s.page}>
      <View style={[s.sectionHeader, { borderBottomColor: '#be123c' }]}>
        <Text style={s.sectionTitle}>Guia Rápido & Regras de Ouro de Prescrição</Text>
        <Text style={[s.sectionBadge, { backgroundColor: '#be123c' }]}>PRANQUETA DO PROFESSOR</Text>
      </View>

      <View style={[s.accentCard, { borderLeftColor: '#be123c', backgroundColor: '#fff1f2', marginBottom: 7 }]}>
        <Text style={[s.cardTitle, { color: '#9f1239' }]}>REGRA 1: Método PSF (Pouco, Simples e Fácil)</Text>
        <Text style={s.bullet}>Mantenha a PSE ≤ 4 a 5 (escala de 0 a 10) para alunos iniciantes, diabéticos e hipertensos. O foco é consolidação de hábito e saúde.</Text>
      </View>

      <View style={[s.accentCard, { borderLeftColor: '#be123c', backgroundColor: '#fff1f2', marginBottom: 7 }]}>
        <Text style={[s.cardTitle, { color: '#9f1239' }]}>REGRA 2: Abolição Total da Manobra de Valsalva</Text>
        <Text style={s.bullet}>Expirar na fase concêntrica e inspirar na excêntrica. O bloqueio de respiração provoca picos pressóricos perigosos.</Text>
      </View>

      <View style={[s.accentCard, { borderLeftColor: '#be123c', backgroundColor: '#fff1f2', marginBottom: 7 }]}>
        <Text style={[s.cardTitle, { color: '#9f1239' }]}>REGRA 3: Monitoramento Glicêmico Pré-Treino</Text>
        <Text style={s.bullet}>Glicemia &lt; 100 mg/dL: Ingerir 15 a 30 g de carboidratos simples antes. Glicemia &gt; 200 mg/dL corrigida com insulina rápida: esperar 90 minutos.</Text>
      </View>

      <View style={[s.accentCard, { borderLeftColor: '#be123c', backgroundColor: '#fff1f2', marginBottom: 7 }]}>
        <Text style={[s.cardTitle, { color: '#9f1239' }]}>REGRA 4: Ponto de Corte Crítico de Pressão Arterial</Text>
        <Text style={s.bullet}>PAS ≥ 200 mmHg ou PAD ≥ 115 mmHg: treino CANCELADO na sessão. Repouso imediato e encaminhamento médico.</Text>
      </View>

      <View style={[s.accentCard, { borderLeftColor: '#be123c', backgroundColor: '#fff1f2', marginBottom: 7 }]}>
        <Text style={[s.cardTitle, { color: '#9f1239' }]}>REGRA 5: Beta-Bloqueadores e Frequência Cardíaca</Text>
        <Text style={s.bullet}>Medicamentos beta-bloqueadores atenuam a elevação da FC. Use sempre a Escala de PSE (Borg ≤ 4) em vez de frequencímetro.</Text>
      </View>

      <View style={[s.accentCard, { borderLeftColor: '#be123c', backgroundColor: '#fff1f2', marginBottom: 7 }]}>
        <Text style={[s.cardTitle, { color: '#9f1239' }]}>REGRA 6: Manipulação do Braço de Resistência (BR) na Fadiga</Text>
        <Text style={s.bullet}>Flexionar articulações intermediárias (ex.: cotovelos ou joelhos) encurta o BR, facilitando o movimento para concluir as repetições com a mesma carga em segurança.</Text>
      </View>

      <Footer scopeName="Pulseira Vermelha" />
    </Page>

    {/* ── Banco de Questões da Pulseira Vermelha com Gabarito ── */}
    <Page size="A4" style={s.page}>
      <View style={[s.sectionHeader, { borderBottomColor: '#be123c' }]}>
        <Text style={s.sectionTitle}>Banco de Questões: Pulseira Vermelha</Text>
        <Text style={[s.sectionBadge, { backgroundColor: '#be123c' }]}>GABARITO & EXPLICAÇÕES</Text>
      </View>
      <Text style={{ fontSize: 8, color: '#475569', marginBottom: 6 }}>
        Questões oficiais da avaliação avançada (Princípios do Treinamento, SAG, Alavancas Biomecânicas, Diabetes e Hipertensão) com gabarito e justificativa científica.
      </Text>
      {QUIZ_QUESTIONS.filter(q => q.category === 'Pulseira Vermelha').map((q, idx) => (
        <PdfQuizCard key={q.id} q={q} index={idx} color="#e11d48" />
      ))}
      <Footer scopeName="Pulseira Vermelha" />
    </Page>
  </>
);

// ─────────────────────────────────────────────
//  ATLAS MUSCULAR
// ─────────────────────────────────────────────
const MusclePages = () => (
  <Page size="A4" style={s.page}>
    <View style={[s.sectionHeader, { borderBottomColor: '#1e293b' }]}>
      <Text style={s.sectionTitle}>Atlas Anatômico: 12 Grupamentos Musculares</Text>
      <Text style={[s.sectionBadge, { backgroundColor: '#1e293b' }]}>CINESIOLOGIA</Text>
    </View>

    {MUSCLES.map((muscle) => (
      <View key={muscle.id} style={s.muscleCard} wrap={false}>
        {muscle.image && <Image src={getSafeImg(muscle.image)} style={s.muscleImg} />}
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 }}>
            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#0d1117' }}>{muscle.name}</Text>
            <Text style={{ fontSize: 7.5, color: '#475569', fontWeight: 'bold' }}>{muscle.region}</Text>
          </View>
          <View style={s.textRow}>
            <Text style={s.label}>Composição:</Text>
            <Text style={s.value}>{muscle.composition}</Text>
          </View>
          <View style={s.textRow}>
            <Text style={s.label}>Ação / Função:</Text>
            <Text style={s.value}>{muscle.action}</Text>
          </View>
          <View style={s.textRow}>
            <Text style={s.label}>Plano:</Text>
            <Text style={[s.value, { color: '#1d4ed8' }]}>{muscle.plane}</Text>
          </View>
          <Text style={{ fontSize: 7.5, color: '#64748b', marginTop: 4, borderTopWidth: 1,
            borderTopColor: '#e5e7eb', paddingTop: 4 }}>
            Exercícios: {muscle.exercises.slice(0, 5).map(e => e.name).join(' • ')}
          </Text>
        </View>
      </View>
    ))}

    <Footer scopeName="Atlas Muscular" />
  </Page>
);

// ─────────────────────────────────────────────
//  DOCUMENTO PRINCIPAL
// ─────────────────────────────────────────────
export const EbookDocument = ({ scope = 'all' }) => {
  const meta = {
    verde:    { title: 'Pulseira Verde — Validação & Fundamentos',       color: '#059669', badge: 'MÓDULO NÍVEL 1 · UNIPOWER' },
    vermelha: { title: 'Pulseira Vermelha — Prescrição Científica',      color: '#be123c', badge: 'MÓDULO NÍVEL 2 · UNIPOWER' },
    muscles:  { title: 'Atlas Muscular — Cinesiologia Aplicada',         color: '#1e293b', badge: 'ATLAS CINESIOLÓGICO COMPLETO' },
    all:      { title: 'Apostila Completa — Sistema CinesioFit',         color: '#1d4ed8', badge: 'APOSTILA OFICIAL INTEGRADA' },
  };

  const m = meta[scope] || meta.all;

  const sub = {
    verde:    'Planos Anatômicos, Movimentos Articulares, Bioenergética, CORE • PAC • ERE e os 10 Exercícios Oficiais de Validação com Fases e Substituições',
    vermelha: 'Princípios do Treinamento Físico, SAG (Selye), Alavancas Biomecânicas e Segurança Clínica para Diabetes e Hipertensão Arterial',
    muscles:  'Guia Ilustrado dos 12 Grupamentos Musculares com Composição, Ações Articulares, Planos e Exercícios de Ativação',
    all:      'Guia Unificado com Todas as Certificações UniPower, Atlas Muscular e Prática Clínica — Material Oficial Pratique Fitness',
  };

  return (
    <Document title={`CinesioFit — ${m.title}`} author="CinesioFit App & Pratique Fitness"
      subject="Cinesiologia, Biomecânica e Metodologia de Treino">

      {/* CAPA */}
      <Page size="A4" style={s.coverPage}>
        <View style={[s.coverBand, { backgroundColor: m.color }]} />
        <View style={s.coverInner}>
          <Text style={s.coverTag}>CinesioFit App Pro</Text>
          <Text style={s.coverTitle}>{m.title}</Text>
          <Text style={s.coverSub}>{sub[scope]}</Text>
          <View style={s.coverBadge}>
            <Text style={s.coverBadgeText}>{m.badge}</Text>
          </View>
        </View>
        <Text style={s.coverFooter}>UniPower & Pratique Fitness — Material Didático e Prático</Text>
      </Page>

      {/* CONTEÚDO CONDICIONAL */}
      {(scope === 'verde'    || scope === 'all') && <PulseiraVerdePages />}
      {(scope === 'vermelha' || scope === 'all') && <PulseiraVermelhaPages />}
      {(scope === 'muscles'  || scope === 'all') && <MusclePages />}
    </Document>
  );
};
