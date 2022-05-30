import readlineSync from 'readline-sync';

export default () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};
