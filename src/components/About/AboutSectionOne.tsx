"use client";
import SectionTitle from "../Common/SectionTitle";
import { motion } from "framer-motion";
const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span
        style={{
          height: "30px !important",
          width: "30px !important",
          minWidth: "30px",
          minHeight: "30px",
        }}
        className=" mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary"
      >
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-11">
          <div
            style={{ minHeight: "50vh" }}
            className="-mx-4 flex flex-wrap items-start text-center"
          >
            <div className="w-full px-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6 }}
              >
                <SectionTitle
                  title="About Us"
                  paragraph=""
                  mb="0px"
                  center={true}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6 }}
              >
                <SectionTitle
                  title=""
                  paragraph="The GL (Génie Logiciel) program at ENSIAS (École Nationale Supérieure d'Informatique et d'Analyse des Systèmes) is a prestigious specialization focused on software engineering. It equips students with advanced skills in software development, architecture, and project management. The program covers a broad range of topics including programming, software design, algorithms, and emerging technologies like AI and cloud computing. GL students are trained to meet industry demands, innovate, and solve complex software challenges. ENSIAS graduates are recognized for their expertise and leadership in the tech industry, both in Morocco and internationally."
                  mb="0px"
                />
              </motion.div>
            </div>
          </div>

          <div className="flex w-full flex-col items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle
                title="Access conditions:"
                paragraph=""
                mb="30px"
                center={true}
              />
            </motion.div>

            <div className="max-w-[570px]" data-wow-delay=".15s">
              <div className="mx-[-12px] flex flex-wrap">
                <div className="w-full px-3">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.6 }}
                  >
                    <List
                      text="Candidates who have completed the two-year INP cycle preparation for engineers"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.6 }}
                  >
                    <List
                      text="Candidates who have passed the national common admissions exam for engineering training institutions and affiliated institutions"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.6 }}
                  >
                    <List
                      text="DEUG (Bachelor’s degree first cycle) : Mathematical Sciences (SM) or Computer and Mathematical Sciences (SMI), Competition-based Access"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.6 }}
                  >
                    <List
                      text="Bachelor’s degree in Applied Mathematical Sciences (SMA) or SMI, Degree-based Access"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.6 }}
                  >
                    <List
                      text="Bachelor’s degree in Sciences & Techniques, Degree-based Access"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
