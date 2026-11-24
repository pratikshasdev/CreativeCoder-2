import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z
    .string()
    .min(2, { message: "Subject must be at least 2 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    const serviceID = "service_kjwoj2q";
    const templateID = "template_g10jtck";
    const publicKey = "iivFUqZ_CBQETWBWb";

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
        variant: "default",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 relative inline-block">
            Get In Touch
            <span className="absolute top-12 left-0 w-full h-1 bg-[#FF9F1C] transform -translate-y-2"></span>
          </h2>
          <p className="text-gray-600 text-center max-w-2xl">
            I'm open to full-time and contract mobile roles. Send me a message
            and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold font-poppins mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-black bg-opacity-10 p-3 rounded-lg mr-4">
                    <i className="ri-map-pin-line text-xl text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-gray-600">Canton, MI</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-black bg-opacity-10 p-3 rounded-lg mr-4">
                    <i className="ri-mail-line text-xl text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a
                      href="mailto:pratiksha.sdev@gmail.com"
                      className="text-gray-600 hover:text-primary"
                    >
                      pratiksha.sdev@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-black bg-opacity-10 p-3 rounded-lg mr-4">
                    <i className="ri-phone-line text-xl text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-gray-600">+1 (716) 295-3470</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold font-poppins mt-10 mb-4">
                Social Profiles
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/pratikshasdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black bg-opacity-10 p-3 rounded-lg text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <i className="ri-github-fill text-xl"></i>
                </a>
                <a
                  href="https://linkedin.com/in/pratiksha-shirsath"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black bg-opacity-10 p-3 rounded-lg text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <i className="ri-linkedin-fill text-xl"></i>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-2xl font-bold font-poppins mb-6">
                  Send Me a Message
                </h3>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">
                            Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              {...field}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
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
                          <FormLabel className="text-sm font-medium text-gray-700">
                            Email
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="Your email"
                              {...field}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
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
                        <FormLabel className="text-sm font-medium text-gray-700">
                          Subject
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Subject"
                            {...field}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
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
                        <FormLabel className="text-sm font-medium text-gray-700">
                          Message
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Your message"
                            rows={5}
                            {...field}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors duration-300 flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    <span>Send Message</span>
                    <i className="ri-send-plane-line ml-2"></i>
                  </Button>
                </div>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
