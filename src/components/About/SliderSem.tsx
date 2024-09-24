"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import semesters from './SliderData'

// Helper function to display titles based on semester
const getSemesterTitle = (id) => {
  if (id === 1 || id === 2) return "Common Core";
  if (id === 3 || id === 4) return "Deepening";
  if (id === 5 || id === 6) return "Specialization";
  return "";
};

export default function SemesterSlider() {
  const [selectedSemester, setSelectedSemester] = useState(1);

  return (
    <div className="container mx-auto p-6 flex flex-col items-center">
      {/* Semester Buttons */}
      <div className="flex justify-center flex-wrap gap-4 mb-8 w-full max-w-5xl">
        {semesters.map((semester) => (
          <motion.button
            key={semester.id}
            onClick={() => setSelectedSemester(semester.id)}
            whileHover={{ scale: 1.1 }}
            // style={{outline: "none"}}
            className={`px-4 py-2 font-semibold border rounded-lg transition-colors duration-300 w-full sm:w-auto ${
              selectedSemester === semester.id
                ? 'bg-[#E1372F] text-white border-[#E1372F]' // Highlight color for selected button
                : 'border-[#E1372F] dark:bg-[#1E2228] dark:text-white light:bg-[#FFFFFF] light:text-[#E1372F]'
            }`}
          >
            {semester.label}
          </motion.button>
        ))}
      </div>

      {/* Logo above the title */}
      <div className="mb-4">
        <Image src="/images/logo/logo.png" alt="ENSIAS Logo" width={100} height={100} />
      </div>

      {/* Title for the Selected Semester */}
      <motion.div
        key={`title-${selectedSemester}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold mb-4"
        style={{ color: '#E1372F' }} // Title color
      >
        {getSemesterTitle(selectedSemester)}
      </motion.div>

      {/* Main Content for Selected Semester */}
      <motion.div
        key={`content-${selectedSemester}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={`p-6 rounded-md shadow-three dark:bg-gray-dark w-full max-w-4xl text-center`}
      >
        {semesters.find((semester) => semester.id === selectedSemester)?.content}
      </motion.div>
    </div>
  );
}
