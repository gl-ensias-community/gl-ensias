"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import { motion } from "framer-motion";
import SingleRole from "./SingleRole";
import { Role } from "@/types/role";
import roles from "./RolesData";

export default function Roles() {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  return (
    <>
      <section id="roles" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              title="Our Roles"
              paragraph="Software Engineering (SE) training encompasses a diverse array of IT professions that align seamlessly with market demands. ENSIAS SE engineers are well-equipped to take on or advance in roles such as:"
              center={true}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col items-center justify-center gap-11">
              <div
                style={{ minHeight: "20vh" }}
                className="-mx-4 flex flex-wrap items-start text-center"
              >
                <div className="w-full px-4">
                  <div className="mb-10 flex w-full flex-col items-center justify-center p-6">
                    <div className="grid w-full max-w-screen-lg grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {roles.map((role) => (
                        <motion.div
                          key={role.title}
                          whileHover={{ scale: 1.012 }}
                          onClick={() => setSelectedRole(role)}
                          className="flex cursor-pointer flex-col items-center space-y-2 rounded-lg border border-primary bg-white p-6 text-center text-black shadow-lg dark:bg-[#1E2228] dark:text-white"
                          transition={{ duration: 0.1 }}
                        >
                          <div className="text-4xl text-primary">{role.icon}</div>
                          <h3 className="text-lg font-bold">{role.title}</h3>
                        </motion.div>
                      ))}
                    </div>
                    {selectedRole && (
                      <SingleRole
                        role={selectedRole}
                        setSelectedRole={setSelectedRole}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
