import { Band } from './utils/interfaces';
class jazzBand implements Band {
  name: string;
  size?: number;
  members?: string[];
}
let OscarPetersonTrio = new jazzBand();

const obj = {
  name: 'OscarPetersonTrio',
  size: 3,
  members: ['Oscar Peterson', 'Louis Armstrong', 'Duke Ellington'],
};
OscarPetersonTrio = obj;

console.log(OscarPetersonTrio);
