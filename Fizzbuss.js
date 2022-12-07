// Write a function that will return 1 through 100. But for multiples of 3, it will return "Fizz" instead of the number and for the multiples of 5, it will return "Buzz". For numbers which are multiples of both 3 and 5, it will return "FizzBuzz".

// [x] function that will loop through the numbers 1 - 100;
// [] if a multiple of 3, return "Fizz"
// [] if a multiple of 5, return "Buzz"
// [] if both, return "FizzBuzz"
// const FizzBuzz = () => {
//     for (i = 0; i <= 100; i++) {
//       if (i % 3) {
//         console.log([i] + " Fizz");
//       }
//       if (i % 5) {
//         console.log([i] + "Buzz");
//       }
//       if (i % 3 && i % 5) {
//         console.log([i] + "FizzBuzz");
//       } else {
//         console.log([i]);
//       }
//     }
//   };
//   console.log(FizzBuzz)
  const FizzBuzz = () => {
    for (i = 0; i <= 100; i++) {
      if ([i] % 3 == 0) {
        console.log([i] + " Fizz");
      }
      if (i % 5 == 0) {
        console.log([i] + "Buzz");
      }
      if (i % 3 == 0 && i % 5 == 0) {
        console.log([i] + "FizzBuzz");
      } else {
        console.log([i]);
      }
    }
  };
  console.log(FizzBuzz());