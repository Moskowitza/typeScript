# TypeScript reference 📕

Uncomment the scripts in index.html as you follow along.

## Set up a project with Parcel 📦📦📦

1 install parcel `npm install -g parcel-bundler`
2 create a project (either on github and clone it or `mkdir`)
3 in the command line: `npm init`
4 create a starting script in your package.json folder `"start": "parcel index.html",`
5 in the command line: `npm start` parcel watches for changes 🤓
6 (optional) if you want to see errors in the terminal install 2 more packages `npm install --save-dev parcel-plugin-typescript parcel-bundler` plugins usually rely on parcel-bundler, so regular parcel may not work. 🐛BUG🐛 _Unexpected token_ 🐜 in your 🐜first🐜 line of ts 😦

## Index.ts

Simple explanations of how to declare basic types. We write the name of the variable, a colon, and then the type like so: `const foo:string="bar"`

Basic types are:

- number
- boolean
- string
- special cases
  - any
  - union `|`
- Null & Undefined
  - Null types are added by default with 'let' declarations.
  - Undefined can be added with union (when running `strict configuration`)

* Arrays are trickier. if every type in an array is the same we can use this `number[]` kind of structure. Otherwise we must define each type in the array `const info: [string,boolean,string]=['Aaron',true,'admin']` Yes, you can nest arrays in there too.
* Functions have some options, the simplest way to work with them is to just define the params.

## Part One: on to functions

Functions can have there params typed and their returned value typed. You will need to return a value if you're defining the return type.
`const fly=():string=>{return 'flying around the world'};`

## Part Two: Optional Params

Optional params can be marked with a, ❓, question mark.
`const fly=(string?):string=>{return string? string: 'flying around the world'};`

## Part Three: Implicit Types & Union Types

Typescript can infer the type and vscode will complain when you do a reassignment. The type will follow the variable when assigning a new variable. 🐉 be careful.

A Union type, represented with `|` ,pipe, gives back the _flexibility_ 🧘‍. There are still hidden complications, new variables assignments will expect the last casting of the original variable.
🐉 be careful.

## Part Four: Interfaces

Interfaces are useful when passing objects into functions. We define the shape of the interface with the `interface` keyword and define our function parameters to be typed to the interface. This will allow destructring of the properties in our function. There is a great deal more on interfaces when working with Classes. [Docs](https://www.typescriptlang.org/docs/handbook/interfaces.html) I'll explore that more later.

## Part Five: Classes

A key part of TS and classes is declaring the properties above your constructor. Other TS rules apply, such in the classes internal methods. Interestingly, we can acces the keyword 'name' within our classes. I assume our scope has changed off the window and we can now use 'name'

#### Modifiers (stand alone file for static modifiers)

We can declare `private` & `public` & `readonly` & `protected` class properties with TS. I have created an error by making a 'private' property in a class that is extended. Play with the modifiers to see how they work.

[Docs](https://www.typescriptlang.org/docs/handbook/classes.html)

## Part Six: Modules

Modules work just like you'd expect as in ECMAscript 2015. no surprises here. I have created a utils folder and moved our Band Interface over. [docs](https://www.typescriptlang.org/docs/handbook/modules.html)

## TypeScript Compiler
