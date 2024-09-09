import { Tool } from "@/types/tool";
import SectionTitle from "../Common/SectionTitle";
import SingleTool from "./SingleTool";
import toolsData from "./toolsData";
import Marquee from "@/components/magicui/marquee";

const Tools = () => {
  // Group tools by categories
  const categories = toolsData.reduce(
    (acc: { [key: string]: Tool[] }, tool: Tool) => {
      if (!acc[tool.category]) {
        acc[tool.category] = [];
      }
      acc[tool.category].push(tool);
      return acc;
    },
    {},
  );

  return (
    <>
      <section id="tools" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Our Tools"
            paragraph="As GL engineers, we harness a broad range of technologies, methodologies, and frameworks that define the software engineering field. This extensive skill set equips us to address complex software development challenges and drive impactful innovation, both in academic research and real-world applications."
            center
          />

          <div className="flex flex-col items-center p-4">
            {Object.keys(categories).map((category) => (
              <div key={category} className="mb-12 w-full">
                <h2 className="mb-5 text-center text-xl md:text-2xl font-bold">
                  {category}
                </h2>
                <div className="flex w-full flex-col items-center justify-center overflow-hidden relative">
                  <Marquee pauseOnHover>
                    {categories[category].map((tool) => (
                      <SingleTool key={tool.id} tool={tool} />
                    ))}
                  </Marquee>
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white to-transparent dark:from-black"></div>
                  <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white dark:from-black"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Tools;
