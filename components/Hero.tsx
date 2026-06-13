export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Geometric background — swap src for Higgsfield video URL once generated */}
      <div className="absolute inset-0 z-0">
        <GeometricBackground />
      </div>

      {/* Higgsfield Veo 3.1 Lite animated geometric background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.55, mixBlendMode: "screen" }}
        autoPlay
        loop
        muted
        playsInline
        src="https://d8j0ntlcm91z4.cloudfront.net/user_3F5ssCqR5J7p1iLhp9GPzJjUxk5/hf_20260613_190318_d6207611-6a99-4806-bad4-83230f83d835.mp4"
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, var(--navy) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-36 pb-24 text-center">
        {/* Badge */}
        <div className="badge-pill animate-fade-up mb-8 mx-auto w-fit">
          <span
            className="inline-block w-2 h-2 rounded-full"
            style={{ background: "var(--sage)", boxShadow: "0 0 6px var(--sage)" }}
          />
          God-Mode Security&nbsp;&nbsp;·&nbsp;&nbsp;Score 9/10
        </div>

        {/* Headline */}
        <h1 className="font-display tracking-display font-bold leading-[0.98] mb-6 animate-fade-up-1"
          style={{ fontSize: "clamp(3.2rem, 8vw, 5.5rem)" }}>
          <span style={{ color: "var(--copy)" }}>Your Scope</span>
          <br />
          <span className="text-shimmer">Is Sacred.</span>
        </h1>

        {/* Sub-headline */}
        <p
          className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-up-2 tracking-subhead"
          style={{ color: "var(--dim)" }}
        >
          Term1nus enforces project boundaries so clients can&apos;t expand the
          work without expanding the budget. Deploy contracts with legal force.
          Track every revision request.{" "}
          <strong style={{ color: "var(--copy)", fontWeight: 600 }}>
            Never work for free again.
          </strong>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up-3">
          <a href="#pricing" className="btn-gold px-8 py-4 text-base w-full sm:w-auto">
            Protect My Next Project →
          </a>
          <a href="#how-it-works" className="btn-ghost px-8 py-4 text-base w-full sm:w-auto">
            See How It Works
          </a>
        </div>

        {/* Social proof strip */}
        <div
          className="flex flex-wrap items-center justify-center gap-6 text-sm animate-fade-up-3"
          style={{ color: "var(--faint)" }}
        >
          <div className="flex items-center gap-2">
            <span style={{ color: "var(--gold)" }}>♛</span>
            <span>Trusted by 2,400+ freelancers</span>
          </div>
          <div className="hidden sm:block h-4 w-px" style={{ background: "var(--divider)" }} />
          <div className="flex items-center gap-2">
            <span style={{ color: "var(--sage)" }}>✓</span>
            <span>$2.1M in recovered scope</span>
          </div>
          <div className="hidden sm:block h-4 w-px" style={{ background: "var(--divider)" }} />
          <div className="flex items-center gap-2">
            <span style={{ color: "var(--sage)" }}>✓</span>
            <span>Zero scope disputes won by clients</span>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to top, var(--navy) 0%, transparent 100%)",
        }}
      />
    </section>
  );
}

function GeometricBackground() {
  // All coordinates computed for viewBox 1440×900, center at (720, 415)
  // Hexagons use pointy-top orientation: vertices at 0°, 60°, 120°, 180°, 240°, 300°
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern id="t1-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <circle cx="30" cy="30" r="0.75" fill="#2d3252" opacity="0.55" />
        </pattern>
        <radialGradient id="t1-sage-atm" cx="50%" cy="46%" r="42%">
          <stop offset="0%" stopColor="#6ba39e" stopOpacity="0.09" />
          <stop offset="100%" stopColor="#1a1d29" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="t1-gold-atm" cx="50%" cy="46%" r="22%">
          <stop offset="0%" stopColor="#d4af37" stopOpacity="0.07" />
          <stop offset="100%" stopColor="#1a1d29" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Dot grid */}
      <rect width="1440" height="900" fill="url(#t1-grid)" />

      {/* Atmosphere glows */}
      <rect width="1440" height="900" fill="url(#t1-sage-atm)" />
      <rect width="1440" height="900" fill="url(#t1-gold-atm)" />

      {/* Hexagonal containment rings — r=220 (outer) */}
      <polygon
        className="animate-pulse-ring"
        points="940,415 830,225 610,225 500,415 610,605 830,605"
        fill="none"
        stroke="#6ba39e"
        strokeWidth="1"
        strokeOpacity="0.28"
      />
      {/* r=155 */}
      <polygon
        points="875,415 797,281 643,281 565,415 643,549 797,549"
        fill="none"
        stroke="#6ba39e"
        strokeWidth="0.75"
        strokeOpacity="0.18"
      />
      {/* r=90 (inner sage→gold transition) */}
      <polygon
        className="animate-pulse-ring-fast"
        points="810,415 765,337 675,337 630,415 675,493 765,493"
        fill="none"
        stroke="#d4af37"
        strokeWidth="1"
        strokeOpacity="0.32"
      />
      {/* r=40 (gold core) */}
      <polygon
        points="760,415 740,381 700,381 680,415 700,449 740,449"
        fill="none"
        stroke="#d4af37"
        strokeWidth="1.4"
        strokeOpacity="0.55"
      />
      {/* Center point */}
      <circle cx="720" cy="415" r="4" fill="#d4af37" fillOpacity="0.85" />
      <circle cx="720" cy="415" r="16" fill="#d4af37" fillOpacity="0.05" />

      {/* Corner accent — top-left */}
      <g opacity="0.3">
        <line x1="0" y1="0" x2="180" y2="0" stroke="#2d3252" strokeWidth="1.5" />
        <line x1="0" y1="0" x2="0" y2="180" stroke="#2d3252" strokeWidth="1.5" />
        <polyline points="90,0 0,0 0,90" fill="none" stroke="#d4af37" strokeWidth="1" strokeOpacity="0.5" />
        <circle cx="90" cy="90" r="3" fill="#d4af37" fillOpacity="0.5" />
        <circle cx="45" cy="45" r="1.5" fill="#d4af37" fillOpacity="0.3" />
      </g>

      {/* Corner accent — top-right */}
      <g transform="translate(1440,0) scale(-1,1)" opacity="0.3">
        <line x1="0" y1="0" x2="180" y2="0" stroke="#2d3252" strokeWidth="1.5" />
        <line x1="0" y1="0" x2="0" y2="180" stroke="#2d3252" strokeWidth="1.5" />
        <polyline points="90,0 0,0 0,90" fill="none" stroke="#d4af37" strokeWidth="1" strokeOpacity="0.5" />
        <circle cx="90" cy="90" r="3" fill="#d4af37" fillOpacity="0.5" />
      </g>

      {/* Corner accent — bottom-left */}
      <g transform="translate(0,900) scale(1,-1)" opacity="0.22">
        <line x1="0" y1="0" x2="130" y2="0" stroke="#2d3252" strokeWidth="1.5" />
        <line x1="0" y1="0" x2="0" y2="130" stroke="#2d3252" strokeWidth="1.5" />
        <polyline points="65,0 0,0 0,65" fill="none" stroke="#6ba39e" strokeWidth="1" strokeOpacity="0.5" />
        <circle cx="65" cy="65" r="2.5" fill="#6ba39e" fillOpacity="0.5" />
      </g>

      {/* Corner accent — bottom-right */}
      <g transform="translate(1440,900) scale(-1,-1)" opacity="0.22">
        <line x1="0" y1="0" x2="130" y2="0" stroke="#2d3252" strokeWidth="1.5" />
        <line x1="0" y1="0" x2="0" y2="130" stroke="#2d3252" strokeWidth="1.5" />
        <polyline points="65,0 0,0 0,65" fill="none" stroke="#6ba39e" strokeWidth="1" strokeOpacity="0.5" />
        <circle cx="65" cy="65" r="2.5" fill="#6ba39e" fillOpacity="0.5" />
      </g>

      {/* Floating diamond particles */}
      <rect
        className="animate-float"
        x="197" y="149" width="9" height="9"
        transform="rotate(45 201.5 153.5)"
        fill="none" stroke="#d4af37" strokeWidth="1" strokeOpacity="0.45"
      />
      <rect
        className="animate-float-slow"
        x="1215" y="210" width="7" height="7"
        transform="rotate(45 1218.5 213.5)"
        fill="#d4af37" fillOpacity="0.25"
      />
      <rect
        className="animate-float"
        style={{ animationDelay: "2s" }}
        x="102" y="598" width="10" height="10"
        transform="rotate(45 107 603)"
        fill="none" stroke="#6ba39e" strokeWidth="1" strokeOpacity="0.4"
      />
      <rect
        className="animate-float-slow"
        style={{ animationDelay: "3.5s" }}
        x="1318" y="678" width="8" height="8"
        transform="rotate(45 1322 682)"
        fill="none" stroke="#6ba39e" strokeWidth="1" strokeOpacity="0.35"
      />
      <rect
        className="animate-float"
        style={{ animationDelay: "1s" }}
        x="281" y="748" width="6" height="6"
        transform="rotate(45 284 751)"
        fill="#d4af37" fillOpacity="0.2"
      />
      <rect
        className="animate-float-slow"
        style={{ animationDelay: "4s" }}
        x="1128" y="102" width="8" height="8"
        transform="rotate(45 1132 106)"
        fill="none" stroke="#d4af37" strokeWidth="0.8" strokeOpacity="0.3"
      />

      {/* Subtle structural diagonals */}
      <g opacity="0.06">
        <line x1="0" y1="320" x2="380" y2="0" stroke="#6ba39e" strokeWidth="1" />
        <line x1="1440" y1="320" x2="1060" y2="0" stroke="#6ba39e" strokeWidth="1" />
        <line x1="0" y1="580" x2="380" y2="900" stroke="#6ba39e" strokeWidth="1" />
        <line x1="1440" y1="580" x2="1060" y2="900" stroke="#6ba39e" strokeWidth="1" />
      </g>
    </svg>
  );
}
