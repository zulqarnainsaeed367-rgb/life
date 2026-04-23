import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Initialize EmailJS (you need to set up your service ID)
      emailjs.init("YOUR_PUBLIC_KEY");

      const templateParams = {
        to_email: "info@protech.com",
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        templateParams
      );

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      content: "123 Medical Plaza, Healthcare City",
      color: "from-[#0A7BA6] to-[#1F9CBE]"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (234) 567-890",
      color: "from-[#0FA968] to-[#20C997]"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@protech.com",
      color: "from-[#D1345B] to-[#E85A6C]"
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Mon - Fri: 9AM - 5PM | Sat: 10AM - 3PM",
      color: "from-[#054E6F] to-[#0A7BA6]"
    },
  ];

  return (
    <div className="bg-white theme-canvas">
      {/* Hero Section */}
      <section className="hero-premium text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-[#E1E8F0] max-w-2xl">
            Have questions or need assistance? Get in touch with our dedicated support team.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 section-soft">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <div
                  key={idx}
                  className={`bg-gradient-to-br ${info.color} text-white rounded-2xl p-8 shadow-lg-medical`}
                >
                  <Icon size={40} className="mb-4" />
                  <h3 className="text-lg font-bold mb-2">{info.title}</h3>
                  <p className="opacity-90">{info.content}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-transparent">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gradient-soft mb-2">Send us a Message</h2>
              <p className="text-[#3F4A63] mb-8">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 panel-premium p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-premium"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-premium"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-premium"
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="input-premium"
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="input-premium"
                ></textarea>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-3 btn-gradient flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {submitted && (
                  <div className="p-4 panel-soft text-[#0A7A51] rounded-lg border border-[#A4E5C6]">
                    ✓ Message sent successfully! We'll get back to you soon.
                  </div>
                )}
              </form>
            </div>

            {/* FAQ and Additional Info */}
            <div>
              <h2 className="text-3xl font-bold text-gradient-soft mb-8">Frequently Asked Questions</h2>

              <div className="space-y-6">
                {[
                  {
                    question: "How do I book an appointment?",
                    answer: "Visit our booking page, select a doctor, choose your preferred time, and fill in your details. You'll receive a confirmation immediately."
                  },
                  {
                    question: "What are your consultation hours?",
                    answer: "We operate Monday to Friday from 9 AM to 5 PM, and Saturdays from 10 AM to 3 PM. Emergency support is available 24/7."
                  },
                  {
                    question: "Can I reschedule my appointment?",
                    answer: "Yes, you can reschedule your appointment up to 24 hours before the scheduled time through our app or website."
                  },
                  {
                    question: "Do you offer telemedicine consultations?",
                    answer: "Yes, we offer video consultations for most services. Select 'Telemedicine' when booking your appointment."
                  },
                ].map((faq, idx) => (
                  <div key={idx} className="panel-premium p-6">
                    <h3 className="text-lg font-bold text-[#054E6F] mb-2">{faq.question}</h3>
                    <p className="text-[#3F4A63]">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-soft py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gradient-soft mb-8 text-center">Our Location</h2>
          <div className="rounded-xl overflow-hidden shadow-lg h-96">
            <iframe
              title="ProTech Healthcare Location"
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019473969037!2d-122.41941592346968!3d37.77492977175876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064b0901c87%3A0xd70cfaf6e5b6dcc9!2s123%20Medical%20Plaza%2C%20Healthcare%20City!5e0!3m2!1sen!2sus!4v1234567890"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
