import { generateRandomNumber } from '../helpers.js';
import startGame from '../index.js';

const explanation = 'What is the result of the expression?';

const operations = ['*', '+', '-'];

const performCalculation = (operationType, number1, number2) => {
  switch (operationType) {
    case '*':
      return number1 * number2;
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    default:
      console.error(`Передан неправильный оператор: ${operationType}`);
      return null;
  }
};

const generateRound = () => {
  const randomNumber1 = generateRandomNumber(10);
  const randomNumber2 = generateRandomNumber(10);
  const operation = operations[generateRandomNumber(2)];

  const question = `Question: ${randomNumber1} ${operation} ${randomNumber2}`;

  const numericAnswer = performCalculation(operation, randomNumber1, randomNumber2);
  const correctAnswer = String(numericAnswer);

  return [question, correctAnswer];
};

const brainCalc = () => startGame(explanation, generateRound);

export default brainCalc;
