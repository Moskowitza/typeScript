// Implicit Types. rockstar is implied to be a string
let rockstar: string = 'David Bowie';
rockstar = 55; /*We have an error, but 55 appears on the page */
document.getElementById('rockstar').textContent = rockstar;
let musician = rockstar;
musician = 99; /*We have an error, but this passes and will print to screen */
musician = 'Freddy Mercury'; /*And this passes */
document.getElementById('musician').textContent = musician;
