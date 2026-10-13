export const getTheme = (mode = 'monochrome') => {
  // Configurações cromáticas dinâmicas
  let primaryColors = {
    // Monochrome: usa índigo-900 como accent (cor distinguível, não puro preto)
    primary: '#1e293b',         // Slate-800 — distinguível sobre fundo claro
    primaryLight: '#475569',    // Slate-600 — texto secundário com bom contraste
    primaryDark: '#0f172a',     // Slate-900 — títulos e elementos de destaque
    primaryBg: '#f1f5f9',       // Slate-100 — fundo de chips/badges
    primaryBorder: '#cbd5e1',   // Slate-300 — bordas sutis
    primaryText: '#ffffff',     // Texto sobre fundos primary
    accent: '#3b82f6',          // Azul como cor de acento para highlights monocromáticos
    accentBg: '#eff6ff',
    glow: '0 10px 25px -5px rgba(30, 41, 59, 0.3)',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #334155 100%)',
    activeBadge: '#1e293b',
    badgeText: '#ffffff'
  };

  if (mode === 'green') {
    primaryColors = {
      primary: '#059669',        // Verde mais escuro (melhor contraste que #10b981)
      primaryLight: '#34d399',
      primaryDark: '#047857',
      primaryBg: '#ecfdf5',
      primaryBorder: '#a7f3d0',
      primaryText: '#ffffff',
      accent: '#10b981',
      accentBg: '#d1fae5',
      glow: '0 10px 25px -5px rgba(5, 150, 105, 0.42)',
      gradient: 'linear-gradient(135deg, #064e3b 0%, #059669 50%, #10b981 100%)',
      activeBadge: '#059669',
      badgeText: '#ffffff'
    };
  } else if (mode === 'red') {
    primaryColors = {
      primary: '#be123c',        // Vermelho mais escuro (melhor contraste que #e11d48)
      primaryLight: '#fb7185',
      primaryDark: '#9f1239',
      primaryBg: '#fff1f2',
      primaryBorder: '#fecdd3',
      primaryText: '#ffffff',
      accent: '#e11d48',
      accentBg: '#ffe4e6',
      glow: '0 10px 25px -5px rgba(190, 18, 60, 0.42)',
      gradient: 'linear-gradient(135deg, #881337 0%, #be123c 50%, #e11d48 100%)',
      activeBadge: '#be123c',
      badgeText: '#ffffff'
    };
  }

  return {
    mode,
    colors: {
      ...primaryColors,

      // Paletas dedicadas para uso explícito
      green: '#10b981',
      greenLight: '#6ee7b7',
      greenDark: '#047857',
      greenBg: '#ecfdf5',
      greenBorder: '#a7f3d0',

      red: '#e11d48',
      redLight: '#fda4af',
      redDark: '#9f1239',
      redBg: '#fff1f2',
      redBorder: '#fecdd3',

      // Neutros & Superfícies (Preto e Branco sofisticado)
      secondary: '#0f172a',
      secondaryLight: '#1e293b',
      background: '#f8fafc',
      surface: '#ffffff',
      surfaceElevated: '#ffffff',
      surfaceMuted: '#f1f5f9',
      sidebarBg: '#090d16',
      sidebarHover: 'rgba(255, 255, 255, 0.08)',
      text: '#0d1117',            // Quase preto — máximo contraste sobre branco
      textSecondary: '#334155',    // Slate-700 — secundário com 7:1 WCAG AA
      textMuted: '#475569',        // Slate-600 — notas e labels, 5:1 contraste
      textLight: '#64748b',        // Slate-500 — placeholders, mínimo legível
      border: '#d1d5db',           // Gray-300 — borda mais visível
      borderLight: '#e5e7eb',      // Gray-200 — separadores sutis

      // Semânticos
      success: '#059669',
      successBg: '#d1fae5',
      warning: '#d97706',
      warningBg: '#fef3c7',
      danger: '#dc2626',
      dangerBg: '#fee2e2',
      info: '#2563eb',
      infoBg: '#dbeafe',

      // Gradients
      gradients: {
        primary: primaryColors.gradient,
        monochrome: 'linear-gradient(135deg, #020617 0%, #0f172a 60%, #1e293b 100%)',
        green: 'linear-gradient(135deg, #064e3b 0%, #059669 50%, #10b981 100%)',
        red: 'linear-gradient(135deg, #881337 0%, #be123c 50%, #e11d48 100%)',
        dark: 'linear-gradient(135deg, #090d16 0%, #0f172a 100%)',
        card: 'linear-gradient(180deg, #ffffff 0%, #fafafa 100%)'
      }
    },
    shadows: {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.04)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.04)',
      '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.15)',
      card: '0 10px 30px -10px rgba(0, 0, 0, 0.06), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
      cardHover: '0 20px 35px -10px rgba(0, 0, 0, 0.1), 0 8px 12px -4px rgba(0, 0, 0, 0.04)',
      glass: '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
      glowPrimary: primaryColors.glow,
      glowRed: '0 12px 30px -8px rgba(225, 29, 72, 0.35)',
      glowGreen: '0 12px 30px -8px rgba(16, 185, 129, 0.35)'
    },
    radii: {
      sm: '0.375rem',
      md: '0.5rem',
      lg: '0.75rem',
      xl: '1rem',
      '2xl': '1.25rem',
      '3xl': '1.75rem',
      full: '9999px',
    },
    transitions: {
      fast: '0.15s cubic-bezier(0.4, 0, 0.2, 1)',
      normal: '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      slow: '0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      spring: '0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
    }
  };
};

export const theme = getTheme('monochrome');
