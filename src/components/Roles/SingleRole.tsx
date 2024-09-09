"use client";
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { RoleProps } from '@/types/role';




const SingleRole:React.FC<RoleProps> = ({role, setSelectedRole}) => {
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
        onClick={()=>setSelectedRole(null)}
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
            onClick={()=>setSelectedRole(null)}
            className="absolute top-4 right-4 text-2xl text-[#E1372F] hover:text-[#c12e26] transition-colors"
          >
            <FaTimes />
          </button>

          {/* Icon and Title */}
          <div className="text-5xl text-[#E1372F] mb-4">{role.icon}</div>
          <h3 className="text-2xl font-bold mb-4">{role.title}</h3>
          <p className="mb-4">{role.description}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
export default SingleRole;