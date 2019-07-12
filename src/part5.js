let __extends =
  (this && this.__extends) ||
  (function() {
    var extendStatics = function(d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(d, b) {
            d.__proto__ = b;
          }) ||
        function(d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
    };
  })();
// Classes
let SuperGroup = /** @class */ (function() {
  function SuperGroup(groupName, altName, secret) {
    this.groupName = groupName;
    this.altName = altName;
    this.secret = secret;
  }
  SuperGroup.prototype.rockout = function() {
    return `Hello Detroit, we're ${  this.groupName}`;
  };
  SuperGroup.prototype.sayAltName = function() {
    return `Hello Seattle, we're ${  this.altName}`;
  };
  SuperGroup.prototype.saySecret = function() {
    return `Hello Stonehenge, we're ${  this.secret}`;
  };
  return SuperGroup;
})();
let CSNY = new SuperGroup('CSNY', 'Crosby, Stills, Nash and Young', 'MegaDeath');
// console.log(CSNY.groupName); /*error on Private */
console.log(CSNY.altName); /* alt Name is public, so no error */
console.log(CSNY.rockout());
console.log(CSNY.sayAltName());
CSNY.altName = 'Just Crosby, Stills, Nash. Screw Neil!';
console.log(CSNY.sayAltName());
// CSNY.secret = 'Deathly Cow Hearders'; /* ERROR , secret is read only */
console.log(CSNY.saySecret());
/* PROTECTED vs PRIVATE
 Private properties cannot be extended upon. ERROR ON LINE 61
*/
let BandMember = /** @class */ (function() {
  function BandMember(name, bandName) {
    this.name = name;
    this.bandName = bandName;
  }
  return BandMember;
})();
let Singer = /** @class */ (function(_super) {
  __extends(Singer, _super);
  function Singer(name, bandName, position) {
    let _this = _super.call(this, name, bandName) || this;
    /* We must call super on inherited properties This is an important rule that TypeScript will enforce. */
    _this.position = position;
    return _this;
  }
  Singer.prototype.welcome = function() {
    return (
      "Hello Cleveland! It's me, " + this.name.toUpperCase() + '! The ' + this.position + ' for ' + this.bandName + '.'
    ); // Private!
  };
  return Singer;
})(BandMember);
let davidLeeRoth = new Singer('David Lee Roth', 'Van Halen', 'FrontMan');
console.log(davidLeeRoth.welcome());
// console.log(davidLeeRoth.name); // error
// console.log(davidLeeRoth.bandName); // error
