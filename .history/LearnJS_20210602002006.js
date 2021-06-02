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


//逻辑非测试
// let numsObj = {
//     count: {
//         nums: 1
//     },
//     obj: 5
// }

// var notbar = function () {
//     return numsObj.aaa || numsObj.count.nums
// }
// var notfoo = function () {
//     // return numsObj.aaa.bbb || numsObj.count.nums
// }
// console.log(notbar());
// console.log(notfoo());


// let cartArr = [1, 2, 3];
// for (let value of cartArr) {
//     value += 1
//     console.log(value);
// }
// console.log(cartArr);

// var cartList = [];

// let old = true
// console.log(old);

// cartList.length = 5
// console.log(cartList);

// for (let value of cartList) {
//     if (value !== 5) {
//         old = false
//         console.log("5555");
//     }
// }
// cartList.push(1)
// console.log(cartList);
// console.log(old);


var list = [];
var list1 = [1];
var list2 = [2];
var list3 = [3]
var info = [{ iid: 3 }]
list.length = 0;
list1.length = 4;
list2.length = 4;

var lista = list.map(function (item) {
    return item + 1;
    console.log("11111");
})
console.log(lista);


list1.forEach(function (item, index, arr) {
    arr[index] = item + 1
    console.log("11111");
})

for (var p in list2) {
    list2[p] = 1
    console.log("11111");

}
var list3 = []
var info = [{ iid: 3 }]
const oldInfo = list3.find(value => value.iid.bbb === info.iid)
console.log(oldInfo);

console.log(list);  //Array [ <4 empty slots> ]
console.log(list1)  //Array [ <4 empty slots> ]
console.log(list2); //Array [ <4 empty slots> ]

let fuc = 5,
function aaa() {

    if (1) {
        fuc += 1
    }
    console.log(fuc);
}
aaa();

let thistest = {
    yukon: 1
    bbb(value) { return value + 1 },
    add: () => ()
}

fuc(){
    this.
}

var o = {
    name: "abab"
}
function fn(arr) {
    console.log(this);
    console.log(arr);


}
fn.apply(o, ["pink"])