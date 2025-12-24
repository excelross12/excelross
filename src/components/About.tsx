import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import profileImage from '@/assets/profile-image.jpg';

const stats = [
  { value: '5+', label: 'Years of Experience' },
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Happy Clients' },
  { value: '99%', label: 'Client Satisfaction' },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Large Background Text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.02] pointer-events-none">
        <span className="text-[20vw] font-display font-extrabold whitespace-nowrap">
          ABOUT ME
        </span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden geometric-border">
                <img
                  src={profileImage}
                  alt="About"
                  className="w-full aspect-[3/4] object-cover"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
              </div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-8 -right-8 bg-card border border-border p-8"
              >
                <div className="grid grid-cols-2 gap-6">
                  {stats.slice(0, 2).map((stat) => (
                    <div key={stat.label}>
                      <div className="text-3xl font-display font-extrabold gradient-text">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Decorative Line */}
              <motion.div
                initial={{ height: 0 }}
                animate={isInView ? { height: '100%' } : {}}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute -left-12 top-0 w-px bg-gradient-to-b from-primary via-primary to-transparent"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
          >
            <span className="text-primary font-mono text-sm uppercase tracking-widest mb-4 block">
              About Me
            </span>
            
            <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-8 leading-tight">
              Crafting Digital<br />
              <span className="text-stroke-primary">Experiences</span><br />
              Since 2019
            </h2>

            <div className="space-y-6 text-muted-foreground text-lg mb-10">
              <p>
                I'm a passionate Full-Stack Developer who believes that great software 
                is born at the intersection of creativity and engineering. My journey 
                started with a simple question: "How do I make this better?"
              </p>
              <p>
                With expertise spanning React, TypeScript, Node.js, and cloud technologies, 
                I build products that not only look stunning but perform flawlessly. 
                Every pixel matters, every millisecond counts.
              </p>
              <p>
                When I'm not coding, I'm exploring new technologies, contributing to 
                open-source, or mentoring the next generation of developers.
              </p>
            </div>

            {/* Bottom Stats */}
            <div className="grid grid-cols-2 gap-8 mb-10 pt-8 border-t border-border">
              {stats.slice(2).map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl font-display font-extrabold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-wider geometric-border"
            >
              Let's Work Together
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
