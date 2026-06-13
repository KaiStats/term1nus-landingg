const pains = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#d4af37" strokeWidth="1.5" />
        <path d="M12 8v4l3 3" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: "The Endless Revision",
    pain: "\"Just one more small thing…\"",
    body:
      "It starts as a tiny request. Then another. Then twelve rounds of changes later you're building version 4 of what you originally quoted. Untracked, unpriced, unpaid.",
    stat: "Avg. 8.3 untracked revision rounds per project",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="#d4af37" strokeWidth="1.5" />
        <path d="M3 9h18" stroke="#d4af37" strokeWidth="1.5" />
        <path d="M9 13h6" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: "The Verbal Agreement",
    pain: "\"We discussed this verbally.\"",
    body:
      "No paper trail. No proof. Just their word against yours — and clients always remember differently when money is on the line. A handshake isn't a contract.",
    stat: "67% of scope disputes have no written record",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#d4af37" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M2 17l10 5 10-5" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 12l10 5 10-5" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "The Pivot Request",
    pain: "\"Can we just change the entire direction?\"",
    body:
      "Midway through delivery, the brief changes completely. Your deliverable becomes obsolete. You rebuild from scratch. Your effective hourly rate just hit single digits.",
    stat: "40% of freelance revenue lost to uncompensated scope",
  },
];

const solutions = [
  {
    color: "var(--sage)",
    label: "Scope Snapshot™",
    body:
      "Immutable, timestamped record of exactly what was agreed — before a single line of work begins. Legally binding. Client-signed. Permanent.",
  },
  {
    color: "var(--sage)",
    label: "Instant Change Orders",
    body:
      "The moment a client requests anything outside scope, Term1nus generates a change order with attached pricing. They approve it or it doesn't happen. Period.",
  },
  {
    color: "var(--gold)",
    label: "Revision Registry",
    body:
      "Every request. Every decision. Every \"quick change.\" All on record with timestamps, approval status, and dollar amounts attached. The paper trail you never had.",
  },
  {
    color: "var(--gold)",
    label: "Audit Log",
    body:
      "Full chronological history of every project action — exportable as a legal document. If a dispute ever reaches mediation, you walk in prepared.",
  },
];

export default function ProblemSolution() {
  return (
    <section id="how-it-works" style={{ background: "var(--navy)" }} className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Pain section */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--gold)" }}>
            The Problem
          </p>
          <h2 className="font-display font-bold tracking-display leading-[1.02] mb-5" style={{ color: "var(--copy)", fontSize: "clamp(2rem, 5vw, 3.2rem)" }}>
            Freelancers lose 40% of their<br className="hidden sm:block" /> revenue to scope creep.
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--dim)" }}>
            Not because clients are evil. Because there was never a system enforcing
            the boundary between what was agreed and what was asked.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {pains.map((item) => (
            <div key={item.label} className="card-hover p-7">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "rgba(212, 175, 55, 0.08)", border: "1px solid rgba(212, 175, 55, 0.15)" }}
              >
                {item.icon}
              </div>
              <div
                className="text-xs font-semibold tracking-widest uppercase mb-2"
                style={{ color: "var(--faint)" }}
              >
                {item.label}
              </div>
              <p className="text-lg font-semibold mb-3" style={{ color: "var(--gold)" }}>
                {item.pain}
              </p>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--dim)" }}>
                {item.body}
              </p>
              <div
                className="text-xs font-medium px-3 py-2 rounded-lg"
                style={{
                  background: "rgba(212, 175, 55, 0.06)",
                  border: "1px solid rgba(212, 175, 55, 0.12)",
                  color: "var(--dim)",
                }}
              >
                📊 {item.stat}
              </div>
            </div>
          ))}
        </div>

        {/* Divider with label */}
        <div className="relative mb-24">
          <div className="section-line" />
          <div
            className="absolute left-1/2 -translate-x-1/2 -top-4 px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase"
            style={{
              background: "var(--navy)",
              color: "var(--sage)",
              border: "1px solid var(--divider)",
            }}
          >
            Term1nus Changes This
          </div>
        </div>

        {/* Solution section */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--sage)" }}>
            The Solution
          </p>
          <h2 className="font-display font-bold tracking-display leading-[1.02] mb-5" style={{ color: "var(--copy)", fontSize: "clamp(2rem, 5vw, 3.2rem)" }}>
            Enforceable boundaries.<br className="hidden sm:block" /> Automated protection.
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--dim)" }}>
            Term1nus is the legal infrastructure layer freelancers never had. Every project
            starts with a locked scope. Every change generates a paper trail. Every conversation
            has a record.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {solutions.map((item) => (
            <div key={item.label} className="card-hover p-7 flex gap-5">
              <div
                className="w-1.5 rounded-full flex-shrink-0 mt-1"
                style={{ background: item.color, minHeight: "24px", alignSelf: "stretch" }}
              />
              <div>
                <p className="text-base font-bold mb-2" style={{ color: "var(--copy)" }}>
                  {item.label}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--dim)" }}>
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
