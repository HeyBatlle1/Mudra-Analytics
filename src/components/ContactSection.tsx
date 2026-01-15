import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Mail, 
  Calendar, 
  Send, 
  Terminal, 
  Linkedin, 
  Github,
  Code
} from 'lucide-react';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Send email to bradleeb1301@trailmedic.org
    const emailData = {
      to: 'bradleeb1301@trailmedic.org',
      subject: `New Contact Form Submission from ${formData.name}`,
      body: `
        Name: ${formData.name}
        Email: ${formData.email}
        Company: ${formData.company}
        Message: ${formData.message}
      `
    };
    
    // Create mailto link for now (can be replaced with actual API call)
    const mailtoLink = `mailto:bradleeb1301@trailmedic.org?subject=${encodeURIComponent(emailData.subject)}&body=${encodeURIComponent(emailData.body)}`;
    window.open(mailtoLink, '_blank');
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-cyber font-bold mb-6">
            <span className="text-gradient-accent">INITIATE</span>
            <span className="text-foreground"> CONNECTION</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to build something extraordinary? Let's discuss your next big idea 
            and explore how we can bring it to life with cutting-edge technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass rounded-2xl p-8 border border-primary/20">
              <div className="flex items-center space-x-3 mb-6">
                <Terminal className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-cyber font-bold">Send Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-mono text-muted-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-secondary/50 border border-border/50 rounded-xl focus:border-primary focus:outline-none transition-colors font-mono"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-mono text-muted-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-secondary/50 border border-border/50 rounded-xl focus:border-primary focus:outline-none transition-colors font-mono"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-mono text-muted-foreground mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-secondary/50 border border-border/50 rounded-xl focus:border-primary focus:outline-none transition-colors font-mono"
                    placeholder="Tech Innovations Inc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-mono text-muted-foreground mb-2">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-secondary/50 border border-border/50 rounded-xl focus:border-primary focus:outline-none transition-colors font-mono resize-none"
                    placeholder="Tell me about your project, goals, and how I can help..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-primary text-primary-foreground rounded-xl font-semibold transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                      />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Quick Connect */}
            <div className="glass rounded-2xl p-8 border border-accent/20">
              <div className="flex items-center space-x-3 mb-6">
                <MessageCircle className="w-6 h-6 text-accent" />
                <h3 className="text-2xl font-cyber font-bold">Quick Connect</h3>
              </div>

              <div className="space-y-4">
                <motion.a
                  href="mailto:bradleeb1301@trailmedic.org"
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center space-x-4 p-4 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-all duration-300 group"
                >
                  <Mail className="w-5 h-5 text-primary group-hover:text-primary-glow transition-colors" />
                  <div>
                    <div className="font-mono font-semibold">Email</div>
                    <div className="text-sm text-muted-foreground">bradleeb1301@trailmedic.org</div>
                  </div>
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/bradleeburton"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center space-x-4 p-4 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-all duration-300 group"
                >
                  <Linkedin className="w-5 h-5 text-primary group-hover:text-primary-glow transition-colors" />
                  <div>
                    <div className="font-mono font-semibold">LinkedIn</div>
                    <div className="text-sm text-muted-foreground">Professional Network</div>
                  </div>
                </motion.a>

                <motion.a
                  href="https://github.com/HeyBatlle1"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center space-x-4 p-4 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-all duration-300 group"
                >
                  <Github className="w-5 h-5 text-primary group-hover:text-primary-glow transition-colors" />
                  <div>
                    <div className="font-mono font-semibold">GitHub</div>
                    <div className="text-sm text-muted-foreground">Open Source Projects</div>
                  </div>
                </motion.a>
              </div>
            </div>

            {/* Book a Call */}
            <div className="glass rounded-2xl p-8 border border-primary/20 holo-border">
              <div className="flex items-center space-x-3 mb-6">
                <Calendar className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-cyber font-bold">Book a Call</h3>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Schedule a 30-minute discovery call to discuss your project requirements, 
                technical challenges, and how we can collaborate to achieve your goals.
              </p>

              <motion.a
                href="https://calendly.com/jobboxproject"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: 'var(--shadow-cyber)' }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center space-x-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold transition-all duration-300"
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule Meeting</span>
              </motion.a>
            </div>

            {/* Status Indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass rounded-2xl p-6 border border-accent/20"
            >
              <div className="flex items-center space-x-3">
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 bg-accent rounded-full"
                />
                <div>
                  <div className="font-mono font-semibold text-accent">Currently Available</div>
                  <div className="text-sm text-muted-foreground">
                    Taking on new projects • Response within 24 hours
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};