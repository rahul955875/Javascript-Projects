function isAnagram(str1,str2){
    // console.log(arguments)
function formate(str){
    return str.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('')
}
return formate(str1)===formate(str2)
}
console.log(isAnagram('listen7','lisent'))

// console.log('hello7 '.replace(/[^a-z0-9]/g,''))
