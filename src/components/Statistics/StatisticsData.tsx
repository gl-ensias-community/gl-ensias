import { Statistic } from "@/types/statistic";
import stats from ".next/../public/data/statistics.json";

const statistics: Statistic[] = [];

Object.keys(stats).forEach((key) => {
  let name = key;
  let data = stats[key];
  let values = [];
  Object.keys(data).forEach((key) => {
    values.push({
      label: key,
      percentage: data[key].percentage,
      ratio: data[key].ratio,
    });
  });
  statistics.push({
    name,
    values,
  });
});

export default statistics;
