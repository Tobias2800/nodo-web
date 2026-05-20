'use client';
import Reveal from '@/components/ui/Reveal';
import { works } from '@/content';

function WorkCard({ item, index, delay }) {
  return (
    <Reveal delay={delay}>
      <article
        className="work-card"
        style={{ cursor: 'default' }}
      >
        {/* Cover art */}
        <div
          style={{
            position: 'relative',
            aspectRatio: '1/1',
            background: 'var(--black-3)',
            overflow: 'hidden',
            borderRadius: 4,
            marginBottom: 20,
          }}
        >
          {item.image ? (
            <img
              src={item.image}
              alt={`${item.artist} — ${item.title}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)',
              }}
            />
          ) : (
            /* Placeholder — grid lines */
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg viewBox="0 0 200 200" style={{ width: '100%', height: '100%', opacity: 0.06 }} aria-hidden="true">
                <line x1="0" y1="66" x2="200" y2="66" stroke="white" strokeWidth="1"/>
                <line x1="0" y1="133" x2="200" y2="133" stroke="white" strokeWidth="1"/>
                <line x1="66" y1="0" x2="66" y2="200" stroke="white" strokeWidth="1"/>
                <line x1="133" y1="0" x2="133" y2="200" stroke="white" strokeWidth="1"/>
                <circle cx="100" cy="100" r="40" stroke="white" strokeWidth="1" fill="none"/>
              </svg>
              <span
                style={{
                  position: 'absolute',
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(24px, 3vw, 36px)',
                  fontWeight: 700,
                  color: 'rgba(244,243,239,0.08)',
                  letterSpacing: '-0.02em',
                }}
              >
                {item.artist.charAt(0)}
              </span>
            </div>
          )}

          {/* Genre label overlay */}
          <div
            style={{
              position: 'absolute',
              top: 14,
              left: 14,
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 10,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(244,243,239,0.5)',
                background: 'rgba(8,8,8,0.7)',
                padding: '4px 10px',
                borderRadius: 100,
              }}
            >
              {item.genre}
            </span>
          </div>

          {/* Spotify link */}
          {item.spotify && item.spotify !== '#' && (
            <a
              href={item.spotify}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: 'absolute',
                bottom: 14,
                right: 14,
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: 'rgba(8,8,8,0.7)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'background 0.2s',
              }}
              aria-label={`Escuchar ${item.title} en Spotify`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(244,243,239,0.7)">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
            </a>
          )}
        </div>

        {/* Card info */}
        <div style={{ paddingBottom: 4 }}>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 11,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'rgba(8,8,8,0.3)',
              marginBottom: 6,
            }}
          >
            {item.year} · {item.type}
          </p>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(16px, 1.6vw, 20px)',
              fontWeight: 600,
              letterSpacing: '-0.01em',
              color: 'var(--black)',
              lineHeight: 1.2,
            }}
          >
            {item.artist}
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 14,
              fontWeight: 300,
              color: 'rgba(8,8,8,0.45)',
              marginTop: 2,
            }}
          >
            {item.title}
          </p>
        </div>
      </article>
    </Reveal>
  );
}

export default function Works() {
  return (
    <section
      id={works.id}
      style={{
        background: 'var(--white)',
        padding: 'var(--section-py) 0',
      }}
    >
      <div className="container">
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: 'clamp(40px, 5vw, 64px)',
            flexWrap: 'wrap',
            gap: 24,
          }}
        >
          <div>
            <Reveal>
              <span className="text-label" style={{ color: 'rgba(8,8,8,0.35)' }}>
                {works.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-display-md" style={{ color: 'var(--black)', marginTop: 14 }}>
                {works.title}
              </h2>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <a
              href={works.cta.href}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 13,
                color: 'rgba(8,8,8,0.4)',
                textDecoration: 'none',
                letterSpacing: '0.02em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--black)')}
              onMouseLeave={(e) => (e.target.style.color = 'rgba(8,8,8,0.4)')}
            >
              {works.cta.label}
            </a>
          </Reveal>
        </div>

        {/* Works grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'clamp(16px, 2vw, 28px)',
          }}
        >
          {works.items.map((item, i) => (
            <WorkCard key={item.id} item={item} index={i} delay={i * 90} />
          ))}
        </div>
      </div>

      
    </section>
  );
}
