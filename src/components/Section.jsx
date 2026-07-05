export default function Section({ id, eyebrow, title, children, className = "", tone = "light" }) {
  const isDark = tone === "dark";

  return (
    <section id={id} className={`scroll-mt-24 px-5 py-20 sm:px-8 lg:px-12 ${className}`}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow && (
              <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.22em] ${isDark ? "text-ochre" : "text-clay"}`}>
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className={`font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl ${isDark ? "text-millet" : "text-ink"}`}>
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
