// Interfaces & destructruing
const thePixies = {
  size: 4,
  members: ['Frank Black', 'Kim Deal', 'Joey Santiago', 'David Lovering'],
  name: 'The Pixies',
};
const Madonna = {
  name: 'Madonna',
};

const bandStats = (bandObj: {
  name: string;
  size: number;
  members: string[];
}) => {
  return `Simply, ${bandObj.name} have ${
    bandObj.size
  } members: ${bandObj.members.join(', ')}`;
};
// Here we can create an interface to deal with missing properies
interface Band {
  name: string;
  size?: number;
  members?: string[];
}

const bandStatsInterface = (bandObj: Band) => {
  const { name, size, members } = bandObj; /* Destructure our vals*/
  return `${name} ${size ? 'have ' + size : 'has no'} members${
    members ? ': ' + members.join(', ') : ", it's just " + name
  }`;
};

console.log(bandStats(thePixies));
console.log(bandStatsInterface(thePixies));
console.log(bandStatsInterface(Madonna));
