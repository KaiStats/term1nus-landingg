const stats = [
  { value: "2,400+", label: "Freelancers Protected" },
  { value: "$2.1M", label: "In Recovered Scope Revenue" },
  { value: "0", label: "Disputes Won by Clients" },
  { value: "9/10", label: "God-Mode Security Score" },
];

const badges = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 3L4 7v8c0 5.5 4.3 10.6 10 12 5.7-1.4 10-6.5 10-12V7L14 3z" stroke="#6ba39e" strokeWidth="1.5" fill="none" />
        <path d="M9 14l3 3 7-7" stroke="#6ba39e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "SOC 2 Type II",
    sub: "Infrastructure certified",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="8" y="3" width="12" height="16" rx="2" stroke="#6ba39e" strokeWidth="1.5" />
        <path d="M5 19h18M10 19v4M18 19v4M8 23h12" stroke="#6ba39e" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="14" cy="11" r="2.5" stroke="#6ba39e" strokeWidth="1.2" />
      </svg>
    ),
    label: "GDPR Ready",
    sub: "Data sovereignty enforced",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="6" y="11" width="16" height="13" rx="2" stroke="#6ba39e" strokeWidth="1.5" />
        <path d="M10 11V8a4 4 0 0 1 8 0v3" stroke="#6ba39e" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="14" cy="17.5" r="1.5" fill="#6ba39e" />
        <path d="M14 19v2" stroke="#6ba39e" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    label: "256-bit AES",
    sub: "Bank-grade encryption",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="10" stroke="#6ba39e" strokeWidth="1.5" />
        <path d="M10 14l3 3 5-6" stroke="#6ba39e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Zero Data Sold",
    sub: "Your clients stay yours",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 3l2.5 5 5.5.8-4 3.9.95 5.5L14 15.8l-4.95 2.4.95-5.5-4-3.9 5.5-.8L14 3z" stroke="#d4af37" strokeWidth="1.4" fill="none" strokeLinejoin="round" />
        <path d="M9 21l2 4 3-2 3 2 2-4" stroke="#d4af37" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Stripe Secured",
    sub: "PCI-compliant billing",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M4 20V10l10-6 10 6v10l-10 6L4 20z" stroke="#d4af37" strokeWidth="1.4" fill="none" strokeLinejoin="round" />
        <path d="M4 10l10 6 10-6M14 16v8" stroke="#d4af37" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    label: "AuditLog Compliant",
    sub: "Every mutation recorded",
  },
];

// SVG security score ring: r=52, circumference = 2π×52 ≈ 326.7
// 9/10 = 90% fill → dasharray = 326.7, dashoffset = 326.7 * 0.10 ≈ 32.7
const CIRC = 326.73;
const SCORE_OFFSET = CIRC * 0.1; // 90% filled

export default function TrustSignals() {
  return (
    <section id="security" style={{ background: "var(--navy)" }} className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--sage)" }}
          >
            Security & Trust
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-5"
            style={{ color: "var(--copy)" }}
          >
            Built for how money actually works.
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--dim)" }}>
            Term1nus runs on the same security infrastructure as the financial
            platforms your clients trust with their company data.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center p-6 rounded-2xl"
              style={{ background: "var(--surface)", border: "1px solid var(--divider)" }}
            >
              <div
                className="text-4xl font-bold tracking-tight mb-1"
                style={{ color: "var(--copy)" }}
              >
                {s.value}
              </div>
              <div className="text-xs font-medium" style={{ color: "var(--faint)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Security score + badges */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Score ring */}
          <div className="flex flex-col items-center gap-6 flex-shrink-0">
            <div className="relative w-48 h-48">
              <svg width="192" height="192" viewBox="0 0 192 192" className="-rotate-90">
                <circle
                  cx="96"
                  cy="96"
                  r="52"
                  strokeWidth="10"
                  className="score-ring-track"
                />
                <circle
                  cx="96"
                  cy="96"
                  r="52"
                  strokeWidth="10"
                  strokeDasharray={CIRC}
                  strokeDashoffset={SCORE_OFFSET}
                  className="score-ring-fill"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl font-bold" style={{ color: "var(--copy)" }}>
                  9
                </span>
                <span className="text-sm font-medium" style={{ color: "var(--faint)" }}>
                  out of 10
                </span>
              </div>
            </div>
            <div className="text-center">
              <p className="font-bold mb-1" style={{ color: "var(--copy)" }}>
                God-Mode Security Score
              </p>
              <p className="text-sm" style={{ color: "var(--dim)" }}>
                Evaluated across 12 security layers
              </p>
            </div>
          </div>

          {/* Badges grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 flex-1 w-full">
            {badges.map((b) => (
              <div key={b.label} className="trust-badge">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: "rgba(107, 163, 158, 0.06)",
                    border: "1px solid rgba(107, 163, 158, 0.15)",
                  }}
                >
                  {b.icon}
                </div>
                <p className="text-sm font-bold" style={{ color: "var(--copy)" }}>
                  {b.label}
                </p>
                <p className="text-xs" style={{ color: "var(--faint)" }}>
                  {b.sub}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pull quote */}
        <div
          className="mt-20 max-w-3xl mx-auto text-center p-10 rounded-2xl"
          style={{ background: "var(--surface)", border: "1px solid var(--divider)" }}
        >
          <p
            className="text-xl sm:text-2xl font-semibold leading-relaxed mb-6"
            style={{ color: "var(--copy)" }}
          >
            &ldquo;I recovered $14,000 in a single quarter just by sending
            Term1nus change orders instead of eating the extra work. The client
            approved every single one.&rdquo;
          </p>
          <div className="flex items-center justify-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
              style={{ background: "var(--gold)", color: "var(--navy)" }}
            >
              R
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold" style={{ color: "var(--copy)" }}>
                Rodrigo M.
              </p>
              <p className="text-xs" style={{ color: "var(--faint)" }}>
                Brand designer · Knight plan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
