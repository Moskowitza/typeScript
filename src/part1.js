var diamondDogs = function (word) {
    if (word === void 0) { word = "rock'n'roll"; }
    word = word.toLocaleLowerCase();
    if (word == 'genocide') {
        return "As they pulled you out of the oxygen tent\n      You asked for the latest party\n      With your silicone hump and your ten inch stump\n      Dressed like a priest you was\n      Tod Browning's Freak you was\n      Crawling down the alley on your hands and knee\n      I'm sure you're not protected, for it's plain to see\n      The Diamond Dogs are poachers and they hide behind trees\n      Hunt you to the ground they will, mannequins with kill appeal";
    }
    return "This ain't " + word;
};
console.log(diamondDogs());
console.log(diamondDogs('pizza'));
console.log(diamondDogs('Genocide'));
// we can define params AND output BUT you must return a value
//rest parameters
var artist = function (bowie) {
    var everoneElse = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        everoneElse[_i - 1] = arguments[_i];
    }
    if (!bowie)
        return "No Bowie";
    return bowie + " and " + everoneElse.join(', ');
};
console.log(artist());
console.log(artist('David Bowie'));
console.log(artist('', 'Elton John', 'Lou Reed'));
console.log(artist('Ziggy Stardust', 'Elvis Costello', 'Iggy Pop'));
