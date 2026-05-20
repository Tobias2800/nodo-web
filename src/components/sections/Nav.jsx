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

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleLink = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
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
          background: scrolled ? 'rgba(8,8,8,0.88)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', height: 64 }}>
          {/* Logo */}
          <a
            href="#"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: 'var(--white)',
              textDecoration: 'none',
              marginRight: 'auto',
            }}
          >
            {nav.logo}
          </a>

          {/* Desktop links */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 40,
            }}
            className="nav-desktop"
          >
            {nav.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleLink(link.href); }}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 13,
                  fontWeight: 400,
                  letterSpacing: '0.04em',
                  color: 'rgba(244,243,239,0.55)',
                  textDecoration: 'none',
                  transition: 'color 0.25s',
                }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--white)')}
                onMouseLeave={(e) => (e.target.style.color = 'rgba(244,243,239,0.55)')}
              >
                {link.label}
              </a>
            ))}

            <a
              href={nav.cta.href}
              onClick={(e) => { e.preventDefault(); handleLink(nav.cta.href); }}
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

          {/* Mobile hamburger */}
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
            }}
          >
            <span style={{
              display: 'block',
              width: 22,
              height: 1,
              background: 'var(--white)',
              transition: 'transform 0.3s, opacity 0.3s',
              transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none',
            }} />
            <span style={{
              display: 'block',
              width: 22,
              height: 1,
              background: 'var(--white)',
              transition: 'opacity 0.3s',
              opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              display: 'block',
              width: 22,
              height: 1,
              background: 'var(--white)',
              transition: 'transform 0.3s, opacity 0.3s',
              transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none',
            }} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99,
          background: 'var(--black)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 var(--container-px)',
          transition: 'opacity 0.4s ease, visibility 0.4s',
          opacity: menuOpen ? 1 : 0,
          visibility: menuOpen ? 'visible' : 'hidden',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {nav.links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleLink(link.href); }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(32px, 8vw, 56px)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: 'var(--white)',
                textDecoration: 'none',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateX(0)' : 'translateX(-20px)',
                transition: `opacity 0.4s ease ${i * 60}ms, transform 0.4s ease ${i * 60}ms`,
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div style={{ marginTop: 60 }}>
          <a
            href={nav.cta.href}
            onClick={(e) => { e.preventDefault(); handleLink(nav.cta.href); setMenuOpen(false); }}
            className="btn btn-outline"
            style={{ fontSize: 13 }}
          >
            {nav.cta.label}
          </a>
        </div>
      </div>

      
    </>
  );
}
