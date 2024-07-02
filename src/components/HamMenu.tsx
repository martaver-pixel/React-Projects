// @ts-nocheck

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { StyledHamMenu, StyledHamMenuContainer } from '../styles';
import { useState } from 'react';
const HamMenu = ({ isOpen, setIsOpen }) => {
  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <StyledHamMenuContainer>
      <StyledHamMenu onClick={handleOnClick}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </StyledHamMenu>
    </StyledHamMenuContainer>
  );
};

export default HamMenu;
