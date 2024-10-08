import Breadcrumb from "@/components/Common/Breadcrumb";
import PFADistributer from "@/components/Features/PFADistributer";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PFA Distributer Page | GL ENSIAS",
  description: "This is PFA Distributer Page for GL ENSIAS",
  // other metadata
};

const PFADistributerPage = () => {
  return (
    <>
      <Breadcrumb pageName="PFA Distributer" description="" />

      <PFADistributer />
    </>
  );
};

export default PFADistributerPage;
