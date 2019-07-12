import { Band } from './utils/interfaces';

const theRollingStones = {
  size: 4,
  members: ['Mick Jagger', 'Keit Richards', 'Charlie Watts', 'Ronnie Wood'],
  name: 'The Rolling Stones',
};
const Seal = {
  name: 'Seal',
};

const bandStatsInterface = (bandObj: Band) => {
  const { name, size, members } = bandObj; /* Destructure our vals*/
  return `${name} ${size ? 'have ' + size : 'has no'} members${
    members ? ': ' + members.join(', ') : ", it's just " + name
  }`;
};

console.log(bandStatsInterface(theRollingStones));
console.log(bandStatsInterface(Seal));
