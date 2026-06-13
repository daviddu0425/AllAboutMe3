import { Link } from "react-router-dom";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import ScrollHint from "../components/ScrollHint";
import ScrollReveal from "../components/ScrollReveal";
import {
  nvidiaProjects,
  personalProjects,
  type Project,
} from "../data/site-content";

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 transition-colors hover:border-neutral-700 hover:bg-neutral-900"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-xl font-semibold text-white group-hover:text-blue-400">
          {project.name}
        </h3>
        <ArrowTopRightOnSquareIcon className="h-5 w-5 shrink-0 text-neutral-400 transition-colors group-hover:text-blue-400" />
      </div>
      <p className="mt-3 text-sm leading-relaxed text-neutral-400">
        {project.description}
      </p>
    </a>
  );
}

function ProjectSection({
  title,
  projects,
  startIndex,
}: {
  title: string;
  projects: Project[];
  startIndex: number;
}) {
  return (
    <section>
      <ScrollReveal as="h2" className="text-2xl font-semibold text-white">
        {title}
      </ScrollReveal>
      <ul className="mt-6 grid gap-8 sm:grid-cols-2">
        {projects.map((project, index) => (
          <ScrollReveal
            as="li"
            key={project.name}
            delay={(startIndex + index) * 50}
          >
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </ul>
    </section>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <div className="mx-auto max-w-5xl px-6 py-12">
        <ScrollReveal
          as="h1"
          className="text-4xl font-bold tracking-tight sm:text-5xl"
        >
          Projects
        </ScrollReveal>

        <div className="mt-12 space-y-16">
          <ProjectSection
            title="At NVIDIA"
            projects={nvidiaProjects}
            startIndex={0}
          />
          <ProjectSection
            title="Personal Projects"
            projects={personalProjects}
            startIndex={nvidiaProjects.length}
          />
        </div>

        <ScrollReveal className="mt-16 flex justify-center" delay={60}>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-lg border border-neutral-700 px-6 py-3 text-base font-medium text-neutral-200 transition-colors hover:border-neutral-500 hover:bg-neutral-900"
          >
            Contact Me!
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
