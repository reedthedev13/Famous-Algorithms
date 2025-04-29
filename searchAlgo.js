// Binary Search

function search(arr, target, start, end) {
    if (start > end) return false;

    const middle = Math.floor((start + end) / 2)

    if (arr[middle] == target) return true;  // found the element

    if (arr[middle] > target) {
        return search(arr, target, start, middle - 1)
    } else return search(arr, target, middle + 1, end)
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const target = 14;
const result1 = search(arr, target, 0, arr.length - 1);
console.log(result1);   


const maze = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, "S", 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, "E", 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ];

  function isWalkable(x, y) {
    return maze[y][x] !== 1;
  }

  let start, end;
for (let y = 0; y < maze.length; y++) {
    for (let x = 0; x < maze[y].length; x++) {
        if (maze[y][x] === "S") start = { x, y};
        if (maze[y][x] === "E") end = {x, y};
    }

}

console.log("Start", start, "End", end);
