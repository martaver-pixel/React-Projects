import { useEffect, useState } from 'react';

const QuizResult = ({ selectedAnswers, questions }) => {
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  useEffect(() => {
    const correctAns = questions.map((ques) => ques.c);
    let correctCount = 0;
    let incorrectCount = 0;

    selectedAnswers.forEach((ans, i) => {
      if (ans === correctAns[i]) {
        correctCount++;
      } else {
        incorrectCount++;
      }
    });

    setCorrect(correctCount);
    setIncorrect(incorrectCount);
  }, [selectedAnswers, questions]);
  console.log(correct, 'co', incorrect, 'inco');
  return (
    <div>
      <p>Correct: {correct}</p>
      <p>Incorrect: {incorrect}</p>
    </div>
  );
};

export default QuizResult;
