import Skills from "@/components/Skills";
import { Metadata } from "next";
import React from "react";

const metadata: Metadata = {
  title: "Skills Page | Free Next.js Template for Startup and SaaS",
  description: "",
  // other metadata
};

const SkillsPage = () => {
  return (
    <>
      <Skills />
    </>
  );
};

export default SkillsPage;
