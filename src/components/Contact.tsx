import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowUpRight, Mail, MapPin, Send, Check, Copy } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const email = 'hello@johndeveloper.com';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-widest mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold mb-6">
            Let's Create<br />
            <span className="gradient-text">Something Great</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's discuss how 
            we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            {/* Email Card */}
            <div className="border border-border p-8 hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary flex items-center justify-center">
                  <Mail className="text-primary-foreground" size={20} />
                </div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  Email Me
                </span>
              </div>
              
              <div className="flex items-center justify-between gap-4">
                <a 
                  href={`mailto:${email}`}
                  className="text-xl md:text-2xl font-display font-bold hover:text-primary transition-colors"
                >
                  {email}
                </a>
                <motion.button
                  onClick={copyEmail}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 hover:text-primary transition-colors"
                >
                  {copied ? <Check size={20} /> : <Copy size={20} />}
                </motion.button>
              </div>
            </div>

            {/* Location Card */}
            <div className="border border-border p-8 hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary flex items-center justify-center">
                  <MapPin className="text-primary-foreground" size={20} />
                </div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  Location
                </span>
              </div>
              <p className="text-xl md:text-2xl font-display font-bold">
                San Francisco, CA
              </p>
              <p className="text-muted-foreground mt-2">
                Available for remote work worldwide
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {['GitHub', 'LinkedIn', 'Twitter', 'Dribbble'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ y: -5 }}
                  className="flex-1 py-4 border border-border text-center text-sm uppercase tracking-wider hover:border-primary hover:text-primary transition-colors"
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="border border-border p-8 md:p-12 space-y-8"
          >
            <div>
              <label htmlFor="name" className="block text-xs uppercase tracking-widest text-muted-foreground mb-3">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full bg-transparent border-b-2 border-border py-4 text-lg font-display focus:border-primary outline-none transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-widest text-muted-foreground mb-3">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full bg-transparent border-b-2 border-border py-4 text-lg font-display focus:border-primary outline-none transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs uppercase tracking-widest text-muted-foreground mb-3">
                Your Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={4}
                className="w-full bg-transparent border-b-2 border-border py-4 text-lg font-display focus:border-primary outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitted}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-5 font-bold uppercase tracking-wider flex items-center justify-center gap-3 geometric-border transition-all ${
                isSubmitted
                  ? 'bg-emerald-500 text-white'
                  : 'bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/20'
              }`}
            >
              {isSubmitted ? (
                <>
                  <Check size={20} />
                  Message Sent!
                </>
              ) : (
                <>
                  Send Message
                  <Send size={18} />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
