"use client"
import Link from "next/link";
import ThemeSwitcher from "./theme-toggle";

export default function Navigation() {
  return (
    <header className="flex items-center justify-between p-2">
      <div className="flex items-center justify-between gap-12">
        <Link href="/" className="text-2xl font-semibold font-serif">
          BuildXSkill
        </Link>

        <nav>
          <ul className="flex items-center justify-between space-x-4">
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/dashboard">DashBoard</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center justify-between">
        <ThemeSwitcher />
        <Link
          href="/signin"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Sign in
        </Link>

        <Link
          href="/signup"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Sign up
        </Link>
      </div>
    </header>
  );
}
