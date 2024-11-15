"use client";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { useState } from "react";
import { constants } from "@/constants/contact";
import SectionTitle from "../Common/SectionTitle";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const apiUrl = constants.apiUrl;

  // Handle form inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
    
    try {
      const response = await fetch(`${apiUrl}/contact/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        toast.success("Successfully sent message!");
      } else {
        const errorData = await response.json();
        setFailure(true);
        setSubmitted(false);
        toast.error(`An error occurred: ${errorData.message}`);
      }
    } catch (error) {
      setFailure(true);
      setSubmitted(false);
      toast.error("An error occurred while sending the message.");
      console.error("Error:", error);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            title="Contact Us"
            paragraph="If you have any questions! Please Feel Free To Ask Our Team We Are Here To Answer Your Questions."
            center={true}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
        >  
          <div className="pb-16 flex justify-center flex-col items-center">
            <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
              <div
                className="mb-12 rounded-lg bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
                data-wow-delay=".15s"
              >
                <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                  Need Help? Leave a message and we will respond ASAP
                </h2>
                <p className="mb-12 text-base font-medium text-body-color">
                  Our support team will get back to you ASAP via email.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="name"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="border-stroke w-full rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                          required
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="email"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="border-stroke w-full rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                          required
                        />
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <div className="mb-8">
                        <label
                          htmlFor="message"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Message
                        </label>
                        <textarea
                          name="message"
                          rows={5}
                          placeholder="Enter your message"
                          value={formData.message}
                          onChange={handleInputChange}
                          className="border-stroke w-full resize-none rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <button
                        type="submit"
                        className="rounded-xl shadow-lg bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                        disabled={submitted}
                      >
                        Submit Your Message
                      </button>
                    </div>
                    {success && (
                      <div className="w-full px-4 mt-4">
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
                          Your message has been sent.
                        </div>
                      </div>
                    )}
                    {failure && (
                      <div className="w-full px-4 mt-4">
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                          An error occurred while sending the message.
                        </div>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
