// @ts-nocheck
import { useState } from 'react';
import {
  StyledRPS,
  StyledRPSButton,
  StyledRPSButtonsContainer,
  StyledRPSContainer,
  StyledRPSH2,
  StyledRPSHContainer,
  StyledRPSTitle,
} from '../styles';
type Choice = 'Rock' | 'Paper' | 'Scissor';

const RPSGame = () => {
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');

  const numberConverter = (num: number) => {
    if (num === 1) return 'Rock';
    if (num === 2) return 'Paper';
    if (num === 3) return 'Scissor';
  };

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const computerChoiceRandom = Math.floor(Math.random() * 3 + 1);
    const computerChoiceToString = numberConverter(computerChoiceRandom);
    const userChoiceReceived = (e.target as HTMLButtonElement).id as Choice;

    setComputerChoice(computerChoiceToString);
    setUserChoice(userChoiceReceived);
    if (userChoice === computerChoiceToString) {
      return;
    } else if (
      (userChoiceReceived === 'Scissor' &&
        computerChoiceToString === 'Paper') ||
      (userChoiceReceived === 'Paper' && computerChoiceToString === 'Rock') ||
      (userChoiceReceived === 'Rock' && computerChoiceToString === 'Scissor')
    ) {
      setUserScore(userScore + 1);
    } else {
      setComputerScore(computerScore + 1);
    }
  };

  return (
    <StyledRPSContainer id='rpsgame'>
      <StyledRPS>
        <StyledRPSTitle>Welcome to Rock, Paper, Scissors Game!</StyledRPSTitle>
        <StyledRPSButtonsContainer>
          <StyledRPSButton id='Rock' onClick={handleOnClick}>
            &#9994; Rock{' '}
          </StyledRPSButton>
          <StyledRPSButton id='Paper' onClick={handleOnClick}>
            &#9995; Paper{' '}
          </StyledRPSButton>
          <StyledRPSButton id='Scissor' onClick={handleOnClick}>
            &#9996; Scissor{' '}
          </StyledRPSButton>
        </StyledRPSButtonsContainer>
        <StyledRPSHContainer>
          <h4>Your choice: {userChoice}</h4>
          <h4>Computer's choice: {computerChoice} </h4>
        </StyledRPSHContainer>
        <StyledRPSHContainer>
          <StyledRPSH2>Your Score: {userScore}</StyledRPSH2>
          <StyledRPSH2>Computer's Score: {computerScore}</StyledRPSH2>
        </StyledRPSHContainer>
      </StyledRPS>
    </StyledRPSContainer>
  );
};

export default RPSGame;
