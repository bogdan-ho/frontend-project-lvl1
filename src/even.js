import readlineSync from 'readline-sync';

// Определение функции приветствия и запроса имени
const cli = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

// Определение функции генерации случайных чисел
const generateRandomNumber = () => {
  const maxNum = 99;
  return Math.floor(Math.random() * maxNum);
};

// Определение функции игры на четность
const evenGame = () => {
  const name = cli();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= 3;) {
    const randomNumber = generateRandomNumber();

    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    console.log(userAnswer);
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

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

export default evenGame;
