"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import { motion } from "framer-motion";
import SingleRole from './SingleRole';
import roles from './RolesData';

export default function Roles() {
  const [selectedRole, setSelectedRole] = useState(null);


  return (
    <>
      {/* Section with title */}
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">

      <div className="container">
        <div className="pb-16 flex justify-center flex-col items-center gap-11">
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
</section>
    {/* Roles sec */}
<div className="w-full flex justify-center items-center flex-col mb-10 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-lg">
          {roles.map((role) => (
            <motion.div
              key={role.title}
              whileHover={{ scale: 1.012 }}
              onClick={() => setSelectedRole(role)}
              className="cursor-pointer p-6 bg-white dark:bg-[#1E2228] border border-primary rounded-lg shadow-lg text-center text-black dark:text-white flex flex-col items-center space-y-2"
              transition={{ duration: 0.1 }} 
            >
              <div className="text-4xl text-primary">{role.icon}</div>
              <h3 className="text-lg font-bold">{role.title}</h3>
            </motion.div>
          ))}
        </div>

        {/* Render the selected role modal */}
        {selectedRole && (
          <SingleRole
            icon={selectedRole.icon}
            title={selectedRole.title}
            description={selectedRole.description}
            setSelectedRole={setSelectedRole}
          />
        )}
      </div>
    </>
  );
}
