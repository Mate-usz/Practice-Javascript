function sum(...nums) {
    return nums.reduce((sum, curr) => sum += curr, 0);
}

console.log(sum(1, 2, 3, 4, 5));