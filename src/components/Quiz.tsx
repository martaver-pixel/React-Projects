import { useState } from 'react';
import {
  StyledQuiz,
  StyledQuizContainer,
  StyledQuizNextButton,
  StyledQuizTitle,
} from '../styles';
import QuizQuestion from './QuizQuestion';
import QuizResult from './QuizResult';

const questions = [
  {
    q: 'What does Michael pretend to fire Pam over in season one?',
    op: [
      'stealing post it notes',
      'not answering the phone',
      'wearing her glasses',
    ],
    c: 0,
  },
  {
    q: 'A foreign exchange student lived with Michael when he was young. What did the foreign exchange student take from Michael back to what was formerly Yugoslavia?',

    op: ['all of his blue jeans', 'all of his shorts', 'his favorite shoes'],
    c: 0,
  },
  {
    q: "Finish this quote from Dwight when he was asking Michael questions after being offered the spare room in Michael's new condo: 'Question. My grandparents left me a large number of _________.'",

    op: ['dressers', 'couches', 'armoires'],
    c: 2,
  },
  {
    q: 'What does Michael ask Pam to spread on his foot that he burned on a George Foreman grill?',
    op: ['Peanutbutter', 'Butter', 'Jelly'],
    c: 1,
  },
  {
    q: 'What does Kevin suggest Dwight put in his gun holster?',
    op: ['A cell phone', 'A banana', 'A toy gun'],
    c: 1,
  },
  {
    q: "At Phyllis and Bob Vance's wedding, what did Michael say everyone called Phyllis back in high school?",
    op: ['Four eyes', 'Phyll', 'Easy rider'],
    c: 2,
  },
  {
    q: "What kind of sandwich does Michael have a dream about when he's the head of Michael Scott Paper Company?",
    op: [
      'Peanut butter and tunafish',
      'Tunafish and skittles',
      'Mayo and black olives',
    ],
    c: 0,
  },
  {
    q: "On the day that he's supposed to move to Boulder, Colorado, Michael says, \"I can't do this. All the channels are going to be different there. I'm not going to be able to find my shows. I am not going to start ______ at level one. I don't think my credits",
    op: ['Improv', 'Management', 'Guitar'],
    c: 0,
  },
  {
    q: 'During the Glee watch party episode, what does Michael say he drinks while eating bags of vegetables that steam right inside their own bag?',
    op: ['Scotch and splenda', 'A beer', 'A glass of sangria'],
    c: 2,
  },
];

const Quiz = () => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [question, setQuestion] = useState(0);
  const [showQuestions, setShowQuestions] = useState(true);
  const [showResults, setShowResults] = useState(false);
  //   const [isSelected, setIsSelected] = useState(false);

  const handleOnClickNext = () => {
    let checked = document.querySelector('input[name="q1"]:checked');
    if (checked === null) {
      return;
    }
    if (question < questions.length - 1) {
      setSelectedAnswers([...selectedAnswers, parseInt(checked.value)]);
      setQuestion(question + 1);
      checked = null;
    }
    if (question === questions.length - 1) {
      setSelectedAnswers([...selectedAnswers, parseInt(checked.value)]);
      checked = null;
      setShowResults(true);
      setShowQuestions(false);
    }
  };

  return (
    <StyledQuizContainer id='quiz'>
      <StyledQuiz>
        <StyledQuizTitle>The Office Quiz</StyledQuizTitle>
        {showQuestions && (
          <>
            {question < questions.length - 1 ? (
              <>
                <QuizQuestion question={questions[question]} i={question} />
                <StyledQuizNextButton onClick={handleOnClickNext}>
                  Next &#62;&#62;
                </StyledQuizNextButton>
              </>
            ) : (
              <>
                <QuizQuestion question={questions[question]} i={question} />
                <StyledQuizNextButton onClick={handleOnClickNext}>
                  Check result! &#62;&#62;
                </StyledQuizNextButton>
              </>
            )}
          </>
        )}
        {showResults && (
          <QuizResult selectedAnswers={selectedAnswers} questions={questions} />
        )}
      </StyledQuiz>
    </StyledQuizContainer>
  );
};

export default Quiz;
