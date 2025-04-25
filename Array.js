//Array methods
//1,splice - modify orginal array
const arr = [1, 2, 3];
const newarr = arr.splice(0, 2, "new"); // new --> returns array of deleted items

//slice - returns new array copy of orginal
//concate - return new concated array , array like obj can be concated using [symbol.isConcatable] : true
//forEeach retuns nothing- undefined
//indexof - returns index
//lastIndexof - returns index from last
//find - retruns first matched value
//findIndex - returns index of match
//findLastIndex - last
//filter - returns new filtered array
//map - returns new array or returned value
//sort(compare callback) - modify orignal returns array
//reverse - modifies orignal
//split - break string into array (',',limit)
//join - return string concating the array
//reduce - iterate throught array and return single value
//reduceRight --same but right to left
//some,every
//flat(depth)-flate multidinemsional array
//array.fill(value,start,end)
//copyWithin(targetpoistion,start,end)

// let users = [
//   { id: "john", name: "John Smith", age: 20 },
//   { id: "ann", name: "Ann Smith", age: 24 },
//   { id: "pete", name: "Pete Peterson", age: 31 },
// ];

// const groupById = (users) => {
//   return users.reduce((acc, user) =>{acc[user.name] = user
//     return acc
//   }, {});
// };
// let usersById = groupById(users);
// console.log(usersById)



//String 

//indexOf(target,pos)
//lastIndexOf
//slice(start,end(exclude))--> recommended
//substring(start,end)
//substr(start,lenth)

//object
Object.keys()
Object.values()
Object.entries()
Object.fromEntries()
