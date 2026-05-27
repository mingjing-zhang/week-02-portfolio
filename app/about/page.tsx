const skills = [
  "JavaScript & TypeScript",
  "React & Next.js",
  "Tailwind CSS",
  "Python",
  "AI-Assisted Development",
  "Problem Solving",
];

export default function About() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight">About</h1>
      <div className="mt-8 space-y-5 text-lg text-zinc-700">
        <p>
          I&apos;m a student at CSTU studying software engineering. My focus
          right now is on building real, working applications end-to-end
          using modern frontend frameworks and AI-assisted development tools.
        </p>
        <p>
          This portfolio is itself one of my coursework projects — built with
          Next.js, React, and Tailwind CSS. I&apos;ll be using it to publish
          the mini-projects I complete as I move through the program.
        </p>
        <p>
          Outside of class, I enjoy reading, writing, and exploring how
          software is changing the way we learn and work.
        </p>
      </div>

      <h2 className="mt-16 text-2xl font-semibold tracking-tight">
        What I&apos;m Learning
      </h2>
      <ul className="mt-6 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full bg-zinc-100 px-4 py-2 text-sm text-zinc-700"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
