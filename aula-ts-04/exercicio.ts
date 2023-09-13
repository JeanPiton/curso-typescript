function multiply(num1:number, num2:number):number {
    return num1 * num2;
}

function sum(num1:number|string, num2:number|string):number|void {
    let number1 = typeof num1==="number"?num1:parseFloat(num1)
    let number2 = typeof num2==="number"?num2:parseFloat(num2)
    if(isNaN(number1)||isNaN(number2)) return console.log("entrada invalida")
    return number1 * number2;
}

function isEven(num:number):boolean {
    return num % 2 === 0;
}

function showResult(result:number):void {
    if(isEven(result)) {
        console.log(`The result is ${result} and it's even!`);
    } else {
        console.log(`The result is ${result} and it's even!`);
    }
}

(() => {
    const num1 = prompt("First Number");
    const num2 = prompt("Second Number");
    
    let result = sum(num1,num2);
    if(typeof result != "number") return
    result += multiply(1,2);
    showResult(result);
})();
