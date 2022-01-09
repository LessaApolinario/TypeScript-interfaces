interface User {
  name: string;
  id: number;
  nickname?: string;
  email: string;
  password: string;
}

const user: User = {
  name: 'Lessa Apolinario',
  id: 225,
  nickname: 'Neto',
  email: 'email@example.com',
  password: '123ew4'
}

export default user;