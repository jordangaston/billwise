// ============================================================
// Design System Tokens
// Edit this file to restyle the entire application.
//
// NOTE: CSS custom properties in index.css must be kept in
// sync with the values in the `colors` section below.
// ============================================================

// ------------------------------------
// Hues (change these to shift the whole palette)
// ------------------------------------
const HUE_PRIMARY = 48   // orange — try 285 for purple, 160 for teal
const HUE_WARM    = 80   // cream background warmth

// ------------------------------------
// Colors
// ------------------------------------
export const colors = {
  // Brand (keep in sync with index.css --color-primary)
  primary:        `oklch(72% 0.17 ${HUE_PRIMARY})`,
  primaryContent: `oklch(100% 0 0)`,

  // Background scale (keep in sync with index.css --color-base-*)
  base100:        `oklch(98% 0.008 ${HUE_WARM})`,
  base200:        `oklch(92% 0.008 ${HUE_WARM})`,
  base300:        `oklch(84% 0.008 ${HUE_WARM})`,
  baseContent:    `oklch(15% 0 0)`,
  contentMuted:   `oklch(30% 0 0)`,

  // Tinted scale (used in gradients and section backgrounds)
  tint50:  `oklch(96% 0.02 ${HUE_PRIMARY})`,
  tint100: `oklch(95% 0.03 ${HUE_PRIMARY})`,
  tint200: `oklch(94% 0.04 ${HUE_PRIMARY})`,
  tint300: `oklch(91% 0.05 ${HUE_PRIMARY})`,
  tint400: `oklch(89% 0.06 ${HUE_PRIMARY})`,

  // Badge / UI accent tints
  badgeBg:   `oklch(93% 0.03 ${HUE_PRIMARY})`,
  successBg: `oklch(91% 0.03 ${HUE_PRIMARY})`,

  // Glass (rgba equivalent of primary — adjust alpha to taste)
  glassActive:      'rgba(210, 100, 30, 0.12)',
  glassBorderActive:'rgba(210, 100, 30, 0.25)',
  glassMedium:      'rgba(210, 100, 30, 0.10)',
  glassBorderMed:   'rgba(210, 100, 30, 0.20)',
  glassSubtle:      'rgba(210, 100, 30, 0.05)',
  glassBorderSubtle:'rgba(210, 100, 30, 0.12)',

  // Overlays
  darkOverlay: `oklch(20% 0.02 ${HUE_PRIMARY} / 0.6)`,
  phoneFrame:  `oklch(20% 0 0)`,
  phoneNotch:  `oklch(12% 0 0)`,

  // Grid overlay line color
  gridLine: `oklch(55% 0.14 55 / 0.1)`,
}

// ------------------------------------
// Gradients
// ------------------------------------
export const gradients = {
  hero:       `linear-gradient(to bottom, ${colors.tint400} 0%, ${colors.tint200} 60%, ${colors.base100} 100%)`,
  howItWorks: `linear-gradient(170deg, ${colors.tint400} 0%, ${colors.tint100} 50%, ${colors.base100} 100%)`,
  footer:     `linear-gradient(to bottom, ${colors.base100} 0%, ${colors.tint50} 25%, ${colors.tint300} 100%)`,
  benefits:   `linear-gradient(135deg, ${colors.base200} 0%, ${colors.base100} 50%, ${colors.base200} 100%)`,
  features:   `linear-gradient(160deg, ${colors.tint50} 0%, ${colors.tint200} 100%)`,
}

// ------------------------------------
// Glass surfaces
// ------------------------------------
export const glass = {
  active: {
    background:       colors.glassActive,
    backdropFilter:   'blur(14px)',
    WebkitBackdropFilter: 'blur(14px)',
    borderColor:      colors.glassBorderActive,
    boxShadow:        'inset 0 1px 0 rgba(255,255,255,0.5), 0 4px 20px rgba(0,0,0,0.06)',
  },
  inactive: {
    background:       colors.glassSubtle,
    backdropFilter:   'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    borderColor:      colors.glassBorderSubtle,
    boxShadow:        'inset 0 1px 0 rgba(255,255,255,0.4)',
  },
  panel: {
    background:       colors.glassMedium,
    backdropFilter:   'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border:           `1px solid ${colors.glassBorderMed}`,
    boxShadow:        'inset 0 1px 0 rgba(255,255,255,0.5), 0 8px 32px rgba(0,0,0,0.06)',
  },
}

// ------------------------------------
// Typography
// ------------------------------------
export const fonts = {
  sans: "system-ui, -apple-system, 'Segoe UI', sans-serif",
  // To swap to a Google Font, change this value and update the <link> in index.html
  // e.g. "'Inter', sans-serif"
}

// ------------------------------------
// Border radius
// ------------------------------------
export const radii = {
  pill:      '9999px',   // buttons, navbar, tags
  container: '1.5rem',   // big panels (rounded-3xl)
  card:      '1rem',     // cards (rounded-2xl)
  element:   '0.75rem',  // inputs, small cards (rounded-xl)
  small:     '0.5rem',   // badges, chips (rounded-lg)
}
