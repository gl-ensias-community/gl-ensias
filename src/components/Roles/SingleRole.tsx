"use client";
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

type RoleProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  setSelectedRole: React.Dispatch<React.SetStateAction<RoleProps | null>>; // Add setSelectedRole prop
};

export default function SingleRole({ icon, title, description, setSelectedRole }: RoleProps) {
  const handleClickOutside = () => {
    setSelectedRole(null); // Close the modal when clicking outside
  };

  return (
    <motion.div
    className='fixed inset-0 z-50 flex items-center justify-center'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Modal rendering */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        onClick={handleClickOutside}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="relative bg-white dark:bg-[#1E2228] p-8 rounded-lg shadow-lg w-full max-w-lg"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
        >
          {/* X icon for closing */}
          <button
            onClick={handleClickOutside}
            className="absolute top-4 right-4 text-2xl text-[#E1372F] hover:text-[#c12e26] transition-colors"
          >
            <FaTimes />
          </button>

          {/* Icon and Title */}
          <div className="text-5xl text-[#E1372F] mb-4">{icon}</div>
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <p className="mb-4">{description}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}