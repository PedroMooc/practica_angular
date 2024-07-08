//Funciones Basicas
function addNumbers(a: number, b: number){
    return a+ b
}

//Funciones Arrow 
const addNumbersArrow = (a: number, b: number) => {
    return `${a + b}` 
}

//Funciones con argumentos opcionales o definidos
function multiply(firstNumber: number, secondNumber?: number, base: number= 2){
    return firstNumber * base;
}

const resultBasic: number = addNumbers(1,2) 
const resultArrow: string = addNumbersArrow(1,2)
const resultMultiply: number = multiply(1,2); 

//console.log({resultBasic, resultArrow, resultMultiply})

//Funciones con objetos como argumentos

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter =(character: Character, amount: number) => {
    character.hp += amount;
} 
 
const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp(){
        console.log(`Puntos de vida ${this.hp}`);
    }
}

healCharacter(strider, 10);
healCharacter(strider, 20);


strider.showHp();