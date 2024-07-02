import { useState } from 'react';
import ColorBox from './components/ColorBox';
import FlipCoin from './components/FlipCoin';
import Form from './components/Form';
import IPFinder from './components/IPFinder';
import Jokes from './components/Jokes';
import NavBar from './components/NavBar';
import PasswordValidator from './components/PasswordValidator';
import Quiz from './components/Quiz';
import RPSGame from './components/RPSGame';
import RollDice from './components/RollDice';
import SideBar from './components/SideBar';
import ToDoList from './components/ToDoList';
import './style.css';
import HamMenu from './components/HamMenu';
import { StyledSideBar } from './styles';

const App = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);

  const resizeListener = () => {
    setScreenWidth(window.innerWidth);
  };
  console.log(isOpen);
  window.addEventListener('resize', resizeListener);
  return (
    <>
      {screenWidth > 1000 ? (
        <NavBar />
      ) : (
        <HamMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
      {isOpen && screenWidth < 1000 ? <SideBar isOpen={true} /> : ''}
      <Form />
      <Jokes />
      <PasswordValidator />
      <IPFinder />
      <RollDice />
      <RPSGame />
      <ToDoList />
      <Quiz />
      <FlipCoin />
      <ColorBox />
    </>
  );
};

export default App;
