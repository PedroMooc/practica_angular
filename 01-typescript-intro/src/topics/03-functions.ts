function addNumbers(a: number, b: number): number {
    return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;
}

function multiply (firstNumber: number, secondNumber?: number, base: number =  2){
    return firstNumber * base;
}


const result: number = addNumbers(1, 2);
const resultArrow: string = addNumbersArrow(3, 4);
const multiplyResult: number = multiply(2);

console.table({ result, resultArrow, multiplyResult });