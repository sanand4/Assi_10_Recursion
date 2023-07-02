function countContiguousSubstrings(S) {
  let count = 0;

  for (let i = 0; i < S.length; i++) {
    let subCount = 0;

    for (let j = i; j < S.length; j++) {
      if (S[i] === S[j]) {
        subCount++;
      }

      count += subCount;
    }
  }

  return count;
}

// Example usage:
const S1 = "abcab";
console.log(countContiguousSubstrings(S1)); // Output: 7

const S2 = "aba";
console.log(countContiguousSubstrings(S2)); // Output: 4
