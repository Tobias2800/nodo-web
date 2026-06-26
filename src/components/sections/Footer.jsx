'use client';
import Reveal from '@/components/ui/Reveal';
import { footer } from '@/content';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: 'var(--black)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: 'clamp(56px, 7vw, 96px) 0 clamp(32px, 4vw, 48px)',
      }}
    >
      <div className="container">
        {/* Top grid: logo + columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr',
            gap: 'clamp(40px, 5vw, 80px)',
            marginBottom: 'clamp(48px, 6vw, 80px)',
          }}
        >
          {/* Brand col */}
          <Reveal>
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(28px, 3vw, 40px)',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  color: 'var(--white)',
                  marginBottom: 16,
                  lineHeight: 1,
                }}
              >
                {footer.logo}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 13,
                  fontWeight: 300,
                  color: 'rgba(244,243,239,0.32)',
                  lineHeight: 1.6,
                  maxWidth: 240,
                  marginBottom: 8,
                }}
              >
                {footer.tagline}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 11,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: 'rgba(244,243,239,0.2)',
                }}
              >
                {footer.location}
              </p>
            </div>
          </Reveal>

          {/* Link columns */}
          {footer.columns.map((col, i) => (
            <Reveal key={col.heading} delay={(i + 1) * 100}>
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 11,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'rgba(244,243,239,0.25)',
                    marginBottom: 20,
                  }}
                >
                  {col.heading}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {col.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      style={{
  fontFamily: 'var(--font-body)',
  fontSize: 14,
  fontWeight: 300,
  color: 'rgba(244,243,239,0.45)',
  textDecoration: 'none',
  transition: 'color 0.2s',
  width: '100%',
  overflowWrap: 'anywhere',
}}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(244,243,239,0.45)')}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom rule + copyright */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 24 }}>
          <Reveal>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 12,
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 11,
                  color: 'rgba(244,243,239,0.18)',
                  letterSpacing: '0.04em',
                }}
              >
                {footer.copyright.replace('2025', year)}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 11,
                  color: 'rgba(244,243,239,0.18)',
                  letterSpacing: '0.04em',
                }}
              >
                Infraestructura creativa para artistas.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      
    </footer>
  );
}
