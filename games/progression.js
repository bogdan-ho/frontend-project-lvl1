import generateNumber from '../src/generate-number.js';
import generateNumberBetween from '../src/generate-number-between.js';

export const explanation = 'What number is missing in the progression?';

export const generateRound = () => {
  const progressionLength = generateNumberBetween(5, 10);
  const progressionStart = generateNumberBetween(2, 15);
  const progressionIncrease = generateNumberBetween(2, 6);
  const progression = [];

  for (let i = 1; i <= progressionLength; i += 1) {
    const addNumberInProgression = progressionStart + progressionIncrease * i;
    progression.push(addNumberInProgression);
  }

  const lastProgressionIndex = progressionLength - 1;
  const indexForDelete = generateNumber(lastProgressionIndex);
  const correctAnswer = String(progression[indexForDelete]);

  progression[indexForDelete] = '..';

  let progressionString = '';
  for (let i = 0; i <= lastProgressionIndex; i += 1) {
    progressionString += `${progression[i]} `;
  }

  const question = `Question: ${progressionString}`;

  return [question, correctAnswer];
};
