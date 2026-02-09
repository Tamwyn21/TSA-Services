import React, { useState } from 'react'
import assets from '../assets/assets'
import ThemeToggleBtn from './ThemeToggleBtn'
import { motion } from "motion/react"

const Navbar = ({theme, setTheme}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <motion.div 
      initial={{opacity: 0, y: -50}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.6, ease: "easeOut"}}
      className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70'
    >
      {/* Logo */}
      <img 
        src={theme === 'dark' ? assets.logo_dark : assets.logo} 
        className='w-32 sm:w-40' 
        alt='logo'
      />

      {/* Desktop Links */}
      <div className='hidden sm:flex items-center gap-6 text-gray-700 dark:text-white'>
        <a href="#" className='hover:border-b'>Home</a>
        <a href="#about" className='hover:border-b'>About</a>
        <a href="#services" className='hover:border-b'>Services</a>
        <a href="#onboarding" className='hover:border-b'>Onboarding</a>
        <a href="#faq" className='hover:border-b'>FAQ</a>
        <a href="#contact-us" className='hover:border-b'>Contact Us</a>
      </div>

      {/* Mobile Sidebar */}
      <motion.div 
        initial={{opacity: 0, x: 400}}
        animate={{opacity: sidebarOpen ? 1 : 0, x: sidebarOpen ? 0 : 400}}
        transition={{duration: 0.3}}
        className={`sm:hidden fixed top-0 bottom-0 right-0 min-h-screen w-60 bg-primary text-white pt-20 flex flex-col gap-5 px-10 transition-all`}
      >
        <img 
          src={assets.close_icon} 
          alt="close" 
          className='w-5 absolute right-4 top-4' 
          onClick={()=> setSidebarOpen(false)}
        />
        <a onClick={()=> setSidebarOpen(false)} href="#">Home</a>
        <a onClick={()=> setSidebarOpen(false)} href="#about">About</a>
        <a onClick={()=> setSidebarOpen(false)} href="#our-work">Services</a>
        <a onClick={()=> setSidebarOpen(false)} href="#onboarding">Onboarding</a>
        <a onClick={()=> setSidebarOpen(false)} href="#faq">FAQ</a>
        <a onClick={()=> setSidebarOpen(false)} href="#contact-us">Contact Us</a>
      </motion.div>

      {/* Right Side Controls */}
      <div className='flex items-center gap-2 sm:gap-4'>
        <ThemeToggleBtn theme={theme} setTheme={setTheme}/>
        {/* Mobile Menu Icon */}
        <img 
          src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon} 
          alt="menu" 
          onClick={()=> setSidebarOpen(true)} 
          className='w-8 sm:hidden cursor-pointer'
        />
        {/* Desktop CTA */}
        <a 
          href="#contact-us" 
          className='text-sm hidden sm:flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all'
        >
          Connect <img src={assets.arrow_icon} width={14} alt="arrow" />
        </a>
      </div>
    </motion.div>
  )
}

export default Navbar