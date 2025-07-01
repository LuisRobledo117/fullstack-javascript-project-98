import readlineSync from 'readline-sync';

const askName = () => {
  console.log('Bienvenido a Brain Games');
  const userName = readlineSync.question('¿Cuál es tu nombre?');
  console.log(`¡Hi, ${userName}!`);
};

export default askName;
