'use client';

import Reveal from '@/components/ui/Reveal';
import { pillars } from '@/content';

export default function Pillars() {
  return (
    <section
      style={{
        background: 'var(--black-2)',
        padding: 'var(--section-py) 0',
        position: 'relative',
      }}
    >
      <div className="container">
        <Reveal>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 'clamp(48px, 6vw, 80px)',
            }}
          >
            <span className="text-label">Lo que somos</span>
            <span className="text-label" style={{ opacity: 0.4 }}>
              Buenos Aires · Argentina
            </span>
          </div>
        </Reveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 0,
            background: 'transparent',
          }}
        >
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.index} delay={i * 120}>
              <div
                style={{
                  background: 'var(--black-2)',
                  padding: 'clamp(32px, 3.5vw, 52px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 24,
                  minHeight: 280,
                  borderLeft:
                    i === 0 ? 'none' : '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 11,
                    letterSpacing: '0.1em',
                    color: 'rgba(244,243,239,0.2)',
                  }}
                >
                  {pillar.index}
                </span>

                <h3
                  className="text-heading"
                  style={{ color: 'var(--white)', flex: 1 }}
                >
                  {pillar.title}
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 14,
                    fontWeight: 300,
                    lineHeight: 1.65,
                    color: 'rgba(244,243,239,0.38)',
                  }}
                >
                  {pillar.description}
                </p>

                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {pillar.tags.map((tag) => (
                    <span key={tag} className="tag" style={{ fontSize: 10 }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}