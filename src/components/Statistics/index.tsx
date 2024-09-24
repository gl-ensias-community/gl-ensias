"use client";
import SectionTitle from "../Common/SectionTitle";
import { motion } from "framer-motion";
import { Statistic, StatisticValue } from "@/types/statistic";
import SingleStatistic from "./SingleStatistic";
import statistics from "./StatisticsData";

export default function Statistics() {
  
  return (
    <>
      <section id="statistics" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle 
            title="Some Statistics" 
            paragraph="Here are some statistics about GL branch collected by ENSIAS Bridge Club."
            center={true} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col items-center justify-center mb-11 px-4">
              <a
                href="https://survey.ensiasbridge.ma/"
                target="_blank"
                className="text-sm text-center font-semibold text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary underline"
              >
                Check out the survey conducted by ENSIAS Bridge Club
              </a>
            </div>
            <div className="flex flex-col items-center justify-center gap-11">
              {statistics.map((statistic: Statistic, index: number) => (
                <div key={index} className="flex flex-col gap-4 p-4 rounded-md bg-white shadow-three dark:bg-gray-dark">
                  <h2 className="text-xl font-bold text-center text-primary/75">
                    {statistic.name}
                  </h2>
                  <div className="flex flex-col gap-4">
                    {statistic.values.map((statisticValue: StatisticValue, index: number) => (
                      <SingleStatistic key={index} statisticValue={statisticValue} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center justify-center mt-11 px-4">
              <a
                href="https://survey.ensiasbridge.ma/"
                target="_blank"
                className="text-sm text-center font-semibold text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary underline"
              >
                Check out the survey conducted by ENSIAS Bridge Club
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
