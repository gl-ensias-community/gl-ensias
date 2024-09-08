import Breadcrumb from "@/components/Common/Breadcrumb";
import Skills from "@/components/Skills";
import { Metadata } from "next";
import React from "react";

const metadata: Metadata = {
  title: "Skills | GL ENSIAS",
  description: "",
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
