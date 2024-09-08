import { Tool } from "@/types/tool";

const SingleTool = ({ tool }: { tool: Tool }) => {
  const { icon, name } = tool;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="w-[140px] h-[140px] flex flex-col justify-center items-center p-4 bg-white rounded-lg shadow-lg hover:shadow-xl dark:bg-gray-dark transition-shadow duration-300">
          <div className="text-4xl mb-2 text-primary">
            {icon}
          </div>
          <h3 className="text-md font-semibold text-center text-gray">
            {name}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SingleTool;