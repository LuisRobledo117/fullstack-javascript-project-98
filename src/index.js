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
  console.log(`'${answer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.
    ¡Intentémoslo de nuevo, ${userName}!
    `);
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
    } else {
      return;
    }
  }
  console.log(`¡Felicidades, ${userName}!`);
};

const getProgression = () => {
  let numProgression = [];
  const intervalNum = Math.floor(Math.random() * 10) + 1;
  let num = Math.floor(Math.random() * 100) + 1;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 10; i++) {
    numProgression.push(num);
    num += intervalNum;
  }
  return numProgression;
};

const getPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  const numLimite = Math.sqrt(num);
  for (let i = 3; i <= numLimite; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

export {
  getRandonNumero, getAnswer, incorrectMessage, correctAttempts, getProgression, getPrime,
};
export default getOperation;
