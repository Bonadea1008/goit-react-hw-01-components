import { getRandomHexColor } from './randomColor';
import css from './StatisticsList.module.css';
import PropTypes from 'prop-types';

export const StatisticsList = ({ stats }) => {
  return (
    <ul className={css.statList}>
      {stats.map(stat => {
        return (
          <li
            className={css.item}
            key={stat.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        );
      })}
    </ul>
  );
};

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
