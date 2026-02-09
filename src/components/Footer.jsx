import React, { useState } from 'react'
import assets from '../assets/assets'
import { motion } from "motion/react"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"

const Footer = ({theme}) => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'
  const [message, setMessage] = useState('')
  const FORMSPREE_URL = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xzdabdjv'

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }} 
      className='bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40'
    >

      {/* Footer top */}
      <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'> 
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }} 
          className='space-y-5 text-sm text-gray-700 dark:text-gray-400'
        >
          <img 
            src={theme === 'dark' ? assets.logo_dark : assets.logo} 
            className='w-32 sm:w-44' 
            alt="TSA Services Logo" 
          />
          <p className='max-w-md'>
            TSA Services provides reliable administrative support with precision and care. 
            Dedicated to helping professionals streamline their workflow and achieve lasting success.
          </p>

          <ul className='flex gap-8'>
            <li><a className='hover:text-primary' href='#hero'>Home</a></li>
            <li><a className='hover:text-primary' href='#services'>Services</a></li>
            <li><a className='hover:text-primary' href='#our-work'>Our Work</a></li>
            <li><a className='hover:text-primary' href='#contact-us'>Contact Us</a></li>
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className='text-gray-600 dark:text-gray-400'
        >
          <h3 className='font-semibold'>Subscribe to our newsletter</h3>
          <p className='text-sm mt-2 mb-4'>
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form
            onSubmit={async (e) => {
              e.preventDefault()
              if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                setMessage('Please enter a valid email address.')
                setStatus('error')
                return
              }
              try {
                setStatus('loading')
                setMessage('')

                const res = await fetch(FORMSPREE_URL, {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({ email })
                })

                const data = await res.json().catch(() => ({}))
                if (res.ok) {
                  setStatus('success')
                  setMessage('Thanks — you are subscribed!')
                  setEmail('')
                } else {
                  setStatus('error')
                  setMessage(data?.error || data?.message || 'Subscription failed. Please try again.')
                }
              } catch (err) {
                setStatus('error')
                setMessage('Subscription failed. Please try again later.')
              }
            }}
            className='w-full'
          >
            <div className='flex gap-2 text-sm'>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder='Enter your email'
                aria-label='Email for newsletter'
                className='w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500'
              />
              <button
                type='submit'
                disabled={status === 'loading'}
                className='bg-primary text-white rounded px-6 disabled:opacity-60'
              >
                {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
              </button>
            </div>
            {message && (
              <p className={`text-sm mt-2 ${status === 'error' ? 'text-red-600' : 'text-green-600'}`}>
                {message}
              </p>
            )}
          </form>
        </motion.div>
      </div>

      <hr className='border-gray-300 dark:border-gray-600 my-6'/>

      {/* Footer bottom */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className='pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap'
      >
        <p>Copyright 2026 @ TSA Services - All Right Reserved.</p>
        <div className='flex items-center gap-4'>
          <motion.a 
            href="https://www.facebook.com/profile.php?id=61576976515875"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
          >
            <FaFacebookF size={22} />
          </motion.a>

          <motion.a 
            href="https://www.instagram.com/itstamlee___?igsh=MTk5cTB6OWRnZzJsYw=="
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
          >
            <FaInstagram size={22} />
          </motion.a>

          <motion.a 
            href="https://www.linkedin.com/in/tamwyn-smith-88736a2a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
          >
            <FaLinkedinIn size={22} />
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Footer