"use client";
import Image from "next/image";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import Shapes from "./Shapes";
import styles from "./Skills.module.css";
import skillsData from "./skillslData";

const Skills = () => {
  const [titleText, setTitleText] = useState("GL ENSIAS");
  const [infoText, setInfoText] = useState(
    'The "Software Engineering" program aims to train computer engineers specializing in Software Engineering and Information Systems. Graduates are equipped with technical expertise, autonomy, and communication skills to meet the needs of public and private organizations, enhancing their competitiveness. The curriculum offers a comprehensive scientific and technical education, including management, languages, and communication techniques, in line with national pedagogical standards. After a two-semester "tronc commun" focused on essential computer science skills, students advance in Software Engineering and Information Systems.',
  );

  const [showTopGradient, setShowTopGradient] = useState<boolean>(true);
  const [showBottomGradient, setShowBottomGradient] = useState<boolean>(true);

  const scrollableRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  // Function to check if user reached the top or bottom of the scroll
  const handleScroll = () => {
    const scrollElement = scrollableRef.current;
    if (scrollElement) {
      const isAtTop = scrollElement.scrollTop === 0;
      const isAtBottom =
        scrollElement.scrollHeight - scrollElement.scrollTop ===
        scrollElement.clientHeight;

      setShowTopGradient(!isAtTop);
      setShowBottomGradient(!isAtBottom);
    }
  };

  // Add scroll event listener when component mounts
  useEffect(() => {
    const scrollElement = scrollableRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial check to set the gradients correctly

      // Cleanup event listener when component unmounts
      return () => scrollElement.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <>
      <Shapes />
      <section id="skills" className="py-8 md:py-16 lg:py-28">
        <div className="px-4 py-8 md:px-8 md:py-12 lg:px-10 lg:py-16">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
            {/* First Div: Logo and Scrollable List */}
            <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
              {/* Column 1: GL ENSIAS */}
              <div className="flex w-full items-center justify-center lg:w-80">
                <Image
                  src="/images/logo/logo.png"
                  alt="GL ENSIAS"
                  title="GL ENSIAS"
                  width={400} // Adjusted width for responsiveness
                  height={400} // Adjusted height for responsiveness
                  className="object-contain"
                />
              </div>

              {/* Column 2: Scrollable List of Skills */}
              <div className="relative w-full justify-center overflow-hidden lg:w-52">
                <div ref={scrollableRef} className={styles.scrollableSkills}>
                  {skillsData.map((skill) => (
                    <div key={skill.id}>
                      <Image
                        src={skill.image}
                        alt={skill.title}
                        title={skill.title}
                        width={140}
                        height={140}
                        className="cursor-pointer opacity-30 hover:opacity-100"
                        onMouseOver={() => {
                          setInfoText(skill.description);
                          setTitleText(skill.title);
                        }}
                        onMouseOut={() => {
                          setInfoText(
                            'The "Software Engineering" program aims to train computer engineers specializing in Software Engineering and Information Systems. Graduates are equipped with technical expertise, autonomy, and communication skills to meet the needs of public and private organizations, enhancing their competitiveness. The curriculum offers a comprehensive scientific and technical education, including management, languages, and communication techniques, in line with national pedagogical standards. After a two-semester "tronc commun" focused on essential computer science skills, students advance in Software Engineering and Information Systems.',
                          );
                          setTitleText("GL ENSIAS");
                        }}
                      />
                    </div>
                  ))}
                </div>
                {showTopGradient && (
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-t from-transparent to-white dark:to-black max-md:inset-y-0 max-md:left-0 max-md:bg-gradient-to-l md:h-24"></div>
                )}
                {showBottomGradient && (
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-white dark:to-black max-md:inset-y-0 max-md:right-0 max-md:bg-gradient-to-r md:h-24"></div>
                )}
              </div>
            </div>

            {/* Second Div: Info Box */}
            <div className="relative flex-grow bg-transparent p-4">
              <div
                id="info-box-title"
                className="mb-4 text-center text-3xl font-semibold text-primary transition-all md:text-4xl lg:text-5xl"
              >
                {titleText}
              </div>
              <div
                id="info-box-content"
                className="text-base text-black transition-all dark:text-white md:text-lg lg:text-xl"
              >
                <p className="hyphens-auto">{infoText}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
