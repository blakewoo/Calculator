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

describe.only('One op Functions Test', function () {

    let test = new target.Calc_object();
    let test_case_input = [
        0,0.0000000000000000000000000000001,-0.0000000000000000000000000000001,100000000000000000000000000000000,-100000000000000000000000000000000,237,-23.1,157.1,30,45,90
    ]
    let test_case_output_abs = [
        0,0,0,Infinity,Infinity,237,23.1,157.1,30,45,90
    ];
    let test_case_output_root = [
        0,0,NaN,Infinity,NaN,15.394804318340652,NaN,12.533953885346794,5.477225575051661,6.708203932499369,9.486832980505138
    ];
    let test_case_output_sin = [
        0,0,0,Infinity,-Infinity,-0.838670567,-0.39233711,0.389123950,0.5,0.707106781,1
    ];
    let test_case_output_cos = [
        0,0,0,Infinity,-Infinity,-0.838670567,-0.39233711,0.389123950,0.5,0.707106781,1
    ];
    let test_case_output_tan = [
        '2','3','4','5','6','7'
    ];
    let test_case_output_asin = [
        '2','3','4','5','6','7'
    ];
    let test_case_output_acos = [
        '2','3','4','5','6','7'
    ];
    let test_case_output_atan = [
        '2','3','4','5','6','7'
    ];

    for(let i=0;i<test_case_input.length;i++) {
        it.only('abs '+i, function () {
            assert.strictEqual(test.abs(test_case_input[i]), test_case_output_abs[i]);
        });
    }
    for(let i=0;i<test_case_input.length;i++) {
        it.only('root '+i, function () {
            assert.strictEqual(test.root(test_case_input[i]), test_case_output_root[i]);
        });
    }
    for(let i=0;i<test_case_input.length;i++) {
        it.only('sin '+i, function () {
            assert.strictEqual(test.sin(test_case_input[i]), test_case_output_sin[i]);
        });
    }
    for(let i=0;i<test_case_input.length;i++) {
        it('cos '+i, function () {
            assert.strictEqual(test.cos(test_case_input[i]), test_case_output[i]);
        });
    }
    for(let i=0;i<test_case_input.length;i++) {
        it('tan '+i, function () {
            assert.strictEqual(test.tan(test_case_input[i]), test_case_output[i]);
        });
    }
    for(let i=0;i<test_case_input.length;i++) {
        it('asin '+i, function () {
            assert.strictEqual(test.asin(test_case_input[i]), test_case_output[i]);
        });
    }
    for(let i=0;i<test_case_input.length;i++) {
        it('acos '+i, function () {
            assert.strictEqual(test.acos(test_case_input[i]), test_case_output[i]);
        });
    }
    for(let i=0;i<test_case_input.length;i++) {
        it('atan '+i, function () {
            assert.strictEqual(test.atan(test_case_input[i]), test_case_output[i]);
        });
    }

});

describe.only('Two op Functions Test', function () {

    let test = new target.Calc_object();

    let test_case_input1 = [
        1
        ,
        ,null
        ,undefined
        ,1000000000000000000000000000000000000000000000000000000000000000
        ,0.00000000000000000000000000000000000000000000002
        ,-1000000000000000000000000000000000000000000000000000000000000000
        ,-0.00000000000000000000000000000000000000000000002
    ]
    let test_case_input2 = [
        0.00000000000000000000000000000000000000000000000002
        ,1000000000000000000000000000000000000000000000000000000000000000
        ,null
        ,undefined
        ,1
        ,
        ,-0.00000000000000000000000000000000000000000000002
        ,-1000000000000000000000000000000000000000000000000000000000000000
    ]
    let test_case_output_plus = [
        1,NaN,NaN,NaN,Infinity,NaN,-Infinity,-Infinity
    ];
    let test_case_output_minus = [
        1,NaN,NaN,NaN,Infinity,NaN,-Infinity,Infinity
    ];
    let test_case_output_mul = [
        0,NaN,NaN,NaN,Infinity,NaN,NaN,NaN
    ];
    let test_case_output_div = [
        Infinity,NaN,NaN,NaN,Infinity,NaN,NaN,NaN
    ];

    for(let i=0;i<test_case_input1.length;i++) {
        it('plus '+i, function () {
            assert.strictEqual(test.plus(test_case_input1[i],test_case_input2[i]), test_case_output_plus[i]);
        });
    }
    for(let i=0;i<test_case_input1.length;i++) {
        it('minus '+i, function () {
            assert.strictEqual(test.minus(test_case_input1[i],test_case_input2[i]), test_case_output_minus[i]);
        });
    }
    for(let i=0;i<test_case_input1.length;i++) {
        it('mul '+i, function () {
            assert.strictEqual(test.mul(test_case_input1[i],test_case_input2[i]), test_case_output_mul[i]);
        });
    }
    for(let i=0;i<test_case_input1.length;i++) {
        it('div ' + i, function () {
            assert.strictEqual(test.div(test_case_input1[i], test_case_input2[i]), test_case_output_div[i]);
        });
    }

});

describe('Three op Functions Test', function () {
    let test = new target.Calc_object();
    let test_case_input = [
        '2','3','4','5','6','7'
    ]
    let test_case_output = [
        '2','3','4','5','6','7'
    ];

    for(let i=0;i<test_case_input.length;i++) {
        it('sin '+i, function () {
            assert.strictEqual(test.if(test_case_input[i]), test_case_output[i]);
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
