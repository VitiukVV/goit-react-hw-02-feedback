import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackButtons from './Feedback/FeedbackButtons';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  }

  onLeaveFeedback = e => {
    const { name } = e.target;
    this.setState(prevValue => ({
      [name]: prevValue[name] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);

    return (
      <div
        style={{
          margin: '20px',
        }}
      >
        <Section title="Please leave feedback">
          <div
            style={{
              display: 'flex',
              gap: '5px',
            }}
          >
            <FeedbackButtons
              options={options}
              onLeaveFeedback={this.onLeaveFeedback}
            ></FeedbackButtons>
          </div>
        </Section>
        <Section title="Statistics">
          {!total ? (
            <Notification message="There is no feedback"></Notification>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            ></Statistics>
          )}
        </Section>
      </div>
    );
  }
}
