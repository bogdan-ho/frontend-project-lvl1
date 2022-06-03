import generateRandomNumber from '../gameCoreHelpers.js';
import startGame from '../index.js';

const explanation = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const generateRound = () => {
  const randomNumber = generateRandomNumber(41, 2);
  const correctAnswer = isPrimeNumber(randomNumber) ? 'yes' : 'no';
  const question = `Question: ${randomNumber}`;

  return [question, correctAnswer];
};

const brainPrime = () => startGame(explanation, generateRound);

export default brainPrime;
