import validator from 'validator';
import {
  StyledTitle,
  StyledValidator,
  StyledValidatorContainer,
  StyledValidatorInput,
  StyledValidatorLabel,
  StyledValidatorP,
} from '../styles';
import React, { useState } from 'react';

const PasswordValidator = () => {
  const [validatorMsg, setValidatorMsg] = useState('');
  const [isStrong, setIsStrong] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isStrong = validator.isStrongPassword(value);
    if (!isStrong) {
      setValidatorMsg('Password is not strong enough!');
      setIsStrong(false);
    }
    if (isStrong) {
      setValidatorMsg('Strong password!');
      setIsStrong(true);
    }
  };

  return (
    <StyledValidatorContainer id='validator'>
      <StyledValidator>
        <StyledTitle>Checking password strength</StyledTitle>
        <div>
          <StyledValidatorLabel>Enter password: </StyledValidatorLabel>
          <StyledValidatorInput onChange={handleOnChange} />
        </div>
        <StyledValidatorP $strong={isStrong}>{validatorMsg}</StyledValidatorP>
      </StyledValidator>
    </StyledValidatorContainer>
  );
};

export default PasswordValidator;
