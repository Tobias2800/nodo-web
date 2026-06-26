'use client';

import { useState, useEffect } from 'react';
import { nav } from '@/content';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleLink = (href) => {
    setMenuOpen(false);

    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        aria-label="Main navigation"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'background 0.5s ease, border-color 0.5s ease',
          background: scrolled || menuOpen ? 'rgba(8,8,8,0.92)' : 'transparent',
          borderBottom:
            scrolled || menuOpen
              ? '1px solid rgba(255,255,255,0.06)'
              : '1px solid transparent',
          backdropFilter: scrolled || menuOpen ? 'blur(14px)' : 'none',
          WebkitBackdropFilter: scrolled || menuOpen ? 'blur(14px)' : 'none',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            height: 64,
          }}
        >
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setMenuOpen(false);
            }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: 'var(--white)',
              textDecoration: 'none',
              marginRight: 'auto',
              position: 'relative',
              zIndex: 101,
            }}
          >
            {nav.logo}
          </a>

          <div
            className="nav-desktop"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 40,
            }}
          >
            {nav.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLink(link.href);
                }}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 13,
                  fontWeight: 400,
                  letterSpacing: '0.04em',
                  color: 'rgba(244,243,239,0.55)',
                  textDecoration: 'none',
                  transition: 'color 0.25s',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'var(--white)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'rgba(244,243,239,0.55)';
                }}
              >
                {link.label}
              </a>
            ))}

            <a
              href={nav.cta.href}
              onClick={(e) => {
                e.preventDefault();
                handleLink(nav.cta.href);
              }}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: '0.06em',
                color: 'var(--black)',
                background: 'var(--white)',
                textDecoration: 'none',
                padding: '8px 20px',
                borderRadius: 100,
                transition: 'background 0.2s',
              }}
            >
              {nav.cta.label}
            </a>
          </div>

          <button
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMenuOpen(!menuOpen)}
            className="nav-mobile-btn"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--white)',
              cursor: 'pointer',
              display: 'none',
              flexDirection: 'column',
              gap: 5,
              padding: 8,
              position: 'relative',
              zIndex: 101,
            }}
          >
            <span
              style={{
                display: 'block',
                width: 22,
                height: 1,
                background: 'var(--white)',
                transition: 'transform 0.3s, opacity 0.3s',
                transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none',
              }}
            />

            <span
              style={{
                display: 'block',
                width: 22,
                height: 1,
                background: 'var(--white)',
                transition: 'opacity 0.3s',
                opacity: menuOpen ? 0 : 1,
              }}
            />

            <span
              style={{
                display: 'block',
                width: 22,
                height: 1,
                background: 'var(--white)',
                transition: 'transform 0.3s, opacity 0.3s',
                transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </div>
      </nav>

      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99,
          background: 'var(--black)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          padding: '190px 32px 40px',
          transition: 'opacity 0.4s ease, visibility 0.4s',
          opacity: menuOpen ? 1 : 0,
          visibility: menuOpen ? 'visible' : 'hidden',
        }}
      >
        <div
  style={{
    marginBottom: 44,
  }}
>
  <div
    style={{
      fontFamily: 'var(--font-body)',
      fontSize: 10,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.35)',
      marginBottom: 16,
    }}
  >
    Buenos Aires · 2026
  </div>

  <div
    style={{
      width: 40,
      height: 1,
      background: 'rgba(255,255,255,0.12)',
    }}
  />
</div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 28,
            width: '100%',
          }}
        >
          {nav.links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLink(link.href);
              }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(34px, 11vw, 56px)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                color: 'var(--white)',
                textDecoration: 'none',
                lineHeight: 0.95,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateX(0)' : 'translateX(-20px)',
                transition: `opacity 0.4s ease ${i * 60}ms, transform 0.4s ease ${i * 60}ms`,
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div style={{ marginTop: 56 }}>
          <a
            href={nav.cta.href}
            onClick={(e) => {
              e.preventDefault();
              handleLink(nav.cta.href);
            }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 12,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--white)',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(255,255,255,0.4)',
              paddingBottom: 6,
            }}
          >
            Contacto →
          </a>
        </div>
      </div>
    </>
  );
}