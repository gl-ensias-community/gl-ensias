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
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <Tools />
    </>
  );
};

export default ToolsPage;
