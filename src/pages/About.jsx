import { motion } from 'framer-motion';
// import UserIcon from '../assets/fp.png';
import UserIcon from '../assets/freepik__adjust__62258.png';
// import UserIcon from '../assets/freepik__background__62257.png';

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
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

          <div>
            <h3 className="text-xl font-semibold text-gray-900">My Skills</h3>
            <ul className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 text-gray-600">
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                React & Redux
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Tailwind CSS
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                JavaScript (ES6+)
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Responsive Design
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">Get in Touch</h3>
            <p className="mt-2 text-gray-600">
              I'm always excited to collaborate on new projects or discuss potential opportunities. Feel free to reach out via email at <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline">imranisactive@gmail.com</a> or connect with me on [<a href="https://www.linkedin.com/in/imranali59059/" target='_blank'>LinkedIn</a> / <a href="https://github.com/imran59059" target='_blank'>GitHub</a>].
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;