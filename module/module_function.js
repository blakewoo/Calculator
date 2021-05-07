
exports.calculate = function (data) {

    // let input = data;
    // let middle_data = parser(input);
    let result = data.toString();
    //
    // result = final_calculate(middle_data);

    return result;
}

let Calc_object = function(raw_data) {
    this.raw_data = raw_data;
    this.refine_data = {
        operation:[],
        numbers:[]
    }
}

Calc_object.prototype.parser = function () {
    let raw_data = this.raw_data;

    let split_data = raw_data.split()
}

Calc_object.prototype.get_parsed_data = function () {
    return this.refine_data;
}

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

Calc_object.prototype.if = function (input_a,input_b,input_c) {
    // 정규식으로 적절한 값 예외처리, 적절하지 않으면 NaN 반환

    if(input_a) {
        return input_b;
    }
    else {
        return input_c;
    }
}

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

Calc_object.prototype.round = function (input_a,input_b) {
    // 0이나 무한, 숫자 아닌 것 걸러내기
    return input_a.toFixed(input_b);
}

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

// 삼각함수의 경우 각도 입력
Calc_object.prototype.sin = function (input_a) {
    if(isNumber(input_a)) {
        input_a = isMinMax(input_a);
        return Math.sin(radianToDegree(input_a));
    }
    else {
        return NaN;
    }

}

Calc_object.prototype.cos = function (input_a) {
    if(isNumber(input_a)) {
        input_a=isMinMax(input_a)
        return Math.cos(radianToDegree(input_a));
    }
    else {
        return NaN;
    }
}

Calc_object.prototype.tan = function (input_a) {
    if(isNumber(input_a)) {
        input_a=isMinMax(input_a)
        return Math.tan(radianToDegree(input_a));
    }
    else {
        return NaN;
    }
}

// 탄젠트 역함수 - 무한, 0, 음수 예외처리 필수
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

function isNumber (input_a) {
    if(input_a===null) {
        return NaN;
    }
    else {
        return !isNaN(input_a)
    }
}

function radianToDegree(input_a) {
    const pi = Math.PI;
    return input_a*(180/pi);
}

module.exports.Calc_object = Calc_object;
