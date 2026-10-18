
import Link from "next/link";

const jobs = [
  {
    title: "Frontend Developer",
    company: "Digital Solutions",
    type: "Full-time",
    skills: "React · JavaScript · CSS",
    salary: "$800–1,200 / month",
  },
  {
    title: "Junior Backend Developer",
    company: "TechNova",
    type: "Remote",
    skills: "Node.js · Express · MongoDB",
    salary: "$700–1,000 / month",
  },
  {
    title: "UI/UX Designer",
    company: "Creative Studio",
    type: "Full-time",
    skills: "Figma · Wireframes · UI Design",
    salary: "$600–900 / month",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F6F2E9] text-[#292929]">

      {/* Hero Section */}
      <section className="border-b border-[#E8E0D2]">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-block border border-[#B59A63]/50 px-3 py-2 text-xs font-semibold uppercase tracking-widest text-[#783B46]">
              Your Career, Reimagined
            </span>

            <h1 className="mt-6 font-serif text-5xl font-bold leading-tight text-[#243247] md:text-6xl">
              Find work that fits
              <span className="italic text-[#783B46]">
                {" "}who you are.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-[#5E5B54]">
              Discover meaningful opportunities with AI-powered CV analysis,
              personalized job recommendations, and smarter candidate matching.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/jobs"
                className="bg-[#243247] px-6 py-3 font-semibold text-white transition hover:bg-[#192434]"
              >
                Explore Jobs →
              </Link>

              <Link
                href="/upload-cv"
                className="border border-[#D4CAB8] bg-white px-6 py-3 font-semibold text-[#243247] hover:border-[#B59A63]"
              >
                Upload Your CV
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-8 border-t border-[#E8E0D2] pt-6">
              <div>
                <p className="font-serif text-2xl font-bold text-[#243247]">
                  AI
                </p>
                <p className="mt-1 text-xs text-[#5E5B54]">
                  Smart Matching
                </p>
              </div>

              <div>
                <p className="font-serif text-2xl font-bold text-[#243247]">
                  CV
                </p>
                <p className="mt-1 text-xs text-[#5E5B54]">
                  Profile Analysis
                </p>
              </div>

              <div>
                <p className="font-serif text-2xl font-bold text-[#243247]">
                  24/7
                </p>
                <p className="mt-1 text-xs text-[#5E5B54]">
                  Career Access
                </p>
              </div>
            </div>
          </div>

          {/* Career Assistant Card */}
          <div className="border border-[#E8E0D2] bg-white p-5 shadow-xl shadow-[#243247]/5 sm:p-8">
            <div className="flex items-center justify-between border-b border-[#E8E0D2] pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#B59A63]">
                  Career Assistant
                </p>

                <h2 className="mt-2 font-serif text-2xl font-bold text-[#243247]">
                  Your next opportunity
                </h2>
              </div>

              <span className="text-3xl">✦</span>
            </div>

            <div className="mt-6 bg-[#F6F2E9] p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#5E5B54]">
                Recommended Match
              </p>

              <h3 className="mt-2 text-lg font-bold text-[#243247]">
                Frontend Developer
              </h3>

              <p className="mt-1 text-sm text-[#5E5B54]">
                Digital Solutions · Remote
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {["React", "JavaScript", "CSS"].map((skill) => (
                  <span
                    key={skill}
                    className="border border-[#D4CAB8] bg-white px-3 py-1 text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <Link
                href="/jobs"
                className="mt-5 inline-flex font-semibold text-[#783B46] hover:underline"
              >
                View Opportunities →
              </Link>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <Link
                href="/cv-analysis"
                className="border border-[#E8E0D2] p-4 hover:border-[#B59A63]"
              >
                <span className="text-xl">▤</span>
                <p className="mt-2 font-semibold text-[#243247]">
                  CV Analysis
                </p>
                <p className="mt-1 text-xs text-[#5E5B54]">
                  Review your profile
                </p>
              </Link>

              <Link
                href="/recommended-jobs"
                className="border border-[#E8E0D2] p-4 hover:border-[#B59A63]"
              >
                <span className="text-xl">⌕</span>
                <p className="mt-2 font-semibold text-[#243247]">
                  Job Matching
                </p>
                <p className="mt-1 text-xs text-[#5E5B54]">
                  Discover relevant jobs
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#783B46]">
              Handpicked Opportunities
            </p>

            <h2 className="mt-3 font-serif text-3xl font-bold text-[#243247] md:text-4xl">
              Explore featured jobs
            </h2>
          </div>

          <Link
            href="/jobs"
            className="font-semibold text-[#783B46] hover:underline"
          >
            View all jobs →
          </Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {jobs.map((job) => (
            <article
              key={job.title}
              className="border border-[#E8E0D2] bg-white p-6 transition hover:-translate-y-1 hover:border-[#B59A63] hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex h-11 w-11 items-center justify-center bg-[#F6F2E9] text-xl text-[#243247]">
                  ▣
                </div>

                <span className="bg-[#F6F2E9] px-3 py-1 text-xs text-[#5E5B54]">
                  {job.type}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-bold text-[#243247]">
                {job.title}
              </h3>

              <p className="mt-1 text-sm text-[#5E5B54]">
                {job.company}
              </p>

              <p className="mt-4 text-xs leading-6 text-[#5E5B54]">
                {job.skills}
              </p>

              <div className="mt-5 border-t border-[#E8E0D2] pt-4">
                <p className="text-sm font-semibold text-[#243247]">
                  {job.salary}
                </p>

                <Link
                  href="/jobs"
                  className="mt-4 inline-flex font-semibold text-[#783B46] hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Candidate and Employer Sections */}
      <section className="bg-[#243247] px-5 py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#D7BD83]">
              For Job Seekers
            </p>

            <h2 className="mt-3 font-serif text-3xl font-bold">
              Let your skills open doors.
            </h2>

            <p className="mt-4 max-w-md leading-7 text-slate-300">
              Upload your CV, organize your professional profile, and discover
              opportunities suited to your background.
            </p>

            <Link
              href="/candidate-dashboard"
              className="mt-6 inline-block bg-[#F6F2E9] px-5 py-3 font-semibold text-[#243247] hover:bg-white"
            >
              Candidate Dashboard →
            </Link>
          </div>

          <div className="border border-white/20 bg-white/5 p-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#D7BD83]">
              For Employers
            </p>

            <h2 className="mt-3 font-serif text-3xl font-bold">
              Meet your next great hire.
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Publish vacancies, review applicants, and find candidates whose
              skills fit your team's requirements.
            </p>

            <Link
              href="/employer-dashboard"
              className="mt-6 inline-block bg-[#783B46] px-5 py-3 font-semibold text-white hover:bg-[#622e37]"
            >
              Employer Dashboard →
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
