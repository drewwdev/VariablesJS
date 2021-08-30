import './style.css'

const numberOfCupsOfCoffee = 1
const fullName = 'Drew Wilson'

console.log(
  `My name is ${fullName} and I drink ${numberOfCupsOfCoffee} cups of coffee every day`
)

const aboutMe = {
  fullName: 'Drew Wilson',
  luckyNumber: 99,
  favoriteMovies: [
    'Return of the Jedi',
    'Inglorious Bastards',
    'Jurassic Park',
  ],
}

console.log(aboutMe)

const userName = window.prompt('What is your name? ')
console.log(`Greetings ${userName}!`)

const firstNumber = window.prompt('Give me a number: ') || '0'
const firstOperand = parseFloat(firstNumber)

const secondNumber = window.prompt('Give me a second number: ') || '0'
const secondOperand = parseFloat(secondNumber)

const sum = firstOperand + secondOperand
const difference = firstOperand - secondOperand
const product = firstOperand * secondOperand
const quotient = firstOperand / secondOperand
const remainder = firstOperand % secondOperand

console.log(
  `${firstOperand} plus ${secondOperand} is equal to ${sum}. ${firstOperand} minus ${secondOperand} is equal to ${difference}. ${firstOperand} multiplied by ${secondOperand} is equal to ${product}. ${firstOperand} divided by ${secondOperand} is equal to ${quotient}. ${firstOperand} divided by ${secondOperand} leaves a remainder of ${remainder}`
)

// Adventure Mode:

const numbers = [
  48445, 46014, 19787, 20247, 35328, 38553, 15543, 47607, 22182, 32044, 32662,
  29891, 47822, 23830, 20824, 15683, 13689, 31515, 23314, 12220, 33176, 44909,
  32440, 33978, 36220, 14415, 27114, 40431, 43308, 31795, 11635, 17291, 49622,
  22165, 32253, 38658, 43220, 45482, 14947, 26079, 45351, 29716, 18951, 21765,
  23613, 34848, 28248, 38976, 17808, 33217, 47052, 21295, 13564, 28138, 15428,
  49802, 26894, 32333, 46436, 45465, 25618, 28831, 22124, 12810, 21259, 42177,
  22885, 13035, 17737, 28282, 31489, 37662, 33422, 18965, 17167, 19963, 22366,
  17840, 14391, 38763, 45275, 17876, 46090, 15523, 32979, 40963, 13533, 12901,
  13659, 14635, 40885, 23133, 11912, 12211, 32785, 45295, 10615, 22813, 13051,
  21423,
]

numbers.sort()

const smallest = numbers[0]

const largest = numbers[numbers.length - 1]

let arraySum = 0
for (const i in numbers) {
  arraySum += numbers[i]
}

const average = arraySum / numbers.length

let sumOfEven = 0
for (let i = 1; i <= numbers.length - 1; i++) {
  if (i % 2 == 0) {
    sumOfEven += i
  }
}

let sumOfOdd = 0
for (let i = 1; i <= numbers.length - 1; i++) {
  if (i % 2 != 0) {
    sumOfOdd += i
  }
}

const stats = {
  smallest: smallest,
  largest: largest,
  sum: arraySum,
  average: average,
  sumOfEven: sumOfEven,
  sumOfOdd: sumOfOdd,
}

console.log(stats)

// Practicing with NumberConstructor

const firstNum = Number(window.prompt(`Give me a number`, ``))
console.log(firstNum)

const secondNum = Number(window.prompt(`Give me a second number`, ``))
console.log(secondNum)

var sumOfNums = firstNum + secondNum
const differenceOfNums = firstNum - secondNum
const productOfNums = firstNum * secondNum
const quotientOfNums = firstNum / secondNum
const remainderOfNums = firstNum % secondNum

console.log(
  `${firstNum} plus ${secondNum} is equal to ${sumOfNums}. ${firstNum} minus ${secondNum} is equal to ${differenceOfNums}. ${firstNum} multiplied by ${secondNum} is equal to ${productOfNums}. ${firstNum} divided by ${secondNum} is equal to ${quotientOfNums}. ${firstNum} divided by ${secondNum} leaves a remainder of ${remainderOfNums}`
)
