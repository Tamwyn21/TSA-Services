import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { motion } from "motion/react"

const Services = () => {

    const workData = [
        {
            title: 'File Management',
            description: 'Organizing, storing, and maintaining digital and physical files for easy access and secure handling.',
            image: assets.fileManagement,
            className: 'w-full sm:w-11/12 md:w-full aspect-[640/434] object-cover rounded-xl'
        },
        {
            title: 'Payment Allocation',
            description: 'Tracking and assigning incoming payments to the correct accounts or invoices for accurate financial records.',
            image: assets.payments,
            className: 'w-full sm:w-11/12 md:w-full aspect-[640/434] object-cover rounded-xl'
        },
        {
            title: 'Proof-reading Reports',
            description: 'Reviewing documents to ensure accuracy, clarity, and professional presentation.',
            image: assets.proof,
            className: 'w-full sm:w-11/12 md:w-full aspect-[640/434] object-cover rounded-xl'
        },
        {
            title: 'Diary Management & Scheduling',
            description: 'Coordinating calendars, appointments, and reminders to keep daily operations running smoothly.',
            image: assets.diary,
            className: 'w-full sm:w-11/12 md:w-full aspect-[640/434] object-cover rounded-xl'
        },
        {
            title: 'Record Keeping of Client Database',
            description: 'Maintaining up-to-date client information for efficient communication and compliance.',
            image: assets.record,
            className: 'w-full sm:w-11/12 md:w-full aspect-[640/434] object-cover rounded-xl'
        },
        {
            title: 'Following-up On Overdue Payments',
            description: 'Professionally contacting clients to resolve outstanding balances and improve cash flow.',
            image: assets.overdue,
            className: 'w-full sm:w-11/12 md:w-full aspect-[640/434] object-cover rounded-xl'
        },
        {
            title: 'Medical Billing',
            description: 'Processing healthcare claims and invoices with precision to support healthcare professionals.',
            image: assets.medical,
            className: 'w-full sm:w-11/12 md:w-full aspect-[640/434] object-cover rounded-xl'
        },
        {
            title: 'Marketing via Facebook / LinkedIn / Instagram',
            description: 'Creating and managing social media campaigns to boost visibility and engagement.',
            image: assets.socials,
            className: 'w-full sm:w-11/12 md:w-full aspect-[640/434] object-cover rounded-xl'
        },
        {
            title: 'Website Development & Design',
            description: 'Building user-friendly websites, designing layouts, and setting up domains for a strong online presence.',
            image: assets.website,
            className: 'w-full sm:w-11/12 md:w-full aspect-[640/434] object-cover rounded-xl'
        },
    ]

  return (
    <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ staggerChildren: 0.2}}
    
    id='services' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 py-16 mt-20 text-gray-700 dark:text-white'>
     <Title title='What we offer' desc='TSA Services provides virtual assistance that reduces administrative burdens, streamlining support for healthcare professionals.'/>

    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
        {
            workData.map((work, index)=>(
                <motion.div 
                initial={{ opacity: 0, y: 30}}
                whileInView={{ opacity: 1, y: 0}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                
                key={index} className='hover:scale-105 duration-500 transition-all cursor-pointer flex flex-col items-center'>
                    <img src={work.image} alt="" className={work.className}/>
                    <h3 className='mt-4 mb-2 text-lg font-semibold text-center'>{work.title}</h3>
                    <p className='text-sm opacity-60 w-5/6 text-center'>{work.description}</p>
                </motion.div>
            ))
        }
    </div>
    </motion.div>
  )
}
export default Services