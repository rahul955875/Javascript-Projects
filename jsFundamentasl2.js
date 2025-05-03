// console.log(NaN**0)
const numObj = {
  "+49": "B",
  49: "A",
  sayHi(){
    return this['49']
  }
};
// console.log(numObj['49']);
const {sayHi,...clonedObj} = numObj;
const cloneNumObj = structuredClone(clonedObj)
// console.log(cloneNumObj)

function user(name,age){
    this.name=name,
    // console.log('this obj', this ,this.name)
    this.age = age
    return 'hello'

}
// const User=(name,age)=>{
//     console.log(this)
//     this.name=name,
//     this.age = age
//     return this
// }

const newUser =new user('john',30)
// console.log(newUser)
// User('john',30)
// let objthis = function(){return this}()
// objthis.name = 'john'
// console.log(objthis)


class user2 {
    constructor(name,age){
        this.name = name,
        this.age = age
    }
}

const newUserWithClass = new user2('ramu','30')
// console.log(newUserWithClass)



function CalCulator(){
    this.read = function read(){
        this.a = +prompt('first digit',0)
        this.b = +prompt('second digit',0)
    }
    this.sum = function sum(){
        console.log(this.a + this.b)
    }
    this.mul = function sum(){
        console.log(this.a * this.b)
    }

}
// new CalCulator().read()

function Accumulator(initalValue){
    this.value = initalValue
    this.read = function read(){
        this.value += +prompt('first digit?',0) 
    }
}

const newAcumulator = new Accumulator(1)
// newAcumulator.read()
// console.log(newAcumulator.value)

let id  = Symbol('this is a symbol!!!')
// console.log(id.description)
const objWithSymbol= {
    name : 'string',
    [id] : 'symbol'

}
// console.log(objWithSymbol)
// console.log(Object.values(objWithSymbol))
// console.log(objWithSymbol?.[id])

// const id2 = Symbol()
// console.log(id2.description)
const objTobeConvert = {
    name : 'john',
    age : 50,
    toString(){
        return 'john'
    }
}
// console.log(objTobeConvert.valueOf())
// console.log(String(objTobeConvert))
// console.log(objTobeConvert.valueOf()==String(objTobeConvert))
// console.log('hi ' +objTobeConvert)
// console.log(2*objTobeConvert)
let a = 5
// console.log(a.__proto__)
// console.log( +5..toFixed(5))
// console.log(bigInt)
// console.log(isFinite(undefined))

const nestedArr = [1,2,[[[3],4]],5]

const sumOfArr = (arr)=>{
    let sum = 0
    for(let num of arr){
        if(Array.isArray(num)){
            sum += sumOfArr(num)
        }else{
            // console.log(num)
            sum += num
        }
    }
    return sum
}

console.log(sumOfArr(nestedArr))