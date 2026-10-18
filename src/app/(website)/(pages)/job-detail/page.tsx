
const job = {
  title: "Frontend Developer",
  company: "CareerTech Solutions",
  location: "Lahore, Pakistan",
  type: "Full-time",
  salary: "PKR 60,000 – 100,000 / month",
  skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
};

export default function JobDetailPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <a
          href="/jobs"
          className="font-semibold text-blue-700 hover:underline"
        >
          ← Back to Jobs
        </a>

        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
            {job.type}
          </span>

          <h1 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
            {job.title}
          </h1>

          <p className="mt-3 text-lg font-medium text-slate-600">
            {job.company}
          </p>

          <div className="mt-6 grid gap-4 rounded-xl bg-slate-50 p-5 sm:grid-cols-2">
            <div>
              <p className="text-sm text-slate-500">Location</p>
              <p className="mt-1 font-semibold text-slate-800">
                {job.location}
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Monthly Salary</p>
              <p className="mt-1 font-semibold text-slate-800">
                {job.salary}
              </p>
            </div>
          </div>

          <h2 className="mt-8 text-xl font-bold text-slate-900">
            Job Description
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            We are looking for a motivated frontend developer to help build
            responsive, accessible, and user-friendly web applications.
            Candidates should enjoy problem-solving and learning modern
            web technologies.
          </p>

          <h2 className="mt-8 text-xl font-bold text-slate-900">
            Required Skills
          </h2>

          <div className="mt-4 flex flex-wrap gap-3">
            {job.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg bg-blue-50 px-4 py-2 font-medium text-blue-700"
              >
                {skill}
              </span>
            ))}
          </div>

          <a
            href="/login"
            className="mt-8 inline-block rounded-lg bg-blue-700 px-7 py-3 font-semibold text-white transition hover:bg-blue-800"
          >
            Login to Apply
          </a>
        </section>
      </div>
    </main>
  );
}
