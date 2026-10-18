
export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 font-semibold text-blue-200">
            Welcome to CareerMatch AI
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Find the Right Job with the Power of AI
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Analyze your CV, discover suitable jobs, and connect your skills
            with career opportunities through CareerMatch AI.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/jobs"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50"
            >
              Explore Jobs
            </a>

            <a
              href="/upload-cv"
              className="rounded-lg border border-white px-6 py-3 font-semibold text-white hover:bg-white/10"
            >
              Upload Your CV
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center text-3xl font-bold text-slate-900">
          How CareerMatch AI Helps You
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "CV Analysis",
              description:
                "Review your skills and discover ways to improve your CV.",
              link: "/cv-analysis",
            },
            {
              title: "Job Recommendations",
              description:
                "Explore job opportunities related to your skills and interests.",
              link: "/recommended-jobs",
            },
            {
              title: "Employer Dashboard",
              description:
                "Create job listings and explore suitable candidates.",
              link: "/employer-dashboard",
            },
          ].map((item) => (
            <a
              key={item.title}
              href={item.link}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-blue-700">
                {item.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                {item.description}
              </p>
              <span className="mt-5 inline-block font-semibold text-blue-700">
                Learn more →
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
