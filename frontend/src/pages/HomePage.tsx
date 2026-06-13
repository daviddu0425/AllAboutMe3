import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { intro } from "../data/site-content";

const TYPING_DURATION_MS = 1500;
const TYPING_SPEED_MS = Math.round(
  TYPING_DURATION_MS / intro.greeting.length,
);
const GAP_MS = 200;
const BUTTON_STAGGER_MS = 400;

const typingFinishMs = TYPING_DURATION_MS;
const subtitleDelayMs = typingFinishMs + GAP_MS;
const buttonDelayMs = subtitleDelayMs + BUTTON_STAGGER_MS;

export default function HomePage() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-6 text-center">
      <div
        className="relative flex flex-col items-center"
        style={
          {
            "--home-subtitle-delay": `${subtitleDelayMs}ms`,
            "--home-button-delay": `${buttonDelayMs}ms`,
          } as React.CSSProperties
        }
      >
        <div className="fade-in">
          <TypeAnimation
            sequence={[intro.greeting, 1000]}
            wrapper="h1"
            cursor
            repeat={0}
            speed={{ type: "keyStrokeDelayInMs", value: TYPING_SPEED_MS }}
            className="text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
          />
        </div>

        <p className="fade-in-delay-1 mt-6 text-xl text-neutral-200 sm:text-2xl">
          {intro.subtitle}
        </p>

        <div className="fade-in-delay-2 mt-10">
          <Link
            to="/about"
            className="group inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-blue-500"
          >
            {intro.cta}
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
