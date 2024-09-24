import { StatisticValue } from "@/types/statistic";

const SingleStatistic = ({
  statisticValue: { label, percentage, ratio },
}: {
  statisticValue: StatisticValue;
}) => {
  return (
    <div className="w-[300px] md:w-[400px] lg:w-[450px] xl:w-[500px]">
      <div className="mb-1 flex justify-between">
        <span className="text-base font-medium text-dark dark:text-white">
          {label}
        </span>
        <span className="text-sm whitespace-nowrap font-medium text-dark dark:text-white">
          {percentage}&nbsp;-&nbsp;<span className="text-gray-500 dark:text-gray-400">{ratio}</span>
        </span>
      </div>
      <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
        <div
          className="h-2.5 rounded-full bg-primary/75"
          style={{ width: `${percentage}` }}
        ></div>
      </div>
    </div>
  );
};

export default SingleStatistic;
