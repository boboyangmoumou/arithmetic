//最近参加滴滴出行的笔试题的最后两题算法，想记录下来慢慢提高自己，希望能每次总结
//给定整数序列求子串最大整数和
let arr = [-23, 17, -7, 11, -2, 1, -34];

function quick(arr) {
    let newsum = 0;
    let maxsum = 0;
    for (let i = 0; i < arr.length; i++) {
        newsum += arr[i];
        if (newsum > maxsum) {
            maxsum = newsum;
        } else if (newsum < 0) {
            newsum = 0
        }
    }
    return maxsum;
}
console.log(quick(arr));


//整数无序数组求第k大数
let arr1 = [2, 3, 1, 5, 8, 77, 4];

function sort1(arr1) {
    if (arr1.length == 0) {
        return [];
    }
    var x = Math.floor(arr1.length / 2);
    var a = arr1.splice(x, 1);
    var b = [];
    var c = [];
    var item = [];
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] < a) {
            b.push(arr1[i]);
        } else {
            c.push(arr1[i]);
        }
    }
    item = sort1(c).concat(a, sort1(b));
    return item;
}

function quick(k) {
    return sort1(arr1).splice(k - 1, 1);
}

console.log(quick(2));