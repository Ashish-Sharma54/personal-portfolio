import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Building Scalable React Applications',
    excerpt: 'Best practices for structuring large React applications with performance and maintainability in mind.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300',
    category: 'Development',
    date: 'Mar 15, 2024',
    color: 'purple'
  },
  {
    id: 2,
    title: 'Integrating AI into Web Applications',
    excerpt: 'How to effectively incorporate machine learning models into your web applications for enhanced user experiences.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300',
    category: 'AI/ML',
    date: 'Mar 10, 2024',
    color: 'indigo'
  },
  {
    id: 3,
    title: 'Modern UI/UX Design Principles',
    excerpt: 'Exploring the latest trends in user interface design and their impact on user experience and engagement.',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300',
    category: 'Design',
    date: 'Mar 5, 2024',
    color: 'green'
  }
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">Latest Articles</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Thoughts on development, design, and technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`bg-slate-800 border-slate-700 hover:border-${post.color}-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-${post.color}-500/10 overflow-hidden group cursor-pointer`}>
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge variant="secondary" className={`bg-${post.color}-900/50 text-${post.color}-300`}>
                      {post.category}
                    </Badge>
                    <span className="text-slate-400 text-sm">{post.date}</span>
                  </div>
                  <h3 className={`text-xl font-bold mb-3 text-${post.color}-400 group-hover:text-${post.color}-300 transition-colors`}>
                    {post.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-4">{post.excerpt}</p>
                  <div className={`text-${post.color}-400 hover:text-${post.color}-300 font-semibold inline-flex items-center group-hover:translate-x-1 transition-transform`}>
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
