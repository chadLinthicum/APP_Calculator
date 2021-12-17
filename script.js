const calcDisplay = document.getElementById("calcDisplay");

let numberIsDisplayed = false;
let initialOperatorChosen = false;
let operatorJustPressed = false;
let equalsJustPressed = false;
let operatorStatus; 
let num1;
let num2;

document.addEventListener('click', function (e){
  if(e.target.className=="numButtons"){ 
    if (equalsJustPressed == true) {
      calcDisplay.innerText = "";
      calcDisplay.append(e.target.value);
      equalsJustPressed = false;
    } else if (numberIsDisplayed == true) {
        num1 = +calcDisplay.innerText;
        calcDisplay.innerText = ""; 
        calcDisplay.append(e.target.value);
        numberIsDisplayed = false;
        operatorJustPressed = false;
    } else {
        calcDisplay.append(e.target.value);
    }
  }
})

document.addEventListener('click', (e) => {
  if(e.target.className == "operatorButtons"){
    calculate(e);
  } else if (e.target.className == "equals"){
      calculate(e);
      numberIsDisplayed = false;
      initialOperatorChosen = false;
      operatorJustPressed = false;
      equalsJustPressed = true;
      operatorStatus; 
      num1 = 0;
      num2 = 0;
  }
})

document.addEventListener('click', function (e){
  if(e.target.id=="clear"){ 
    calcDisplay.innerText = "";
    num1 = 0;
    num2 = 0;
    numberIsDisplayed = false;
    initialOperatorChosen = false;
    operatorJustPressed = false;
    equalsJustPressed = false;
  }  
})

// document.addEventListener('click', function (e){
//   if(e.target.id === "decimal"){ 
//     if (equalsJustPressed === "true") {
//       calcDisplay.append(".");
//     }else if (calcDisplay.textContent.includes(".") && operatorJustPressed == true) {
//     } else {
//       calcDisplay.append(".");
//     }
//   }
// })

function calculate(e) {
  if (initialOperatorChosen == false && operatorJustPressed == false) {
    initialOperatorChosen = true;
    operatorStatus = e.target.value; 
    num1 = calcDisplay.innerText;
    calcDisplay.innerText = ""; 
  } else if (initialOperatorChosen == true && operatorJustPressed === false){
      switch (operatorStatus) {
        case "+": 
          num2 = +num1 + +calcDisplay.innerText;
          calcDisplay.innerText = ""; 
          calcDisplay.append(num2);
          numberIsDisplayed = true;
          operatorStatus = e.target.value; 
          operatorJustPressed = true;
          break;
        case "-": 
          num2 = +num1 - +calcDisplay.innerText;
          calcDisplay.innerText = ""; 
          calcDisplay.append(num2);
          numberIsDisplayed = true;
          operatorStatus = e.target.value; 
          operatorJustPressed = true;  
          break;
        case "*": 
          num2 = +num1 * +calcDisplay.innerText;
          calcDisplay.innerText = ""; 
          calcDisplay.append(num2);
          numberIsDisplayed = true;
          operatorStatus = e.target.value; 
          operatorJustPressed = true;
          break;
        case "÷": 
          num2 = +num1 / +calcDisplay.innerText;
          calcDisplay.innerText = ""; 
          calcDisplay.append(num2);
          numberIsDisplayed = true;
          operatorStatus = e.target.value; 
          operatorJustPressed = true;
          break;
    }  
  }
}

// document.getElementById('equals').addEventListener('click', () => {
//   console.log('equal pressed');
// })
