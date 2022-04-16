// （1）首先最后一步只有两种可能，①要么迈1级台阶②要么迈2级台阶。
// （2）那么到某级的方法就=所有最后迈1级台阶的方法+所有最后迈2级的方法。
// （3）所有最后迈1级台阶的方法在dp[i-1]，所有最后迈2级台阶的方法在dp[i-2]。（以到i级为例）

var climbStairs = function (n) {
    if (n == 1 || n == 2) return n;
    // 滚动更新，只保留待求数的前两个数值
    let dp_i_1 = 2; let dp_i_2 = 1;
    for (let i = 3; i <= n; i++) {
        dp_i = dp_i_1 + dp_i_2;
        dp_i_2 = dp_i_1;
        dp_i_1 = dp_i;
    }
    return dp_i;
};