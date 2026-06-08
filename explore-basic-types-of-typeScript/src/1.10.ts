{
  // union types
  //   type FrontendDeveloper = "fakibazDeveloper" | "juniorDeveloper"; // string literal type
  //   type FullstakeDeleloper = "frontendDeveloper" | "expertDeveloper";

  //   type Developer = FrontendDeveloper | FullstakeDeleloper;

  //   const newDeveloper: FrontendDeveloper = "fakibazDeveloper";

  //   type User = {
  //     firstName: string;
  //     email?: string;
  //     gender: "male" | "female";
  //     bloodGroup: "O+" | "B+";
  //   };
  //   const user1: User = {
  //     firstName: "Parsian",
  //     gender: "male",
  //     bloodGroup: "B+",
  //   };

  //   intersection type
  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };
  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullstakeDeleloper = FrontendDeveloper & BackendDeveloper;
  const fullstakeDeleloper: FullstakeDeleloper = {
    skills: ["HTML", "CSS", "EXPRESS"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
}
