import React from 'react';
import {
  EnvelopeIcon,
  PhoneIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';
import {
  LinkedinIcon,
  GithubIcon,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[var(--color-bg-primary)] text-[var(--color-text-base)] text-center border-t border-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-3">About Me</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Imran Ali — a React developer passionate about crafting fast, beautiful, and user-friendly web experiences. Let's build something great together.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="flex flex-col">
                {['/', '/about', '/projects', '/contact', '/resume'].map((path, index) => (
                  <li key={path}>
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        isActive
                          ? 'text-[var(--color-text-hover)] font-bold'
                          : 'text-[var(--color-text-base)] font-medium'
                      }
                    >
                      {['Home', 'About', 'Projects', 'Contact', 'Resume'][index]}
                    </NavLink>
                  </li>
                ))}
              </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-3 text-sm flex flex-col items-center">
            <li className="flex items-center gap-2">
              <EnvelopeIcon className="h-5 w-5 text-indigo-400" />
              <a href="mailto:imranisactive@gmail.com" className="hover:text-[var(--color-text-hover)] transition">imranisactive@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-300 py-5 px-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} Imran Ali. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://www.linkedin.com/in/imranali59059/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-text-hover)] transition">
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a href="https://github.com/imran59059" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-text-hover)] transition">
            <GithubIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
