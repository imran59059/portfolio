import React from 'react';
import { DocumentTextIcon } from '@heroicons/react/24/outline';

const Resume = () => {
  return (
    <section className="py-43 flex flex-col items-center justify-center bg-[var(--color-bg-primary)] px-4">
      <div className="text-center">
        <DocumentTextIcon className="h-14 w-14 mx-auto text-purple-600 animate-pulse mb-4" />
        <h1 className="text-4xl font-bold text-[var(--color-text-hover)] mb-2">Resume Page</h1>
        <p className="text-gray-600 text-lg">📄 Coming Soon! I’m polishing my resume for you.</p>
        <p className="text-gray-500 mt-2 text-sm">Check back soon or contact me directly for details.</p>
      </div>
    </section>
  );
};

export default Resume;
