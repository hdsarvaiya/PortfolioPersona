import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useReveal } from '@/hooks/use-reveal';
import { SectionHeading } from './ui/section-heading';
import { Mail, Phone, MapPin, GitPullRequest, Linkedin, Twitter, Instagram, Github } from 'lucide-react';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { contactFormSchema } from '@shared/schema';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactForm: React.FC = () => {
  const { ref, isActive } = useReveal();
  const { toast } = useToast();
  
  // Define form with Zod schema validation
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
  });

  // Contact form submission mutation
  const mutation = useMutation({
    mutationFn: (data: z.infer<typeof contactFormSchema>) => {
      return apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(data: z.infer<typeof contactFormSchema>) {
    mutation.mutate(data);
  }

  return (
    <motion.div 
      ref={ref}
      className={`bg-black dark:bg-black border border-gray-800 rounded-xl p-8 shadow-lg reveal ${isActive ? 'active' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h3 className="text-2xl font-bold mb-6 text-white">Send Me a Message</h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Your name" 
                      {...field} 
                      className="w-full px-4 py-3 border border-gray-700 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#aaff00] focus:border-[#aaff00]"
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="your.email@example.com" 
                      {...field} 
                      className="w-full px-4 py-3 border border-gray-700 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#aaff00] focus:border-[#aaff00]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="What is this regarding?" 
                    {...field} 
                    className="w-full px-4 py-3 border border-gray-700 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#aaff00] focus:border-[#aaff00]"
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
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea 
                    rows={5} 
                    placeholder="Your message here..." 
                    {...field} 
                    className="w-full px-4 py-3 border border-gray-700 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#aaff00] focus:border-[#aaff00]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button
            type="submit"
            className="w-full px-6 py-3 bg-[#aaff00] text-black rounded-md hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </Form>
    </motion.div>
  );
};

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  link?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, value, link }) => {
  return (
    <div className="flex items-start">
      <div className="w-10 h-10 rounded-full border border-[#aaff00] bg-black flex items-center justify-center mr-4 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-medium text-white mb-1">{title}</h4>
        {link ? (
          <a 
            href={link} 
            className="text-gray-300 hover:text-[#aaff00] transition-colors"
          >
            {value}
          </a>
        ) : (
          <p className="text-gray-300">{value}</p>
        )}
      </div>
    </div>
  );
};

const SocialLinks: React.FC = () => {
  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: 'https://github.com/harshvardhan-sarvaiya', ariaLabel: 'GitHub' },
    { icon: <Linkedin className="h-5 w-5" />, href: 'https://linkedin.com/in/harshvardhan-sarvaiya', ariaLabel: 'LinkedIn' },
    { icon: <Twitter className="h-5 w-5" />, href: 'https://twitter.com/harshvardhansinh', ariaLabel: 'Twitter' },
    { icon: <Instagram className="h-5 w-5" />, href: 'https://instagram.com/harshvardhansinh', ariaLabel: 'Instagram' },
    { icon: <Mail className="h-5 w-5" />, href: 'mailto:harshvardhansinh.work@gmail.com', ariaLabel: 'Email' },
  ];
  
  return (
    <div className="flex flex-wrap gap-4 justify-start">
      {socialLinks.map((link, index) => (
        <a 
          key={index}
          href={link.href} 
          className="w-10 h-10 rounded-full border border-[#aaff00] bg-black flex items-center justify-center text-[#aaff00] hover:bg-[#aaff00] hover:text-black transition-colors duration-300"
          target="_blank" 
          rel="noopener noreferrer"
          aria-label={link.ariaLabel}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

const ContactInformation: React.FC = () => {
  const { ref: infoRef, isActive: infoActive } = useReveal();
  const { ref: socialRef, isActive: socialActive } = useReveal();
  
  return (
    <div>
      <motion.div 
        ref={infoRef}
        className={`bg-black dark:bg-black border border-gray-800 rounded-xl p-8 shadow-lg mb-8 reveal ${infoActive ? 'active' : ''}`}
        initial={{ opacity: 0, y: 30 }}
        animate={infoActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
        <div className="space-y-4">
          <ContactInfo 
            icon={<Mail className="h-5 w-5 text-[#aaff00]" />} 
            title="Email" 
            value="harshvardhansinh.work@gmail.com" 
            link="mailto:harshvardhansinh.work@gmail.com" 
          />
          
          <ContactInfo 
            icon={<Phone className="h-5 w-5 text-[#aaff00]" />} 
            title="Phone" 
            value="+91 6356671251" 
            link="tel:+916356671251" 
          />
          
          <ContactInfo 
            icon={<MapPin className="h-5 w-5 text-[#aaff00]" />}
            title="Location" 
            value="Vadodara, Gujarat, India"
          />
        </div>
      </motion.div>
      
      <motion.div 
        ref={socialRef}
        className={`bg-black dark:bg-black border border-gray-800 rounded-xl p-8 shadow-lg reveal ${socialActive ? 'active' : ''}`}
        initial={{ opacity: 0, y: 30 }}
        animate={socialActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      >
        <h3 className="text-2xl font-bold mb-6 text-white">Follow Me</h3>
        <SocialLinks />
      </motion.div>
    </div>
  );
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading 
          title="Get In Touch"
          subtitle="I'm currently available for freelance work and full-time positions. If you'd like to discuss a project or opportunity, feel free to reach out."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <ContactForm />
          <ContactInformation />
        </div>
      </div>
    </section>
  );
};

export default Contact;
