import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-6 text-4xl font-bold">Projects</h1>
      <p className="mb-8 text-lg">
        Here are some of the projects I&apos;ve worked on. For more details,{" "}
        <Link
          href="/about"
          className="text-primary-foreground hover:text-primary"
        >
          read here
        </Link>
        .
      </p>
      <ul className="space-y-6">
        {/* Example project items */}
        <li className="rounded-lg border p-4 transition hover:shadow">
          <h2 className="text-2xl font-semibold">Project Name</h2>
          <p className="text-gray-500">
            Short description of the project goes here.
          </p>
        </li>
        <li className="rounded-lg border p-4 transition hover:shadow">
          <h2 className="text-2xl font-semibold">Another Project</h2>
          <p className="text-gray-500">Another brief project description.</p>
        </li>
      </ul>
    </main>
  );
}
