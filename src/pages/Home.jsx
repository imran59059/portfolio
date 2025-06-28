import React from 'react';
import HeroSvg from '../assets/img/7118756_3426523.svg';
import svg2 from '../assets/img/7118756_3426523.svg';

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-8">
        {/* Left Content */}
        <div>
          <h1 className="mt-10 text-[var(--color-text-base)] text-4xl md:text-5xl font-bold leading-tight">
            Modern Web Interfaces Built with ReactJS
          </h1>
          <p className="mt-4 text-[var(--color-text-base)] text-lg">
            Delivering responsive, high-performance user experiences with clean, scalable code.
          </p>
        </div>

        {/* Right SVG */}
        <div className="flex justify-center">
          <div className="w-full max-w-md h-auto" />
          <img src={HeroSvg} alt="Illustration" className="w-full max-w-md h-auto" />
        </div>
      </div>

      {/* section 2 */}
      <h1 className='text-4xl my-5 text-center mt-20'>🚀 Skills Snapshot</h1>
      <div className="container mx-auto flex flex-wrap justify-center gap-10 px-4 py-10">
  {[
    {
      title: "👨‍💻 Frontend Development",
      items: [
        "ReactJS – Component-based architecture, hooks, and state management",
        "Tailwind CSS – Fast UI development with utility-first styling",
        "Framer Motion – Smooth animations and interactive transitions",
        "Redux Toolkit – Efficient and scalable state handling",
        "React Router – Seamless navigation in SPA applications",
      ],
    },
    {
      title: "🎨 UI/UX & Design Thinking",
      items: [
        "Pixel-perfect, responsive design implementation",
        "Mobile-first and accessibility-focused layouts",
        "Dark mode, theming, and dynamic styling",
      ],
    },
    {
      title: "🛠️ Tooling & Workflow",
      items: [
        "Vite & Webpack – Fast bundling and optimized builds",
        "ESLint & Prettier – Code quality and formatting consistency",
        "Git & GitHub – Version control and collaboration",
      ],
    },
    {
      title: "📈 Performance & Optimization",
      items: [
        "Lazy loading, code splitting, and memoization techniques",
        "SEO-friendly SPA structure",
        "Core Web Vitals awareness",
      ],
    },
    {
      title: "🌐 Basic Backend Integration",
      items: [
        "REST API integration using fetch or axios",
        "Familiarity with Node.js and Express for full-stack projects",
      ],
    },
  ].map((section) => (
    <div key={section.title} className="w-full sm:w-[48%] md:w-[30%] text-center sm:text-left border p-2 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold text-[var(--color-text-base)] mb-2">{section.title}</h2>
      <ul className="text-[var(--color-text-base)] text-sm space-y-2">
        {section.items.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
    </div>
  ))}
</div>

      <div className='py-5'>

      </div>
    </>
  );
};

export default Home;
