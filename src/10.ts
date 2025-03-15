// Create a function that takes in an array of numbers as input
function sumArray(numbers) {
  // Initialize the sum to 0
  let sum = 0;

  // Loop through each number in the array and add it to the sum
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  // Return the sum
  return sum;
}
