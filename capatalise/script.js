function capitalizeName(name) {
  const firstLetter = name.charAt(0);

  return firstLetter === firstLetter.toLowerCase() ? 
    firstLetter.toUpperCase() + name.slice(1) : name;
}

// Example usage:
const name1 = 'john'; // lowercase first letter
console.log(capitalizeName(name1)); // Output: "John"

const name2 = 'Amy'; // uppercase first letter
console.log(capitalizeName(name2)); // Output: "Amy"
