// app/confirmation/ConfirmationPage.tsx
'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';

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
        
        <div className="confirmation-page text-body-color">
            <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
                <div className="container">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                    <div className="mx-auto max-w-[700px] rounded bg-white px-6 py-10 shadow-three dark:bg-dark sm:p-[60px]">
                        <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                        Thank you!
                        </h3>
                        <p className="mb-11 text-center text-base font-medium">
                            A confirmation email has been sent to <strong>your email</strong>. <br/>

                            If you didn't receive the email, please check your spam folder or <a href="/contact" className='underline text-primary hover:text-dark'>contact us</a>.
                        </p>
                        <p>
                            
                        </p>

                        {message && <p>{message}</p>}

                        <div className="actions flex justify-between">
                            <button onClick={resendEmail} disabled={resending} className='text-primary hover:text-dark'>
                                {resending ? 'Resending...' : 'Resend Confirmation Email'}
                            </button>

                            <p>Already confirmed? <a href="/signin" className='text-primary hover:text-dark'>Log In</a></p>
                        </div>

                        <hr className='mb-11'/>
                        
                        <p className="text-base text-center font-medium">
                            Meanwhile, explore our website or visit our <a href="/blog" className='text-primary hover:text-dark'>blog</a>.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="absolute left-0 top-0 z-[-1]">
                <svg
                    width="1440"
                    height="969"
                    viewBox="0 0 1440 969"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <mask
                    id="mask0_95:1005"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="1440"
                    height="969"
                    >
                    <rect width="1440" height="969" fill="#090E34" />
                    </mask>
                    <g mask="url(#mask0_95:1005)">
                    <path
                        opacity="0.1"
                        d="M1086.96 297.978L632.959 554.978L935.625 535.926L1086.96 297.978Z"
                        fill="url(#paint0_linear_95:1005)"
                    />
                    <path
                        opacity="0.1"
                        d="M1324.5 755.5L1450 687V886.5L1324.5 967.5L-10 288L1324.5 755.5Z"
                        fill="url(#paint1_linear_95:1005)"
                    />
                    </g>
                    <defs>
                    <linearGradient
                        id="paint0_linear_95:1005"
                        x1="1178.4"
                        y1="151.853"
                        x2="780.959"
                        y2="453.581"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#ec4b38" />
                        <stop offset="1" stopColor="#ec4b38" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                        id="paint1_linear_95:1005"
                        x1="160.5"
                        y1="220"
                        x2="1099.45"
                        y2="1192.04"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#ec4b38" />
                        <stop offset="1" stopColor="#ec4b38" stopOpacity="0" />
                    </linearGradient>
                    </defs>
                </svg>
                </div>
            </section>
        </div>
    );
};

export default ConfirmationPage;
