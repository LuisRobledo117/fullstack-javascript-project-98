import getOperation, {
  getAnswer, getRandonNumero, correctAttempts, incorrectMessage,
} from '../index.js';

const startGamesCal = () => {
  correctAttempts(() => {
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
      return true;
    }
    incorrectMessage(answer, result);
    return false;
  });
};

export default startGamesCal;
