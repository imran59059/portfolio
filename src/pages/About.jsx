import { motion } from 'framer-motion';
// import UserIcon from '../assets/fp.png';
import UserIcon from '../assets/freepik__adjust__62258.png';
// import UserIcon from '../assets/freepik__background__62257.png';

const About = () => {
  const events = [
    {
      year: '2016',
      description: 'Began learning web development with HTML, CSS, and JavaScript.',
    },
    {
      year: '2016–2019',
      description: 'Completed my BCA at Brainware University, focusing on computer applications.',
    },
    {
      year: '2020',
      description: 'Tried my first entrepreneurial venture with an online grocery delivery business.',
    },
    {
      year: '2021',
      description: 'Joined Firstbraket Technology Pvt Ltd as a Junior Software Engineer (PHP projects).',
    },
    {
      year: '2022',
      description: 'Moved to AchieveX Solutions as a Full Stack Developer, built SPAs and optimized performance.',
    },
    {
      year: '2022–2025',
      description: 'Worked at 6 Livo Technologies Pvt Ltd, led Order-to-Cash module and API optimization.',
    },
    {
      year: 'Present',
      description: 'Continuing to grow my skills and exploring new opportunities in tech and business.',
    },
  ];

  const skillsData = [
    {
      title: 'Frontend Development',
      skills: 'ReactJS, Next.js, Tailwind CSS, Framer Motion, Redux Toolkit, TypeScript',
    },
    {
      title: 'Tooling & Workflow',
      skills: 'Vite, Webpack, ESbuild, ESLint, Prettier, Git & GitHub',
    },
    {
      title: 'Performance & Optimization',
      skills: 'Lazy Loading, Memoization, SEO-Friendly Structure, Core Web Vitals',
    },
    {
      title: 'Backend Integration',
      skills: 'REST API Handling, GraphQL, Node.js, Express, Prisma',
    },
    {
      title: 'Emerging Trends',
      skills: 'Server-Side Rendering (SSR), Progressive Web Apps (PWA), Web Accessibility (a11y)',
    },
  ];

  return (
    <div className="min-h-screen md:w-3/4 mx-auto flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">About Me</h2>
          <p className="mt-4 text-lg text-gray-600">
            Hi, I'm Imran Ali, a passionate developer dedicated to creating innovative and user-friendly applications.
          </p>
          <img src={UserIcon} alt="Illustration" className="mx-auto w-full text-gray-400" />
        </div>

        <div className="mt-8 space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">My Journey</h3>
            <p className="mt-2 text-gray-600">
              With a strong foundation in web development, I specialize in building modern web applications using technologies like React, Tailwind CSS, and Redux. My journey began with a curiosity for solving problems through code, and I've since worked on numerous projects that blend creativity with technical expertise.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">What I Do</h3>
            <p className="mt-2 text-gray-600">
              I focus on crafting responsive, performant, and accessible user interfaces. Whether it's a personal portfolio, an e-commerce platform, or a complex web application, I strive to deliver seamless experiences that delight users and meet business goals.
            </p>
          </div>
          {/* - Timeline - */}
          <div className="max-w-3xl mx-auto py-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">🕓 Timeline</h3>
            <div className="relative border-l border-gray-300 pl-6">
              {events.map((event, index) => (
                <div key={index} className="mb-8">
                  <div className="absolute -left-2.5 w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-md"></div>
                  <div className="text-sm text-gray-500">{event.year}</div>
                  <div className="text-base font-medium text-gray-800">{event.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <section className="py-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">🧠 Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {skillsData.map((item, index) => (
                <div key={index} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
                  <h3 className="text-lg font-semibold text-gray-700 mb-1">{item.title}</h3>
                  <p className="text-gray-800 text-sm">{item.skills}</p>
                </div>
              ))}
            </div>
          </section>
          <div>
            <h1 className='text-3xl font-bold text-gray-900 mb-4'>Education</h1>
            <h2 className='text-1xl font-bold text-gray-900'>BCA in Computer Science</h2>
            <p className='text-gray-900'>Brainware University, 2016–2019</p>
            <p className='text-gray-900'>Focused on web development and software engineering fundamentals.</p>
          </div>
          {/* Hobbies */}
          <div>
            <h1 className='text-3xl font-bold text-gray-900 mb-4'>Hobbies</h1>
            <ul>
              <li>Football (Midfielder – I play 1–2x per week)</li>
              <li>Reading – Exploring topics like tech, self-growth, and language</li>
              <li>YouTube – Creating dev content & tutorials</li>
              <li>Web Experimentation – Building projects with AI, APIs, and new frameworks</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Get in Touch</h3>
            <p className="mt-2 text-gray-600">
              I’m excited to connect, collaborate, and build innovative solutions. Let’s create something remarkable together!
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;