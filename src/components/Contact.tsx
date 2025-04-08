
import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Youtube, Send, Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const { toast } = useToast();
  
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  
  const onSubmit = (data: any) => {
    console.log(data);
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
      variant: "default",
    });
    form.reset();
  };
  
  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Youtube className="h-5 w-5" />, href: "#", label: "YouTube" },
    { icon: <div className="h-5 w-5 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
    </div>, href: "#", label: "Discord" },
    { icon: <div className="h-5 w-5 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 8v-2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2"/><path d="M20 12H9l3-3m0 6-3-3"/></svg>
    </div>, href: "#", label: "Telegram" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Send className="h-5 w-5" />, href: "#", label: "Email" },
  ];
  
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-alien-dark opacity-90 z-0"></div>
      
      {/* Futuristic grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGgxMDB2MTAwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMGgxMzZ2MUgweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMCAwdjEzNmgxVjB6IiBmaWxsPSJyZ2JhKDE0LDI0Myw3NSwwLjAyKSIvPjwvc3ZnPg==')] opacity-10 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-alien-neon/20 to-transparent"></div>
      <div className="absolute right-1/4 bottom-1/3 w-64 h-64 bg-alien-blue/5 rounded-full blur-[100px] z-0"></div>
      <div className="absolute left-1/3 top-1/3 w-64 h-64 bg-alien-neon/5 rounded-full blur-[100px] z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">LET'S CONTACT</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-alien-neon via-[#0FF5CE] to-alien-blue animate-text-gradient bg-[length:200%_auto]">
              GPTVERSE
            </span>
          </h2>
          <div className="h-1 w-36 mx-auto bg-gradient-to-r from-alien-neon/40 to-alien-blue/40 rounded-full my-4"></div>
          <p className="text-white/70 max-w-2xl mx-auto">
            Please use this form to get in touch with us
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto">
          {/* Contact form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1"
          >
            <div className="neo-blur backdrop-blur-lg bg-[#0c1632]/20 border border-white/5 rounded-xl p-6 sm:p-8">
              <h3 className="text-xl font-bold mb-6 text-alien-neon">Send us a message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your name" 
                            {...field} 
                            className="bg-[#0c1632]/50 border-white/10 focus:border-alien-neon/50 focus:ring-1 focus:ring-alien-neon/30"
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
                        <FormLabel className="text-white">Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="your.email@example.com" 
                            {...field}
                            className="bg-[#0c1632]/50 border-white/10 focus:border-alien-neon/50 focus:ring-1 focus:ring-alien-neon/30"
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
                        <FormLabel className="text-white">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message" 
                            {...field}
                            className="bg-[#0c1632]/50 border-white/10 focus:border-alien-neon/50 focus:ring-1 focus:ring-alien-neon/30 min-h-[120px]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-alien-neon to-alien-blue hover:from-alien-neon/90 hover:to-alien-blue/90 text-black font-medium py-5"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
          
          {/* Contact info */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex-1"
          >
            <div className="neo-blur backdrop-blur-lg bg-[#0c1632]/20 border border-white/5 rounded-xl p-6 sm:p-8 h-full flex flex-col">
              <h3 className="text-xl font-bold mb-6 text-alien-blue">Connect with us</h3>
              
              <div className="mb-8">
                <p className="text-white/70 mb-2">Email address:</p>
                <p className="text-white font-medium">contact@gptverse.art</p>
              </div>
              
              <div className="mb-10">
                <p className="text-white/70 mb-4">Follow us on social media:</p>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(14, 243, 75, 0.1)' }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0c1632]/50 border border-white/10 text-white/80 hover:text-alien-neon transition-colors"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
              
              <div className="mt-auto">
                <div className="rounded-lg overflow-hidden relative h-40">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0c1632]/90 to-[#040812]/90"></div>
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="text-center">
                      <h4 className="text-lg font-medium mb-2">Join our community</h4>
                      <p className="text-white/70 text-sm mb-3">Be part of our growing network of AI enthusiasts</p>
                      <Button 
                        className="bg-white/10 hover:bg-white/20 text-white border border-white/20"
                        size="sm"
                      >
                        Discord Community
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="flex justify-center mt-16">
          <div className="flex space-x-3">
            {[1, 2, 3].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                className="w-2 h-2 rounded-full bg-alien-neon"
                style={{ opacity: i === 1 ? 1 : 0.5 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
