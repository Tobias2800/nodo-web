'use client';

import { useEffect, useState } from 'react';
import { hero } from '@/content';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
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
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 60% 40% at 20% 50%, rgba(255,255,255,0.022) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

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

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 3,
          paddingBottom: 'clamp(96px, 1vw, 180px)',
          paddingTop: 120,
        }}
      >
        <p
          className="text-label"
          style={{
            marginBottom: 40,
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'none' : 'translateY(16px)',
            transition:
              'opacity 0.8s var(--ease-out) 0.1s, transform 0.8s var(--ease-out) 0.1s',
          }}
        >
          {hero.eyebrow}
        </p>

        <div style={{ overflow: 'hidden', marginBottom: 32 }}>
          {hero.headline.map((line, i) => (
            <div key={line} style={{ overflow: 'hidden', lineHeight: 0.9 }}>
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

        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 32,
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'none' : 'translateY(20px)',
            transition:
              'opacity 0.9s var(--ease-out) 0.5s, transform 0.9s var(--ease-out) 0.5s',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(15px, 1.4vw, 18px)',
              fontWeight: 300,
              color: 'rgba(244,243,239,0.5)',
              letterSpacing: '0.01em',
              maxWidth: 520,
            }}
          >
            {hero.subline}
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              flexWrap: 'wrap',
            }}
          >
            <a
              href={hero.cta.primary.href}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(hero.cta.primary.href);
              }}
              className="btn btn-outline"
              style={{ fontSize: 13 }}
            >
              {hero.cta.primary.label}
            </a>

            <a
              href={hero.cta.secondary.href}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(hero.cta.secondary.href);
              }}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 13,
                color: 'rgba(244,243,239,0.4)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.target.style.color = 'var(--white)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'rgba(244,243,239,0.4)';
              }}
            >
              {hero.cta.secondary.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}