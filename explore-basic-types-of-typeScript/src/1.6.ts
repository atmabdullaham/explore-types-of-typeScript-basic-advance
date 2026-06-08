// learning function

// there are two types of function,
// normal function
// arrow function

function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(2, 2);

const add1 = (num1: number, num2: number = 10) => num1 + num2;

// Object er modde jodi kono akta function thake tahole setake amra boli method,
// object --> function --> method

const poorUser = {
  nickName: "Mezbah",
  balance: 0,
  // amra akane kono doron er arrow function use korteci na, amara jani boject er modde kono akta property access korte hole amader k this use kortec hoi,amra sobai jani normal function er modde this kaj kore arrow function er modde this kaj kore na,ai jonno amara anonymous normal function use korteci,
  addBalance(balance: number): string {
    return `My balance is ${this.balance + balance}`;
  },
};

// amra jokon kono array er opor map kori sekane o amra akta callback function liki,

const arr: number[] = [1, 2];
const newArray: number[] = arr.map((ele: number): number => ele * ele);
