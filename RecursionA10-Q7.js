function printPermutations(str) {
  const permutations = [];

  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  function generatePermutations(arr, start, end) {
    if (start === end) {
      permutations.push(arr.join(""));
    } else {
      for (let i = start; i <= end; i++) {
        swap(arr, start, i);
        generatePermutations(arr, start + 1, end);
        swap(arr, start, i); // backtrack
      }
    }
  }

  generatePermutations(str.split(""), 0, str.length - 1);

  return permutations;
}

const str = "abb";
const result = printPermutations(str);
console.log(result.join(" "));
