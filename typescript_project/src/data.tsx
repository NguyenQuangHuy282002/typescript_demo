let users = [
  {
    name: "nguyen",
    age: "12",
    address: "Hanoi",
  },
  {
    name: "adffa",
    age: "12",
    address: "Hanoi",
  },
  {
    name: "eqwr",
    age: "12",
    address: "Hanoi",
  },
  {
    name: "asf",
    age: "12",
    address: "Hanoi",
  },
  {
    name: "dsadf",
    age: "12",
    address: "Hanoi",
  },
];
export function addUser(newUser: {
  name: string;
  age: string;
  address: string;
}) {
  users.push(newUser);
}
export function getUsers() {
  return users;
}
export function getUser(name: string) {
  return users.find((user) => user.name === name);
}
