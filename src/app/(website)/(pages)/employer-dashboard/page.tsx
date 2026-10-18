export default function EmployerDashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-3 text-3xl font-bold text-slate-900">
          Employer Dashboard
        </h1>

        <p className="mb-8 text-slate-600">
          Manage your job postings and discover suitable candidates with
          CareerMatch AI.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <a
            href="/post-jobs"
            className="rounded-xl bg-white p-6 shadow transition hover:shadow-lg"
          >
            <h2 className="mb-2 text-xl font-semibold text-blue-700">
              Post a Job
            </h2>
            <p className="text-slate-600">
              Create a new job listing and describe your requirements.
            </p>
          </a>

          <a
            href="/jobs"
            className="rounded-xl bg-white p-6 shadow transition hover:shadow-lg"
          >
            <h2 className="mb-2 text-xl font-semibold text-blue-700">
              Browse Jobs
            </h2>
            <p className="text-slate-600">
              View the job listings available on CareerMatch AI.
            </p>
          </a>

          <a
            href="/about"
            className="rounded-xl bg-white p-6 shadow transition hover:shadow-lg"
          >
            <h2 className="mb-2 text-xl font-semibold text-blue-700">
              AI Candidate Matching
            </h2>
            <p className="text-slate-600">
              Learn how AI can help identify candidates whose skills match a job.
            </p>
          </a>
        </div>
      </div>
    </main>
  );
}