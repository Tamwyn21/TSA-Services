import React from 'react'
import assets from '../assets/assets'
import Title from './Title'          // in Services.jsx
import ServiceCard from './ServiceCard' // in Services.jsx
import { motion } from "motion/react"
import { 
  FaFileInvoiceDollar, 
  FaHeartbeat, 
  FaChartLine, 
  FaHandsHelping 
} from "react-icons/fa";

const Services = () => {

    const servicesData = [
        {
            title: 'Billing Services',
            description: 'Billing takes valuable time and can strain patient relationships. TSA Services handles payments with accuracy, keeping your practice financially stress‑free.',
            icon: FaFileInvoiceDollar
        },
        {
            title: 'Better Patient Care',
            description: 'Administrative tasks can drain valuable time from patient care. TSA Services takes them off your hands, so you can focus on what matters most - your patients.',
            icon: FaHeartbeat
        },
        {
            title: 'Lower Employment Costs',
            description: 'A virtual assistant eliminates the need for office space or equipment. TSA Services reduces overhead so you can focus resources on patient care.',
            icon: FaChartLine
        },
        {
            title: 'The Benefits of a VA',
            description: 'Admin tasks like scheduling and records consume hours. TSA Services manages them, giving healthcare professionals more time for patients and growth.',
            icon: FaHandsHelping
        }
    ]

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2}}
      id='about' 
      className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-12 text-gray-700 dark:text-white'
    >
        <img src={assets.bgImage2} alt="" className='absolute -top-[110px] -left-[70px] -z-10 dark:hidden'/>

        <Title 
          title='Welcome to TSA Services' 
          desc='We offer administrative virtual assistance to medical practices. We aim to make the workload less by handling all the required admin duties within the practice with your own personal VA, ensuring that your practice runs smoothly.'
        />

        <div className='flex flex-col md:grid grid-cols-2 gap-6'>
            {servicesData.map((service, index)=>(
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center text-center gap-4 p-6 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Icon with hover animation */}
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 border-2 border-primary shadow-md"
                >
                  <service.icon className="text-primary text-2xl" />
                </motion.div>

                {/* Title + Description */}
                <h3 className="text-lg sm:text-xl font-semibold">{service.title}</h3>
                <p className="text-sm sm:text-base opacity-80">{service.description}</p>
              </motion.div>
            ))}
        </div>
    </motion.div>
  )
}

export default Services