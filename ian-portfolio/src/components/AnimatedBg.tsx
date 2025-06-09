
const NUM_BUBBLES = 23;

const bubbles = Array.from({ length: NUM_BUBBLES }).map((_, i) => {
  const cx = Math.random() * 1440;
  const r = 18 + Math.random() * 22;
  const delay = Math.random() * 8;
  const duration = 12 + Math.random() * 10;
  const opacity = 0.12 + Math.random() * 0.18;
  // Alterna entre violeta y rojo
  const color = Math.random() > 0.5 ? "#7c3aed" : "#ef4444";

  return (
    <circle
      key={i}
      cx={cx}
      cy="950"
      r={r}
      fill={color}
      opacity={opacity}
    >
      <animate
        attributeName="cy"
        from="950"
        to="-80"
        dur={`${duration}s`}
        begin={`${delay}s`}
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        values={`${opacity};${opacity * 0.7};${opacity}`}
        keyTimes="0;0.5;1"
        dur={`${duration}s`}
        begin={`${delay}s`}
        repeatCount="indefinite"
      />
    </circle>
  );
});

const AnimatedBg = () => (
  <svg
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: -1,
      pointerEvents: "none",
      background: "linear-gradient(180deg, #1e293b 0%, #0f172a 100%)",
    }}
    viewBox="0 0 1440 900"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <linearGradient id="bg-gradient" x1="0" y1="0" x2="0" y2="1">
        <stop stopColor="#1e293b" />
        <stop offset="1" stopColor="#0f172a" />
      </linearGradient>
      <linearGradient id="wave1" x1="0" y1="0" x2="1" y2="1">
        <stop stopColor="#7c3aed" stopOpacity="0.18" />
        <stop offset="1" stopColor="#ef4444" stopOpacity="0.09" />
      </linearGradient>
      <linearGradient id="wave2" x1="0" y1="0" x2="1" y2="1">
        <stop stopColor="#ef4444" stopOpacity="0.13" />
        <stop offset="1" stopColor="#7c3aed" stopOpacity="0.07" />
      </linearGradient>
    </defs>
    <rect width="1440" height="900" fill="url(#bg-gradient)" />

    {/* Onda 1 */}
    <path fill="url(#wave1)">
      <animate
        attributeName="d"
        dur="12s"
        repeatCount="indefinite"
        values="
          M0,700 Q360,650 720,700 T1440,700 V900 H0 Z;
          M0,720 Q360,780 720,720 T1440,720 V900 H0 Z;
          M0,700 Q360,650 720,700 T1440,700 V900 H0 Z
        "
      />
    </path>
    {/* Onda 2 */}
    <path fill="url(#wave2)">
      <animate
        attributeName="d"
        dur="16s"
        repeatCount="indefinite"
        values="
          M0,800 Q480,850 960,800 T1440,800 V900 H0 Z;
          M0,820 Q480,900 960,820 T1440,820 V900 H0 Z;
          M0,800 Q480,850 960,800 T1440,800 V900 H0 Z
        "
      />
    </path>
    
    {bubbles}
  </svg>
);

export default AnimatedBg;