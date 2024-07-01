import {
  StyledNavAnchor,
  StyledNavBar,
  StyledNavBarContainer,
} from '../styles';

const NavBar = () => {
  return (
    <StyledNavBarContainer>
      <StyledNavBar>
        <StyledNavAnchor href='#form'>Form</StyledNavAnchor>
        <StyledNavAnchor href='#jokes'>Jokes</StyledNavAnchor>
        <StyledNavAnchor href='#validator'>Password Validator</StyledNavAnchor>
        <StyledNavAnchor href='#ipfinder'>IP Finder</StyledNavAnchor>
        <StyledNavAnchor href='#dicerolling'>Dice Rolling</StyledNavAnchor>
        <StyledNavAnchor href='#rpsgame'>
          Rock Paper or Scissors
        </StyledNavAnchor>
        <StyledNavAnchor href='#todolist'>To Do List</StyledNavAnchor>
        <StyledNavAnchor href='#quiz'>The Office Quiz</StyledNavAnchor>
        <StyledNavAnchor href='#coin'>Coin Flipping</StyledNavAnchor>
        <StyledNavAnchor href='#colorbox'>Color Box</StyledNavAnchor>
      </StyledNavBar>
    </StyledNavBarContainer>
  );
};

export default NavBar;
