import Breadcrumb from "@/components/Common/Breadcrumb";
import Statistics from "@/components/Statistics";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Statistics | GL ENSIAS",
  description: "This is Statistics Page for GL ENSIAS",
  // other metadata
};

const StatisticsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Statistics"
        description=""
      />

      <Statistics />
    </>
  );
};

export default StatisticsPage;
