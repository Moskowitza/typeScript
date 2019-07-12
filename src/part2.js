// the Question Mark checks for optional params
var rebelRebel = function (gender) {
    if (gender) {
        gender = gender.toLowerCase();
    }
    if ((gender && gender == 'boy') || (gender && gender == 'girl'))
        return 'Not a rebel!';
    return 'Rebel Rebel!';
};
console.log(rebelRebel('BOY'));
console.log(rebelRebel());
