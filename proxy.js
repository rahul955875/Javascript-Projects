let dictionary = {
    'Hello': 'Hola',
    'Bye': 'Adiós'
  };

  let proxy = new Proxy(dictionary,{
    get(target,prop){
        if(prop in target){
            return target[prop]
        }else{
            return 'un translated.'
        }
    }
  })

// proxy['hi'] = 'welcome to dictionary.'
// console.log(dictionary['hi'])

// protect _properties
let user = {
    name: "John",
    _password: "***"
  };

  
user = new Proxy(user,{
    get(target,prop){
        if(prop.startsWith('_')){
            throw new Error('cant get this type of properties.')
        }else if(prop in target){
            return target[prop]
        }else{
            return undefined
        }
    },
    set(target,prop,value){
        if(prop.startsWith('_')){
            throw new Error('cant set this internal propety.')
        }else{
            target[prop]= value
            return true
        }
    },
    ownKeys(target){
        return Object.keys(target).filter(key => !key.startsWith('_'))
    }
})

// console.log(Object.keys(user)) //pass
// console.log(user._password) //pass
// user._password = 'new password' //pass
// console.log(user.name='john smith')

// task 1
let user1 = {
    name: "John"
  };
  
  function wrap(target) {
    return new Proxy(target, {
        /* your code */
        get(target,prop,reciver){
         const value = Reflect.get(...arguments)
         if(value === undefined){
            throw new Error('this value not exists.')
         }
         return value
        }
    });
  }
  
//   user1 = wrap(user1);
  
//   console.log(user1.name); // John
//   console.log(user1.age); 


//task 2

let array = [1,2,3]

array = new Proxy(array, {
  /* your code */
  get(target,prop,reciver){
    if(prop<0){
        const value = target[target.length + +prop]
        return value
    }
    return Reflect.get(...arguments)
  }
});

// console.log( array[1] ); // 2
// console.log( array[-1] ); // 3
// console.log( array[-2] ); //2

// task 3

function makeObservable(target) {
    /* your code */
   let handlers = Symbol('handlers')
   target[handlers]=[]
   target.observe = function(handler){
    this[handlers].push(handler) 
   }
   return new Proxy(target,{
    set(target,prop,value,reciver){
        const success = Reflect.set(...arguments)
        if(success){
            target[handlers].forEach(handler => {
                handler(prop,value)
            });
        }
        return success
    }
   })
  }
  
  let user3 = {};
  user3 = makeObservable(user3);
  
  user3.observe((key, value) => {
    console.log(`SET ${key}=${value}`);
  });
  
  user3.name = "John"; // alerts: SET name=John