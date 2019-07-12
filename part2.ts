// the Question Mark checks for optional params
const rebelRebel = (gender?: string): string => {
  if (gender) {
    gender = gender.toLowerCase();
  }
  if ((gender && gender == 'boy') || (gender && gender == 'girl'))
    return 'Not a rebel!';

  return 'Rebel Rebel!';
};

console.log(rebelRebel('BOY'));
console.log(rebelRebel());
