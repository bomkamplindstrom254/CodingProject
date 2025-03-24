function addNumbers(a: number, b: number): number {
  return a + b;
}

function calculateGCD(x: number, y: number): number {
  if (y === 0) {
    return x;
  } else {
    const remainder = x % y;
    return calculateGCD(y, remainder);
  }
}
