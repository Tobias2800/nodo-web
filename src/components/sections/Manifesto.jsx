'use client';

import Reveal from '@/components/ui/Reveal';
import { manifesto } from '@/content';

export default function Manifesto() {
  return (
    <section id={manifesto.id} className="manifesto-section">
      <div className="container">
        <div className="rule-light manifesto-rule-top" />

        <div className="manifesto-layout">
          <div className="manifesto-statement">
            {manifesto.lines.map((line, i) => (
              <Reveal key={line} delay={i * 100}>
                <p className="text-display-lg manifesto-line">{line}</p>
              </Reveal>
            ))}
          </div>

          <div className="manifesto-side">
            <Reveal delay={150}>
              <div className="manifesto-meta">
                <div>NODO SYSTEM</div>
                <div>BUENOS AIRES · 2026</div>
                <div>PRODUCCIÓN / MIX / RED</div>
              </div>
            </Reveal>

            <Reveal delay={350}>
              <p className="manifesto-description">
                {manifesto.descriptor}
              </p>
            </Reveal>

            <Reveal delay={500}>
              <svg
                className="manifesto-symbol"
                width="100"
                height="100"
                viewBox="0 0 64 64"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="32" cy="32" r="31" stroke="#080808" strokeWidth="1" />
                <circle cx="32" cy="32" r="20" stroke="#080808" strokeWidth="1" />
                <circle cx="32" cy="32" r="8" stroke="#080808" strokeWidth="1" />
                <line x1="32" y1="0" x2="32" y2="64" stroke="#080808" strokeWidth="1" />
                <line x1="0" y1="32" x2="64" y2="32" stroke="#080808" strokeWidth="1" />
              </svg>
            </Reveal>
          </div>
        </div>

        <div className="rule-light manifesto-rule-bottom" />
      </div>
    </section>
  );
}