import React from 'react';
import Buttons from './Buttons/Buttons';
import s from './Controls.module.css';
import Statistics from '../Statistics/Statistics';

class Controls extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodIncrement = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  handleNeutralIncrement = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  handleBadIncrement = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    return (
      <>
        <h2 className={s.head}>Please leave feedback</h2>
        <Buttons
          onGoodIncrement={this.handleGoodIncrement}
          onNeutralIncrement={this.handleNeutralIncrement}
          onBadIncrement={this.handleBadIncrement}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
      </>
    );
  }
}

export default Controls;
