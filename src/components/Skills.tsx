import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SkillCategory } from '../types';
import { skillCategories } from '../data/skills';

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Minhas Habilidades
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Tecnologias e ferramentas que eu utilizo para criar aplicações web e mobile de alta qualidade.
          </p>
        </motion.div>

        <div ref={ref} className="space-y-12">
          {skillCategories.map((category, index) => (
            <SkillCategorySection 
              key={category.name} 
              category={category} 
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCategorySection({ 
  category, 
  index, 
  inView 
}: { 
  category: SkillCategory; 
  index: number;
  inView: boolean;
}) {
  const staggerDelay = 0.1;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
      className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md"
    >
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700">
        {category.name}
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {category.skills.map((skill, skillIndex) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.2 + skillIndex * staggerDelay,
              ease: "easeOut" 
            }}
            whileHover={{ 
              y: -5, 
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.3 } 
            }}
            className="bg-white dark:bg-gray-900 rounded-lg p-4 flex flex-col items-center shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="text-4xl mb-3 text-primary-600 dark:text-primary-400">
              {skill.icon}
            </div>
            
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              {skill.name}
            </h4>
            
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-1">
              <div 
                className="bg-primary-600 dark:bg-primary-500 h-2.5 rounded-full" 
                style={{ width: `${(skill.proficiency / 5) * 100}%` }}
              ></div>
            </div>
            
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {getProficiencyLabel(skill.proficiency)}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function getProficiencyLabel(proficiency: number): string {
  switch (proficiency) {
    case 1: return "Iniciante";
    case 2: return "Básico";
    case 3: return "Intermediário";
    case 4: return "Avançado";
    case 5: return "Especialista";
    default: return "Intermediário";
  }
}