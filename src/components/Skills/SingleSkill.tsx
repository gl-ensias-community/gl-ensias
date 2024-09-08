import { Skill } from "@/types/skill";

const SingleSkill = ({
  skill,
  onClick,
}: {
  skill: Skill;
  onClick: () => void;
}) => {
  const { icon, title } = skill;

  return (
    <div className="w-full" onClick={onClick}>
      <div className="flex w-full justify-center">
        <div className="wow fadeInUp" data-wow-delay=".15s">
          <div className="flex h-[150px] w-[150px] cursor-pointer flex-col items-center justify-center rounded-lg bg-white p-4 shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-gray-dark md:h-[200px] md:w-[200px]">
            <div className="mb-2 text-3xl text-primary md:text-5xl">{icon}</div>
            <h3 className="text-gray text-wrap text-center text-sm font-semibold md:text-base">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleSkill;
