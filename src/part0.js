console.log('connected');
// Basic Types
var isAuthed = false;
var firstName = 'aaron';
var coolness = 99.9;
var list = [0.3, 4.5, 6, 8];
var cat1 = ['Toki', 99];
var dog = [
    'Blue',
    false,
    ['Walks', 'Eating'],
];
var Pet;
(function (Pet) {
    Pet[Pet["Cat"] = 0] = "Cat";
    Pet[Pet["Dog"] = 1] = "Dog";
    Pet[Pet["Mouse"] = 2] = "Mouse";
})(Pet || (Pet = {}));
var pet = Pet.Cat;
var nacho; /* use let if we do not know the value yet:Nacho is undefined*/
nacho = 'cheese';
nacho = null;
nacho = 'beans';
nacho = undefined;
document.getElementById('msg').textContent = "My pet " + Pet[pet] + " is named " + cat1[0] + " and scores " + cat1[1] + " on the coolness scale";
//Typescript Functions
var sayHello = function (word) {
    console.log("Hello " + word);
};
// Function with default value
var sayGoodNight = function (word) {
    if (word === void 0) { word = 'Moon'; }
    console.log("Good Night " + word);
};
sayHello('Daisy');
sayGoodNight();
sayGoodNight('Fire Place');
console.log('David Bowie Says:');
