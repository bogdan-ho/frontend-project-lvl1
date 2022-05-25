import cli from './cli.js';
import getAnswer from './get-answer.js';
import * as calc from '../games/calc.js';
import * as even from '../games/even.js';
import * as gcd from '../games/gcd.js';

// Определение функции игры "Калькулятор"
const game = (gameSort) => {
  let gameType = gameSort;
  if (gameSort === 'calc') {
    gameType = calc;
  }
  if (gameSort === 'even') {
    gameType = even;
  }
  if (gameSort === 'gcd') {
    gameType = gcd;
  }

  const name = cli();

  console.log(gameType.explanation);

  for (let i = 1; i <= 3;) {
    const [question, correctAnswer] = gameType.generateRound();

    console.log(question);

    const userAnswer = getAnswer();

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
  }

  return console.log(`Congratulations, ${name}!`);
};

export default game;
