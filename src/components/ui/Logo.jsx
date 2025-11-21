import React from 'react';

/**
 * Logo component (inline SVG)
 * Props:
 * - size: height in pixels (width will be ~3x to preserve aspect ratio)
 * - className: additional class names
 * - withText: show the full name and subtitle
 * - subtitle: optional subtitle under the name
 */
export default function Logo({ size = 48, className = '', withText = true, subtitle = 'Frontend Developer', title = 'Mohammad Rehan' }) {
  const width = Math.round(size * 3);
  const gradId = 'lr-grad';
  const shadowId = 'lr-shadow';

  return (
    <svg
      className={className}
      width={width}
      height={size}
      viewBox="0 0 240 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <defs>
        <linearGradient id={gradId} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#0ea5b4" />
        </linearGradient>
        <filter id={shadowId} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000" floodOpacity="0.15"/>
        </filter>
      </defs>

      <g transform="translate(16,8)">
        <circle cx="28" cy="28" r="28" fill={`url(#${gradId})`} filter={`url(#${shadowId})`} />
        <g transform="translate(12,10)" fill="#fff" fontFamily="Segoe UI, Roboto, Helvetica, Arial, sans-serif" fontWeight="700">
          <text x="0" y="22" fontSize="22">M</text>
          <text x="18" y="22" fontSize="18" opacity="0.95">R</text>
        </g>
      </g>

      {withText && (
        <g transform="translate(80,28)" fill="#0f172a" fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial" fontWeight="600">
          <text x="0" y="8" fontSize="20">{title}</text>
          {subtitle && <text x="0" y="28" fontSize="12" fill="#475569" fontWeight="500">{subtitle}</text>}
        </g>
      )}
    </svg>
  );
}
