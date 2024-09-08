"use client";
import Image from "next/image";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import Shapes from "./Shapes";
import skillsData from "./skillslData";

const Skills = () => {
  return (
    <>
      <Shapes />
      <section id="skills" className="py-4 md:py-14 lg:py-24">
        <div className="container flex flex-col items-center justify-center gap-8 py-64 md:gap-16 md:py-32">
          <div className="text-4xl font-bold text-primary md:text-5xl">
            Discover GL ENSIAS Skills
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6 lg:grid-cols-6">
            {skillsData.map((skill) => (
              <div key={skill.id} className="flex w-full justify-center">
                <div className="wow fadeInUp" data-wow-delay=".15s">
                  <div className="flex h-[150px] w-[150px] flex-col items-center justify-center rounded-lg bg-white p-4 shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-gray-dark md:h-[200px] md:w-[200px]">
                    <div className="mb-2 text-3xl text-primary md:text-5xl">
                      {skill.icon}
                    </div>
                    <h3 className="text-gray text-wrap text-center text-sm font-semibold md:text-base">
                      {skill.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
