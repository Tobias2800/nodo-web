'use client';

import Reveal from '@/components/ui/Reveal';
import { pillars } from '@/content';

export default function Pillars() {
  return (
    <section className="pillars-section">
      <div className="container">
        <Reveal>
          <div className="pillars-header">
            <span className="text-label">Lo que somos</span>
            <span className="text-label pillars-location">
              Buenos Aires · Argentina
            </span>
          </div>
        </Reveal>

        <div className="pillars-grid">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.index} delay={i * 120}>
              <div className="pillar-card">
                <span className="pillar-index">{pillar.index}</span>

                <h3 className="text-heading pillar-title">
                  {pillar.title}
                </h3>

                <p className="pillar-description">
                  {pillar.description}
                </p>

                <div className="pillar-tags">
                  {pillar.tags.map((tag) => (
                    <span key={tag} className="tag" style={{ fontSize: 10 }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}