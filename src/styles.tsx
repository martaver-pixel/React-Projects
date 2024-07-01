import styled from 'styled-components';
import './style.css';
interface ValidatorPProps {
  $strong: boolean;
}
interface ColorBoxProps {
  $color: string;
}
//NavBar
export const StyledNavBarContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const StyledNavBar = styled.nav`
  display: flex;
  background-color: #02a481;
  height: 5rem;
  align-items: center;
  padding: 0 2rem;
  position: fixed;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-evenly;
  width: -webkit-fill-available;
`;
export const StyledNavAnchor = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  &:hover {
    text-shadow: 5px 5px 5px #02604b;
  }

  &:visited {
    background-color: red;
  }
`;

//SideBar

export const StyledSideBarContainer = styled.div`
  background-color: #02a481;
  height: 5rem;
`;

export const StyledSideBar = styled.aside``;
export const StyledSideBarAnchor = styled.a``;

//Form
export const StyledFormContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 3rem 20%;
  flex-direction: column;
  background-color: #f2f1f0;
`;
export const StyledForm = styled.form`
  background-color: #fff;
  margin: 1rem;
  padding: 10px 30px;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;
export const StyledTitle = styled.h1`
  text-align: center;
  color: #327c35;
`;
export const StyledFormLabel = styled.label`
  color: #555557;
  font-weight: bold;
  padding: 0.5rem 0rem;
  width: 100%;
`;
export const StyledFormInput = styled.input`
  height: 2rem;
  border: 2px solid #bfbfbf;
  margin: 0.5rem 0;
  width: 100%;

  &:focus {
    border-color: orange;
    outline: none;
  }
`;
export const StyledFormRadio = styled.input`
  background-color: red;
`;
export const StyledFormCheckbox = styled.input`
  margin-left: 20px;
`;
export const StyledFormUploadFile = styled.input`
  border: 1px solid black;
  border: 2px solid #bfbfbf;

  padding: 10px;
`;
export const StyledFormURL = styled.input`
  padding: 5px;
  border: 2px solid #bfbfbf;
`;
export const StyledFormSelect = styled.select`
  padding: 5px;
  border: 2px solid #bfbfbf;
`;
export const StyledFormOption = styled.option``;
export const StyledFormTextArea = styled.textarea`
  resize: none;
  width: 100%;
  height: 150px;
  padding: 0px;
  border: 2px solid #bfbfbf;
`;
export const StyledFormButton = styled.input`
  background-color: #52bf50;
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 10px;
  width: 10rem;
  margin: 15px;
  font-size: 1rem;
  cursor: pointer;
`;

// Jokes
export const StyledJokesContainer = styled(StyledFormContainer)`
  display: flex;
  align-items: center;
`;
export const StyledJokes = styled.div`
  background-color: #fff;
  margin: 1rem;
  padding: 10px 30px;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  width: 100%;
  margin: 7.5rem;
  padding: 10%;
`;

export const StyledGetJokeButton = styled.button`
  background-color: #52bf50;
  box-shadow: 5px 5px 10px #277526;
  align-items: center;
  color: white;
  border: none;
  border-radius: 10px;
  width: 40%;
  margin: 15px;
  font-size: 1.5rem;
  padding: 10px;
  cursor: pointer;
  &:active {
    box-shadow: 2px 2px 5px #277526;
  }
`;

export const StyledJoke = styled.p`
  font-size: 1.5rem;
  text-align: center;
`;

// Password Validator

export const StyledValidatorContainer = styled(StyledJokesContainer)``;
export const StyledValidator = styled(StyledJokes)``;
export const StyledValidatorLabel = styled.label``;
export const StyledValidatorInput = styled.input``;
export const StyledValidatorP = styled(StyledJoke)<ValidatorPProps>`
  color: ${(props) => (props.$strong ? 'green' : 'red')};
`;

//IP Finder
export const StyledIPFinderContainer = styled(StyledJokesContainer)``;
export const StyledIPFinder = styled(StyledJokes)``;
export const StyledIPFinderTitle = styled(StyledTitle)``;
export const StyledIPFinderH4 = styled.h4`
  color: grey;
`;
export const StyledIPFinderH2 = styled.h2`
  color: #49b54d;
`;

//Dice Rolling
export const StyledDiceRollingContainer = styled(StyledJokesContainer)``;
export const StyledDiceRolling = styled(StyledJokes)``;
export const StyledDiceRollingTitle = styled(StyledTitle)``;
export const StyledDiceContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;
export const StyledRollButton = styled(StyledGetJokeButton)``;
export const StyledDie = styled.img`
  /* @keyframes tilt-shaking {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(5deg);
    }
    50% {
      transform: rotate(0eg);
    }
    75% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  } */
`;
//Rockm paper scissors game
export const StyledRPSContainer = styled(StyledJokesContainer)``;
export const StyledRPS = styled(StyledJokes)``;
export const StyledRPSTitle = styled(StyledTitle)``;
export const StyledRPSButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const StyledRPSButton = styled(StyledGetJokeButton)`
  width: 10rem;
`;
export const StyledRPSHContainer = styled.div`
  width: 20rem;
`;
export const StyledRPSH2 = styled.h2`
  color: #49b54d;
`;

//To Do List
export const StyledTDLContainer = styled(StyledJokesContainer)``;
export const StyledTDL = styled(StyledJokes)``;
export const StyledTDLTitle = styled(StyledTitle)``;
export const StyledTDLInputContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const StyledTDLInput = styled.input`
  margin-bottom: 1rem;
  height: 3rem;
  border: 1px solid grey;
  border-radius: 10px 0px 0px 10px;
  /* box-shadow: 5px 5px 10px #697069; */
`;
export const StyledTDLAddButton = styled(StyledGetJokeButton)`
  width: 5rem;
  height: 3.3rem;
  margin: 0px;
  box-shadow: none;
  border-radius: 0px 10px 10px 0;
`;
export const StyledTDLInputWrapper = styled.div`
  position: relative;
`;
export const StyledTasksContainer = styled.div`
  margin-top: 1rem;
`;
export const StyledTaskContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f1ebeb;
  padding-left: 10px;
  min-width: 30rem;
  &:hover {
    background-color: #d5cfcf;
  }
`;
export const StyledTask = styled.h4`
  width: 100%;
`;
export const StyledTaskButtonContainer = styled.div`
  display: flex;
`;
export const StyledDeleteTaskButton = styled(StyledGetJokeButton)`
  margin: 0px;
  width: 100%;
  border-radius: 0px;
  box-shadow: none;
  border: 1px solid #52bf50;
  &:active {
    box-shadow: none;
    background-color: #277526;
  }
  &:hover {
    background-color: #359b33;
  }
`;
export const StyledEditTaskButton = styled(StyledDeleteTaskButton)``;
export const StyledTDLErrorMsg = styled.p`
  position: absolute;
  bottom: -25px;
  left: 20%;
  color: #d71515;
`;

//Quiz
export const StyledQuizContainer = styled(StyledJokesContainer)``;
export const StyledQuiz = styled(StyledJokes)``;
export const StyledQuizTitle = styled(StyledTitle)``;
export const StyledQuizNextButton = styled(StyledRollButton)`
  width: 6rem;
  padding: 0;
  border-radius: 0;

  font-size: 1.2rem;
  margin: -0.5rem -0rem 0rem 0rem;
`;

export const StyledQuizImgDiv = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
`;

export const StyledQuizQstFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StyledQuizQstLegend = styled.legend`
  height: 7rem;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  padding-bottom: 1rem;
`;
export const StyledAnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const StyledAnsOptionInput = styled.input``;
export const StyledAnsOptionLabel = styled.label``;

// Coin Flipping
export const StyledCoinFlContainer = styled(StyledJokesContainer)``;
export const StyledCoinFl = styled(StyledJokes)``;
export const StyledCoinFlTitle = styled(StyledTitle)``;
export const StyledCoinContainer = styled.div``;
export const StyledCoinFlButton = styled(StyledRollButton)``;
export const StyledCoinFlH2 = styled(StyledIPFinderH2)``;

// Color Box
export const StyledColorBoxContainer = styled(StyledJokesContainer)``;
export const StyledColorBox = styled(StyledJokes)``;
export const StyledColorBoxTitle = styled(StyledTitle)``;
export const StyledColorBoxesWrapper = styled.div`
  display: grid;
  gap: 3px;
  grid-template-columns: repeat(6, 1fr);
`;
export const StyledColorBoxMini = styled.div<ColorBoxProps>`
  width: 6em;
  height: 6em;
  background-color: ${(props) => props.$color};
`;
