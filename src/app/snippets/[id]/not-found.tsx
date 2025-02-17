import Link from "next/link";

export default function SnippetNotFoundPage() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-black text-white">
      <h1 className="text-6xl font-bold tracking-wide">404</h1>
      <p className="mt-4 text-xl">
        These are not the snippets you are looking for.
      </p>

      <div className="relative mt-8 flex items-center justify-center">
        <svg viewBox="0 0 200 200" className="h-40 w-40 animate-pulse">
          <defs>
            <radialGradient id="glitch" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="black" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="100" r="80" fill="url(#glitch)" opacity="0.6" />
        </svg>
      </div>

      <Link
        href="/"
        className="mt-6 rounded-lg border border-white px-6 py-3 text-lg transition-all hover:bg-white hover:text-black"
      >
        Go Home Kid
      </Link>
    </div>
  );
}
