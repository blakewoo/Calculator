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
    this.refine_data = {
        operation:[],
        numbers:[]
    }
}

/**
 * 입력 받은 데이터를 분해해서 연산자와 피연산자로 분리, 수식 에러까지 검출
 */
Calc_object.prototype.parser = function () {
    let raw_data = this.raw_data;

    let split_data = raw_data.split()
}

/**
 * 파싱된 데이터를 불러오고 싶을때 쓰는 함수
 * @returns {*|{numbers: [], operation: []}}
 */
Calc_object.prototype.get_parsed_data = function () {
    return this.refine_data;
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
    // 0이나 무한, 숫자 아닌 것 걸러내기
    // input_b에 자연수만 있는지 체크하기

    if(isNumber(input_a) && isNumber(input_b)) {
        return input_a.toFixed(input_b);
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
        console.log(degreeToRadian(input_a))
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
    if(isNumber(input_a)) {
        if(input_a<-1 || input_a>1) {
            return NaN;
        }
        else {
            return Math.atan(input_a)
        }
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
            return Math.asin(input_a)
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
            return Math.acos(input_a)
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
    if(input_a<Number('1e-20') && input_a>0) {
        input_a =0;
    }
    else if(input_a>-Number('1e-20') && input_a<0) {
        input_a =0;
    }
    else if(input_a>Number('1e+21')) {
        input_a = Infinity;
    }
    else if(input_a<-Number('1e+21')) {
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

module.exports.Calc_object = Calc_object;
