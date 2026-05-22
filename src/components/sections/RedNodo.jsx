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
        onClick={() => {
          if (producer.instagram) {
            window.open(
              producer.instagram,
              "_blank",
              "noopener,noreferrer"
            );
          }
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          cursor: producer.instagram ? "pointer" : "default",

          border: `1px solid ${
            hovered
              ? "rgba(255,255,255,0.18)"
              : "rgba(255,255,255,0.07)"
          }`,

          borderRadius: 4,

          overflow: "hidden",

          transform: hovered
            ? "translateY(-8px) scale(1.01)"
            : "translateY(0) scale(1)",

          boxShadow: hovered
            ? "0 24px 80px rgba(0,0,0,0.45)"
            : "0 0 0 rgba(0,0,0,0)",

          transition:
            "border-color 0.4s cubic-bezier(0.16,1,0.3,1), transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {producer.image ? (
          <img
            src={producer.image}
            alt={producer.alias}
            style={{
              width: "100%",
              aspectRatio: "4/3",
              objectFit: "cover",
              display: "block",
            }}
          />
        ) : (
          <AvatarPlaceholder alias={producer.alias} />
        )}

        <div style={{ padding: "clamp(20px, 2vw, 28px)" }}>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(18px, 1.8vw, 22px)",
              fontWeight: 700,
              letterSpacing: "-0.01em",
              color: "var(--white)",
              marginBottom: 10,
            }}
          >
            {producer.alias}
          </h3>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 12,
              color: "rgba(244,243,239,0.35)",
              letterSpacing: "0.04em",
              marginBottom: 16,
            }}
          >
            {producer.role} · {producer.location}
          </p>

          <div
            style={{
              display: "flex",
              gap: 6,
              flexWrap: "wrap",
              marginBottom: 18,
            }}
          >
            {producer.services?.map((service) => (
              <span
                key={service}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "5px 10px",
                  borderRadius: 999,
                  border: "1px solid rgba(144,238,144,0.18)",
                  background: "rgba(144,238,144,0.05)",
                  color: "rgba(220,255,220,0.92)",
                  fontSize: 10,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-body)",
                }}
              >
                <span
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: "#90EE90",
                  }}
                />

                {service}
              </span>
            ))}
          </div>

          <div
            style={{
              height: 1,
              background: "rgba(255,255,255,0.06)",
              marginBottom: 16,
            }}
          />

          <div
            style={{
              display: "flex",
              gap: 6,
              flexWrap: "wrap",
              marginBottom: 16,
            }}
          >
            {producer.genres.map((g) => (
              <span
                key={g}
                style={{
                  fontSize: 10,
                  padding: "5px 10px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.04)",
                  color: "rgba(244,243,239,0.88)",
                  fontFamily: "var(--font-body)",
                  letterSpacing: "0.03em",
                  textTransform: "uppercase",
                }}
              >
                {g}
              </span>
            ))}
          </div>

          {producer.works?.length > 0 && (
            <div
              style={{
                display: "grid",
                gap: 0,
                maxHeight: hovered ? 180 : 0,
                opacity: hovered ? 1 : 0,
                overflow: "hidden",
                transition:
                  "max-height 0.45s cubic-bezier(0.16,1,0.3,1), opacity 0.35s ease",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 10,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "rgba(244,243,239,0.28)",
                  marginBottom: 8,
                  paddingTop: 4,
                }}
              >
                Trabajos destacados
              </div>

              {producer.works.map((work) => (
                <a
                  key={work.title}
                  href={work.link}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 16,
                    padding: "12px 0",
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 6,
                    textDecoration: "none",
                    color: "rgba(244,243,239,0.82)",
                    fontFamily: "var(--font-body)",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.paddingLeft = "10px";
                    e.currentTarget.style.background =
                      "rgba(144,238,144,0.035)";
                    e.currentTarget.style.color = "var(--white)";
                    e.currentTarget.style.borderTopColor =
                      "rgba(144,238,144,0.18)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.paddingLeft = "0px";
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color =
                      "rgba(244,243,239,0.82)";
                    e.currentTarget.style.borderTopColor =
                      "rgba(255,255,255,0.06)";
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <div
                      style={{
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        background: "#90EE90",
                        opacity: 0.55,
                      }}
                    />

                    <div>
                      <div
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {work.title}
                      </div>

                      <div
                        style={{
                          fontSize: 10,
                          color: "rgba(244,243,239,0.32)",
                          marginTop: 2,
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                        }}
                      >
                        {work.type}
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      color: "rgba(244,243,239,0.25)",
                      fontSize: 14,
                    }}
                  >
                    ↗
                  </div>
                </a>
              ))}
            </div>
          )}
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
