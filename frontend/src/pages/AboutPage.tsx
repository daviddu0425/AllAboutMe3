import { useState } from "react";
import { Link } from "react-router-dom";
import ScrollHint from "../components/ScrollHint";
import ScrollReveal from "../components/ScrollReveal";
import {
  about,
  courses,
  experiences,
  skillCategories,
} from "../data/site-content";

export default function AboutPage() {
  const [showCourses, setShowCourses] = useState(false);

  return (
    <>
    <div className="mx-auto max-w-5xl px-6 py-12">
      <ScrollReveal
        as="h1"
        className="text-4xl font-bold tracking-tight sm:text-5xl"
      >
        About Me
      </ScrollReveal>

      <ScrollReveal className="mt-8 max-w-3xl text-lg leading-relaxed text-neutral-300">
        {about.bio}
      </ScrollReveal>

      <ScrollReveal
        as="h2"
        className="mt-16 text-2xl font-semibold"
        delay={60}
      >
        {about.timelineHeading}
      </ScrollReveal>

      <ol className="mt-8 space-y-8 border-l border-neutral-800 pl-8">
        {experiences.map((item, index) => (
          <ScrollReveal
            as="li"
            key={item.id}
            delay={index * 50}
            className="relative"
          >
            <span className="absolute -left-[2.4rem] top-1.5 h-3 w-3 rounded-full border-2 border-blue-500 bg-neutral-950" />
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold text-white hover:text-blue-400"
                >
                  {item.organization}
                </a>
              ) : (
                <span className="text-xl font-semibold text-white">
                  {item.organization}
                </span>
              )}
              <span className="text-sm text-neutral-500">{item.period}</span>
            </div>
            <p className="mt-1 font-medium text-blue-400">{item.role}</p>
            {item.description && (
              <p className="mt-2 max-w-2xl text-neutral-400">
                {item.description}
              </p>
            )}
            {item.id === "ucla" && (
              <div className="mt-4">
                <button
                  type="button"
                  onClick={() => setShowCourses((v) => !v)}
                  className="rounded-md border border-neutral-700 px-4 py-2 text-sm font-medium text-neutral-200 transition-colors hover:border-neutral-500 hover:bg-neutral-900"
                >
                  {showCourses
                    ? "Hide Classes I've Taken!"
                    : "See What Classes I've Taken!"}
                </button>
                {showCourses && (
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {courses.map((course) => (
                      <li
                        key={course}
                        className="rounded-md bg-neutral-900 px-3 py-2 text-sm text-neutral-300"
                      >
                        {course}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </ScrollReveal>
        ))}
      </ol>

      <section className="mt-16 space-y-8">
        <ScrollReveal as="h2" className="text-2xl font-semibold">
          Technical Skills
        </ScrollReveal>
        {skillCategories.map(({ name, skills }, index) => (
          <ScrollReveal key={name} delay={index * 50}>
            <h3 className="text-sm font-medium uppercase tracking-wide text-neutral-500">
              {name}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-neutral-700 bg-neutral-900 px-4 py-1.5 text-sm text-neutral-200"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        ))}
      </section>

      <ScrollReveal className="mt-16 flex justify-center" delay={60}>
        <Link
          to="/projects"
          className="group inline-flex items-center gap-2 rounded-lg border border-neutral-700 px-6 py-3 text-base font-medium text-neutral-200 transition-colors hover:border-neutral-500 hover:bg-neutral-900"
        >
          Check Out My Projects!
          <span
            aria-hidden
            className="transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </ScrollReveal>
    </div>
    <ScrollHint />
    </>
  );
}
