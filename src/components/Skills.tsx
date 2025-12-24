import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL'],
  },
  {
    title: 'DevOps',
    skills: ['AWS', 'Docker', 'CI/CD', 'Kubernetes', 'Vercel'],
  },
  {
    title: 'Design',
    skills: ['Figma', 'UI/UX', 'Prototyping', 'Design Systems', 'Motion'],
  },
];

const experienceData = [
  { year: '2022', role: 'Senior Developer', company: 'TechCorp Inc.' },
  { year: '2020', role: 'Full-Stack Developer', company: 'Digital Solutions' },
  { year: '2019', role: 'Frontend Developer', company: 'StartupXYZ' },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-32 relative bg-card" ref={ref}>
      {/* Noise Overlay */}
      <div className="absolute inset-0 noise-overlay" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-widest mb-4 block">
            Expertise
          </span>
          <h2 className="text-5xl md:text-7xl font-display font-extrabold">
            Skills &<br />
            <span className="text-stroke">Experience</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Skills Grid */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories.map((category, catIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                  className="border border-border p-8 hover:border-primary/50 transition-colors"
                >
                  <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-3">
                    <span className="text-3xl text-primary/30 font-extrabold">
                      0{catIndex + 1}
                    </span>
                    {category.title}
                  </h3>
                  <ul className="space-y-3">
                    {category.skills.map((skill, index) => (
                      <motion.li
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.3 + catIndex * 0.1 + index * 0.05 }}
                        className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                      >
                        <span className="w-2 h-2 bg-primary group-hover:w-4 transition-all" />
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="border border-border p-8"
          >
            <h3 className="text-xl font-display font-bold mb-8">Career Path</h3>
            
            <div className="space-y-8">
              {experienceData.map((exp, index) => (
                <motion.div
                  key={exp.year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-background border-2 border-primary" />
                  
                  <span className="text-primary font-mono text-sm">{exp.year}</span>
                  <h4 className="text-lg font-display font-bold mt-1">{exp.role}</h4>
                  <p className="text-muted-foreground text-sm">{exp.company}</p>
                </motion.div>
              ))}
            </div>

            {/* Tech Stack Marquee */}
            <div className="mt-12 pt-8 border-t border-border overflow-hidden">
              <span className="text-xs uppercase tracking-widest text-muted-foreground mb-4 block">
                Tech I Love
              </span>
              <div className="relative">
                <div className="flex gap-4 animate-[marquee_15s_linear_infinite]">
                  {['React', 'TypeScript', 'Node', 'AWS', 'Docker', 'React', 'TypeScript', 'Node', 'AWS', 'Docker'].map((tech, i) => (
                    <span key={i} className="text-lg font-display font-bold whitespace-nowrap text-muted-foreground">
                      {tech} •
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
