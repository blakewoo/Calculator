let target = require('../module/module_function').calculate
const assert = require('assert');


describe('App test', function () {
    let test_case_input = [
        '2','3','4','5','6','7'
    ]
    let test_case_output = [
        '2','3','4','5','6','7'
    ];

    for(let i=0;i<6;i++) {
        it('Good for you'+i, function () {
            assert.strictEqual(target(test_case_input[i]), test_case_output[i]);
        });
    }

});
