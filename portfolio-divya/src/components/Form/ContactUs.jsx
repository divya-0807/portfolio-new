import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const form = useRef();
  const [currentTime] = useState(new Date().toLocaleString());

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_service_ID,
        import.meta.env.VITE_template_id,
        form.current,
        import.meta.env.VITE_public_Key
      )
      .then(
        () => {
          toast.success("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("Email error ❌", error);
          toast.error("❌ Failed to send. Please try again.");
        }
      );
  };

  return (
    <div className="w-full px-6 py-16 md:px-20 lg:px-40 bg-black text-white" id="contact">
      <ToastContainer position="top-center" autoClose={3000} />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl font-semibold mb-10 text-center">
          Got a spark? <span className="underline">Let’s make it real.</span>
        </h1>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Lottie Animation */}
          <div className="flex justify-center w-full lg:w-1/2">
            <DotLottieReact
  src="/assets/Contactus.lottie"
  loop
  autoplay
  className="w-[0px] md:w-[900px] -ml-6"
/>

          </div>

          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-8 w-full lg:w-1/2"
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex flex-col w-full">
                <label className="text-sm mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="bg-transparent border-b border-white outline-none py-2 text-white placeholder-gray-400"
                  placeholder="Enter your name"
                />
              </div>

              <div className="flex flex-col w-full">
                <label className="text-sm mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="bg-transparent border-b border-white outline-none py-2 text-white placeholder-gray-400"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="flex flex-col w-full">
              <label className="text-sm mb-2">Message</label>
              <textarea
                name="message"
                required
                rows="2"
                className="bg-transparent border-b border-white outline-none py-2 text-white placeholder-gray-400"
                placeholder="Type your message..."
              ></textarea>
            </div>

            <input
              type="text"
              name="time"
              value={currentTime}
              readOnly
              hidden
            />

            <button
              type="submit"
              className="mt-6 mb-6  border-b-2 border-white rounded-4xl cursor-pointer py-2 px-4 text-black bg-white transition-all duration-300 w-fit"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className=" text-center">
          <p className="mb-4 text-lg font-medium">Or reach me at:</p>
          <div className="flex justify-center gap-6 text-xl">
            <a
              href="https://www.linkedin.com/in/divya-lokwani/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/divyalokwani_?igsh=bW9hNDg5MDBvZ3Jo&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:divyalokwani08@gmail.com"
              className="hover:text-gray-300 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
