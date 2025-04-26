import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { SocialLink } from '../types';
import { socialLinks } from '../data/socialLinks';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="lg:w-1/2 text-center lg:text-left" variants={itemVariants}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Mobile & Web Developer
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              Criando experiências digitais impressionantes com React, React Native e Firebase. 
              Especialista em desenvolvimento de aplicativos móveis e publicação em lojas.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition duration-300 shadow-md hover:shadow-lg"
              >
                Ver Projetos
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-primary-600 dark:text-primary-400 font-medium rounded-lg border border-primary-600 dark:border-primary-400 transition duration-300"
              >
                Contato
              </a>
            </div>
            <div className="flex justify-center lg:justify-start space-x-4">
              {socialLinks.map((link) => (
                <SocialIcon key={link.name} link={link} />
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-2/5 mt-12 lg:mt-0"
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                <div className="w-full h-64 bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden mb-4">
                  <img 
                    src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Developer coding" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Desenvolvedor Full Stack</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Especialista em React & React Native com experiência em publicação de apps em App Store e Google Play.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialIcon({ link }: { link: SocialLink }) {
  const getIcon = () => {
    switch (link.name.toLowerCase()) {
      case 'github':
        return <Github size={20} />;
      case 'linkedin':
        return <Linkedin size={20} />;
      case 'email':
        return <Mail size={20} />;
      default:
        return <ExternalLink size={20} />;
    }
  };

  return (
    <a 
      href={link.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition duration-300"
      aria-label={link.name}
    >
      {getIcon()}
    </a>
  );
}