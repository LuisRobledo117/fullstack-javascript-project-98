import {
  getAnswer, getRandonNumero, incorrectMessage, correctAttempts,

} from '../index.js';

const startGameGcd = () => {
  console.log('Encuentra el máximo común divisor de los números dados.');

  correctAttempts(() => {
    let num1 = Math.abs(getRandonNumero());
    let num2 = Math.abs(getRandonNumero());
    console.log(`Pregunta: ${num1} ${num2}`);
    const answerString = getAnswer();
    const answer = parseInt(answerString, 10);

    if (num1 >= num2) {
      while (num2 !== 0) {
        const residuo = num2;
        num2 = num1 % num2;
        num1 = residuo;
      }
      const correctAnswer = num1;
      if (answer === num1) {
        return true;
      }
      incorrectMessage(answer, correctAnswer);
      return false;
    }
    while (num1 !== 0) {
      const residuo = num1;
      num1 = num2 % num1;
      num2 = residuo;
    }
    const correctAnswer = num2;
    if (answer === num2) {
      return true;
    }
    incorrectMessage(answer, correctAnswer);
    // eslint-disable-next-line no-continue
    return false;
  });
};

export default startGameGcd;
