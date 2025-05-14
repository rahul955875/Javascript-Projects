// function* generateSequence() {
//     yield 1;
//     yield 2;
//     return 3;
//   }
  
//   let generator = generateSequence();
// //   console.log(generator.next())
//   for(let value of generator) {
//     console.log(value); // 1, then 2
//   }

function* gen() {
    // Pass a question to the outer code and wait for an answer
    let result = yield "2 + 2 = ?"; // (*)
  
    console.log(result);
  }
  
  let generator = gen();
  console.log(generator.next().value)
//   console.log(generator.next(10))
//   let question = generator.next().value; // <-- yield returns the value
  
//   generator.next(4); //
  generator.next(5); //