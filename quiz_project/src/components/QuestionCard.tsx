import React from 'react';
import { AnswerObject } from '../App';
import { ButtonWrapper } from './QuestionCard.styles';

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestion: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestion,
}) => (
  <div>
    <p className="number">
      Question: {questionNr}/{totalQuestion}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }}></p>
    <div>
      {answers.map((answer) => (
        <ButtonWrapper
          key={answer}
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
        >
          <button disabled={userAnswer ? true : false} onClick={callback} value={answer}>
            <span dangerouslySetInnerHTML={{ __html: answer }}></span>
          </button>
          {/* <input type="radio" id="huey" name="drone" value="huey" onClick={callback} />
          <label dangerouslySetInnerHTML={{ __html: answer }}></label> */}
        </ButtonWrapper>
      ))}
    </div>
  </div>
);

export default QuestionCard;
