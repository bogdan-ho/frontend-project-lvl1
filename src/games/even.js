import generateRandomNumber from '../gameCoreHelpers.js';
import startGame from '../index.js';

const explanation = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const randomNumber = generateRandomNumber(99);
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  const question = `Question: ${randomNumber}`;

  return [question, correctAnswer];
};

const brainEven = () => startGame(explanation, generateRound);

export default brainEven;
