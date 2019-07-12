"use strict";
exports.__esModule = true;
var theRollingStones = {
    size: 4,
    members: ['Mick Jagger', 'Keit Richards', 'Charlie Watts', 'Ronnie Wood'],
    name: 'The Rolling Stones'
};
var Seal = {
    name: 'Seal'
};
var bandStatsInterface = function (bandObj) {
    var name = bandObj.name, size = bandObj.size, members = bandObj.members; /* Destructure our vals*/
    return name + " " + (size ? 'have ' + size : 'has no') + " members" + (members ? ': ' + members.join(', ') : ", it's just " + name);
};
console.log(bandStatsInterface(theRollingStones));
console.log(bandStatsInterface(Seal));
