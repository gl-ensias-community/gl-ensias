import { Tool } from "@/types/tool";

const SingleTool = ({ tool }: { tool: Tool }) => {
  const { icon, name } = tool;
  return (
    <div className="flex h-[140px] w-[140px] flex-col items-center justify-center rounded-lg bg-white p-4 shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-gray-dark">
      <div className="mb-2 text-4xl text-primary">{icon}</div>
      <h3 className="text-sm md:text-md text-gray text-center font-semibold">{name}</h3>
    </div>
  );
};

export default SingleTool;
