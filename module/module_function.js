
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

}

Calc_object.prototype.get_parsing_data = function () {
    return this.refine_data;
}

Calc_object.prototype.plus =function (input_a,input_b) {
    return Number(input_a+input_b);
}

Calc_object.prototype.minus=function(input_a,input_b) {
    return Number(input_a-input_b);
}

Calc_object.prototype.mul = function(input_a,input_b) {
    if(input_a*input_b === Infinity) {
        return Infinity;
    }
    else {
        return Number(input_a*input_b);
    }
}

Calc_object.prototype.div = function(input_a,input_b) {
    if(input_b!== 0) {
        return Number(input_a+input_b)
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
Calc_object.prototype.arc_tan = function (input_a) {

}
Calc_object.prototype.arc_sin = function (input_a) {

}
Calc_object.prototype.arc_cos = function (input_a) {

}


module.exports.Calc_object = Calc_object;