import Person from './person';

// extendendo da interface Person
interface User extends Person {
  nickname?: string;
  email: string;
  password: string;
}

export default User;