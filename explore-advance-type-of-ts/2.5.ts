// function er sate kivabe generic use korte pari amra dekbo,
// function with generics,

// you have a function who create an array,
const createArray = (param: string): string[] => {
  return [param];
};

const res1 = createArray("Bangladesh");

const createArrayWithGeneric = <T>(param: T): T[] => {
  return [param];
};
const resGeneric = createArrayWithGeneric<boolean>(true);
const resGeneri1 = createArrayWithGeneric<string>("Bangladesh");
const resGeneri2 = createArrayWithGeneric<number>(12);

type User = {
  id: number;
  name: string;
};
const resGenericObj = createArrayWithGeneric<User>({
  id: 222,
  name: "Mr",
});

// another example
const createArrayWithTouple = <T, Q>(param1: T, param2: Q): [T, Q] => {
  return [param1, param2];
};
const res20 = createArrayWithTouple<string, number>("Bangladesh", 123);
const resGeneri12 = createArrayWithTouple<string, { name: string }>(
  "Bangladesh",
  { name: "Sajal" },
);

//

const addCourseToStudent = <T>(student: T) => {
  const course = "Next Level Web Development";
  return {
    ...student,
    course,
  };
};

const student1 = addCourseToStudent({
  name: "mr",
  emal: "mr@gmail.com",
  devType: "Next",
});
const student2 = addCourseToStudent({ name: "ms" });
