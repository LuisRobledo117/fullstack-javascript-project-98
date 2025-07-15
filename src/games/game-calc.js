import askName from './cli.js';
import getOperation, { getAnswer, getRandonNumero } from '../index.js';

const startGamesCal = () => {
  const userName = askName();

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    console.log('¿Cuál es el resultado de la expresión?');
    const operador = getOperation();
    const num1 = getRandonNumero();
    const num2 = getRandonNumero();

    console.log(`Pregunta: ${num1} ${operador} ${num2}`);
    const answerString = getAnswer();
    const answer = parseInt(answerString, 10);

    let result;

    switch (operador) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      default:
        break;
    }

    if (answer === result) {
      console.log('¡Correcto!');
      correctAnswers += 1;
    } else {
      console.log(`${answer} es una respuesta incorrecta; La respuesta correcta era ${result}.`);
      console.log(`¡Intentémoslo de nuevo, ${userName} !`);
    }
  }

  console.log(`¡Felicidades, ${userName}!`);
};

export default startGamesCal;
