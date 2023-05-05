import styled from '@emotion/styled';

export const OptionsList = styled.ul`
  display: flex;
  gap: 8px;
  list-style: none;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 12px;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background-color: #c6c8f9;
  }
`;
