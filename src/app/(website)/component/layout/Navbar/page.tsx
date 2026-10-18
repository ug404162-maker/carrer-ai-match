
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Jobs", href: "/jobs" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E8E0D2] bg-[#F6F2E9]/95">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center bg-[#243247] font-serif text-xl font-bold text-white">
            C
          </span>
          <span className="text-lg font-bold text-[#243247] sm:text-xl">
            CareerMatch
            <span className="text-[#B59A63]"> AI</span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#292929] transition hover:text-[#783B46]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <Link
            href="/login"
            className="hidden text-sm font-semibold text-[#243247] hover:text-[#783B46] sm:block"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className="bg-[#783B46] px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-[#622e37] sm:px-5"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}
