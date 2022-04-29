var moveZeroes = function (nums) {
    let fast = 0;
    let slow = 0;
    let len = nums.length
    while (fast < len) {
        // nums[slow]始终指向0
        // console.log(nums[slow]);

        if (nums[fast] != 0) {
            //交换fast和slow指向的值
            // a = [b, b=a][0] b=a先执行，所以交换了值

            //注意不能直接给nums[fast]赋值为0
            nums[slow] = [nums[fast], nums[fast] = nums[slow]][0]
            slow++;
        }
        fast++;
    }
    return len;
};

// moveZeroes([0, 1, 0, 3, 12]);
moveZeroes([0, 1]);