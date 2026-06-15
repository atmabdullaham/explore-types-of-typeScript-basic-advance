// generic type
// to be generalize, amra dynamic vabe jekono somoy type toiri korte pari and use korte pari setai holo generic type,

// const rollNumber: number[] = [1, 2, 3, 5];
const rollNumber: Array<number> = [1, 3, 5, 6];

// const mentors: string[] = ["Mr.X", "Y", "Z"];
const mentors: Array<string> = ["Mr.X", "Y", "Z"];

// const bollArray: boolean[] = [true, false];
const bollArray: Array<boolean> = [true, false];

// amra akon dynamic and reuseable korte sai,
// type GenericArrray = Array<boolean>;

const add = (x: number, y: number) => x + y;
add(30, 20);

// same concept
type GenericArrray<T> = Array<T>;
const rollNumber10: GenericArrray<number> = [1, 3, 5, 6];
const mentors10: GenericArrray<string> = ["Mr.X", "Y", "Z"];
const bollArray10: GenericArrray<boolean> = [true, false];

// object type o likte pari
const user: GenericArrray<{ name: string; age: number }> = [
  {
    name: "Mezba",
    age: 100,
  },
  {
    name: "Mahbub",
    age: 110,
  },
];

// generic tuple
type GenericTuple<X, Y> = [X, Y];
const manush: GenericTuple<string, string> = ["X", "Y"];

const userWitId: GenericTuple<number, { name: string; email: string }> = [
  1,
  { name: "parsian", email: "per@gmail.com" },
];
