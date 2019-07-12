const diamondDogs = (word: string = "rock'n'roll"): string => {
  word = word.toLocaleLowerCase();
  if (word == 'genocide') {
    return `As they pulled you out of the oxygen tent
      You asked for the latest party
      With your silicone hump and your ten inch stump
      Dressed like a priest you was
      Tod Browning's Freak you was
      Crawling down the alley on your hands and knee
      I'm sure you're not protected, for it's plain to see
      The Diamond Dogs are poachers and they hide behind trees
      Hunt you to the ground they will, mannequins with kill appeal`;
  }
  return `This ain't ${word}`;
};
console.log(diamondDogs());
console.log(diamondDogs('pizza'));
console.log(diamondDogs('Genocide'));

// we can define params AND output BUT you must return a value
//rest parameters
const artist = (bowie?, ...everoneElse: string[]): string => {
  if (!bowie) return `No Bowie`;
  return `${bowie} and ${everoneElse.join(', ')}`;
};
console.log(artist());
console.log(artist('David Bowie'));
console.log(artist('', 'Elton John', 'Lou Reed'));
console.log(artist('Ziggy Stardust', 'Elvis Costello', 'Iggy Pop'));
