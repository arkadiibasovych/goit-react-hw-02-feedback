import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({
  good = 0,
  neutral = 0,
  bad = 0,
  total = 0,
  percantage = 0,
}) => {
  return (
    <ul className={s.feedback_list}>
      <li className={s.feedback_item}>Good: {good}</li>
      <li className={s.feedback_item}>Neutral: {neutral}</li>
      <li className={s.feedback_item}>Bad: {bad}</li>
      <li className={s.feedback_item}>Total: {total}</li>
      <li className={s.feedback_item}>Positive feedback: {percantage}</li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percantage: PropTypes.number.isRequired,
};
export default Statistics;
