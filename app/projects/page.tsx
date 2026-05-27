"use client";

import { useState } from "react";

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "Personal Portfolio Site",
    description:
      "This site itself — built with Next.js App Router and Tailwind CSS as my Week 2 coursework project.",
    tags: ["JavaScript", "CSS"],
  },
  {
    id: 2,
    title: "JavaScript Fundamentals Practice",
    description:
      "A collection of small exercises covering arrays, objects, loops, and async/await from Week 2 coursework.",
    tags: ["JavaScript"],
  },
  {
    id: 3,
    title: "Responsive Layout Challenge",
    description:
      "A mobile-first responsive page rebuilt from a design mockup using Flexbox and Grid.",
    tags: ["CSS"],
  },
  {
    id: 4,
    title: "Python Data Explorer",
    description:
      "A small command-line script that reads a CSV file and prints summary statistics — my first Python data project.",
    tags: ["Python"],
  },
];

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();
const filters = ["All", ...allTags];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight">Projects</h1>
      <p className="mt-6 text-lg text-zinc-600">
        A growing collection of mini-projects from my CSTU coursework.
      </p>

      <div className="mt-10 flex flex-wrap gap-2">
        {filters.map((filter) => {
          const isActive = activeFilter === filter;
          return (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={
                isActive
                  ? "rounded-full bg-zinc-900 px-4 py-2 text-sm text-white"
                  : "rounded-full border border-zinc-300 px-4 py-2 text-sm text-zinc-700 transition-colors hover:bg-zinc-100"
              }
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {visibleProjects.map((project) => (
          <article
            key={project.id}
            className="rounded-2xl border border-zinc-200 p-6"
          >
            <h2 className="text-lg font-semibold tracking-tight">
              {project.title}
            </h2>
            <p className="mt-2 text-sm text-zinc-600">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {visibleProjects.length === 0 && (
        <p className="mt-8 text-zinc-500">No projects match this filter yet.</p>
      )}
    </section>
  );
}
