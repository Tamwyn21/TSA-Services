import React, { useState } from "react";
import { motion } from "motion/react";
import {
  FaQuestionCircle,
  FaLaptopMedical,
  FaUserMd,
  FaShieldAlt,
  FaRocket,
  FaMoneyBillWave,
  FaEllipsisH,
  FaChevronDown,   // ✅ modern arrow icon
} from "react-icons/fa";

const faqCategories = [
  {
    name: "General Questions",
    icon: <FaQuestionCircle className="text-primary text-2xl" />,
    items: [
      {
        question: "What services do you provide?",
        answer:
          "Virtual Administrative support, email management, scheduling, data entry, patient communication, medical billing services, and more.",
      },
      {
        question: "Who do you work with?",
        answer:
          "Healthcare professionals including General Practitioners, Nurses, Therapists, Psychologists, Physiotherapists, Psychiatrists, Social workers, and various medical practices.",
      },
      {
        question: "What are your business hours?",
        answer:
          "Monday to Friday: 08:00am - 16:00pm, Saturdays & Sundays: Closed, Public Holidays: Closed",
      },
    ],
  },
  {
    name: "Virtual Assistant Services",
    icon: <FaLaptopMedical className="text-primary text-2xl" />,
    items: [
      {
        question: "Can you handle sensitive medical information?",
        answer:
          "Yes, we are POPIA compliant and trained to handle confidential patient data.",
      },
      {
        question: "How do you communicate with patients?",
        answer:
          "We use secure email, phone, or patient portal messaging, as preferred by your practice.",
      },
    ],
  },
  {
    name: "Healthcare Professional Support",
    icon: <FaUserMd className="text-primary text-2xl" />,
    items: [
      {
        question: "Can you assist with Electronic Health Records (EHR) management?",
        answer:
          "Yes, we are familiar with various EHR systems and can assist with data entry and management.",
      },
      {
        question: "What medical billing platforms have you worked with?",
        answer:
          "We have worked with a variety of medical billing platforms, including Panacea, Healthbridge (MyMps), GoodX, and more. Our experience enables us to adapt quickly to new systems and ensures seamless transitions for our clients.",
      },
      {
        question: "Do you assist with patient scheduling and appointment reminders?",
        answer:
          "Yes, we can schedule appointments, send reminders, and manage your calendar on a daily basis.",
      },
    ],
  },
  {
    name: "Technology & Security",
    icon: <FaShieldAlt className="text-primary text-2xl" />,
    items: [
      {
        question: "What software and tools do you use?",
        answer:
          "Google Chrome, Microsoft Edge, Microsoft Office (2021 / 365), Panacea, Healthbridge (MyMps), GoodX, Gmail, Google Calendar, Whatsapp, Outlook, Notion, Zoom, MS Teams, Canva, Adobe PDF Tools and more.",
      },
      {
        question: "How do you ensure data security and confidentiality?",
        answer:
          "We use private networks, secure servers, encryption (optional), Data recovery & Data protection software, and follow POPIA guidelines to protect sensitive information.",
      },
    ],
  },
  {
    name: "Getting Started",
    icon: <FaRocket className="text-primary text-2xl" />,
    items: [
      {
        question: "How do I sign up for your services?",
        answer:
          "Contact us through our website or email to schedule a consultation. We will discuss your needs and create a customized plan for your practice.",
      },
      {
        question: "What is your onboarding process like?",
        answer:
          "We'll discuss your needs, setup secure access, and train you on our workflows. We aim for a smooth transition with minimal disruption to your practice.",
      },
      {
        question: "How quickly can you start working with my practice?",
        answer: "Typically within 1 - 3 business days after onboarding.",
      },
    ],
  },
  {
    name: "Pricing & Payment",
    icon: <FaMoneyBillWave className="text-primary text-2xl" />,
    items: [
      {
        question: "What are your pricing plans?",
        answer: "Monthly recurring payment. Please contact for more information.",
      },
      {
        question: "How do you bill for your services?",
        answer:
          "We use secure online invoicing, with payment options including credit / debit cards, and bank transfers.",
      },
      {
        question: "Do you offer discounts for long-term contracts?",
        answer: "Yes, contact us for custom pricing and discounts.",
      },
    ],
  },
  {
    name: "Miscellaneous",
    icon: <FaEllipsisH className="text-primary text-2xl" />,
    items: [
      {
        question: "Can I cancel or change my services at any time?",
        answer: "Yes, within 30 days notice period.",
      },
      {
        question:
          "Do you have references or testimonials from other healthcare professionals you've worked with?",
        answer:
          "Yes, contact us for references and testimonials from satisfied clients.",
      },
    ],
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full px-6 sm:px-12 lg:px-24 xl:px-40 mb-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col gap-12 text-gray-800 dark:text-white"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 mt-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-700 dark:text-white">
            FAQ
          </h2>
          <p className="text-sm sm:text-base opacity-70 max-w-xl mx-auto">
            Find answers to the most common questions about our services and
            process.
          </p>
        </motion.div>

        {/* Categories */}
        {faqCategories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: catIndex * 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-2 justify-center sm:justify-start">
              {category.icon}
              <h3 className="text-xl sm:text-2xl font-semibold text-primary">
                {category.name}
              </h3>
            </div>

            {/* FAQ Items */}
            {category.items.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 sm:p-5 bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleFAQ(`${catIndex}-${index}`)}
                  className="w-full flex justify-between items-center text-left font-semibold text-black dark:text-white text-sm sm:text-base"
                >
                  {faq.question}
                  <motion.span
                    initial={{ rotate: 0 }}
                    animate={{
                      rotate: openIndex === `${catIndex}-${index}` ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="ml-2 text-primary"
                  >
                    <FaChevronDown className="text-xl" />
                  </motion.span>
                </button>
                {openIndex === `${catIndex}-${index}` && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.4 }}
                    className="mt-3 text-xs sm:text-sm opacity-80"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FAQ;