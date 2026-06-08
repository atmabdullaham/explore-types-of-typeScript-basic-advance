"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
    // spreed operator in ts
    //  rest operator in ts
    //   learn spread operator
    const bros1 = ["mr", "md", "ms"];
    const bros2 = ["Tanmoy", "Nahid", "Rahat"];
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
    const greetFriends = (...friends) => {
        friends.forEach((fr) => {
            console.log(fr);
        });
    };
    greetFriends("Abdul", "Banul", "Kabul");
    //
}
