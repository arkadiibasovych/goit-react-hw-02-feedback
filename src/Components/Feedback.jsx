import React from 'react';
import s from './Feedback.module.css';
import Controls from './Controls/Controls';

const Feedback = () => {
  return (
    <div className={s.Feedback}>
      <Controls />
    </div>
  );
};

export default Feedback;
