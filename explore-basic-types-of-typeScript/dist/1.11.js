"use strict";
// ternary operator
// optional chanining
// nullish coaleascing operator
Object.defineProperty(exports, "__esModule", { value: true });
const age = 15;
if (age >= 18) {
    //   console.log("adult");
}
else {
    //   console.log("Not Adult");
}
const isAdult = age >= 18 ? "Adult" : "Not Adult";
// console.log(isAdult);
// nullish coalescing operator
// jodi tomar kono descission make korte hoi, null or undefined er opor vitti kore tokon nullish coaleascing use korte parbe,
const isAuthenticated = null;
const result1 = isAuthenticated ?? "Guest";
console.log({ result1 });
// nullish coalescing operator and ternary operator amader kase onek ta same mone hocce,asole eta same na,
const result2 = isAuthenticated ? isAuthenticated : null;
const user = {
    firstName: "Persian",
    address: {
        city: "ctg",
        road: "12",
        presentAddress: "Chawkbazar",
    },
};
// const permanentAddress = user?.address?.permanentAddress;
const permanentAddress = user?.address?.permanentAddress ?? "No Permanent Address";
console.log(permanentAddress);
// here we got undefiend, tai amra nullish qualeascing operator user korte pari,
