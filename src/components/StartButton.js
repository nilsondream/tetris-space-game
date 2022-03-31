import React from 'react';
import styled from 'styled-components';

const StyledStartButton = styled.button`
  box-sizing: border-box;

  margin: 0 0 20px 0;
  padding: 20px;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  border: none;
  color: white;
  background: #333;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
  transition: .3s all ease-in-out;
  font-family: 'Press Start';

  &:hover{
    //background: linear-gradient(45deg, #2948ff, #396afc);
    background: #4700FF;
  }
`;

const StartButton = ({ callback }) => (
  <StyledStartButton onClick={callback}>Start Game</StyledStartButton>
);

export default StartButton;
