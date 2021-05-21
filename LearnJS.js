//数组的forEach方法 传入value index 是传值进去 传数组才是传址 并且不改变原数组
//可能从外面传个sum进去接收值
var sum = 0;
let a = [1, 2, 3]
//forEach&map方法

let aa = a.forEach(function (value, index, arr) {

    arr[index] = arr[index] + 1
    value = value * 2
    sum += value
    return value
})
console.log('forEach输出原数组a', a);
console.log('forEach输出新数组aa', aa);
console.log('forEach输出sum', sum);
//forEach输出原数组a[2, 3, 4]
//forEach输出新数组aa undefined
//forEach输出sum 12

let b = [1, 2, 3]
let c = b.map(function (value, index, arr) {

    arr[index] = arr[index] + 1 //b输出2 3 4 说明改变了原数组
    value = value * 2
    return value
})
console.log('map输出原数组b', b);
console.log('map输出新数组c', c);

//map输出原数组b[2, 3, 4]
//map输出新数组c[2, 4, 6]


//filter
//fliter有返回值,对返回值进行判断,true的进入整个返回的数组中,相比于map对于返回值多了一层判断.

let d = [1, 2, 3]
let e = d.filter(function (value, index, arr) {

    arr[index] = arr[index] + 1 //b输出2 3 4 说明改变了原数组
    value = value
    return value % 2 != 0
})
console.log('filter输出原数组b', d);
console.log('filter输出新数组c', e);

//filter输出原数组b[2, 3, 4]
//filter输出新数组c[1, 3]


//concat
let f = [a, b, h, c, g, e]
let g = [s, z, q]
let b = f.reverse()
console.log(b);
console.log(f);


