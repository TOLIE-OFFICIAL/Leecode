var generate = function (numRows) {
    let result = new Array();
    for (let i = 0; i < numRows; i++) {
        let row = new Array(i + 1).fill(1);
        for (let j = 1; j < row.length - 1; j++) {
            row[j] = result[i - 1][j] + result[i - 1][j - 1];
        }
        result.push(row);
    }
    return result;
};


let result = generate(5);
console.log(result);