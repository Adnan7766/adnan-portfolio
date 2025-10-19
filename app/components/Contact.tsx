'use client';
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MapPin, Phone, Send, MessageCircle, Zap } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully! I\'ll get back to you soon.');
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section ref={sectionRef} id="contact" className="py-24 bg-[#0f172a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-800/10 via-transparent to-emerald-900/10 blur-3xl"></div>
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>

      {/* Floating Icons */}
      <motion.div
        className="absolute top-20 left-10 text-cyan-400/20"
        animate={{ 
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <MessageCircle size={40} />
      </motion.div>
      <motion.div
        className="absolute top-40 right-20 text-emerald-400/20"
        animate={{ 
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <Mail size={30} />
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-20 text-purple-400/20"
        animate={{ 
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <Zap size={35} />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            Let's <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Connect</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "200px" } : {}}
            transition={{ delay: 0.6, duration: 1 }}
            className="h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto mt-8 rounded-full"
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="font-medium mb-5 text-cyan-400 text-xl uppercase tracking-wider">
                Send Me a Message
              </p>
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 transition-all duration-500 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-500/10">
                <p className="text-sm text-gray-300 mb-6">
                  I'm open to new opportunities and collaborations. Let's discuss how we can work together!
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-base text-gray-200 font-medium">Your Name</label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      className="bg-gray-800/50 backdrop-blur-sm w-full border rounded-xl border-gray-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 ring-0 outline-0 transition-all duration-300 px-4 py-3 text-white placeholder-gray-400"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-base text-gray-200 font-medium">Your Email</label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      className="bg-gray-800/50 backdrop-blur-sm w-full border rounded-xl border-gray-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 ring-0 outline-0 transition-all duration-300 px-4 py-3 text-white placeholder-gray-400"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-base text-gray-200 font-medium">Your Message</label>
                    <motion.textarea
                      whileFocus={{ scale: 1.02 }}
                      className="bg-gray-800/50 backdrop-blur-sm w-full border rounded-xl border-gray-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 ring-0 outline-0 transition-all duration-300 px-4 py-3 text-white placeholder-gray-400 resize-none"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or inquiry..."
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 30px rgba(6, 182, 212, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-8 py-4 text-center font-semibold uppercase tracking-wider text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Send size={20} />
                      </motion.div>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={20} />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:w-full"
          >
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="font-medium mb-5 text-emerald-400 text-xl uppercase tracking-wider">
                Get In Touch
              </p>
              <div className="space-y-6 lg:space-y-8">
                {/* Email */}
                <motion.div
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/30 transition-all duration-300 cursor-pointer group"
                  whileHover={{ 
                    scale: 1.02,
                    backgroundColor: "rgba(6, 182, 212, 0.1)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Mail size={24} />
                  </motion.div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-medium">adnanrajab7766@gmail.com</p>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-emerald-400/30 transition-all duration-300 cursor-pointer group"
                  whileHover={{ 
                    scale: 1.02,
                    backgroundColor: "rgba(16, 185, 129, 0.1)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg group-hover:shadow-emerald-500/25 transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Phone size={24} />
                  </motion.div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white font-medium">+92 3454061643</p>
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/30 transition-all duration-300 cursor-pointer group"
                  whileHover={{ 
                    scale: 1.02,
                    backgroundColor: "rgba(139, 92, 246, 0.1)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <MapPin size={24} />
                  </motion.div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-medium">Islamabad, Pakistan</p>
                  </div>
                </motion.div>
              </div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
                className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20"
              >
                <h3 className="text-cyan-400 font-semibold mb-2">Quick Response</h3>
                <p className="text-gray-300 text-sm">
                  I typically respond to emails within 24 hours. For urgent matters, feel free to reach out through multiple channels.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-lg">
            Let's build something <span className="text-cyan-400 font-semibold">extraordinary</span> together!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;