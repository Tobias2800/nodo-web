export default function WelcomeTicket({ result, whatsappUrl }) {
  if (!result) return null;

  const handleWhatsAppClick = (e) => {
    e.preventDefault();

    window.gtag?.('event', 'click_whatsapp', {
      location: 'promo_20off',
      coupon: result.code,
      discount: result.label,
    });

    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 150);
  };

  return (
    <div className="welcome-ticket-wrap">
      <p className="ticket-unlocked">Acceso desbloqueado.</p>

      <div className="welcome-ticket">
        <div className="ticket-top">
          <p className="ticket-brand">NODO</p>
          <p className="ticket-label">WELCOME PASS</p>
        </div>

        <h2>{result.label}</h2>

        <p className="ticket-detail">Primera sesión en Nodo Studios</p>

        <div className="ticket-divider" />

        <div className="ticket-code">
          <span>CÓDIGO</span>
          <strong>{result.code}</strong>
        </div>

        <p className="ticket-note">
          Este código se valida al confirmar tu reserva.
        </p>

        <div className="ticket-meta">
          <span>EXPIRA</span>
          <strong>{result.expires}</strong>
        </div>
      </div>

      <p className="ticket-part">Tu pase quedó activo.</p>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsAppClick}
      >
        Reservar primera sesión →
      </a>
    </div>
  );
}