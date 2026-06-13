type Feature = { text: string; included: boolean };

type Tier = {
  icon: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  cta: string;
  ctaStyle: string;
  highlight: boolean;
  badge?: string;
  features: Feature[];
};

const tiers: Tier[] = [
  {
    icon: "♟",
    name: "Pawn",
    tagline: "For solo freelancers just getting started.",
    price: "$0",
    period: "forever",
    cta: "Start Free",
    ctaStyle: "btn-ghost",
    highlight: false,
    features: [
      { text: "1 active project", included: true },
      { text: "Scope Snapshot™ per project", included: true },
      { text: "Basic revision log", included: true },
      { text: "PDF export (watermarked)", included: true },
      { text: "Automated change orders", included: false },
      { text: "Client portal", included: false },
      { text: "Revenue protection dashboard", included: false },
      { text: "Legal contract templates", included: false },
    ],
  },
  {
    icon: "♞",
    name: "Knight",
    tagline: "For active freelancers running multiple clients.",
    price: "$49",
    period: "per month",
    cta: "Start Knight Trial",
    ctaStyle: "btn-sage",
    highlight: false,
    features: [
      { text: "Unlimited active projects", included: true },
      { text: "Scope Snapshot™ per project", included: true },
      { text: "Full revision registry", included: true },
      { text: "Automated change order generation", included: true },
      { text: "Client approval portal", included: true },
      { text: "Revenue protection dashboard", included: true },
      { text: "Clean PDF exports (no watermark)", included: true },
      { text: "Legal contract templates", included: false },
    ],
  },
  {
    icon: "♛",
    name: "Queen",
    tagline: "For serious freelancers and boutique agencies.",
    price: "$149",
    period: "per month",
    cta: "Go Queen",
    ctaStyle: "btn-gold",
    highlight: true,
    badge: "Most Powerful",
    features: [
      { text: "Everything in Knight", included: true },
      { text: "Attorney-reviewed contract templates", included: true },
      { text: "White-label client portal", included: true },
      { text: "3 team seats included", included: true },
      { text: "API access for integrations", included: true },
      { text: "Priority support (4h response)", included: true },
      { text: "AuditLog export for legal proceedings", included: true },
      { text: "Custom branding on all documents", included: true },
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 px-6" style={{ background: "var(--charcoal)" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--gold)" }}
          >
            Pricing
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-5"
            style={{ color: "var(--copy)" }}
          >
            Choose your protection tier.
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--dim)" }}>
            Every level enforces your scope. The question is how hard you want to
            protect it.
          </p>
        </div>

        {/* Tier cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier) => (
            <TierCard key={tier.name} tier={tier} />
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm mt-10" style={{ color: "var(--faint)" }}>
          All plans include a 30-day money-back guarantee. No credit card required for Pawn.
          <br className="hidden sm:block" />
          Annual plans save 20% — billed via Stripe. Cancel anytime.
        </p>
      </div>
    </section>
  );
}

function TierCard({ tier }: { tier: Tier }) {
  const cardClass = tier.highlight ? "card-queen" : "card-hover";

  return (
    <div className={`${cardClass} p-8 flex flex-col relative`}>
      {tier.badge && (
        <div
          className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
          style={{
            background: "var(--gold)",
            color: "var(--navy)",
          }}
        >
          {tier.badge}
        </div>
      )}

      {/* Tier header */}
      <div className="mb-6">
        <div
          className="text-3xl mb-3"
          style={{ color: tier.highlight ? "var(--gold)" : "var(--dim)" }}
        >
          {tier.icon}
        </div>
        <h3 className="text-xl font-bold mb-1" style={{ color: "var(--copy)" }}>
          {tier.name}
        </h3>
        <p className="text-sm" style={{ color: "var(--dim)" }}>
          {tier.tagline}
        </p>
      </div>

      {/* Price */}
      <div className="mb-8">
        <div className="flex items-end gap-2">
          <span
            className="text-5xl font-bold tracking-tight"
            style={{ color: tier.highlight ? "var(--gold)" : "var(--copy)" }}
          >
            {tier.price}
          </span>
          <span className="text-sm pb-2" style={{ color: "var(--faint)" }}>
            {tier.period}
          </span>
        </div>
      </div>

      {/* CTA */}
      <a
        href="#"
        className={`${tier.ctaStyle} px-6 py-3.5 text-sm w-full mb-8`}
      >
        {tier.cta}
      </a>

      {/* Features */}
      <div className="section-line mb-6" />
      <ul className="flex flex-col gap-3 flex-1">
        {tier.features.map((feat) => (
          <li key={feat.text} className="flex items-start gap-3 text-sm">
            {feat.included ? (
              <svg
                className="flex-shrink-0 mt-0.5"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="8"
                  cy="8"
                  r="7.5"
                  stroke="#6ba39e"
                  strokeOpacity="0.5"
                />
                <path
                  d="M4.5 8l2.5 2.5 4-5"
                  stroke="#6ba39e"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                className="flex-shrink-0 mt-0.5"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="8" cy="8" r="7.5" stroke="#4a5068" strokeOpacity="0.5" />
                <path
                  d="M5.5 5.5l5 5M10.5 5.5l-5 5"
                  stroke="#4a5068"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
            )}
            <span
              style={{
                color: feat.included ? "var(--dim)" : "var(--faint)",
                textDecoration: feat.included ? "none" : "none",
              }}
            >
              {feat.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
