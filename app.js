const numButtons = document.querySelectorAll(".num");
const display = document.querySelector("#display");
const clearBtn = document.querySelector("#clear");
const operatorBtn = document.querySelectorAll(".operator");
const equalBtn = document.querySelector("#equal");


display.textContent = "0"



let currentNumber = "";
let previousNum = "";
let finalSum = "";
let currentOperator = "";





const add = function (a, b) {
    return a + b;
  };

  const subtract = function (a, b) {
    return a - b;
  };

  const multiply = function(a, b){
    return a * b;
  }

  const divide = function (a, b){
    return a / b;
  }


const clearButton = function () {
  currentNumber = "";
  previousNum = "";
  finalSum = "";
  currentNumber = "";
  display.textContent = "0";
}

clearBtn.addEventListener("click", function(){
  clearButton();
})


const operate = function(operator, a, b){
    switch(operator){
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "x":
            return multiply(a, b);
      case "/":
        return divide(a,b)        
    }
}

numButtons.forEach((btn) => {
  btn.addEventListener("click", function() {
    currentNumber += btn.textContent;
    console.log(currentNumber);
    display.textContent = currentNumber;
  })
})

operatorBtn.forEach((btn) => {
  btn.addEventListener("click", (event) =>{
    handleOperator(event.target.textContent);
  })
})

const handleOperator = function(op) {
  currentOperator =  op;
  previousNum = currentNumber;


   if(previousNum != ""){
    currentNumber = "";
    display.textContent = "0";
   }
  
}


const calculate = function () {
  previousNum = parseFloat(previousNum);;
  currentNumber = parseFloat(currentNumber);

  if(currentOperator === '+'){
  
 finalSum = operate(currentOperator, previousNum, currentNumber);
  }else if(currentOperator === "-"){
 
   finalSum = operate(currentOperator, previousNum, currentNumber);
  }else if(currentOperator === "x"){
   finalSum = operate(currentOperator, previousNum, currentNumber);
  }else if(currentOperator === "/"){
 
  finalSum = operate(currentOperator, previousNum, currentNumber);
  }
  display.textContent  = finalSum;
  currentNumber = previousNum;
}

equalBtn.addEventListener("click", function() {
  if(currentNumber != "" && previousNum != ""){
    calculate();
  }
})