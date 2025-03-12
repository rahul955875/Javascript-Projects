const user = {
    firstname : 'rahul',
    lastName : 'nizare'
}
function fullName(namaste,city) {
    console.log(namaste +' ' +  this.firstname + ' ' + this.lastName + 'from ' + city  )
    
}
const fname = fullName.bind(user, 'namaste')
fname('surat')



Function.prototype.myBind = function(...arg){
    const obj = this

    return function(...arg2){
    obj.apply(arg[0],[...arg.slice(1),...arg2])
    }
}

const myName = fullName.myBind(user,'namaste')
myName('surat')