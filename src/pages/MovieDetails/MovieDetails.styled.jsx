import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const GoBackLink = styled(Link)`
  font-size: small;
  display: block;
  padding: 3px 5px;
  border: 1px solid grey;
  border-radius: 3px;
  background-color: #9393936c;
  color: #000;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  margin-bottom: 10px;
  width: 70px;
  height: 15px;
`;

export const InfLink = styled(Link)`
  font-size: small;
  display: inline-block;
  padding: 3px 5px;
  border: 1px solid grey;
  border-radius: 3px;
  background-color: #9393936c;
  color: #000;
  text-align: center;
  text-decoration: none;
  width: 50px;
  height: 15px;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;
