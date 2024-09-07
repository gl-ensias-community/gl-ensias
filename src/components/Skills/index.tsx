"use client";
import Image from "next/image";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import Shapes from "./Shapes";
import skillsData from "./skillslData";

const Skills = () => {
  const GL_ENSIAS_InfoText =
    'The "Software Engineering" program aims to train computer engineers specializing in Software Engineering and Information Systems. Graduates are equipped with technical expertise, autonomy, and communication skills to meet the needs of public and private organizations, enhancing their competitiveness. The curriculum offers a comprehensive scientific and technical education, including management, languages, and communication techniques, in line with national pedagogical standards. After a two-semester "tronc commun" focused on essential computer science skills, students advance in Software Engineering and Information Systems.';
  const [titleText, setTitleText] = useState("GL ENSIAS");
  const [infoText, setInfoText] = useState(GL_ENSIAS_InfoText);

  const [showTopGradient, setShowTopGradient] = useState<boolean>(true);
  const [showBottomGradient, setShowBottomGradient] = useState<boolean>(true);

  const scrollableRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  // Function to check if user reached the top or bottom of the scroll
  const handleScroll = () => {
    const scrollElement = scrollableRef.current;
    if (scrollElement) {
      if (window.innerWidth > 768) {
        const isAtTop = scrollElement.scrollTop === 0;
        const isAtBottom =
          scrollElement.scrollHeight - scrollElement.scrollTop ===
          scrollElement.clientHeight;

        setShowTopGradient(!isAtTop);
        setShowBottomGradient(!isAtBottom);
      } else {
        const isAtRight = scrollElement.scrollLeft === 0;
        const isAtLeft =
          scrollElement.scrollWidth - scrollElement.scrollLeft ===
          scrollElement.clientWidth;

        setShowTopGradient(!isAtRight);
        setShowBottomGradient(!isAtLeft);
      }
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
                  width={400}
                  height={400}
                  className="select-none object-contain"
                />
              </div>
              {/* Column 2: Control Arrows */}
              {window.innerWidth > 768 && (
                <div className="w-30 flex flex-col items-center justify-center gap-5">
                  <div
                    className="w-full cursor-pointer"
                    onClick={() => {
                      const scrollElement = scrollableRef.current;
                      if (scrollElement) {
                        scrollElement.scrollTop -= 4 * 140; // Scroll up 4 icons
                      }
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width={96}
                      height={96}
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-black opacity-30 hover:opacity-100 dark:fill-white"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 3C12.2652 3 12.5196 3.10536 12.7071 3.29289L19.7071 10.2929C20.0976 10.6834 20.0976 11.3166 19.7071 11.7071C19.3166 12.0976 18.6834 12.0976 18.2929 11.7071L13 6.41421V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V6.41421L5.70711 11.7071C5.31658 12.0976 4.68342 12.0976 4.29289 11.7071C3.90237 11.3166 3.90237 10.6834 4.29289 10.2929L11.2929 3.29289C11.4804 3.10536 11.7348 3 12 3Z"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                  <div
                    className="w-full cursor-pointer"
                    onClick={() => {
                      const scrollElement = scrollableRef.current;
                      if (scrollElement) {
                        scrollElement.scrollTop += 4 * 140; // Scroll down 4 icons
                      }
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width={96}
                      height={96}
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      transform="rotate(180)"
                      className="fill-black opacity-30 hover:opacity-100 dark:fill-white"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 3C12.2652 3 12.5196 3.10536 12.7071 3.29289L19.7071 10.2929C20.0976 10.6834 20.0976 11.3166 19.7071 11.7071C19.3166 12.0976 18.6834 12.0976 18.2929 11.7071L13 6.41421V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V6.41421L5.70711 11.7071C5.31658 12.0976 4.68342 12.0976 4.29289 11.7071C3.90237 11.3166 3.90237 10.6834 4.29289 10.2929L11.2929 3.29289C11.4804 3.10536 11.7348 3 12 3Z"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                </div>
              )}

              {/* Column 3: Scrollable List of Skills */}
              <div className="relative w-full justify-center overflow-hidden lg:w-52">
                <div
                  ref={scrollableRef}
                  className="flex h-[700px] flex-col items-center gap-6 overflow-x-hidden overflow-y-scroll whitespace-nowrap px-2 scrollbar-none max-md:h-[120px] max-md:w-[400%] max-md:flex-row max-md:overflow-y-hidden max-md:overflow-x-scroll"
                >
                  {skillsData.map((skill) => (
                    <div key={skill.id}>
                      <Image
                        src={skill.image}
                        alt={skill.title}
                        title={skill.title}
                        width={140}
                        height={140}
                        className="cursor-pointer select-none opacity-30 hover:opacity-100"
                        onMouseOver={() => {
                          setInfoText(skill.description);
                          setTitleText(skill.title);
                        }}
                        onMouseOut={() => {
                          setInfoText(GL_ENSIAS_InfoText);
                          setTitleText("GL ENSIAS");
                        }}
                      />
                    </div>
                  ))}
                </div>
                {showTopGradient && (
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-t from-transparent to-white dark:to-black max-md:inset-y-0 max-md:right-0 max-md:h-32 max-md:w-16 max-md:bg-gradient-to-r md:h-24"></div>
                )}
                {showBottomGradient && (
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-white dark:to-black max-md:inset-y-0 max-md:left-0 max-md:h-32 max-md:w-16 max-md:bg-gradient-to-l md:h-24"></div>
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
