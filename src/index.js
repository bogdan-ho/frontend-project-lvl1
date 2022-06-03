import cli from './cli.js';
import getAnswer from './getAnswer.js';

const startGame = (explanation, generateRound) => {
  const name = cli();

  console.log(explanation);

  for (let i = 1; i <= 3; i += 1) {
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
