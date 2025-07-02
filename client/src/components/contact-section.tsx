import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { z } from 'zod';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';

const contactFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormData) => apiRequest('POST', '/api/contact', data),
    onSuccess: () => {
      toast({
        title: 'Message sent successfully!',
        description: 'Thank you for your message. I\'ll get back to you soon.',
      });
      reset();
    },
    onError: (error: any) => {
      toast({
        title: 'Failed to send message',
        description: error.message || 'Please try again later.',
        variant: 'destructive',
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">Let's Work Together</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-6">Get in Touch</h3>
              <p className="text-slate-300 leading-relaxed mb-8">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you're a company looking to hire, or you're looking for a consultant, 
                I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Mail className="text-white h-5 w-5" />
                </div>
                <div>
                  <p className="text-slate-300 font-semibold">Email</p>
                  <p className="text-slate-400">alex.chen@email.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                  <Phone className="text-white h-5 w-5" />
                </div>
                <div>
                  <p className="text-slate-300 font-semibold">Phone</p>
                  <p className="text-slate-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
                  <MapPin className="text-white h-5 w-5" />
                </div>
                <div>
                  <p className="text-slate-300 font-semibold">Location</p>
                  <p className="text-slate-400">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 pt-8">
              <a href="#" className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Github className="text-slate-300 hover:text-white h-5 w-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="text-slate-300 hover:text-white h-5 w-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter className="text-slate-300 hover:text-white h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-slate-300 font-semibold">First Name</Label>
                      <Input
                        id="firstName"
                        {...register('firstName')}
                        placeholder="John"
                        className="mt-2 bg-slate-700 border-slate-600 text-slate-100 focus:border-blue-500"
                      />
                      {errors.firstName && (
                        <p className="text-red-400 text-sm mt-1">{errors.firstName.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-slate-300 font-semibold">Last Name</Label>
                      <Input
                        id="lastName"
                        {...register('lastName')}
                        placeholder="Doe"
                        className="mt-2 bg-slate-700 border-slate-600 text-slate-100 focus:border-blue-500"
                      />
                      {errors.lastName && (
                        <p className="text-red-400 text-sm mt-1">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-slate-300 font-semibold">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register('email')}
                      placeholder="john@example.com"
                      className="mt-2 bg-slate-700 border-slate-600 text-slate-100 focus:border-blue-500"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-slate-300 font-semibold">Subject</Label>
                    <Input
                      id="subject"
                      {...register('subject')}
                      placeholder="Project Discussion"
                      className="mt-2 bg-slate-700 border-slate-600 text-slate-100 focus:border-blue-500"
                    />
                    {errors.subject && (
                      <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-slate-300 font-semibold">Message</Label>
                    <Textarea
                      id="message"
                      {...register('message')}
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="mt-2 bg-slate-700 border-slate-600 text-slate-100 focus:border-blue-500 resize-none"
                    />
                    {errors.message && (
                      <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    disabled={contactMutation.isPending}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                  >
                    {contactMutation.isPending ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
