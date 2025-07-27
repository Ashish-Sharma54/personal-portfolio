import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Solutions',
    period: '2022 - Present',
    description: 'Led development of enterprise applications using React, Node.js, and AWS. Managed a team of 5 developers and implemented CI/CD pipelines.',
    technologies: ['React', 'Node.js', 'AWS'],
    color: 'purple',
    side: 'left'
  },
  {
    title: 'Full Stack Developer',
    company: 'StartupXYZ',
    period: '2020 - 2022',
    description: 'Built scalable web applications from scratch. Implemented modern frontend frameworks and optimized backend performance by 40%.',
    technologies: ['Vue.js', 'Python', 'Docker'],
    color: 'indigo',
    side: 'right'
  },
  {
    title: 'Frontend Developer',
    company: 'DigitalAgency',
    period: '2018 - 2020',
    description: 'Developed responsive websites and web applications. Collaborated with designers to implement pixel-perfect UI designs.',
    technologies: ['JavaScript', 'CSS', 'jQuery'],
    color: 'violet',
    side: 'left'
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">Experience</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            My professional journey in building innovative solutions
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-purple-600 to-indigo-600 hidden md:block"></div>
          
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center ${exp.side === 'left' ? 'md:justify-between' : 'md:justify-between md:flex-row-reverse'}`}
                initial={{ opacity: 0, x: exp.side === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`w-full md:w-5/12 ${exp.side === 'left' ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                  <Card className={`bg-slate-800 border-slate-700 hover:border-${exp.color}-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-${exp.color}-500/10`}>
                    <CardContent className="p-6">
                      <h3 className={`text-xl font-bold text-${exp.color}-400 mb-2`}>{exp.title}</h3>
                      <p className="text-slate-300 font-semibold mb-2">{exp.company}</p>
                      <p className="text-slate-400 text-sm mb-4">{exp.period}</p>
                      <p className="text-slate-300 leading-relaxed mb-4">{exp.description}</p>
                      <div className={`flex flex-wrap gap-2 ${exp.side === 'left' ? 'md:justify-end' : ''}`}>
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className={`bg-${exp.color}-900/50 text-${exp.color}-300`}>
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Timeline dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-${exp.color}-600 rounded-full border-4 border-slate-900 hidden md:block`}></div>
                
                <div className="hidden md:block md:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
