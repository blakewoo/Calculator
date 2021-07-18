window.addEventListener('DOMContentLoaded', function()
{
    inputEventBinder()
    btnEventBinder()
});

function inputEventBinder() {
    let textBoxButton = document.getElementById("math_expression")
    textBoxButton.removeEventListener("keyup",expressionInputFilter)
    textBoxButton.addEventListener("keyup",expressionInputFilter)
    textBoxButton.removeEventListener("keyup",EnterEvent)
    textBoxButton.addEventListener("keyup",EnterEvent)
}

function EnterEvent(event) {
    if(event.key === 'Enter'){
        document.getElementById('calculation').click();
    }
}

function btnEventBinder() {
    let operationButtons =  document.getElementsByClassName("calc_button")
    let clearButtons =  document.getElementsByClassName("clear_calc_button")[0]
    let functionButton = document.getElementsByClassName("function_input_button");
    let calculationButton = document.getElementById("calculation");
    let viewButton = document.getElementById("calc_log")

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

    clearButtons.removeEventListener("click",clearExpressionEvent)
    clearButtons.addEventListener("click",clearExpressionEvent)

    viewButton.removeEventListener("click",viewLogEvent);
    viewButton.addEventListener("click",viewLogEvent);
}
function viewLogEvent(event) {
    location.href = location.href + "logView"
}


function expressionInputFilter(event) {
    let regexString = /[^0-9abcdfinorstu\[\](),\.\+\/\*\-]/gi;
    let target = document.getElementById("math_expression");
    if(target.value.length >0) {
        target.value = target.value.replace(regexString,"")
    }
}

function clearExpressionEvent(event){
    document.getElementById("math_expression").value = null;
}

function calcButtonEvent(event) {
    requestCalculation(document.getElementById("math_expression").value,function(result) {
        document.getElementById("calculation_result").value = result;
        requestInsertResult({name:document.getElementById("name_input").value,expression:document.getElementById("math_expression").value,result:result},function(input_result) {
            if(!input_result) {
                alert("DB에 접근간 문제가 발생했습니다.");
            }
        })

    });
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