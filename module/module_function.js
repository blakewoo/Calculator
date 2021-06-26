/** 에러 코드 정의
 *  숫자
 *  N-1 : 연산 가능한 범위를 넘어섬
 *  N-2 : 소수점의 개수가 적절하지 못함 EX) 1.1.1
 *  N-3 : 숫자가 아닙니다.
 *  연산자
 *  O-1 : 연속될 수 없는 연산자가 연속되어 나타났습니다.
 *  함수
 *  F-1 : 인식 할 수 없는 함수입니다.
 *  F-2 : 함수의 인자 형태가 적절하지 않습니다.
 *  F-3 : 함수의 인자 개수가 적절하지 않습니다.
 *  F-4 : 괄호의 개수가 맞지 않습니다.
 *  F-5 : 괄호의 형태가 맞지 않습니다.
 *  함수 에러 코드 :
 *  sin, cos, tan, asin, acos, atan, root, round, if
 *  그밖에
 *  E-1 : 네트워크 연결에 문제가 있습니다.
 *  E-2 : 적합하지 못한 요청입니다.
 */


/**
 *  파싱 타입
 *  Number
 *  Operation
 *  function
 *  small_left_bracket
 *  small_right_bracket
 *  big_left_bracket
 *  big_right_bracket
 */

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
    this.postfix_array_data = [];
    this.postfix_array_type = [];
    this.postfix_array_index = [];
    this.parsed_index = [];
    this.operation_rank = new Map([
        ["+", 0],
        ["*", 1],
        ["-", 0],
        ["/", 1],
        ["sin", 1],
        ["cos", 1],
        ["tan", 1],
        ["atan", 1],
        ["acos", 1],
        ["asin", 1],
        ["round", 1],
        ["root", 1],
        ["if", 1],
        ["abs", 1],
        [">", 1],
        ["<", 1],
        ["<=", 1],
        [">=", 1],
        ["=", 1],
        ["!=", 1],

    ])
}

/**
 * 전체 연산 호출 함수
 */
Calc_object.prototype.total_calculation = function () {
    let result = calculating(this.postfix_array_data,this.postfix_array_type,this.postfix_array_index);
    return result;
}

/**
 * postfix 변환된거 출력하는 함수
 */
Calc_object.prototype.postfix_trans = function () {
    let result = trans_postfix (this.operation_rank,this.postfix_array_data,this.postfix_array_type,this.postfix_array_index,this.parsed_data,this.parsed_type,this.parsed_index)
    //예외 처리
    if(result.error){

    }
}

/**
 * 후위 연산식으로 변경한 식을 계산하는 함수
 * 스택을 이용해서 연산함
 */
function calculating (postfix_array_data,postfix_array_type,postfix_array_index) {
    let postfix_data = postfix_array_data;
    let postfix_type = postfix_array_type;
    let postfix_index = postfix_array_index;
    let calc_stack = [];
    let tempInput1;
    let tempInput2;
    let tempInput3;
    let tempResult;

    for(let i=0;i<postfix_data.length;i++) {
        if(postfix_type[i] === "Number") {
            calc_stack.push(postfix_data[i]);
        }
        else if(postfix_type[i] === "Operation") {
            tempInput1 = calc_stack.pop()
            tempInput2 = calc_stack.pop()
            if(postfix_data[i] === "+") {
                tempResult = Calc_object.prototype.plus(tempInput2,tempInput1);
            }
            else if (postfix_data[i] === "-") {
                tempResult = Calc_object.prototype.minus(tempInput2,tempInput1);
            }
            else if (postfix_data[i] === "*") {
                tempResult = Calc_object.prototype.mul(tempInput2,tempInput1);
            }
            else if (postfix_data[i] === "/") {
                tempResult = Calc_object.prototype.div(tempInput2,tempInput1);
            }
            else if (postfix_data[i] === "<") {
                tempResult = Calc_object.prototype.div(tempInput2,tempInput1);
            }
            else if (postfix_data[i] === ">") {
                tempResult = Calc_object.prototype.div(tempInput2,tempInput1);
            }
            else if (postfix_data[i] === "<=") {
                tempResult = Calc_object.prototype.div(tempInput2,tempInput1);
            }
            else if (postfix_data[i] === ">=") {
                tempResult = Calc_object.prototype.div(tempInput2,tempInput1);
            }
            else if (postfix_data[i] === "=") {
                tempResult = Calc_object.prototype.div(tempInput2,tempInput1);
            }
            else if (postfix_data[i] === "!=") {
                tempResult = Calc_object.prototype.div(tempInput2,tempInput1);
            }

            if(isNaN(tempResult)) {
                return {isError:true,errorCode:"F-2",errorIndex:postfix_index[i]}
            }
            else if(!isFinite(tempResult)) {
                return {isError:true,errorCode:"N-1",errorIndex:postfix_index[i]}
            }

            calc_stack.push(tempResult);

        }
        else if(postfix_type[i] === "Function") {
            tempInput1 = calc_stack.pop()

            if(postfix_data[i] === "if") {
                tempInput2 = calc_stack.pop()
                tempInput3 = calc_stack.pop()
                tempResult = Calc_object.prototype.if(tempInput1,tempInput2,tempInput3);
            }
            else if (postfix_data[i] === "abs") {
                tempResult = Calc_object.prototype.abs(tempInput1);
            }
            else if (postfix_data[i] === "asin") {
                tempResult = Calc_object.prototype.asin(tempInput1);
            }
            else if (postfix_data[i] === "acos") {
                tempResult = Calc_object.prototype.acos(tempInput1);
            }
            else if (postfix_data[i] === "atan") {
                tempResult = Calc_object.prototype.atan(tempInput1);
            }
            else if (postfix_data[i] === "sin") {
                tempResult = Calc_object.prototype.sin(tempInput1);
            }
            else if (postfix_data[i] === "cos") {
                tempResult = Calc_object.prototype.cos(tempInput1);
            }
            else if (postfix_data[i] === "tan") {
                tempResult = Calc_object.prototype.tan(tempInput1);
            }
            else if (postfix_data[i] === "root") {
                tempResult = Calc_object.prototype.root(tempInput1);
            }
            else if (postfix_data[i] === "round") {
                tempInput2 = calc_stack.pop()
                tempResult = Calc_object.prototype.round(tempInput2,tempInput1);
            }

            calc_stack.push(tempResult);
        }
        // 에러 처리
        else {

        }
    }

    return calc_stack.pop();
}

/**
 * 분해된 데이터를 후위 연산식으로 변경하는 함수
 */
function trans_postfix (g_operation_rank,g_postfix_array_data,g_postfix_array_type,g_postfix_array_index,g_parsed_data,g_parsed_type,g_parsed_index) {
    let operation_rank = g_operation_rank;

    // 후위 연산 배열
    let postfix_array_data = g_postfix_array_data;
    let postfix_array_type = g_postfix_array_type;
    let postfix_array_index = g_postfix_array_index;

    // 연산자, 피연산자로 뜯어진 배열
    let parsed_data = g_parsed_data;
    let parsed_type = g_parsed_type;
    let parsed_index = g_parsed_index;

    // 후위 연산 변환을 위한 스택
    let data_stack = [];
    let type_stack = [];
    let index_stack = [];

    for(let i=0;i<parsed_data.length;i++) {
        if(parsed_type[i]==="Number") {
            postfix_array_data.push(parsed_data[i])
            postfix_array_type.push(parsed_type[i]);
            postfix_array_index.push(parsed_index[i]);
        }
        else if(parsed_type[i]==="Operation" || parsed_type[i]==="function") {
            while(data_stack.length !==0 && operation_rank.get(data_stack[data_stack.length-1])>=operation_rank.get(parsed_data[i]) ) {
                postfix_array_data.push(data_stack.pop());
                postfix_array_type.push(type_stack.pop());
                postfix_array_index.push(index_stack.pop());
            }

            data_stack.push(parsed_data[i]);
            type_stack.push(parsed_type[i]);
            index_stack.push(parsed_index[i]);
        }
        else if(parsed_type[i]==="small_left_bracket") {
            data_stack.push(parsed_data[i])
            type_stack.push(parsed_type[i]);
            index_stack.push(parsed_index[i]);
        }
        else if(parsed_type[i]==="small_right_bracket") {
            let state = data_stack[data_stack.length-1]
            while(state !== undefined && state!=="(") {
                postfix_array_data.push(data_stack.pop());
                postfix_array_type.push(type_stack.pop());
                postfix_array_index.push(index_stack.pop());
                state = data_stack[data_stack.length-1]
            }
            data_stack.pop()
            type_stack.pop()
            index_stack.pop()
        }
        else {
            return {error:true,index:i};
        }
    }
    while(data_stack.length !==0) {
        postfix_array_data.push(data_stack.pop());
        postfix_array_type.push(type_stack.pop());
        postfix_array_index.push(index_stack.pop());
    }

    return {error:false};
}

/**
 * 입력 값을 확인 한 뒤 숫자인지 아닌지 확인해서 확인한 인덱스를 반환하는 함수
 */
function tracing_number (arr,start,parsed_data,parsed_type,parsed_index) {
    let temp_number = "";
    let check_dot = 1;
    let number_flag = false;
    for(let i=start;i<arr.length;i++) {
        if(Number(arr[i])>=0 && Number(arr[i])<=9) {
            temp_number += arr[i];
            number_flag = true;
        }
        else if(i===start && arr[i]==="." && check_dot===1) {
            // 에러임
            return false
        }
        else if(arr[i]==="." && check_dot===1) {
            temp_number += arr[i];
            number_flag = false;
            // 이 값은 소수 단위로 넘어감
        }
        else if(arr[i]==="." && check_dot===0) {
            return false
            //에러 처리
        }
        else {
            if( number_flag ===false) {
                return false
                // 에러처리
            }
            else {
                parsed_data.push(Number(temp_number))
                parsed_type.push("Number")
                parsed_index.push(start)
                return i;
                // 완료 값 반환
            }
        }
    }
    if( number_flag ===false) {
        return false
        // 에러처리
    }
    else {
        parsed_data.push(Number(temp_number))
        parsed_type.push("Number")
        parsed_index.push(start)
        return arr.length;
        // 완료 값 반환
    }

}


/**
 * 입력 값을 확인 한 뒤 연산자인지 아닌지 확인해서 확인한 인덱스를 반환하는 함수
 */
function tracing_operation (arr,start,parsed_data,parsed_type,parsed_index) {
    if(arr[start] === "+") {
        parsed_data.push("+")
        parsed_type.push("Operation")
    }
    else if(arr[start] === "-") {
        parsed_data.push("-")
        parsed_type.push("Operation")
    }
    else if(arr[start] === "*") {
        parsed_data.push("*")
        parsed_type.push("Operation")
    }
    else if(arr[start] === "/") {
        parsed_data.push("/")
        parsed_type.push("Operation")
    }
    else if(arr[start] === "<" && arr[start+1] === "=") {
        parsed_data.push("<=")
        parsed_type.push("Operation")
        parsed_index.push(start)
        return start+1;
    }
    else if(arr[start] === ">" && arr[start+1] === "=") {
        parsed_data.push(">=")
        parsed_type.push("Operation")
        parsed_index.push(start)
        return start+1;
    }
    else if(arr[start] === "<") {
        parsed_data.push("<")
        parsed_type.push("Operation")
    }
    else if(arr[start] === ">") {
        parsed_data.push(">")
        parsed_type.push("Operation")
    }
    else if(arr[start] === "!"&& arr[start+1] === "=") {
        parsed_data.push("!=")
        parsed_type.push("Operation")
        parsed_index.push(start)
        return start+1;
    }
    else if(arr[start] === "=") {
        parsed_data.push("=")
        parsed_type.push("Operation")
    }
    parsed_index.push(start)
    return start;
}

/**
 * 입력 값을 확인 한 뒤 함수인지 아닌지 확인해서 확인한 인덱스를 반환하는 함수
 * 적절하지 못한 값일때 false 처리함
 * arr의 길이를 넘는 위치를 체크하려고 한다면 에러 처리
 */
function tracing_fucntion (arr,start,parsed_data,parsed_type,parsed_index) {
    let return_index = 0;
    switch (arr[start]) {
        // abs, asin, acos, atan
        case "a" :
            if(arr[start+1]==="b"&& arr[start+2]==="s") {
                if(tracing_bracket(arr,start+3,3)) {
                    parsed_data.push("abs");
                    parsed_type.push("function");
                    return {error:false,index:start+3};
                }
                else {
                    return {error:true,error_code:"F-4",error_index:start};
                }
            }
            else if(arr[start+1]==="s"&& arr[start+2]==="i"&& arr[start+3]==="n"){
                if(tracing_bracket(arr,start+4,3)){
                    parsed_data.push("asin");
                    parsed_type.push("function");
                    return {error:false,index:start+4};
                }
                else {
                    return {error:true,error_code:"F-4",error_index:start};
                }
            }
            else if(arr[start+1]==="c"&& arr[start+2]==="o"&& arr[start+3]==="s"){
                if(tracing_bracket(arr,start+4,3)){
                    parsed_data.push("acos");
                    parsed_type.push("function");
                    return {error:false,index:start+4};
                }
                else {
                    return {error:true,error_code:"F-4",error_index:start};
                }
            }
            else if(arr[start+1]==="t"&& arr[start+2]==="a"&& arr[start+3]==="n"){
                if(tracing_bracket(arr,start+4,3)){
                    parsed_data.push("atan");
                    parsed_type.push("function");
                    return {error:false,index:start+4};
                }
                else {
                    return {error:true,error_code:"F-4",error_index:start};
                }
            }
            else{
                return false
            }
            break;
        // sin
        case "s" :
            if(arr[start+1]==="i"&& arr[start+2]==="n") {
                if(tracing_bracket(arr,start+3,3)){
                    parsed_data.push("sin");
                    parsed_type.push("function");
                    return {error:false,index:start+3};
                }
                else {
                    return {error:true,error_code:"F-4",error_index:start};
                }
            }
            else {

            }
            break;
        // cos
        case "c" :
            if(arr[start+1]==="o"&& arr[start+2]==="s") {
                if(tracing_bracket(arr,start+3,3)){
                    parsed_data.push("cos");
                    parsed_type.push("function");
                    return {error:false,index:start+3};
                }
                else {
                    return {error:true,error_code:"F-4",error_index:start};
                }
            }
            else {

            }
            break;
        //tan
        case "t" :
            if(arr[start+1]==="a"&& arr[start+2]==="n") {
                if(tracing_bracket(arr,start+3,3)){
                    parsed_data.push("tan");
                    parsed_type.push("function");
                    return {error:false,index:start+3};
                }
                else {
                    return {error:true,error_code:"F-4",error_index:start};
                }

            }
            else {

            }
            break;
        //round, root
        case "r" :
            if(arr[start+1]==="o" && arr[start+2]==="u" && arr[start+3]==="n" && arr[start+4]==="d" ) {
                if(tracing_bracket(arr,start+5,3)){
                    if(tracing_comma(arr,start+5,1)) {
                        parsed_data.push("round");
                        parsed_type.push("function");
                        return {error:false,index:start+5};
                    }
                    else {
                        return {error:true,error_code:"F-3",error_index:start};
                    }
                }
                else {
                    return {error:true,error_code:"F-4",error_index:start};
                }

            }
            else if (arr[start+1]==="o" && arr[start+2]==="o" && arr[start+3]==="t") {
                if(tracing_bracket(arr,start+4,3)){
                    parsed_data.push("root");
                    parsed_type.push("function");
                    return {error:false,index:start+4};
                }
                else {
                    return {error:true,error_code:"F-4",error_index:start};
                }
            }
            else {

            }
            break;
        //if
        case "i" :
            if(arr[start+1]==="f") {
                if(tracing_bracket(arr,start+2,3)){
                    if(tracing_comma(arr,start+2,2)) {
                        parsed_data.push("if");
                        parsed_type.push("function");
                        return {error:false,index:start+2};
                    }
                    else {
                        return {error:true,error_code:"F-3",error_index:start};
                    }
                }
                else {
                    return {error:true,error_code:"F-4",error_index:start};
                }
            }
            else {

            }
            break;
        default:
            parsed_index.push(start);
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
            for(let i=start+1;i<arr.length;i++) {
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
            for(let i=start+1;i<arr.length;i++) {
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
            for(let i=start+1;i<arr.length;i++) {
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
 * 괄호도 체크할 것
 * comma_flag : 1-1개, 2-2개
 */
function tracing_comma (arr,start,comma_flag) {
    let comma_num = comma_flag;
    let bracket = 0;
    for(let i=start;i<arr.length;i++) {
        if(comma_num===0 && bracket ===0) {
            return true;
        }
        if(arr[i] === "["){
            bracket ++;
        }
        if(arr[i] === "]") {
            bracket--;
        }
        if(arr[i]==="," && bracket === 1) {
            --comma_num;
        }
    }

    if(comma_num !== 0) {
        return false;
    }
    else {
        return true;
    }
}

/**
 * 내부 인자 체크하는 함수
 *
 */
function tracing_inner_text (arr,start,comma_flag) {
    let comma_num = comma_flag;
    if(arr[start]===",") {
        return false;
    }
    for(let i=start;i<arr.length;i++) {
        if(arr[i]===",") {
            --comma_num;
        }
        else if(arr[i]==="," && comma_num===-1) {
            return false;
        }
    }
}

/**
 * 입력 받은 데이터를 분해해서 연산자와 피연산자로 분리, 수식 에러까지 검출
 * 입력값 : 없음
 * 반환값 : value-제대로 계산시 숫자, index-에러일때 위치 , error- 에러 일때 true 아니면 false
 */
Calc_object.prototype.parser = function () {
    let raw_data = this.raw_data;
    let parsed_data = this.parsed_data;
    let parsed_type = this.parsed_type;
    let parsed_index = this.parsed_index;
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
                function_result = tracing_number(raw_data,current_index,parsed_data,parsed_type,parsed_index)
                if(function_result) {
                    current_index = function_result-1;
                }
                else {
                    return {error:true,error_index:current_index};
                }
                continue;
            case "+" :
            case "/" :
            case "*" :
            case "-" :
                function_result = tracing_minus(raw_data,current_index,parsed_data,parsed_type,parsed_index)
                if(function_result) {
                    continue;
                }
            case ">" :
            case "<" :
            case "!" :
            case "=" :
                // 연산자
                function_result = tracing_operation(raw_data,current_index,parsed_data,parsed_type,parsed_index)
                if(function_result) {
                    current_index = function_result;
                }
                else {
                    return {error:true,error_index:current_index};
                }
                continue;
            case "a" :
            case "s" :
            case "c" :
            case "t" :
            case "r" :
            case "i" :
                // 함수
                function_result = tracing_fucntion(raw_data,current_index,parsed_data,parsed_type,parsed_index)
                if(function_result.error) {
                    return {error:true,error_index:current_index};
                }
                else {
                    parsed_index.push(current_index);
                    current_index = function_result.index;
                }
                continue;
            case "(" :
                if(tracing_bracket(raw_data,current_index,1)) {
                    parsed_data.push("(");
                    parsed_type.push("small_left_bracket");
                    parsed_index.push(current_index)
                    continue;
                }
                else {
                    return {error:true,error_index:current_index};
                }
            case ")" :
                // 닫는 소괄호 검출 함수 있어야함.
                parsed_data.push(")");
                parsed_type.push("small_right_bracket");
                parsed_index.push(current_index)
                continue;
            case "[" :
            case "]" :
            case "." :
            case "," :
                continue;
            default:
                return {error:true,error_index:current_index};
        }
    }


}


/**
 * 음수 검출 함수
 * @param raw_data : 데이터배열
 * @param current_index : 현재인덱스
 * @param parsed_data : 입력데이터
 * @param parsed_type : 입력타입
 * @param parsed_index : 입력인덱스
 * @returns {boolean}
 */
function tracing_minus(raw_data,current_index,parsed_data,parsed_type,parsed_index) {
    if(current_index === 0) {
        switch(raw_data[current_index+1]) {
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case "0":
            case "a" :
            case "s" :
            case "c" :
            case "t" :
            case "r" :
            case "i" :
            case "(" :
                parsed_data.push(-1);
                parsed_type.push("Number");
                parsed_index.push(current_index);
                parsed_data.push("*");
                parsed_type.push("Operation");
                parsed_index.push(current_index);
                return true
            default:
                return false;

        }
    }
    else{
        switch(raw_data[current_index-1]) {
            case "+":
            case "-":
            case "*":
            case "/":
            case "[":
            case "(":
                parsed_data.push(-1);
                parsed_type.push("Number");
                parsed_index.push(current_index);
                parsed_data.push("*");
                parsed_type.push("Operation");
                parsed_index.push(current_index);
                return true
            default:
                return false;
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
 * 파싱된 데이터를 불러오고 싶을때 쓰는 함수
 * @returns {[]}
 */
Calc_object.prototype.get_parsed_type = function () {
    return this.parsed_type;
}

/**
 * 인덱스 배열을 불러오고 싶을때 쓰는 함수
 * @returns {[]}
 */
Calc_object.prototype.get_parsed_index = function () {
    return this.parsed_index;
}

/**
 * 후위연산식 배열을 불러오고 싶을때 쓰는 함수
 * @returns {[]}
 */
Calc_object.prototype.get_post_fix = function () {
    return this.postfix_array_data;
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

    if(!isNumber(input_b))
    {
        return NaN;
    }

    if(!isNumber(input_c)) {
        return NaN;
    }

    if(input_a) {
        return input_b;
    }
    else {
        return input_c;
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
        if (isInteger(input_b) && 1<=Number(input_b) && 100>= Number(input_b)) {
            input_b = isMinMax(input_b)
            return Number(input_a.toFixed(input_b));
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
            return radianToDegree(Math.acos(input_a))
        }
    }
    else {
        return NaN;
    }
}

/**
 * < 크다 : 최대최소, 숫자가 아닌것 예외처리
 * @param input_a : 피연산자1
 * @param input_b : 피연산자2
 * @returns {boolean} : 반환값
 */
Calc_object.prototype.bigger = function (input_a,input_b) {
    if(isNumber(input_a) && isNumber(input_b)) {
        input_a = isMinMax(input_a)
        input_b = isMinMax(input_b)
        if(input_a<input_b){
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return NaN;
    }
}

/**
 * <= 크거나 같다 : 최대최소, 숫자가 아닌것 예외처리
 * @param input_a : 피연산자1
 * @param input_b : 피연산자2
 * @returns {boolean} : 반환값
 */
Calc_object.prototype.biggerEqual = function (input_a,input_b) {
    if(isNumber(input_a) && isNumber(input_b)) {
        input_a = isMinMax(input_a)
        input_b = isMinMax(input_b)
        if(input_a<=input_b){
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return NaN;
    }
}

/**
 * > 작다 : 최대최소, 숫자가 아닌것 예외처리
 * @param input_a : 피연산자1
 * @param input_b : 피연산자2
 * @returns {boolean} : 반환값
 */
Calc_object.prototype.smaller = function (input_a,input_b) {
    if(isNumber(input_a) && isNumber(input_b)) {
        input_a = isMinMax(input_a)
        input_b = isMinMax(input_b)
        if(input_a>input_b){
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return NaN;
    }
}

/**
 * >= 작거나 같다 : 최대최소, 숫자가 아닌것 예외처리
 * @param input_a : 피연산자1
 * @param input_b : 피연산자2
 * @returns {boolean} : 반환값
 */
Calc_object.prototype.smallerEqual = function (input_a,input_b) {
    if(isNumber(input_a) && isNumber(input_b)) {
        input_a = isMinMax(input_a)
        input_b = isMinMax(input_b)
        if(input_a>=input_b){
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return NaN;
    }
}

/**
 * = 같다 : 최대최소, 숫자가 아닌것 예외처리
 * @param input_a : 피연산자1
 * @param input_b : 피연산자2
 * @returns {boolean} : 반환값
 */
Calc_object.prototype.equal = function (input_a,input_b) {
    if(isNumber(input_a) && isNumber(input_b)) {
        input_a = isMinMax(input_a)
        input_b = isMinMax(input_b)
        if(input_a === input_b){
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return NaN;
    }
}

/**
 * != 같지 않다 : 최대최소, 숫자가 아닌것 예외처리
 * @param input_a : 피연산자1
 * @param input_b : 피연산자2
 * @returns {boolean} : 반환값
 */
Calc_object.prototype.nonEqual = function (input_a,input_b) {
    if(isNumber(input_a) && isNumber(input_b)) {
        input_a = isMinMax(input_a)
        input_b = isMinMax(input_b)
        if(input_a !== input_b){
            return true;
        }
        else {
            return false;
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
