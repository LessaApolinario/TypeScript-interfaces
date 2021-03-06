import User from './user';

// Criando um objeto do tipo User
// Notar que nickname é opcional
const myUser: User = {
  name: 'Joe James',
  age: 26,
  email: 'Joe@example.com',
  password: 'asdhjaksd'
};

// Imprimindo no console as informações do novo usuário
console.log(`
  ${myUser.name} com id ${myUser.age}, tem email ${myUser.email} e senha ${myUser.password}
`);

// Criando um array de users
let users: User[] = []

const mySecondUser: User = {
  name: 'João dos Santos',
  age: 16,
  email: 'joao15@example.com',
  password: '79485843'
};

const myThirdUser: User = {
  name: 'Gabriela da Silva',
  age: 18,
  email: 'gabrieladasilva@example.com',
  password: 'asdfddhld'
};

users.push(myUser);
users.push(mySecondUser);
users.push(myThirdUser);

let adults: User[] = users.filter((user) => user.age >= 18);

adults.map((user) =>
  console.log(`O usuário ${user.name} é adulto e tem ${user.age} anos`)
);

// Podemos ainda definir que um tipo recebe a intersecção de duas interfaces
interface Colorful {
  color: string;
}

// Podemos usar o | para dizer que uma variável recebe outros tipos
interface Car {
  speed: number | string;
}

type ColorfulCar = Colorful & Car;

let myCar: ColorfulCar = {
  color: 'Red',
  speed: 120
}

console.log(`My ${myCar.color} car is at ${myCar.speed} kilometers an hour!`);