import s from './Buttons.module.css';

const Buttons = ({ onGoodIncrement, onNeutralIncrement, onBadIncrement }) => {
  return (
    <div className={s.btn_container}>
      <button className={s.button} onClick={onGoodIncrement}>
        Good
      </button>
      <button className={s.button} onClick={onNeutralIncrement}>
        Neutral
      </button>
      <button className={s.button} onClick={onBadIncrement}>
        Bad
      </button>
    </div>
  );
};

export default Buttons;
