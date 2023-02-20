import { useState, useEffect } from 'react';
import { Section, FeedbackOptions, Statistics, Notification } from 'components';
import { Wrapper } from './App.styled';

export function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const [total, setTotal] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  useEffect(() => {
    setTotal(feedback.good + feedback.neutral + feedback.bad);
    setPositivePercentage(
      Math.round((feedback.good / total) * 100) || 0
    );
  }, [feedback, total]);

  const handleFeedback = (option) => {
    setFeedback((prevState) => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  return (
    <Wrapper>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Wrapper>
  );
}
