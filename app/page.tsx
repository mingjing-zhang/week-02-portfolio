import Link from "next/link";

export default function Home() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        Hi, I&apos;m Mingjing.
      </h1>
      <p className="mt-6 max-w-xl text-lg text-zinc-600">
        I&apos;m a student at CSTU learning modern web development and
        AI-assisted software engineering. This site is where I share what
        I&apos;m building as I go.
      </p>
      <div className="mt-10 flex gap-4 text-sm">
        <Link
          href="/projects"
          className="rounded-full bg-zinc-900 px-5 py-2.5 text-white transition-colors hover:bg-zinc-700"
        >
          View my work
        </Link>
        <Link
          href="/about"
          className="rounded-full border border-zinc-300 px-5 py-2.5 text-zinc-700 transition-colors hover:bg-zinc-100"
        >
          About me
        </Link>
      </div>
    </section>
  );
}
