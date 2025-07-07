import readlineSync from 'readline-sync';
import askName from './cli.js';

const startEvenGames = () => {
  const userName = askName();
  console.log('Responde "yes" si el número es par, de lo contrario responde "no".');

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const numRandom = Math.floor(Math.random() * 100) + 1;
    console.log(`Pregunta: ${numRandom}`);
    const answer = readlineSync.question('Tu respuesta: ').toLowerCase();

    const correctAnswer = numRandom % 2 === 0 ? 'yes' : 'no';

    if (correctAnswer === !'yes' && correctAnswer === !'no') {
      console.log(`${answer} es una respuesta incorrecta; La respuesta correcta era ${correctAnswer}.`);
      console.log(`¡Intentémoslo de nuevo, ${userName} !`);
      // eslint-disable-next-line no-continue
      continue;
    }

    if (answer === correctAnswer) {
      console.log('¡Correcto!');

      correctAnswers += 1;
    } else {
      console.log(`${answer} es una respuesta incorrecta; La respuesta correcta era ${correctAnswer}.`);
      console.log(`¡Intentémoslo de nuevo, ${userName} !`);
    }
  }

  console.log(`¡Felicidades, ${userName}!`);
};

export default startEvenGames;
