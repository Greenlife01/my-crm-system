export default function HeroFallbackGradient() {
  return (
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(circle at 50% 70%, rgba(29,158,117,0.35), transparent 55%), radial-gradient(circle at 30% 20%, rgba(93,202,165,0.15), transparent 50%), #040d06",
        animation: "hero-gradient-drift 12s ease-in-out infinite alternate",
      }}
    >
      <style>{`
        @keyframes hero-gradient-drift {
          from { background-position: 0% 0%, 0% 0%; filter: hue-rotate(0deg); }
          to { background-position: 10% -10%, -10% 10%; filter: hue-rotate(12deg); }
        }
      `}</style>
    </div>
  );
}
