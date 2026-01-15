import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, ChevronRight } from 'lucide-react';

const commands = [
  { command: 'whoami', output: 'bradlee_burton' },
  { command: 'cat skills.txt', output: 'React • TypeScript • Python • AI/ML • Node.js' },
  { command: 'pwd', output: '/home/mudra-analytics/portfolio' },
  { command: 'ls experience/', output: 'software_engineer.exp  ai_developer.exp  full_stack.exp' },
  { command: 'echo $MISSION', output: 'Building the future with intelligent code' },
];

export const TerminalHero = () => {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (currentCommandIndex >= commands.length) return;

    const currentCommand = commands[currentCommandIndex];
    const fullText = `$ ${currentCommand.command}\n${currentCommand.output}`;

    setIsTyping(true);
    let index = 0;

    const typeInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        
        setTimeout(() => {
          if (currentCommandIndex < commands.length - 1) {
            setCurrentCommandIndex(prev => prev + 1);
            setDisplayedText(prev => prev + '\n\n');
          }
        }, 1000);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [currentCommandIndex]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Terminal Window */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass rounded-2xl overflow-hidden border border-primary/20">
              {/* Terminal Header */}
              <div className="bg-secondary/50 px-4 py-3 flex items-center space-x-2 border-b border-border/20">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <Terminal className="w-4 h-4 text-muted-foreground" />
                  <span className="font-mono text-sm text-muted-foreground">
                    mudra-analytics@portfolio:~
                  </span>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 bg-background/80 font-mono text-sm min-h-[400px]">
                <div className="text-terminal-dim mb-4">
                  Welcome to Mudra Analytics Portfolio Terminal v2.0.1
                </div>
                <pre className="text-foreground whitespace-pre-wrap">
                  {displayedText}
                  {showCursor && (
                    <span className="bg-primary text-primary-foreground px-1 animate-pulse">
                      ▋
                    </span>
                  )}
                </pre>
              </div>
            </div>
          </motion.div>

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-5xl lg:text-7xl font-cyber font-bold"
              >
                <span className="text-gradient-primary">BRADLEE</span>
                <br />
                <span className="text-foreground">BURTON</span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-center space-x-2 text-accent font-display text-xl"
              >
                <ChevronRight className="w-5 h-5" />
                <span>Software Engineer & AI Developer</span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="text-lg text-muted-foreground max-w-lg leading-relaxed"
              >
                Crafting intelligent solutions at the intersection of cutting-edge technology 
                and elegant design. Building the future, one line of code at a time.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, boxShadow: 'var(--shadow-cyber)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold transition-all duration-300 inline-block"
              >
                Explore Projects
              </motion.a>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass border border-primary/30 text-primary px-8 py-3 rounded-xl font-semibold hover:bg-primary/10 transition-all duration-300 inline-block"
              >
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Floating Tech Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              {['React', 'TypeScript', 'Python', 'Node.js', 'AI/ML'].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.3 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="glass px-4 py-2 rounded-lg text-sm font-mono text-primary border border-primary/20 hover:border-primary/40 transition-all duration-300"
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};