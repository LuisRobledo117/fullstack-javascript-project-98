import askName from './cli.js';
import { getAnwer, getRandonNumero } from '../index.js';

const startEvenGames = () => {
  const userName = askName();
  console.log('Responde "yes" si el número es par, de lo contrario responde "no".');

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const numRand = getRandonNumero();
    console.log(`Pregunta: ${numRand}`);
    const yourAnswer = getAnwer().toLowerCase();

    const correctAnswer = numRand % 2 === 0 ? 'yes' : 'no';

    if (correctAnswer !== 'yes' && correctAnswer !== 'no') {
      console.log(`${yourAnswer} es una respuesta incorrecta; La respuesta correcta era ${correctAnswer}.`);
      console.log(`¡Intentémoslo de nuevo, ${userName} !`);
      // eslint-disable-next-line no-continue
      continue;
    }

    if (yourAnswer === correctAnswer) {
      console.log('¡Correcto!');

      correctAnswers += 1;
    } else {
      console.log(`${yourAnswer} es una respuesta incorrecta; La respuesta correcta era ${correctAnswer}.`);
      console.log(`¡Intentémoslo de nuevo, ${userName} !`);
    }
  }

  console.log(`¡Felicidades, ${userName}!`);
};

export default startEvenGames;
