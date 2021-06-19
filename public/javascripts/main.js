window.addEventListener('DOMContentLoaded', function()
{
    btnEventBinder()

});


function btnEventBinder() {
    let operationButtons =  document.getElementsByClassName("calc_button")
    let functionButton = document.getElementsByClassName("function_input_button");
    let calculationButton = document.getElementById("calculation");
    for(let i=0;i<operationButtons.length;i++) {
        operationButtons[i].removeEventListener("click",opBtnEvent)
        operationButtons[i].addEventListener("click",opBtnEvent)
    }

    for(let i=0;i<functionButton.length;i++) {
        functionButton[i].removeEventListener("click",funcBtnEvent)
        functionButton[i].addEventListener("click",funcBtnEvent)
    }

    calculationButton.removeEventListener("click",calcButtonEvent)
    calculationButton.addEventListener("click",calcButtonEvent)
}

function calcButtonEvent(event) {
    requestCalculation();
}

function opBtnEvent(event) {
    document.getElementById("math_expression").value += event.currentTarget.value;
}

function funcBtnEvent(event) {
    let currentValue= event.currentTarget.value;
    let inputData = "";
    //sin, cos, tan, asin, acos, atan, root, round, if
    if(currentValue === "if") {
        inputData = currentValue + "[,,]"
    }
    else if(currentValue === "sin") {
        inputData = currentValue + "[]"
    }
    else if(currentValue === "cos") {
        inputData = currentValue + "[]"
    }
    else if(currentValue === "tan") {
        inputData = currentValue + "[]"
    }
    else if(currentValue === "asin") {
        inputData = currentValue + "[]"
    }
    else if(currentValue === "acos") {
        inputData = currentValue + "[]"
    }
    else if(currentValue === "atan") {
        inputData = currentValue + "[]"
    }
    else if(currentValue === "root") {
        inputData = currentValue + "[]"
    }
    else if(currentValue === "round") {
        inputData = currentValue + "[,]"
    }
    else if(currentValue === "sin") {
        inputData = currentValue + "[]"
    }

    document.getElementById("math_expression").value += inputData;
}

/**
 * 함수 생성시 포커스 함수
 * @param number
 */
function setCaret(number) {
    var el = document.getElementById("math_expression")

}