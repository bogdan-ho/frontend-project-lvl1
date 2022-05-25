import generateNumber from '../src/generate-number.js';

export const explanation = 'What is the result of the expression?';

const operations = ['*', '+', '-'];

export const generateRound = () => {
  const randomNumber1 = generateNumber(10);
  const randomNumber2 = generateNumber(10);
  const operation = operations[generateNumber(2)];

  const question = `Question: ${randomNumber1} ${operation} ${randomNumber2}`;

  let rightAnswer = null;

  switch (operation) {
    case '*':
      rightAnswer = randomNumber1 * randomNumber2;
      break;
    case '+':
      rightAnswer = randomNumber1 + randomNumber2;
      break;
    default:
      rightAnswer = randomNumber1 - randomNumber2;
      break;
  }

  const correctAnswer = String(rightAnswer);

  return [question, correctAnswer];
};
