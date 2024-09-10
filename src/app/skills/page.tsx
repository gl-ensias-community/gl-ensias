import Breadcrumb from "@/components/Common/Breadcrumb";
import Skills from "@/components/Skills";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Skills | GL ENSIAS",
  description: "This is Skills Page for GL ENSIAS",
  // other metadata
};

const SkillsPage = () => {
  return (
    <>
      <Breadcrumb pageName="Skills" description="" />
      <Skills />
    </>
  );
};

export default SkillsPage;
