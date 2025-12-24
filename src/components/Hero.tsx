import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import profileImage from '@/assets/profile-image.jpg';

const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative overflow-hidden noise-overlay">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-6 lg:px-8 pt-32 pb-20 relative z-10 max-w-7xl">
        {/* Top Labels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-between items-center mb-12 text-xs uppercase tracking-widest text-muted-foreground"
        >
          <span>Full-Stack Developer</span>
          <span>Based in San Francisco</span>
          <span className="hidden md:block">Available for Work</span>
        </motion.div>

        {/* Main Title */}
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-extrabold leading-[0.95] mb-8 whitespace-nowrap">
              <span className="block">Creative</span>
              <span className="block text-stroke">Developer</span>
              <span className="block gradient-text">&amp; Designer</span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-muted-foreground max-w-md mb-8"
            >
              I craft digital experiences that merge stunning design with robust 
              engineering. Obsessed with pixels and performance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToProjects();
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-wider geometric-border"
              >
                View Projects
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-foreground text-foreground font-bold uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors geometric-border-reverse"
              >
                About Me
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-full h-full border-2 border-primary" />
              <div className="absolute -bottom-8 -right-8 w-full h-full bg-primary/10" />
              
              <div className="relative overflow-hidden">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full aspect-[4/5] object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              
              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -right-4 top-1/4 bg-primary text-primary-foreground px-4 py-2 font-display font-bold text-sm"
              >
                5+ Years XP
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Marquee */}
        <div className="overflow-hidden border-y border-border py-6">
          <div className="marquee whitespace-nowrap">
            <span className="inline-block text-6xl md:text-8xl font-display font-extrabold text-muted/30">
              React • TypeScript • Node.js • Design • React • TypeScript • Node.js • Design • 
            </span>
            <span className="inline-block text-6xl md:text-8xl font-display font-extrabold text-muted/30">
              React • TypeScript • Node.js • Design • React • TypeScript • Node.js • Design • 
            </span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToProjects}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
