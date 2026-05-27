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
  title: "Mingjing Zhang — Portfolio",
  description: "Portfolio site of Mingjing Zhang, a software engineering student at CSTU.",
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
];

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
      <body className="min-h-full flex flex-col bg-white text-zinc-900">
        <nav className="border-b border-zinc-200 bg-white">
          <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
            <Link href="/" className="font-semibold tracking-tight">
              Mingjing Zhang
            </Link>
            <ul className="flex gap-6 text-sm">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-zinc-600 transition-colors hover:text-zinc-900"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-zinc-200">
          <div className="mx-auto max-w-3xl px-6 py-6 text-center text-sm text-zinc-500">
            © {new Date().getFullYear()} Mingjing Zhang. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
