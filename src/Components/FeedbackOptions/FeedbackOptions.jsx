import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  console.log(options);
  return (
    <div className={s.btn_container}>
      {options.map(option => (
        <button
          type="button"
          className={s.button}
          onClick={onLeaveFeedback}
          key={option}
          name={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  optios: PropTypes.array,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
