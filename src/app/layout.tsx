import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "shawnb.dev",
  description: "Shawn's personal website and portfolio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="flex min-h-screen flex-col items-center bg-gradient-to-b from-zinc-600 to-zinc-900 text-white">
        {/* Nav Bar */}
        {/* height of nav-bar (64px) */}
        <nav className="w-full bg-zinc-700 p-4">
          <div className="container mx-auto flex gap-8">
            {/* Logo/Home (shawnb.dev) */}
            <Link href="/" className="text-xl font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="mr-2 inline-block h-5 w-5 align-text-bottom"
                aria-hidden="true"
              >
                <path d="M10.707 2.293a1 1 0 0 0-1.414 0l-7 7A1 1 0 0 0 3 11h1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h2v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-6h1a1 1 0 0 0 .707-1.707l-7-7z" />
              </svg>
              shawnb<span className="text-zinc-400">.dev</span>
            </Link>
            <Link href="/projects" className="text-xl font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="mr-2 inline-block h-5 w-5 align-text-bottom"
                aria-hidden="true"
              >
                <path d="M2 6a2 2 0 0 1 2-2h4l2 2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6z" />
              </svg>
              Projects
            </Link>
            <Link href="/about" className="text-xl font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="mr-2 inline-block h-5 w-5 align-text-bottom"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-1 2.75a.75.75 0 011.5 0v5a.75.75 0 01-1.5 0v-5z"
                  clipRule="evenodd"
                />
              </svg>
              About
            </Link>
          </div>
        </nav>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
