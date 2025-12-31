import type { SocialLink } from '../../types';

const Footer = () => {
  const socialLinks: SocialLink[] = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/aniketshah',
      icon: 'LinkedIn'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/aniketshah',
      icon: 'GitHub'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/aniketshah',
      icon: 'Twitter'
    },
    {
      name: 'Email',
      url: 'mailto:aniket.shah@example.com',
      icon: 'Email'
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-12 mt-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-3xl mb-2 text-white">Aniket Shah</h3>
            <p className="text-white/70 mb-1">Junior Project Manager</p>
            <p className="text-white/70 italic mt-4">
              Turning ideas into successful projects
            </p>
          </div>

          <div>
            <h4 className="text-lg mb-4 text-white">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <a href="#about" className="text-white/70 transition-all duration-300 hover:text-white hover:translate-x-1 w-fit">
                About
              </a>
              <a href="#skills" className="text-white/70 transition-all duration-300 hover:text-white hover:translate-x-1 w-fit">
                Skills
              </a>
              <a href="#projects" className="text-white/70 transition-all duration-300 hover:text-white hover:translate-x-1 w-fit">
                Projects
              </a>
              <a href="#contact" className="text-white/70 transition-all duration-300 hover:text-white hover:translate-x-1 w-fit">
                Contact
              </a>
            </nav>
          </div>

          <div>
            <h4 className="text-lg mb-4 text-white">Connect With Me</h4>
            <div className="flex gap-4 flex-wrap">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-11 h-11 bg-white/10 rounded-lg text-white transition-all duration-300 font-semibold text-sm border border-white/20 hover:bg-primary hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(37,99,235,0.4)]"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-white/60 text-sm my-1">
            &copy; {currentYear} Aniket Shah. All rights reserved.
          </p>
          <p className="text-white/60 text-sm my-1">
            Built with React + TypeScript + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

