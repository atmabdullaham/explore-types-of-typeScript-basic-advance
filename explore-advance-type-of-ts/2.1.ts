// type assertion,
// ami developer hisab a ts er saite besi type bojele seta holo type assertion,

let anything: any;
anything = "Next level Web development";
anything = 222;
anything as number; // amara kinot typescript k bole dissi j akane sure number ase, ai j sure howar bepar ta aita holo type assertion,

const kgToGm = (value: string | number): string | number | undefined => {
  if (typeof value === "string") {
    const convertedValue = parseFloat(value) * 1000;
    return `The converted valu is ${convertedValue}`;
  }
  if (typeof value === "number") {
    return value * 1000;
  }
};

const result1 = kgToGm(1000) as number;
const result2 = kgToGm("1000") as string;

// type script er kettre amader obossoy sotorkiota obolombon kora proyojon,
type CustomError = {
  message: string;
};

try {
} catch (error) {
  console.log((error as CustomError).message);
}
