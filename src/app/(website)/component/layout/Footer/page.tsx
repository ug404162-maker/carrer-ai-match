
export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Website Information */}
          <div>
            <h2 className="text-2xl font-bold mb-3">
              CareerMatch AI
            </h2>
            <p className="text-gray-400 text-sm leading-6">
              Find the right job with AI-powered job
              recommendations and connect with the right
              candidates for your career.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/jobs" className="hover:text-white">
                  Jobs
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Contact Us
            </h3>
            <p className="text-gray-400 text-sm mb-2">
              Find opportunities and build your career
              with CareerMatch AI.
            </p>
            <a
              href="mailto:support@careermatch.ai"
              className="text-gray-400 text-sm hover:text-white"
            >
              Contact Support
            </a>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-8 pt-5 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} CareerMatch AI.
            All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
