type CircuitMotifProps = {
  className?: string;
};

export function CircuitMotif({ className = '' }: CircuitMotifProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 220"
      className={`pointer-events-none absolute inset-x-0 top-0 h-full w-full ${className}`.trim()}
      preserveAspectRatio="none"
    >
      <path
        d="M80 120H360c40 0 60-20 100-20h180c48 0 72 28 118 28h165c56 0 74-22 144-22h45"
        fill="none"
        stroke="#D4AF37"
        strokeOpacity="0.45"
        strokeWidth="2"
      />
      <path
        d="M240 120v44m252-64v56m250-54v48m206-46v40"
        fill="none"
        stroke="#0F7B3E"
        strokeOpacity="0.3"
        strokeWidth="2"
      />
      <circle cx="240" cy="120" r="5" fill="#D4AF37" fillOpacity="0.9" />
      <circle cx="492" cy="100" r="5" fill="#D4AF37" fillOpacity="0.9" />
      <circle cx="742" cy="108" r="5" fill="#D4AF37" fillOpacity="0.9" />
      <circle cx="948" cy="102" r="5" fill="#D4AF37" fillOpacity="0.9" />
    </svg>
  );
}
