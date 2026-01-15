import { useState, useMemo, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code, Zap, Brain, Database, AlertTriangle, Scale } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Safety Companion',
    description: 'Advanced Enterprise Safety Companion platform that leverages cutting-edge AI and data analytics to transform workforce protection through intelligent, user-centric solutions.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Google Gemini AI'],
    category: 'Enterprise',
    icon: Brain,
    color: 'from-emerald-500 to-blue-500',
    github: 'https://github.com/HeyBatlle1/Safety-Companion.com',
    demo: 'https://safety-companion.com',
    featured: true,
    deprecated: true
  },
  {
    id: 5,
    title: 'Safety-Compv3',
    description: 'Next-generation Safety Companion platform with enhanced AI capabilities, improved performance, and modern architecture. The successor to Safety-Companion.com with new features and optimizations.',
    tech: ['React', 'TypeScript', 'Node.js', 'AI/ML'],
    category: 'Enterprise',
    icon: Brain,
    color: 'from-cyan-500 to-emerald-500',
    github: 'https://github.com/HeyBatlle1/Safety-Compv3',
    demo: null,
    featured: true,
    deprecated: false
  },
  {
    id: 2,
    title: 'TrailMedic.org',
    description: 'AI-Powered Emergency Medical Guidance for Wilderness Survival. Provides instant, AI-powered medical assessment and step-by-step emergency protocols specifically designed for wilderness survival situations.',
    tech: ['React', 'TypeScript', 'Firebase', 'Gemini Pro API'],
    category: 'Healthcare',
    icon: Zap,
    color: 'from-red-500 to-orange-500',
    github: 'https://github.com/HeyBatlle1/TrailMedic.Org',
    demo: 'https://trailmedic.org',
    featured: true
  },
  {
    id: 3,
    title: 'Medical MCP Server',
    description: 'Python-based server with dual Model Context Protocol (MCP) and HTTP REST API interfaces, providing shared core medical logic for trauma assessment and emergency medical protocols.',
    tech: ['Python', 'FastAPI', 'MCP', 'Pydantic'],
    category: 'Backend',
    icon: Database,
    color: 'from-blue-500 to-purple-500',
    github: 'https://github.com/HeyBatlle1/medical-mcp-server',
    demo: null,
    featured: false
  },
  {
    id: 4,
    title: 'DocAmy',
    description: 'Sophisticated AI-powered medical consultation platform built with React and TypeScript that integrates with Tavus API to provide emergency medical guidance through personalized video responses.',
    tech: ['React', 'TypeScript', 'Tavus API', 'Node.js'],
    category: 'Healthcare',
    icon: Code,
    color: 'from-purple-500 to-pink-500',
    github: 'https://github.com/HeyBatlle1/DocAmy',
    demo: null,
    featured: false
  },
  {
    id: 6,
    title: 'ToS Salad',
    description: 'Non-profit, open-source educational platform making Terms of Service documents accessible and understandable. Features a Red Flag Detector that identifies concerning clauses in plain language, using AI-assisted analysis with human review workflows.',
    tech: ['TypeScript', 'JavaScript', 'AI/ML', 'AGPL-3.0'],
    category: 'Open Source',
    icon: Scale,
    color: 'from-amber-500 to-red-500',
    github: 'https://github.com/HeyBatlle1/ToS-Salad',
    demo: null,
    featured: true,
    deprecated: false
  }
];

const categories = ['All', 'Enterprise', 'Healthcare', 'Backend', 'Open Source'];

export const ProjectShowcase = memo(() => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = useMemo(() =>
    selectedCategory === 'All'
      ? projects
      : projects.filter(project => project.category === selectedCategory),
    [selectedCategory]
  );

  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category);
  }, []);

  const handleMouseEnter = useCallback((id: number) => {
    setHoveredProject(id);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredProject(null);
  }, []);

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-cyber font-bold mb-6">
            <span className="text-gradient-accent">PROJECT</span>
            <span className="text-foreground"> MATRIX</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions crafted with precision and powered by cutting-edge technology.
            Each project represents a unique challenge solved through intelligent design.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => handleCategoryChange(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl font-mono text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground shadow-cyber'
                  : 'glass text-muted-foreground hover:text-primary hover:border-primary/30'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                onMouseEnter={() => handleMouseEnter(project.id)}
                onMouseLeave={handleMouseLeave}
                className={`relative group cursor-pointer ${
                  project.featured ? 'md:col-span-2' : ''
                }`}
                style={{ 
                  perspective: '1000px',
                  transformStyle: 'preserve-3d' 
                }}
              >
                <div className={`glass rounded-2xl overflow-hidden border transition-all duration-500 ${
                  hoveredProject === project.id 
                    ? 'border-primary/50 shadow-cyber' 
                    : 'border-border/20'
                }`}>
                  {/* Project Header */}
                  <div className={`relative p-6 bg-gradient-to-r ${project.color} text-white`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                          <project.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{project.title}</h3>
                          <p className="text-white/80 text-sm">{project.category}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        {project.deprecated && (
                          <div className="flex items-center space-x-1 px-2 py-1 bg-yellow-500/20 border border-yellow-500/50 rounded-lg">
                            <AlertTriangle className="w-3 h-3 text-yellow-400" />
                            <span className="text-xs font-mono text-yellow-400">DEPRECATED</span>
                          </div>
                        )}
                        {project.featured && (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            className="w-8 h-8 border-2 border-white/50 rounded-full border-t-white"
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-lg text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3 pt-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm font-mono">Code</span>
                      </motion.a>
                      
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center space-x-2 px-4 py-2 bg-accent/10 text-accent rounded-lg hover:bg-accent/20 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="text-sm font-mono">Demo</span>
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: hoveredProject === project.id ? 1 : 0 
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 pointer-events-none"
                  />
                </div>

                {/* Floating Elements */}
                {hoveredProject === project.id && (
                  <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full glow-terminal"
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
});

ProjectShowcase.displayName = 'ProjectShowcase';