const links = {
  Product: ["How It Works", "Pricing", "Security", "Changelog"],
  Legal: ["Terms of Service", "Privacy Policy", "Cookie Policy", "Data DPA"],
  Company: ["About", "Blog", "Contact", "Careers"],
};

export default function Footer() {
  return (
    <footer
      style={{ background: "var(--navy)", borderTop: "1px solid var(--divider)" }}
      className="px-6 pt-16 pb-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
                <polygon
                  points="13,1 24,7.5 24,18.5 13,25 2,18.5 2,7.5"
                  stroke="#d4af37"
                  strokeWidth="1.5"
                  fill="none"
                />
                <circle cx="13" cy="13" r="3" fill="#d4af37" fillOpacity="0.85" />
              </svg>
              <span className="font-bold text-lg" style={{ color: "var(--copy)" }}>
                Term<span style={{ color: "var(--gold)" }}>1</span>nus
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--faint)" }}>
              Scope creep protection for freelancers who value their time and their rates.
            </p>
            <p className="text-xs" style={{ color: "var(--faint)" }}>
              Security Score 9/10 · God-Mode Certified
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <p
                className="text-xs font-bold tracking-widest uppercase mb-5"
                style={{ color: "var(--dim)" }}
              >
                {group}
              </p>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm nav-link"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="section-line mb-8" />

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{ color: "var(--faint)" }}
        >
          <p>© {new Date().getFullYear()} Term1nus. All rights reserved.</p>
          <p>
            Built by&nbsp;
            <a href="#" className="nav-link" style={{ fontSize: "inherit" }}>
              Kai Cogmon
            </a>
            &nbsp;·&nbsp;www.term1nus.com
          </p>
        </div>
      </div>
    </footer>
  );
}
