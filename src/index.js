import readlineSync from 'readline-sync';

const getOperation = () => {
  const operation = ['+', '-', '*'];
  const indice = Math.floor(Math.random() * operation.length);
  return operation[indice];
};

const getAnswer = () => {
  const answer = readlineSync.question('Tu respuesta: ');
  return answer;
};

const getRandonNumero = () => {
  const numRandom = Math.floor(Math.random() * 100) + 1;
  return numRandom;
};

export { getRandonNumero, getAnswer };
export default getOperation;
