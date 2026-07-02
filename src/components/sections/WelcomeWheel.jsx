export default function WelcomeWheel({ rotation, className = '' }) {
  return (
    <div className={`welcome-wheel-stage ${className}`}>
      <div className="wheel-product">
        <div className="wheel-pointer" />

        <img
          className="wheel-product-img"
          src="/bienvenida/wheel.png"
          alt="Rueda de bienvenida Nodo"
          style={{ '--rotation': `${rotation}deg` }}
        />
      </div>

      <p className="welcome-status">Desbloqueando...</p>
    </div>
  );
}