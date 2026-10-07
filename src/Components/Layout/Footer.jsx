import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-blue-900 bg-slate-950 text-slate-300">
      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">

        {/* Brand Section */}
        <div>
          <Link
            to="/"
            className="text-2xl font-bold tracking-wide text-blue-400"
          >
            API<span className="text-white">App</span>
          </Link>

          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
            Learn and explore API data fetching using React, Axios,
            useEffect and TanStack Query.
          </p>

          {/* Small Badge */}
          <div className="mt-5 inline-block rounded-full border border-blue-500/30 bg-blue-600/10 px-4 py-2 text-sm text-blue-400">
            React Developer Project
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">
            <li>
              <Link
                to="/"
                className="transition hover:text-blue-400"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/trad"
                className="transition hover:text-blue-400"
              >
                Traditional Fetch
              </Link>
            </li>

            <li>
              <Link
                to="/rq"
                className="transition hover:text-blue-400"
              >
                React Query
              </Link>
            </li>
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Technologies
          </h3>

          <ul className="space-y-3 text-sm text-slate-400">
            <li>React.js</li>
            <li>Axios</li>
            <li>JavaScript</li>
            <li>TanStack Query</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>

        {/* Contact / Project Info */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            About Project
          </h3>

          <p className="text-sm leading-6 text-slate-400">
            A learning project created to understand traditional
            API fetching and modern server-state management.
          </p>

          <div className="mt-5 rounded-lg border border-slate-700 bg-slate-900 p-4">
            <p className="text-sm font-medium text-blue-400">
              API Source
            </p>

            <p className="mt-1 text-sm text-slate-400">
              JSONPlaceholder
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-slate-500">
            © 2026{" "}
            <span className="font-semibold text-blue-400">
              API App
            </span>
            . All Rights Reserved.
          </p>

          <p className="text-sm text-slate-500">
            Built with <span className="text-blue-400">React</span> 💙
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;