/**
 * 실제 연산을 위한 전체 함수
 * @param data
 * @returns {string}
 */
exports.calculate = function (data) {

    // let input = data;
    // let middle_data = parser(input);
    let result = data.toString();
    //
    // result = final_calculate(middle_data);

    return result;
}

/**
 * 연산을 위한 핵심 코어
 * @param raw_data : InputData
 * @constructor
 */
let Calc_object = function(raw_data) {
    this.raw_data = raw_data;
    this.parsed_data = [];
    this.parsed_type = [];
    this.postfix_array = [];
}

/**
 * 전체 연산 호출 함수
 */
Calc_object.prototype.total_calculation = function () {

}

/**
 * 후위 연산식으로 변경한 식을 계산하는 함수
 * 스택을 이용해서 연산함
 */
function calculating () {
}

/**
 * 분해된 데이터를 후위 연산식으로 변경하는 함수
 */
function trans_postfix (arr,start) {

}

/**
 * 입력 값을 확인 한 뒤 숫자인지 아닌지 확인해서 확인한 인덱스를 반환하는 함수
 */
function tracing_number (arr,start) {
    let return_index = 0;



    return return_index;
}


/**
 * 입력 값을 확인 한 뒤 연산자인지 아닌지 확인해서 확인한 인덱스를 반환하는 함수
 */
function tracing_operation (arr,start) {
    let return_index = 0;



    return return_index;
}

/**
 * 입력 값을 확인 한 뒤 함수인지 아닌지 확인해서 확인한 인덱스를 반환하는 함수
 */
function tracing_fucntion (arr,start) {
    let return_index = 0;
    switch (arr[start]) {
        // abs, asin, acos, atan
        case "a" :
            if(arr[start+1]==="b"&& arr[start+2]==="s") {
                tracing_bracket(arr,start+3,3)
            }
            else if(arr[start+1]==="s"&& arr[start+2]==="i"&& arr[start+3]==="n"){
                tracing_bracket(arr,start+4,3)
            }
            else if(arr[start+1]==="c"&& arr[start+2]==="o"&& arr[start+3]==="s"){
                tracing_bracket(arr,start+4,3)
            }
            else if(arr[start+1]==="t"&& arr[start+2]==="a"&& arr[start+3]==="n"){
                tracing_bracket(arr,start+4,3)
            }
            else{

            }
            break;
        // sin
        case "s" :
            if(arr[start+1]==="i"&& arr[start+2]==="n") {
                tracing_bracket(arr,start+3,3)
            }
            else {

            }
            break;
        // cos
        case "c" :
            if(arr[start+1]==="o"&& arr[start+2]==="s") {
                tracing_bracket(arr,start+3,3)
            }
            else {

            }
            break;
        //tan
        case "t" :
            if(arr[start+1]==="a"&& arr[start+2]==="n") {
                tracing_bracket(arr,start+3,3)
            }
            else {

            }
            break;
        //round, root
        case "r" :
            if(arr[start+1]==="o" && arr[start+2]==="u" && arr[start+3]==="n" && arr[start+4]==="d" ) {
                tracing_bracket(arr,start+5,3)
            }
            else if (arr[start+1]==="o" && arr[start+2]==="o" && arr[start+3]==="t") {
                tracing_bracket(arr,start+4,3)
            }
            else {

            }
            break;
        //if
        case "i" :
            if(arr[start+1]==="f") {
                tracing_bracket(arr,start+2,3)
            }
            else {

            }
            break;
    }


    return return_index;
}

/**
 * 함수에 적절하게 괄호가 들어가 있는지 확인 하는 함수
 * bracket_flag : 1-소괄호, 2-중괄호, 3-대괄호
 */
function tracing_bracket (arr,start,bracket_flag) {
    let remain_number = 1;
    // 소괄호
    if(bracket_flag===1) {
        if(arr[start]==="(") {
            for(let i=start;i<arr.length;i++) {
                if(arr[i] === "(") remain_number++;
                if(arr[i] === ")") remain_number--;
                if(remain_number === 0) return true;
            }
        }
        return false;
    }
    // 중괄호
    else if(bracket_flag===2) {
        if(arr[start]==="{") {
            for(let i=start;i<arr.length;i++) {
                if(arr[i] === "{") remain_number++;
                if(arr[i] === "}") remain_number--;
                if(remain_number === 0) return true;
            }
        }
        return false;
    }
    // 대괄호
    else {
        if(arr[start]==="[") {
            for(let i=start;i<arr.length;i++) {
                if(arr[i] === "[") remain_number++;
                if(arr[i] === "]") remain_number--;
                if(remain_number === 0) return true;
            }
        }
        return false;
    }
}

/**
 * 2,3개 인자 함수에 적절히 쉼표가 들어가 있는지 확인 하는 함수
 * comma_flag : 1-1개, 2-2개
 */
function tracing_comma (arr,start,comma_flag) {

}

/**
 * 입력 받은 데이터를 분해해서 연산자와 피연산자로 분리, 수식 에러까지 검출
 * 입력값 : 없음
 * 반환값 : value-제대로 계산시 숫자, index-에러일때 위치 , error- 에러 일때 true 아니면 false
 */
Calc_object.prototype.parser = function () {
    let raw_data = this.raw_data;
    let function_result = null;
    // 피 연산자와 연산자를 분리한다
    // 소수와 음수 구분을 잘 할 것
    // ex) --1, 1+2+-1
    // 피연산자 배열과 연산자 배열의 유효성을 체크함
    // 실질 데이터를 넣음
    for(let current_index=0;current_index<raw_data.length;current_index++) {
        // 앞 글자씩만 체크해서 체크하는 별도의 함수 제작할것
        // 현재 index를 받아서 제일 뒷 문자열까지 체크 한 뒤 연산자인지, 피연산자인지부터 피연산자면 그 값까지 반환하는 함수를 만들어야함.

        switch (raw_data[current_index]) {
            case "1" :
            case "2" :
            case "3" :
            case "4" :
            case "5" :
            case "6" :
            case "7" :
            case "8" :
            case "9" :
            case "0" :
                // 숫자
                function_result = tracing_number(raw_data,current_index)
                continue;
            case "+" :
            case "/" :
            case "*" :
            case "-" :
            case "(" :
                // 연산자
                function_result = tracing_operation(raw_data,current_index)
                continue;
            case "a" :
            case "s" :
            case "c" :
            case "t" :
            case "r" :
            case "i" :
                // 함수
                function_result = tracing_fucntion(raw_data,current_index)
                continue;
            default:
                break;
        }
    }


}

/**
 * 파싱된 데이터를 불러오고 싶을때 쓰는 함수
 * @returns {[]}
 */
Calc_object.prototype.get_parsed_data = function () {
    return this.parsed_data;
}


/**
 * 더하기 함수 : 숫자 아닌것, 최소 최대 예외처리 되어잇음
 * @param input_a : 피연산자1
 * @param input_b : 피연산자2
 * @returns {number} : 반환값
 */
Calc_object.prototype.plus = function (input_a,input_b) {
    if(isNumber(input_a) && isNumber(input_b)) {
        input_a = isMinMax(input_a)
        input_b = isMinMax(input_b)
        if(isFinite(input_a+input_b)) {
            return Number(input_a+input_b);
        }
        else if(input_a+input_b>0) {
            return Infinity;
        }
        else {
            return -Infinity;
        }
    }
    else {
        return NaN;
    }
}

/**
 * 뺄셈 함수 : 숫자가 아닌 것, 최소 최대 예외처리
 * @param input_a : 피연산자1
 * @param input_b : 피연산자2
 * @returns {number} : 반환값
 */
Calc_object.prototype.minus=function(input_a,input_b) {
    if(isNumber(input_a) && isNumber(input_b)) {
        input_a = isMinMax(input_a)
        input_b = isMinMax(input_b)
        if(isFinite(input_a-input_b)) {
            return Number(input_a-input_b);
        }
        else if(input_a-input_b>0) {
            return Infinity;
        }
        else {
            return -Infinity;
        }

    }
    else {
        return NaN;
    }
}

/**
 * 곱셈 함수 : 숫자가 아닌것, 최대최소 예외처리
 * @param input_a : 피연산자1
 * @param input_b : 피연산자2
 * @returns {number} : 결과 값
 */
Calc_object.prototype.mul = function(input_a,input_b) {

    if(isNumber(input_a) && isNumber(input_b)) {
        input_a = isMinMax(input_a)
        input_b = isMinMax(input_b)

        if((!isFinite(input_a)&&input_b===0)||(!isFinite(input_b)&&input_a===0)) {
            return NaN;
        }
        else {
            if(isFinite(input_a*input_b)) {
                return Number(input_a*input_b);
            }
            else if(input_a*input_b>0) {

                return Infinity;
            }
            else {
                return -Infinity;
            }
        }
    }
    else {
        return NaN;
    }
}

/**
 * 나눗셈 함수 : 숫자가 아닌 것, 최대 최소, 0으로 나누기 예외처리
 * @param input_a : 피연산자1
 * @param input_b : 피연산자2
 * @returns {number} : 결과
 */
Calc_object.prototype.div = function(input_a,input_b) {

    if(isNumber(input_a) && isNumber(input_b)) {

        input_a = isMinMax(input_a)
        input_b = isMinMax(input_b)
        if((!isFinite(input_a)&&input_b===0)||(!isFinite(input_b)&&input_a===0)) {
            return NaN;
        }
        else {
            if(isFinite(input_a/input_b)) {
                return Number(input_a/input_b);
            }
            else if(input_a>0) {
                return Infinity;
            }
            else if(input_a === 0) {
                return NaN;
            }
            else {
                return -Infinity;
            }
        }
    }
    else {
        return NaN;
    }
}

/**
 * if 함수 : 조건문에 대해서 적절한 값인지 체크
 * @param input_a : 조건문
 * @param input_b : true
 * @param input_c : false
 * @returns {*} : 반환값
 */
Calc_object.prototype.if = function (input_a,input_b,input_c) {
    // 정규식으로 적절한 값 예외처리, 적절하지 않으면 NaN 반환
    let temp_arr = input_a.split(/[^0-9.]/)
    let result_op = [];
    let result_arr = [];
    let temp_op = input_a.split(/[0-9.]/)

    temp_arr.forEach(function (obj) {if(obj!=="") {result_arr.push(obj)}})
    temp_op.forEach(function (obj) {if(obj!=="") {result_op.push(obj)}})

    let op_code = result_op[0]
    let result_arr_a = result_arr[0]
    let result_arr_b = result_arr[1]

    if(!isNumber(result_arr_a))
    {
        return NaN;
    }

    if(!isNumber(result_arr_b)) {
        return NaN;
    }

    if(op_code === "<=") {
        if(result_arr_a<=result_arr_b) {
            return input_b;
        }
        else {
            return input_c;
        }
    }
    else if(op_code === ">=") {
        if(result_arr_a>=result_arr_b) {
            return input_b;
        }
        else {
            return input_c;
        }
    }
    else if(op_code === "<") {
        if(result_arr_a<result_arr_b) {
            return input_b;
        }
        else {
            return input_c;
        }
    }
    else if(op_code === ">") {
        if(result_arr_a>result_arr_b) {
            return input_b;
        }
        else {
            return input_c;
        }
    }
    else if(op_code === "=") {
        if(result_arr_a===result_arr_b) {
            return input_b;
        }
        else {
            return input_c;
        }
    }
    else if(op_code === "!=") {
        if(result_arr_a!==result_arr_b) {
            return input_b;
        }
        else {
            return input_c;
        }
    }
    else {
        return NaN;
    }
}

/**
 * 절대값 함수 : 숫자가 아닌것, 최대최소 예외처리
 * @param input_a : 피연산자1
 * @returns {*|number|number} : 결과값
 */
Calc_object.prototype.abs = function (input_a) {
    // 인자로 0 혹은 무한, 숫자 아닌것 걸러내기
    if(isNumber(input_a)) {
        input_a = isMinMax(input_a)
        if(isFinite(input_a)) {
            if(input_a<0) {
                return -input_a;
            }
            else {
                return input_a;
            }
        }
        else {
            return Infinity;
        }
    }
    else {
        return NaN;
    }
}

/**
 * 반올림 함수 : 숫자가 아닌 것, 예외처리
 * @param input_a : 피연산자1
 * @param input_b : 피연산자2
 * @returns {number|string|*|string} : 반환값
 */
Calc_object.prototype.round = function (input_a,input_b) {

    if(isNumber(input_a) && isNumber(input_b)) {
        input_a = isMinMax(input_a)
        if (isInteger(input_b)) {
            input_b = isMinMax(input_b)
            return input_a.toFixed(input_b);
        }
        else{
            return NaN;
        }
    }
    else {
        return NaN;
    }
}

/**
 * 루트 함수 : 숫자가 아닌 것, 최대최소, 음수 예외처리
 * @param input_a : 피연산자1
 * @returns {number} : 반환값
 */
Calc_object.prototype.root = function (input_a) {
    if(isNumber(input_a)) {
        if(input_a<0) {
            return NaN;
        }
        else {
            input_a = isMinMax(input_a)
            if(input_a === 0) {
                return 0
            }
            else {
                return Math.sqrt(input_a);
            }
        }
    }
    else{
        return NaN;
    }
}

/**
 * sin 함수 : 숫자가 아닌것, 최대최소 예외처리
 * @param input_a : 피연산자1
 * @returns {number} : 반환값
 */
Calc_object.prototype.sin = function (input_a) {
    if(isNumber(input_a)) {
        input_a = isMinMax(input_a);
        return Math.sin(degreeToRadian(input_a));
    }
    else {
        return NaN;
    }

}

/**
 * cos 함수 : 숫자가 아닌것, 최대최소 예외처리
 * @param input_a : 피연산자1
 * @returns {number} : 반환값
 */
Calc_object.prototype.cos = function (input_a) {
    if(isNumber(input_a)) {
        input_a=isMinMax(input_a)
        return Math.cos(degreeToRadian(input_a));
    }
    else {
        return NaN;
    }
}

/**
 * tan 함수 : 숫자가 아닌것, 최대최소 예외처리
 * @param input_a : 피연산자1
 * @returns {number} : 반환값
 */
Calc_object.prototype.tan = function (input_a) {
    if(isNumber(input_a)) {
        if(input_a>=90) {
            return Infinity;
        }
        else if(input_a<=-90) {
            return -Infinity;
        }
        else {
            input_a = isMinMax(input_a)
            return Math.tan(degreeToRadian(input_a));
        }
    }
    else {
        return NaN;
    }
}

/**
 * tan 함수 : 숫자가 아닌것, 최대최소 예외처리
 * @param input_a : 피연산자1
 * @returns {number} : 반환값
 */
Calc_object.prototype.atan = function (input_a) {
    if(isNumber(input_a)){
        input_a = isMinMax(input_a)
        return radianToDegree(Math.atan(input_a))
    }
    else {
        return NaN;
    }
}

/**
 * sin 역함수 : 최대최소, 숫자가 아닌것 예외처리
 * @param input_a : 피연산자
 * @returns {number} : 반환값
 */
Calc_object.prototype.asin = function (input_a) {
    if(isNumber(input_a)) {
        if (input_a < -1 || input_a > 1) {
            return NaN;
        } else {
            input_a = isMinMax(input_a)
            return radianToDegree(Math.asin(input_a));
        }
    }
    else {
        return NaN;
    }
}

/**
 * cos 역함수 : 최대최소, 숫자가 아닌것 예외처리
 * @param input_a : 피연산자
 * @returns {number} : 반환값
 */
Calc_object.prototype.acos = function (input_a) {
    if(isNumber(input_a)) {
        if(input_a<-1 || input_a>1) {
            return NaN;
        }
        else {
            input_a = isMinMax(input_a)
            console.log(input_a)
            return radianToDegree(Math.acos(input_a))
        }
    }
    else {
        return NaN;
    }
}

/**
 * 최대 최소 처리
 * @param input_a : 피연산자
 * @returns {number} : 반환값
 */
function isMinMax(input_a) {
    if(input_a<Number('1e-15') && input_a>0) {
        input_a =0;
    }
    else if(input_a>-Number('1e-15') && input_a<0) {
        input_a =0;
    }
    else if(input_a>Number('1e+15')) {
        input_a = Infinity;
    }
    else if(input_a<-Number('1e+15')) {
        input_a = -Infinity;
    }
    return input_a;
}

/**
 * 숫자인지 확인 함수
 * @param input_a : 피연산자
 * @returns {boolean|number} : 반환값
 */
function isNumber (input_a) {
    if(input_a===null) {
        return NaN;
    }
    else {
        return !isNaN(input_a)
    }
}

/**
 * 도를 라디안으로 변환
 * @param input_a : 피연산자
 * @returns {number} : 반환값
 */
function degreeToRadian(input_a) {
    const pi = Math.PI;
    return input_a*(pi/180);
}

/**
 * 라디안을 도로 변환
 * @param input_a : 피연산자
 * @returns {number} : 반환값
 */
function radianToDegree(input_a) {
    const pi = Math.PI;
    return input_a*(180/pi);
}

/**
 * 해당 값이 정수인지 체크하는 함수
 * @param number
 * @returns {boolean}
 */
function isInteger(number)  {
    return number % 1 === 0;
}

module.exports.Calc_object = Calc_object;
