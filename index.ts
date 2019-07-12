console.log('connected');
// Basic Types

const isAuthed: boolean = false;
const firstName: string = 'aaron';
const coolness: number = 99.9;
const list: number[] = [0.3, 4.5, 6, 8];
const cat1: [string, number] = ['Toki', 99];
const dog: [string, boolean, [string, string]] = [
  'Blue',
  false,
  ['Walks', 'Eating'],
];
enum Pet {
  Cat,
  Dog,
  Mouse,
}
const pet: Pet = Pet.Cat;

let nacho: string; /* use let if we do not know the value yet:Nacho is undefined*/
nacho = 'cheese';
nacho = null;
nacho = 'beans';
nacho = undefined;

document.getElementById('msg').textContent = `My pet ${Pet[pet]} is named ${
  cat1[0]
} and scores ${cat1[1]} on the coolness scale`;
//Typescript Functions
const sayHello = (word: string) => {
  console.log(`Hello ${word}`);
};
// Function with default value
const sayGoodNight = (word: string = 'Moon') => {
  console.log(`Good Night ${word}`);
};

sayHello('Daisy');
sayGoodNight();
sayGoodNight('Fire Place');
console.log('David Bowie Says:');
