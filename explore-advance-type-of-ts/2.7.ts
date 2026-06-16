// generic constraint with keyof operator

type Vehicle = {
  bike: string;
  car: string;
  ship: string;
};

type Owner = "bike" | "car" | "ship"; // manually

// same jinista jodi amara operator dia korte sai amra keyof use korbo,

type Owner2 = keyof Vehicle;

const person1: Owner2 = "bike";

const user = {
  name: "Mr. Persian",
  age: 26,
  address: "ctg",
};

user["name"];
user.name;

//
