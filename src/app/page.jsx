import Nav from '@/components/sections/Nav';
import Hero from '@/components/sections/Hero';
import Manifesto from '@/components/sections/Manifesto';
import Pillars from '@/components/sections/Pillars';
import Services from '@/components/sections/Services';
import RedNodo from '@/components/sections/RedNodo';
import Works from '@/components/sections/Works';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main>
      {/* 01 — Fixed navigation */}
      <Nav />

      {/* 02 — Cinematic hero · TENSION */}
      <Hero />

      {/* 03 — Manifesto · PAUSE / RELEASE (white flash) */}
      <Manifesto />

      {/* 04 — Three pillars · STRUCTURE (dark return) */}
      <Pillars />

      {/* 05 — Services accordion · DETAIL (white) */}
      <Services />

      {/* 06 — Red Nodo producer network · DEPTH (dark) */}
      <RedNodo />

      {/* 07 — Selected works · PROOF (white) */}
      <Works />

      {/* 08 — CTA block · IMPACT (dark) */}
      <CTA />

      {/* 09 — Footer · CLOSE */}
      <Footer />
    </main>
  );
}
