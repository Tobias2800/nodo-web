'use client';
import { useEffect, useState } from 'react';
import { hero } from '@/content';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // slight delay for cinematic entrance
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="grain-overlay"
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        background: 'var(--black)',
        overflow: 'hidden',
      }}
    >
      {/* Subtle ambient gradient */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            'radial-gradient(ellipse 60% 40% at 20% 50%, rgba(255,255,255,0.022) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      {/* Horizontal rule — top of content area */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          right: 0,
          height: '1px',
          background: 'rgba(255,255,255,0.05)',
          zIndex: 2,
          opacity: mounted ? 1 : 0,
          transition: 'opacity 1.2s ease 0.8s',
        }}
      />

      {/* Main content */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 3,
          paddingBottom: 'clamp(56px, 7vw, 96px)',
          paddingTop: 120,
        }}
      >
        {/* Eyebrow */}
        <p
          className="text-label"
          style={{
            marginBottom: 40,
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'none' : 'translateY(16px)',
            transition: 'opacity 0.8s var(--ease-out) 0.1s, transform 0.8s var(--ease-out) 0.1s',
          }}
        >
          {hero.eyebrow}
        </p>

        {/* Display headline */}
        <div style={{ overflow: 'hidden', marginBottom: 32 }}>
          {hero.headline.map((line, i) => (
            <div
              key={line}
              style={{ overflow: 'hidden', lineHeight: 0.9 }}
            >
              <h1
                className="text-display-xl"
                style={{
                  display: 'block',
                  color: 'var(--white)',
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? 'none' : 'translateY(100%)',
                  transition: `opacity 1s var(--ease-out) ${0.2 + i * 0.1}s,
                               transform 1s var(--ease-out) ${0.2 + i * 0.1}s`,
                  paddingBottom: '0.05em',
                }}
              >
                {line}
              </h1>
            </div>
          ))}
        </div>

        {/* Subline + CTAs row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 32,
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'none' : 'translateY(20px)',
            transition: 'opacity 0.9s var(--ease-out) 0.5s, transform 0.9s var(--ease-out) 0.5s',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(15px, 1.4vw, 18px)',
              fontWeight: 300,
              color: 'rgba(244,243,239,0.5)',
              letterSpacing: '0.01em',
              maxWidth: 380,
            }}
          >
            {hero.subline}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            <a
              href={hero.cta.primary.href}
              onClick={(e) => { e.preventDefault(); handleScroll(hero.cta.primary.href); }}
              className="btn btn-outline"
              style={{ fontSize: 13 }}
            >
              {hero.cta.primary.label}
            </a>
            <a
              href={hero.cta.secondary.href}
              onClick={(e) => { e.preventDefault(); handleScroll(hero.cta.secondary.href); }}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 13,
                color: 'rgba(244,243,239,0.4)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--white)')}
              onMouseLeave={(e) => (e.target.style.color = 'rgba(244,243,239,0.4)')}
            >
              {hero.cta.secondary.label}
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: 'absolute',
            right: 'var(--container-px)',
            bottom: 'clamp(56px, 7vw, 96px)',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            opacity: mounted ? 0.35 : 0,
            transition: 'opacity 1s ease 1.2s',
          }}
        >
          <div
            style={{
              width: 1,
              height: 40,
              background: 'var(--white)',
              animation: 'scrollPulse 2s ease-in-out infinite',
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 10,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--white)',
              writingMode: 'vertical-rl',
            }}
          >
            {hero.scrollLabel}
          </span>
        </div>
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { transform: scaleY(1); opacity: 1; }
          50% { transform: scaleY(0.6); opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
