"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  url?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Personal Portfolio Site",
    description:
      "This site itself — built with Next.js App Router and Tailwind CSS as my Week 2 coursework project.",
    tags: ["JavaScript", "CSS"],
    url: "https://github.com/mingjing-zhang/week-02-portfolio",
  },
  {
    id: 2,
    title: "Week 1 Personal Landing Page",
    description:
      "A single-page personal site built with HTML and CSS for my Week 1 lab — practicing Flexbox layouts and the basics of semantic HTML.",
    tags: ["CSS"],
    url: "https://github.com/mingjing-zhang/week-01-lab",
  },
  {
    id: 3,
    title: "JavaScript Fundamentals Practice",
    description:
      "A counter and a small to-do list built with vanilla JavaScript and the DOM API. Coming soon.",
    tags: ["JavaScript"],
  },
  {
    id: 4,
    title: "Python Data Explorer",
    description:
      "A small command-line script that reads a CSV file and prints summary statistics — my first Python data project. Coming soon.",
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
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
            href={project.url}
          />
        ))}
      </div>

      {visibleProjects.length === 0 && (
        <p className="mt-8 text-zinc-500">No projects match this filter yet.</p>
      )}
    </section>
  );
}
