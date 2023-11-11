// You are given an integer n. A 0-indexed integer array nums of length n + 1 is generated in the following way:

// nums[0] = 0
// nums[1] = 1
// nums[2 * i] = nums[i] when 2 <= 2 * i <= n
// nums[2 * i + 1] = nums[i] + nums[i + 1] when 2 <= 2 * i + 1 <= n
// Return the maximum integer in the array nums​​​.

function getMaximumGenerated(n: number): number {
    if (n === 0) return 0;
    
    const arr: number[] = new Array(n + 1).fill(0); // onitial array with n+1 size and all values =0
    arr[1] = 1;

    for (let i = 1; i <= n; i++) {
        if (2 * i <= n) arr[2 * i] = arr[i];
        if (2 * i + 1 <= n) arr[2 * i + 1] = arr[i] + arr[i + 1];
    }

    return Math.max(...arr);
}
