function calculateLength(str) {
  if (str === "") {
    return 0;
  }

  return 1 + calculateLength(str.slice(1));
}

// Example usage:
const str1 = "abcd";
console.log(calculateLength(str1)); // Output: 4

const str2 = "GEEKSFORGEEKS";
console.log(calculateLength(str2)); // Output: 13
