// Interfaces & destructruing
var thePixies = {
    size: 4,
    members: ['Frank Black', 'Kim Deal', 'Joey Santiago', 'David Lovering'],
    name: 'The Pixies'
};
var Madonna = {
    name: 'Madonna'
};
var bandStats = function (bandObj) {
    return "Simply, " + bandObj.name + " have " + bandObj.size + " members: " + bandObj.members.join(', ');
};
var bandStatsInterface = function (bandObj) {
    var name = bandObj.name, size = bandObj.size, members = bandObj.members; /* Destructure our vals*/
    return name + " " + (size ? 'have ' + size : 'has no') + " members" + (members ? ': ' + members.join(', ') : ", it's just " + name);
};
console.log(bandStats(thePixies));
console.log(bandStatsInterface(thePixies));
console.log(bandStatsInterface(Madonna));
