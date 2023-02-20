import PropTypes from 'prop-types';
import { Wrapper, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Wrapper title={title}>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
