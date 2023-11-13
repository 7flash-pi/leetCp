// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

/*
1.get no of rows and cols for given matrix
2.make adummy 2d array and fill all cell with 0


*/

function minPathSum(grid: number[][]): number {
  let rows: number = grid.length;
  let cols: number = grid[0].length;

  const dp: number[][] = Array.from({ length: rows }, () =>
    Array(cols).fill(0)
  );
  dp[0][0] = grid[0][0];

  for (let i = 1; i < cols; i++) {
    dp[0][i] = dp[0][i - 1] + grid[0][i];
  }

  for (let i = 1; i < rows; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[rows - 1][cols - 1];
}
