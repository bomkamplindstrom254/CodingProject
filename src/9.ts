class Greeting {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, ${this.name}!`);
  }
}

const user = new Greeting('Alice');
user.greet(); // Output: "Hello, Alice!"
