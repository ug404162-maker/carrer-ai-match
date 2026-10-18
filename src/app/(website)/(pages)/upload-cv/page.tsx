
"use client";

import { useState } from "react";

export default function UploadCVPage() {
  const [fileName, setFileName] = useState("");
  const [message, setMessage] = useState("");

  function handleUpload(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!fileName) {
      setMessage("Please select your CV file first.");
      return;
    }

    setMessage(
      "File selected successfully. Actual CV analysis will be added later."
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <p className="font-semibold text-blue-700">CareerMatch AI</p>

        <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
          Upload Your CV
        </h1>

        <p className="mt-3 leading-7 text-slate-600">
          Select your CV to prepare for skill analysis and personalized job
          recommendations.
        </p>

        <form
          onSubmit={handleUpload}
          className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-10"
        >
          <div className="rounded-xl border-2 border-dashed border-blue-300 bg-blue-50/50 p-8 text-center md:p-12">
            <div className="text-4xl" aria-hidden="true">
              📄
            </div>

            <h2 className="mt-4 text-xl font-bold text-slate-900">
              Choose your CV file
            </h2>

            <p className="mt-2 text-sm text-slate-600">
              Supported formats: PDF, DOC, and DOCX
            </p>

            <label
              htmlFor="cv-file"
              className="mt-6 inline-block cursor-pointer rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800"
            >
              Select File
            </label>

            <input
              id="cv-file"
              type="file"
              accept=".pdf,.doc,.docx"
              className="sr-only"
              onChange={(event) => {
                const file = event.target.files?.[0];

                if (!file) return;

                const validFile =
                  /\.(pdf|doc|docx)$/i.test(file.name);

                if (!validFile) {
                  setFileName("");
                  setMessage("Please choose a PDF, DOC, or DOCX file.");
                  return;
                }

                setFileName(file.name);
                setMessage("");
              }}
            />

            {fileName && (
              <p className="mt-4 break-all font-medium text-slate-700">
                Selected: {fileName}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800"
          >
            Continue to CV Analysis
          </button>

          {message && (
            <p
              aria-live="polite"
              className="mt-4 rounded-lg bg-blue-50 p-4 text-sm text-blue-800"
            >
              {message}
            </p>
          )}

          <p className="mt-4 text-center text-sm text-slate-500">
            Your file is only selected in this demo; it is not uploaded to a
            server yet.
          </p>
        </form>

        <div className="mt-6 text-center">
          <a
            href="/cv-analysis"
            className="font-semibold text-blue-700 hover:underline"
          >
            Go to CV Analysis →
          </a>
        </div>
      </div>
    </main>
  );
}
