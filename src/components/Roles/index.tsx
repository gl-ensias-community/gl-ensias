"use client";

import Link from "next/link";
import WordRotate from "../magicui/WordRotate";
import SectionTitle from "../Common/SectionTitle";
import Marquee from "../magicui/Marquee";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaDatabase, FaCloud, FaCogs } from "react-icons/fa";
import { MdOutlineArchitecture } from "react-icons/md";
import { RiBuilding4Line } from "react-icons/ri";

type RoleProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

// Define fadeInUp animation using Framer Motion with duration 1.5s
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.5, ease: [0.6, 0.05, -0.01, 0.9] }, // Duration is 1.5s
};

const roles = [
  {
    icon: <FaLaptopCode />,
    title: "Multimedia Development Engineer",
    description:
      "Specializes in creating interactive multimedia applications such as websites, video games, and mobile apps.",
  },
  {
    icon: <FaCogs />,
    title: "Enterprise Application Integrator",
    description:
      "Integrates software applications to meet business needs and ensure they work harmoniously.",
  },
  {
    icon: <MdOutlineArchitecture />,
    title: "IS Urbanist & Enterprise Architect",
    description:
      "Designs and implements the high-level structure of Information Systems.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Solution Architect",
    description:
      "Specializes in designing and implementing scalable cloud-based solutions for businesses.",
  },
  {
    icon: <FaDatabase />,
    title: "Database & Big Data Administrator",
    description:
      "Manages and optimizes large-scale databases and ensures data integrity and security.",
  },
  {
    icon: <RiBuilding4Line />,
    title: "Head of IS Operational Management",
    description:
      "Oversees the operational aspects of an organization’s information systems and ensures smooth functionality.",
  },
];

export default function Roles() {
  const [selectedRole, setSelectedRole] = useState<RoleProps | null>(null);

  // Hide the popup when clicking outside of it
  const handleClickOutside = () => {
    setSelectedRole(null);
  };

  const handleCancel = () => {
    setSelectedRole(null);
  };

  return (
    <>
      {/* Section with title */}
      <div className="container">
        <div style={{marginTop: "40px"}} className="pb-16 flex justify-center flex-col items-center gap-11">
          <div style={{ minHeight: "20vh" }} className="-mx-4 flex flex-wrap items-start text-center">
            <div className="w-full px-4">
              {/* Animation for Section Title */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: .6 }} 
              >
                <SectionTitle title="Our Roles" paragraph="" mb="0px" center={true} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: .6 }} 
              >
                <SectionTitle
                  title=""
                  paragraph="Software Engineering (SE) training encompasses a diverse array of IT professions that align seamlessly with market demands. ENSIAS SE engineers are well-equipped to take on or advance in roles such as:"
                  mb="0px"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Role Cards */}
      <motion.div
       initial={{ opacity: 0, y: 50 }}
       animate={{ opacity: 1, y: 0 }}
       exit={{ opacity: 0, y: -50 }}
       transition={{ duration: .6 }} 
      >
        <div className="w-full flex justify-center items-center flex-col mb-10 p-6 " style={{marginBottom: "80px"}}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-lg">
            {roles.map((role) => (
              <motion.div
                key={role.title}
                whileHover={{ scale: 1.012 }}
                onClick={() => setSelectedRole(role)}
                className="cursor-pointer p-6 bg-white dark:bg-[#1E2228] border border-primary rounded-lg shadow-lg text-center text-black dark:text-[#ffffff] flex flex-col items-center space-y-2"
                transition={{ duration: .1 }} // Ensure each card has the same duration
              >
                <div className="text-4xl text-primary">{role.icon}</div>
                <h3 className="text-lg font-bold">{role.title}</h3>
              </motion.div>
            ))}
          </div>

          {/* Role Popup Modal */}
          {selectedRole && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
              onClick={handleClickOutside}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: .3 }} // Popup modal transition
                className="relative bg-white dark:bg-[#1E2228] p-8 rounded-lg shadow-lg w-full max-w-lg"
                onClick={(e) => e.stopPropagation()} // Prevent closing on clicking inside the modal
              >
                {/* Icon and Title */}
                <div className="text-5xl text-[#E1372F] mb-4">{selectedRole.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{selectedRole.title}</h3>
                <p className="mb-4">{selectedRole.description}</p>

                {/* Cancel Button */}
                <button
                  onClick={handleCancel}
                  className="px-4 py-2 mt-4 bg-[#E1372F] text-white font-semibold rounded-lg hover:bg-[#c12e26] transition-colors duration-300"
                >
                  Cancel
                </button>
              </motion.div>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}
