//  type allias
type User1 = {
  name: string;
  age: number;
};
const user1: User1 = {
  name: "Persian",
  age: 100,
};

// interface

interface User2 {
  name: string;
  age: number;
}
const user2: User2 = {
  name: "Persian",
  age: 100,
};

//  type script er sate interface er kiso partokkon ase,
// type allias amra saile premitive type er kettro use korte parbe,
// example

type rollNumber = number;

// jeheto premitive type ta object type er hoi, ti interface er maddome premitive type define korte parba na.
// that means amra bojlam, sokol premitive er kettre amra type allias use korbo and object er kettre amra saile type allias or inter face user korte parbo,

// amra dekbo type allias jodi use kori, type allias er moaddome amra kono akta property extends korte sai, intersection use korte pari,

type UserWithRole1 = User1 & {
  role: string;
};

const user3: UserWithRole1 = {
  name: "Persian",
  age: 100,
  role: "Student",
};

// amra interface er maddome o extends korte pari,

interface UserWithRole2 extends User2 {
  role: string;
}

const user4: UserWithRole2 = {
  name: "Persian",
  age: 100,
  role: "Student",
};

// in array
// js --> object, array -> object,  function -> object,

type Roll = number[];
const rollNumber1 = [1, 2, 3, 4];

interface Roll2 {
  [index: number]: number;
}
const rollNumber2 = [1, 2, 3, 4];

// function er kettra o type allias or interface use kora jai, because function is also an object for js,
type Add1 = (num1: number, num2: number) => number;
const add1: Add1 = (num1, num2) => num1 + num2;

interface Add2 {
  (num1: number, num2: number): number;
}
const add2: Add2 = (num1, num2) => num1 + num2;

// recommandation,
// in array use type allias and function er ketreo jodi type allias use koro,
// object er ketre type ailes or interface bebohar korte paro,
// se ketre different way te extends korete hobe,
