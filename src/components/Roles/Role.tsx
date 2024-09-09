"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconType } from 'react-icons';

type JobCardProps = {
  icon: IconType;
  title: string;
  description: string;
  primaryColor?: string;
};

export default function JobCard({ icon: Icon, title, description, primaryColor = "#E1372F" }: JobCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Card Component */}
      <motion.div
        className="w-64 h-40 bg-white dark:bg-[#1E2228] shadow-lg rounded-lg flex flex-col items-center justify-center cursor-pointer hover:shadow-xl transition-shadow duration-300"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Icon className={`text-5xl ${primaryColor}`} />
        <h3 className="mt-2 text-xl font-semibold" style={{ color: primaryColor }}>
          {title}
        </h3>
      </motion.div>

      {/* Popup Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-[#1E2228] rounded-lg p-6 w-full max-w-md mx-4 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 text-xl font-semibold text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
              >
                &times;
              </button>
              <Icon className={`text-5xl ${primaryColor}`} />
              <h3 className="mt-2 text-xl font-semibold" style={{ color: primaryColor }}>
                {title}
              </h3>
              <p className="mt-4 text-gray-700 dark:text-gray-200">{description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
