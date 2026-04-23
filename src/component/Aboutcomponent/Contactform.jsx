import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contactform = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_4y7xqpb",
        "template_r27f2xi",
        form.current,
        "gbSNz1i5hL9TosDs3"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent Successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message!");
        }
      );

    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-[#0B1E13] flex items-center justify-center px-4">
      <div className="w-full max-w-xl">

        <h1 className="text-5xl font-extrabold text-[#f0f4ff] mb-8">
          Contact <span className="text-[#155DFC]">Form</span>
        </h1>

        <div className="rounded-lg p-8 border border-[#174C38]/30 bg-[#0e2419]">

          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">

            {/* Name */}
            <input
              type="text"
              name="user_name"
              placeholder="Full Name"
              className="w-full p-3 rounded bg-[#0b1e13] text-white"
              required
            />

            {/* Email */}
            <input
              type="email"
              name="user_email"
              placeholder="Email Address"
              className="w-full p-3 rounded bg-[#0b1e13] text-white"
              required
            />

            {/* Phone */}
            <input
              type="tel"
              name="user_phone"
              placeholder="Phone Number"
              className="w-full p-3 rounded bg-[#0b1e13] text-white"
            />

          

            {/* Message */}
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full p-3 rounded bg-[#0b1e13] text-white"
              required
            />

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-[#155DFC] to-[#174C38] text-white font-semibold rounded-md"
            >
              Send Message →
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactform;