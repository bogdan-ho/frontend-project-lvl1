import generateRandomNumber from '../gameCoreHelpers.js';
import startGame from '../index.js';

const explanation = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const randomNumber1 = generateRandomNumber(100, 1);
  const randomNumber2 = generateRandomNumber(100, 1);
  const commonDivisorsStack = [];

  for (let i = 1; i <= randomNumber1 && i <= randomNumber2; i += 1) {
    if (randomNumber1 % i === 0 && randomNumber2 % i === 0) {
      commonDivisorsStack.push(i);
    }
  }

  const numericAnswer = commonDivisorsStack.pop();
  const correctAnswer = String(numericAnswer);
  const question = `Question: ${randomNumber1} ${randomNumber2}`;

  return [question, correctAnswer];
};

const brainGcd = () => startGame(explanation, generateRound);

export default brainGcd;
