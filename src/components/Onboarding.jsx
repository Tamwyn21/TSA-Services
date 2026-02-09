import React from "react";
import { motion } from "motion/react";
import { FaUserCheck, FaClipboardList, FaLock, FaRocket, FaLaptopMedical } from "react-icons/fa";

const steps = [
  {
    icon: FaUserCheck,
    title: "Step 1: Introductions",
    desc: "We will meet to discuss your needs as a healthcare professional and conduct a thorough assessment to identify the virtual assistant best suited to provide tailored support for your practice."
  },
  {
    icon: FaClipboardList,
    title: "Step 2: Assigning Your VA",
    desc: "Upon receipt and review of this information, we will be able to advance to the next stage of assigning a dedicated virtual assistant to provide tailored support to your practice. Our dedicated manager will assist you throughout the onboarding process and the VA relationship."
  },
  {
    icon: FaLock,
    title: "Step 3: Meeting Your VA",
    desc: "Once your VA is assigned, you’ll meet to discuss tasks, workflows, and expectations, giving them a clear understanding of your requirements and ensuring a seamless working relationship."
  },
  {
    icon: FaRocket,
    title: "Step 4: Contract",
    desc: "Upon confirmation of your approval to proceed with our virtual assistant services, we will require your execution of a formal agreement, whereby you will accept our terms and conditions."
  },
  {
    icon: FaLaptopMedical,
    title: "Step 5: Ongoing Support & Evaluation",
    desc: "Once the agreement is signed and returned, we will deploy your dedicated virtual assistant, who will begin working on your assigned tasks. The agreement clearly outlines the scope, responsibilities, and expectations to ensure a shared understanding of our collaboration."
  }
];

const Onboarding = () => {
  return (
    <section id="onboarding" className="w-full px-6 sm:px-12 lg:px-24 xl:px-40 mb-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center text-gray-800 dark:text-white"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12 mt-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-700 dark:text-white">
            Onboarding Process
          </h2>
          <p className="text-sm sm:text-base opacity-70 max-w-xl mx-auto">
            A simple, secure, and streamlined process to get you started quickly.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="flex flex-col gap-10 w-full max-w-2xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.25 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, opacity: 0.95 }}
                className="flex flex-col items-center text-center gap-4 p-6 rounded-xl 
                           border border-gray-300 dark:border-gray-600 
                           bg-white dark:bg-gray-800 
                           shadow-xl hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)] 
                           transition-all duration-300"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-center w-14 h-14 rounded-full 
                             bg-primary/10 border-2 border-primary shadow-md"
                >
                  <Icon className="text-primary text-2xl" />
                </motion.div>

                {/* Content */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold">{step.title}</h3>
                  <p className="text-sm sm:text-base opacity-80 mt-2">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Onboarding;