function printAllSubsets(set, subset = "", index = 0) {
  if (index === set.length) {
    console.log(`{ ${subset} }`);
    return;
  }

  // Exclude current character
  printAllSubsets(set, subset, index + 1);

  // Include current character
  printAllSubsets(set, subset + set[index], index + 1);
}
console.log("Example 1:");
printAllSubsets("abc");

console.log("\nExample 2:");
printAllSubsets("abcd");
