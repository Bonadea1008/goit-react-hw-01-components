import css from '../Statistics/StatisticsTitle.module.css';
import PropTypes from 'prop-types';

export const StatisticsTitle = ({ title }) => {
  return title && <h2 className={css.title}>{title}</h2>;
};

StatisticsTitle.propTypes = {
  title: PropTypes.string,
};
