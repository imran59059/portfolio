import React from 'react';
import { RocketLaunchIcon } from '@heroicons/react/24/outline';

const Projects = () => {
  return (
    <section className="py-43 flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <RocketLaunchIcon className="h-14 w-14 mx-auto text-indigo-600 animate-bounce mb-4" />
        <h1 className="text-4xl font-bold text-[var(--color-text-hover)] mb-2">Projects Page</h1>
        <p className="text-gray-600 text-lg">🚧 Coming Soon! I'm working on something awesome.</p>
        <p className="text-gray-500 mt-2 text-sm">Stay tuned – projects will be live here shortly!</p>
      </div>
    </section>
  );
};

export default Projects;
