import HeroSvg from '../assets/img/7118756_3426523.svg';
import reactjsIcon from '../assets/img/reacticon.png';
import tailwindcssIcon from '../assets/img/tailwindcss.png';
import framerMotion from '../assets/img/Framer Motion.svg';
import reduxToolkit from '../assets/img/redux toolkit.png';
import reactrouter from '../assets/img/reactrouter.svg';
import nextjs from '../assets/img/nextjs.jpg';
import typescript from '../assets/img/typescript.png';
import rtkquery from '../assets/img/rtk-query.png';

const skills = [
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
];

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-8 md:w-3/4 mx-auto">
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
      <div>
        <div className='md:w-3/4 mx-auto md:px-4'>
          <h1 className='flex items-center justify-center text-4xl my-5 mt-20 text-center gap-2'>
            <span className='text-5xl'>🚀</span>
            <span className='text-[var(--color-text-base)] underline decoration-wavy decoration-indigo-500 underline-offset-8'>
              Skills Snapshot
            </span>
          </h1>

          <div className='px-5 md:px-0'>
            <h1 className='text-2xl my-5 text-left mt-20'>👨‍💻 <span className='text-[var(--color-text-base)] underline decoration-green-500 underline-offset-8'>Frontend Development</span></h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 text-[var(--color-text-base)] text-base/7'>
              <div className='flex flex-row'>
                <div className='basis-1/5'>
                  <img src={reactjsIcon} className='h-10 w-10 md:w-13 md:h-13 backdrop shadow-md rounded-full bg-cover bg-center p-1' alt="icon" />
                </div>
                <div className='basis-4/5 pl-2'>
                  <h1 className='font-bold'>ReactJS</h1>
                  <p >Component-based architecture, hooks, and state management</p>
                </div>
              </div>
              <div className='flex flex-row'>
                <div className='basis-1/5'>
                  <img src={typescript} className='h-10 w-10 md:w-13 md:h-13 backdrop shadow-md rounded-full bg-cover bg-center p-1' alt="icon" />
                </div>
                <div className='basis-4/5 pl-2'>
                  <h1 className='font-bold'>TypeScript </h1>
                  <p >Static typing for scalable and maintainable codebases</p>
                </div>
              </div>
              <div className='flex flex-row'>
                <div className='basis-1/5'>
                  <img src={tailwindcssIcon} className='h-10 w-10 md:w-13 md:h-13 backdrop shadow-md rounded-full bg-cover bg-center p-1' alt="icon" />
                </div>
                <div className='basis-4/5 pl-2'>
                  <h1 className='font-bold'>Tailwindcss</h1>
                  <p>Fast UI development with utility-first styling</p>
                </div>
              </div>
              <div className='flex flex-row'>
                <div className='basis-1/5'>
                  <img src={framerMotion} className='h-10 w-10 md:w-13 md:h-13 backdrop shadow-md rounded-full bg-cover bg-center p-1' alt="icon" />
                </div>
                <div className='basis-4/5 pl-2'>
                  <h1 className='font-bold'>Framer Motion</h1>
                  <p>Smooth animations and interactive transitions</p>
                </div>
              </div>
              <div className='flex flex-row'>
                <div className='basis-1/5'>
                  <img src={reduxToolkit} className='h-10 w-10 md:w-13 md:h-13 backdrop shadow-md rounded-full bg-cover bg-center p-1' alt="icon" />
                </div>
                <div className='basis-4/5 pl-2'>
                  <h1 className='font-bold'>Redux Toolkit</h1>
                  <p>Efficient and scalable state handling</p>
                </div>
              </div>
              <div className='flex flex-row'>
                <div className='basis-1/5'>
                  <img src={rtkquery} className='h-10 w-10 md:w-13 md:h-13 backdrop shadow-md rounded-full bg-cover bg-center p-1' alt="icon" />
                </div>
                <div className='basis-4/5 pl-2'>
                  <h1 className='font-bold'>RTK-Query</h1>
                  <p>Efficient and scalable state handling</p>
                </div>
              </div>
              <div className='flex flex-row'>
                <div className='basis-1/5'>
                  <img src={reactrouter} className='h-10 w-10 md:w-13 md:h-13 backdrop shadow-md rounded-full bg-cover bg-center p-1 bg-[var(--color-text-hover)]' alt="icon" />
                </div>
                <div className='basis-4/5 pl-2'>
                  <h1 className='font-bold'>React Router</h1>
                  <p>Seamless navigation in SPA applications</p>
                </div>
              </div>
              <div className='flex flex-row'>
                <div className='basis-1/5'>
                  <img src={nextjs} className='h-10 w-10 md:w-13 md:h-13 backdrop shadow-md rounded-full bg-cover bg-center p-1' alt="icon" />
                </div>
                <div className='basis-4/5 pl-2'>
                  <h1 className='font-bold'>NextJS</h1>
                  <p>Build fast websites with pages, SEO, and server support.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='px-5 md:px-0'>
            <h1 className='text-2xl my-5 text-left mt-20'>🛠️ <span className='text-[var(--color-text-base)] underline decoration-green-500 underline-offset-8'>Tooling & Workflow</span></h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 text-[var(--color-text-base)] text-base/7'>
              <div className='flex flex-row'>
                <div className='basis-1/5'>
                  <span className='text-2xl shadow-md rounded-full bg-cover bg-center p-2'>
                    ⚡
                  </span>
                </div>
                <div className='basis-4/5 pl-2'>
                  <h1 className='font-bold'>Vite & Webpack</h1>
                  <p >Fast bundling and optimized builds</p>
                </div>
              </div>
              <div className='flex flex-row'>
                <div className='basis-1/5'>
                  <span className='text-2xl shadow-md rounded-full bg-cover bg-center p-2'>
                    🧹
                  </span>
                </div>
                <div className='basis-4/5 pl-2'>
                  <h1 className='font-bold'>ESLint & Prettier</h1>
                  <p>Code quality and formatting consistency</p>
                </div>
              </div>
              <div className='flex flex-row'>
                <div className='basis-1/5'>
                  <span className='text-2xl shadow-md rounded-full bg-cover bg-center p-2'>
                    🗂️
                  </span>
                </div>
                <div className='basis-4/5 pl-2'>
                  <h1 className='font-bold'>Git & GitHub</h1>
                  <p>Version control and collaboration</p>
                </div>
              </div>
            </div>
          </div>
          <div className='px-5 md:px-0'>
            <h1 className='text-2xl my-5 text-left mt-20'>📈 <span className='text-[var(--color-text-base)] underline decoration-green-500 underline-offset-8'>Performance & Optimization</span></h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 text-[var(--color-text-base)] text-base/7'>
              <div className='flex flex-row'>
                <div className='basis-1/5'>
                  <span className='text-2xl shadow-md rounded-full bg-cover bg-center p-2'>
                    💤
                  </span>
                </div>
                <div className='basis-4/5 pl-2'>
                  <h1 className='font-bold'>Lazy Loading & Memoization</h1>
                  <p >Improve speed using lazy loading, code splitting, and smart caching</p>
                </div>
              </div>
              <div className='flex flex-row'>
                <div className='basis-1/5'>
                  <span className='text-2xl shadow-md rounded-full bg-cover bg-center p-2'>
                    🌐
                  </span>
                </div>
                <div className='basis-4/5 pl-2'>
                  <h1 className='font-bold'>SEO-Friendly Structure</h1>
                  <p>Build SPAs that are optimized for search engines</p>
                </div>
              </div>
              <div className='flex flex-row'>
                <div className='basis-1/5'>
                  <span className='text-2xl shadow-md rounded-full bg-cover bg-center p-2'>
                    📊
                  </span>
                </div>
                <div className='basis-4/5 pl-2'>
                  <h1 className='font-bold'>Core Web Vitals</h1>
                  <p>Focus on performance metrics like LCP, FID, and CLS</p>
                </div>
              </div>
            </div>
          </div>
          <div className='px-5 md:px-0'>
            <h1 className='text-2xl my-5 text-left mt-20'>🌐 <span className='text-[var(--color-text-base)] underline decoration-green-500 underline-offset-8'>Basic Backend Integration</span></h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 text-[var(--color-text-base)] text-base/7'>
              <div className='flex flex-row'>
                <div className='basis-1/5'>
                  <span className='text-2xl shadow-md rounded-full bg-cover bg-center p-2'>
                    🔗
                  </span>
                </div>
                <div className='basis-4/5 pl-2'>
                  <h1 className='font-bold'>REST API Handling</h1>
                  <p >Integrate APIs using fetch or axios for data communication</p>
                </div>
              </div>
              <div className='flex flex-row'>
                <div className='basis-1/5'>
                  <span className='text-2xl shadow-md rounded-full bg-cover bg-center p-2'>
                    🟢
                  </span>
                </div>
                <div className='basis-4/5 pl-2'>
                  <h1 className='font-bold'>Node.js Knowledge </h1>
                  <p>Work with JavaScript on the server for backend logic</p>
                </div>
              </div>
              <div className='flex flex-row'>
                <div className='basis-1/5'>
                  <span className='text-2xl shadow-md rounded-full bg-cover bg-center p-2'>
                    🚏
                  </span>
                </div>
                <div className='basis-4/5 pl-2'>
                  <h1 className='font-bold'>Express Framework </h1>
                  <p>Use Express to build lightweight, fast backend routes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='py-5'>

      </div>
    </>
  );
};

export default Home;
