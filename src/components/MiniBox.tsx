import { useEffect, useState, useCallback } from 'react';
import { StyledColorBoxMini } from '../styles';

const MiniBox = () => {
  const [bgColor, setBgColor] = useState('');

  const random = useCallback(() => Math.floor(Math.random() * 256), []);
  useEffect(() => {
    setBgColor(`rgb(${random()}, ${random()}, ${random()})`);
  }, [random]);

  const handleOnClick = () => {
    setBgColor(`rgb(${random()}, ${random()}, ${random()})`);
  };

  return <StyledColorBoxMini $color={bgColor} onClick={handleOnClick} />;
};

export default MiniBox;
