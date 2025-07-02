import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-commerce Dashboard',
    description: 'Modern admin dashboard for e-commerce management with real-time analytics and inventory tracking.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
    technologies: ['React', 'TypeScript', 'Tailwind'],
    category: 'web',
    color: 'purple',
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'Fitness Tracker App',
    description: 'Cross-platform mobile app for fitness tracking with social features and personalized workouts.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
    technologies: ['React Native', 'Firebase', 'Redux'],
    category: 'mobile',
    color: 'indigo',
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'Weather API Service',
    description: 'RESTful API service providing real-time weather data with machine learning predictions.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
    technologies: ['Node.js', 'MongoDB', 'ML'],
    category: 'api',
    color: 'violet',
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 4,
    title: 'Real-time Chat App',
    description: 'Secure messaging platform with end-to-end encryption and file sharing capabilities.',
    image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
    technologies: ['Socket.io', 'Express', 'Redis'],
    category: 'web',
    color: 'green',
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 5,
    title: 'Analytics Dashboard',
    description: 'Interactive data visualization platform with real-time charts and custom report generation.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
    technologies: ['D3.js', 'Python', 'PostgreSQL'],
    category: 'web',
    color: 'yellow',
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 6,
    title: 'Social Media App',
    description: 'Modern social platform with AI-powered content recommendations and AR filters.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
    technologies: ['Flutter', 'GraphQL', 'AI/ML'],
    category: 'mobile',
    color: 'red',
    demoUrl: '#',
    githubUrl: '#'
  }
];

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Web Apps', value: 'web' },
  { label: 'Mobile', value: 'mobile' },
  { label: 'APIs', value: 'api' }
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            A showcase of my latest work and personal projects
          </p>
          
          {/* Project Filter */}
          <div className="flex justify-center flex-wrap gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.value}
                variant={activeFilter === filter.value ? "default" : "secondary"}
                onClick={() => setActiveFilter(filter.value)}
                className={activeFilter === filter.value ? 
                  "bg-purple-600 hover:bg-purple-700" : 
                  "bg-slate-700 text-slate-300 hover:bg-slate-600"
                }
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`group bg-slate-800 border-slate-700 hover:border-${project.color}-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-${project.color}-500/10 overflow-hidden`}>
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`project-overlay absolute inset-0 bg-gradient-to-t from-${project.color}-900/80 to-transparent flex items-end justify-center pb-4`}>
                    <div className="flex space-x-3">
                      <Button size="sm" className="bg-white text-slate-900 hover:bg-slate-100">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-slate-900 text-white hover:bg-slate-800">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className={`text-xl font-bold mb-2 text-${project.color}-400`}>{project.title}</h3>
                  <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className={`bg-${project.color}-900/50 text-${project.color}-300`}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
