import PropTypes from 'prop-types';
import { List, Info, Counter } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <List>
      <Info>
        Good:
        <Counter option="good"> {good}</Counter>
      </Info>
      <Info>
        Neutral:
        <Counter option="neutral"> {neutral}</Counter>
      </Info>
      <Info>
        Bad:
        <Counter option="bad"> {bad}</Counter>
      </Info>
      <Info>
        Total:
        <Counter> {total}</Counter>
      </Info>
      <Info>
        Positive feedback:
        <Counter> {positivePercentage}%</Counter>
      </Info>
    </List>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
