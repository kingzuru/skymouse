type InstitutionalGridProps = {
  className?: string;
};

export function InstitutionalGrid({ className = '' }: InstitutionalGridProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 260"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`.trim()}
    >
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M760 62h100c24 0 34 10 34 34v60"
          stroke="#0F7B3E"
          strokeOpacity="0.05"
          strokeWidth="2"
        />
        <path
          d="M860 156v-34c0-16 12-28 28-28h84"
          stroke="#0A5C2E"
          strokeOpacity="0.045"
          strokeWidth="2"
        />
        <path
          d="M932 94h72c18 0 32 14 32 32v32"
          stroke="#0A5C2E"
          strokeOpacity="0.04"
          strokeWidth="2"
        />
        <path
          d="M1008 158h78c20 0 34-14 34-34v-24"
          stroke="#0F7B3E"
          strokeOpacity="0.04"
          strokeWidth="2"
        />
        <rect x="802" y="88" width="18" height="18" rx="4" stroke="#D4AF37" strokeOpacity="0.08" strokeWidth="2" />
        <rect x="906" y="126" width="18" height="18" rx="4" stroke="#D4AF37" strokeOpacity="0.08" strokeWidth="2" />
        <rect x="1030" y="74" width="18" height="18" rx="4" stroke="#D4AF37" strokeOpacity="0.08" strokeWidth="2" />
        <circle cx="820" cy="97" r="3" fill="#D4AF37" fillOpacity="0.18" />
        <circle cx="924" cy="135" r="3" fill="#D4AF37" fillOpacity="0.18" />
        <circle cx="1049" cy="83" r="3" fill="#D4AF37" fillOpacity="0.18" />
        <path d="M820 97h60" stroke="#D4AF37" strokeOpacity="0.06" strokeWidth="2" />
        <path d="M924 135h50" stroke="#D4AF37" strokeOpacity="0.06" strokeWidth="2" />
        <path d="M1049 83h48" stroke="#D4AF37" strokeOpacity="0.06" strokeWidth="2" />
      </g>
    </svg>
  );
}
