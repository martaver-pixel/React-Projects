import {
  StyledAnsOptionInput,
  StyledAnsOptionLabel,
  StyledAnsWrapper,
  StyledQuizImgDiv,
  StyledQuizQstFieldset,
  StyledQuizQstLegend,
} from '../styles';

const QuizQuestion = ({ question, i }) => {
  const options = question.op;
  return (
    <StyledQuizQstFieldset>
      <StyledQuizQstLegend>{question.q}</StyledQuizQstLegend>
      <StyledQuizImgDiv>
        <img
          src={`../public/img/q${i + 1}.webp`}
          alt='office img'
          width={'300px'}
        />
      </StyledQuizImgDiv>
      <StyledAnsWrapper>
        {options &&
          options.map((op, i) => {
            return (
              <div key={op[i]}>
                <StyledAnsOptionInput
                  type='radio'
                  name='q1'
                  value={i}
                  id={op[i]}
                />
                <StyledAnsOptionLabel htmlFor={op[i]}>
                  {op}
                </StyledAnsOptionLabel>
              </div>
            );
          })}
      </StyledAnsWrapper>
    </StyledQuizQstFieldset>
  );
};

export default QuizQuestion;
