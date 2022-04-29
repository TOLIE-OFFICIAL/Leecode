// 一、根据轮转的位置，分割拼接数组
var rotate = function (nums, k) {
    let arr = nums.slice(-k);
    nums = arr.concat(nums);
    for (let i = 0; i < k; i++) {
        nums.pop();
    }
    return nums;
};

let res = rotate([1, 2, 3, 4, 5, 6, 7], 3);
console.log(res);
