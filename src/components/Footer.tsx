import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-border relative">
      {/* Back to Top */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.95 }}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center"
      >
        <ArrowUp size={20} />
      </motion.button>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-display font-bold">
              JD<span className="text-primary">.</span>
            </h3>
            <p className="text-muted-foreground text-sm mt-1">
              Full-Stack Developer
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-8">
            {['Work', 'About', 'Skills', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  const section = link === 'Work' ? 'projects' : link.toLowerCase();
                  document.querySelector(`#${section}`)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center md:text-right">
            © {currentYear} All rights reserved.
          </p>
        </div>

        {/* Large Footer Text */}
        <div className="mt-16 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="text-[15vw] font-display font-extrabold text-muted/10 leading-none block">
              PORTFOLIO
            </span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
