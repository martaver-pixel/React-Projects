import {
  StyledColorBox,
  StyledColorBoxContainer,
  StyledColorBoxTitle,
  StyledColorBoxesWrapper,
} from '../styles';
import MiniBox from './MiniBox';

const ColorBox = () => {
  const miniBoxes = Array.from({ length: 12 }, (_, index) => (
    <MiniBox key={index} />
  ));

  return (
    <StyledColorBoxContainer id='colorbox'>
      <StyledColorBox>
        <StyledColorBoxTitle>Color Box</StyledColorBoxTitle>
        <StyledColorBoxesWrapper>{miniBoxes}</StyledColorBoxesWrapper>
      </StyledColorBox>
    </StyledColorBoxContainer>
  );
};

export default ColorBox;
