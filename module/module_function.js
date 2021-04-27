
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

}

Calc_object.prototype.abs = function (input_a) {

}

Calc_object.prototype.round = function (input_a,input_b) {

}

Calc_object.prototype.sin = function (input_a) {

}

Calc_object.prototype.cos = function (input_a) {

}
Calc_object.prototype.tan = function (input_a) {

}
Calc_object.prototype.atan = function (input_a) {

}
Calc_object.prototype.asin = function (input_a) {

}
Calc_object.prototype.acos = function (input_a) {

}

Calc_object.prototype.root = function (input_a) {

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

module.exports.Calc_object = Calc_object;