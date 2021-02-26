import React from 'react';
import PropTypes from 'prop-types';
import Section from './Components/Section/Section';
import FeedbackOptions from './Components/FeedbackOptions/FeedbackOptions';
import Statistics from './Components/Statistics/Statistics';
import Notification from './Components/Notification/Notification';

const options = ['good', 'neutral', 'bad'];

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  handleLeavefeedback = e => {
    const feedbackItem = e.target.name;
    this.setState(prevState => {
      return { [feedbackItem]: prevState[feedbackItem] + 1 };
    });
  };

  handlePositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;

    const percent = (good * 100) / total;
    return Math.trunc(percent);
  };

  render() {
    const { good, neutral, bad } = this.state;
    let total = this.handleTotalFeedback();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleLeavefeedback}
          />
        </Section>
        {total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percantage={this.handlePositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </>
    );
  }
}

export default App;
