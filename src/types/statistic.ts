export type Statistic = {
  name: string;
  values: StatisticValue[];
};

export type StatisticValue = {
  label: string;
  percentage: number;
  ratio: string;
};
