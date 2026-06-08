// Reference type --> Object

// ts compiler automatically infer the type of variable so it is called implicit type
// const user = {
//   firstName: "Mezbaul",
//   middleName: "Abedin",
//   lastName: "Persian",
// };

const user: {
  readonly company: string; // type: literal types
  firstName: string;
  middleName?: string; // optional type
  lastName: string;
  isMarried: boolean;
} = {
  company: "Programming Hero",
  firstName: "Mezbaul",
  lastName: "Persian",
  isMarried: true,
};
