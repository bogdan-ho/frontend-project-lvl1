import { generateRandomNumber } from '../helpers.js';
import startGame from '../index.js';

const explanation = 'What number is missing in the progression?';

const generateRound = () => {
  const progressionLength = generateRandomNumber(10, 5);
  const progressionStart = generateRandomNumber(15, 2);
  const progressionIncrease = generateRandomNumber(6, 2);
  const progression = [];

  for (let i = 1; i <= progressionLength; i += 1) {
    const addNumberInProgression = progressionStart + progressionIncrease * i;
    progression.push(addNumberInProgression);
  }

  const lastProgressionIndex = progressionLength - 1;
  const deletionIndex = generateRandomNumber(lastProgressionIndex);

  const numericAnswer = progression[deletionIndex];
  const correctAnswer = String(numericAnswer);

  progression[deletionIndex] = '..';

  const progressionString = progression.join(' ');

  const question = `Question: ${progressionString}`;

  return [question, correctAnswer];
};

const brainProgression = () => startGame(explanation, generateRound);

export default brainProgression;
