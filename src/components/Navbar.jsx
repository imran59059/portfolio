import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import profileImage from '../assets/imran-ali-youtube-profile.jpeg'
import { setTheme, setThemeClass } from '../features/theme/themeSlice'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'

const Navbar = () => {
  const dispatch = useDispatch();
  const { mode, themeClass } = useSelector((state) => state.theme);
  const [isOpen, setIsOpen] = useState(false);

  const toggledMode = () => {
    dispatch(setTheme(mode === "dark" ? "light" : "dark"));
    console.log(mode);
    if (mode === "light") {
      dispatch(setThemeClass('theme-dark'))
    } else {
      dispatch(setThemeClass('theme-light'))
    }
  }

  const openSettings = () => {
    setIsOpen(true)
  }

  const getSelectedTheme = (e) => {
    const value = e.target.getAttribute("data-value");
    console.log('this is: ', value);
    dispatch(setThemeClass(value))
  }

  // Animation variants for the button
  const buttonVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: { scale: 1.5, opacity: 0.8, transition: { duration: 0.3, ease: 'easeInOut' } },
    tap: { scale: 0.9, rotate: 90, transition: { duration: 0.2 } },
  };

  const menuVariants = {
    rest: {
      scale: 1, rotate: 0, transition: {
        duration: 0.1,
        ease: 'easeInOut',
      },
    },
    hover: { scale: 1.1, opacity: 0.8, transition: { duration: 0.1, ease: 'easeInOut' } },
    tap: {
      scale: [1, 0.92, 1],
      transition: {
        duration: 0.25,
        ease: 'easeInOut',
      },
    },
  };
  return (
    <>
    <nav className={`p-4 md:p-6 pt-15 transition-all duration-300 ${isOpen ? 'mr-50' : ''}`}>
      <div className={`container mx-auto flex justify-between items-center flex-wrap`}>
        <div className={`flex justify-between items-center gap-5 `}>
          <NavLink
            to={'/'}
            className={({ isActive }) =>
              isActive
                ? 'text-[var(--color-text-hover)] font-bold'
                : 'text-[var(--color-text-base)] font-bold'
            }
          >
            <img
              src={profileImage}
              alt="Profile"
              className={`w-32 h-32 rounded-full object-cover shadow-md border-4 border-[var(--color-text-hover)]`}
            />
          </NavLink>
          <div className='text-[var(--color-text-base)]'>
            <h1 className="text-5xl">Imran Ali </h1>
            <p className='pl-1 border-t mt-2 text-lg'>React Developer</p>
          </div>
        </div>
        <ul className="hidden md:flex space-x-4">
          {['/about', '/projects', '/contact', '/resume'].map((path, index) => (
            <motion.li
              key={path}
              variants={menuVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? 'text-[var(--color-text-hover)] font-bold'
                    : 'text-[var(--color-text-base)] font-bold'
                }
              >
                {['About', 'Projects', 'Contact', 'Resume'][index]}
              </NavLink>
            </motion.li>
          ))}
        </ul>
        <div className='flex flex-col md:flex-row items-center justify-center'>
          {/* Mobile Hamburger */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[var(--color-text-base)] p-2 rounded focus:outline-none"
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            aria-label="Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
          <motion.button
            onClick={toggledMode}
            className="text-[var(--color-text-base)] px-4 py-2 rounded cursor-pointer"
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            aria-label="Toggle theme"
          >
            {mode === "light" ?
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
              </svg>

            }
          </motion.button>
          <motion.button
            onClick={openSettings}
            className="hidden md:inline-block text-[var(--color-text-base)] px-4 py-2 rounded cursor-pointer"
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            aria-label="Toggle theme"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
            </svg>
          </motion.button>
        </div>
      </div>
      </nav>
      {/* right side panel */}
      <div className={`fixed top-0 right-0 h-full w-72 bg-[var(--color-bg-primary)] shadow-lg border-l-2 border-[var(--color-text-base)] transform transition-transform duration-300 z-40 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4">
          <motion.p
            whileHover={{ scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={() => setIsOpen(false)}
            className='text-[var(--color-text-base)]'
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          </motion.p>
          <div>
            <h3 className='pt-5 mt-2 text-[var(--color-text-base)]'>Theme Customization</h3>
            <ul
              onClick={(e) => getSelectedTheme(e)}
              className="flex flex-wrap gap-3 mt-4"
            >
              <motion.li
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                data-value={'theme-red'} className="bg-imranbgred-500 border px-4 py-2 rounded-full w-8 h-8 shadow-lg text-sm"></motion.li>
              <motion.li
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }} data-value={'theme-green'} className="bg-imranbggreen-500 border px-4 py-2 rounded-full w-8 h-8 shadow-lg text-sm"></motion.li>
              <motion.li
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }} data-value={'theme-blue'} className="bg-imranbgblue-500 border px-4 py-2 rounded-full w-8 h-8 shadow-lg text-sm"></motion.li>
              <motion.li
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }} data-value={'theme-yellow'} className="bg-imranbgyellow-500 border px-4 py-2 rounded-full w-8 h-8 shadow-lg text-sm"></motion.li>
              <motion.li
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }} data-value={'theme-dark'} className="bg-imranbgblack-500 text-white border px-4 py-2 rounded-full w-8 h-8 shadow-lg text-sm"></motion.li>
            </ul>
            {/* nav links */}
            <div className="mt-6 border-t py-5">
              <ul className="flex flex-col gap-4">
                {['/about', '/projects', '/contact', '/resume'].map((path, index) => (
                  <li key={path}>
                    <NavLink
                      to={path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        isActive
                          ? 'text-[var(--color-text-hover)] font-bold'
                          : 'text-[var(--color-text-base)] font-medium'
                      }
                    >
                      {['About', 'Projects', 'Contact', 'Resume'][index]}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
      </>
  )
}

export default Navbar