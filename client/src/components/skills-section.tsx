import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const technicalSkills = [
  { name: 'JavaScript/TypeScript', level: 95, color: 'purple' },
  { name: 'React/Next.js', level: 90, color: 'indigo' },
  { name: 'Node.js/Express', level: 85, color: 'green' },
  { name: 'Python/Django', level: 80, color: 'yellow' },
  { name: 'AWS/Cloud Services', level: 75, color: 'orange' }
];

const techStack = [
  { name: 'JavaScript', icon: '🟨', color: 'yellow' },
  { name: 'React', icon: '⚛️', color: 'purple' },
  { name: 'Node.js', icon: '🟢', color: 'green' },
  { name: 'Python', icon: '🐍', color: 'yellow' },
  { name: 'AWS', icon: '☁️', color: 'orange' },
  { name: 'Docker', icon: '🐳', color: 'indigo' },
  { name: 'MongoDB', icon: '🍃', color: 'green' },
  { name: 'Git', icon: '📋', color: 'red' }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">Skills & Technologies</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-purple-400 mb-6">Technical Skills</h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300 font-semibold">{skill.name}</span>
                    <span className={`text-${skill.color}-400`}>{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-3" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack Icons */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-indigo-400 mb-6">Tech Stack</h3>
            
            <div className="grid grid-cols-4 gap-6">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className={`bg-slate-800 border-slate-700 hover:border-${tech.color}-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-${tech.color}-500/10`}>
                    <CardContent className="p-4 text-center">
                      <div className="text-3xl mb-2">{tech.icon}</div>
                      <p className="text-slate-300 text-sm">{tech.name}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
