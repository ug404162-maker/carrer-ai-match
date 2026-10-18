
"use client";

import { useMemo, useState } from "react";

const jobs = [
  {
    title: "Frontend Developer",
    company: "Tech Solutions",
    location: "Lahore, Pakistan",
    type: "Full Time",
    salary: "80,000 - 120,000 PKR",
    skills: ["React", "JavaScript", "Tailwind CSS"],
    description:
      "Build responsive user interfaces and create accessible web experiences using modern frontend technologies.",
  },
  {
    title: "Backend Developer",
    company: "Digital Systems",
    location: "Islamabad, Pakistan",
    type: "Full Time",
    salary: "100,000 - 150,000 PKR",
    skills: ["Node.js", "Express", "MongoDB"],
    description:
      "Develop backend APIs, manage database operations, and build reliable server-side applications.",
  },
  {
    title: "UI/UX Designer",
    company: "Creative Studio",
    location: "Remote",
    type: "Remote",
    salary: "60,000 - 100,000 PKR",
    skills: ["Figma", "Prototyping", "UI Design"],
    description:
      "Design user-friendly interfaces, create prototypes, and improve digital product experiences.",
  },
];

export default function JobsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedJob, setSelectedJob] =
    useState<(typeof jobs)[number] | null>(null);

  const filteredJobs = useMemo(() => {
    const query = search.trim().toLowerCase();

    return jobs.filter((job) => {
      const searchableText = [
        job.title,
        job.company,
        job.location,
        job.type,
        ...job.skills,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch = searchableText.includes(query);
      const matchesFilter =
        filter === "All" || job.type === filter;

      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-12">
      <section className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-blue-600">
            CareerMatch AI
          </p>

          <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Find Your Dream Job
          </h1>

          <p className="mx-auto max-w-2xl text-slate-600">
            Explore opportunities that match your skills and career goals.
          </p>
        </div>

        {/* Functional Search */}
        <form
          className="mb-5 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search job title, company, location or skills..."
            aria-label="Search jobs"
            className="min-w-0 flex-1 rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-7 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Search Jobs
          </button>
        </form>

        {/* Job Type Filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          {["All", "Full Time", "Remote"].map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setFilter(type)}
              aria-pressed={filter === type}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                filter === type
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-slate-300 bg-white text-slate-700 hover:border-blue-500"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="mb-6 flex items-center justify-between gap-3">
          <h2 className="text-xl font-bold text-slate-900">
            Latest Opportunities
          </h2>

          <span className="text-sm text-slate-500">
            {filteredJobs.length}{" "}
            {filteredJobs.length === 1 ? "job" : "jobs"} found
          </span>
        </div>

        {/* Jobs List */}
        {filteredJobs.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredJobs.map((job) => (
              <article
                key={job.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex items-start justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl font-bold text-blue-700">
                    {job.company.charAt(0)}
                  </div>

                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    {job.type}
                  </span>
                </div>

                <h3 className="mb-2 text-xl font-bold text-slate-900">
                  {job.title}
                </h3>

                <p className="mb-3 text-slate-600">{job.company}</p>

                <p className="mb-2 text-sm text-slate-500">
                  📍 {job.location}
                </p>

                <p className="mb-5 text-sm font-semibold text-blue-700">
                  {job.salary}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-slate-100 px-2.5 py-1.5 text-xs text-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedJob(job)}
                  className="w-full rounded-lg border border-blue-600 px-4 py-3 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
                >
                  View Details
                </button>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-white px-5 py-12 text-center">
            <h3 className="text-lg font-semibold text-slate-900">
              No jobs found
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Try another keyword or change the job type filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setFilter("All");
              }}
              className="mt-5 rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white hover:bg-blue-700"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* Job Details Dialog */}
      {selectedJob && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setSelectedJob(null)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="job-dialog-title"
            className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-blue-600">
                  {selectedJob.company}
                </p>

                <h2
                  id="job-dialog-title"
                  className="mt-2 text-2xl font-bold text-slate-900"
                >
                  {selectedJob.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setSelectedJob(null)}
                aria-label="Close job details"
                className="rounded-lg px-3 py-1 text-2xl text-slate-500 hover:bg-slate-100"
              >
                ×
              </button>
            </div>

            <div className="mt-5 space-y-3 text-sm text-slate-600">
              <p>📍 {selectedJob.location}</p>
              <p>Employment: {selectedJob.type}</p>
              <p className="font-semibold text-blue-700">
                Salary: {selectedJob.salary}
              </p>
            </div>

            <h3 className="mt-6 font-semibold text-slate-900">
              Required Skills
            </h3>

            <div className="mt-3 flex flex-wrap gap-2">
              {selectedJob.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md bg-slate-100 px-3 py-2 text-sm text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>

            <h3 className="mt-6 font-semibold text-slate-900">
              Job Description
            </h3>

            <p className="mt-2 leading-7 text-slate-600">
              {selectedJob.description}
            </p>

            <button
              type="button"
              onClick={() => setSelectedJob(null)}
              className="mt-7 w-full rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Close Details
            </button>
          </section>
        </div>
      )}
    </main>
  );
}
