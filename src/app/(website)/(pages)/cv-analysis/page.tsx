export default function CVAnalysisPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <section className="rounded-2xl bg-white p-8 shadow-md">
          <p className="mb-3 font-semibold text-blue-600">
            CareerMatch AI
          </p>

          <h1 className="mb-4 text-3xl font-bold text-slate-900">
            AI CV Analysis
          </h1>

          <p className="mb-8 leading-7 text-slate-600">
            Review your CV, identify your strengths, and discover skills
            that can help you improve your job opportunities.
          </p>

          <div className="rounded-xl border-2 border-dashed border-slate-300 p-8 text-center">
            <h2 className="mb-3 text-xl font-semibold text-slate-800">
              Upload Your CV
            </h2>

            <p className="mb-5 text-slate-500">
              Select your CV file to get started with your analysis.
            </p>

            <a
              href="/upload-cv"
              className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Go to CV Upload
            </a>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl bg-blue-50 p-5">
              <h3 className="mb-2 font-semibold text-slate-800">
                Skills Review
              </h3>
              <p className="text-sm text-slate-600">
                Understand the skills highlighted in your CV.
              </p>
            </div>

            <div className="rounded-xl bg-purple-50 p-5">
              <h3 className="mb-2 font-semibold text-slate-800">
                CV Improvement
              </h3>
              <p className="text-sm text-slate-600">
                Find areas where your CV can be improved.
              </p>
            </div>

            <div className="rounded-xl bg-green-50 p-5">
              <h3 className="mb-2 font-semibold text-slate-800">
                Job Matching
              </h3>
              <p className="text-sm text-slate-600">
                Explore jobs that may fit your skills.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}