// Implicit Types. rockstar is implied to be a string
var rockstar = 'David Bowie';
// rockstar = 55; /*We have an error, but 55 appears on the page */
document.getElementById('rockstar').textContent = rockstar;
var musician = rockstar;
// musician = 99; /*We have an error, but this passes and will print to screen */
musician = 'Freddy Mercury'; /*And this passes */
document.getElementById('musician').textContent = musician;
// The Union Operaallows more than one type to be assigned
var queen = true;
queen = false;
queen = 1000;
var brianMay = queen;
// brianMay = true; /*WAT! Queen is now a number and no long available as boolean type*/
brianMay = 55;
// Unions can be useful in functions. Useful for number or string types
var glamour = function (x) {
    return "A jumpsuit covered in " + x + " rhinestones";
};
console.log(glamour(1000));
console.log(glamour('10000'));
console.log(glamour('one billion'));
