import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Project Vela — Fund your dream trip with credit card points",
  description:
    "Tell us your dream trip. We'll build a 6–12 month plan to earn the points needed using strategic credit card applications and spending.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-900">
        <header className="sticky top-0 z-30 backdrop-blur-md bg-white/80 border-b border-slate-200/70">
          <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
            <Link
              href="/"
              className="font-semibold tracking-tight text-lg flex items-center gap-2.5"
            >
              <span
                aria-hidden
                className="inline-block h-2.5 w-2.5 rounded-full bg-indigo-600"
              />
              Vela
            </Link>
            <nav className="flex items-center gap-7 text-sm">
              <Link
                href="/example-plan"
                className="text-slate-600 hover:text-slate-900 transition"
              >
                Example plan
              </Link>
              <Link
                href="/intake"
                className="rounded-full bg-slate-900 text-white px-4 py-1.5 font-medium hover:bg-slate-700 transition"
              >
                Start
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1 flex flex-col">{children}</main>

        <footer className="border-t border-slate-200">
          <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden
                className="inline-block h-2 w-2 rounded-full bg-indigo-600"
              />
              <span>© 2026 Project Vela</span>
            </div>
            <p className="text-slate-400">Built one weekend at a time.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
