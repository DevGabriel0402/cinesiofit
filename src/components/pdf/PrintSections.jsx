import React from 'react';
import { 
  Award, 
  Activity, 
  CheckCircle2, 
  AlertTriangle, 
  Zap, 
  Heart, 
  Shield, 
  Layers, 
  BookOpen, 
  Info,
  Check,
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { EXERCICIOS_PULSEIRA_VERDE, TEORIA_PULSEIRA_VERDE } from '../../dataPulseiraVerde';
import { 
  PRINCIPIOS_TREINAMENTO, 
  BIOMECANICA_ALAVANCAS, 
  ALAVANCAS_BIOMECANICAS,
  DIABETES_PRESCRICAO, 
  HIPERTENSAO_PRESCRICAO,
  QUESTIONARIO_EXERCICIO_SAUDE
} from '../../dataPulseiraVermelha';
import { MUSCLES, PLANES, MOVEMENTS } from '../../data';
import { QUIZ_QUESTIONS } from '../../quizData';

const OPT_LETTERS = ['A', 'B', 'C', 'D'];

/* ─────────────────────────────────────────────────────────────
 * COMPONENTE: ITEM DO QUIZ IMPRESSO COM GABARITO & EXPLICAÇÃO
 * ───────────────────────────────────────────────────────────── */
export const PrintQuizItem = ({ q, index, accentColor = '#10b981' }) => {
  return (
    <div className="print-quiz-card avoid-break">
      <div className="quiz-card-head">
        <span className="quiz-badge" style={{ backgroundColor: accentColor }}>
          Questão {index + 1}
        </span>
        <span className="quiz-category">{q.category}</span>
      </div>

      <div className="quiz-question-text">
        <strong>{q.question}</strong>
      </div>

      <div className="quiz-options-list">
        {q.options.map((opt, optIdx) => {
          const isCorrect = optIdx === q.correctAnswer;
          return (
            <div 
              key={optIdx} 
              className={`quiz-option-item ${isCorrect ? 'correct-option' : ''}`}
            >
              <span className={`option-letter ${isCorrect ? 'letter-correct' : ''}`}>
                {OPT_LETTERS[optIdx]}
              </span>
              <span className="option-text">
                {opt}
              </span>
              {isCorrect && (
                <span className="correct-tag">✓ Resposta Correta</span>
              )}
            </div>
          );
        })}
      </div>

      {q.explanation && (
        <div className="quiz-explanation-box">
          <div className="explanation-title">
            <span>💡 Justificativa Científica:</span>
          </div>
          <p className="explanation-desc">{q.explanation}</p>
        </div>
      )}
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────
 * COMPONENTE: CAPA ELEGANTE DO DOCUMENTO DE IMPRESSÃO
 * ───────────────────────────────────────────────────────────── */
export const PrintCover = ({ title, subtitle, badge, color = '#10b981', topics = [] }) => {
  return (
    <div className="print-cover-page">
      <div className="print-cover">
        <div className="cover-stripe" style={{ backgroundColor: color }} />
        <div className="cover-header-brand">
          <span className="brand-logo">PRATIQUE FITNESS • UNIPOWER</span>
          <span className="brand-sub">Manual Oficial de Capacitação & Validação Prática</span>
        </div>

        <div className="cover-body">
          <div className="cover-badge" style={{ borderColor: color, color: color }}>
            {badge}
          </div>
          <h1 className="cover-title" style={{ color: '#0f172a' }}>{title}</h1>
          <p className="cover-subtitle">{subtitle}</p>

          <div className="cover-topics-box">
            <span className="topics-title">Conteúdo Programático Incluso:</span>
            <div className="topics-grid">
              {topics.map((t, idx) => (
                <div key={idx} className="topic-pill">
                  <span className="pill-dot" style={{ backgroundColor: color }} />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="cover-footer-meta">
          <div><strong>Coordenação Técnica:</strong> Prof. Cleverson Costa & Time UniPower</div>
          <div><strong>Material Pedagógico:</strong> CinesioFit Pro • Exercícios com Gabarito e Explicações</div>
          <div className="cover-date">Documento Oficial para Impressão & Prancheta A4</div>
        </div>
      </div>
      <div className="force-page-break" />
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────
 * SEÇÃO: PULSEIRA VERDE (COMPLETA)
 * ───────────────────────────────────────────────────────────── */
export const PrintVerdeSection = () => {
  // Filtra as perguntas da Pulseira Verde (Verde + Bioenergética + Pratique CORE/PAC/ERE + Anamnese)
  const verdeQuestions = QUIZ_QUESTIONS.filter(q => 
    q.category === 'Pulseira Verde' || 
    q.category === 'Bioenergética' ||
    (q.category === 'Pratique' && [118, 119, 120].includes(q.id)) ||
    q.category === 'Anamnese'
  );

  return (
    <div className="print-section-wrapper" style={{ pageBreakBefore: 'always', breakBefore: 'page' }}>
      {/* 1. ESTUDO TEÓRICO: BIOENERGÉTICA */}
      <div className="section-title-banner verde-theme page-break">
        <Zap size={18} />
        <span>1. Estudo Teórico: Bioenergética e Sistemas Energéticos</span>
      </div>

      <p className="section-intro-text">
        O domínio das vias metabólicas fundamenta a correta prescrição de intervalos de descanso, 
        duração de séries e seleção de cargas nos treinos da Rede Pratique Fitness.
      </p>

      <table className="print-table">
        <thead>
          <tr>
            <th style={{ width: '22%' }}>Sistema Energético</th>
            <th style={{ width: '15%' }}>Duração</th>
            <th style={{ width: '15%' }}>Intensidade</th>
            <th style={{ width: '22%' }}>Substrato Predominante</th>
            <th style={{ width: '26%' }}>Exemplo no Treino</th>
          </tr>
        </thead>
        <tbody>
          {TEORIA_PULSEIRA_VERDE.bioenergetica.map((bio, idx) => (
            <tr key={idx}>
              <td><strong style={{ color: '#047857' }}>{bio.sistema}</strong></td>
              <td>{bio.duracao}</td>
              <td>{bio.intensidade}</td>
              <td>{bio.substrato}</td>
              <td>{bio.exemplo}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 2. METODOLOGIA PRATIQUE: CORE, PAC, ERE */}
      <div className="section-title-banner verde-theme" style={{ marginTop: '22px' }}>
        <Award size={18} />
        <span>2. Metodologia Pratique Fitness: Atendimento e Padrões Motores</span>
      </div>

      <div className="print-cards-grid avoid-break">
        {TEORIA_PULSEIRA_VERDE.metodologiaPratique.map((met, idx) => (
          <div key={idx} className="print-box-card verde-border">
            <h4 className="card-box-title" style={{ color: '#047857' }}>
              {met.sigla} — {met.titulo}
            </h4>
            <ul className="card-bullets-list">
              {met.itens.map((it, iIdx) => (
                <li key={iIdx}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="print-box-card avoid-break" style={{ marginTop: '12px', background: '#f8fafc', borderColor: '#cbd5e1' }}>
        <h4 className="card-box-title" style={{ color: '#0f172a' }}>
          Anamnese & Prontidão para Atividade Física (PAR-Q)
        </h4>
        <p style={{ margin: '4px 0', fontSize: '8.5pt', color: '#334155' }}>
          • <strong>Objetivo da Anamnese:</strong> Identificar restrições médicas, cirurgias prévias, histórico musculoesquelético de lesões e expectativas do aluno.
        </p>
        <p style={{ margin: '4px 0', fontSize: '8.5pt', color: '#334155' }}>
          • <strong>Questionário PAR-Q:</strong> Ferramenta de triagem inicial obrigatória. Havendo resposta positiva para sintomas cardíacos, dores torácicas ou tontura, o encaminhamento médico prévio é indispensável.
        </p>
      </div>

      {/* 3. PLANOS ANATÔMICOS & EIXOS */}
      <div className="section-title-banner verde-theme page-break" style={{ marginTop: '24px' }}>
        <Layers size={18} />
        <span>3. Planos Anatômicos e Eixos de Rotação Corporal</span>
      </div>

      <table className="print-table">
        <thead>
          <tr>
            <th style={{ width: '20%' }}>Plano Anatômico</th>
            <th style={{ width: '20%' }}>Eixo de Rotação</th>
            <th style={{ width: '25%' }}>Divisão do Corpo</th>
            <th style={{ width: '35%' }}>Movimentos Realizados</th>
          </tr>
        </thead>
        <tbody>
          {PLANES.map(p => (
            <tr key={p.id}>
              <td><strong style={{ color: '#047857' }}>{p.name}</strong></td>
              <td>{p.axis}</td>
              <td>{p.division}</td>
              <td>{p.movements.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 4. MOVIMENTOS ARTICULARES FUNDAMENTAIS */}
      <div className="section-title-banner verde-theme" style={{ marginTop: '22px' }}>
        <Activity size={18} />
        <span>4. Movimentos Articulares Fundamentais e Descrição Cinesiológica</span>
      </div>

      <table className="print-table">
        <thead>
          <tr>
            <th style={{ width: '22%' }}>Movimento</th>
            <th style={{ width: '18%' }}>Plano</th>
            <th style={{ width: '60%' }}>Ação Articular & Descrição</th>
          </tr>
        </thead>
        <tbody>
          {MOVEMENTS.map((m, idx) => (
            <tr key={idx}>
              <td><strong>{m.name}</strong></td>
              <td><span className="table-plane-tag">{m.plane}</span></td>
              <td>{m.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 5. OS 10 EXERCÍCIOS OFICIAIS DE VALIDAÇÃO PRÁTICA */}
      <div className="section-title-banner verde-theme page-break" style={{ marginTop: '24px' }}>
        <Award size={18} />
        <span>5. Os 10 Exercícios Oficiais de Validação da Pulseira Verde</span>
      </div>

      <div className="exercises-detailed-list">
        {EXERCICIOS_PULSEIRA_VERDE.map((ex) => (
          <div key={ex.id} className="exercise-print-card avoid-break">
            <div className="ex-head">
              <div className="ex-number-badge">#{ex.id}</div>
              <div className="ex-name">{ex.nome}</div>
              <div className="ex-plane-tag">{ex.plano}</div>
            </div>

            <div className="ex-grid-info">
              <div className="ex-field">
                <span className="field-lbl">Movimento Articular:</span>
                <span className="field-val"><strong>{ex.movimento}</strong></span>
              </div>
              <div className="ex-field">
                <span className="field-lbl">Grupamento Muscular Ativado:</span>
                <span className="field-val">{ex.grupoMuscular}</span>
              </div>
              <div className="ex-field">
                <span className="field-lbl">Exercício de Substituição:</span>
                <span className="field-val highlight-sub">{ex.substituicao}</span>
              </div>
              <div className="ex-field">
                <span className="field-lbl">Critério de Checagem PAC:</span>
                <span className="field-val pac-text">{ex.dicaPAC}</span>
              </div>
            </div>

            <div className="ex-phases-box">
              <div className="phase-col conc-col">
                <span className="phase-lbl">▲ Fase Concêntrica (Esforço / Expiração):</span>
                <span className="phase-desc">{ex.faseConcentrica}</span>
              </div>
              <div className="phase-col exc-col">
                <span className="phase-lbl">▼ Fase Excêntrica (Retorno / Inspiração):</span>
                <span className="phase-desc">{ex.faseExcentrica}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 6. BANCO DE QUESTÕES DA PULSEIRA VERDE COM RESPOSTAS E EXPLICAÇÕES */}
      <div className="section-title-banner verde-theme page-break" style={{ marginTop: '26px' }}>
        <CheckCircle2 size={18} />
        <span>6. Banco de Questões de Validação (Com Respostas e Explicações)</span>
      </div>
      <p className="section-intro-text">
        Abaixo estão todas as <strong>{verdeQuestions.length} questões oficiais</strong> cobradas na avaliação da Pulseira Verde 
        (Bioenergética, Atendimento Pratique, Planos, Movimentos e os 10 Exercícios), 
        com a resposta correta destacada e a justificativa técnica comentada.
      </p>

      <div className="quiz-print-container">
        {verdeQuestions.map((q, idx) => (
          <PrintQuizItem 
            key={q.id} 
            q={q} 
            index={idx} 
            accentColor="#10b981" 
          />
        ))}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────
 * SEÇÃO: PULSEIRA VERMELHA (COMPLETA)
 * ───────────────────────────────────────────────────────────── */
export const PrintVermelhaSection = () => {
  // Filtra as perguntas da Pulseira Vermelha
  const vermelhaQuestions = QUIZ_QUESTIONS.filter(q => q.category === 'Pulseira Vermelha');

  return (
    <div className="print-section-wrapper" style={{ pageBreakBefore: 'always', breakBefore: 'page' }}>
      {/* 1. PRINCÍPIOS DO TREINAMENTO FÍSICO */}
      <div className="section-title-banner vermelha-theme page-break">
        <Award size={18} />
        <span>1. Princípios do Treinamento Físico & Síndrome de Adaptação Geral</span>
      </div>

      <div className="print-box-card vermelha-border avoid-break" style={{ marginBottom: '14px' }}>
        <h4 className="card-box-title" style={{ color: '#be123c' }}>
          Carga de Treinamento ≠ Peso (Quilagem Externa)
        </h4>
        <p style={{ margin: '4px 0', fontSize: '9pt', color: '#334155' }}>
          {PRINCIPIOS_TREINAMENTO.introducao.conceito}
        </p>
        <p style={{ margin: '4px 0', fontSize: '8.5pt', color: '#64748b' }}>
          {PRINCIPIOS_TREINAMENTO.introducao.diferenca}
        </p>

        <div className="carga-components-grid" style={{ marginTop: '8px' }}>
          {PRINCIPIOS_TREINAMENTO.introducao.componentesCarga.map((comp, idx) => (
            <div key={idx} className="carga-comp-pill">
              <strong>{comp.nome}:</strong> {comp.desc}
            </div>
          ))}
        </div>
      </div>

      {PRINCIPIOS_TREINAMENTO.principios.map((prin) => (
        <div key={prin.id} className="principle-print-card avoid-break">
          <h4 className="prin-title">{prin.nome}</h4>
          <p className="prin-concept"><strong>Conceito Fisiológico:</strong> {prin.conceitoReal}</p>
          {prin.erroComum && (
            <p className="prin-mistake">❌ <strong>Erro Comum de Interpretação:</strong> {prin.erroComum}</p>
          )}
          {prin.regraDeOuro && (
            <p className="prin-gold">★ <strong>Regra de Ouro:</strong> {prin.regraDeOuro}</p>
          )}
          {prin.alerta && (
            <p className="prin-alert">⚠️ <strong>Alerta Clínico:</strong> {prin.alerta}</p>
          )}

          {prin.tabelaEstimulos && (
            <div style={{ marginTop: '8px' }}>
              <span style={{ fontSize: '8pt', fontWeight: 'bold', color: '#0f172a', textTransform: 'uppercase' }}>
                Respostas Orgânicas à Magnitude do Estímulo (SAG):
              </span>
              <table className="print-table" style={{ marginTop: '4px', marginBottom: '4px' }}>
                <thead>
                  <tr>
                    <th style={{ width: '22%' }}>Magnitude do Estímulo</th>
                    <th style={{ width: '40%' }}>Reação Fisiológica</th>
                    <th style={{ width: '38%' }}>Resultado Prático</th>
                  </tr>
                </thead>
                <tbody>
                  {prin.tabelaEstimulos.map((est, eIdx) => (
                    <tr key={eIdx}>
                      <td><strong>{est.nivel}</strong></td>
                      <td>{est.reacao}</td>
                      <td>{est.resultado}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {prin.efeitoAcumulado && (
                <p style={{ fontSize: '8pt', color: '#9f1239', margin: '4px 0', fontStyle: 'italic' }}>
                  ℹ️ {prin.efeitoAcumulado}
                </p>
              )}
            </div>
          )}

          {prin.regraProgressaoInicial && (
            <div style={{ marginTop: '6px', background: '#fff1f2', padding: '6px 10px', borderRadius: '4px' }}>
              <span style={{ fontSize: '8pt', fontWeight: 'bold', color: '#be123c' }}>
                Ordem Obrigatória de Aplicação da Sobrecarga Inicial:
              </span>
              <div style={{ fontSize: '8pt', color: '#334155', marginTop: '2px' }}>
                {prin.regraProgressaoInicial.join('  ➔  ')}
              </div>
            </div>
          )}
        </div>
      ))}

      {/* TABELA DE RECUPERAÇÃO */}
      <div className="avoid-break" style={{ marginTop: '12px' }}>
        <span style={{ fontSize: '9pt', fontWeight: 'bold', color: '#0f172a' }}>
          Tabela Oficial de Recuperação por Nível de Estímulo:
        </span>
        <table className="print-table" style={{ marginTop: '4px' }}>
          <thead>
            <tr>
              <th>Magnitude do Estímulo</th>
              <th>Objetivo Predominante</th>
              <th>Perfil de Aluno</th>
              <th>Tempo de Repouso Recomendado</th>
            </tr>
          </thead>
          <tbody>
            {PRINCIPIOS_TREINAMENTO.tabelaRecuperacao.map((rec, rIdx) => (
              <tr key={rIdx}>
                <td><strong style={{ color: '#be123c' }}>{rec.estimulo}</strong></td>
                <td>{rec.objetivo}</td>
                <td>{rec.nivel}</td>
                <td><strong>{rec.tempo}</strong></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 2. BIOMECÂNICA DAS ALAVANCAS */}
      <div className="section-title-banner vermelha-theme page-break" style={{ marginTop: '24px' }}>
        <Layers size={18} />
        <span>2. Biomecânica Avançada: Alavancas Articulares e Manipulação do Torque</span>
      </div>

      <div className="alavanca-components-row avoid-break">
        {BIOMECANICA_ALAVANCAS.componentes.map((c, idx) => (
          <div key={idx} className="alavanca-comp-box">
            <span className="alavanca-sigla">{c.sigla}</span>
            <span className="alavanca-nome">{c.nome}</span>
            <span className="alavanca-anat">{c.anatomia}</span>
          </div>
        ))}
      </div>

      <div className="print-box-card vermelha-border avoid-break" style={{ margin: '10px 0' }}>
        <h4 className="card-box-title" style={{ color: '#be123c' }}>
          A Regra Fundamental dos Braços de Alavanca
        </h4>
        <p style={{ margin: '3px 0', fontSize: '8.5pt', color: '#047857' }}>
          • <strong>{BIOMECANICA_ALAVANCAS.bracos.bf}</strong>
        </p>
        <p style={{ margin: '3px 0', fontSize: '8.5pt', color: '#be123c' }}>
          • <strong>{BIOMECANICA_ALAVANCAS.bracos.br}</strong>
        </p>
        <p style={{ margin: '5px 0 2px 0', fontSize: '8.5pt', color: '#334155' }}>
          {BIOMECANICA_ALAVANCAS.regraVantagemMecanica.regra}
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '6px' }}>
          <div style={{ background: '#fff1f2', padding: '6px', borderRadius: '4px', fontSize: '8pt', color: '#be123c' }}>
            {BIOMECANICA_ALAVANCAS.regraVantagemMecanica.aumentarBR}
          </div>
          <div style={{ background: '#f0fdf4', padding: '6px', borderRadius: '4px', fontSize: '8pt', color: '#047857' }}>
            {BIOMECANICA_ALAVANCAS.regraVantagemMecanica.diminuirBR}
          </div>
        </div>
      </div>

      {/* TABELA DAS 3 CLASSES */}
      <table className="print-table avoid-break">
        <thead>
          <tr>
            <th style={{ width: '18%' }}>Classe</th>
            <th style={{ width: '22%' }}>Componente Central</th>
            <th style={{ width: '20%' }}>Analogia Cotidiano</th>
            <th style={{ width: '22%' }}>Exemplo no Corpo</th>
            <th style={{ width: '18%' }}>Exemplo na Academia</th>
          </tr>
        </thead>
        <tbody>
          {ALAVANCAS_BIOMECANICAS.classes.map(cl => (
            <tr key={cl.classe}>
              <td><strong style={{ color: '#be123c' }}>{cl.nome}</strong></td>
              <td>{cl.mecanica}</td>
              <td>{cl.funcao}</td>
              <td>{cl.exemploCorpo}</td>
              <td><strong>{cl.exemploAcademia}</strong></td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* EXEMPLOS PRÁTICOS DE MANIPULAÇÃO DE BR */}
      <div className="section-title-banner vermelha-theme" style={{ marginTop: '16px' }}>
        <Zap size={18} />
        <span>Exemplos Práticos de Manipulação do Braço de Resistência (BR)</span>
      </div>

      <div className="print-cards-grid avoid-break">
        {BIOMECANICA_ALAVANCAS.exemplosPraticos.map((ex, idx) => (
          <div key={idx} className="print-box-card" style={{ borderLeft: '3px solid #be123c' }}>
            <h4 style={{ margin: '0 0 4px 0', fontSize: '9pt', color: '#0f172a' }}>{ex.exercicio}</h4>
            <p style={{ margin: '2px 0', fontSize: '8pt', color: '#be123c' }}>
              <strong>↑ BR Longo (Mais difícil):</strong> {ex.variacaoLonga}
            </p>
            <p style={{ margin: '2px 0', fontSize: '8pt', color: '#047857' }}>
              <strong>↓ BR Curto (Mais fácil / Fadiga):</strong> {ex.variacaoCurta}
            </p>
          </div>
        ))}
      </div>

      {/* 3. DIABETES MELLITUS */}
      <div className="section-title-banner vermelha-theme page-break" style={{ marginTop: '24px' }}>
        <Heart size={18} />
        <span>3. Segurança Clínica: Diabetes Mellitus & Analogia da Insulina</span>
      </div>

      <div className="print-box-card" style={{ background: '#f0fdf4', borderColor: '#86efac', marginBottom: '10px' }}>
        <h4 style={{ margin: '0 0 3px 0', color: '#166534', fontSize: '9.5pt' }}>
          {DIABETES_PRESCRICAO.analogia.titulo}
        </h4>
        <p style={{ margin: 0, fontSize: '8.5pt', color: '#14532d' }}>
          {DIABETES_PRESCRICAO.analogia.texto}
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '10px' }} className="avoid-break">
        {DIABETES_PRESCRICAO.tipos.map((t, idx) => (
          <div key={idx} className="print-box-card">
            <strong style={{ color: '#be123c', fontSize: '9pt' }}>{t.tipo}</strong>
            <p style={{ margin: '2px 0 0 0', fontSize: '8pt', color: '#475569' }}>{t.desc}</p>
          </div>
        ))}
      </div>

      {/* TABELA DE GLICEMIA */}
      <table className="print-table avoid-break">
        <thead>
          <tr>
            <th style={{ width: '22%' }}>Classificação Glicêmica</th>
            <th style={{ width: '18%' }}>Glicemia em Jejum</th>
            <th style={{ width: '20%' }}>Glicemia Pós-Prandial</th>
            <th style={{ width: '40%' }}>Conduta & Papel do Exercício</th>
          </tr>
        </thead>
        <tbody>
          {DIABETES_PRESCRICAO.tabelaGlicemia.map((item, idx) => (
            <tr key={idx}>
              <td><strong style={{ color: '#be123c' }}>{item.classificacao}</strong></td>
              <td>{item.jejum}</td>
              <td>{item.posPrandial}</td>
              <td>{item.conduta}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* PROTOCOLOS DE SEGURANÇA DIABETES */}
      <div className="print-box-card avoid-break" style={{ background: '#fff1f2', borderColor: '#fca5a5', marginTop: '10px' }}>
        <h4 style={{ margin: '0 0 6px 0', color: '#9f1239', fontSize: '9pt' }}>
          Protocolos Clínicos Obrigatórios no Atendimento ao Aluno Diabético:
        </h4>
        <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '8.5pt', color: '#334155' }}>
          {DIABETES_PRESCRICAO.protocoloSeguranca.map((prot, idx) => (
            <li key={idx} style={{ marginBottom: '4px' }}>
              <strong>{prot.regra}:</strong> {prot.desc}
            </li>
          ))}
        </ul>
      </div>

      {/* 4. HIPERTENSÃO ARTERIAL SISTÊMICA (HAS) */}
      <div className="section-title-banner vermelha-theme page-break" style={{ marginTop: '24px' }}>
        <Shield size={18} />
        <span>4. Segurança Clínica: Hipertensão Arterial Sistêmica (HAS)</span>
      </div>

      <div className="print-box-card avoid-break" style={{ marginBottom: '10px' }}>
        <p style={{ margin: '0 0 6px 0', fontSize: '8.5pt', color: '#334155' }}>
          <strong>Epidemiologia no Brasil:</strong> {HIPERTENSAO_PRESCRICAO.epidemiologia}
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
          <div style={{ background: '#f8fafc', padding: '6px', borderRadius: '4px', fontSize: '8pt' }}>
            <strong>PAS (Sistólica):</strong> {HIPERTENSAO_PRESCRICAO.fisiologiaPA.pas}
          </div>
          <div style={{ background: '#f8fafc', padding: '6px', borderRadius: '4px', fontSize: '8pt' }}>
            <strong>PAD (Diastólica):</strong> {HIPERTENSAO_PRESCRICAO.fisiologiaPA.pad}
          </div>
        </div>
      </div>

      {/* CLASSIFICAÇÃO PRESSÓRICA */}
      <table className="print-table avoid-break">
        <thead>
          <tr>
            <th>Diretriz de Referência</th>
            <th>Pressão Normal</th>
            <th>Pré-Hipertensão</th>
            <th>Hipertensão Estabelecida</th>
          </tr>
        </thead>
        <tbody>
          {HIPERTENSAO_PRESCRICAO.tabelaClassificacao.map((tc, idx) => (
            <tr key={idx}>
              <td><strong>{tc.diretriz}</strong></td>
              <td>{tc.normal}</td>
              <td>{tc.pre}</td>
              <td><strong style={{ color: '#be123c' }}>{tc.hipertenso}</strong></td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* EVIDÊNCIAS ACSM & BENEFÍCIOS */}
      <div className="print-box-card avoid-break" style={{ background: '#f0fdf4', borderColor: '#86efac', margin: '10px 0' }}>
        <h4 style={{ margin: '0 0 4px 0', color: '#166534', fontSize: '9pt' }}>
          Benefícios Comprovados & Equivalência Terapêutica (ACSM)
        </h4>
        <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '8pt', color: '#14532d' }}>
          {HIPERTENSAO_PRESCRICAO.beneficiosCardiovasculares.map((ben, idx) => (
            <li key={idx} style={{ marginBottom: '3px' }}>{ben}</li>
          ))}
        </ul>
      </div>

      {/* PROTOCOLOS CRÍTICOS DE SEGURANÇA NA HAS */}
      <div className="avoid-break" style={{ marginTop: '10px' }}>
        <span style={{ fontSize: '9pt', fontWeight: 'bold', color: '#be123c', textTransform: 'uppercase' }}>
          Regras de Segurança Inegociáveis no Salão de Musculação:
        </span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '6px' }}>
          {HIPERTENSAO_PRESCRICAO.protocolosSegurancaCriticos.map((crit, idx) => (
            <div 
              key={idx} 
              className="print-box-card" 
              style={{ 
                borderLeft: `4px solid ${crit.critico ? '#e11d48' : '#0284c7'}`,
                background: crit.critico ? '#fff1f2' : '#f0f9ff'
              }}
            >
              <strong style={{ color: crit.critico ? '#be123c' : '#0369a1', fontSize: '8.5pt' }}>
                {crit.critico ? '🚫 ' : '✓ '}{crit.titulo}
              </strong>
              <p style={{ margin: '2px 0 0 0', fontSize: '8pt', color: '#334155' }}>
                {crit.texto}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 5. GUIA RÁPIDO & REGRAS DE PRESCRIÇÃO */}
      <div className="section-title-banner vermelha-theme page-break" style={{ marginTop: '24px' }}>
        <Sparkles size={18} />
        <span>5. Guia Rápido & Regras de Ouro de Prescrição (Prancheta do Professor)</span>
      </div>

      <div className="quick-rules-container avoid-break">
        <div className="quick-rule-box">
          <span className="q-badge">REGRA 1</span>
          <h4>Método PSF (Pouco, Simples e Fácil)</h4>
          <p>Para alunos iniciantes, diabéticos ou hipertensos, mantenha a Percepção Subjetiva de Esforço (PSE) ≤ 4 a 5 (escala de 0 a 10). O objetivo da fase inicial é adesão e saúde, não exaustão.</p>
        </div>

        <div className="quick-rule-box">
          <span className="q-badge">REGRA 2</span>
          <h4>Valsalva é Proibida</h4>
          <p>Instrua o aluno a expirar no momento de maior esforço (concêntrica) e inspirar no retorno (excêntrica). O bloqueio respiratório causa picos de pressão perigosos.</p>
        </div>

        <div className="quick-rule-box">
          <span className="q-badge">REGRA 3</span>
          <h4>Glicemia Pré-Treino</h4>
          <p>Glicemia &lt; 100 mg/dL: Oferecer 15-30g de carboidrato antes de iniciar. Glicemia &gt; 200 mg/dL corrigida com insulina rápida: aguardar 90 minutos antes do treino.</p>
        </div>

        <div className="quick-rule-box">
          <span className="q-badge">REGRA 4</span>
          <h4>Contraindicação Absoluta de PA</h4>
          <p>Pressão Arterial Sistólica ≥ 200 mmHg ou Diastólica ≥ 115 mmHg: treino CANCELADO na sessão. Repouso imediato e encaminhamento médico.</p>
        </div>

        <div className="quick-rule-box">
          <span className="q-badge">REGRA 5</span>
          <h4>Beta-Bloqueadores & Frequência</h4>
          <p>Medicamentos com sufixo "lol" (atenolol, propranolol) bloqueiam a elevação da FC. Use SEMPRE a escala de PSE (Borg ≤ 4) em vez de frequencímetro.</p>
        </div>

        <div className="quick-rule-box">
          <span className="q-badge">REGRA 6</span>
          <h4>Manipulação do BR na Fadiga</h4>
          <p>Quando o aluno perder a cadência ou sentir desconforto articular, diminua o Braço de Resistência (flexionando cotovelos/joelhos) para terminar a série em segurança com a mesma carga.</p>
        </div>
      </div>

      {/* 6. BANCO DE QUESTÕES DA PULSEIRA VERMELHA COM RESPOSTAS E EXPLICAÇÕES */}
      <div className="section-title-banner vermelha-theme page-break" style={{ marginTop: '26px' }}>
        <CheckCircle2 size={18} />
        <span>6. Banco de Questões de Validação da Pulseira Vermelha (Com Gabarito e Explicações)</span>
      </div>
      <p className="section-intro-text">
        Abaixo estão todas as <strong>{vermelhaQuestions.length} questões oficiais</strong> da avaliação da Pulseira Vermelha 
        (Princípios do Treinamento, Síndrome de Adaptação Geral, Alavancas Biomecânicas, Diabetes e Hipertensão), 
        com as respostas corretas identificadas e as justificativas científicas explicadas.
      </p>

      <div className="quiz-print-container">
        {vermelhaQuestions.map((q, idx) => (
          <PrintQuizItem 
            key={q.id} 
            q={q} 
            index={idx} 
            accentColor="#e11d48" 
          />
        ))}
      </div>

      {/* 7. QUESTIONÁRIO OFICIAL: EXERCÍCIO FÍSICO E SAÚDE */}
      <div className="section-title-banner vermelha-theme page-break" style={{ marginTop: '28px' }}>
        <BookOpen size={18} />
        <span>7. Questionário Oficial: Exercício Físico e Saúde</span>
      </div>
      <p className="section-intro-text">
        As alternativas corretas estão destacadas em verde e identificadas com ✓. 
        Os itens seguem a numeração original das capturas da avaliação oficial da UniPower. 
        (Obs.: As questões 20 e 25 não constam por ilegibilidade das imagens de origem).
      </p>

      <div className="quiz-print-container">
        {QUESTIONARIO_EXERCICIO_SAUDE.map((item) => (
          <div key={item.numero} className="print-quiz-card avoid-break">
            <div className="quiz-card-head">
              <span className="quiz-badge" style={{ backgroundColor: '#e11d48' }}>
                Questão {item.numero}
              </span>
              <span className="quiz-category">Exercício Físico e Saúde</span>
            </div>

            <div className="quiz-question-text">
              <strong>{item.pergunta}</strong>
            </div>

            <div className="quiz-options-list">
              {item.opcoes.map((opt, optIdx) => {
                const isCorrect = optIdx === item.respostaCorreta;
                return (
                  <div 
                    key={optIdx} 
                    className={`quiz-option-item ${isCorrect ? 'correct-option' : ''}`}
                  >
                    <span className={`option-letter ${isCorrect ? 'letter-correct' : ''}`}>
                      {OPT_LETTERS[optIdx]}
                    </span>
                    <span className="option-text">
                      {opt}
                    </span>
                    {isCorrect && (
                      <span className="correct-tag">✓ Resposta Correta</span>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="quiz-explanation-box">
              <div className="explanation-title">
                <span>💡 Gabarito: {item.gabarito} • Justificativa Científica:</span>
              </div>
              <p className="explanation-desc">{item.explicacao}</p>
            </div>
          </div>
        ))}
      </div>

      {/* GABARITO RESUMIDO */}
      <div className="avoid-break" style={{ marginTop: '16px' }}>
        <span style={{ fontSize: '9pt', fontWeight: 'bold', color: '#0f172a' }}>
          Tabela Resumo de Gabarito: Exercício Físico e Saúde
        </span>
        <table className="print-table" style={{ marginTop: '6px' }}>
          <thead>
            <tr>
              {QUESTIONARIO_EXERCICIO_SAUDE.slice(0, 11).map(q => (
                <th key={q.numero} style={{ textAlign: 'center', padding: '4px' }}>Q{q.numero}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {QUESTIONARIO_EXERCICIO_SAUDE.slice(0, 11).map(q => (
                <td key={q.numero} style={{ textAlign: 'center', fontWeight: 'bold', color: '#be123c', padding: '4px' }}>
                  {q.gabarito}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
        <table className="print-table" style={{ marginTop: '4px' }}>
          <thead>
            <tr>
              {QUESTIONARIO_EXERCICIO_SAUDE.slice(11).map(q => (
                <th key={q.numero} style={{ textAlign: 'center', padding: '4px' }}>Q{q.numero}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {QUESTIONARIO_EXERCICIO_SAUDE.slice(11).map(q => (
                <td key={q.numero} style={{ textAlign: 'center', fontWeight: 'bold', color: '#be123c', padding: '4px' }}>
                  {q.gabarito}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────
 * SEÇÃO: ATLAS MUSCULAR (12 GRUPAMENTOS)
 * ───────────────────────────────────────────────────────────── */
export const PrintMusclesSection = () => {
  return (
    <div className="print-section-wrapper" style={{ pageBreakBefore: 'always', breakBefore: 'page' }}>
      <div className="section-title-banner dark-theme page-break">
        <Activity size={18} />
        <span>Atlas Cinesiológico: 12 Grupamentos Musculares</span>
      </div>

      <table className="print-table">
        <thead>
          <tr>
            <th style={{ width: '16%' }}>Músculo</th>
            <th style={{ width: '14%' }}>Região</th>
            <th style={{ width: '22%' }}>Composição / Fibras</th>
            <th style={{ width: '24%' }}>Ação Cinesiológica</th>
            <th style={{ width: '10%' }}>Plano</th>
            <th style={{ width: '14%' }}>Exercícios na Sala</th>
          </tr>
        </thead>
        <tbody>
          {MUSCLES.map(m => (
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
  );
};
