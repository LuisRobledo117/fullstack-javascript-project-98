import {
  correctAttempts, getAnswer, getRandonNumero, getPrime, incorrectMessage,

} from '../index.js';

const startGamePrime = () => {
  console.log('Responde "yes" si el número dado es primo. De lo contrario, responde "no".');

  correctAttempts(() => {
    const numRandom = Math.abs(getRandonNumero());
    console.log(`Pregunta: ${numRandom}`);
    const answer = getAnswer().toLowerCase();

    const correctAnswer = getPrime(numRandom) ? 'yes' : 'no';

    if (answer !== 'yes' && answer !== 'no') {
      incorrectMessage(answer, correctAnswer);
      return false;
    }

    if (answer === correctAnswer) {
      return true;
    }
    incorrectMessage(answer, correctAnswer);
    return false;
  });
};
export default startGamePrime;
