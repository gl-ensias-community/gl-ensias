'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";
import SectionTitle from "@/components/Common/SectionTitle";

const ConfirmationPage = () => {
    const [resending, setResending] = useState(false);
    const [message, setMessage] = useState('');
    const router = useRouter();
    
    const resendEmail = async () => {
        setResending(true);
        try {
          const response = await fetch('/api/resend-confirmation', {
            method: 'POST',
            // Include necessary data, e.g., user email from context or state
          });
    
          if (response.ok) {
            setMessage('Confirmation email has been resent. Please check your inbox.');
          } else {
            setMessage('Failed to resend confirmation email. Please try again later.');
          }
        } catch (error) {
          setMessage('An error occurred. Please try again.');
        } finally {
          setResending(false);
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
                    title="Thank you!"
                    paragraph="A confirmation email has been sent to your email. If you didn't receive it, please check your spam folder or contact us"
                    center={true}
                />
                </motion.div>
            </div>
            {message && <p>{message}</p>}
        </section>
    );
};

export default ConfirmationPage;

