function chunkArray(arr, n) {
    // Your implementation
    let newArr = [...arr];
    let chunkedArr = []
    let arrlength = arr.length
    while (newArr.length) {

        console.log('array lenthgth is ', newArr.length)
        let chunk = newArr.splice(0, 2)
        chunkedArr.push(chunk)
        arrlength -= 2
        console.log(chunkedArr)

    }

}

//For the purpose of user debugging.
//pass your array and chunk size in function call
chunkArray([1, 2, 3, 4, 5], 2);