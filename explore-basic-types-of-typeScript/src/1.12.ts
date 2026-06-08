// nullable types
// kono variable type jodi null hoi

const searchName = (value: string | null) => {
  if (value) {
    console.log("searching");
  } else {
    console.log("There is nothing to search");
  }
};
searchName("Persian");

// unknown types
const getSpeedInMeeterPerSecond = (value: unknown) => {
  if (typeof value === "number") {
    const convertedSpeed = (value * 1000) / 3600;
    console.log(`The speed is${convertedSpeed} ms-1`);
  }
  if (typeof value === "string") {
    const [result, unit] = value.split(" ");
    const convertedSpeed = (parseFloat(result) * 3600) / 3600;
    console.log(`The speed is ${convertedSpeed} ms-1`);
  } else {
    console.log("Wrong input");
  }
};
getSpeedInMeeterPerSecond(null);

// never

const throwError = (msg: string): never => {
  throw new Error(msg);
};

throwError("This is error");
