// 一、内置API  revers
// 二，双指针
var reverseString = function (s) {
    let fast = s.length - 1;
    let slow = 0;
    while (fast >= slow) {
        s[fast] = [s[slow], s[slow] = s[fast]][0];
        fast--;
        slow++;
    }
};