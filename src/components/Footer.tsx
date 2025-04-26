import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { socialLinks } from '../data/socialLinks';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { title: 'Home', href: '#home' },
    { title: 'Projetos', href: '#projects' },
    { title: 'Habilidades', href: '#skills' },
    { title: 'Sobre', href: '#about' },
    { title: 'Contato', href: '#contact' },
  ];

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'github': return <Github size={18} />;
      case 'linkedin': return <Linkedin size={18} />;
      case 'email': return <Mail size={18} />;
      default: return <Mail size={18} />;
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Portfolio</h3>
            <p className="text-gray-400 mb-4">
              Desenvolvo aplicações web e mobile de alta qualidade com foco em design moderno e desempenho.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map(link => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-600 transition duration-300"
                  aria-label={link.name}
                >
                  {getSocialIcon(link.name)}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              {footerLinks.map(link => (
                <li key={link.title}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Desenvolvimento Web</span></li>
              <li><span className="text-gray-400">Desenvolvimento Mobile</span></li>
              <li><span className="text-gray-400">Firebase & Backend</span></li>
              <li><span className="text-gray-400">Publicação de Apps</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Mail size={16} className="mr-2" />
                vitorabreufjb@hotmail.com
              </li>
              <li className="text-gray-400">
                Brasil
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Portfolio. Todos os direitos reservados.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Desenvolvido com React e Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}