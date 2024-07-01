import {
  StyledSideBar,
  StyledSideBarAnchor,
  StyledSideBarContainer,
} from '../styles';

const SideBar = () => {
  return (
    <StyledSideBarContainer>
      <StyledSideBar>
        <StyledSideBarAnchor href='#form'>Form</StyledSideBarAnchor>
        <StyledSideBarAnchor href='#jokes'>Jokes</StyledSideBarAnchor>
        <StyledSideBarAnchor href='#validator'>
          Password Validator
        </StyledSideBarAnchor>
        <StyledSideBarAnchor href='#ipfinder'>IP Finder</StyledSideBarAnchor>
        <StyledSideBarAnchor href='#dicerolling'>
          Dice Rolling
        </StyledSideBarAnchor>
        <StyledSideBarAnchor href='#rpsgame'>
          Rock Paper or Scissors
        </StyledSideBarAnchor>
        <StyledSideBarAnchor href='#todolist'>To Do List</StyledSideBarAnchor>
        <StyledSideBarAnchor href='#quiz'>The Office Quiz</StyledSideBarAnchor>
        <StyledSideBarAnchor href='#coin'>Coin Flipping</StyledSideBarAnchor>
        <StyledSideBarAnchor href='#colorbox'>Color Box</StyledSideBarAnchor>
      </StyledSideBar>
    </StyledSideBarContainer>
  );
};

export default SideBar;
