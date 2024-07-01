import { Grid } from '@mui/material';
import {
  StyledDiceContainer,
  StyledDiceRolling,
  StyledDiceRollingContainer,
  StyledDiceRollingTitle,
  StyledRollButton,
} from '../styles';
import Die from './Die';
import { useState } from 'react';

const RollDice = () => {
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);

  const randomNumber = () => Math.floor(Math.random() * 6) + 1;

  const handleOnClick = () => {
    setTimeout(() => {
      setDice1(randomNumber());
      setDice2(randomNumber());
    }, 2000);
  };

  return (
    <StyledDiceRollingContainer id='dicerolling'>
      <StyledDiceRolling>
        <StyledDiceRollingTitle>Dice Rolling</StyledDiceRollingTitle>
        <StyledDiceContainer>
          {dice1 && <Die num={dice1} />} <Die num={dice2} />
        </StyledDiceContainer>
        <StyledRollButton onClick={handleOnClick}>Roll</StyledRollButton>
      </StyledDiceRolling>
    </StyledDiceRollingContainer>
  );
};

export default RollDice;
