"use client";
import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaLocationArrow, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // 
  useEffect(() => {
    const saved = localStorage.getItem("contactForm");
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  //  LocalStorage a data 
  useEffect(() => {
    localStorage.setItem("contactForm", JSON.stringify(formData));
  }, [formData]);

  // input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // submit handelar
  const handleSubmit = (e) => {
    e.preventDefault();


    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert("Please fill in all fields before submitting!");
      return;
    }
    // Thank You Massage
    setSubmitted(true);

    // 3 Secound por input fill faka
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
      localStorage.removeItem("contactForm");
    }, 3000);
  };

  return (
    <section className="">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
        Get In <span className="text-blue-700">Touch</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Send Me a Message Area */}
        <form
          data-aos="fade-up"
          onSubmit={handleSubmit}
          className="flex flex-col space-y-5 bg-gray-300 text-black p-5 rounded-xl shadow-xl">
          <h3 className="text-2xl font-medium text-center">Send Me a <span className="text-pink-500">Message</span></h3>

          {/* Name Area */}
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-white p-3 rounded-md w-full border border-blue-700 hover:scale-105 duration-300"
            type="text"
            placeholder="Enter Your Name"
            required />

          {/* Email Area */}
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-white p-3 rounded-md w-full border border-blue-700 hover:scale-105 duration-300"
            type="email"
            placeholder="Enter Your Email"
            required />

          {/* Subject Area */}
          <input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="bg-white p-3 rounded-md w-full border border-blue-700 hover:scale-105 duration-300"
            type="text"
            placeholder="Subject"
            required />

          {/* Text Area */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="bg-white p-3 rounded-md w-full h-32 border border-blue-700 hover:scale-105 duration-300"
            placeholder="Your Message"
            required></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="text-white bg-blue-600 border-blue-700 hover:bg-blue-800 px-4 py-2 max-w-40 m-auto rounded-md hover:scale-95 duration-300">
            Send Message
          </button>

          {/* ✅ Thank You Message */}
          {submitted && (
            <p className="text-green-600 text-center font-semibold mt-3 animate-pulse">
              ✅ Thank you! Your message has been sent.
            </p>
          )}
        </form>


        <div data-aos="zoom-in" className="bg-gray-300 text-black px-8 md:px-10 py-5 rounded-md shadow-xl space-y-5">
          <h3 className="text-2xl font-medium text-center">Contact <span className="text-pink-500">Information</span></h3>

          {/* WhatsApp */}
          <div data-aos="fade-up" className="flex items-center gap-4 md:gap-10">
            <div className="text-4xl text-green-500">
              <FaWhatsapp />
            </div>
            <div className="text-md">
              <p className="text-xl font-semibold">Phone:</p>
              <a href="tel:+8801749535688" className="underline hover:text-blue-900">01749535688</a>
            </div>
          </div>

          {/* Email */}
          <div data-aos="fade-up" className="flex items-center gap-4 md:gap-10">
            <div className="text-3xl text-blue-700">
              <FaEnvelope />
            </div>
            <div className="text-md">
              <p className="text-xl font-semibold">Email:</p>
              <a href="mailto:mdnoyon631234@gmail.com" className="underline hover:text-blue-900"> mdnoyon631234@gmail.com</a>
            </div>
          </div>

          {/* Location */}
          <div data-aos="fade-up" className="flex items-center gap-4 md:gap-10">
            <div className="text-3xl text-red-500">
              <FaLocationArrow />
            </div>
            <div className="text-md">
              <p className="text-xl font-semibold ">Location:</p>
              <a href="https://www.google.com/maps/place/Kaderia+Tower,+Plot+%23+JA-28%2F8-B,+Bir+Uttam+AK+Khandakar+Rd,+Dhaka+1212/@23.7804799,90.4090531,17z/data=!4m6!3m5!1s0x3755c7767f7450ef:0xd735512f86ba7a8f!8m2!3d23.7805437!4d90.4103459!16s%2Fg%2F11b62w2khn?entry=ttu&g_ep=EgoyMDI1MTAwNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-900">
                Bir Uttam AK Khandakar Rd, Mohakhali, Dhaka 1212
              </a>
            </div>
          </div>

          {/* Optional: Office Hours */}
          <div data-aos="fade-up" className="text-center mt-4 text-md font-light text-gray-700">
            If you need address, email and phone number. feel free to contact them using the information below. Additionally, you can locate them on the map displayed on this webpage.
          </div>

          {/* Thank You Note */}
          <h2 data-aos="fade-up" className="text-center text-xl font-semibold pt-5">
            <span className="text-blue-600">Thank you</span> for visiting <span className="italic font-bold">My Portfolio.</span> 💞
          </h2>
        </div>

      </div>

    </section>
  )
}


