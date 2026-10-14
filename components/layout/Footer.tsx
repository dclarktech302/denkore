const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Facebook", href: "#" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/[0.06] px-6 pt-16 pb-10">
      <div className="mx-auto grid max-w-6xl gap-12 sm:grid-cols-3">
        <div>
          <p className="font-display text-[15px] font-medium tracking-[0.08em] text-white uppercase">
            Denkore <span className="text-violet-light">Group</span>
          </p>
          <p className="mt-3 max-w-[260px] text-[13px] leading-relaxed text-white/35">
            Tech that&apos;s not confusing. Eastern Shore, MD/DE.
          </p>
        </div>

        <div>
          <p className="mb-4 text-[11px] tracking-[0.2em] text-white/30 uppercase">
            Navigate
          </p>
          <nav className="flex flex-col gap-2.5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] text-white/45 transition-colors hover:text-white/80"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <p className="mb-4 text-[11px] tracking-[0.2em] text-white/30 uppercase">
            Contact
          </p>
          <p className="text-[13px] text-white/45">hello@denkoregroup.com</p>

          <p className="mt-6 mb-3 text-[11px] tracking-[0.2em] text-white/30 uppercase">
            Social
          </p>
          <div className="flex flex-col gap-2">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-disabled="true"
                title="Coming soon"
                tabIndex={-1}
                className="pointer-events-none text-[13px] text-white/45"
              >
                {link.label}
                <span className="ml-2 text-white/25">(coming soon)</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-6xl border-t border-white/[0.06] pt-6 text-[12px] tracking-[0.05em] text-white/30">
        © {year} Denkore Group LLC · Eastern Shore, MD/DE
      </div>
    </footer>
  );
}
