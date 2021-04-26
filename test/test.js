let target = require('../module/module_function')
const assert = require('assert');


describe('Paser Test', function () {
    let test_case_input = [
        '2','3','4','5','6','7'
    ]
    let test_case_output = [
        '2','3','4','5','6','7'
    ];

    for(let i=0;i<6;i++) {
        it('Good for you'+i, function () {
            assert.strictEqual(target.calculate(test_case_input[i]), test_case_output[i]);
        });
    }

});

describe('One op Functions Test', function () {
    let test_case_input = [
        '2','3','4','5','6','7'
    ]
    let test_case_output = [
        '2','3','4','5','6','7'
    ];

    for(let i=0;i<6;i++) {
        it('Good for you'+i, function () {
            assert.strictEqual(target.Calc_object.abs(test_case_input[i]), test_case_output[i]);
        });
    }

});

describe.only('Two op Functions Test', function () {
    let test_case_input1 = [
        '1','',null,undefined,'1000000000000000000000000000000000000000000000000000000000000000','0.00000000000000000000000000000000000000000000002'
    ]
    let test_case_input2 = [
        '22','2','4','5','6','7'
    ]
    let test_case_output_plus = [
        '23',NaN,NaN,NaN,Infinity,""
    ];
    let test_case_output_minus = [
        '2','3','4','5','6','7'
    ];
    let test_case_output_mul = [
        '2','3','4','5','6','7'
    ];
    let test_case_output_div = [
        '2','3','4','5','6','7'
    ];

    for(let i=0;i<test_case_input1.length;i++) {
        it('plus '+i, function () {
            assert.strictEqual(target.Calc_object.plus(test_case_input1[i],test_case_input2[i]), test_case_output[i]);
        });
        it('minus '+i, function () {
            assert.strictEqual(target.Calc_object.plus(test_case_input1[i],test_case_input2[i]), test_case_output[i]);
        });
        it('mul '+i, function () {
            assert.strictEqual(target.Calc_object.plus(test_case_input1[i],test_case_input2[i]), test_case_output[i]);
        });
        it('div '+i, function () {
            assert.strictEqual(target.Calc_object.plus(test_case_input1[i],test_case_input2[i]), test_case_output[i]);
        });
    }

});

describe('Three op Functions Test', function () {
    let test_case_input = [
        '2','3','4','5','6','7'
    ]
    let test_case_output = [
        '2','3','4','5','6','7'
    ];

    for(let i=0;i<6;i++) {
        it('Good for you'+i, function () {
            assert.strictEqual(target.Calc_object.plus(test_case_input[i]), test_case_output[i]);
        });
    }

});

describe('Calculator Test', function () {
    let test_case_input = [
        '2','3','4','5','6','7'
    ]
    let test_case_output = [
        '2','3','4','5','6','7'
    ];

    for(let i=0;i<6;i++) {
        it('Good for you'+i, function () {
            assert.strictEqual(target.calculate(test_case_input[i]), test_case_output[i]);
        });
    }

});