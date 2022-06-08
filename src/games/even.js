import { generateRandomNumber } from '../helpers.js';
import startGame from '../index.js';

const explanation = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const randomNumber = generateRandomNumber(99);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  const question = `Question: ${randomNumber}`;

  return [question, correctAnswer];
};

const brainEven = () => startGame(explanation, generateRound);

export default brainEven;
