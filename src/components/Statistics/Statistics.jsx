import css from '../Statistics/Statistics.module.css';
import { StatisticsTitle } from './StatisticsTitle';
import { StatisticsList } from './StatisticsList';
import data from '../../json/data';

export const Statistics = () => {
  return (
    <section className={css.statistics}>
      <StatisticsTitle title="Upload stats" />
      <StatisticsList stats={data} />
    </section>
  );
};


