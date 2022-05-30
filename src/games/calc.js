import generateRandomNumber from '../gameCoreHelpers.js';
import startGame from '../index.js';

const explanation = 'What is the result of the expression?';

const operations = ['*', '+', '-'];

const generateRound = () => {
  const randomNumber1 = generateRandomNumber(10);
  const randomNumber2 = generateRandomNumber(10);
  const operation = operations[generateRandomNumber(2)];

  const question = `Question: ${randomNumber1} ${operation} ${randomNumber2}`;

  let correctAnswer = null;
  switch (operation) {
    case '*':
      correctAnswer = randomNumber1 * randomNumber2;
      break;
    case '+':
      correctAnswer = randomNumber1 + randomNumber2;
      break;
    case '-':
      correctAnswer = randomNumber1 - randomNumber2;
      break;
    default:
      console.error(`Передан неправильный оператор: ${operation}`);
  }

  correctAnswer = String(correctAnswer);

  return [question, correctAnswer];
};

const brainCalc = () => startGame(explanation, generateRound);

export default brainCalc;
