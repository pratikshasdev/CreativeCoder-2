import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { ContactForm } from '@/types';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters long' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters long' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters long' })
});

export default function Contact() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  
  const form = useForm<ContactForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });
  
  const contactMutation = useMutation({
    mutationFn: (data: ContactForm) => {
      return apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setSubmitted(true);
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive"
      });
    }
  });
  
  function onSubmit(data: ContactForm) {
    contactMutation.mutate(data);
  }
  
  return (
    <section id="contact" className="py-20 bg-[var(--grey-light)] relative reveal">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 text-[var(--grey-dark)]">Get In Touch</h2>
          <p className="text-[var(--grey-dark)] max-w-2xl mx-auto">
            Have a mobile app project in mind or interested in hiring me for your development team? I'd love to hear from you!
          </p>
        </motion.div>
        
        <motion.div 
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Contact form */}
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6 text-[var(--grey-dark)]">Send Me a Message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[var(--grey-dark)]">Your Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your name" 
                            {...field} 
                            className="w-full px-4 py-3 border border-[var(--grey-medium)] rounded-lg focus:outline-none focus:border-[var(--blue-primary)]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[var(--grey-dark)]">Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="your.email@example.com" 
                            type="email" 
                            {...field} 
                            className="w-full px-4 py-3 border border-[var(--grey-medium)] rounded-lg focus:outline-none focus:border-[var(--blue-primary)]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[var(--grey-dark)]">Subject</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Mobile App Development Inquiry" 
                            {...field} 
                            className="w-full px-4 py-3 border border-[var(--grey-medium)] rounded-lg focus:outline-none focus:border-[var(--blue-primary)]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[var(--grey-dark)]">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell me about your project or job opportunity..." 
                            {...field} 
                            rows={5}
                            className="w-full px-4 py-3 border border-[var(--grey-medium)] rounded-lg focus:outline-none focus:border-[var(--blue-primary)]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={contactMutation.isPending}
                    className="btn-hover-effect w-full bg-[var(--blue-primary)] text-white py-3 rounded-lg shadow-md hover:shadow-lg transition-all cursor-link"
                  >
                    {contactMutation.isPending ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Form>
            </div>
            
            {/* Contact info */}
            <div className="bg-[var(--blue-primary)] text-white p-8 md:p-12 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="mb-8">Feel free to reach out to me through any of these channels. I'm always open to discussing new projects and opportunities.</p>
                
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-4 shrink-0">
                      <i className='bx bx-envelope text-xl'></i>
                    </div>
                    <div>
                      <p className="text-sm text-white text-opacity-80 mb-1">Email</p>
                      <p className="font-medium">pratiksha.sdev@gmail.com</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-4 shrink-0">
                      <i className='bx bx-map text-xl'></i>
                    </div>
                    <div>
                      <p className="text-sm text-white text-opacity-80 mb-1">Location</p>
                      <p className="font-medium">Detroit, MI</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-4 shrink-0">
                      <i className='bx bx-time-five text-xl'></i>
                    </div>
                    <div>
                      <p className="text-sm text-white text-opacity-80 mb-1">Availability</p>
                      <p className="font-medium">Mon-Fri, 9AM - 5PM ET</p>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              {/* Social media */}
              <div className="mt-12">
                <p className="text-sm text-white text-opacity-80 mb-4">Connect with me</p>
                <div className="flex gap-4">
                  <motion.a 
                    href="https://github.com/pratiksha-shirsath" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-colors cursor-link"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className='bx bxl-github'></i>
                  </motion.a>
                  <motion.a 
                    href="https://linkedin.com/in/pratiksha-shirsath" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-colors cursor-link"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className='bx bxl-linkedin'></i>
                  </motion.a>
                  <motion.a 
                    href="https://shirsath.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-colors cursor-link"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className='bx bx-globe'></i>
                  </motion.a>
                  <motion.a 
                    href="mailto:pratiksha.sdev@gmail.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-colors cursor-link"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className='bx bxs-envelope'></i>
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
