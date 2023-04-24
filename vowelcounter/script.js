function countVowels(name) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
  
    for (let i = 0; i < name.length; i++) {
      if (vowels.includes(name[i].toLowerCase())) {
        count++;
      }
    }
    return count;
  }
  
  // Example usage:
  const name1 = 'LAKSHAY';
  console.log(countVowels(name1)); // Output: 3
  