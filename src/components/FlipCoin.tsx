import { useState } from 'react';
import {
  StyledCoinFl,
  StyledCoinFlButton,
  StyledCoinFlContainer,
  StyledCoinFlH2,
  StyledCoinFlTitle,
} from '../styles';
import Coin from './Coin';

const FlipCoin = () => {
  const [side, setSide] = useState('heads');
  const [headsAcc, setHeadsAcc] = useState(0);
  const [tailAcc, setTailAcc] = useState(0);
  const [flipCounter, setFlipCounter] = useState(0);

  const handleOnClick = () => {
    const num = Math.floor(Math.random() * 2);
    if (num) {
      setSide('heads');
      setHeadsAcc(headsAcc + 1);
      setFlipCounter(flipCounter + 1);
    }
    if (!num) {
      setSide('tail');
      setTailAcc(tailAcc + 1);
      setFlipCounter(flipCounter + 1);
    }
  };
  return (
    <StyledCoinFlContainer id='coin'>
      <StyledCoinFl>
        <StyledCoinFlTitle>Coin Flipping</StyledCoinFlTitle>
        <Coin side={side} />
        <StyledCoinFlButton onClick={handleOnClick}>Flip!</StyledCoinFlButton>
        <StyledCoinFlH2>
          Out of {flipCounter} flips, there have been {headsAcc} heads and{' '}
          {tailAcc} tails
        </StyledCoinFlH2>
      </StyledCoinFl>
    </StyledCoinFlContainer>
  );
};

export default FlipCoin;
