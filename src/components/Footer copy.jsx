import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[var(--color-bg-primary)] text-[var(--color-text-base)] py-10 px-6 border-t border-[var(--color-text-hover)]">
      <div className="text-center max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Column 1: Logo and Description */}
        <div>
          <h2 className="text-xl font-bold">Imran Ali</h2>
          <p className="mt-2 text-sm">
            Crafting clean and scalable front-end experiences using React, JavaScript, and modern UI libraries.
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><NavLink to="/" className="hover:text-[var(--color-primary)]">Home</NavLink></li>
            <li><NavLink to="/about" className="hover:text-[var(--color-primary)]">About</NavLink></li>
            <li><NavLink to="/projects" className="hover:text-[var(--color-primary)]">Projects</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-[var(--color-primary)]">Contact</NavLink></li>
          </ul>
        </div>

        {/* Column 3: Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Connect</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="https://github.com/imran59059/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/imranali59059/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="mailto:imranisactive@gmail.com">Email</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 text-center text-xs text-[var(--color-text-base)] border-t border-gray-300 pt-4">
        © {new Date().getFullYear()} Imran Ali. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
