// property falgs
// writtable = true
// enumerable = true //loop
// configurable = true

// get this properties
let user = {
  name: "john",
};
// *get property flage
const res = Object.getOwnPropertyDescriptor(user, "name");
// console.log(res)
// user.enumerable = false wrong way

// *change flages
Object.defineProperty(user, "name", {
  enumerable: false,
});
for (let key in user) {
  console.log((user[key] = "javascript"));
}
// console.log(user.name)

//let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName); returns flags related to property

// Object.defineProperty(obj, propertyName, descriptor) to define property in {}

// Object.defineProperty(Math, "PI", { configurable: true, writable: true });
// console.log(Math.PI) //!cant change

//* to cahnge multiple propertries in one go
// Object.defineProperties(user, {
//     name: { value: "John", writable: false },
//     surname: { value: "Smith", writable: false },
//     // ...
//   });


