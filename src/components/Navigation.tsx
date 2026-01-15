import { motion } from 'framer-motion';
import { Terminal, User, Code, GitBranch, MessageCircle } from 'lucide-react';

const navItems = [
  { icon: Terminal, label: 'Home', href: '#home' },
  { icon: User, label: 'About', href: '#about' },
  { icon: Code, label: 'Projects', href: '#projects' },
  { icon: GitBranch, label: 'Repositories', href: '#repos' },
  { icon: MessageCircle, label: 'Contact', href: '#contact' },
];

export const Navigation = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-2xl px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-cyber text-xl font-bold text-gradient-primary"
          >
            MUDRA-ANALYTICS
          </motion.div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'hsl(var(--primary) / 0.1)'
                }}
                className="flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 text-muted-foreground hover:text-primary group"
              >
                <item.icon className="w-4 h-4 group-hover:text-primary transition-colors" />
                <span className="font-mono text-sm">{item.label}</span>
              </motion.a>
            ))}
          </div>

          {/* Terminal Indicator */}
          <motion.div
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="hidden md:flex items-center space-x-2 text-terminal"
          >
            <div className="w-2 h-2 bg-terminal rounded-full"></div>
            <span className="font-mono text-xs">ONLINE</span>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};