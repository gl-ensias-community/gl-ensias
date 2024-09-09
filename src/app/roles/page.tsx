import Breadcrumb from "@/components/Common/Breadcrumb";
import Roles from "@/components/Roles";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Roles | GL ENSIAS",
  description: "This is Roles Page for GL ENSIAS",
  // other metadata
};

const RolesPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Roles"
        description=""
      />

      <Roles />
    </>
  );
};

export default RolesPage;
