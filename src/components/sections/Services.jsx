'use client';
import { useState } from 'react';
import Reveal from '@/components/ui/Reveal';
import { services } from '@/content';

function ServiceRow({ item, index, isOpen, onToggle }) {
  return (
    <div
      className="service-row"
      style={{
        borderBottom: '1px solid rgba(8,8,8,0.09)',
      }}
    >
      {/* Header row — always visible */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 'clamp(20px, 2.5vw, 32px) 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
          textAlign: 'left',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 20 }}>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 11,
              letterSpacing: '0.08em',
              color: 'rgba(8,8,8,0.25)',
              minWidth: 24,
              flexShrink: 0,
            }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3
            className="text-heading"
            style={{
              color: 'var(--black)',
              transition: 'opacity 0.2s',
              opacity: isOpen ? 1 : 0.8,
            }}
          >
            {item.title}
          </h3>
        </div>

        {/* Toggle icon */}
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            border: '1px solid rgba(8,8,8,0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'border-color 0.2s, transform 0.4s cubic-bezier(0.16,1,0.3,1)',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <line x1="6" y1="0" x2="6" y2="12" stroke="currentColor" strokeWidth="1" />
            <line x1="0" y1="6" x2="12" y2="6" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
      </button>

      {/* Expanded content */}
      <div
        style={{
          overflow: 'hidden',
          maxHeight: isOpen ? 200 : 0,
          transition: 'max-height 0.5s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        <div
          style={{
            paddingBottom: 'clamp(20px, 2.5vw, 32px)',
            paddingLeft: 44,
            display: 'flex',
            gap: 48,
            flexWrap: 'wrap',
            alignItems: 'flex-start',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 15,
              fontWeight: 300,
              lineHeight: 1.65,
              color: 'rgba(8,8,8,0.5)',
              maxWidth: 480,
              flex: 1,
              minWidth: 240,
            }}
          >
            {item.description}
          </p>
          <div
            style={{
              display: 'flex',
              gap: 8,
              flexWrap: 'wrap',
              paddingTop: 4,
            }}
          >
            {item.tags.map((tag) => (
  <span
    key={tag}
    className="tag tag-light"
    style={{
      fontSize: 11,
      padding: '7px 14px',
      borderRadius: 999,
      border: '1px solid rgba(0,0,0,0.12)',
      background: 'rgba(0,0,0,0.03)',
      color: 'rgba(0,0,0,0.82)',
      fontWeight: 500,
      letterSpacing: '0.05em',
    }}
  >
    {tag}
  </span>
))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id={services.id}
      style={{
        background: 'var(--white)',
        padding: 'var(--section-py) 0',
      }}
    >
      <div className="container">
        {/* Header */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 40,
            alignItems: 'end',
            marginBottom: 'clamp(48px, 6vw, 80px)',
          }}
        >
          <Reveal>
            <span className="text-label" style={{ color: 'rgba(8,8,8,0.35)' }}>
              {services.eyebrow}
            </span>
            <h2
              className="text-display-md"
              style={{ color: 'var(--black)', marginTop: 14 }}
            >
              {services.title}
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 14,
                fontWeight: 300,
                color: 'rgba(8,8,8,0.4)',
                lineHeight: 1.7,
                maxWidth: 340,
                marginLeft: 'auto',
              }}
            >
              Cada servicio es una entrada a la estructura.
              <br />
              Elegís por dónde empezar.
            </p>
          </Reveal>
        </div>

        {/* Top rule */}
        <div className="rule-light" />

        {/* Accordion */}
        <div>
          {services.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <ServiceRow
                item={item}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </Reveal>
          ))}
        </div>
      </div>

      npm run dev
    </section>
  );
}
