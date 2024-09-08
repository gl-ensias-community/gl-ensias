"use client";
import { Skill } from "@/types/skill";
import React, { useState } from "react";
import Shapes from "./Shapes";
import SingleSkill from "./SingleSkill";
import skillsData from "./skillslData";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const handleSkillClick = (skill: Skill) => {
    setSelectedSkill(skill);
    console.log(skill);
  };

  const handleClose = () => {
    setSelectedSkill(null);
  };
  return (
    <>
      <Shapes />
      <section id="skills" className="lg:py-18 py-4 md:py-8">
        <div className="container flex flex-col items-center justify-center gap-12 py-64 md:gap-20 md:py-36">
          <div className="text-4xl font-bold text-primary md:text-5xl">
            Discover GL ENSIAS Skills
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
            {skillsData.map((skill) => (
              <SingleSkill
                key={skill.id}
                skill={skill}
                onClick={() => handleSkillClick(skill)}
              />
            ))}
            {selectedSkill && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-400 bg-opacity-90 dark:bg-neutral-950 dark:bg-opacity-90"
                onClick={handleClose}
              >
                <div
                  className="relative w-3/5 max-w-4xl rounded-lg bg-white p-8 shadow-lg dark:bg-gray-dark md:w-4/5 lg:w-3/5"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div
                    className="absolute right-4 top-4 cursor-pointer"
                    onClick={handleClose}
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      className="fill-dark dark:fill-white"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"></path>
                      </g>
                    </svg>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="mb-4 text-5xl text-primary">
                      {selectedSkill.icon}
                    </div>
                    <h3 className="text-gray mb-4 text-xl font-semibold">
                      {selectedSkill.title}
                    </h3>
                    <p className="text-lg text-body-color">
                      {selectedSkill.description}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
