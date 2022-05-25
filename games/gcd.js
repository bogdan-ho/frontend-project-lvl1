import generateNumber from '../src/generate-number.js';

export const explanation = 'Find the greatest common divisor of given numbers.';

export const generateRound = () => {
  const randomNumber1 = generateNumber(100);
  const randomNumber2 = generateNumber(100);
  const stack = [];

  for (let i = 1; i <= randomNumber1 && i <= randomNumber2; i += 1) {
    if (randomNumber1 % i === 0 && randomNumber2 % i === 0) {
      stack.push(i);
    }
  }

  const correctAnswer = String(stack.pop());
  const question = `Question: ${randomNumber1} ${randomNumber2}`;

  return [question, correctAnswer];
};
