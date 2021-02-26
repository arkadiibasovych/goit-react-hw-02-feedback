import React from 'react';
import Buttons from '../FeedbackOptions/FeedbackOptions';
import s from './Controls.module.css';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';

class Controls extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = (good, neutral, bad) => {
    const total = good + neutral + bad;
    const percent = (good * 100) / total;
    return Math.trunc(percent);
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
        {this.state.good > 0 || this.state.neutral > 0 || this.state.bad > 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback(
              this.state.good,
              this.state.neutral,
              this.state.bad,
            )}
            percantage={this.countPositiveFeedbackPercentage(
              this.state.good,
              this.state.neutral,
              this.state.bad,
            )}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </>
    );
  }
}

export default Controls;
