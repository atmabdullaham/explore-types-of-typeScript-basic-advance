{
  // spreed operator in ts
  //  rest operator in ts

  //   learn spread operator
  const bros1: string[] = ["mr", "md", "ms"];
  const bros2: string[] = ["Tanmoy", "Nahid", "Rahat"];
  bros1.push(...bros2);
  const mentors1 = {
    typescript: "Mezbah",
    redux: "Mir",
    dbms: "Mizan",
  };
  const mentors2 = {
    prisma: "Firoz",
    next: "Tonmoy",
    cloud: "Nahid",
  };

  const mentorList = {
    ...mentors1,
    ...mentors2,
  };

  //   learn rest operator
  const greetFriends = (...friends: string[]) => {
    friends.forEach((fr: string) => {
      console.log(fr);
    });
  };

  greetFriends("Abdul", "Banul", "Kabul");

  //
}
