// Implicit Types. rockstar is implied to be a string
let rockstar: string = 'David Bowie';
rockstar = 55; /*We have an error, but 55 appears on the page */
document.getElementById('rockstar').textContent = rockstar;
let musician = rockstar;
musician = 99; /*We have an error, but this passes and will print to screen */
musician = 'Freddy Mercury'; /*And this passes */
document.getElementById('musician').textContent = musician;

// The Union Operaallows more than one type to be assigned
let queen: boolean | number = true;
queen = false;
queen = 1000;
let brianMay = queen;
brianMay = true; /*WAT! Queen is now a number and no long available as boolean type*/
brianMay = 55;

// Unions can be useful in functions. Useful for number or string types
const glamour = (x: string | number) => {
  return `A jumpsuit covered in ${x} rhinestones`;
};
console.log(glamour(1000));
console.log(glamour('10000'));
console.log(glamour('one billion'));
