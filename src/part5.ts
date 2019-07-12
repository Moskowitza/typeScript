// Classes
class SuperGroup {
  private groupName: string;
  public altName: string;
  readonly secret: string;

  constructor(groupName, altName, secret?) {
    this.groupName = groupName;
    this.altName = altName;
    this.secret = secret;
  }
  rockout(): string {
    return `Hello Detroit, we're ${this.groupName}`;
  }
  sayAltName(): string {
    return `Hello Seattle, we're ${this.altName}`;
  }
  saySecret(): string {
    return `Hello Stonehenge, we're ${this.secret}`;
  }
}

const CSNY = new SuperGroup(
  'CSNY',
  'Crosby, Stills, Nash and Young',
  'MegaDeath'
);
// console.log(CSNY.groupName); /*error on Private */
console.log(CSNY.altName); /*alt Name is public, so no error */
console.log(CSNY.rockout());
console.log(CSNY.sayAltName());
CSNY.altName = 'Just Crosby, Stills, Nash. Screw Neil!';
console.log(CSNY.sayAltName());
// CSNY.secret = 'Deathly Cow Hearders'; /* ERROR , secret is read only */
console.log(CSNY.saySecret());

/* PROTECTED vs PRIVATE
 Private properties cannot be extended upon. ERROR ON LINE 61
*/
class BandMember {
  protected name: string;
  // private bandName: string; // This private property will cause an error
  protected bandName: string; // This private property will cause an error

  constructor(name: string, bandName: string) {
    this.name = name;
    this.bandName = bandName;
  }
}

class Singer extends BandMember {
  private position: string;

  constructor(name: string, bandName: string, position: string) {
    super(name, bandName);
    /*We must call super on inherited properties This is an important rule that TypeScript will enforce. */
    this.position = position;
  }

  public welcome() {
    return `Hello Cleveland! It's me, ${this.name.toUpperCase()}! The ${
      this.position
    } for ${this.bandName}.`; // Private!
  }
}

let davidLeeRoth = new Singer('David Lee Roth', 'Van Halen', 'FrontMan');
console.log(davidLeeRoth.welcome());
// console.log(davidLeeRoth.name); // error
// console.log(davidLeeRoth.bandName); // error
