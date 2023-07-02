function towerOfHanoi(N, source, destination, auxiliary) {
  let totalMoves = 0;

  if (N === 1) {
    console.log("Move disk 1 from rod", source, "to rod", destination);
    totalMoves = 1;
  } else {
    totalMoves += towerOfHanoi(N - 1, source, auxiliary, destination);

    console.log("Move disk", N, "from rod", source, "to rod", destination);
    totalMoves++;

    totalMoves += towerOfHanoi(N - 1, auxiliary, destination, source);
  }

  return totalMoves;
}

// Example usage:
const N = 2;
console.log("Total moves:", towerOfHanoi(N, 1, 3, 2));
