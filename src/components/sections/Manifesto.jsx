'use client';
import Reveal from '@/components/ui/Reveal';
import { manifesto } from '@/content';

export default function Manifesto() {
  return (
    <section
      id={manifesto.id}
      style={{
        background: 'var(--white)',
        padding: 'var(--section-py) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle top rule */}
      <div className="container">
        <div className="rule-light" style={{ marginBottom: 'clamp(56px, 8vw, 112px)' }} />

        {/* Main statement — center-weighted, large */}
        <div style={{ maxWidth: 900 }}>
          {manifesto.lines.map((line, i) => (
            <Reveal key={line} delay={i * 100}>
              <p
                className="text-display-lg"
                style={{
                  color: 'var(--black)',
                  display: 'block',
                  lineHeight: 1.08,
                  marginBottom: '0.08em',
                }}
              >
                {line}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Descriptor + decoration */}
        <div
          style={{
            marginTop: 'clamp(48px, 6vw, 80px)',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 40,
            alignItems: 'end',
          }}
        >
          <Reveal delay={350}>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(14px, 1.2vw, 17px)',
                fontWeight: 300,
                lineHeight: 1.7,
                color: 'rgba(8,8,8,0.45)',
                maxWidth: 440,
              }}
            >
              {manifesto.descriptor}
            </p>
          </Reveal>

          <Reveal delay={500}>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                aria-hidden="true"
                style={{ opacity: 0.12 }}
              >
                <circle cx="32" cy="32" r="31" stroke="#080808" strokeWidth="1" />
                <circle cx="32" cy="32" r="20" stroke="#080808" strokeWidth="1" />
                <circle cx="32" cy="32" r="8" stroke="#080808" strokeWidth="1" />
                <line x1="32" y1="0" x2="32" y2="64" stroke="#080808" strokeWidth="1" />
                <line x1="0" y1="32" x2="64" y2="32" stroke="#080808" strokeWidth="1" />
              </svg>
            </div>
          </Reveal>
        </div>

        <div className="rule-light" style={{ marginTop: 'clamp(56px, 8vw, 112px)' }} />
      </div>


    </section>
  );
}
