function greeter(person: string) {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1: Destructuring
let [firstName] = user;
console.log(greeter(firstName)); // Output: Hello, Jane

// Solution 2: Array iteration
for (const name of user) {
  console.log(greeter(name)); // Output: Hello, Jane, Hello, Doe
}
// Solution 3: Concatenate the array elements
console.log(greeter(user.join(" "))); // Output: Hello, Jane Doe