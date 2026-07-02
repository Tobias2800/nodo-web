export default function WelcomeRetry({ retryLeft }) {
  return (
    <div className="welcome-ticket-wrap">
      <div className="welcome-ticket retry-ticket">
        <p className="ticket-brand">NODO</p>
        <p className="ticket-label">WELCOME PASS</p>

        <h2>Acceso en espera.</h2>

        <div className="retry-countdown">
          <span>ACCESO DISPONIBLE EN</span>
          <strong>{retryLeft}</strong>
        </div>

        <p>Tu próximo intento queda reservado automáticamente.</p>
      </div>
    </div>
  );
}