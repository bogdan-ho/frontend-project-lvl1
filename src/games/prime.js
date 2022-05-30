import generateRandomNumber from '../gameCoreHelpers.js';
import startGame from '../index.js';

const explanation = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

const generateRound = () => {
  const randomNumber = generateRandomNumber(29);
  const correctAnswer = primeNumbers.includes(randomNumber) ? 'yes' : 'no';
  const question = `Question: ${randomNumber}`;

  return [question, correctAnswer];
};

const brainPrime = () => startGame(explanation, generateRound);

export default brainPrime;
