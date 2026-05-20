'use client';
import Reveal from '@/components/ui/Reveal';
import { cta } from '@/content';

export default function CTA() {
  return (
    <section
      id={cta.id}
      style={{
        background: 'var(--black)',
        padding: 'var(--section-py) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient radial light — subtle, centered */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* Eyebrow */}
        <Reveal>
          <span className="text-label" style={{ marginBottom: 32, display: 'block' }}>
            {cta.eyebrow}
          </span>
        </Reveal>

        {/* Main headline */}
        <Reveal delay={100}>
          <h2
            className="text-display-lg"
            style={{
              color: 'var(--white)',
              maxWidth: 700,
              marginBottom: 24,
            }}
          >
            {cta.headline}
          </h2>
        </Reveal>

        {/* Subline */}
        <Reveal delay={200}>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(15px, 1.3vw, 18px)',
              fontWeight: 300,
              color: 'rgba(244,243,239,0.38)',
              lineHeight: 1.6,
              maxWidth: 420,
              marginBottom: 'clamp(40px, 5vw, 64px)',
            }}
          >
            {cta.subline}
          </p>
        </Reveal>

        {/* CTA buttons */}
        <Reveal delay={320}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a
              href={cta.primary.href}
              className="btn btn-solid"
              style={{ fontSize: 13, letterSpacing: '0.02em' }}
            >
              {cta.primary.label}
            </a>
            <a
              href={cta.secondary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ fontSize: 13 }}
            >
              {cta.secondary.label}
            </a>
          </div>
        </Reveal>

        {/* Bottom decorative rule with symbol */}
        <Reveal delay={500}>
          <div
            style={{
              marginTop: 'clamp(64px, 8vw, 112px)',
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              width: '100%',
              maxWidth: 480,
            }}
          >
            <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.06)' }} />
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
              style={{ opacity: 0.2, flexShrink: 0 }}
            >
              <circle cx="10" cy="10" r="9" stroke="white" strokeWidth="1"/>
              <circle cx="10" cy="10" r="4" stroke="white" strokeWidth="1"/>
              <line x1="10" y1="1" x2="10" y2="19" stroke="white" strokeWidth="1"/>
              <line x1="1" y1="10" x2="19" y2="10" stroke="white" strokeWidth="1"/>
            </svg>
            <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.06)' }} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
