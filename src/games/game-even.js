import {
  getAnswer, getRandonNumero, correctAttempts, incorrectMessage,
} from '../index.js';

const startEvenGames = () => {
  console.log('Responde "yes" si el número es par, de lo contrario responde "no".');

  correctAttempts(() => {
    const numRand = getRandonNumero();
    console.log(`Pregunta: ${numRand}`);
    const yourAnswer = getAnswer().toLowerCase();

    const correctAnswer = numRand % 2 === 0 ? 'yes' : 'no';

    if (yourAnswer !== 'yes' && correctAnswer !== 'no') {
      incorrectMessage(yourAnswer, correctAnswer);
      return false;
    }

    if (yourAnswer === correctAnswer) {
      return true;
    }
    incorrectMessage(yourAnswer, correctAnswer);
    return false;
  });
};

export default startEvenGames;
