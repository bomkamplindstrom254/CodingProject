function findMaxSum(arr: number[]): number {
    if (arr.length === 1) {
        return arr[0];
    }

    let maxLeft = Number.MIN_SAFE_INTEGER;
    let currentMax = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
        currentMax = Math.max(currentMax + arr[i], arr[i]);
        if (currentMax > maxLeft) {
            maxLeft = currentMax;
        }
    }

    return maxLeft;
}
