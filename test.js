var arr2 = [1, 2, 3, 1, 6, 2, 3]
arr2.filter((value, index, arr) => {
    let abb = arr.pop()
    return abb.indexOf(value) == -1
})