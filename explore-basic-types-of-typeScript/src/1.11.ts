// ternary operator
// optional chanining
// nullish coaleascing operator

const age: number = 15;
if (age >= 18) {
  //   console.log("adult");
} else {
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

// nullish coaleascing operator kaj kore only null or undefined hole,
// ternary operator always falsy value er opor kaj kore,
// jodi amar null/undefine er opr vitti kore kono default value set korte hoi, tahole amara nallish coaleascing operator set korte pari,

//  optional chainning,
type User = {
  firstName: string;
  address: {
    city: string;
    road: string;
    presentAddress: string;
    permanentAddress?: string;
  };
};

const user: User = {
  firstName: "Persian",
  address: {
    city: "ctg",
    road: "12",
    presentAddress: "Chawkbazar",
  },
};

// const permanentAddress = user?.address?.permanentAddress;
const permanentAddress =
  user?.address?.permanentAddress ?? "No Permanent Address";
console.log(permanentAddress);

// here we got undefiend, tai amra nullish qualeascing operator user korte pari,
