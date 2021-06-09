let target = require('../module/module_function')
const assert = require('assert');

describe('Post_fix', function () {
    let test_case_input = [
        '2+1'
    ]
    let test_case_output = [
        [2,'+',1]
    ];

    for(let i=0;i<test_case_input.length;i++) {
        it('Post_fix Number : '+i, function () {
            let test = new target.Calc_object(test_case_input[i]);
            test.parser()
            assert.deepStrictEqual(test.postfix_trans(), test_case_output[i]);
        });
    }

});

describe.only('Index Test', function () {

    let test_case_input = [
        '2+1'
    ]
    let test_case_output = [
        [0,1,2]
    ];

    for(let i=0;i<test_case_input.length;i++) {
        it('index : '+i, function () {
            let test = new target.Calc_object(test_case_input[i]);
            test.parser()
            console.log(test.get_parsed_index())
            assert.deepStrictEqual(test.get_parsed_index(), test_case_output[i]);
        });
    }

});


describe('Paser Test', function () {

    let test_case_input = [
        '2+1','3-1+2*3','1+(2+3)','if[1>3,3,2]','round[1,2]','root[2]','abs[1]','if[2>3,1,2]+3*2-1/round[3,2]','19+3/3','abs[3]+2', "1+22222222+2323+if[1>2,3,4]/2-42","if[2<=3,2,1]+42*abs[3]"
    ]
    let test_case_output = [
        [2,'+',1],[3,'-',1,'+',2,'*',3],[1,'+','(',2,'+',3,')'],['if',1,'>',3,3,2],['round',1,2],['root',2],['abs',1],['if',2,'>',3,1,2,'+',3,'*',2,'-',1,'/','round',3,2],[19,'+',3,'/',3],['abs',3,'+',2],[1,'+',22222222,'+',2323,'+','if',1,'>',2,3,4,'/',2,'-',42],['if',2,'<=',3,2,1,'+',42,'*','abs',3]
    ];
    let test_case_parsed_output = [
        ['Number','Operation','Number'],['Number','Operation','Number','Operation','Number','Operation','Number']
        ,['Number','Operation','small_left_bracket','Number','Operation','Number','small_right_bracket']
    ];

    for(let i=0;i<test_case_input.length;i++) {
        it('operation : '+i, function () {
            let test = new target.Calc_object(test_case_input[i]);
            test.parser()
            assert.deepStrictEqual(test.get_parsed_data(), test_case_output[i]);

        });
    }

    for(let i=0;i<3;i++) {
        it('parsed_operation : '+i, function () {
            let test = new target.Calc_object(test_case_input[i]);
            test.parser()
            assert.deepStrictEqual(test.get_parsed_type(), test_case_parsed_output[i]);

        });
    }

});

describe('One op Functions Test', function () {

    let test = new target.Calc_object();
    let test_case_input = [
        0,0.0000000000000000000000000000001,-0.0000000000000000000000000000001,
        100000000000000000000000000000000,-100000000000000000000000000000000,237,
        -23.1,157.1,30,
        45,90
    ]
    let test_case_output_abs = [
        0,0,0,Infinity,Infinity,237,23.1,157.1,30,45,90
    ];
    let test_case_output_root = [
        0,0,NaN,Infinity,NaN,15.394804318340652,NaN,12.533953885346794,5.477225575051661,6.708203932499369,9.486832980505138
    ];
    let test_case_output_sin = [
        0,0,0,NaN,NaN,-0.838670567945424,-0.39233711660356146,0.38912395014020634,0.49999999999999994,0.7071067811865475,1
    ];
    let test_case_output_cos = [
        1,1,1,NaN,NaN,-0.544639035015027,0.9198214973217377,-0.9211854055657211,0.8660254037844387,0.7071067811865476,6.123233995736766e-17
    ];
    let test_case_output_tan = [
        0,0,0,Infinity,-Infinity,Infinity,-0.42653614613915547,Infinity,0.57735026918962576450,0.9999999999999999,Infinity
    ];
    let test_case_output_asin = [
        0,0,0,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN
    ];
    let test_case_output_acos = [
        90,90,90,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN
    ];
    let test_case_output_atan = [
        0,0,0,90,-90,89.7582470907319,-87.52121089142167,89.6352959535598, 88.09084756700362,88.72696997994329,89.36340642403653
    ];

    for(let i=0;i<test_case_input.length;i++) {
        it('abs '+i, function () {
            assert.strictEqual(test.abs(test_case_input[i]), test_case_output_abs[i]);
        });
    }
    for(let i=0;i<test_case_input.length;i++) {
        it('root '+i, function () {
            assert.strictEqual(test.root(test_case_input[i]), test_case_output_root[i]);
        });
    }
    for(let i=0;i<test_case_input.length;i++) {
        it('sin '+i, function () {
            assert.strictEqual(test.sin(test_case_input[i]), test_case_output_sin[i]);
        });
    }
    for(let i=0;i<test_case_input.length;i++) {
        it('cos '+i, function () {
            assert.strictEqual(test.cos(test_case_input[i]), test_case_output_cos[i]);
        });
    }
    for(let i=0;i<test_case_input.length;i++) {
        it('tan '+i, function () {
            assert.strictEqual(test.tan(test_case_input[i]), test_case_output_tan[i]);
        });
    }
    for(let i=0;i<test_case_input.length;i++) {
        it('asin '+i, function () {
            assert.strictEqual(test.asin(test_case_input[i]), test_case_output_asin[i]);
        });
    }
    for(let i=0;i<test_case_input.length;i++) {
        it('acos '+i, function () {
            assert.strictEqual(test.acos(test_case_input[i]), test_case_output_acos[i]);
        });
    }
    for(let i=0;i<test_case_input.length;i++) {
        it('atan '+i, function () {
            assert.strictEqual(test.atan(test_case_input[i]), test_case_output_atan[i]);
        });
    }

});

describe('Two op Functions Test', function () {

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

    let test_case_output_round = [
        Infinity,NaN,NaN,NaN,Infinity,NaN,NaN,NaN
    ]


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
    // //test
    // for(let i=0;i<test_case_input1.length;i++) {
    //     it('round ' + i, function () {
    //         assert.strictEqual(test.round(test_case_input1[i], test_case_input2[i]), test_case_output_round[i]);
    //     });
    // }

});

describe('Three op Functions Test', function () {
    let test = new target.Calc_object();
    let test_case_input1 = [
        '1<1','3>2','4<=4','2>=5','1=6','7','2!=223','1<1'
    ]
    let test_case_input2 = [
        1,1,1,1,1,1,1,"d"
    ]
    let test_case_input3 = [
        2,2,2,2,2,2,2,2
    ]
    let test_case_output = [
        2,1,1,2,2,NaN,1,2
    ];


    for(let i=0;i<test_case_input1.length;i++) {
        it('if '+i, function () {
            assert.strictEqual(test.if(test_case_input1[i],test_case_input2[i],test_case_input3[i]), test_case_output[i]);
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

describe('Subfunction test', function () {
    let test_case_input = [
        '2','3','4','5','6','7'
    ]
    let test_case_output = [
        '2','3','4','5','6','7'
    ];

    for(let i=0;i<6;i++) {
        it('subfunction'+i, function () {

        });
    }

});
