'use client';
import Reveal from '@/components/ui/Reveal';
import { works } from '@/content';

function WorkCard({ item, delay }) {
  return (
    <Reveal delay={delay}>
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: 'none',
          display: 'block',
        }}
      >
        <article
          className="work-card"
          style={{
            cursor: 'pointer',
          }}
        >
          <div
            style={{
              position: 'relative',
              aspectRatio: '1/1',
              overflow: 'hidden',
              borderRadius: 4,
              marginBottom: 18,
              background: 'var(--black-3)',
            }}
          >
            <img
              src={item.image}
              alt={`${item.artist} — ${item.title}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transition:
                  'transform 0.6s cubic-bezier(0.16,1,0.3,1)',
              }}
            />

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
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'rgba(244,243,239,0.75)',
                  background: 'rgba(8,8,8,0.72)',
                  padding: '5px 10px',
                  borderRadius: 999,
                }}
              >
                {item.type}
              </span>
            </div>
          </div>

          <div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(18px, 1.8vw, 24px)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: 'var(--black)',
                lineHeight: 1.1,
                marginBottom: 6,
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 13,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: 'rgba(8,8,8,0.42)',
                marginBottom: 12,
              }}
            >
              {item.artist}
            </p>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
              }}
            >
              <span
  style={{
    display: 'inline-flex',
    alignItems: 'center',

    width: 'fit-content',

    padding: '5px 10px',

    borderRadius: 999,

    border: '1px solid rgba(28,34,52,0.14)',

    background: 'rgba(28,34,52,0.08)',

    fontFamily: 'var(--font-body)',

    fontSize: 10,

    fontWeight: 600,

    letterSpacing: '0.08em',

    textTransform: 'uppercase',

    color: 'rgba(18,24,42,0.82)',
  }}
>
  {item.role}
</span>

              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 12,
                  color: 'rgba(8,8,8,0.56)',
                }}
              >
                Prod. {item.producer}
              </span>

              {item.tracks?.length > 0 && (
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 11,
                    lineHeight: 1.5,
                    color: 'rgba(8,8,8,0.52)',
                    marginTop: 6,
                  }}
                >
                  {item.tracks.join(' · ')}
                </span>
              )}
            </div>
          </div>
        </article>
      </a>
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
        <div className="works-grid">
          {works.items.map((item, i) => (
            <WorkCard
              key={item.id}
              item={item}
              index={i}
              delay={i * 90}
            />
          ))}
        </div>
      </div>
    </section>
  );
}