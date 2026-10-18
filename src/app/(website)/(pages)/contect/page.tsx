
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <p className="mb-3 font-semibold tracking-widest text-blue-600">
            CAREERMATCH AI
          </p>

          <h1 className="text-4xl font-bold text-slate-900">
            Contact Us
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            Have questions about finding a job or hiring candidates?
            Send us a message and we will be happy to help.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <section className="rounded-2xl bg-blue-700 p-8 text-white shadow-lg">
            <h2 className="mb-4 text-2xl font-bold">
              Get in Touch
            </h2>

            <p className="mb-8 leading-7 text-blue-100">
              We help candidates discover opportunities and employers
              find suitable talent with AI-powered matching.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="mt-1 text-blue-100">
                  support@careermatch.example
                </p>
              </div>

              <div>
                <h3 className="font-semibold">Office Hours</h3>
                <p className="mt-1 text-blue-100">
                  Monday – Friday, 9 AM – 5 PM
                </p>
              </div>

              <div>
                <h3 className="font-semibold">Our Mission</h3>
                <p className="mt-1 text-blue-100">
                  Connecting the right people with the right careers.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">
              Send a Message
            </h2>

            <form className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-medium text-slate-700"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-medium text-slate-700"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block font-medium text-slate-700"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Enter message subject"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-medium text-slate-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Write your message..."
                  className="w-full resize-y rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <button
                type="button"
                className="w-full rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
