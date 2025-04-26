import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, SmartphoneNfc, Server, Share2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { fetchProfile } from '../services/github';

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [profileImage, setProfileImage] = useState<string | null>(null);

  useEffect(() => {
    async function getProfile() {
      const profile = await fetchProfile();
      if (profile) {
        setProfileImage(profile.avatar_url);
      }
    }
    getProfile();
  }, []);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const services = [
    {
      icon: <Code size={32} />,
      title: "Desenvolvimento Web",
      description: "Construção de aplicações web modernas e performáticas com React, Tailwind CSS e Firebase."
    },
    {
      icon: <SmartphoneNfc size={32} />,
      title: "Desenvolvimento Mobile",
      description: "Criação de aplicativos mobile nativos com React Native, Expo e integração com lojas."
    },
    {
      icon: <Server size={32} />,
      title: "Backend & Firebase",
      description: "Implementação de backends escaláveis utilizando Firebase, API REST e autenticação."
    },
    {
      icon: <Share2 size={32} />,
      title: "Publicação de Apps",
      description: "Processo completo de publicação de aplicativos nas lojas App Store e Google Play."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUpVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Sobre Mim
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Desenvolvedor apaixonado por criar aplicações modernas e intuitivas.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            className="lg:w-1/2"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg blur opacity-30"></div>
              <div className="relative bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                {profileImage ? (
                  <img 
                    src={profileImage} 
                    alt="Foto do perfil do GitHub" 
                    className="w-full h-auto"
                  />
                ) : (
                  <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
                )}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Olá, prazer em conhecê-lo!
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Sou um desenvolvedor fullstack especializado em criar experiências digitais excepcionais. Com profundo conhecimento em React, React Native e Firebase, tenho ajudado empresas a transformar suas ideias em aplicações web e mobile de alta qualidade.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Minha experiência inclui o desenvolvimento completo de aplicativos - desde a concepção até a publicação nas lojas App Store e Google Play. Trabalho com tecnologias como Xcode, Android Studio, OneSignal para notificações e implemento designs responsivos com Tailwind CSS.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Estou sempre em busca de novos desafios e oportunidades para expandir meu conhecimento e criar soluções inovadoras que resolvam problemas reais.
            </p>
          </motion.div>
        </div>
        
        <div className="mt-20">
          <motion.h3 
            className="text-2xl font-bold text-gray-900 dark:text-white mb-10 text-center"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            Meus Serviços
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeInUpVariants}
                transition={{ duration: 0.6, delay: 0.6 + (index * 0.1), ease: "easeOut" }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="text-primary-600 dark:text-primary-400 mb-4">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}