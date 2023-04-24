function removeDuplicates(items) {
    return [...new set(items)];
  }
  
  // Example usage:
  const cart = ['shirt', 'pants', 'shirt', 'shoes', 'pants'];
  console.log(removeDuplicates(cart)); // Output: ["shirt", "pants", "shoes"]
  