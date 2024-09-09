
"use client";
import Image from "next/image";
import SliderSem from './SliderSem'
import {motion} from 'framer-motion';
const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
        <motion.div
       initial={{ opacity: 0, y: 50 }}
       animate={{ opacity: 1, y: 0 }}
       exit={{ opacity: 0, y: -50 }}
       transition={{ duration: .6 }}
       style={{margin: "auto"}} >
                <h2 className="m-auto mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
         Modules per semester
        </h2>

</motion.div>
          <motion.div
       initial={{ opacity: 0, y: 50 }}
       animate={{ opacity: 1, y: 0 }}
       exit={{ opacity: 0, y: -50 }}
       transition={{ duration: .6 }}
       style={{margin: "auto"}} >
      
                <SliderSem/>
         </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
