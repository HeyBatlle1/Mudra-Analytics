import { MatrixRain } from '@/components/MatrixRain';
import { Navigation } from '@/components/Navigation';
import { CustomTerminalHero } from '@/components/CustomTerminalHero';
import { ProjectShowcase } from '@/components/ProjectShowcase';
import { GitRepositories } from '@/components/GitRepositories';
import { ContactSection } from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Matrix Rain Background */}
      <MatrixRain />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <CustomTerminalHero />
        
        {/* Project Showcase */}
        <ProjectShowcase />
        
        {/* Git Repositories */}
        <GitRepositories />
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <div className="font-cyber text-lg font-bold text-gradient-primary mb-1">
                MUDRA-ANALYTICS
              </div>
              <div className="text-sm text-muted-foreground font-mono">
                © 2024 Bradlee Burton. Crafted with precision.
              </div>
            </div>
            
            <div className="flex items-center space-x-6 text-sm font-mono text-muted-foreground">
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span>SYSTEM ONLINE</span>
              </span>
              <span>v2.0.1</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
