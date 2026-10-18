
"use client";

import { useState } from "react";

export default function PostJobsPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <p className="font-semibold text-blue-700">CareerMatch AI</p>

        <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
          Post a New Job
        </h1>

        <p className="mt-3 text-slate-600">
          Share your job requirements and help candidates discover your
          opportunity.
        </p>

        <form
          className="mt-8 space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          <div>
            <label htmlFor="title" className="mb-2 block font-medium text-slate-700">
              Job Title
            </label>
            <input
              id="title"
              name="title"
              required
              placeholder="e.g. Frontend Developer"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
            />
          </div>

          <div>
            <label htmlFor="company" className="mb-2 block font-medium text-slate-700">
              Company Name
            </label>
            <input
              id="company"
              name="company"
              required
              placeholder="Enter company name"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="location" className="mb-2 block font-medium text-slate-700">
                Location
              </label>
              <input
                id="location"
                name="location"
                required
                placeholder="e.g. Lahore or Remote"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label htmlFor="salary" className="mb-2 block font-medium text-slate-700">
                Monthly Salary
              </label>
              <input
                id="salary"
                name="salary"
                placeholder="e.g. PKR 60,000"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>
          </div>

          <div>
            <label htmlFor="skills" className="mb-2 block font-medium text-slate-700">
              Required Skills
            </label>
            <input
              id="skills"
              name="skills"
              required
              placeholder="JavaScript, React, HTML, CSS"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
            />
          </div>

          <div>
            <label htmlFor="description" className="mb-2 block font-medium text-slate-700">
              Job Description
            </label>
            <textarea
              id="description"
              name="description"
              required
              rows={5}
              placeholder="Describe responsibilities and requirements..."
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
          >
            Submit Job
          </button>

          {submitted && (
            <p className="rounded-lg bg-amber-50 p-4 text-amber-800">
              Demo form submitted. The job is not saved to a database yet.
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
