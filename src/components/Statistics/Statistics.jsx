import css from '../Statistics/Statistics.module.css';
import { StatisticsTitle } from './StatisticsTitle';
import { StatisticsList } from './StatisticsList';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <StatisticsTitle title="Upload stats" />
      <StatisticsList stats={stats} />
    </section>
  );
};
