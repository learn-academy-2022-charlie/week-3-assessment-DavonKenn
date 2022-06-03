// ASSESSMENT 3: Coding Practical Questions with Jest

const { CodeGenerator } = require("@babel/generator")
const { number } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Boiler Plate
// describe("areYouHungry", () => {
//     it("returns eat food or keep working based on input", () => {
//       expect(areYouHungry("yes")).toEqual("eat food")
//       expect(areYouHungry("no")).toEqual("keep working")
//     })
//   })

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

describe("fibonacciSequence" , () => {
    
const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


    it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
      expect(fibonacciSequence(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
      expect(fibonacciSequence(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
  })






// b) Create the function that makes the test pass.


// Psuedo Code
// Looking what the fibonacci sequence is. From my research the value in the array is created by the sum of the first two indexs
// create a function called fibonacciSequence
//  im going to need two indexes to start the fib sequence which would be 1,1
// i would need to use a method to get the sum of these two numbers
//  i would use .map to iterate throughout the indexs 
// input:taking number > 2
// output:return of an array that length containing the numbers of the Fibonacci sequence


// const fibonacciSequence = (n) => {
//      const arr = [1,1];
//      let a,b;
//      for (let i = 0; i < number; i++) {
//          a= arr[i - 1];
//          b = arr[i - 2];
//          arr.push(a + b);
//      }
//      return arr;
//      }
//      console.log(fibonacciSequence(6))
//      console.log(fibonacciSequence(10));

    //RECIEVED FOR OUTPUT:  FAIL  ./code-challenges.test.js
    //  fibonacciSequence
    //    ✕ takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence (8 ms)
   
    //  ● fibonacciSequence › takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence
   
    //    expect(received).toEqual(expected) // deep equality
   
    //    - Expected  - 4
    //    + Received  + 0
   
    //      Array [
    //        1,
    //        1,
    //    -   2,
    //    -   3,
    //    -   5,
    //    -   8,
    //      ]
   
    //      36 |
    //      37 |     it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
    //    > 38 |       expect(fibonacciSequence(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    //         |                                             ^
    //      39 |       expect(fibonacciSequence(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    //      40 |     })
    //      41 |   })
   
    //      at Object.toEqual (code-challenges.test.js:38:45)


// Where i got stuck is I couldnt get FibLength two to log the output

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe("onlyOdd", () => {

    const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
    // Expected output: [-9, 7, 9, 199]
    
    const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
    // Expected output: [-823, 7, 23]
    
    it("takes in an array and returns a new array of only odd numbers sorted from least to greatest", () => {
        expect(onlyOdd(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(onlyOdd(fullArr2)).toEqual([-823, 7, 23])
      })
    })

// b) Create the function that makes the test pass.

// Psuedo Code
// creating a function
// methods: I use .push,.slice
// Input:an array with strings and numbers
// Output:returning a anew array of only odd sorted least to greatest

const onlyOdd = (array) => {
    let newArr = []
    let lowestToHighest = array. sort((a, b) => a - b);
    for(let i=0; i<array.length; i++){
      if(array[i] % 2 === 0){
        newArr.push(array[i])
      }
    }
    return newArr
  }

  console.log(onlyOdd)

// Output:● onlyOdd › takes in an array and returns a new array of only odd numbers sorted from least to greatest

    // expect(received).toEqual(expected) // deep equality

    // - Expected  - 4
    // + Received  + 4

    //   Array [
    // -   -9,
    // -   7,
    // -   9,
    // -   199,
    // +   0,
    // +   false,
    // +   4,
    // +   8,
    //   ]

    //   118 |     
    //   119 |     it("takes in an array and returns a new array of only odd numbers sorted from least to greatest", () => {
    // > 120 |         expect(onlyOdd(fullArr1)).toEqual([-9, 7, 9, 199])
    //       |                                   ^
    //   121 |         expect(onlyOdd(fullArr2)).toEqual([-823, 7, 23])
    //   122 |       })
    //   123 |     })









// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("accumSum", () => {
    const numbersToAdd1 = [2, 4, 45, 9]
    // Excpected output: [2, 6, 51, 60]
    
    const numbersToAdd2 = [0, 7, -8, 12]
    // Expected output: [0, 7, -1, 11]
    
    const numbersToAdd3 = []
    // Expected output: []
    
    it("takes in an array and returns an array of the accumulating sum", () => {
        expect(accumSum(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(accumSum(numbersToAdd2)).toEqual([0, 7, -1, 11])
        expect(accumSum(numbersToAdd3)).toEqual([])
      })
    })

// b) Create the function that makes the test pass.


// PSUEDO CODE
// creating a function that takes in an accumulating sum
// need some kind of way to apply adding logic over each of our numbers to give me the running sum 
// for loop needed
// input:array
// Output:array accumSum
// 

const accumSum = (arr) => {
    for(let i = 1 ; i < arr.length ; i++) {
        arr[i] = arr[i] + arr[i-1];
    }
     return arr;
}
console.log(accumSum);