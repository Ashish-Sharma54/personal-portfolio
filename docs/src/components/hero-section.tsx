import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';

export default function HeroSection() {
  const { scrollToSection } = useSmoothScroll();

  const handleDownloadResume = async () => {
    try {
      const response = await fetch('/api/resume');
      const data = await response.json();
      
      if (data.success) {
        // In a real implementation, this would trigger a download
        console.log('Resume download:', data.downloadUrl);
        // window.open(data.downloadUrl, '_blank');
      }
    } catch (error) {
      console.error('Failed to download resume:', error);
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 via-black/20 to-gray-800/30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Hi, I'm <span className="gradient-text">Alex Chen</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed">
              Full Stack Developer & UI/UX Designer crafting exceptional digital experiences
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-slate-600 hover:border-purple-400 hover:text-purple-400 transition-all duration-300"
              onClick={handleDownloadResume}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors text-xl">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors text-xl">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors text-xl">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors text-xl">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-slate-700 shadow-2xl shadow-blue-500/10 animate-float">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600" 
                alt="Professional developer portrait" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-700/20 to-black/20"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
