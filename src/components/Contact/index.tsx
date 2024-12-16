"use client";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import SectionTitle from "../Common/SectionTitle";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  // Handle form inputs
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setSuccess(false);
    setError(false);
    setSending(true);
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    await fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => {
        setSending(false);
        setSuccess(true);
        toast.success("Successfully sent message!");
      })
      .catch(() => {
        setSending(false);
        setError(true);
        toast.error("An error occurred while sending the message.");
      });
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
          <div className="flex flex-col items-center justify-center pb-16">
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
                <form
                  onSubmit={handleFormSubmit}
                  data-netlify-recaptcha="true"
                  data-netlify="true"
                >
                  <input type="hidden" name="form-name" value="contact" />
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
                      {sending ? (
                        <button
                          type="button"
                          className="cursor-not-allowed rounded-xl bg-primary px-9 py-4 text-base font-medium text-white shadow-lg shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                          disabled
                        >
                          Sending...
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="rounded-xl bg-primary px-9 py-4 text-base font-medium text-white shadow-lg shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                        >
                          Submit Your Message
                        </button>
                      )}
                    </div>
                    <div className="w-full px-4">
                      <div data-netlify-recaptcha="true"></div>
                    </div>
                    {success && (
                      <div className="mt-4 w-full px-4">
                        <div className="relative rounded border border-green-400 bg-green-100 px-4 py-3 text-green-700">
                          Your message has been sent.
                        </div>
                      </div>
                    )}
                    {error && (
                      <div className="mt-4 w-full px-4">
                        <div className="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700">
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
