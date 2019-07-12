console.log('connected');
// Basic Types
const firstName: string = 'aaron';
const isAuthed: boolean = false;
const coolness: number = 99.9;
const list: number[] = [0.3, 4.5, 6, 8];

const cat1: [string, number] = ['Toki', 99];

enum Pet {
  Cat,
  Dog,
  Mouse,
}
const pet: Pet = Pet.Cat;
document.getElementById('msg').textContent = `my ${Pet[pet]} is ${
  cat1[0]
} and scores ${cat1[1]} on the coolness scale`;
