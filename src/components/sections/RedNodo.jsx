'use client';
import { useState } from 'react';
import Reveal from '@/components/ui/Reveal';
import { redNodo } from '@/content';

/* Placeholder avatar — concentric circles as identity mark */
function AvatarPlaceholder({ alias }) {
  return (
    <div
      style={{
        width: '100%',
        aspectRatio: '4/3',
        background: 'var(--black-3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Concentric circles decoration */}
      <svg
        viewBox="0 0 160 120"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.06 }}
        aria-hidden="true"
      >
        <circle cx="80" cy="60" r="80" stroke="white" strokeWidth="1" fill="none" />
        <circle cx="80" cy="60" r="55" stroke="white" strokeWidth="1" fill="none" />
        <circle cx="80" cy="60" r="32" stroke="white" strokeWidth="1" fill="none" />
        <circle cx="80" cy="60" r="12" stroke="white" strokeWidth="1" fill="none" />
      </svg>
      {/* Alias initial */}
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(28px, 3vw, 40px)',
          fontWeight: 700,
          color: 'rgba(244,243,239,0.15)',
          letterSpacing: '-0.02em',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {alias.charAt(0)}
      </span>
    </div>
  );
}

function ProducerCard({ producer, delay }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Reveal delay={delay}>
      <article
        className="producer-card"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          border: `1px solid ${hovered ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.07)'}`,
          borderRadius: 4,
          overflow: 'hidden',
          transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
          transition: 'border-color 0.4s cubic-bezier(0.16,1,0.3,1), transform 0.4s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        {/* Image area */}
        {producer.image ? (
          <img
            src={producer.image}
            alt={producer.alias}
            style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }}
          />
        ) : (
          <AvatarPlaceholder alias={producer.alias} />
        )}

        {/* Card body */}
        <div style={{ padding: 'clamp(20px, 2vw, 28px)' }}>
          {/* Top row: alias + availability */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: 10,
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(18px, 1.8vw, 22px)',
                fontWeight: 700,
                letterSpacing: '-0.01em',
                color: 'var(--white)',
              }}
            >
              {producer.alias}
            </h3>
            <span
              style={{
                fontSize: 10,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: producer.available
                  ? 'rgba(144,238,144,0.7)'
                  : 'rgba(244,243,239,0.2)',
                fontFamily: 'var(--font-body)',
                paddingTop: 4,
              }}
            >
              {producer.available ? '● disponible' : '○ ocupado'}
            </span>
          </div>

          {/* Role + location */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 12,
              color: 'rgba(244,243,239,0.35)',
              letterSpacing: '0.04em',
              marginBottom: 16,
            }}
          >
            {producer.role} · {producer.location}
          </p>

          {/* Mood */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 13,
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'rgba(244,243,239,0.45)',
              lineHeight: 1.5,
              marginBottom: 20,
            }}
          >
            "{producer.mood}"
          </p>

          {/* Separator */}
          <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', marginBottom: 16 }} />

          {/* Genres + credits */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 8,
              flexWrap: 'wrap',
            }}
          >
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {producer.genres.map((g) => (
                <span key={g} className="tag" style={{ fontSize: 9, padding: '3px 9px' }}>
                  {g}
                </span>
              ))}
            </div>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 11,
                color: 'rgba(244,243,239,0.22)',
                letterSpacing: '0.02em',
                whiteSpace: 'nowrap',
              }}
            >
              {producer.credits}
            </span>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function RedNodo() {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filtered =
    activeFilter === 'Todos'
      ? redNodo.producers
      : redNodo.producers.filter((p) => p.filter === activeFilter);

  return (
    <section
      id={redNodo.id}
      style={{
        background: 'var(--black)',
        padding: 'var(--section-py) 0',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Header */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 40,
            marginBottom: 'clamp(48px, 6vw, 80px)',
            alignItems: 'end',
          }}
        >
          <div>
            <Reveal>
              <span className="text-label">{redNodo.eyebrow}</span>
            </Reveal>
            <Reveal delay={100}>
              <h2
                className="text-display-md"
                style={{ color: 'var(--white)', marginTop: 14 }}
              >
                {redNodo.title}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 14,
                fontWeight: 300,
                color: 'rgba(244,243,239,0.35)',
                lineHeight: 1.7,
                maxWidth: 340,
                marginLeft: 'auto',
              }}
            >
              {redNodo.subtitle}
            </p>
          </Reveal>
        </div>

        {/* Filter chips */}
        <Reveal delay={100}>
          <div
            style={{
              display: 'flex',
              gap: 8,
              flexWrap: 'wrap',
              marginBottom: 'clamp(40px, 5vw, 64px)',
            }}
          >
            {redNodo.filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 11,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  padding: '7px 18px',
                  borderRadius: 100,
                  border: `1px solid ${activeFilter === f ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.1)'}`,
                  background: activeFilter === f ? 'rgba(255,255,255,0.07)' : 'transparent',
                  color: activeFilter === f ? 'var(--white)' : 'rgba(244,243,239,0.35)',
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.16,1,0.3,1)',
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Producer grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'clamp(16px, 2vw, 24px)',
          }}
        >
          {filtered.map((producer, i) => (
            <ProducerCard key={producer.id} producer={producer} delay={i * 80} />
          ))}
        </div>
      </div>

      
    </section>
  );
}
