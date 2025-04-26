import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, GitFork, ExternalLink, Github } from 'lucide-react';
import { Repository } from '../types';
import { fetchRepositories } from '../services/github';
import { useInView } from 'react-intersection-observer';

// Move formatDate function outside the components to make it accessible to all components
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export default function Projects() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    async function loadRepositories() {
      try {
        setLoading(true);
        const repos = await fetchRepositories();
        setRepositories(repos);
        setError(null);
      } catch (err) {
        setError('Erro ao carregar repositórios. Por favor, tente novamente.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    
    loadRepositories();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Meus Projetos
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Confira meus projetos recentes no GitHub. Criados com React, React Native e outras tecnologias.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-500 dark:text-red-400 p-8 bg-red-50 dark:bg-red-900/20 rounded-lg">
            <p>{error}</p>
            <p className="mt-4">
              Por favor, verifique se o nome de usuário GitHub está configurado corretamente.
            </p>
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {repositories.length > 0 ? (
              repositories.map((repo) => (
                <ProjectCard key={repo.id} repository={repo} />
              ))
            ) : (
              <div className="col-span-full text-center p-8 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300">
                  Nenhum repositório encontrado. Verifique se o nome de usuário GitHub está configurado corretamente.
                </p>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ repository }: { repository: Repository }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {repository.name}
          </h3>
          <div className="flex space-x-2">
            <a
              href={repository.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="GitHub Repository"
            >
              <Github size={18} />
            </a>
            {repository.homepage && (
              <a
                href={repository.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label="Live Site"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 h-12 line-clamp-2">
          {repository.description || "Nenhuma descrição disponível."}
        </p>
        
        {repository.topics && repository.topics.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {repository.topics.slice(0, 3).map((topic) => (
              <span 
                key={topic} 
                className="text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 px-2 py-1 rounded-full"
              >
                {topic}
              </span>
            ))}
            {repository.topics.length > 3 && (
              <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full">
                +{repository.topics.length - 3}
              </span>
            )}
          </div>
        )}
        
        <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Star size={14} className="mr-1" />
              <span>{repository.stargazers_count}</span>
            </div>
            <div className="flex items-center">
              <GitFork size={14} className="mr-1" />
              <span>{repository.forks_count}</span>
            </div>
          </div>
          <div>
            {repository.language && (
              <span className="flex items-center">
                <span 
                  className="w-3 h-3 rounded-full mr-1"
                  style={{ backgroundColor: getLanguageColor(repository.language) }}
                ></span>
                {repository.language}
              </span>
            )}
          </div>
        </div>
        
        <div className="mt-4 text-xs text-gray-500 dark:text-gray-500">
          Atualizado em {formatDate(repository.updated_at)}
        </div>
      </div>
    </motion.div>
  );
}

// Helper function to get language color (simplified)
function getLanguageColor(language: string): string {
  const colors: Record<string, string> = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Python: '#3572A5',
    Java: '#b07219',
    Swift: '#F05138',
    Kotlin: '#A97BFF',
    Dart: '#00B4AB',
    Go: '#00ADD8',
    Rust: '#DEA584',
    Ruby: '#701516',
    PHP: '#4F5D95',
    C: '#555555',
    'C++': '#f34b7d',
    'C#': '#178600',
  };
  
  return colors[language] || '#8F8F8F';
}