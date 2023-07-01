function isPowerOfThree(n) {
  if (n <= 0) {
    return false;
  }

  const logarithm = Math.log10(n) / Math.log10(3);
  return Number.isInteger(logarithm);
}
console.log(isPowerOfThree(27)); // Output: true
console.log(isPowerOfThree(0)); // Output: false
console.log(isPowerOfThree(-1)); // Output: false
