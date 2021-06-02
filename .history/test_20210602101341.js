var arr2 = [1, 2, 3, 1, 6, 2, 3]
arr2.filter((value, index, arr) => {
    let arr = arr2.pop()
    return arr.indexOf(value) == -1
})