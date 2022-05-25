import generateNumber from '../src/generate-number.js';

export const explanation = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

export const generateRound = () => {
  const randomNumber = generateNumber(29);
  const correctAnswer = primeNumbers.includes(randomNumber) ? 'yes' : 'no';
  const question = `Question: ${randomNumber}`;

  return [question, correctAnswer];
};
