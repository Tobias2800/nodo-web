'use client';

import { useEffect, useState } from 'react';
import WelcomeTicket from './WelcomeTicket';
import WelcomeWheel from './WelcomeWheel';
import WelcomeRetry from './WelcomeRetry';

const STORAGE_KEY = 'nodo_bienvenida_v1';
const RETRY_TIME = 23 * 60 * 60 * 1000;

function createCode() {
  const num = Math.floor(1000 + Math.random() * 9000);
  return `ND-26-${num}`;
}

function getExpiryDate() {
  const date = new Date();
  date.setDate(date.getDate() + 10);

  return date.toLocaleDateString('es-AR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

export default function SpinOffer() {
  const [step, setStep] = useState('intro');
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [result, setResult] = useState(null);
  const [retryLeft, setRetryLeft] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return;

    const data = JSON.parse(saved);

    if (data.type === 'retry') {
      const canTry = Date.now() >= data.canTryAt;
      setResult(data);
      setStep(canTry ? 'intro' : 'retry');
      return;
    }

    setResult(data);
    setStep('ticket');
  }, []);

  useEffect(() => {
    if (step !== 'retry' || !result?.canTryAt) return;

    const updateTimer = () => {
      const diff = Math.max(0, result.canTryAt - Date.now());

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setRetryLeft(
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(
          2,
          '0'
        )}:${String(seconds).padStart(2, '0')}`
      );
    };

    updateTimer();

    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [step, result]);

  const spin = () => {
    if (spinning) return;

    window.gtag?.('event', 'click_welcome_start', {
      location: 'welcome_gate',
    });

    window.gtag?.('event', 'wheel_spin', {
      location: 'welcome_wheel',
    });

    setSpinning(true);
    setStep('spin');

    const saved = localStorage.getItem(STORAGE_KEY);
    const previous = saved ? JSON.parse(saved) : null;
    const forcedWin =
      previous?.type === 'retry' && Date.now() >= previous.canTryAt;

    const shouldRetry = true;

    let prize;

    if (false) {
  prize = {
    type: 'discount',
    label: '20% OFF',
    detail: 'Primera sesión',
    code: createCode(),
    expires: getExpiryDate(),
    createdAt: Date.now(),
  };
} else {
  prize = {
    type: 'retry',
    label: 'REINTENTAR',
    canTryAt: Date.now() + RETRY_TIME,
    createdAt: Date.now(),
  };
}

    const prizeAngles = {
      discount: 360,
      retry: 60,
    };

    const finalRotation = 360 * 6 + prizeAngles[prize.type];

    setRotation(0);

    setTimeout(() => {
      setRotation(finalRotation);
    }, 80);

    setTimeout(() => {
      setStep('verifying');
    }, 4800);

    setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prize));
      setResult(prize);

      if (prize.type === 'retry') {
        window.gtag?.('event', 'wheel_retry', {
          location: 'welcome_wheel',
        });
      } else {
        window.gtag?.('event', 'wheel_win', {
          location: 'welcome_wheel',
          prize: prize.label,
          code: prize.code,
        });
      }

      setStep(prize.type === 'retry' ? 'retry' : 'ticket');
      setSpinning(false);
    }, 5400);
  };

  const whatsappText = result
    ? `Hola Nodo, desbloqueé mi Welcome Pass. Código: ${result.code}. Quiero reservar mi primera sesión.`
    : '';

  const whatsappUrl = `https://wa.me/5492944533345?text=${encodeURIComponent(
    whatsappText
  )}`;

  return (
    <main className="welcome-page">
      <section className="welcome-shell">
        <div className="welcome-logo">NODO</div>

        {step === 'intro' && (
          <div className="welcome-intro">
            <p className="welcome-kicker">BIENVENIDA</p>

            <h1>
              DESBLOQUEÁ
              <br />
              TU ACCESO.
            </h1>

            <p>
              Activá tu pase de bienvenida.
              <br />
              Disponible por tiempo limitado.
            </p>

            <button onClick={spin}>Activar acceso →</button>
          </div>
        )}

        {step === 'spin' && <WelcomeWheel rotation={rotation} />}

        {step === 'verifying' && (
          <div className="welcome-verifying">
            <p>Validando acceso...</p>
          </div>
        )}

        {step === 'retry' && <WelcomeRetry retryLeft={retryLeft} />}

        {step === 'ticket' && (
          <WelcomeTicket result={result} whatsappUrl={whatsappUrl} />
        )}
      </section>
    </main>
  );
}