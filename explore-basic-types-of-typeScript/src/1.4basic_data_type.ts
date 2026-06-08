// Basic data type

// string,
let firstName: string = "mezba"; // explicit data type liklam, ts jodi nije theke infer kore type sinte pare tahole take amra bolbo implicit data type,
// number
let roll: number = 133;

//  bollean
let isAdmin: boolean = true;

// undefined
let x: undefined = undefined;

// null
let y: null = null;

let d: number;

d = 12;

// Array

let friends: string[] = ["rachel", "monica"];
let eligibleRollList: number[] = [13, 34];

// tuple --> array --> order --> type of values

let coordinates: [number, number] = [1, 5];

let ageName: [number, string, number] = [50, "Sakib", 50];
ageName.push("sakib");
console.log(ageName);
