'use client';

import { useState } from 'react';
import Reveal from '@/components/ui/Reveal';
import { services } from '@/content';

function ServiceRow({ item, index, isOpen, onToggle }) {
  return (
    <div className="service-row">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="service-button"
      >
        <div className="service-title-wrap">
          <span className="service-index">
            {String(index + 1).padStart(2, '0')}
          </span>

          <h3 className="text-heading service-title">{item.title}</h3>
        </div>

        <div
          className="service-toggle"
          style={{
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <line x1="6" y1="0" x2="6" y2="12" stroke="currentColor" strokeWidth="1" />
            <line x1="0" y1="6" x2="12" y2="6" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
      </button>

      <div
        className="service-content"
        style={{
          maxHeight: isOpen ? 260 : 0,
        }}
      >
        <div className="service-content-inner">
          <p className="service-description">{item.description}</p>

          <div className="service-tags">
            {item.tags.map((tag) => (
              <span key={tag} className="tag tag-light service-tag">
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
    <section id={services.id} className="services-section">
      <div className="container">
        <div className="services-header">
          <Reveal>
            <div>
              <span className="text-label services-eyebrow">
                {services.eyebrow}
              </span>

              <h2 className="text-display-md services-title-main">
                {services.title}
              </h2>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <p className="services-intro">
              Cada servicio es una entrada a la estructura.
              <br />
              Elegís por dónde empezar.
            </p>
          </Reveal>
        </div>

        <div className="rule-light" />

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
    </section>
  );
}