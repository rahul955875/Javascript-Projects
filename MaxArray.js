const container = [1,2,3,4,5,10]

const findMaxEleWithSort = (arr)=>{
    arr.sort((a,b)=>b-a)
    return arr[0]
}
// console.log(findMaxEleWithSort(container))

//wihtout sort
const findMaxEle = (arr)=>{
    let maxEl = 0;
    for(const el of arr){
        if(maxEl<el){
            maxEl = el
        }
    }
    return maxEl
}
console.log(findMaxEle(container))