let target = require('../module/module_function')
const assert = require('assert');

describe.only('Final Calculator Test', function () {

    let test_case_input = [
        '2+1','2-1','3*3','3/1','1-3*2',
        'abs[3]','abs[-3]','sin[30]','abs[1-2]','if[1<2,1+2+3+4+2,2-3*2]',
        'sin[1+2+27]','abs[-1*sin[90]]','(1-(2-3))','if[1>3,abs[2+3],sin[cos[90]]]', '2+++1'
    ]


    let test_case_input2 = [
        '4.4.','45kkk','-(-1)-1)','5555555555555555555555555555555555555','(3)(3)',
        '3.','--1','1)','(','(1)(1)',
        '(-7)/--7','--7','7.','-(((-1))','(..)',
        '<ㅇㅅㅇ>','ㄴㅇㅁㅇㄱ(상상치도못한정체)', '0.0.1','0.1^^1','4+4^5',
        '4+(-)','(-0.^1)+////3','-5+-5','.3','(+1-(-3))',
        '(+1)', '13+233(2)','1+false','13+242(2)','((1))-1',
        '4.4.+2','(3)(3)+'
    ]

    let test_case_input3 = [
        'if[3!>=<4,1,2]','round[11,-5555555]','round[11,-25]','tan[90]','cos[90]',
        'cos[9999999990]','if[>false<,3,4]','RRRRRRRRRRROUND', 'YOU WIN!','WE WIN!',
        '1+abs[]','23.1+23.2.','((2))=12','(1)==','(2)false',
        '(2)-(-)','112312300-+22','ABCDEFG','IF[3>4=2,2,1]', 'asin[2]-[2]',
        'acos[(2)1]','(1)-(1)','AS[false,D]','AS[false]','if[3!>4=2,1,2]',
    ]

    let test_case_input4 = [
        '1+3+5/2/22/2/2/22/2/2/22/2/2/22/2', '1+1-1+0.00045004501+1+1.5-3', '11133-3-44/3/3/341','+3-2','+2+3',
        '12+0.666666666666*4-1-1*123+4/-12', '0.100000', '0.1*0.1*0.0000001*0.1*0.1', '(+1)', '0.01*0.0001*0.001+123123/12/2*12/11+2/3/42+123456/2/123+33333+(13+33)+2/45/1/2+123123+444'
    ]

    //////////////////////////////// output

    let test_case_output = [
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,true
    ]

    let test_case_output2 = [
        true,true,true,false,true,
        true,false,true,true,true,
        true,false,true,true,true,
        true,true,true, true,true,
        true,true,false,true,true,
        true,true, true,true,false,
        true,true
    ]

    let test_case_output3 = [
        true,true,true,true,false,
        false,true,true,true,true,
        true,true,true,true,true,
        true,true,true,true,true,
        true,false,true,true,true
    ]

    let test_case_output4 = [
        false,false,false,true,true,
        false,false,false,true,false
    ]

    //////////////////////////////// answers

    let test_case_answer = [
        '3','1','9','3','-5',
        '3','3','0.5','1','12',
        '0.5','1','-2','0',null
    ]

    let test_case_answer2 = [
        null,null,null,null,null,
        null,'1',null,null,null,
        '-1','7', null,null,null,
        null,null,null,null,null,
        null,null,'-10',null,'4',
        '1',null,null,null,'0',
        null,null
    ]

    let test_case_answer3 = [
        null,null,null,null,'0',
        '0',null,null,null,null,
        null,null,null,null,null,
        null,'112312278',null,null,null,
        null,'0',null,null,null,
    ]

    let test_case_answer4 = [
        '4.00000008338','0.50045004501', '11,129.9856631', '1','5',
        '-109.666666667','0.1','0.00000000001','1','163,044.391754'
    ]

    ////////////////////////////////


    for(let i=0;i<test_case_input.length;i++) {

        it('testCase : '+i, function () {
            let test = target.calculate(test_case_input[i]);
            let test2 = new target.Calc_object(test_case_input[i]);
            test2.parser();
            let error = test.isError === undefined ? false : test.isError
            assert.strictEqual(error, test_case_output[i]);
        });
    }

    for(let i=0;i<test_case_input2.length;i++) {
        it('testCase2 : '+i, function () {
            let test = target.calculate(test_case_input2[i]);
            let test2 = new target.Calc_object(test_case_input2[i]);
            test2.parser();
            test2.postfix_trans()
            let error = test.isError === undefined ? false : test.isError
            assert.strictEqual(error, test_case_output2[i]);
        });
    }

    for(let i=0;i<test_case_input3.length;i++) {

        it('testCase3 : '+i, function () {
            let test = target.calculate(test_case_input3[i]);
            let test3 = new target.Calc_object(test_case_input3[i]);
            let error = test.isError === undefined ? false : test.isError
            console.log(test3.get_parsed_data())
            console.log(test3.get_post_fix())
            console.log(test3.total_calculation())
            assert.strictEqual(error, test_case_output3[i]);
        });
    }

    for(let i=0;i<test_case_input4.length;i++) {

        it('testCase4 : '+i, function () {
            let test = target.calculate(test_case_input4[i]);
            let test4 = new target.Calc_object(test_case_input4[i]);
            let error = test.isError === undefined ? false : test.isError
            console.log(test4.get_parsed_data())
            console.log(test4.get_post_fix())
            console.log(test4.total_calculation())
            assert.strictEqual(error, test_case_output4[i]);
        });
    }

});



describe('Error Code Test', function () {

    // let test_case_input = [
    //     '1+++1','asin[90]','if[2,3,2]'
    // ]
    // let test_case_output = [
    //     'O-2','O-1','F-2'
    // ];

    let test_case_input = [
        'if[2,3,2]','if[3>1,2,1>3]', '1+++1','asin[90]','sin','1111122--22','1111122---22','2232[2323','2232[]2323'
    ]
    let test_case_output = [
        'F-2','F-2','O-2','O-1','F-4',,,'F-4','F-6'
    ];

    for(let i=0;i<test_case_input.length;i++) {
        it('index : '+i, function () {
            let test = target.calculate(test_case_input[i]);
            assert.strictEqual(test.errorCode, test_case_output[i]);
        });
    }

});


describe('Calculator', function () {

    let test_case_input = [
        '2+1','2-1','3*3','3/1','1-3*2','abs[3]','abs[-3]','sin[30]','abs[1-2]','if[1<2,1+2+3+4+2,2-3*2]','sin[1+2+27]','abs[-1*sin[90]]','(1-(2-3))','if[1>3,abs[2+3],sin[cos[90]]]','1+2+3*sin[2]+cos[3]','3333333333333+++++222','sin[2]+cos[3]'
    ]
    let test_case_output = [
        3,1,9,3,-5,3,3,0.5,1,12,0.5,1,2,0,4.103328024862077,NaN,1.033529031457075
    ];

    for(let i=0;i<test_case_input.length;i++) {
        it('index : '+i, function () {
            let test = new target.Calc_object(test_case_input[i]);
            test.parser()
            test.postfix_trans()
            console.log(test.get_parsed_data())
            console.log(test.get_post_fix())
            let result = test.total_calculation();
            assert.strictEqual(result, test_case_output[i]);
        });
    }

});


describe('Post_fix', function () {
    let test_case_input = [
        '2+1','15*(4+2)','1+3*if[2>3,2,1]'
    ]
    let test_case_output = [
        [2,1,'+'],[15,4,2,'+','*'],[1,3,'*',2,'if',3,2,1,'>','+']
    ];

    for(let i=0;i<test_case_input.length;i++) {
        it('Post_fix Number : '+i, function () {
            let test = new target.Calc_object(test_case_input[i]);
            test.parser()
            test.postfix_trans()
            assert.deepStrictEqual(test.get_post_fix(), test_case_output[i]);
        });
    }

});

describe('Index Test', function () {

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
        NaN,NaN,NaN,NaN,Infinity,NaN,NaN,NaN
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
    //test
    for(let i=0;i<test_case_input1.length;i++) {
        it('round ' + i, function () {
            assert.strictEqual(test.round(test_case_input1[i], test_case_input2[i]), test_case_output_round[i]);
        });
    }

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
