import Breadcrumb from "@/components/Common/Breadcrumb";
import Tools from "@/components/Tools";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools | GL ENSIAS",
  description: "This is Tools Page of GL ENSIAS",
  // other metadata
};

const ToolsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Tools"
        description=""
      />

      <Tools />
    </>
  );
};

export default ToolsPage;
