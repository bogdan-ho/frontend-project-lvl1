import readlineSync from 'readline-sync';

export const generateRandomNumber = (maxNum, minNum = 0) => {
  const randomNumberBetween = Math.floor(Math.random() * (maxNum - minNum) + minNum);
  return randomNumberBetween;
};

export const getAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};
