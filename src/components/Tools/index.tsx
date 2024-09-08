import { Tool } from "@/types/tool";
import SectionTitle from "../Common/SectionTitle";
import SingleTool from "./SingleTool";
import toolsData from "./toolsData";

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
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Our Tools"
            paragraph="As GL engineers, we harness a broad range of technologies, methodologies, and frameworks that define the software engineering field. This extensive skill set equips us to address complex software development challenges and drive impactful innovation, both in academic research and real-world applications."
            center
          />

          <div className="flex flex-col items-center p-4">
            {Object.keys(categories).map((category) => (
              <div key={category} className="mb-8">
                <h2 className="mb-5 text-center text-2xl font-bold">{category}</h2>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6 mx-auto">
                  {categories[category].map((tool) => (
                    <SingleTool key={tool.id} tool={tool} />
                  ))}
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
