import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
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

export default FeedbackOptions;
