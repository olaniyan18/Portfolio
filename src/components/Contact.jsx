/** @format */

import React, { useState } from "react";
import { Mail, Phone, ExternalLink, Send } from "lucide-react";

const ContactMethod = ({ icon: Icon, title, value, href }) => (
  <a
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    className='group flex items-center gap-4 bg-linear-to-br from-slate-800 to-slate-700/50 border border-slate-600/50 p-6 rounded-lg hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all duration-300'
  >
    <div className='p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors'>
      <Icon
        className='text-cyan-400 group-hover:text-blue-400 transition-colors'
        size={24}
      />
    </div>
    <div>
      <p className='text-gray-400 text-sm font-medium'>{title}</p>
      <p className='text-white font-semibold group-hover:text-cyan-400 transition-colors'>
        {value}
      </p>
    </div>
  </a>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link
    const mailtoLink = `mailto:olaniyanfeyikemi@gmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "olaniyankafayah@gmail.com",
      href: "mailto:olaniyankafayah@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+234 814 208 9061",
      href: "tel:+2348142089061",
    },
    {
      icon: ExternalLink,
      title: "GitHub",
      value: "github.com/olaniyan18",
      href: "https://github.com/olaniyan18",
    },
  ];

  return (
    <section
      id='contact'
      className='py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-slate-950 to-slate-900/50'
    >
      <div className='max-w-6xl mx-auto'>
        {/* Section Header */}
        <div className='mb-12 text-center'>
          <h2 className='text-4xl sm:text-5xl font-bold mb-4'>
            <span className='bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent'>
              Let's Connect
            </span>
          </h2>
          <div className='w-16 h-1 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full mx-auto' />
          <p className='text-gray-300 mt-6 text-lg max-w-2xl mx-auto'>
            I'm actively seeking opportunities in Canada and excited to
            contribute to innovative teams. Whether you have a role, question,
            or just want to chat, I'd love to hear from you!
          </p>
        </div>

        {/* Content Grid */}
        <div className='grid lg:grid-cols-2 gap-12 mb-12'>
          {/* Contact Methods */}
          <div className='space-y-4'>
            <h3 className='text-2xl font-bold text-white mb-6'>Get In Touch</h3>
            {contactMethods.map((method, idx) => (
              <ContactMethod key={idx} {...method} />
            ))}

            {/* Immigration Status */}
            <div className='bg-linear-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 p-6 rounded-lg mt-6'>
              <p className='text-sm text-green-300 font-semibold mb-2'>
                ✓ Immigration Ready
              </p>
              <p className='text-gray-300 text-sm'>
                Express Entry eligible with CRS: 368. Ready to apply for Alberta
                Advantage PNP upon job offer.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className='text-2xl font-bold text-white mb-6'>
              Send a Message
            </h3>
            <form
              onSubmit={handleSubmit}
              className='space-y-4 bg-linear-to-br from-slate-800 to-slate-700/50 border border-slate-600/50 p-8 rounded-xl'
            >
              {/* Name Input */}
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-300 mb-2'
                >
                  Your Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors'
                  placeholder='John Doe'
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-300 mb-2'
                >
                  Your Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors'
                  placeholder='john@example.com'
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-300 mb-2'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows='5'
                  className='w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none'
                  placeholder='Tell me about the opportunity or just say hello...'
                />
              </div>

              {/* Submit Button */}
              <button
                type='submit'
                className='w-full flex items-center justify-center gap-2 bg-linear-to-r from-blue-500 to-cyan-500 hover:shadow-lg hover:shadow-blue-500/50 text-white py-3 rounded-lg font-bold transition-all duration-300 hover:-translate-y-0.5'
              >
                <Send size={20} />
                Send Message
              </button>

              {/* Success Message */}
              {submitted && (
                <div className='bg-green-500/20 border border-green-500/50 text-green-300 p-4 rounded-lg text-sm text-center animate-pulse'>
                  ✓ Message sent! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* CTA Banner */}
        <div className='bg-linear-to-r from-blue-600/20 via-cyan-600/20 to-blue-600/20 border border-blue-400/30 rounded-xl p-8 sm:p-12 text-center'>
          <h3 className='text-2xl font-bold text-white mb-4'>
            Ready to Work Together?
          </h3>
          <p className='text-gray-300 mb-6 max-w-2xl mx-auto'>
            I'm actively applying to positions in Alberta. If you have an
            opportunity or know someone who might, let's connect!
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='mailto:olaniyankafayah@gmail.com'
              className='px-8 py-3 bg-linear-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-bold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-0.5'
            >
              Email Me Now
            </a>
            <a
              href='https://github.com/olaniyan18'
              target='_blank'
              rel='noopener noreferrer'
              className='px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg font-bold hover:bg-cyan-400/10 transition-all duration-300 hover:-translate-y-0.5'
            >
              Check My GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
