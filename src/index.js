import cli from './cli.js';
import { getAnswer } from './helpers.js';

const startGame = (explanation, generateRound) => {
  const name = cli();

  console.log(explanation);

  const roundCount = 3;

  for (let i = 1; i <= roundCount; i += 1) {
    const [question, correctAnswer] = generateRound();

    console.log(question);

    const userAnswer = getAnswer();

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
  }

  return console.log(`Congratulations, ${name}!`);
};

export default startGame;
