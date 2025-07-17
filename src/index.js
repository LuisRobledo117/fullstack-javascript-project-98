/* eslint-disable prefer-const */
import readlineSync from 'readline-sync';
import askName from './games/cli.js';

const userName = askName();
const getOperation = () => {
  const operation = ['+', '-', '*'];
  const indice = Math.floor(Math.random() * operation.length);
  return operation[indice];
};

const getAnswer = () => {
  const answer = readlineSync.question('Tu respuesta: ');
  return answer;
};

const incorrectMessage = (answer, correctAnswer) => {
  console.log(`${answer} es una respuesta incorrecta; La respuesta correcta era ${correctAnswer}.`);
  console.log(`¡Intentémoslo de nuevo, ${userName} !`);
};

const getRandonNumero = () => {
  const numRandom = Math.floor(Math.random() * 100) + 1;
  return numRandom;
};

const correctAttempts = (callback) => {
  let attempts = 0;

  while (attempts < 3) {
    const attempt = callback();

    if (attempt === true) {
      console.log('¡Correcto!');
      attempts += 1;
    }
  }
  console.log(`¡Felicidades, ${userName}!`);
};

export {
  getRandonNumero, getAnswer, incorrectMessage, correctAttempts,
};
export default getOperation;
