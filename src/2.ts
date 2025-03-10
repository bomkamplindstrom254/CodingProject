const getRandomTsCode = () => {
  const code = `
    // This is a random TypeScript code generated by AI
    interface Person {
      name: string;
      age: number;
    }
    
    function greet(person: Person) {
      console.log(\`Hello, \${person.name}! You are \${person.age}\ years old.\`);
    }
    
    const person = { name: 'John', age: 30 };
    greet(person);
  `;
  return code;
};
