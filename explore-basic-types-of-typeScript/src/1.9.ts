{
  // Type Allas
  //   const student1: {
  //     firstName: string;
  //     age: number;
  //     gender: string;
  //     roll: number;
  //     contactNo: string;
  //     address: string;
  //   } = {
  //     firstName: "Mezbah",
  //     age: 20,
  //     gender: "male",
  //     roll: 30,
  //     contactNo: "01544552100",
  //     address: "ctg",
  //   };
  //   const student2: {
  //     firstName: string;
  //     age: number;
  //     gender: string;
  //     roll: number;
  //     contactNo: string;
  //     address: string;
  //   } = {
  //     firstName: "Jabed",
  //     age: 25,
  //     gender: "male",
  //     roll: 20,
  //     contactNo: "014544000",
  //     address: "dhk",
  //   };

  //  to solve this types of repetative type typing we need type allas,
  type Studnet = {
    firstName: string;
    age: number;
    gender: string;
    roll: number;
    contactNo?: string;
    address: string;
  };
  const student1: Studnet = {
    firstName: "Mezbah",
    age: 20,
    gender: "male",
    roll: 30,
    address: "ctg",
  };
  const student2: Studnet = {
    firstName: "Jabed",
    age: 25,
    gender: "male",
    roll: 20,
    contactNo: "014544000",
    address: "dhk",
  };

  type UserName = string;
  type IsAdmin = boolean;
  const userName: UserName = "Persian";
  const isAdmin: IsAdmin = true;
  //   to type allias thia amra ki korte parlam, akta nirdistro structure k type hisabe amra alliasing korte partese,

  // type allias in function

  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1: number, num2: number) => num1 + num2;
}
