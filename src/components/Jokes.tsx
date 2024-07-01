import { useState } from 'react';
import {
  StyledTitle,
  StyledJokes,
  StyledJokesContainer,
  StyledGetJokeButton,
  StyledJoke,
} from '../styles';

const Jokes = () => {
  const [joke, setJoke] = useState('');
  const getJoke = () => {
    fetch('https://sv443.net/jokeapi/v2/joke/Programming?type=single')
      .then((res) => res.json())
      .then((data) => setJoke(data.joke));
  };
  return (
    <StyledJokesContainer id='jokes'>
      <StyledJokes>
        <StyledTitle>Joke Generator</StyledTitle>
        <StyledGetJokeButton onClick={getJoke}>
          Click to generate a joke
        </StyledGetJokeButton>
        <StyledJoke>{joke}</StyledJoke>
      </StyledJokes>
    </StyledJokesContainer>
  );
};

export default Jokes;
