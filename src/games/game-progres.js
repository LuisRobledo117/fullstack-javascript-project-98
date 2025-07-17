import {
  getProgression, incorrectMessage, getAnswer, correctAttempts,
} from '../index.js';

const startGameProgression = () => {
  console.log('¿Qué número falta en la progresión?');
  correctAttempts(() => {
    const progression = getProgression();
    const indice = Math.floor(Math.random() * progression.length);
    const newProgression = [...progression];
    newProgression[indice] = '..';

    console.log(`Pregunta: ${newProgression.join(' ')}`);
    const answerString = getAnswer();
    const answer = parseInt(answerString, 10);

    const correctAnswer = progression[indice];

    if (answer === correctAnswer) {
      return true;
    }
    incorrectMessage(answer, correctAnswer);
    return false;
  });
};

export default startGameProgression;
