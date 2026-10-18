
const recommendedJobs = [
  {
    title: "Frontend Developer",
    company: "TechVision Solutions",
    location: "Lahore / Remote",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    match: 92,
    salary: "PKR 60,000–100,000",
  },
  {
    title: "Junior Web Developer",
    company: "Digital Future",
    location: "Islamabad",
    skills: ["HTML", "CSS", "JavaScript"],
    match: 85,
    salary: "PKR 45,000–70,000",
  },
  {
    title: "React Developer Intern",
    company: "CodeWorks",
    location: "Remote",
    skills: ["React", "JavaScript", "Git"],
    match: 78,
    salary: "Paid Internship",
  },
];

export default function RecommendedJobsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <p className="font-semibold text-blue-700">CareerMatch AI</p>

        <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
          Recommended Jobs
        </h1>

        <p className="mt-3 max-w-2xl leading-7 text-slate-600">
          Explore job opportunities that may match your skills and career
          interests. These match scores are sample values for demonstration.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {recommendedJobs.map((job) => (
            <article
              key={job.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    {job.title}
                  </h2>
                  <p className="mt-2 text-slate-600">{job.company}</p>
                </div>

                <div className="rounded-xl bg-green-50 px-4 py-3 text-center">
                  <p className="text-2xl font-bold text-green-700">
                    {job.match}%
                  </p>
                  <p className="text-xs font-medium text-green-700">
                    Sample Match
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm text-slate-500">
                Location: {job.location}
              </p>

              <p className="mt-2 font-semibold text-slate-800">
                {job.salary}
              </p>

              <h3 className="mt-5 font-semibold text-slate-800">
                Relevant Skills
              </h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href="/job-detail"
                className="mt-6 inline-block rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800"
              >
                View Job Details
              </a>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-blue-100 bg-blue-50 p-5 text-blue-900">
          <h2 className="font-bold">Improve Your Recommendations</h2>
          <p className="mt-2 text-sm leading-6">
            Upload your CV and review your skills to explore more relevant
            opportunities.
          </p>
          <a
            href="/upload-cv"
            className="mt-3 inline-block font-semibold underline"
          >
            Upload CV
          </a>
        </div>
      </div>
    </main>
  );
}
