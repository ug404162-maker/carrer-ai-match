
const stats = [
  { label: "Applied Jobs", value: "12", icon: "📨" },
  { label: "Profile Views", value: "48", icon: "👁️" },
  { label: "AI Job Matches", value: "8", icon: "🤖" },
  { label: "Interviews", value: "3", icon: "📅" },
];

const applications = [
  {
    role: "Frontend Developer",
    company: "Tech Solutions",
    date: "Oct 15, 2026",
    status: "Under Review",
  },
  {
    role: "Junior React Developer",
    company: "Digital Studio",
    date: "Oct 12, 2026",
    status: "Accepted",
  },
  {
    role: "Web Developer",
    company: "Creative Labs",
    date: "Oct 10, 2026",
    status: "Applied",
  },
];

const recommendedJobs = [
  { title: "React Developer", company: "Pixel Tech", match: 95 },
  { title: "Frontend Engineer", company: "WebWorks", match: 88 },
  { title: "UI Developer", company: "Bright Apps", match: 82 },
];

export default function CandidateDashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="mb-2 font-semibold text-blue-600">
              CAREERMATCH AI
            </p>
            <h1 className="text-3xl font-bold text-slate-900">
              Candidate Dashboard
            </h1>
            <p className="mt-2 text-slate-600">
              Track your applications and discover your next opportunity.
            </p>
          </div>

          <a
            href="/upload-cv"
            className="rounded-lg bg-blue-600 px-5 py-3 text-center font-semibold text-white hover:bg-blue-700"
          >
            + Upload CV
          </a>
        </header>

        <section className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 text-2xl">{stat.icon}</div>
              <p className="text-sm text-slate-500">{stat.label}</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">
                {stat.value}
              </p>
            </article>
          ))}
        </section>

        <section className="mb-8 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
            <h2 className="mb-5 text-xl font-bold text-slate-900">
              Recent Applications
            </h2>

            <div className="space-y-4">
              {applications.map((application) => (
                <article
                  key={application.role}
                  className="flex flex-col justify-between gap-3 rounded-xl border border-slate-100 p-4 sm:flex-row sm:items-center"
                >
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {application.role}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      {application.company}
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Applied: {application.date}
                    </p>
                  </div>

                  <span className={`w-fit rounded-full px-3 py-1.5 text-xs font-semibold ${
                    application.status === "Accepted"
                      ? "bg-green-100 text-green-700"
                      : application.status === "Under Review"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-blue-100 text-blue-700"
                  }`}>
                    {application.status}
                  </span>
                </article>
              ))}
            </div>
          </div>

          <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-2 text-xl font-bold text-slate-900">
              Profile Completion
            </h2>
            <p className="mb-5 text-sm text-slate-500">
              Complete your profile to improve your job matches.
            </p>

            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-medium text-slate-700">
                Your progress
              </span>
              <span className="font-bold text-blue-600">75%</span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-3/4 rounded-full bg-blue-600" />
            </div>

            <a
              href="/upload-cv"
              className="mt-6 block rounded-lg border border-blue-600 px-4 py-3 text-center font-semibold text-blue-600 hover:bg-blue-50"
            >
              Improve Profile
            </a>
          </aside>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                AI Recommended Jobs
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Opportunities that may match your skills.
              </p>
            </div>

            <a
              href="/recommended-jobs"
              className="font-semibold text-blue-600 hover:underline"
            >
              View All →
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {recommendedJobs.map((job) => (
              <article
                key={job.title}
                className="rounded-xl border border-slate-200 p-5"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 font-bold text-blue-700">
                  {job.company.charAt(0)}
                </div>

                <h3 className="font-bold text-slate-900">{job.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{job.company}</p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm text-slate-600">AI Match</span>
                  <span className="font-bold text-green-600">
                    {job.match}%
                  </span>
                </div>

                <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-green-500"
                    style={{ width: `${job.match}%` }}
                  />
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
