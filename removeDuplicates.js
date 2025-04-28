const arr = [1,3,3,3,3,3,3,4,5,5]

const removeDuplicate = (arr)=>{
    return [...new Set(arr)]

}
// console.log(removeDuplicate(arr))

const withoutSet=(arr)=>{
    const newUnique = []
    for(const el of arr){
        if(newUnique.includes(el)){
            continue
        }else{
            newUnique.push(el)
        }
    }
    return newUnique
}
console.log(withoutSet(arr))