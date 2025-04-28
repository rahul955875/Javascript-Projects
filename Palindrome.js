const str = '   A NamaN A   '
 
const isPalindromeWithReverse = (name)=>{
    if(name.trim()){
        const revStr = name.trim().toLowerCase().split('').reverse().join('')
        // console.log(revStr, name.toLowerCase())
        if(revStr===(name.trim().toLowerCase())){
            return `${name} is palindrome`
        }else{
            return `${name} is not palindrome`
        }
    }
}

// console.log(isPalindrome(str))

//without reverse

const isPalindrome=(str)=>{
    const strArr = Array.from(str.trim())
    const arrLength = strArr.length
    const compareStr = []
    for(let i = 0; i<arrLength; i++ ){
        const popedValue = strArr.pop()
        compareStr.push(popedValue)
    }
    // console.log(compareStr.join(''))
    if(compareStr.join('')===str.trim()){
        return `${str} is palindrome.`
    }else{
        return `${str} is not palindrome.`
    }
}
console.log(isPalindrome(str))
