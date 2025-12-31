import { useState, type FormEvent } from 'react';
import type { ContactFormData } from '../../types';

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // In a real application, you would send this data to a backend
    // For now, just show success message
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });

    // Hide success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Let's discuss how I can contribute to your team's success
        </p>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-16 max-w-5xl mx-auto">
          <div>
            <h3 className="text-3xl mb-8 text-slate-800">Contact Information</h3>
            <div className="flex flex-col gap-6 mb-8">
              <div className="flex gap-4 items-start">
                <div className="text-3xl flex-shrink-0">📧</div>
                <div>
                  <h4 className="text-base mb-1 text-slate-800">Email</h4>
                  <a href="mailto:aniket.shah@example.com" className="text-secondary text-sm m-0 hover:text-primary">
                    aniket.shah@example.com
                  </a>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="text-3xl flex-shrink-0">📱</div>
                <div>
                  <h4 className="text-base mb-1 text-slate-800">Phone</h4>
                  <a href="tel:+1234567890" className="text-secondary text-sm m-0 hover:text-primary">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="text-3xl flex-shrink-0">📍</div>
                <div>
                  <h4 className="text-base mb-1 text-slate-800">Location</h4>
                  <p className="text-secondary text-sm m-0">Available for Remote & On-site</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-slate-50 rounded-lg border-l-4 border-primary">
              <h4 className="text-base mb-3 text-slate-800">Current Status</h4>
              <div className="flex items-center gap-2 text-secondary text-sm">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
                <span>Actively seeking opportunities</span>
              </div>
            </div>
          </div>

          <form className="bg-slate-50 p-10 rounded-xl shadow-sm border border-gray-200" onSubmit={handleSubmit}>
            {isSubmitted && (
              <div className="bg-green-500 text-white p-4 rounded-lg mb-6 text-center font-medium animate-fade-in-up">
                ✓ Thank you for your message! I'll get back to you soon.
              </div>
            )}

            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 font-semibold text-slate-800 text-sm">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white text-slate-800 focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 font-semibold text-slate-800 text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white text-slate-800 focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 font-semibold text-slate-800 text-sm">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Tell me about your project or opportunity..."
                className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white text-slate-800 resize-y min-h-[120px] focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]"
              />
            </div>

            <button 
              type="submit" 
              className="px-8 py-3.5 rounded-lg text-base font-semibold bg-primary text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/40"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

