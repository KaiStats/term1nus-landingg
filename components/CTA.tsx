export default function CTA() {
  return (
    <section
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: "var(--charcoal)" }}
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(212,175,55,0.05) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)",
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <div
          className="text-5xl mb-6"
          style={{ color: "var(--gold)" }}
          aria-hidden="true"
        >
          ♛
        </div>

        <h2
          className="font-display font-bold tracking-display leading-[0.98] mb-6"
          style={{ color: "var(--copy)", fontSize: "clamp(2.4rem, 6vw, 4.2rem)" }}
        >
          Scope creep doesn&apos;t negotiate.
          <br />
          <span className="text-shimmer">Neither does Term1nus.</span>
        </h2>

        <p
          className="text-xl leading-relaxed max-w-2xl mx-auto mb-12"
          style={{ color: "var(--dim)" }}
        >
          Every freelancer who deploys Term1nus starts recovering money within
          the first 30 days. The average recapture is{" "}
          <strong style={{ color: "var(--copy)" }}>$3,800 in year one.</strong>{" "}
          Your first project is free.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="#pricing"
            className="btn-gold px-10 py-5 text-base w-full sm:w-auto"
          >
            Protect My First Project →
          </a>
          <a
            href="#how-it-works"
            className="btn-ghost px-10 py-5 text-base w-full sm:w-auto"
          >
            How It Works
          </a>
        </div>

        <p className="text-sm" style={{ color: "var(--faint)" }}>
          No credit card required to start.&nbsp;&nbsp;·&nbsp;&nbsp;30-day
          money-back guarantee.&nbsp;&nbsp;·&nbsp;&nbsp;Cancel anytime.
        </p>
      </div>
    </section>
  );
}
