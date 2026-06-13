import ScrollHint from "../components/ScrollHint";
import ScrollReveal from "../components/ScrollReveal";
import { site } from "../data/site-content";

const contactLinks = [
  {
    label: "LinkedIn",
    href: site.linkedin,
    description: "linkedin.com/in/david-duu",
  },
  {
    label: "GitHub",
    href: site.github,
    description: "github.com/david-duu",
  },
] as const;

const CARDS_DELAY = 100;

export default function ContactPage() {
  return (
    <>
      <div className="mx-auto max-w-5xl px-6 py-12">
        <ScrollReveal className="scroll-reveal-fast text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Contact Me
          </h1>
          <p className="mt-4 text-neutral-400">
            Thanks for checking out my website!
          </p>
        </ScrollReveal>

        <ul className="mx-auto mt-16 grid max-w-2xl gap-6 sm:grid-cols-2">
          {contactLinks.map(({ label, href, description }) => (
            <ScrollReveal
              as="li"
              key={label}
              className="scroll-reveal-fast"
              delay={CARDS_DELAY}
            >
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col items-center rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 text-center transition-colors hover:border-blue-500/50 hover:bg-neutral-900"
              >
                <span className="text-lg font-semibold text-white">{label}</span>
                <span className="mt-2 text-sm text-neutral-400">
                  {description}
                </span>
              </a>
            </ScrollReveal>
          ))}
        </ul>
      </div>
      <ScrollHint />
    </>
  );
}
