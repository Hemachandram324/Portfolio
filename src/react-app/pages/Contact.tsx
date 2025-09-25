import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, AlertCircle, Copy, ExternalLink } from 'lucide-react';
// import TerminalWindow from '@/react-app/components/TerminalWindow';
// import CodeBlock from '@/react-app/components/CodeBlock';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'validating' | 'sending' | 'sent' | 'error'>('idle');
  const [copied, setCopied] = useState<string | null>(null);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hemachandram324@gmail.com',
      href: 'hemachandram324@gmail.com',
      color: 'text-red-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9390890108',
      href: 'tel:+919390890108',
      color: 'text-green-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, Telangana, India',
      href: 'https://maps.google.com/?q=Hyderabad,India',
      color: 'text-blue-500'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'www.linkedin.com/in/hemachandram-kona-1497a7316',
      href: 'https://www.linkedin.com/in/hemachandram-kona-1497a7316',
      color: 'text-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Hemachandram324',
      href: 'https://github.com/Hemachandram324',
      color: 'text-gray-400'
    }
  ];

  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Real-time validation simulation
    if (formStatus === 'error') {
      setFormStatus('idle');
    }
  };

  const validateForm = () => {
    const errors = [];
    if (!formData.name.trim()) errors.push('Name is required');
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errors.push('Valid email is required');
    if (!formData.subject.trim()) errors.push('Subject is required');
    if (!formData.message.trim()) errors.push('Message is required');
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('validating');
    
    // Simulate validation
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const errors = validateForm();
    if (errors.length > 0) {
      setFormStatus('error');
      return;
    }

    setFormStatus('sending');
    
    // Simulate sending
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setFormStatus('sent');
    
    // Reset form after success
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFormStatus('idle');
    }, 3000);
  };

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            Let's <span className="text-orange-500 font-mono">Connect</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to collaborate on your next project or discuss new opportunities
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Side - Code */}
          {/* <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <TerminalWindow title="ContactDetails.java">
              <CodeBlock code={contactCode} animated delay={300} />
            </TerminalWindow> */}

            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              
              {contactInfo.map((contact) => {
                const Icon = contact.icon;
                return (
                  <motion.div
                    key={contact.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-center space-x-4 p-4 glass rounded-lg hover:glow-orange transition-all duration-300 group cursor-pointer"
                    onClick={() => window.open(contact.href, '_blank')}
                  >
                    <div className={`w-12 h-12 ${contact.color} bg-current/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-5 h-5 ${contact.color}`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm">{contact.label}</p>
                      <p className="text-white font-semibold">{contact.value}</p>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          copyToClipboard(contact.value, contact.label);
                        }}
                        className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                      >
                        {copied === contact.label ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4 text-gray-400" />
                        )}
                      </button>
                      <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                        <ExternalLink className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">Social Profiles</h2>
              
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex items-center space-x-4 p-4 glass rounded-lg hover:glow-orange transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 ${social.color} bg-current/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-5 h-5 ${social.color}`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm">{social.label}</p>
                      <p className="text-white font-semibold">{social.value}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          {/* </motion.div> */}

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="glass p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                <Send className="w-6 h-6 text-orange-500" />
                <span>Send Message</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="Project collaboration, job opportunity, etc."
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                    placeholder="Tell me about your project or opportunity..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'validating' || formStatus === 'sending'}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                    formStatus === 'sent'
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : formStatus === 'error'
                      ? 'bg-red-600 hover:bg-red-700 text-white'
                      : 'btn-primary'
                  }`}
                >
                  {formStatus === 'validating' && (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Validating...</span>
                    </>
                  )}
                  {formStatus === 'sending' && (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  )}
                  {formStatus === 'sent' && (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Message Sent!</span>
                    </>
                  )}
                  {formStatus === 'error' && (
                    <>
                      <AlertCircle className="w-5 h-5" />
                      <span>Please check your inputs</span>
                    </>
                  )}
                  {formStatus === 'idle' && (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {formStatus === 'sent' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg"
                  >
                    <p className="text-green-400 text-sm">
                      Thank you for your message! I'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                )}
              </form>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-6 glass p-4 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <p className="text-white font-semibold">Available for new opportunities</p>
                  <p className="text-gray-400 text-sm">Response time: Usually within 24 hours</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
