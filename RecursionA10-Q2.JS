function lastRemaining(n) {
  let start = 1; // Starting number
  let step = 1; // Step size
  let remaining = n;

  let fromLeft = true; // Flag to indicate the direction

  while (remaining > 1) {
    if (fromLeft || remaining % 2 === 1) {
      // If removing from the left or the remaining count is odd
      start += step;
    }

    step *= 2; // Double the step size
    remaining = Math.floor(remaining / 2); // Update the remaining count
    fromLeft = !fromLeft; // Toggle the direction
  }

  return start;
}
console.log(lastRemaining(9)); // Output: 6
console.log(lastRemaining(1)); // Output: 1
