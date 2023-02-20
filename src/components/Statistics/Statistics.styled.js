import styled from 'styled-components';
import { colorPicker } from '../utils/colorPicker';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Info = styled.li`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1.2px;
  color: #395957;
`;

export const Counter = styled.span`
  font-size: 28px;
  font-weight: 700;
  color: ${({ option }) => colorPicker(option)};
`;
