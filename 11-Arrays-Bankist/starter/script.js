'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);



/////////////////////////////////////////////////
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));
console.log(arr.slice(2, 4));

console.log(arr.slice());
console.log([...arr]); // This is a food way to make a shalow copy of the array.

// Splice method. this works similar to slice but this mutates the original array rather
// than making a separate copy of the array.

//console.log('splice', arr.splice(2));
arr.splice(-1); // remove the last element from the array.
arr.splice(1, 2); // delete two element starting at position 1.
console.log(arr);

// REVERSE

 arr = ['a', 'b', 'c', 'd', 'e'];
 const arr2 = ['j', 'i', 'h', 'g', 'j'];

 console.log(arr2.reverse());
 console.log(arr2);

// CONCAT

const letters = arr.concat(arr2);
console.log(letters);

console.log([...arr, ...arr2]); // This does not mutate the original array

// JOIN
console.log(letters.join('-'));


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Using a for of loop.

for( const [i, movement] of movements){
  if(movement > 0){
    console.log(`Movement ${i + 1} You have deposited ${movement}`);
  } else {
    console.log(`You have withdrew ${movement}`);
  }
}

// Using the foreach method to loop over the array.

movements.forEach(function (movement, i){
  /*
    The foreach loop runs the callback function on ever iteration of the array with the current element
    // passed as an argument to the callback function.
   */
  if(movement > 0 ){
    console.log(`Movement: ${i+ 1} You have deposited ${movement}`);
  } else {
    console.log(`Movement: ${i +1} You have withdrew ${movement}`);
  }
})