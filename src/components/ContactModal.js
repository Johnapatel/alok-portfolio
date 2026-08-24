import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // Replace with your Web3Forms access key
    const accessKey = "a7d8c836-0407-4787-aa34-295418f0dfa5";
    
    if (accessKey === "YOUR_WEB3FORMS_ACCESS_KEY_HERE") {
        setStatus("Error: Web3Forms Access Key is missing. Please provide it!");
        return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: accessKey, ...formData })
      });

      const result = await response.json();
      if (result.success) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => { onClose(); setStatus(''); }, 2000);
      } else {
        setStatus('Error: ' + result.message);
      }
    } catch (error) {
      setStatus('Something went wrong!');
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-dark/60 dark:bg-light/20 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, y: "100%", x: "-50%" }} 
            animate={{ opacity: 1, y: "-50%", x: "-50%" }} 
            exit={{ opacity: 0, y: "-50%", x: "-50%" }}
            className="fixed top-1/2 left-1/2 z-[101] w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] bg-light dark:bg-dark p-8 rounded-2xl shadow-2xl border border-solid border-dark dark:border-light"
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-dark dark:text-light hover:text-primary dark:hover:text-primaryDark">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <h2 className="text-3xl font-bold mb-6 text-dark dark:text-light">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="p-3 rounded-lg border border-dark/20 dark:border-light/20 bg-light dark:bg-dark text-dark dark:text-light focus:outline-none focus:border-primary dark:focus:border-primaryDark" />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="p-3 rounded-lg border border-dark/20 dark:border-light/20 bg-light dark:bg-dark text-dark dark:text-light focus:outline-none focus:border-primary dark:focus:border-primaryDark" />
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required className="p-3 rounded-lg border border-dark/20 dark:border-light/20 bg-light dark:bg-dark text-dark dark:text-light focus:outline-none focus:border-primary dark:focus:border-primaryDark" />
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required rows="4" className="p-3 rounded-lg border border-dark/20 dark:border-light/20 bg-light dark:bg-dark text-dark dark:text-light focus:outline-none focus:border-primary dark:focus:border-primaryDark resize-none"></textarea>
              <button type="submit" className="mt-2 bg-dark text-light dark:bg-light dark:text-dark p-3 rounded-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light transition-all duration-300">
                Send Message
              </button>
            </form>
            {status && <p className="mt-4 text-center font-medium text-primary dark:text-primaryDark">{status}</p>}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
