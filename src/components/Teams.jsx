import React from 'react';
import Title from './Title';
import { teamData } from '../assets/assets';
import { motion } from "motion/react";

const Teams = () => {
  return (
    <section id="teams" className="w-full mb-16">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center gap-7 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white"
      >
        <Title 
          title="Meet the team" 
          desc="A passionate team of digital experts dedicated to your brand's success." 
        />

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
          {teamData.map((team, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-105 transition-all duration-300"
            >
              <img 
                src={team.image} 
                className="w-24 h-24 rounded-full object-cover" 
                alt={team.name} 
              />
              <div className="flex-1">
                <h3 className="font-bold text-sm">{team.name}</h3>
                <p className="text-xs opacity-60">{team.title}</p>
              </div>
            </motion.div>
          ))}
        </div>      
      </motion.div>
    </section>
  );
};

export default Teams;