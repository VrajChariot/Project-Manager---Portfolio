import { useState, type FormEvent } from "react";
import type { ContactFormData } from "../../types";

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
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
      name: "",
      email: "",
      message: "",
    });

    // Hide success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="section bg-linear-to-br from-white via-slate-50 to-blue-50/40 py-24 relative overflow-hidden"
    >
      {/* Decorative animated orbs */}
      <div className="absolute top-0 left-1/4 w-125 h-125 bg-blue-200/30 rounded-full blur-3xl animate-pulse-slow"></div>
      <div
        className="absolute bottom-0 right-1/4 w-100 h-100 bg-slate-200/30 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "1.5s" }}
      ></div>

      <div className="container px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 text-center">
            Get In Touch
          </h2>
          <p className="text-center text-gray-600 mb-20 text-lg max-w-2xl mx-auto">
            Let's discuss how I can contribute to your team's success
          </p>

          <div className="grid md:grid-cols-[1fr_1.5fr] gap-16">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold mb-10 text-slate-900">
                Contact Information
              </h3>
              <div className="flex flex-col gap-5 mb-5">
                <div className="flex gap-4 items-start p-5 rounded-lg bg-linear-to-br from-blue-50 to-blue-100/50 border border-blue-200/60 hover:shadow-md transition-all duration-300 group">
                  <div className="text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                    📧
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-800 mb-1">
                      Email
                    </h4>
                    <a
                      href="mailto:aniket.shah@example.com"
                      className="text-blue-600 text-sm hover:text-blue-700 transition-colors"
                    >
                      aniket.shah@example.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-5 rounded-lg bg-linear-to-br from-blue-50 to-blue-100/50 border border-blue-200/60 hover:shadow-md transition-all duration-300 group">
                  <div className="text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                    📱
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-800 mb-1">
                      Phone
                    </h4>
                    <a
                      href="tel:+1234567890"
                      className="text-blue-600 text-sm hover:text-blue-700 transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-5 rounded-lg bg-linear-to-br from-blue-50 to-blue-100/50 border border-blue-200/60 hover:shadow-md transition-all duration-300 group">
                  <div className="text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                    📍
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-800 mb-1">
                      Location
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Available for Remote & On-site
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="p-5 bg-linear-to-br from-green-100/70 to-emerald-100/50 rounded-lg border border-green-300/60"
                style={{
                  animation: "borderPulse 4s ease-in-out infinite",
                }}
              >
                <h4 className="text-sm font-semibold text-slate-800 mb-3">
                  Current Status
                </h4>
                <div className="flex items-center gap-2 text-slate-700 text-sm">
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
                  <span>Actively seeking opportunities</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form
              className="bg-linear-to-br from-white to-blue-50/30 p-10 rounded-xl shadow-sm border border-blue-100/50 transition-all hover:shadow-md"
              onSubmit={handleSubmit}
            >
              {isSubmitted && (
                <div className="bg-green-50 border border-green-200/60 text-green-700 p-4 rounded-lg mb-6 text-center font-medium animate-fade-in-up flex items-center justify-center gap-2">
                  <span>✓</span>
                  <span>Thank you! I'll get back to you soon.</span>
                </div>
              )}

              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block mb-2 font-semibold text-slate-800 text-sm"
                >
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base transition-all duration-300 bg-white text-slate-800 focus:outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 font-semibold text-slate-800 text-sm"
                >
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base transition-all duration-300 bg-white text-slate-800 focus:outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]"
                />
              </div>

              <div className="mb-8">
                <label
                  htmlFor="message"
                  className="block mb-2 font-semibold text-slate-800 text-sm"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base transition-all duration-300 bg-white text-slate-800 resize-none focus:outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg text-base font-semibold bg-slate-800 text-white shadow-md transition-all duration-300 hover:bg-slate-900 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
