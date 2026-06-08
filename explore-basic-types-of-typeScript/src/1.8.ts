// destructuring

const user = {
  id: 354,
  name: {
    firstName: "Mezbaul",
    middleName: "Abedin",
    lastName: "Persian",
  },
  contactNo: "0175000000",
  address: "Uganda",
};

const {
  contactNo,
  name: { middleName: midName }, // destructuring er maje evabe type declure korte parbe na, karon etak se bojai name allias,
} = user;

// array destructuring
const myFriends = ["chandler", "joey", "ross", "rachel", "monica"];

// const [a, b, bestFriend] = myFriends;
// const [, , bestFriend] = myFriends;
const [, , bestFriend, ...rest] = myFriends;
