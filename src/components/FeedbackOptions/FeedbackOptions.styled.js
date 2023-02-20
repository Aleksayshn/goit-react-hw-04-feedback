import styled from 'styled-components';
import { colorPicker } from '../utils/colorPicker';

export const Wrapper = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  min-width: 150px;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  background-color: ${({ value }) => colorPicker(value)};
  border-radius: 5px;
  border: none;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;
