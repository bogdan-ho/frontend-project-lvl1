import generateNumber from '../src/generate-number.js';

export const explanation = 'Answer "yes" if the number is even, otherwise answer "no".';

export const generateRound = () => {
  const randomNumber = generateNumber(99);
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  const question = `Question: ${randomNumber}`;

  return [question, correctAnswer];
};
