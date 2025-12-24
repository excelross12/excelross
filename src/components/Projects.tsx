import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
  {
    id: '01',
    title: 'E-Commerce Platform',
    category: 'Full-Stack Development',
    description: 'A complete e-commerce solution with real-time inventory, payments, and analytics dashboard.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    color: 'from-orange-500/20',
  },
  {
    id: '02',
    title: 'AI Chat Application',
    category: 'AI/ML Integration',
    description: 'Real-time conversational AI with speech recognition and multi-language support.',
    tags: ['Next.js', 'OpenAI', 'WebSocket', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    color: 'from-blue-500/20',
  },
  {
    id: '03',
    title: 'Project Management',
    category: 'SaaS Platform',
    description: 'Collaborative workspace with Kanban boards, time tracking, and team analytics.',
    tags: ['React', 'GraphQL', 'MongoDB', 'Docker'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    color: 'from-emerald-500/20',
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20"
        >
          <div>
            <span className="text-primary font-mono text-sm uppercase tracking-widest mb-4 block">
              Selected Work
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-extrabold">
              Featured<br />
              <span className="text-stroke">Projects</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-lg">
            A selection of projects I've worked on, from concept to deployment.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 80 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative"
            >
              <div className={`grid md:grid-cols-2 gap-8 p-8 md:p-12 border border-border hover:border-primary/50 transition-all duration-500 bg-gradient-to-br ${project.color} to-transparent`}>
                {/* Content */}
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-6xl font-display font-extrabold text-primary/30">
                        {project.id}
                      </span>
                      <span className="text-sm uppercase tracking-widest text-muted-foreground">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-8">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-1 border border-border text-sm text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-bold uppercase tracking-wider text-sm geometric-border"
                    >
                      View Project
                      <ArrowUpRight size={16} />
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center justify-center w-12 h-12 border border-border hover:border-foreground transition-colors"
                    >
                      <Github size={18} />
                    </motion.a>
                  </div>
                </div>

                {/* Image */}
                <div className="relative overflow-hidden">
                  <motion.div
                    animate={{
                      scale: hoveredId === project.id ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                    className="aspect-[4/3] overflow-hidden"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </motion.div>
                  
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-primary" style={{
                    clipPath: 'polygon(100% 0, 0 0, 100% 100%)'
                  }} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-lg font-display font-bold hover:text-primary transition-colors line-through-animation"
          >
            View All Projects
            <ArrowUpRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
