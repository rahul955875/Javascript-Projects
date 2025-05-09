const user = {
  name: "raman",
  lastName: "patel",
  get fullName() {
    return this.name + " " + this.lastName;
  },
  set fullName(value) {
    [this.name, this.lastName] = value.split(" ");
  },
};

// user.fullName = 'ramesh patel'
// console.log(user.fullName)
// console.log(user.name)

function MakeUser(name, birthday) {
  this.name = name;
  this.birthday = new Date(birthday);
  Object.defineProperty(this, "age", {
    get() {
        let birthday = new Date(this.birthday).getFullYear()
      return new Date().getFullYear()-birthday
    },
    set(value){
        this.birthday = new Date(value)
    }
  });
}
// const user1 = new MakeUser("john", "1999-01-15");
// user1.age = '2002-06-21'
// console.log(user1.age);

