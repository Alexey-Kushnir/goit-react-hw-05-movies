import styled from 'styled-components';

export const Input = styled.input`
  margin-right: 5px;
  border: 2px solid grey;
  border-radius: 3px;
  height: 20px;
  width: 300px;
`;

export const Button = styled.button`
  border: 2px solid grey;
  border-radius: 3px;
  height: 26px;
  width: 100px;
  cursor: pointer;
  &:hover,
  :focus {
    background-color: #80808054;
    border: 0;
  }
`;
